import { useEffect } from 'react';

/**
 * Descubre los elementos marcados con `data-reveal` y les añade `is-visible`
 * la primera vez que entran en pantalla. Sólo se aplica a bloques estáticos:
 * los nodos que se montan después (por ejemplo al filtrar proyectos) no pasan
 * por aquí y se ven de una vez.
 */
export function useReveal() {
  useEffect(() => {
    const nodes = Array.from(document.querySelectorAll<HTMLElement>('[data-reveal]'));

    if (!('IntersectionObserver' in window)) {
      nodes.forEach(node => node.classList.add('is-visible'));
      return;
    }

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        });
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.05 }
    );

    nodes.forEach(node => observer.observe(node));
    return () => observer.disconnect();
  }, []);
}
