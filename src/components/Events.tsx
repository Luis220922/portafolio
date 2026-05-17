import { MapPin, Calendar } from 'lucide-react';
import { events } from '../data';

export default function Events() {
  return (
    <section id="events" className="section">
      <div className="section-header">
        <div className="section-badge">Eventos</div>
        <h2>Experiencias y Eventos</h2>
        <p>Conferencias, congresos y eventos académicos que han enriquecido mi trayectoria profesional.</p>
      </div>

      <div className="events-grid">
        {events.map(event => (
          <article key={event.id} className="glass-card event-card">
            <div className="event-image-wrapper">
              <img
                src={event.image}
                alt={event.title}
                className="event-image"
                loading="lazy"
                style={{ objectPosition: event.objectPosition }}
              />
              <div className="event-image-overlay" />
            </div>
            <div className="event-body">
              <div className="event-meta">
                <span className="event-meta-item">
                  <MapPin size={14} />
                  {event.location}
                </span>
                <span className="event-meta-item">
                  <Calendar size={14} />
                  {event.date}
                </span>
              </div>
              <h3 className="event-title">{event.title}</h3>
              <p className="event-desc">{event.description}</p>
              <div className="event-tags">
                {event.tags.map(t => <span key={t} className="tag">{t}</span>)}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
