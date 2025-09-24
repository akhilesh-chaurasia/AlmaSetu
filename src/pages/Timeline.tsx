import React, { useState } from 'react';
import { Calendar, Clock, MapPin, Users, Heart, Tag, ArrowLeft, Filter, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useNavigate } from 'react-router-dom';
import careerFair from '@/assets/events/career-fair.jpg';
import networkingMixer from '@/assets/events/networking-mixer.jpg';
import panelDiscussion from '@/assets/events/panel-discussion.jpg';

interface TimelineEvent {
  id: string;
  title: string;
  date: string;
  year: string;
  type: 'cultural' | 'academic' | 'sports' | 'networking';
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
  const [selectedType, setSelectedType] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [likedEvents, setLikedEvents] = useState<Set<string>>(new Set(['1', '3', '5']));

  const events: TimelineEvent[] = [
    {
      id: '1',
      title: 'Annual Tech Fest 2024',
      date: 'March 15-17, 2024',
      year: '2024',
      type: 'cultural',
      description: 'The biggest technology festival showcasing innovation, robotics competitions, and hackathons. Over 5000 participants from 50+ colleges.',
      location: 'Main Campus Auditorium',
      image: careerFair,
      attendees: 5000,
      likes: 324,
      isLiked: true,
      tags: ['Technology', 'Innovation', 'Competition'],
      organizer: 'Tech Club'
    },
    {
      id: '2',
      title: 'Cultural Night 2023',
      date: 'December 10, 2023',
      year: '2023',
      type: 'cultural',
      description: 'A spectacular evening celebrating diversity with dance, music, and theatrical performances from students worldwide.',
      location: 'Open Air Theatre',
      image: networkingMixer,
      attendees: 2500,
      likes: 189,
      isLiked: false,
      tags: ['Culture', 'Dance', 'Music', 'Theatre'],
      organizer: 'Cultural Committee'
    },
    {
      id: '3',
      title: 'Industry Expert Panel 2023',
      date: 'November 5, 2023',
      year: '2023',
      type: 'academic',
      description: 'Leading industry experts shared insights on emerging technologies and career opportunities in tech.',
      location: 'Conference Hall A',
      image: panelDiscussion,
      attendees: 800,
      likes: 156,
      isLiked: true,
      tags: ['Career', 'Industry', 'Networking'],
      organizer: 'Career Services'
    },
    {
      id: '4',
      title: 'Sports Championship 2023',
      date: 'October 20-25, 2023',
      year: '2023',
      type: 'sports',
      description: 'Inter-college sports championship featuring cricket, basketball, football, and athletics competitions.',
      location: 'Sports Complex',
      image: careerFair,
      attendees: 1200,
      likes: 98,
      isLiked: false,
      tags: ['Sports', 'Competition', 'Fitness'],
      organizer: 'Sports Committee'
    },
    {
      id: '5',
      title: 'Alumni Homecoming 2023',
      date: 'September 15, 2023',
      year: '2023',
      type: 'networking',
      description: 'Alumni from the past 20 years returned to share experiences and network with current students.',
      location: 'Grand Lawn',
      image: networkingMixer,
      attendees: 1500,
      likes: 267,
      isLiked: true,
      tags: ['Alumni', 'Networking', 'Career'],
      organizer: 'Alumni Association'
    },
    {
      id: '6',
      title: 'Research Symposium 2022',
      date: 'April 8-10, 2022',
      year: '2022',
      type: 'academic',
      description: 'Students and faculty presented groundbreaking research in AI, biotechnology, and sustainable engineering.',
      location: 'Research Center',
      image: panelDiscussion,
      attendees: 600,
      likes: 134,
      isLiked: false,
      tags: ['Research', 'Innovation', 'Science'],
      organizer: 'Research Committee'
    },
    {
      id: '7',
      title: 'Freshers Welcome 2022',
      date: 'August 20, 2022',
      year: '2022',
      type: 'cultural',
      description: 'Grand welcome ceremony for new students with orientation sessions, cultural performances, and networking activities.',
      location: 'Main Auditorium',
      image: careerFair,
      attendees: 3000,
      likes: 245,
      isLiked: false,
      tags: ['Welcome', 'Orientation', 'Culture'],
      organizer: 'Student Council'
    },
    {
      id: '8',
      title: 'International Conference 2021',
      date: 'December 5-7, 2021',
      year: '2021',
      type: 'academic',
      description: 'International conference on sustainable development and green technologies with global speakers.',
      location: 'Convention Center',
      image: panelDiscussion,
      attendees: 900,
      likes: 178,
      isLiked: false,
      tags: ['International', 'Sustainability', 'Technology'],
      organizer: 'Academic Affairs'
    }
  ];

  const handleLike = (eventId: string) => {
    const newLikedEvents = new Set(likedEvents);
    if (newLikedEvents.has(eventId)) {
      newLikedEvents.delete(eventId);
    } else {
      newLikedEvents.add(eventId);
    }
    setLikedEvents(newLikedEvents);
  };

