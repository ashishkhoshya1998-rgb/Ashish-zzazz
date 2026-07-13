import { useState, useEffect, useCallback, useMemo } from 'react';

const STORAGE_KEY = 'health-tracker-data';

const DEFAULT_GOALS = {
  water: 8,
  steps: 8000,
  sleep: 8,
};

const METRICS = ['water', 'steps', 'sleep', 'weight', 'mood'];

const ACTIVITY_META = {
  water: { emoji: '💧', label: 'Water', unit: 'glasses' },
  steps: { emoji: '👣', label: 'Steps', unit: 'steps' },
  sleep: { emoji: '🌙', label: 'Sleep', unit: 'hrs' },
  weight: { emoji: '⚖️', label: 'Weight', unit: 'kg' },
  mood: { emoji: '🙂', label: 'Mood', unit: '' },
};

function emptyData() {
  return {
    goals: { ...DEFAULT_GOALS },
    logs: { water: {}, steps: {}, sleep: {}, weight: {}, mood: {} },
  };
}

export function todayKey(date = new Date()) {
  return date.toLocaleDateString('en-CA');
}

function loadData() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return emptyData();
    const parsed = JSON.parse(raw);
    const base = emptyData();
    return {
      goals: { ...base.goals, ...parsed.goals },
      logs: {
        water: parsed.logs?.water ?? {},
        steps: parsed.logs?.steps ?? {},
        sleep: parsed.logs?.sleep ?? {},
        weight: parsed.logs?.weight ?? {},
        mood: parsed.logs?.mood ?? {},
      },
    };
  } catch {
    return emptyData();
  }
}

export function useHealthData() {
  const [data, setData] = useState(loadData);
  const today = todayKey();

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  }, [data]);

  const addToToday = useCallback((metric, delta) => {
    setData((prev) => {
      const current = prev.logs[metric][today] ?? 0;
      const next = Math.max(0, +(current + delta).toFixed(2));
      return {
        ...prev,
        logs: { ...prev.logs, [metric]: { ...prev.logs[metric], [today]: next } },
      };
    });
  }, [today]);

  const setToday = useCallback((metric, value) => {
    setData((prev) => ({
      ...prev,
      logs: { ...prev.logs, [metric]: { ...prev.logs[metric], [today]: value } },
    }));
  }, [today]);

  const deleteEntry = useCallback((metric, date) => {
    setData((prev) => {
      const next = { ...prev.logs[metric] };
      delete next[date];
      return { ...prev, logs: { ...prev.logs, [metric]: next } };
    });
  }, []);

  const updateGoals = useCallback((partial) => {
    setData((prev) => ({ ...prev, goals: { ...prev.goals, ...partial } }));
  }, []);

  const resetAll = useCallback(() => {
    setData(emptyData());
  }, []);

  const last7Days = useMemo(() => {
    const days = [];
    for (let i = 6; i >= 0; i--) {
      const d = new Date();
      d.setDate(d.getDate() - i);
      days.push({
        date: todayKey(d),
        label: d.toLocaleDateString('en-US', { weekday: 'short' }),
      });
    }
    return days;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [today]);

  const getSeries = useCallback((metric) => {
    return last7Days.map((d) => ({
      ...d,
      value: data.logs[metric][d.date] ?? null,
    }));
  }, [data, last7Days]);

  const recentActivity = useMemo(() => {
    const entries = [];
    METRICS.forEach((metric) => {
      Object.entries(data.logs[metric]).forEach(([date, value]) => {
        entries.push({ metric, date, value, ...ACTIVITY_META[metric] });
      });
    });
    return entries.sort((a, b) => (a.date < b.date ? 1 : -1)).slice(0, 12);
  }, [data]);

  return {
    goals: data.goals,
    today,
    todayWater: data.logs.water[today] ?? 0,
    todaySteps: data.logs.steps[today] ?? 0,
    todaySleep: data.logs.sleep[today] ?? null,
    todayWeight: data.logs.weight[today] ?? null,
    todayMood: data.logs.mood[today] ?? null,
    weightHistory: data.logs.weight,
    addWater: (delta) => addToToday('water', delta),
    addSteps: (delta) => addToToday('steps', delta),
    setSleep: (hours) => setToday('sleep', hours),
    setWeight: (kg) => setToday('weight', kg),
    setMood: (mood) => setToday('mood', mood),
    updateGoals,
    resetAll,
    deleteEntry,
    getSeries,
    recentActivity,
  };
}
