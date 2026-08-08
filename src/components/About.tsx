import { FileText } from 'lucide-react';
import { skills } from '../data';

const categories = ['Frontend', 'Backend', 'Herramientas'];

export default function About() {
  return (
    <section id="about" className="section">
      <div className="wrap">
        <header className="section-head" data-reveal>
          <span className="section-index">01</span>
          <h2 className="display section-title">Sobre mí</h2>
          <p className="section-note">
            Lo que me interesa, cómo trabajo y las herramientas con las que me muevo cómodo.
          </p>
        </header>

        <div className="about-grid" data-reveal>
          <div className="about-prose">
            <p className="prose">
              Estudio Informática Empresarial en la Universidad de Costa Rica y estoy en el último
              año. Me metí a esto porque me gusta ver una idea convertida en algo que la gente
              realmente usa, y esa sigue siendo la parte que más disfruto.
            </p>
            <p className="prose">
              Casi todo lo que he construido ha sido en equipo: APIs en Spring Boot y FastAPI,
              interfaces en React y Next.js, sistemas distribuidos con colas y mensajería. El último
              año me concentré en IA aplicada — no en demos, sino en agentes que ejecutan acciones
              reales y cuyo comportamiento se puede medir.
            </p>
            <p className="prose">
              Fuera del código, sigo de cerca la comunidad tecnológica latinoamericana: conferencias,
              congresos académicos y encuentros donde se aprende de gente que ya resolvió lo que uno
              apenas está empezando a entender.
            </p>

            <div className="about-cta">
              <a href="/cv.pdf" target="_blank" rel="noreferrer" className="btn btn-quiet">
                <FileText size={15} /> Currículum en PDF
              </a>
            </div>
          </div>

          <dl className="about-skills">
            {categories.map(category => (
              <div key={category} className="skill-row">
                <dt>{category}</dt>
                <dd>
                  {skills
                    .filter(skill => skill.category === category)
                    .map(skill => (
                      <span key={skill.name}>{skill.name}</span>
                    ))}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
