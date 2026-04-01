const skills = [
  'Design Systems', '0→1 Products', 'UX Architecture', 'Vibe Coding',
  'Figma', 'React', 'AI Tools', 'Systems Thinking', 'Prototyping',
  'User Research', 'Enterprise UX', 'Interaction Design',
];

export default function Skills() {
  const repeated = [...skills, ...skills];

  return (
    <section className="skills-section">
      <div className="skills-track">
        {repeated.map((skill, i) => (
          <div className="skill-item" key={i}>
            <div className="skill-divider" />
            <span>{skill}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
