import React, { useState } from 'react';
import { getAssetUrl } from '../../utils/paths';

interface TechLogoProps {
  slug: string;
  name: string;
  className?: string;
  invertDark?: boolean;
}

export const TechLogo: React.FC<TechLogoProps> = ({
  slug,
  name,
  className = 'w-5 h-5',
  invertDark = false,
}) => {
  const [hasError, setHasError] = useState(false);
  const logoUrl = getAssetUrl(`logos/${slug}.svg`);

  if (hasError) {
    // Fallback minimaliste élégant
    return (
      <span
        className={`inline-flex items-center justify-center rounded bg-denim-100 dark:bg-surface-softDark text-denim-600 dark:text-denim-300 font-mono text-[10px] font-bold ${className}`}
        title={name}
      >
        {name.slice(0, 2).toUpperCase()}
      </span>
    );
  }

  return (
    <img
      src={logoUrl}
      alt={`Logo ${name}`}
      loading="lazy"
      width={24}
      height={24}
      onError={() => setHasError(true)}
      className={`object-contain transition-transform group-hover:scale-110 ${className} ${
        invertDark ? 'dark:brightness-0 dark:invert' : ''
      }`}
    />
  );
};
