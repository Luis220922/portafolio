import { useState } from 'react';
import type { ChangeEvent, SyntheticEvent } from 'react';
import { Check, Send } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './icons';

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/mbdbjjnl';

interface FormState {
  name: string;
  email: string;
  message: string;
}

const EMPTY: FormState = { name: '', email: '', message: '' };

type Status = 'idle' | 'sending' | 'sent' | 'error';

export default function Contact() {
  const [form, setForm] = useState<FormState>(EMPTY);
  const [errors, setErrors] = useState<Partial<FormState>>({});
  const [status, setStatus] = useState<Status>('idle');

  const validate = (): boolean => {
    const found: Partial<FormState> = {};
    if (!form.name.trim()) found.name = 'Escribí tu nombre.';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) found.email = 'Ese correo no parece válido.';
    if (form.message.trim().length < 10) found.message = 'Contame un poco más (mínimo 10 caracteres).';
    setErrors(found);
    return Object.keys(found).length === 0;
  };

  const update =
    (field: keyof FormState) => (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setForm(current => ({ ...current, [field]: event.target.value }));

  const handleSubmit = async (event: SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (status === 'sending' || !validate()) return;

    setStatus('sending');
    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(form),
      });

      if (!response.ok) {
        setStatus('error');
        return;
      }

      setForm(EMPTY);
      setStatus('sent');
    } catch {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="section">
      <div className="wrap">
        <header className="section-head" data-reveal>
          <span className="section-index">05</span>
          <h2 className="display section-title">Contacto</h2>
          <p className="section-note">
            Escribime por el formulario o, si preferís, directo por correo o LinkedIn.
          </p>
        </header>

        <div className="contact-grid" data-reveal>
          <div className="contact-aside">
            <p className="prose">
              Estoy buscando dónde hacer mi práctica profesional. Si tenés una vacante, un proyecto
              en mente, o simplemente querés comentar algo de lo que ves acá, escribime.
            </p>

            <dl className="contact-channels">
              <div className="contact-channel">
                <dt>Correo</dt>
                <dd>
                  <a className="link" href="mailto:luisriveralopez304@gmail.com">
                    luisriveralopez304@gmail.com
                  </a>
                </dd>
              </div>
              <div className="contact-channel">
                <dt>LinkedIn</dt>
                <dd>
                  <a
                    className="link link-arrow"
                    href="https://www.linkedin.com/in/luis-rivera-l%C3%B3pez-490130276/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <LinkedinIcon size={13} /> Luis Rivera López
                  </a>
                </dd>
              </div>
              <div className="contact-channel">
                <dt>GitHub</dt>
                <dd>
                  <a
                    className="link link-arrow"
                    href="https://github.com/Luis220922"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <GithubIcon size={13} /> Luis220922
                  </a>
                </dd>
              </div>
            </dl>
          </div>

          {status === 'sent' ? (
            <div className="contact-done">
              <Check size={28} strokeWidth={1.5} />
              <h3 className="display">Mensaje enviado</h3>
              <p className="prose">Gracias por escribir. Te respondo pronto.</p>
              <button className="link" onClick={() => setStatus('idle')}>
                Enviar otro mensaje
              </button>
            </div>
          ) : (
            <form id="contact-form" className="contact-form" onSubmit={handleSubmit} noValidate>
              <div className={`field${errors.name ? ' has-error' : ''}`}>
                <label htmlFor="contact-name">Nombre</label>
                <input
                  id="contact-name"
                  type="text"
                  autoComplete="name"
                  placeholder="Cómo te llamás"
                  value={form.name}
                  onChange={update('name')}
                />
                {errors.name && <span className="field-error">{errors.name}</span>}
              </div>

              <div className={`field${errors.email ? ' has-error' : ''}`}>
                <label htmlFor="contact-email">Correo</label>
                <input
                  id="contact-email"
                  type="email"
                  autoComplete="email"
                  placeholder="para poder responderte"
                  value={form.email}
                  onChange={update('email')}
                />
                {errors.email && <span className="field-error">{errors.email}</span>}
              </div>

              <div className={`field${errors.message ? ' has-error' : ''}`}>
                <label htmlFor="contact-message">Mensaje</label>
                <textarea
                  id="contact-message"
                  rows={5}
                  placeholder="En qué estás pensando"
                  value={form.message}
                  onChange={update('message')}
                />
                {errors.message && <span className="field-error">{errors.message}</span>}
              </div>

              <div>
                <button
                  type="submit"
                  id="contact-submit"
                  className="btn"
                  disabled={status === 'sending'}
                >
                  {status === 'sending' ? 'Enviando…' : 'Enviar mensaje'} <Send size={15} />
                </button>
                {status === 'error' && (
                  <p className="field-error" role="alert">
                    No se pudo enviar. Probá de nuevo, o escribime directo a
                    luisriveralopez304@gmail.com.
                  </p>
                )}
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
