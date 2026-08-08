import { useState } from 'react';
import { projects } from '../data';
import { GithubIcon } from './icons';

const filters = ['Todos', 'Full Stack', 'Backend', 'IA'];

const slug = (value: string) => value.toLowerCase().replace(/\s+/g, '-');

export default function Projects() {
  const [active, setActive] = useState('Todos');

  const visible = active === 'Todos' ? projects : projects.filter(p => p.category === active);

  return (
    <section id="projects" className="section section-sunk">
      <div className="wrap">
        <header className="section-head" data-reveal>
          <span className="section-index">02</span>
          <h2 className="display section-title">Proyectos</h2>
          <p className="section-note">
            Cinco proyectos, casi todos en equipo. Cada uno enlaza a su repositorio.
          </p>
        </header>

        <div className="filter-row" role="group" aria-label="Filtrar proyectos por área">
          {filters.map(filter => (
            <button
              key={filter}
              id={`filter-${slug(filter)}`}
              className={`filter-btn${active === filter ? ' is-active' : ''}`}
              onClick={() => setActive(filter)}
              aria-pressed={active === filter}
            >
              {filter}
            </button>
          ))}
        </div>

        <ol className="project-list">
          {visible.map((project, index) => (
            <li key={project.id} className="project">
              <span className="project-index">{String(index + 1).padStart(2, '0')}</span>

              <div className="project-body">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.description}</p>
              </div>

              <div className="project-aside">
                <span className="project-cat">{project.category}</span>

                <ul className="tech-list">
                  {project.tags.map(tag => (
                    <li key={tag}>{tag}</li>
                  ))}
                </ul>

                {project.status && <span className="project-status">{project.status}</span>}

                <div className="project-links">
                  {project.github && (
                    <a
                      className="link link-arrow"
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      id={`project-github-${project.id}`}
                    >
                      <GithubIcon size={13} /> Repositorio
                    </a>
                  )}
                  {project.demo && (
                    <a
                      className="link link-arrow"
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                      id={`project-demo-${project.id}`}
                    >
                      Demo
                    </a>
                  )}
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
