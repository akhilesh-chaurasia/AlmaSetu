import React from 'react';
import { 
  Users, Calendar, Briefcase, TrendingUp, MessageSquare, 
  Plus, Award, Clock, ChevronRight, MapPin, Building2, BookOpen
} from 'lucide-react';
import { Button } from '@/components/ui/enhanced-button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import Header from '@/components/layout/Header';
import StartupPortal from '@/components/StartupPortal';
import BackButton from '@/components/ui/back-button';
import mentorshipBg from '@/assets/mentorship-bg.jpg';

const AlumniDashboard: React.FC = () => {
  const user = {
    name: 'Sarah Chen',
    email: 'sarah.chen@gmail.com',
    role: 'alumni' as const,
    avatar: ''
  };

  const mentorshipRequests = [
    {
      id: 1,
      student: 'Alex Johnson',
      major: 'Computer Science',
      year: 'Junior',
      interests: ['React', 'Node.js', 'Career Guidance'],
      message: 'Hi Sarah! I\'m interested in pursuing a career in software engineering and would love to learn from your experience at Google.',
      matchScore: 92,
      requestDate: '2 days ago'
    },
    {
      id: 2,
      student: 'Maria Rodriguez',
      major: 'Information Systems',
      year: 'Senior',
      interests: ['Product Management', 'Tech Leadership', 'Startups'],
      message: 'Hello! I\'m graduating soon and considering product management roles. Your background would be incredibly valuable.',
      matchScore: 87,
      requestDate: '1 week ago'
    }
  ];

  const myMentees = [
    {
      id: 1,
      name: 'John Smith',
      major: 'Computer Science',
      year: 'Sophomore',
      avatar: '',
      progress: 'Completed 3 sessions',
      nextSession: 'March 20, 2024',
      status: 'Active'
    },
    {
      id: 2,
      name: 'Emma Davis',
      major: 'Software Engineering',
      year: 'Junior',
      avatar: '',
      progress: 'Completed 7 sessions',
      nextSession: 'March 18, 2024',
      status: 'Active'
    }
  ];

  const stats = {
    totalMentees: 15,
    activeMentorships: 5,
    hoursContributed: 120,
    jobsPosted: 3,
    eventsHosted: 8,
    networkConnections: 250
  };

  const recentActivity = [
    {
      type: 'mentorship',
      title: 'Completed session with John Smith',
      time: '2 hours ago',
      icon: Users
    },
    {
      type: 'job',
      title: 'Posted Software Engineer position',
      time: '1 day ago',
      icon: Briefcase
    },
    {
      type: 'event',
      title: 'Registered for Tech Career Fair',
      time: '3 days ago',
      icon: Calendar
    },
    {
      type: 'connection',
      title: 'Connected with 5 new alumni',
      time: '1 week ago',
      icon: MessageSquare
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header user={user} />
      
      {/* Background */}
      <div 
        className="fixed inset-0 bg-cover bg-center bg-no-repeat opacity-5"
        style={{ backgroundImage: `url(${mentorshipBg})` }}
      />
      
      <div className="relative z-10 container px-6 py-8">
        <BackButton to="/" />
        
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Welcome back, {user.name}! 🌟</h1>
          <p className="text-muted-foreground text-lg">
            Ready to make a difference? Here's your mentorship and alumni engagement overview.
          </p>
        </div>

        {/* Stats Overview */}
        <div className="grid md:grid-cols-6 gap-4 mb-8">
          <Card variant="gradient" className="text-center p-4">
            <div className="text-2xl font-bold text-primary">{stats.totalMentees}</div>
            <div className="text-sm text-muted-foreground">Total Mentees</div>
          </Card>
          <Card variant="gradient" className="text-center p-4">
            <div className="text-2xl font-bold text-success">{stats.activeMentorships}</div>
            <div className="text-sm text-muted-foreground">Active Mentorships</div>
          </Card>
          <Card variant="gradient" className="text-center p-4">
            <div className="text-2xl font-bold text-accent">{stats.hoursContributed}</div>
            <div className="text-sm text-muted-foreground">Hours Contributed</div>
          </Card>
          <Card variant="gradient" className="text-center p-4">
            <div className="text-2xl font-bold text-warning">{stats.jobsPosted}</div>
            <div className="text-sm text-muted-foreground">Jobs Posted</div>
          </Card>
          <Card variant="gradient" className="text-center p-4">
            <div className="text-2xl font-bold text-primary">{stats.eventsHosted}</div>
            <div className="text-sm text-muted-foreground">Events Hosted</div>
          </Card>
          <Card variant="gradient" className="text-center p-4">
            <div className="text-2xl font-bold text-accent">{stats.networkConnections}</div>
            <div className="text-sm text-muted-foreground">Connections</div>
          </Card>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* Mentorship Requests */}
            <Card variant="elevated">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="flex items-center">
                      <MessageSquare className="mr-2 h-5 w-5 text-primary" />
                      Mentorship Requests
                      <Badge variant="destructive" className="ml-2">{mentorshipRequests.length} New</Badge>
                    </CardTitle>
                    <CardDescription>
                      Students seeking your mentorship and guidance
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4">
                {mentorshipRequests.map((request) => (
                  <div key={request.id} className="p-4 border rounded-lg space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <Avatar className="h-10 w-10">
                          <AvatarFallback className="bg-gradient-primary text-white">
                            {request.student.split(' ').map(n => n[0]).join('')}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="flex items-center space-x-2">
                            <h4 className="font-semibold">{request.student}</h4>
                            <Badge variant="outline" className="text-xs">
                              {request.matchScore}% match
                            </Badge>
                          </div>
                          <p className="text-sm text-muted-foreground">
                            {request.major} • {request.year} • {request.requestDate}
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-1 mb-2">
                      {request.interests.map((interest) => (
                        <Badge key={interest} variant="secondary" className="text-xs">
                          {interest}
                        </Badge>
                      ))}
                    </div>
                    
                    <p className="text-sm text-muted-foreground bg-muted/50 p-3 rounded italic">
                      "{request.message}"
                    </p>
                    
                    <div className="flex space-x-2">
                      <Button size="sm" variant="success">
                        Accept Request
                      </Button>
                      <Button size="sm" variant="outline">
                        Schedule Call
                      </Button>
                      <Button size="sm" variant="ghost">
                        Decline
                      </Button>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Current Mentees */}
            <Card variant="elevated">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="flex items-center">
                      <Users className="mr-2 h-5 w-5 text-primary" />
                      Current Mentees
                    </CardTitle>
                    <CardDescription>
                      Students you're actively mentoring
                    </CardDescription>
                  </div>
                  <Button variant="outline" size="sm">View All</Button>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4">
                {myMentees.map((mentee) => (
                  <div key={mentee.id} className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/50 transition-colors">
                    <div className="flex items-center space-x-4">
                      <Avatar className="h-10 w-10">
                        <AvatarImage src={mentee.avatar} />
                        <AvatarFallback className="bg-gradient-primary text-white">
                          {mentee.name.split(' ').map(n => n[0]).join('')}
                        </AvatarFallback>
                      </Avatar>
                      
                      <div>
                        <div className="flex items-center space-x-2">
                          <h4 className="font-semibold">{mentee.name}</h4>
                          <Badge variant="success" className="text-xs">{mentee.status}</Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          {mentee.major} • {mentee.year}
                        </p>
                        <p className="text-xs text-muted-foreground mt-1">
                          {mentee.progress} • Next: {mentee.nextSession}
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex space-x-2">
                      <Button size="sm" variant="outline">
                        Message
                      </Button>
                      <Button size="sm">
                        Schedule
                      </Button>
                    </div>
                  </div>
                ))}
                
                <Button variant="ghost" className="w-full">
                  <Plus className="mr-2 h-4 w-4" />
                  Add New Mentee
                </Button>
              </CardContent>
            </Card>

            {/* Startup Portal */}
            <StartupPortal userRole="alumni" />
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            
            {/* Quick Actions */}
            <Card variant="premium">
              <CardHeader>
                <CardTitle className="text-lg">Quick Actions</CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-3">
                <Button variant="gradient" className="w-full justify-start">
                  <Plus className="mr-2 h-4 w-4" />
                  Post Job Opportunity
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Calendar className="mr-2 h-4 w-4" />
                  Create Event
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Users className="mr-2 h-4 w-4" />
                  Browse Students
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <BookOpen className="mr-2 h-4 w-4" />
                  Share Knowledge
                </Button>
              </CardContent>
            </Card>

            {/* Recent Activity */}
            <Card variant="elevated">
              <CardHeader>
                <CardTitle className="flex items-center text-lg">
                  <TrendingUp className="mr-2 h-5 w-5 text-primary" />
                  Recent Activity
                </CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-3">
                {recentActivity.map((activity, index) => (
                  <div key={index} className="flex items-start space-x-3 p-2">
                    <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <activity.icon className="h-4 w-4 text-primary" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium">{activity.title}</p>
                      <p className="text-xs text-muted-foreground">{activity.time}</p>
                    </div>
                  </div>
                ))}
                
                <Button variant="ghost" size="sm" className="w-full">
                  View All Activity
                  <ChevronRight className="ml-1 h-3 w-3" />
                </Button>
              </CardContent>
            </Card>

            {/* Upcoming Events */}
            <Card variant="elevated">
              <CardHeader>
                <CardTitle className="flex items-center text-lg">
                  <Calendar className="mr-2 h-5 w-5 text-primary" />
                  Your Events
                </CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-3">
                {[
                  {
                    title: 'Career Panel Discussion',
                    date: 'March 22, 2024',
                    time: '2:00 PM',
                    type: 'Speaking',
                    attendees: 45
                  },
                  {
                    title: 'Alumni Networking Mixer',
                    date: 'March 28, 2024',
                    time: '6:00 PM',
                    type: 'Hosting',
                    attendees: 120
                  }
                ].map((event, index) => (
                  <div key={index} className="p-3 border rounded-lg space-y-2">
                    <div className="flex items-center justify-between">
                      <h4 className="font-semibold text-sm">{event.title}</h4>
                      <Badge variant="outline" className="text-xs">{event.type}</Badge>
                    </div>
                    <div className="text-xs text-muted-foreground space-y-1">
                      <div className="flex items-center">
                        <Clock className="mr-1 h-3 w-3" />
                        {event.date} at {event.time}
                      </div>
                      <div className="flex items-center">
                        <Users className="mr-1 h-3 w-3" />
                        {event.attendees} registered
                      </div>
                    </div>
                  </div>
                ))}
                
                <Button variant="ghost" size="sm" className="w-full">
                  Manage Events
                  <ChevronRight className="ml-1 h-3 w-3" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlumniDashboard;