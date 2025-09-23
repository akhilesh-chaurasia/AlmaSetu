import React, { useState } from 'react';
import { Clock, Filter, MoreHorizontal, LucideIcon } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/enhanced-button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

interface ActivityItem {
  id: string;
  type: 'success' | 'warning' | 'info' | 'primary';
  title: string;
  description: string;
  timestamp: string;
  icon: LucideIcon;
  avatar?: string;
  user?: string;
}

interface ActivityWidgetProps {
  title: string;
  activities: ActivityItem[];
  showFilters?: boolean;
  className?: string;
}

const ActivityWidget: React.FC<ActivityWidgetProps> = ({ 
  title, 
  activities, 
  showFilters = true,
  className = '' 
}) => {
  const [filter, setFilter] = useState<string>('all');

  const getTypeClasses = (type: ActivityItem['type']) => {
    switch (type) {
      case 'success':
        return 'bg-success/10 text-success border-success/20';
      case 'warning':
        return 'bg-warning/10 text-warning border-warning/20';
      case 'info':
        return 'bg-info/10 text-info border-info/20';
      case 'primary':
        return 'bg-primary/10 text-primary border-primary/20';
      default:
        return 'bg-muted text-muted-foreground border-border';
    }
  };

  const filteredActivities = filter === 'all' 
    ? activities 
    : activities.filter(activity => activity.type === filter);

  return (
    <Card className={`widget-container ${className}`}>
      <CardHeader className="widget-header">
        <CardTitle className="text-lg font-semibold flex items-center">
          <Clock className="h-5 w-5 mr-2 text-muted-foreground" />
          {title}
        </CardTitle>
        {showFilters && (
          <div className="flex items-center space-x-2">
            <Button
              variant={filter === 'all' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setFilter('all')}
            >
              All
            </Button>
            <Button
              variant={filter === 'success' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setFilter('success')}
            >
              Success
            </Button>
            <Button
              variant={filter === 'warning' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setFilter('warning')}
            >
              Alerts
            </Button>
          </div>
        )}
      </CardHeader>
      
      <CardContent className="widget-content">
        <div className="space-y-3 max-h-96 overflow-y-auto">
          {filteredActivities.length === 0 ? (
            <div className="text-center py-8 text-muted-foreground">
              <Clock className="h-12 w-12 mx-auto mb-3 opacity-50" />
              <p>No activities found</p>
            </div>
          ) : (
            filteredActivities.map((activity) => (
              <div key={activity.id} className="data-point group">
                <div className="flex items-start space-x-3 w-full">
                  <div className={`p-2 rounded-lg border ${getTypeClasses(activity.type)} flex-shrink-0`}>
                    <activity.icon className="h-4 w-4" />
                  </div>
                  
                  <div className="flex-1 min-w-0 space-y-1">
                    <div className="flex items-center justify-between">
                      <h4 className="text-sm font-medium truncate">{activity.title}</h4>
                      <span className="text-xs text-muted-foreground flex-shrink-0 ml-2">
                        {activity.timestamp}
                      </span>
                    </div>
                    
                    <p className="text-sm text-muted-foreground">{activity.description}</p>
                    
                    {activity.user && (
                      <div className="flex items-center space-x-2 mt-2">
                        <Avatar className="h-6 w-6">
                          <AvatarImage src={activity.avatar} />
                          <AvatarFallback className="text-xs bg-primary/10 text-primary">
                            {activity.user.split(' ').map(n => n[0]).join('')}
                          </AvatarFallback>
                        </Avatar>
                        <span className="text-xs text-muted-foreground">{activity.user}</span>
                      </div>
                    )}
                  </div>
                  
                  <Button variant="ghost" size="sm" className="opacity-0 group-hover:opacity-100 transition-opacity">
                    <MoreHorizontal className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))
          )}
        </div>
        
        <div className="mt-4 pt-4 border-t border-border/30">
          <Button variant="ghost" size="sm" className="w-full text-primary hover:bg-primary/5">
            View All Activities
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ActivityWidget;