  const filteredEvents = events.filter(event => {
    const matchesYear = selectedYear === 'all' || event.year === selectedYear;
    const matchesType = selectedType === 'all' || event.type === selectedType;
    const matchesSearch = searchQuery === '' || 
      event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    return matchesYear && matchesType && matchesSearch;
  });

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'cultural': return 'bg-purple-100 text-purple-800 border-purple-200';
      case 'academic': return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'sports': return 'bg-green-100 text-green-800 border-green-200';
      case 'networking': return 'bg-orange-100 text-orange-800 border-orange-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const years = [...new Set(events.map(event => event.year))].sort().reverse();

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-white border-b border-border">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => navigate(-1)}
                className="text-muted-foreground hover:text-foreground"
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back
              </Button>
              <div>
                <h1 className="text-2xl font-bold text-foreground">College Timeline</h1>
                <p className="text-muted-foreground">Explore memorable events and milestones</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white border-b border-border">
        <div className="container mx-auto px-6 py-4">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search events..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            <div className="flex gap-2">
              <Select value={selectedYear} onValueChange={setSelectedYear}>
                <SelectTrigger className="w-32">
                  <SelectValue placeholder="Year" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Years</SelectItem>
                  {years.map(year => (
                    <SelectItem key={year} value={year}>{year}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Select value={selectedType} onValueChange={setSelectedType}>
                <SelectTrigger className="w-36">
                  <SelectValue placeholder="Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Types</SelectItem>
                  <SelectItem value="cultural">Cultural</SelectItem>
                  <SelectItem value="academic">Academic</SelectItem>
                  <SelectItem value="sports">Sports</SelectItem>
                  <SelectItem value="networking">Networking</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </div>

      {/* Timeline Content */}
      <div className="container mx-auto px-6 py-8">
        <div className="max-w-4xl mx-auto">
          {filteredEvents.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No events found matching your criteria.</p>
            </div>
          ) : (
            <div className="space-y-8">
              {filteredEvents.map((event, index) => (
                <div key={event.id} className="relative">
                  {/* Timeline Line */}
                  {index !== filteredEvents.length - 1 && (
                    <div className="absolute left-6 top-16 w-0.5 h-full bg-border z-0"></div>
                  )}
                  
                  {/* Timeline Dot */}
                  <div className="absolute left-4 top-8 w-4 h-4 bg-primary rounded-full border-4 border-white shadow-sm z-10"></div>
                  
                  {/* Event Card */}
                  <div className="ml-12">
                    <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-200">
                      <div className="flex flex-col md:flex-row">
                        {/* Image */}
                        <div className="md:w-80 h-48 md:h-auto">
                          <img
                            src={event.image}
                            alt={event.title}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        
                        {/* Content */}
                        <CardContent className="flex-1 p-6">
                          <div className="flex flex-col h-full">
                            {/* Header */}
                            <div className="flex items-start justify-between mb-3">
                              <div className="flex-1">
                                <h3 className="text-xl font-semibold text-foreground mb-1">
                                  {event.title}
                                </h3>
                                <div className="flex items-center text-sm text-muted-foreground space-x-4">
                                  <div className="flex items-center">
                                    <Calendar className="h-4 w-4 mr-1" />
                                    {event.date}
                                  </div>
                                  <div className="flex items-center">
                                    <MapPin className="h-4 w-4 mr-1" />
                                    {event.location}
                                  </div>
                                </div>
                              </div>
                              <Badge className={`ml-4 ${getTypeColor(event.type)}`}>
                                {event.type.charAt(0).toUpperCase() + event.type.slice(1)}
                              </Badge>
                            </div>
                            
                            {/* Description */}
                            <p className="text-muted-foreground mb-4 flex-1">
                              {event.description}
                            </p>
                            
                            {/* Tags */}
                            <div className="flex flex-wrap gap-2 mb-4">
                              {event.tags.map((tag, tagIndex) => (
                                <Badge key={tagIndex} variant="outline" className="text-xs">
                                  <Tag className="h-3 w-3 mr-1" />
                                  {tag}
                                </Badge>
                              ))}
                            </div>
                            
                            {/* Footer */}
                            <div className="flex items-center justify-between pt-4 border-t border-border">
                              <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                                <div className="flex items-center">
                                  <Users className="h-4 w-4 mr-1" />
                                  {event.attendees.toLocaleString()} attended
                                </div>
                                <div className="text-xs">
                                  by {event.organizer}
                                </div>
                              </div>
                              
                              <Button
                                variant="ghost"
                                size="sm"
                                onClick={() => handleLike(event.id)}
                                className={`${
                                  likedEvents.has(event.id)
                                    ? 'text-red-500 hover:text-red-600'
                                    : 'text-muted-foreground hover:text-red-500'
                                }`}
                              >
                                <Heart
                                  className={`h-4 w-4 mr-1 ${
                                    likedEvents.has(event.id) ? 'fill-current' : ''
                                  }`}
                                />
                                {likedEvents.has(event.id) ? event.likes + 1 : event.likes}
                              </Button>
                            </div>
                          </div>
                        </CardContent>
                      </div>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Timeline;