import React, { useState } from 'react';
import { 
  Calendar, Users, MapPin, Heart, Share2, Eye, Filter,
  Building2, MessageSquare, Users2, Briefcase, Sparkles, ArrowLeft
} from 'lucide-react';
import { Button } from '@/components/ui/enhanced-button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Header from '@/components/layout/Header';
import BackButton from '@/components/ui/back-button';
import { useNavigate } from 'react-router-dom';
import careerFair from '@/assets/events/career-fair.jpg';
import networkingMixer from '@/assets/events/networking-mixer.jpg';
import panelDiscussion from '@/assets/events/panel-discussion.jpg';
import startupBg from '@/assets/startup-bg.jpg';
import mentorshipBg from '@/assets/mentorship-bg.jpg';

interface TimelineEvent {
  id: string;
  title: string;
  date: string;
  year: string;
  category: 'startup' | 'mentorship' | 'community' | 'jobs' | 'events';
  description: string;
  location: string;
  image: string;
  attendees: number;
  likes: number;
  isLiked: boolean;
  tags: string[];
  organizer: string;
}

const Timeline: React.FC = () => {
  const navigate = useNavigate();
  const [selectedYear, setSelectedYear] = useState<string>('all');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [expandedEvents, setExpandedEvents] = useState<Set<string>>(new Set());

  const user = {
    name: 'Alex Johnson',
    email: 'alex.johnson@university.edu',
    role: 'student' as const,
    avatar: ''
  };

  const allEvents: TimelineEvent[] = [
    // Startup Portal Events
    {
      id: '1',
      title: 'Startup Pitch Competition',
      date: 'March 15, 2024',
      year: '2024',
      category: 'startup',
      description: 'Annual startup pitch competition where students present innovative business ideas to industry experts and investors.',
      location: 'Innovation Hub',
      image: startupBg,
      attendees: 500,
      likes: 234,
      isLiked: true,
      tags: ['Startup', 'Pitch', 'Innovation', 'Competition'],
      organizer: 'Entrepreneurship Cell'
    },
    {
      id: '2',
      title: 'Founder Meetup Series',
      date: 'February 20, 2024',
      year: '2024',
      category: 'startup',
      description: 'Monthly meetup featuring successful alumni founders sharing their startup journey and insights.',
      location: 'Startup Incubator',
      image: networkingMixer,
      attendees: 150,
      likes: 89,
      isLiked: false,
      tags: ['Founder', 'Networking', 'Startup'],
      organizer: 'Alumni Entrepreneurs'
    },
    // Mentorship Events
    {
      id: '3',
      title: 'Mentor-Mentee Speed Networking',
      date: 'January 25, 2024',
      year: '2024',
      category: 'mentorship',
      description: 'Fast-paced networking event connecting students with alumni mentors across various industries.',
      location: 'Main Auditorium',
      image: mentorshipBg,
      attendees: 300,
      likes: 156,
      isLiked: true,
      tags: ['Mentorship', 'Networking', 'Career'],
      organizer: 'Career Services'
    },
    {
      id: '4',
      title: 'Industry Mentorship Program Launch',
      date: 'September 10, 2023',
      year: '2023',
      category: 'mentorship',
      description: 'Official launch of the comprehensive mentorship program connecting students with industry professionals.',
      location: 'Conference Center',
      image: panelDiscussion,
      attendees: 450,
      likes: 201,
      isLiked: true,
      tags: ['Mentorship', 'Industry', 'Program'],
      organizer: 'Alumni Relations'
    },
    // Community Events
    {
      id: '5',
      title: 'Cultural Festival 2024',
      date: 'March 8-10, 2024',
      year: '2024',
      category: 'community',
      description: 'Three-day cultural extravaganza celebrating diversity with performances, food stalls, and cultural exchanges.',
      location: 'Central Campus',
      image: networkingMixer,
      attendees: 5000,
      likes: 892,
      isLiked: true,
      tags: ['Culture', 'Festival', 'Diversity', 'Performance'],
      organizer: 'Cultural Committee'
    },
    {
      id: '6',
      title: 'Alumni Homecoming 2023',
      date: 'November 18, 2023',
      year: '2023',
      category: 'community',
      description: 'Annual homecoming celebration bringing together alumni from different generations for reunion and networking.',
      location: 'Grand Lawn',
      image: careerFair,
      attendees: 2000,
      likes: 445,
      isLiked: false,
      tags: ['Alumni', 'Homecoming', 'Reunion'],
      organizer: 'Alumni Association'
    },
    // Jobs & Career Events
    {
      id: '7',
      title: 'Tech Career Fair 2024',
      date: 'February 15, 2024',
      year: '2024',
      category: 'jobs',
      description: 'Largest career fair with 50+ tech companies offering internships and full-time positions.',
      location: 'Sports Complex',
      image: careerFair,
      attendees: 1500,
      likes: 334,
      isLiked: true,
      tags: ['Career', 'Jobs', 'Technology', 'Recruitment'],
      organizer: 'Placement Cell'
    },
    {
      id: '8',
      title: 'Industry Panel Discussion',
      date: 'December 5, 2023',
      year: '2023',
      category: 'jobs',
      description: 'Panel discussion with industry leaders discussing future job trends and career opportunities.',
      location: 'Seminar Hall',
      image: panelDiscussion,
      attendees: 800,
      likes: 178,
      isLiked: false,
      tags: ['Panel', 'Industry', 'Career', 'Future'],
      organizer: 'Career Development'
    },
    // General Events
    {
      id: '9',
      title: 'Annual Sports Meet 2024',
      date: 'January 20-25, 2024',
      year: '2024',
      category: 'events',
      description: 'Week-long sports championship featuring inter-college competitions in multiple sports categories.',
      location: 'Sports Complex',
      image: networkingMixer,
      attendees: 3000,
      likes: 567,
      isLiked: true,
      tags: ['Sports', 'Competition', 'Championship'],
      organizer: 'Sports Committee'
    },
    {
      id: '10',
      title: 'Research Symposium 2023',
      date: 'October 12-14, 2023',
      year: '2023',
      category: 'events',
      description: 'Academic conference showcasing cutting-edge research by students and faculty across various disciplines.',
      location: 'Research Center',
      image: panelDiscussion,
      attendees: 600,
      likes: 234,
      isLiked: false,
      tags: ['Research', 'Academic', 'Innovation'],
      organizer: 'Research Committee'
    }
  ];

  const filteredEvents = allEvents.filter(event => {
    const yearMatch = selectedYear === 'all' || event.year === selectedYear;
    const categoryMatch = selectedCategory === 'all' || event.category === selectedCategory;
    return yearMatch && categoryMatch;
  });

  const years = ['all', ...Array.from(new Set(allEvents.map(event => event.year))).sort().reverse()];
  const categories = [
    { value: 'all', label: 'All Categories', icon: Sparkles },
    { value: 'startup', label: 'Startup Portal', icon: Building2 },
    { value: 'mentorship', label: 'Mentorship', icon: Users2 },
    { value: 'community', label: 'Community', icon: Users },
    { value: 'jobs', label: 'Jobs & Career', icon: Briefcase },
    { value: 'events', label: 'Events', icon: Calendar }
  ];

  const toggleExpand = (eventId: string) => {
    const newExpanded = new Set(expandedEvents);
    if (newExpanded.has(eventId)) {
      newExpanded.delete(eventId);
    } else {
      newExpanded.add(eventId);
    }
    setExpandedEvents(newExpanded);
  };

  const getCategoryColor = (category: string) => {
    const colors = {
      startup: 'bg-purple-500',
      mentorship: 'bg-blue-500',
      community: 'bg-green-500',
      jobs: 'bg-orange-500',
      events: 'bg-pink-500'
    };
    return colors[category as keyof typeof colors] || 'bg-gray-500';
  };

  const getCategoryIcon = (category: string) => {
    const icons = {
      startup: Building2,
      mentorship: Users2,
      community: Users,
      jobs: Briefcase,
      events: Calendar
    };
    const IconComponent = icons[category as keyof typeof icons] || Calendar;
    return <IconComponent className="h-4 w-4" />;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-secondary/20">
      <Header user={user} />
      
      <div className="container px-6 py-8 max-w-6xl mx-auto">
        <div className="flex items-center space-x-4 mb-8">
          <Button 
            variant="outline" 
            size="sm" 
            onClick={() => navigate(-1)}
            className="flex items-center space-x-2"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back</span>
          </Button>
          
          <div>
            <h1 className="text-3xl font-bold text-foreground">College Timeline</h1>
            <p className="text-muted-foreground">Explore your college journey through events, achievements, and memories</p>
          </div>
        </div>

        {/* Filters */}
        <div className="grid md:grid-cols-2 gap-4 mb-8">
          <div>
            <label className="text-sm font-medium mb-2 block">Filter by Year</label>
            <Select value={selectedYear} onValueChange={setSelectedYear}>
              <SelectTrigger>
                <SelectValue placeholder="Select year" />
              </SelectTrigger>
              <SelectContent>
                {years.map(year => (
                  <SelectItem key={year} value={year}>
                    {year === 'all' ? 'All Years' : year}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          
          <div>
            <label className="text-sm font-medium mb-2 block">Filter by Category</label>
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger>
                <SelectValue placeholder="Select category" />
              </SelectTrigger>
              <SelectContent>
                {categories.map(category => (
                  <SelectItem key={category.value} value={category.value}>
                    <div className="flex items-center space-x-2">
                      <category.icon className="h-4 w-4" />
                      <span>{category.label}</span>
                    </div>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Timeline */}
        <div className="space-y-6">
          {filteredEvents.length === 0 ? (
            <Card className="text-center py-12">
              <CardContent>
                <Calendar className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">No events found</h3>
                <p className="text-muted-foreground">Try adjusting your filters to see more events.</p>
              </CardContent>
            </Card>
          ) : (
            filteredEvents.map((event) => (
              <Card key={event.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="flex">
                  {/* Event Image */}
                  <div className="w-48 h-48 relative flex-shrink-0">
                    <img 
                      src={event.image} 
                      alt={event.title}
                      className="w-full h-full object-cover"
                    />
                    <div className={`absolute top-3 left-3 ${getCategoryColor(event.category)} text-white px-2 py-1 rounded-full text-xs flex items-center space-x-1`}>
                      {getCategoryIcon(event.category)}
                      <span className="capitalize">{event.category}</span>
                    </div>
                  </div>
                  
                  {/* Event Content */}
                  <div className="flex-1 p-6">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <h3 className="text-xl font-bold text-foreground mb-1">{event.title}</h3>
                        <div className="flex items-center text-muted-foreground text-sm space-x-4">
                          <div className="flex items-center space-x-1">
                            <Calendar className="h-4 w-4" />
                            <span>{event.date}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <MapPin className="h-4 w-4" />
                            <span>{event.location}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Users className="h-4 w-4" />
                            <span>{event.attendees.toLocaleString()} attendees</span>
                          </div>
                        </div>
                      </div>
                      
                      <Badge variant="outline" className="px-3 py-1">
                        {event.year}
                      </Badge>
                    </div>
                    
                    <p className={`text-muted-foreground mb-4 ${expandedEvents.has(event.id) ? '' : 'line-clamp-2'}`}>
                      {event.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-1 mb-4">
                      {event.tags.slice(0, expandedEvents.has(event.id) ? event.tags.length : 3).map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                      {!expandedEvents.has(event.id) && event.tags.length > 3 && (
                        <Badge variant="secondary" className="text-xs">
                          +{event.tags.length - 3} more
                        </Badge>
                      )}
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <Button
                          variant="ghost"
                          size="sm"
                          className={`flex items-center space-x-1 ${event.isLiked ? 'text-red-500' : 'text-muted-foreground'}`}
                        >
                          <Heart className={`h-4 w-4 ${event.isLiked ? 'fill-current' : ''}`} />
                          <span>{event.likes}</span>
                        </Button>
                        
                        <Button variant="ghost" size="sm" className="flex items-center space-x-1 text-muted-foreground">
                          <Share2 className="h-4 w-4" />
                          <span>Share</span>
                        </Button>
                        
                        <div className="text-xs text-muted-foreground">
                          Organized by {event.organizer}
                        </div>
                      </div>
                      
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => toggleExpand(event.id)}
                        className="flex items-center space-x-1"
                      >
                        <Eye className="h-4 w-4" />
                        <span>{expandedEvents.has(event.id) ? 'Show Less' : 'View Details'}</span>
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            ))
          )}
        </div>
        
        {/* Summary Stats */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle>Timeline Summary</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-5 gap-4 text-center">
              {categories.slice(1).map(category => {
                const count = allEvents.filter(e => e.category === category.value).length;
                return (
                  <div key={category.value} className="space-y-2">
                    <div className={`w-12 h-12 ${getCategoryColor(category.value)} rounded-full flex items-center justify-center text-white mx-auto`}>
                      <category.icon className="h-6 w-6" />
                    </div>
                    <div className="text-2xl font-bold">{count}</div>
                    <div className="text-sm text-muted-foreground">{category.label}</div>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Timeline;