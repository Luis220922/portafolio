import { GithubIcon, LinkedinIcon } from './icons';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer-grid">
          <div className="footer-brand">
            <a href="#top" className="wordmark">
              Luis Rivera<span>.</span>
            </a>
            <p>
              ¿Buscás a alguien para tu equipo o querés comentar alguno de estos proyectos? Escribime
              y conversamos.
            </p>
          </div>

          <div className="footer-links">
            <a
              className="link link-arrow"
              href="https://github.com/Luis220922"
              target="_blank"
              rel="noreferrer"
            >
              <GithubIcon size={14} /> GitHub
            </a>
            <a
              className="link link-arrow"
              href="https://www.linkedin.com/in/luis-rivera-l%C3%B3pez-490130276/"
              target="_blank"
              rel="noreferrer"
            >
              <LinkedinIcon size={14} /> LinkedIn
            </a>
            <a className="link" href="mailto:luisriveralopez304@gmail.com">
              luisriveralopez304@gmail.com
            </a>
          </div>
        </div>

        <div className="footer-base">
          <span>© {new Date().getFullYear()} Luis Rivera López</span>
          <span>React · TypeScript · Vite</span>
        </div>
      </div>
    </footer>
  );
}
