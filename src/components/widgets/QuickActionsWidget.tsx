import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/enhanced-button';
import { Badge } from '@/components/ui/badge';
import { LucideIcon, Zap } from 'lucide-react';

interface ActionItem {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  color: 'primary' | 'success' | 'warning' | 'accent';
  badge?: string;
  disabled?: boolean;
  onClick?: () => void;
}

interface QuickActionsWidgetProps {
  title: string;
  actions: ActionItem[];
  layout?: 'grid' | 'list';
  className?: string;
}

const QuickActionsWidget: React.FC<QuickActionsWidgetProps> = ({ 
  title, 
  actions, 
  layout = 'grid',
  className = '' 
}) => {
  const getColorClasses = (color: ActionItem['color']) => {
    switch (color) {
      case 'primary':
        return {
          button: 'bg-primary/10 hover:bg-primary/20 text-primary border-primary/20',
          icon: 'text-primary',
        };
      case 'success':
        return {
          button: 'bg-success/10 hover:bg-success/20 text-success border-success/20',
          icon: 'text-success',
        };
      case 'warning':
        return {
          button: 'bg-warning/10 hover:bg-warning/20 text-warning border-warning/20',
          icon: 'text-warning',
        };
      case 'accent':
        return {
          button: 'bg-accent/10 hover:bg-accent/20 text-accent border-accent/20',
          icon: 'text-accent',
        };
      default:
        return {
          button: 'bg-muted hover:bg-muted/80 text-muted-foreground border-border',
          icon: 'text-muted-foreground',
        };
    }
  };

  return (
    <Card className={`widget-container ${className}`}>
      <CardHeader className="widget-header">
        <CardTitle className="text-lg font-semibold flex items-center">
          <Zap className="h-5 w-5 mr-2 text-muted-foreground" />
          {title}
        </CardTitle>
      </CardHeader>
      
      <CardContent className="widget-content">
        <div className={
          layout === 'grid' 
            ? "grid grid-cols-1 md:grid-cols-2 gap-3"
            : "space-y-3"
        }>
          {actions.map((action) => {
            const colorClasses = getColorClasses(action.color);
            
            return (
              <Button
                key={action.id}
                variant="ghost"
                className={`
                  interactive-card h-auto p-4 justify-start text-left
                  ${colorClasses.button}
                  ${action.disabled ? 'opacity-50 cursor-not-allowed' : ''}
                `}
                onClick={action.onClick}
                disabled={action.disabled}
              >
                <div className="flex items-start space-x-3 w-full">
                  <div className={`p-2 rounded-lg bg-background/60 ${colorClasses.icon}`}>
                    <action.icon className="h-5 w-5" />
                  </div>
                  
                  <div className="flex-1 min-w-0 space-y-1">
                    <div className="flex items-center justify-between">
                      <h4 className="font-medium text-sm">{action.title}</h4>
                      {action.badge && (
                        <Badge 
                          variant={action.color === 'primary' ? 'default' : 'secondary'}
                          className="text-xs"
                        >
                          {action.badge}
                        </Badge>
                      )}
                    </div>
                    <p className="text-xs opacity-80 leading-relaxed">
                      {action.description}
                    </p>
                  </div>
                </div>
              </Button>
            );
          })}
        </div>
        
        {actions.length === 0 && (
          <div className="text-center py-8 text-muted-foreground">
            <Zap className="h-12 w-12 mx-auto mb-3 opacity-50" />
            <p>No quick actions available</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default QuickActionsWidget;