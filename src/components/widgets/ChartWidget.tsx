import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/enhanced-button';
import { BarChart3, TrendingUp, Download, RefreshCw } from 'lucide-react';

interface ChartDataPoint {
  name: string;
  value: number;
  color: string;
}

interface ChartWidgetProps {
  title: string;
  subtitle?: string;
  data: ChartDataPoint[];
  type: 'bar' | 'line' | 'pie';
  showControls?: boolean;
  className?: string;
}

const ChartWidget: React.FC<ChartWidgetProps> = ({ 
  title, 
  subtitle,
  data, 
  type = 'bar',
  showControls = true,
  className = '' 
}) => {
  const maxValue = Math.max(...data.map(d => d.value));
  
  const renderBarChart = () => (
    <div className="space-y-3">
      {data.map((item, index) => (
        <div key={index} className="space-y-2">
          <div className="flex items-center justify-between text-sm">
            <span className="font-medium">{item.name}</span>
            <Badge variant="outline" className="text-xs">
              {item.value}
            </Badge>
          </div>
          <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
            <div
              className="h-full rounded-full transition-all duration-500 ease-out"
              style={{
                width: `${(item.value / maxValue) * 100}%`,
                backgroundColor: item.color,
              }}
            />
          </div>
        </div>
      ))}
    </div>
  );

  const renderLineChart = () => (
    <div className="relative h-40 flex items-end justify-between space-x-2 px-2">
      {data.map((item, index) => (
        <div key={index} className="flex flex-col items-center space-y-2 flex-1">
          <div
            className="w-full rounded-t-md transition-all duration-700 ease-out flex items-end justify-center pb-2"
            style={{
              height: `${(item.value / maxValue) * 100}%`,
              backgroundColor: item.color,
              minHeight: '20px'
            }}
          >
            <span className="text-xs font-medium text-white">{item.value}</span>
          </div>
          <span className="text-xs font-medium text-muted-foreground truncate w-full text-center">
            {item.name}
          </span>
        </div>
      ))}
    </div>
  );

  const renderPieChart = () => {
    const total = data.reduce((sum, item) => sum + item.value, 0);
    
    return (
      <div className="flex items-center justify-center space-x-8">
        <div className="relative w-32 h-32">
          <div className="w-full h-full rounded-full bg-muted overflow-hidden">
            {/* Simplified pie representation using gradient */}
            <div 
              className="w-full h-full rounded-full"
              style={{
                background: `conic-gradient(${data.map((item, index) => 
                  `${item.color} ${index * (360 / data.length)}deg ${(index + 1) * (360 / data.length)}deg`
                ).join(', ')})`
              }}
            />
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 bg-background rounded-full flex items-center justify-center border-2 border-border">
              <span className="text-xs font-bold">{total}</span>
            </div>
          </div>
        </div>
        
        <div className="space-y-2">
          {data.map((item, index) => (
            <div key={index} className="flex items-center space-x-2">
              <div
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: item.color }}
              />
              <span className="text-sm">{item.name}</span>
              <Badge variant="outline" className="text-xs ml-auto">
                {((item.value / total) * 100).toFixed(1)}%
              </Badge>
            </div>
          ))}
        </div>
      </div>
    );
  };

  const renderChart = () => {
    switch (type) {
      case 'line':
        return renderLineChart();
      case 'pie':
        return renderPieChart();
      default:
        return renderBarChart();
    }
  };

  return (
    <Card className={`widget-container ${className}`}>
      <CardHeader className="widget-header">
        <div className="flex items-center space-x-2">
          <BarChart3 className="h-5 w-5 text-muted-foreground" />
          <div>
            <CardTitle className="text-lg font-semibold">{title}</CardTitle>
            {subtitle && (
              <p className="text-sm text-muted-foreground mt-1">{subtitle}</p>
            )}
          </div>
        </div>
        
        {showControls && (
          <div className="flex items-center space-x-2">
            <Button variant="ghost" size="sm">
              <RefreshCw className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="sm">
              <Download className="h-4 w-4" />
            </Button>
          </div>
        )}
      </CardHeader>
      
      <CardContent className="widget-content">
        {renderChart()}
        
        <div className="mt-4 pt-4 border-t border-border/30 flex items-center justify-between">
          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
            <TrendingUp className="h-4 w-4" />
            <span>Updated just now</span>
          </div>
          <Button variant="ghost" size="sm" className="text-primary hover:bg-primary/5">
            View Details
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ChartWidget;