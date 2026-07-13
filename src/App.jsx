import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import StatCard from './components/StatCard';
import SleepCard from './components/SleepCard';
import WeightCard from './components/WeightCard';
import MoodCard from './components/MoodCard';
import TrendsSection from './components/TrendsSection';
import HistoryLog from './components/HistoryLog';
import GoalsModal from './components/GoalsModal';
import { useHealthData } from './hooks/useHealthData';

function App() {
  const health = useHealthData();
  const [goalsOpen, setGoalsOpen] = useState(false);

  const waterPct = (health.todayWater / health.goals.water) * 100;
  const stepsPct = (health.todaySteps / health.goals.steps) * 100;
  const sleepPct = ((health.todaySleep ?? 0) / health.goals.sleep) * 100;

  return (
    <>
      <Navbar onOpenGoals={() => setGoalsOpen(true)} />

      <main className="tracker-main">
        <Header waterPct={waterPct} stepsPct={stepsPct} sleepPct={sleepPct} />

        <section className="stats-grid">
          <StatCard
            i={0}
            emoji="💧"
            label="Water Intake"
            value={health.todayWater}
            unit="glasses"
            goal={health.goals.water}
            color="var(--water)"
            quickAdds={[1, 2]}
            onAdd={health.addWater}
          />
          <StatCard
            i={1}
            emoji="👣"
            label="Steps"
            value={health.todaySteps}
            unit="steps"
            goal={health.goals.steps}
            color="var(--steps)"
            quickAdds={[500, 1000]}
            onAdd={health.addSteps}
          />
          <SleepCard i={2} value={health.todaySleep} goal={health.goals.sleep} onSet={health.setSleep} />
          <WeightCard i={3} value={health.todayWeight} history={health.weightHistory} onSet={health.setWeight} />
          <MoodCard i={4} value={health.todayMood} onSet={health.setMood} />
        </section>

        <TrendsSection getSeries={health.getSeries} goals={health.goals} />

        <HistoryLog activity={health.recentActivity} onDelete={health.deleteEntry} />
      </main>

      <footer className="tracker-footer">
        Built with care for a healthier <span>you</span>. Your data stays on this device.
      </footer>

      <GoalsModal
        open={goalsOpen}
        onClose={() => setGoalsOpen(false)}
        goals={health.goals}
        onSave={health.updateGoals}
        onReset={health.resetAll}
      />
    </>
  );
}

export default App;
