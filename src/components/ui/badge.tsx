import * as React from 'react';
import { cn } from '../../lib/utils';

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'secondary' | 'outline';
}

function Badge({ className, variant = 'default', ...props }: BadgeProps) {
  const variants = {
    default: 'border-transparent bg-blue-500/15 text-blue-400 border border-blue-500/20',
    secondary: 'border-transparent bg-white/5 text-slate-300 border border-white/10',
    outline: 'text-slate-300 border border-white/10 hover:border-white/20',
  };

  return (
    <div
      className={cn(
        'inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium transition-colors focus:outline-none',
        variants[variant],
        className
      )}
      {...props}
    />
  );
}

export { Badge };

