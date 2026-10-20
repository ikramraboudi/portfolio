import React, { useState } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import { profile } from '../../data/profile';
import { SectionHeading } from '../common/SectionHeading';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
  honeypot: string; // Anti-spam bot trap
}

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: 'Proposition de stage PFE',
    message: '',
    honeypot: '',
  });

  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof FormData, string>> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Veuillez renseigner votre nom.';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Veuillez renseigner votre adresse email.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Veuillez saisir une adresse email valide.';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Veuillez écrire un message.';
    } else if (formData.message.trim().length < 20) {
      newErrors.message = 'Votre message doit contenir au moins 20 caractères.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Vérification du champ honeypot
    if (formData.honeypot) {
      // Robot détecté, simuler succès silencieux
      setStatus('success');
      return;
    }

    if (!validate()) return;

    setStatus('submitting');

    const formspreeId = (import.meta.env.VITE_FORMSPREE_ID && import.meta.env.VITE_FORMSPREE_ID.trim() !== '')
      ? import.meta.env.VITE_FORMSPREE_ID
      : 'xaeqgerl';

    // Si pas de Formspree ID configuré, ne PAS ouvrir Outlook
    if (!formspreeId || formspreeId === 'undefined' || formspreeId.trim() === '') {
      setStatus('error');
      setToastMessage(
        "Pour envoyer l'email directement sans ouvrir Outlook, renseignez votre identifiant Formspree dans le fichier .env (VITE_FORMSPREE_ID=votre_id)."
      );
      setTimeout(() => setStatus('idle'), 8000);
      return;
    }

    // Envoi direct via API Formspree en arrière-plan (sans ouvrir Outlook ni aucune application)
    try {
      const response = await fetch(`https://formspree.io/f/${formspreeId}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        }),
      });

      if (response.ok) {
        setStatus('success');
        setToastMessage('Merci pour votre message ! Je vous répondrai dans les plus brefs délais (sous 24 h).');
        setFormData({
          name: '',
          email: '',
          subject: 'Proposition de stage PFE',
          message: '',
          honeypot: '',
        });
        setTimeout(() => setStatus('idle'), 6000);
      } else {
        throw new Error('Erreur lors de l’envoi');
      }
    } catch {
      setStatus('error');
      setToastMessage('Une erreur est survenue. Vous pouvez me contacter directement à ' + profile.email);
      setTimeout(() => setStatus('idle'), 6000);
    }
  };

  return (
    <section id="contact" className="py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="CONTACT & ÉCHANGES"
        title="Discutons d’un projet ou d’une"
        highlight="opportunité PFE"
        description="Une question, une offre de stage ou une idée de collaboration ? N’hésitez pas à m’écrire, je réponds généralement sous 24 heures."
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
        {/* Colonne Gauche : Coordonnées directes */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          <div className="p-6 sm:p-8 rounded-3xl bg-surface-light dark:bg-surface-dark border border-line-light dark:border-line-dark shadow-soft">
            <h3 className="font-serif text-xl sm:text-2xl font-semibold text-content-mainLight dark:text-content-mainDark mb-6">
              Mes coordonnées
            </h3>

            <div className="space-y-4">
              {/* Email */}
              <a
                href={`mailto:${profile.email}`}
                className="group flex items-center gap-4 p-3.5 rounded-2xl bg-surface-softLight/60 dark:bg-surface-softDark/60 border border-line-light/50 dark:border-line-dark/50 hover:border-denim-300 dark:hover:border-denim-600 transition-colors"
              >
                <div className="p-2.5 rounded-xl bg-denim-50 dark:bg-denim-900/40 text-denim-600 dark:text-denim-300 group-hover:scale-110 transition-transform">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="flex flex-col min-w-0">
                  <span className="text-[11px] font-mono text-content-secLight dark:text-content-secDark">
                    Email direct
                  </span>
                  <span className="text-sm font-semibold text-content-mainLight dark:text-content-mainDark truncate group-hover:text-denim-600 dark:group-hover:text-denim-400">
                    {profile.email}
                  </span>
                </div>
              </a>

              {/* Téléphone */}
              <a
                href={`tel:${profile.phone}`}
                className="group flex items-center gap-4 p-3.5 rounded-2xl bg-surface-softLight/60 dark:bg-surface-softDark/60 border border-line-light/50 dark:border-line-dark/50 hover:border-denim-300 dark:hover:border-denim-600 transition-colors"
              >
                <div className="p-2.5 rounded-xl bg-rose-soft/80 dark:bg-rose-dark/20 text-rose-dark dark:text-rose-powder group-hover:scale-110 transition-transform">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="flex flex-col min-w-0">
                  <span className="text-[11px] font-mono text-content-secLight dark:text-content-secDark">
                    Téléphone / WhatsApp
                  </span>
                  <span className="text-sm font-semibold text-content-mainLight dark:text-content-mainDark group-hover:text-denim-600 dark:group-hover:text-denim-400">
                    {profile.displayPhone}
                  </span>
                </div>
              </a>

              {/* Localisation */}
              <div className="flex items-center gap-4 p-3.5 rounded-2xl bg-surface-softLight/60 dark:bg-surface-softDark/60 border border-line-light/50 dark:border-line-dark/50">
                <div className="p-2.5 rounded-xl bg-sage-soft dark:bg-sage-dark/20 text-sage-dark dark:text-sage-badge">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[11px] font-mono text-content-secLight dark:text-content-secDark">
                    Résidence
                  </span>
                  <span className="text-sm font-semibold text-content-mainLight dark:text-content-mainDark">
                    {profile.location}
                  </span>
                </div>
              </div>
            </div>

            {/* Réseaux sociaux */}
            <div className="mt-8 pt-6 border-t border-line-light/80 dark:border-line-dark/80">
              <span className="text-xs font-mono uppercase tracking-wider text-content-secLight dark:text-content-secDark block mb-3">
                Profils professionnels :
              </span>
              <div className="flex items-center gap-3">
                <a
                  href={profile.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl border border-line-light dark:border-line-dark bg-surface-softLight/40 dark:bg-surface-softDark/40 text-xs font-semibold text-content-mainLight dark:text-content-mainDark hover:bg-denim-50 dark:hover:bg-denim-900/30 hover:text-denim-600 transition-colors"
                >
                  <Linkedin className="w-4 h-4 text-denim-600" />
                  <span>LinkedIn</span>
                </a>
                <a
                  href={profile.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl border border-line-light dark:border-line-dark bg-surface-softLight/40 dark:bg-surface-softDark/40 text-xs font-semibold text-content-mainLight dark:text-content-mainDark hover:bg-denim-50 dark:hover:bg-denim-900/30 hover:text-denim-600 transition-colors"
                >
                  <Github className="w-4 h-4" />
                  <span>GitHub</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Colonne Droite : Formulaire interactif */}
        <div className="lg:col-span-7">
          <div className="p-6 sm:p-8 rounded-3xl bg-surface-light dark:bg-surface-dark border border-line-light dark:border-line-dark shadow-soft">
            <h3 className="font-serif text-xl sm:text-2xl font-semibold text-content-mainLight dark:text-content-mainDark mb-2">
              Envoyez-moi un message
            </h3>
            <p className="text-xs sm:text-sm text-content-secLight dark:text-content-secDark mb-6">
              Remplissez le formulaire ci-dessous ou contactez-moi directement par mail.
            </p>

            <form onSubmit={handleSubmit} noValidate className="space-y-4">
              {/* Champ Honeypot caché anti-spam */}
              <input
                type="text"
                name="_gotcha"
                value={formData.honeypot}
                onChange={e => setFormData({ ...formData, honeypot: e.target.value })}
                className="hidden"
                tabIndex={-1}
                autoComplete="off"
              />

              {/* Nom & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="contact-name"
                    className="block text-xs font-semibold text-content-mainLight dark:text-content-mainDark mb-1.5"
                  >
                    Nom complet <span className="text-rose-powder">*</span>
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    placeholder="Ex. Sarah Ben Salem"
                    value={formData.name}
                    onChange={e => {
                      setFormData({ ...formData, name: e.target.value });
                      if (errors.name) setErrors({ ...errors, name: undefined });
                    }}
                    className={`w-full px-4 py-3 rounded-xl text-sm bg-surface-softLight/50 dark:bg-surface-softDark/50 border ${
                      errors.name ? 'border-red-400' : 'border-line-light dark:border-line-dark'
                    } text-content-mainLight dark:text-content-mainDark focus:bg-surface-light dark:focus:bg-surface-dark transition-colors`}
                  />
                  {errors.name && (
                    <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{errors.name}</span>
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="contact-email"
                    className="block text-xs font-semibold text-content-mainLight dark:text-content-mainDark mb-1.5"
                  >
                    Adresse email <span className="text-rose-powder">*</span>
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    placeholder="nom@entreprise.com"
                    value={formData.email}
                    onChange={e => {
                      setFormData({ ...formData, email: e.target.value });
                      if (errors.email) setErrors({ ...errors, email: undefined });
                    }}
                    className={`w-full px-4 py-3 rounded-xl text-sm bg-surface-softLight/50 dark:bg-surface-softDark/50 border ${
                      errors.email ? 'border-red-400' : 'border-line-light dark:border-line-dark'
                    } text-content-mainLight dark:text-content-mainDark focus:bg-surface-light dark:focus:bg-surface-dark transition-colors`}
                  />
                  {errors.email && (
                    <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{errors.email}</span>
                    </p>
                  )}
                </div>
              </div>

              {/* Sujet */}
              <div>
                <label
                  htmlFor="contact-subject"
                  className="block text-xs font-semibold text-content-mainLight dark:text-content-mainDark mb-1.5"
                >
                  Sujet de votre message
                </label>
                <select
                  id="contact-subject"
                  value={formData.subject}
                  onChange={e => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl text-sm bg-surface-softLight/50 dark:bg-surface-softDark/50 border border-line-light dark:border-line-dark text-content-mainLight dark:text-content-mainDark focus:bg-surface-light dark:focus:bg-surface-dark transition-colors"
                >
                  <option value="Proposition de stage PFE">Proposition de stage PFE (février - mai 2027)</option>
                  <option value="Collaboration">Opportunité de collaboration professionnelle</option>
                  <option value="Question">Question sur un projet / une technologie</option>
                  <option value="Autre">Autre échange</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <label
                    htmlFor="contact-message"
                    className="block text-xs font-semibold text-content-mainLight dark:text-content-mainDark"
                  >
                    Votre message <span className="text-rose-powder">*</span>
                  </label>
                  <span className="text-[11px] font-mono text-content-secLight dark:text-content-secDark">
                    Min. 20 caractères ({formData.message.trim().length}/20)
                  </span>
                </div>
                <textarea
                  id="contact-message"
                  required
                  rows={4}
                  placeholder="Décrivez votre projet, vos besoins ou les détails du stage proposé..."
                  value={formData.message}
                  onChange={e => {
                    setFormData({ ...formData, message: e.target.value });
                    if (errors.message) setErrors({ ...errors, message: undefined });
                  }}
                  className={`w-full px-4 py-3 rounded-xl text-sm bg-surface-softLight/50 dark:bg-surface-softDark/50 border ${
                    errors.message ? 'border-red-400' : 'border-line-light dark:border-line-dark'
                  } text-content-mainLight dark:text-content-mainDark focus:bg-surface-light dark:focus:bg-surface-dark transition-colors resize-none`}
                />
                {errors.message && (
                  <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5" />
                    <span>{errors.message}</span>
                  </p>
                )}
              </div>

              {/* Bouton d'envoi */}
              <button
                type="submit"
                disabled={status === 'submitting'}
                className="w-full flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-denim-500 hover:bg-denim-600 disabled:opacity-60 text-white font-semibold text-sm transition-all duration-200 hover:scale-[1.01] active:scale-[0.99] shadow-soft"
              >
                {status === 'submitting' ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Envoi en cours...</span>
                  </>
                ) : (
                  <>
                    <span>Envoyer le message</span>
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>

              {/* Toast / Notification de statut doux */}
              {status === 'success' && (
                <div className="p-4 rounded-xl bg-sage-soft dark:bg-sage-dark/20 border border-sage-badge/40 text-sage-dark dark:text-sage-badge text-xs sm:text-sm flex items-start gap-2.5 animate-in fade-in duration-200">
                  <CheckCircle2 className="w-5 h-5 shrink-0 text-sage-badge mt-0.5" />
                  <span>{toastMessage}</span>
                </div>
              )}

              {status === 'error' && (
                <div className="p-4 rounded-xl bg-red-50 dark:bg-red-950/30 border border-red-300 dark:border-red-800 text-red-700 dark:text-red-300 text-xs sm:text-sm flex items-start gap-2.5 animate-in fade-in duration-200">
                  <AlertCircle className="w-5 h-5 shrink-0 text-red-500 mt-0.5" />
                  <span>{toastMessage}</span>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
