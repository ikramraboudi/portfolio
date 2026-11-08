import React, { useState, useEffect, useRef } from 'react';
import { RotateCcw, ArrowRight } from 'lucide-react';
import { askOptions, AskOption } from '../../data/askAnswers';
import { useLanguage } from '../../i18n/LanguageContext';

interface ChatMessage {
  id: string;
  sender: 'ikram' | 'user';
  text: string;
  actionButton?: {
    label: string;
    href: string;
  };
}

export const AskIkram: React.FC = () => {
  const { lang, t } = useLanguage();
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [typedWelcome, setTypedWelcome] = useState('');
  const [usedOptionIds, setUsedOptionIds] = useState<Set<string>>(new Set());
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const initialMsg = t.askIkram.initialMessage;

  // Effet de frappe initial (se réactive si la langue change)
  useEffect(() => {
    let index = 0;
    setTypedWelcome('');
    const interval = setInterval(() => {
      index++;
      setTypedWelcome(initialMsg.slice(0, index));
      if (index >= initialMsg.length) {
        clearInterval(interval);
      }
    }, 25);
    return () => clearInterval(interval);
  }, [initialMsg]);

  // Réinitialiser les messages quand la langue change pour cohérence
  useEffect(() => {
    setMessages([]);
    setUsedOptionIds(new Set());
    setIsTyping(false);
  }, [lang]);

  // Défilement automatique vers le bas à chaque nouveau message
  const scrollToBottom = () => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping, typedWelcome]);

  const handleSelectOption = (option: AskOption) => {
    if (usedOptionIds.has(option.id) || isTyping) return;

    setUsedOptionIds(prev => new Set(prev).add(option.id));

    // Ajouter la question de l'utilisateur à droite
    const userMsg: ChatMessage = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text: option.question[lang],
    };

    setMessages(prev => [...prev, userMsg]);
    setIsTyping(true);

    // Indicateur "..." de 600 ms avant la réponse
    setTimeout(() => {
      const ikramMsg: ChatMessage = {
        id: `ikram-${Date.now()}`,
        sender: 'ikram',
        text: option.answer[lang],
        actionButton: option.actionButton
          ? {
              label: option.actionButton.label[lang],
              href: option.actionButton.href,
            }
          : undefined,
      };
      setMessages(prev => [...prev, ikramMsg]);
      setIsTyping(false);
    }, 600);
  };

  const handleReset = () => {
    setMessages([]);
    setUsedOptionIds(new Set());
    setIsTyping(false);
  };

  return (
    <div className="w-full max-w-[420px] mx-auto">
      {/* Cadre smartphone élégant marine profond */}
      <div className="relative rounded-[2.5rem] p-3 sm:p-3.5 bg-gradient-to-b from-navy-deep via-navy to-navy-deep border-4 border-navy-deep shadow-soft-lg">
        {/* Encoche haut-parleur / caméra */}
        <div className="w-24 h-4 bg-navy-card/90 rounded-full mx-auto mb-3 flex items-center justify-center gap-2">
          <span className="w-2 h-2 rounded-full bg-navy-muted/40" />
          <span className="w-3.5 h-1 rounded-full bg-navy-muted/30" />
        </div>

        {/* Écran intérieur */}
        <div className="rounded-[2rem] bg-bg-light dark:bg-bg-dark border border-line-light/60 dark:border-line-dark/60 overflow-hidden flex flex-col h-[480px] sm:h-[510px]">
          {/* En-tête du téléphone */}
          <div className="px-4 py-3 bg-surface-light/95 dark:bg-surface-dark/95 border-b border-line-light/70 dark:border-line-dark/70 backdrop-blur-md flex items-center justify-between shrink-0">
            <div className="flex items-center gap-3 min-w-0">
              <div className="relative shrink-0">
                <div className="w-9 h-9 rounded-full bg-gradient-to-br from-denim-500 to-rose-powder p-0.5 flex items-center justify-center shadow-sm">
                  <div className="w-full h-full rounded-full bg-surface-light dark:bg-surface-dark flex items-center justify-center font-serif font-bold text-xs text-denim-600 dark:text-denim-300">
                    IR
                  </div>
                </div>
                <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-emerald-500 border-2 border-surface-light dark:border-surface-dark" />
              </div>
              <div className="flex flex-col min-w-0">
                <div className="flex items-center gap-1.5">
                  <span className="font-semibold text-xs sm:text-sm text-content-mainLight dark:text-content-mainDark truncate">
                    Ikram Raboudi
                  </span>
                </div>
                <div className="flex items-center gap-1 text-[11px] text-emerald-600 dark:text-emerald-400 font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="truncate">{t.askIkram.phoneAvailability}</span>
                </div>
              </div>
            </div>

            {/* Bouton Recommencer */}
            <button
              type="button"
              onClick={handleReset}
              title={t.askIkram.resetTitle}
              aria-label={t.askIkram.resetAria}
              className="p-1.5 rounded-lg border border-line-light/80 dark:border-line-dark/80 text-content-secLight dark:text-content-secDark hover:text-denim-600 dark:hover:text-denim-300 hover:bg-surface-softLight dark:hover:bg-surface-softDark transition-colors shrink-0"
            >
              <RotateCcw className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Zone des messages défilante avec aria-live */}
          <div
            aria-live="polite"
            className="flex-1 overflow-y-auto p-3.5 sm:p-4 space-y-3 font-sans text-xs sm:text-sm"
          >
            {/* Message de bienvenue */}
            <div className="flex items-start gap-2 max-w-[88%]">
              <div className="p-3 rounded-2xl rounded-tl-sm bg-surface-light dark:bg-surface-dark border border-line-light/80 dark:border-line-dark/80 text-content-mainLight dark:text-content-mainDark shadow-sm leading-relaxed">
                {typedWelcome}
                {typedWelcome.length < initialMsg.length && (
                  <span className="inline-block w-1.5 h-3 ml-0.5 bg-denim-500 animate-pulse" />
                )}
              </div>
            </div>

            {/* Historique des messages */}
            {messages.map(msg => (
              <div
                key={msg.id}
                className={`flex flex-col ${
                  msg.sender === 'user' ? 'items-end' : 'items-start'
                }`}
              >
                <div
                  className={`max-w-[88%] p-3 rounded-2xl leading-relaxed shadow-sm ${
                    msg.sender === 'user'
                      ? 'rounded-tr-sm bg-denim-500 text-white font-medium'
                      : 'rounded-tl-sm bg-surface-light dark:bg-surface-dark border border-line-light/80 dark:border-line-dark/80 text-content-mainLight dark:text-content-mainDark'
                  }`}
                >
                  <p>{msg.text}</p>

                  {/* Bouton d'action associé */}
                  {msg.actionButton && (
                    <a
                      href={msg.actionButton.href}
                      className="mt-2.5 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-denim-50 dark:bg-denim-900/40 text-denim-600 dark:text-denim-300 hover:bg-denim-100 transition-colors border border-denim-200/60 dark:border-denim-700/60"
                    >
                      <span>{msg.actionButton.label}</span>
                      <ArrowRight className="w-3 h-3" />
                    </a>
                  )}
                </div>
              </div>
            ))}

            {/* Indicateur de frappe "..." (600 ms) */}
            {isTyping && (
              <div className="flex items-start gap-2 max-w-[88%]">
                <div className="py-2.5 px-4 rounded-2xl rounded-tl-sm bg-surface-light dark:bg-surface-dark border border-line-light/80 dark:border-line-dark/80 flex items-center gap-1.5 shadow-sm">
                  <span className="w-2 h-2 rounded-full bg-denim-400 animate-bounce [animation-delay:-0.3s]" />
                  <span className="w-2 h-2 rounded-full bg-denim-400 animate-bounce [animation-delay:-0.15s]" />
                  <span className="w-2 h-2 rounded-full bg-denim-400 animate-bounce" />
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Zone des puces de questions rapides */}
          <div className="p-3 bg-surface-light/95 dark:bg-surface-dark/95 border-t border-line-light/70 dark:border-line-dark/70 shrink-0">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[10px] font-mono uppercase tracking-wider text-content-secLight dark:text-content-secDark">
                {t.askIkram.quickQuestionsLabel}
              </span>
              {usedOptionIds.size > 0 && (
                <button
                  type="button"
                  onClick={handleReset}
                  className="text-[11px] text-denim-600 dark:text-denim-400 hover:underline font-mono"
                >
                  {t.askIkram.resetBtn}
                </button>
              )}
            </div>

            <div className="flex flex-wrap gap-1.5 max-h-28 overflow-y-auto">
              {askOptions.map(option => {
                const isUsed = usedOptionIds.has(option.id);
                return (
                  <button
                    key={option.id}
                    type="button"
                    onClick={() => handleSelectOption(option)}
                    disabled={isUsed || isTyping}
                    className={`px-2.5 py-1.5 rounded-full text-xs font-medium transition-all duration-150 ${
                      isUsed
                        ? 'opacity-40 bg-surface-softLight/60 dark:bg-surface-softDark/60 text-content-secLight/60 dark:text-content-secDark/60 cursor-not-allowed border border-transparent'
                        : 'bg-surface-softLight dark:bg-surface-softDark text-content-mainLight dark:text-content-mainDark border border-line-light dark:border-line-dark hover:border-denim-400 hover:text-denim-600 dark:hover:text-denim-300 hover:scale-[1.03] active:scale-95 shadow-2xs'
                    }`}
                  >
                    {option.label[lang]}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
