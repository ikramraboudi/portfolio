import React from 'react';

interface SectionHeadingProps {
  emoji?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  emoji,
  title,
  subtitle,
  centered = false,
}) => {
  return (
    <div className={`mb-10 sm:mb-12 md:mb-14 ${centered ? 'text-center mx-auto max-w-3xl' : 'max-w-3xl'}`}>
      <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-content-mainLight dark:text-content-mainDark tracking-tight leading-tight flex items-center gap-3">
        {emoji && (
          <span className="text-3xl sm:text-4xl md:text-5xl select-none" aria-hidden="true">
            {emoji}
          </span>
        )}
        <span>{title}</span>
      </h2>
      {subtitle && (
        <p className="section-subtitle mt-3 sm:mt-4 text-base sm:text-lg md:text-xl font-medium leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
};
