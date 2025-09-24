import React, { useState } from 'react';
import { Calendar, MapPin, Users, Camera, ChevronDown, ChevronUp, Heart, Share } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/enhanced-button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

interface TimelineEvent {
  id: string;
  title: string;
  date: string;
  year: string;
  type: 'cultural' | 'academic' | 'sports' | 'networking' | 'workshop';
  description: string;
  location: string;
  image: string;
  attendees: number;
  likes: number;
  isLiked: boolean;
  tags: string[];
  organizer: string;
}

interface TimelineWidgetProps {
  title?: string;
  events: TimelineEvent[];
  userRole?: 'student' | 'alumni';
}

const TimelineWidget: React.FC<TimelineWidgetProps> = ({
  title = "College Timeline",
  events,
  userRole = 'student'
}) => {
  const [selectedYear, setSelectedYear] = useState<string>('all');
  const [expandedEvents, setExpandedEvents] = useState<Set<string>>(new Set());

  // Group events by year
  const years = ['all', ...Array.from(new Set(events.map(e => e.year))).sort().reverse()];
  
  const filteredEvents = selectedYear === 'all' 
    ? events 
    : events.filter(e => e.year === selectedYear);

  const toggleExpand = (eventId: string) => {
    const newExpanded = new Set(expandedEvents);
    if (newExpanded.has(eventId)) {
      newExpanded.delete(eventId);
    } else {
      newExpanded.add(eventId);
    }
    setExpandedEvents(newExpanded);
  };

  const getTypeColor = (type: TimelineEvent['type']) => {
    switch (type) {
      case 'cultural': return 'bg-purple-500/10 text-purple-700 border-purple-200';
      case 'academic': return 'bg-blue-500/10 text-blue-700 border-blue-200';
      case 'sports': return 'bg-green-500/10 text-green-700 border-green-200';
      case 'networking': return 'bg-orange-500/10 text-orange-700 border-orange-200';
      case 'workshop': return 'bg-pink-500/10 text-pink-700 border-pink-200';
      default: return 'bg-gray-500/10 text-gray-700 border-gray-200';
    }
  };

  const getTypeIcon = (type: TimelineEvent['type']) => {
    switch (type) {
      case 'cultural': return '🎭';
      case 'academic': return '📚';
      case 'sports': return '🏆';
      case 'networking': return '🤝';
      case 'workshop': return '🛠️';
      default: return '📅';
    }
  };

  return (
    <Card className="widget-container">
      <CardHeader className="widget-header">
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center">
            <Calendar className="h-5 w-5 mr-2 text-primary" />
            {title}
          </CardTitle>
          <div className="flex items-center space-x-2">
            <select 
              value={selectedYear} 
              onChange={(e) => setSelectedYear(e.target.value)}
              className="text-sm border border-border rounded-md px-2 py-1 bg-background focus:outline-none focus:ring-2 focus:ring-primary/20"
            >
              {years.map(year => (
                <option key={year} value={year}>
                  {year === 'all' ? 'All Years' : year}
                </option>
              ))}
            </select>
            <Badge variant="secondary" className="text-xs">
              {filteredEvents.length} events
            </Badge>
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="widget-content">
        <div className="space-y-4 max-h-96 overflow-y-auto">
          {filteredEvents.length === 0 ? (
            <div className="text-center py-8 text-muted-foreground">
              <Calendar className="h-12 w-12 mx-auto mb-4 opacity-50" />
              <p>No events found for selected year</p>
            </div>
          ) : (
            filteredEvents.map((event, index) => (
              <div key={event.id} className="relative">
                {/* Timeline Line */}
                {index !== filteredEvents.length - 1 && (
                  <div className="absolute left-6 top-12 w-0.5 h-full bg-border z-0" />
                )}
                
                {/* Timeline Event */}
                <div className="relative flex space-x-4 z-10">
                  {/* Timeline Dot */}
                  <div className="w-12 h-12 bg-background border-2 border-primary rounded-full flex items-center justify-center flex-shrink-0 shadow-sm">
                    <span className="text-lg">{getTypeIcon(event.type)}</span>
                  </div>
                  
                  {/* Event Content */}
                  <div className="flex-1 pb-6">
                    <Card className="border border-border/50 hover:border-border hover:shadow-md transition-all duration-200">
                      <CardContent className="p-4">
                        {/* Event Header */}
                        <div className="flex items-start justify-between mb-3">
                          <div className="flex-1">
                            <div className="flex items-center space-x-2 mb-1">
                              <h4 className="font-semibold text-sm text-foreground">{event.title}</h4>
                              <Badge className={`text-xs ${getTypeColor(event.type)}`}>
                                {event.type}
                              </Badge>
                            </div>
                            <div className="flex items-center space-x-4 text-xs text-muted-foreground mb-2">
                              <span className="flex items-center">
                                <Calendar className="h-3 w-3 mr-1" />
                                {event.date}
                              </span>
                              <span className="flex items-center">
                                <MapPin className="h-3 w-3 mr-1" />
                                {event.location}
                              </span>
                              <span className="flex items-center">
                                <Users className="h-3 w-3 mr-1" />
                                {event.attendees}
                              </span>
                            </div>
                          </div>
                        </div>

                        {/* Event Image */}
                        <div className="relative mb-3">
                          <img 
                            src={event.image} 
                            alt={event.title}
                            className="w-full h-32 object-cover rounded-lg border border-border/30"
                          />
                          <div className="absolute top-2 right-2">
                            <Badge variant="secondary" className="text-xs bg-background/80 backdrop-blur-sm">
                              {event.year}
                            </Badge>
                          </div>
                        </div>

                        {/* Event Description */}
                        <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                          {event.description}
                        </p>

                        {/* Event Tags */}
                        <div className="flex flex-wrap gap-1 mb-3">
                          {event.tags.map((tag) => (
                            <Badge key={tag} variant="outline" className="text-xs">
                              {tag}
                            </Badge>
                          ))}
                        </div>

                        {/* Event Footer */}
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-3">
                            <Button 
                              size="sm" 
                              variant="ghost" 
                              className="text-xs h-7 px-2"
                              onClick={() => console.log('Like event')}
                            >
                              <Heart className={`h-3 w-3 mr-1 ${event.isLiked ? 'fill-current text-red-500' : ''}`} />
                              {event.likes}
                            </Button>
                            <Button 
                              size="sm" 
                              variant="ghost" 
                              className="text-xs h-7 px-2"
                              onClick={() => console.log('Share event')}
                            >
                              <Share className="h-3 w-3 mr-1" />
                              Share
                            </Button>
                          </div>
                          
                          <div className="flex items-center space-x-2">
                            <span className="text-xs text-muted-foreground">
                              by {event.organizer}
                            </span>
                            <Button 
                              size="sm" 
                              variant="ghost" 
                              onClick={() => toggleExpand(event.id)}
                              className="text-xs h-7 px-2"
                            >
                              {expandedEvents.has(event.id) ? (
                                <>
                                  <ChevronUp className="h-3 w-3 mr-1" />
                                  Less
                                </>
                              ) : (
                                <>
                                  <ChevronDown className="h-3 w-3 mr-1" />
                                  More
                                </>
                              )}
                            </Button>
                          </div>
                        </div>

                        {/* Expanded Content */}
                        {expandedEvents.has(event.id) && (
                          <div className="mt-3 pt-3 border-t border-border/30 animate-fade-in">
                            <div className="space-y-2">
                              <p className="text-sm text-foreground">
                                This {event.type} event was a memorable experience for all attendees. 
                                {userRole === 'alumni' 
                                  ? " As an alumnus, you might remember participating in similar events during your time at college."
                                  : " Join upcoming events to create similar memories!"
                                }
                              </p>
                              <div className="flex items-center justify-between pt-2">
                                <div className="flex items-center space-x-2">
                                  <Avatar className="h-6 w-6">
                                    <AvatarFallback className="text-xs bg-primary/10 text-primary">
                                      {event.organizer.split(' ').map(n => n[0]).join('')}
                                    </AvatarFallback>
                                  </Avatar>
                                  <span className="text-xs text-muted-foreground">
                                    Organized by {event.organizer}
                                  </span>
                                </div>
                                <Button size="sm" variant="outline" className="text-xs h-6">
                                  View Gallery
                                </Button>
                              </div>
                            </div>
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
        
        {filteredEvents.length > 0 && (
          <div className="mt-4 pt-4 border-t border-border/30 text-center">
            <Button variant="ghost" className="text-sm text-primary hover:bg-primary/5">
              <Camera className="h-4 w-4 mr-2" />
              View All College Memories
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default TimelineWidget;