import React from 'react';
import { 
  Users, Briefcase, Calendar, TrendingUp, MessageSquare, 
  GraduationCap, Award, Building2, Network, Zap, UserCheck
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
import mentorshipBg from '@/assets/mentorship-bg.jpg';

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