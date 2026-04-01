const skills = [
  'React', 'Figma', 'Product Design', 'Branding', 'Prototyping',
  'Design Systems', 'UX Research', 'Motion Design', 'Webflow', 'Framer',
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
