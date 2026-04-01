const items = [
  'Product Design', 'UX Strategy', 'Brand Identity', 'UI Development',
  'Design Systems', 'Prototyping', 'User Research', 'Interaction Design',
];

export default function Marquee() {
  const repeated = [...items, ...items];

  return (
    <section className="marquee-section">
      <div className="marquee-track">
        {repeated.map((item, i) => (
          <span key={i}>
            {item}
            <span className="dot" />
          </span>
        ))}
      </div>
    </section>
  );
}
