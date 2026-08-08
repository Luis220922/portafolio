import { events } from '../data';

export default function Events() {
  return (
    <section id="events" className="section section-sunk">
      <div className="wrap">
        <header className="section-head" data-reveal>
          <span className="section-index">04</span>
          <h2 className="display section-title">Eventos</h2>
          <p className="section-note">
            Congresos y encuentros de la comunidad tecnológica a los que he asistido.
          </p>
        </header>

        <ol data-reveal>
          {events.map(event => (
            <li key={event.id} className="event">
              <figure className="event-figure">
                <img
                  src={event.image}
                  alt={event.title}
                  loading="lazy"
                  decoding="async"
                  style={{ objectPosition: event.objectPosition }}
                />
              </figure>

              <div className="event-body">
                <p className="event-meta">
                  <span>{event.date}</span> — {event.location}
                </p>
                <h3 className="event-title">{event.title}</h3>
                <p className="event-desc">{event.description}</p>
                <ul className="tech-list">
                  {event.tags.map(tag => (
                    <li key={tag}>{tag}</li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
