import React from 'react';

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  highlight?: string;
  description?: string;
  centered?: boolean;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  eyebrow,
  title,
  highlight,
  description,
  centered = false,
}) => {
  return (
    <div className={`mb-12 md:mb-16 ${centered ? 'text-center mx-auto max-w-2xl' : 'max-w-2xl'}`}>
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium tracking-wider uppercase bg-denim-100/70 text-denim-700 dark:bg-denim-900/50 dark:text-denim-300 border border-denim-200/60 dark:border-denim-700/50 mb-3">
        <span>//</span>
        <span>{eyebrow}</span>
      </div>
      <h2 className="font-serif text-3xl sm:text-4xl lg:text-[2.6rem] font-semibold text-content-mainLight dark:text-content-mainDark tracking-tight leading-tight">
        {title}{' '}
        {highlight && (
          <span className="relative inline-block text-denim-600 dark:text-denim-400 italic">
            {highlight}
            <span
              className="absolute -bottom-1 left-0 right-0 h-1.5 bg-rose-powder/40 dark:bg-rose-dark/30 rounded-full"
              aria-hidden="true"
            />
          </span>
        )}
      </h2>
      {description && (
        <p className="mt-4 text-base sm:text-lg text-content-secLight dark:text-content-secDark leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
};
