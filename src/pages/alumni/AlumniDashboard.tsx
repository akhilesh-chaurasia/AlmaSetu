import React from 'react';
import { 
  Users, Briefcase, Calendar, TrendingUp, MessageSquare, 
  GraduationCap, Award, Building2, Network, Zap, UserCheck, Users2
} from 'lucide-react';
import { Button } from '@/components/ui/enhanced-button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import Header from '@/components/layout/Header';
import BackButton from '@/components/ui/back-button';
import MetricsWidget from '@/components/widgets/MetricsWidget';
import ActivityWidget from '@/components/widgets/ActivityWidget';
import ChartWidget from '@/components/widgets/ChartWidget';
import QuickActionsWidget from '@/components/widgets/QuickActionsWidget';
import TimelineWidget from '@/components/widgets/TimelineWidget';
import mentorshipBg from '@/assets/mentorship-bg.jpg';
import careerFair from '@/assets/events/career-fair.jpg';
import networkingMixer from '@/assets/events/networking-mixer.jpg';
import panelDiscussion from '@/assets/events/panel-discussion.jpg';
import startupBg from '@/assets/startup-bg.jpg';
import { Navigate, useNavigate } from 'react-router-dom';

const AlumniDashboard: React.FC = () => {
  const user = {
    name: 'Sarah Chen',
    email: 'sarah.chen@gmail.com',
    role: 'alumni' as const,
    avatar: ''
  };

  const metricsData = [
    {
      id: '1',
      title: 'Active Mentees',
      value: 12,
      change: 15,
      changeType: 'increase' as const,
      icon: Users,
      color: 'primary' as const,
      subtitle: '3 new requests this week'
    },
    {
      id: '2',
      title: 'Jobs Posted',
      value: 8,
      change: 25,
      changeType: 'increase' as const,
      icon: Briefcase,
      color: 'accent' as const,
      subtitle: '150+ applications received'
    },
    {
      id: '3',
      title: 'Events Hosted',
      value: 6,
      change: 12,
      changeType: 'increase' as const,
      icon: Calendar,
      color: 'success' as const,
      subtitle: 'Next: Tech Career Fair 2024'
    },
    {
      id: '4',
      title: 'Network Connections',
      value: 284,
      change: 8,
      changeType: 'increase' as const,
      icon: Network,
      color: 'warning' as const,
      subtitle: 'Across 15 companies'
    }
  ];

  const activityData = [
    {
      id: '1',
      type: 'success' as const,
      title: 'New Mentee Onboarded',
      description: 'Alex Johnson from Computer Science program',
      timestamp: '1 hour ago',
      icon: UserCheck,
      user: 'Alex Johnson'
    },
    {
      id: '2',
      type: 'primary' as const,
      title: 'Job Posting Published',
      description: 'Senior Software Engineer at TechCorp',
      timestamp: '3 hours ago',
      icon: Briefcase,
      user: 'Sarah Chen'
    },
    {
      id: '3',
      type: 'info' as const,
      title: 'Event Registration Closed',
      description: 'Career Panel Discussion - 45 attendees confirmed',
      timestamp: '1 day ago',
      icon: Calendar,
      user: 'Sarah Chen'
    },
    {
      id: '4',
      type: 'warning' as const,
      title: 'Mentorship Session Reminder',
      description: 'Session with Emma Davis scheduled for tomorrow',
      timestamp: '2 days ago',
      icon: MessageSquare,
      user: 'Emma Davis'
    }
  ];

  const industryData = [
    { name: 'Technology', value: 45, color: '#4F46E5' },
    { name: 'Finance', value: 28, color: '#06B6D4' },
    { name: 'Healthcare', value: 18, color: '#10B981' },
    { name: 'Consulting', value: 15, color: '#F59E0B' },
    { name: 'Education', value: 12, color: '#EF4444' }
  ];

  const quickActions = [
    {
      id: '1',
      title: 'Review Mentorship Requests',
      description: 'New students seeking guidance',
      icon: Users,
      color: 'primary' as const,
      badge: '8 Pending',
      onClick: () => console.log('Review requests')
    },
    {
      id: '2',
      title: 'Post Job Opportunity',
      description: 'Share openings at your company',
      icon: Briefcase,
      color: 'success' as const,
      onClick: () => console.log('Post job')
    },
    {
      id: '3',
      title: 'Schedule Event',
      description: 'Host workshops or networking sessions',
      icon: Calendar,
      color: 'accent' as const,
      onClick: () => console.log('Create event')
    },
    {
      id: '4',
      title: 'Connect with Alumni',
      description: 'Expand your professional network',
      icon: Network,
      color: 'warning' as const,
      badge: '12 Suggestions',
      onClick: () => console.log('Network')
    }
  ];

  const alumniTimelineEvents = [
    {
      id: '1',
      title: 'Graduation Ceremony 2018',
      date: 'May 20, 2018',
      year: '2018',
      type: 'academic' as const,
      description: 'A memorable day when Sarah Chen graduated with honors in Computer Science. The ceremony celebrated achievements of 2,500 graduates.',
      location: 'Main Stadium',
      image: panelDiscussion,
      attendees: 15000,
      likes: 892,
      isLiked: true,
      tags: ['Graduation', 'Achievement', 'Milestone'],
      organizer: 'University Administration'
    },
    {
      id: '2',
      title: 'Tech Innovation Summit 2017',
      date: 'November 12, 2017',
      year: '2017',
      type: 'academic' as const,
      description: 'Sarah presented her final year project on AI-powered healthcare solutions. This event launched her career in tech.',
      location: 'Innovation Hub',
      image: careerFair,
      attendees: 800,
      likes: 245,
      isLiked: true,
      tags: ['Innovation', 'AI', 'Healthcare', 'Presentation'],
      organizer: 'Computer Science Department'
    },
    {
      id: '3',
      title: 'Cultural Festival 2016',
      date: 'March 18-20, 2016',
      year: '2016',
      type: 'cultural' as const,
      description: 'Sarah performed in the annual cultural festival and helped organize the international food fair. A celebration of global diversity.',
      location: 'Central Courtyard',
      image: networkingMixer,
      attendees: 4500,
      likes: 567,
      isLiked: true,
      tags: ['Culture', 'Performance', 'International', 'Food'],
      organizer: 'International Students Association'
    },
    {
      id: '4',
      title: 'Hackathon Championship 2016',
      date: 'October 15-16, 2016',
      year: '2016',
      type: 'workshop' as const,
      description: 'Sarah\'s team won first place in the 48-hour hackathon with their mobile app for campus sustainability.',
      location: 'Computer Labs Building',
      image: careerFair,
      attendees: 350,
      likes: 189,
      isLiked: false,
      tags: ['Hackathon', 'Winner', 'Sustainability', 'Mobile App'],
      organizer: 'Coding Club'
    },
    {
      id: '5',
      title: 'Freshman Welcome Week 2014',
      date: 'August 25-30, 2014',
      year: '2014',
      type: 'cultural' as const,
      description: 'Sarah\'s first week at college - making friends, joining clubs, and discovering her passion for computer science.',
      location: 'Various Campus Locations',
      image: networkingMixer,
      attendees: 3200,
      likes: 423,
      isLiked: true,
      tags: ['Freshman', 'Welcome', 'New Beginnings', 'Friendship'],
      organizer: 'Student Life Committee'
    },
    {
      id: '6',
      title: 'Annual Sports Meet 2015',
      date: 'February 10-14, 2015',
      year: '2015',
      type: 'sports' as const,
      description: 'Sarah participated in badminton doubles and helped her residence hall win the overall championship trophy.',
      location: 'Sports Complex',
      image: panelDiscussion,
      attendees: 2800,
      likes: 298,
      isLiked: false,
      tags: ['Sports', 'Badminton', 'Championship', 'Team Spirit'],
      organizer: 'Sports Committee'
    }
  ];
const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-secondary/20">
      <Header user={user} />
      
      {/* Corporate Background Pattern */}
      <div className="fixed inset-0 opacity-[0.02] pointer-events-none">
        <div 
          className="w-full h-full bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${mentorshipBg})` }}
        />
      </div>
      
      <div className="relative container px-6 py-8 max-w-7xl mx-auto">
        <BackButton to="/" />
        
        {/* Header Section */}
        <div className="mb-8">
          <div className="flex items-center space-x-4 mb-4">
            <div className="w-12 h-12 bg-gradient-corporate rounded-xl flex items-center justify-center shadow-corporate">
              <GraduationCap className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-foreground">Alumni Dashboard</h1>
              <p className="text-muted-foreground">Welcome back, {user.name}! Manage your mentorship and alumni activities.</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <Badge variant="secondary" className="px-3 py-1">
              <Building2 className="h-3 w-3 mr-1" />
              Senior Software Engineer
            </Badge>
            <Badge variant="outline" className="px-3 py-1">
              <Award className="h-3 w-3 mr-1" />
              Top Mentor 2024
            </Badge>
            <div className="status-indicator bg-success"></div>
            <span className="text-sm text-muted-foreground">Available</span>
          </div>
        </div>

        {/* Main Dashboard Grid */}
        <div className="grid lg:grid-cols-12 gap-6">
          
          {/* Left Column - Main Metrics and Charts */}
          <div className="lg:col-span-8 space-y-6">
            
            {/* Key Metrics */}
            <MetricsWidget 
              title="Alumni Impact Overview" 
              metrics={metricsData}
            />

            {/* Industry Distribution */}
            <ChartWidget
              title="Alumni by Industry"
              subtitle="Distribution of alumni across different sectors"
              data={industryData}
              type="pie"
            />

            {/* Recent Activity */}
            <ActivityWidget
              title="Recent Alumni Activities"
              activities={activityData}
            />

            {/* Alumni College Journey Categories */}
            <Card className="widget-container">
              <CardHeader className="widget-header">
                <CardTitle className="flex items-center">
                  <Calendar className="h-5 w-5 mr-2 text-primary" />
                  Your College Journey & Timeline
                </CardTitle>
                <CardDescription>
                  Relive your college experiences across different areas
                </CardDescription>
              </CardHeader>
              <CardContent className="widget-content">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
                  {[
                    {
                      title: 'Startup Portal',
                      description: 'Your entrepreneurial journey & ventures',
                      icon: Building2,
                      color: 'bg-purple-500',
                      count: '5 Projects',
                      image: startupBg
                    },
                    {
                      title: 'Mentorship',
                      description: 'Mentors who guided your path', 
                      icon: Users2,
                      color: 'bg-blue-500',
                      count: '8 Mentors',
                      image: mentorshipBg
                    },
                    {
                      title: 'Community',
                      description: 'Cultural events & social connections',
                      icon: Users,
                      color: 'bg-green-500',
                      count: '12 Events',
                      image: networkingMixer
                    },
                    {
                      title: 'Jobs & Career',
                      description: 'Career milestones & opportunities',
                      icon: Briefcase,
                      color: 'bg-orange-500',
                      count: '4 Roles',
                      image: careerFair
                    },
                    {
                      title: 'College Events',
                      description: 'Academic achievements & competitions',
                      icon: Award,
                      color: 'bg-pink-500',
                      count: '15 Events',
                      image: panelDiscussion
                    }
                  ].map((category, index) => (
                    <div 
                      key={index} 
                      className="group cursor-pointer" 
                      onClick={() => window.location.href = category.title === 'Community' ? '/community' : '/timeline'}
                    >
                      <div className="relative overflow-hidden rounded-lg bg-white border border-border hover:shadow-lg transition-all duration-300">
                        <div className="aspect-video relative">
                          <img 
                            src={category.image} 
                            alt={category.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                          <div className={`absolute top-3 right-3 ${category.color} text-white p-2 rounded-full`}>
                            <category.icon className="h-4 w-4" />
                          </div>
                          <div className="absolute bottom-3 left-3 text-white">
                            <Badge variant="secondary" className="text-xs mb-1">
                              {category.count}
                            </Badge>
                          </div>
                        </div>
                        <div className="p-4">
                          <h3 className="font-semibold text-sm mb-1">{category.title}</h3>
                          <p className="text-xs text-muted-foreground line-clamp-2">{category.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                
                <Button 
                  className="w-full corporate-button" 
                  // onClick={() =>  = '/timeline'}
                  onClick={()=>navigate('/timeline')}
                >
                  <Calendar className="h-4 w-4 mr-2" />
                  View Complete Timeline
                </Button>
              </CardContent>
            </Card>

            {/* Recent Alumni Memories */}
            <TimelineWidget
              title="Your College Memories"
              events={alumniTimelineEvents.slice(0, 3)}
              userRole="alumni"
            />
          </div>

          {/* Right Column - Quick Actions and Secondary Info */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Quick Actions */}
            <QuickActionsWidget
              title="Quick Actions"
              actions={quickActions}
              layout="list"
            />

            {/* Mentorship Requests */}
            <Card className="widget-container">
              <CardHeader className="widget-header">
                <CardTitle className="flex items-center">
                  <MessageSquare className="h-5 w-5 mr-2 text-primary" />
                  Mentorship Requests
                </CardTitle>
                <Badge variant="destructive" className="text-xs">8 New</Badge>
              </CardHeader>
              <CardContent className="widget-content">
                <div className="space-y-3">
                  {[
                    {
                      name: 'Alex Johnson',
                      major: 'Computer Science',
                      year: 'Junior',
                      interests: ['React', 'Career Guidance'],
                      matchScore: 92
                    },
                    {
                      name: 'Maria Rodriguez',
                      major: 'Information Systems',
                      year: 'Senior',
                      interests: ['Product Management', 'Leadership'],
                      matchScore: 87
                    }
                  ].map((request, index) => (
                    <div key={index} className="data-point">
                      <div className="flex items-start space-x-3 w-full">
                        <Avatar className="h-10 w-10 flex-shrink-0">
                          <AvatarFallback className="bg-primary/10 text-primary text-xs">
                            {request.name.split(' ').map(n => n[0]).join('')}
                          </AvatarFallback>
                        </Avatar>
                        
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between mb-1">
                            <h4 className="font-medium text-sm">{request.name}</h4>
                            <Badge variant="outline" className="text-xs">
                              {request.matchScore}% match
                            </Badge>
                          </div>
                          <p className="text-xs text-muted-foreground mb-2">
                            {request.major} • {request.year}
                          </p>
                          <div className="flex flex-wrap gap-1 mb-2">
                            {request.interests.map((interest) => (
                              <Badge key={interest} variant="secondary" className="text-xs">
                                {interest}
                              </Badge>
                            ))}
                          </div>
                          <div className="flex space-x-2">
                            <Button size="sm" variant="default" className="text-xs h-7">Accept</Button>
                            <Button size="sm" variant="outline" className="text-xs h-7">View</Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                
                <Button variant="ghost" className="w-full mt-3 text-primary hover:bg-primary/5">
                  View All Requests (8)
                </Button>
              </CardContent>
            </Card>

            {/* Current Mentees */}
            <Card className="widget-container">
              <CardHeader className="widget-header">
                <CardTitle className="flex items-center">
                  <Users className="h-5 w-5 mr-2 text-success" />
                  Active Mentees
                </CardTitle>
              </CardHeader>
              <CardContent className="widget-content">
                <div className="space-y-3">
                  {[
                    {
                      name: 'John Smith',
                      major: 'Computer Science',
                      progress: 'Session 3/10',
                      nextSession: 'March 20',
                      status: 'On Track'
                    },
                    {
                      name: 'Emma Davis',
                      major: 'Software Engineering',
                      progress: 'Session 7/10',
                      nextSession: 'March 18',
                      status: 'Excellent'
                    }
                  ].map((mentee, index) => (
                    <div key={index} className="data-point">
                      <div className="flex items-center space-x-3 w-full">
                        <Avatar className="h-8 w-8">
                          <AvatarFallback className="bg-success/10 text-success text-xs">
                            {mentee.name.split(' ').map(n => n[0]).join('')}
                          </AvatarFallback>
                        </Avatar>
                        
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between">
                            <h4 className="font-medium text-sm">{mentee.name}</h4>
                            <Badge 
                              variant={mentee.status === 'Excellent' ? 'default' : 'secondary'} 
                              className="text-xs"
                            >
                              {mentee.status}
                            </Badge>
                          </div>
                          <p className="text-xs text-muted-foreground">
                            {mentee.major} • {mentee.progress}
                          </p>
                          <p className="text-xs text-muted-foreground">
                            Next: {mentee.nextSession}
                          </p>
                        </div>
                        
                        <Button size="sm" variant="outline" className="text-xs">Message</Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Upcoming Events */}
            <Card className="widget-container">
              <CardHeader className="widget-header">
                <CardTitle className="flex items-center">
                  <Calendar className="h-5 w-5 mr-2 text-accent" />
                  Your Events
                </CardTitle>
              </CardHeader>
              <CardContent className="widget-content">
                <div className="space-y-3">
                  {[
                    {
                      title: 'Career Panel Discussion',
                      date: 'March 22, 2024',
                      time: '2:00 PM',
                      role: 'Speaking',
                      attendees: 45
                    },
                    {
                      title: 'Alumni Networking Mixer',
                      date: 'March 28, 2024',
                      time: '6:00 PM',
                      role: 'Hosting',
                      attendees: 120
                    }
                  ].map((event, index) => (
                    <div key={index} className="data-point">
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <h4 className="font-medium text-sm">{event.title}</h4>
                          <Badge variant="outline" className="text-xs">{event.role}</Badge>
                        </div>
                        <p className="text-xs text-muted-foreground mb-1">
                          {event.date} at {event.time}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {event.attendees} registered
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlumniDashboard;