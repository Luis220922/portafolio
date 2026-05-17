import { useState } from 'react';
import type { FormEvent } from 'react';
import { Mail, User, MessageSquare, Send, CheckCircle } from 'lucide-react';

interface FormState {
  name: string;
  email: string;
  message: string;
}

export default function Contact() {
  const [form, setForm] = useState<FormState>({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState<Partial<FormState>>({});
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);

  const validate = (): boolean => {
    const e: Partial<FormState> = {};
    if (!form.name.trim()) e.name = 'El nombre es requerido.';
    if (!form.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) e.email = 'Email inválido.';
    if (form.message.trim().length < 10) e.message = 'El mensaje debe tener al menos 10 caracteres.';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (validate() && !sending) {
      setSending(true);
      try {
        const response = await fetch('https://formspree.io/f/mbdbjjnl', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify(form)
        });
        if (response.ok) {
          setSent(true);
          setForm({ name: '', email: '', message: '' });
        } else {
          alert('Hubo un problema al enviar tu mensaje. Por favor intenta de nuevo.');
        }
      } catch (err) {
        alert('Hubo un problema de conexión al enviar tu mensaje. Por favor intenta de nuevo.');
      } finally {
        setSending(false);
      }
    }
  };

  return (
    <div id="contact" className="section-alt">
      <div className="section">
        <div className="section-header">
          <div className="section-badge">Contacto</div>
          <h2>¡Hablemos!</h2>
          <p>Actualmente estoy buscando activamente oportunidades para realizar mi práctica profesional. Si deseas incorporar a tu equipo un perfil apasionado, comprometido y con bases sólidas en software, o tienes un proyecto en mente, ¡escríbeme! Me encantaría conversar.</p>
        </div>

        <div className="contact-wrapper">
          {sent ? (
            <div className="contact-success">
              <CheckCircle size={48} strokeWidth={1.5} />
              <h3>¡Mensaje enviado!</h3>
              <p>Gracias por contactarme. Te responderé pronto.</p>
              <button className="btn-primary" onClick={() => setSent(false)}>Enviar otro mensaje</button>
            </div>
          ) : (
            <form id="contact-form" className="contact-form glass-card" onSubmit={handleSubmit} noValidate>
              <div className="form-group">
                <label htmlFor="contact-name"><User size={15} /> Nombre</label>
                <input
                  id="contact-name"
                  type="text"
                  placeholder="Tu nombre completo"
                  value={form.name}
                  onChange={e => setForm({ ...form, name: e.target.value })}
                  className={errors.name ? 'error' : ''}
                />
                {errors.name && <span className="form-error">{errors.name}</span>}
              </div>
              <div className="form-group">
                <label htmlFor="contact-email"><Mail size={15} /> Email</label>
                <input
                  id="contact-email"
                  type="email"
                  placeholder="tu@email.com"
                  value={form.email}
                  onChange={e => setForm({ ...form, email: e.target.value })}
                  className={errors.email ? 'error' : ''}
                />
                {errors.email && <span className="form-error">{errors.email}</span>}
              </div>
              <div className="form-group">
                <label htmlFor="contact-message"><MessageSquare size={15} /> Mensaje</label>
                <textarea
                  id="contact-message"
                  rows={5}
                  placeholder="Cuéntame sobre tu proyecto..."
                  value={form.message}
                  onChange={e => setForm({ ...form, message: e.target.value })}
                  className={errors.message ? 'error' : ''}
                />
                {errors.message && <span className="form-error">{errors.message}</span>}
              </div>
              <button
                type="submit"
                id="contact-submit"
                className="btn-primary"
                style={{ width: '100%', justifyContent: 'center' }}
                disabled={sending}
              >
                {sending ? 'Enviando...' : 'Enviar mensaje'} <Send size={16} />
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
