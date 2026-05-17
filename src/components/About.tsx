import { FileText } from 'lucide-react';
import { skills } from '../data';

const categories = ['Frontend', 'Backend', 'Herramientas'];

const categoryColors: Record<string, string> = {
  Frontend: '#3b82f6',
  Backend: '#8b5cf6',
  Herramientas: '#06b6d4',
};

export default function About() {
  return (
    <section id="about" className="section">
      <div className="about-grid">
        <div className="about-text">
          <div className="section-badge">Sobre Mí</div>
          <h2>Desarrollador apasionado por crear con propósito</h2>
          <p>
            Soy estudiante de último año en Informática Empresarial en la Universidad de Costa Rica y me apasiona transformar ideas en soluciones tecnológicas.
            Me enfoco en el desarrollo de software, especialmente en aplicaciones web,
            utilizando herramientas como Java, React y TypeScript.
            Disfruto enfrentar retos, aprender constantemente y mejorar mis habilidades técnicas.
          </p>
          <p style={{ marginTop: '16px' }}>
            Me motiva resolver problemas complejos con soluciones elegantes, colaborar en
            equipos multidisciplinarios y participar en eventos académicos y de la
            comunidad tecnológica latinoamericana.
          </p>
          <div style={{ marginTop: '24px' }}>
            <a
              href="/cv.pdf"
              target="_blank"
              rel="noreferrer"
              className="btn-primary"
              style={{ display: 'inline-flex', gap: '8px', alignItems: 'center' }}
            >
              <FileText size={16} /> Descargar mi CV (PDF)
            </a>
          </div>
          <div className="about-stats" style={{ marginTop: '32px' }}>
            {[
              { value: '4+', label: 'Proyectos acádemicos' },
              { value: '1+', label: 'Eventos' },
              { value: '3+', label: 'Años aprendiendo' },
            ].map(s => (
              <div key={s.label} className="stat-card">
                <span className="stat-value gradient-text">{s.value}</span>
                <span className="stat-label">{s.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div id="skills" className="skills-panel">
          <div className="section-badge">Habilidades</div>
          {categories.map(cat => (
            <div key={cat} className="skill-category">
              <h4 style={{ color: categoryColors[cat], fontSize: '0.85rem', fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '12px' }}>
                {cat}
              </h4>
              <div className="skill-tags">
                {skills.filter(s => s.category === cat).map(skill => (
                  <span key={skill.name} className="skill-tag" style={{ '--cat-color': categoryColors[cat] } as React.CSSProperties}>
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
