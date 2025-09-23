import React from 'react';
import { TrendingUp, TrendingDown, Minus, LucideIcon } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface MetricData {
  id: string;
  title: string;
  value: string | number;
  change: number;
  changeType: 'increase' | 'decrease' | 'neutral';
  icon: LucideIcon;
  color: 'primary' | 'success' | 'warning' | 'accent';
  subtitle?: string;
}

interface MetricsWidgetProps {
  title: string;
  metrics: MetricData[];
  className?: string;
}

const MetricsWidget: React.FC<MetricsWidgetProps> = ({ title, metrics, className = '' }) => {
  const getTrendIcon = (changeType: MetricData['changeType']) => {
    switch (changeType) {
      case 'increase':
        return <TrendingUp className="h-4 w-4 text-success" />;
      case 'decrease':
        return <TrendingDown className="h-4 w-4 text-destructive" />;
      default:
        return <Minus className="h-4 w-4 text-muted-foreground" />;
    }
  };

  const getColorClasses = (color: MetricData['color']) => {
    switch (color) {
      case 'primary':
        return 'bg-primary/10 text-primary border-primary/20';
      case 'success':
        return 'bg-success/10 text-success border-success/20';
      case 'warning':
        return 'bg-warning/10 text-warning border-warning/20';
      case 'accent':
        return 'bg-accent/10 text-accent border-accent/20';
      default:
        return 'bg-muted text-muted-foreground border-border';
    }
  };

  return (
    <Card className={`widget-container ${className}`}>
      <CardHeader className="widget-header">
        <CardTitle className="text-lg font-semibold">{title}</CardTitle>
      </CardHeader>
      <CardContent className="widget-content">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {metrics.map((metric) => (
            <div key={metric.id} className="metric-card interactive-card">
              <div className="flex items-start justify-between mb-3">
                <div className={`p-2 rounded-lg border ${getColorClasses(metric.color)}`}>
                  <metric.icon className="h-5 w-5" />
                </div>
                <div className="flex items-center space-x-1">
                  {getTrendIcon(metric.changeType)}
                  <span className={`text-sm font-medium ${
                    metric.changeType === 'increase' 
                      ? 'text-success' 
                      : metric.changeType === 'decrease' 
                      ? 'text-destructive' 
                      : 'text-muted-foreground'
                  }`}>
                    {Math.abs(metric.change)}%
                  </span>
                </div>
              </div>
              
              <div className="space-y-1">
                <div className="flex items-baseline justify-between">
                  <span className="text-2xl font-bold">{metric.value}</span>
                </div>
                <p className="text-sm text-muted-foreground">{metric.title}</p>
                {metric.subtitle && (
                  <p className="text-xs text-muted-foreground/80">{metric.subtitle}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default MetricsWidget;