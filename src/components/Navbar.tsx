import { useState, useEffect } from 'react';
import { Moon, Sun, Menu, X } from 'lucide-react';

const navLinks = [
  { href: '#about', label: 'Sobre Mí' },
  { href: '#skills', label: 'Habilidades' },
  { href: '#projects', label: 'Proyectos' },
  { href: '#events', label: 'Eventos' },
  { href: '#contact', label: 'Contacto' },
];

interface NavbarProps {
  theme: string;
  toggleTheme: () => void;
}

export default function Navbar({ theme, toggleTheme }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
      <div className="navbar-inner">
        <a href="#" className="navbar-logo">
          <span className="gradient-text">Luis</span>
          <span>.dev</span>
        </a>

        <ul className="navbar-links">
          {navLinks.map(link => (
            <li key={link.href}>
              <a href={link.href} className="navbar-link">{link.label}</a>
            </li>
          ))}
        </ul>

        <div className="navbar-actions">
          <button id="theme-toggle" className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button id="menu-toggle" className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="mobile-menu">
          {navLinks.map(link => (
            <a key={link.href} href={link.href} className="mobile-link" onClick={() => setMenuOpen(false)}>
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
