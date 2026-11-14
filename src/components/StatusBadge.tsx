import React from 'react';
import type { ReleaseStatus } from '../data/apps';
import { CheckCircle2, FlaskConical, Clock } from 'lucide-react';

interface StatusBadgeProps {
  status: ReleaseStatus;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const StatusBadge: React.FC<StatusBadgeProps> = ({ status, className = '', size = 'md' }) => {
  const getBadgeConfig = () => {
    switch (status) {
      case 'Production':
        return {
          bg: 'bg-emerald-500/10 text-emerald-700 border-emerald-500/30',
          icon: CheckCircle2,
          label: 'Production • Live on Google Play',
          dot: 'bg-emerald-500'
        };
      case 'Closed Testing':
        return {
          bg: 'bg-amber-500/10 text-amber-800 border-amber-500/30',
          icon: FlaskConical,
          label: 'Closed Testing • Coming Soon',
          dot: 'bg-amber-500'
        };
      case 'Coming Soon':
      default:
        return {
          bg: 'bg-blue-500/10 text-blue-700 border-blue-500/30',
          icon: Clock,
          label: 'In Active Development',
          dot: 'bg-blue-500'
        };
    }
  };

  const config = getBadgeConfig();
  const Icon = config.icon;

  const sizeClasses = {
    sm: 'text-xs px-2.5 py-1 gap-1.5',
    md: 'text-xs sm:text-sm px-3.5 py-1.5 gap-2',
    lg: 'text-sm px-4 py-2 gap-2.5 font-semibold'
  };

  return (
    <span
      className={`inline-flex items-center font-medium rounded-full border shadow-xs transition-colors ${config.bg} ${sizeClasses[size]} ${className}`}
    >
      <span className={`w-2 h-2 rounded-full animate-pulse ${config.dot}`} />
      <Icon className="w-3.5 h-3.5" />
      <span>{config.label}</span>
    </span>
  );
};
