import { timeline } from '../data';

export default function Timeline() {
  return (
    <section id="timeline" className="section">
      <div className="wrap">
        <header className="section-head" data-reveal>
          <span className="section-index">03</span>
          <h2 className="display section-title">Trayectoria</h2>
          <p className="section-note">
            De los primeros programas en la universidad a los proyectos de hoy.
          </p>
        </header>

        <ol data-reveal>
          {timeline.map(item => (
            <li key={item.id} className="timeline-item">
              <span className="timeline-year">{item.year}</span>
              <div className="timeline-body">
                <h3 className="timeline-title">{item.title}</h3>
                <p className="timeline-sub">{item.subtitle}</p>
              </div>
              <p className="timeline-desc">{item.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
