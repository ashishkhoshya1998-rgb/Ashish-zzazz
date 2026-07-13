export default function HistoryLog({ activity, onDelete }) {
  return (
    <section className="history-section">
      <h2 className="section-title-sm">Recent Activity</h2>
      {activity.length === 0 ? (
        <p className="history-empty">No entries yet — start logging your health data above.</p>
      ) : (
        <ul className="history-list">
          {activity.map((item) => (
            <li key={`${item.metric}-${item.date}`} className="history-item">
              <span className="history-emoji">{item.emoji}</span>
              <div className="history-info">
                <span className="history-label">{item.label}</span>
                <span className="history-date">{item.date}</span>
              </div>
              <span className="history-value">
                {item.metric === 'mood' ? item.value : `${item.value} ${item.unit}`}
              </span>
              <button
                className="history-delete"
                onClick={() => onDelete(item.metric, item.date)}
                aria-label="Delete entry"
              >
                ✕
              </button>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
