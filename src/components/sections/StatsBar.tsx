import React, { useEffect, useState, useRef } from 'react';
import { FolderGit2, Smartphone, Cpu, Briefcase } from 'lucide-react';
import { profile } from '../../data/profile';

interface StatCardProps {
  icon: React.ReactNode;
  value: number;
  suffix?: string;
  label: string;
  subtitle: string;
}

const StatCard: React.FC<StatCardProps> = ({ icon, value, suffix = '', label, subtitle }) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          let start = 0;
          const duration = 1200;
          const stepTime = Math.abs(Math.floor(duration / Math.max(value, 1)));
          const timer = setInterval(() => {
            start += 1;
            setCount(start);
            if (start >= value) {
              clearInterval(timer);
            }
          }, stepTime);
        }
      },
      { threshold: 0.3 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }
    return () => observer.disconnect();
  }, [value, hasAnimated]);

  return (
    <div
      ref={elementRef}
      className="flex items-center gap-4 p-5 rounded-2xl bg-surface-light dark:bg-surface-dark border border-line-light dark:border-line-dark shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-soft-lg group"
    >
      <div className="p-3 rounded-xl bg-denim-50 dark:bg-denim-900/30 text-denim-600 dark:text-denim-300 group-hover:scale-110 transition-transform">
        {icon}
      </div>
      <div className="flex flex-col">
        <div className="font-serif text-2xl sm:text-3xl font-bold text-content-mainLight dark:text-content-mainDark flex items-baseline">
          <span>{hasAnimated ? count : value}</span>
          {suffix && <span className="text-denim-500 ml-0.5">{suffix}</span>}
        </div>
        <span className="text-xs sm:text-sm font-semibold text-content-mainLight dark:text-content-mainDark">
          {label}
        </span>
        <span className="text-[11px] font-mono text-content-secLight dark:text-content-secDark">
          {subtitle}
        </span>
      </div>
    </div>
  );
};

export const StatsBar: React.FC = () => {
  return (
    <section className="py-6 sm:py-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        <StatCard
          icon={<FolderGit2 className="w-6 h-6" />}
          value={profile.stats.projectsCount}
          label="Projets réalisés"
          subtitle="Web, Mobile & Desktop"
        />
        <StatCard
          icon={<Smartphone className="w-6 h-6" />}
          value={profile.stats.mobileAppsCount}
          label="Apps mobiles Flutter"
          subtitle="Klitchi & Coranique"
        />
        <StatCard
          icon={<Cpu className="w-6 h-6" />}
          value={20}
          suffix="+"
          label="Technologies"
          subtitle="Front, Back & Données"
        />
        <StatCard
          icon={<Briefcase className="w-6 h-6" />}
          value={profile.stats.internshipsCount}
          label="Stages accomplis"
          subtitle="After Code & Code Temple"
        />
      </div>
    </section>
  );
};
