
import React from 'react';
import { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface MetricCardProps {
  title: string;
  value: string | number;
  change?: string;
  changeType?: 'increase' | 'decrease' | 'neutral';
  icon: LucideIcon;
  className?: string;
}

const MetricCard = ({ title, value, change, changeType, icon: Icon, className }: MetricCardProps) => {
  return (
    <div className={cn('metric-card', className)}>
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-muted-foreground">{title}</p>
          <p className="text-3xl font-bold text-foreground mt-2">{value}</p>
          {change && (
            <p className={cn(
              'text-sm mt-1 flex items-center',
              changeType === 'increase' && 'text-success',
              changeType === 'decrease' && 'text-error',
              changeType === 'neutral' && 'text-muted-foreground'
            )}>
              {change}
            </p>
          )}
        </div>
        <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
          <Icon className="w-6 h-6 text-white" />
        </div>
      </div>
    </div>
  );
};

export default MetricCard;
