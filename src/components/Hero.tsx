import { ArrowDown, FileText } from 'lucide-react';

export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="wrap hero-grid">
        <div className="hero-lead">
          <p className="eyebrow">Luis Rivera López — Costa Rica</p>
          <h1 className="display hero-title">
            Construyo software que llega a <em>producción</em>.
          </h1>
        </div>

        <div className="hero-side">
          <p className="prose">
            Estudiante de último año de Informática Empresarial en la Universidad de Costa Rica.
            Trabajo entre el backend y el frontend, y últimamente en agentes de IA con herramientas
            reales. Busco mi práctica profesional.
          </p>
        </div>

        <div className="hero-actions">
          <a href="#projects" className="btn">
            Ver proyectos <ArrowDown size={15} />
          </a>
          <a href="/cv.pdf" target="_blank" rel="noreferrer" className="btn btn-quiet">
            <FileText size={15} /> Currículum
          </a>
        </div>

        <dl className="hero-facts">
          <div className="fact">
            <dt>Enfoque</dt>
            <dd>Backend e IA aplicada</dd>
          </div>
          <div className="fact">
            <dt>Estudios</dt>
            <dd>Informática Empresarial, UCR</dd>
          </div>
          <div className="fact">
            <dt>Disponibilidad</dt>
            <dd>Práctica profesional</dd>
          </div>
          <div className="fact">
            <dt>Escribo en</dt>
            <dd>Python, Java, TypeScript</dd>
          </div>
        </dl>
      </div>
    </section>
  );
}
