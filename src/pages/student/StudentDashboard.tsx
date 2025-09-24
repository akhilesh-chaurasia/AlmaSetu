import React from 'react';
import { 
  GraduationCap, Briefcase, Calendar, TrendingUp, Users, 
  BookOpen, Target, Brain, Zap, MessageSquare, Award, Clock
} from 'lucide-react';
import { Button } from '@/components/ui/enhanced-button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import Header from '@/components/layout/Header';
import BackButton from '@/components/ui/back-button';
import MetricsWidget from '@/components/widgets/MetricsWidget';
import ActivityWidget from '@/components/widgets/ActivityWidget';
import ChartWidget from '@/components/widgets/ChartWidget';
import QuickActionsWidget from '@/components/widgets/QuickActionsWidget';
import TimelineWidget from '@/components/widgets/TimelineWidget';
import dashboardBg from '@/assets/dashboard-bg.jpg';
import careerFair from '@/assets/events/career-fair.jpg';
import networkingMixer from '@/assets/events/networking-mixer.jpg';
import panelDiscussion from '@/assets/events/panel-discussion.jpg';

const StudentDashboard: React.FC = () => {
  const user = {
    name: 'Alex Johnson',
    email: 'alex.johnson@university.edu',
    role: 'student' as const,
    avatar: ''
  };

  const metricsData = [
    {
      id: '1',
      title: 'Profile Completion',
      value: '85%',
      change: 12,
      changeType: 'increase' as const,
      icon: Target,
      color: 'primary' as const,
      subtitle: 'Complete your profile to get better matches'
    },
    {
      id: '2',
      title: 'Active Applications',
      value: 7,
      change: 3,
      changeType: 'increase' as const,
      icon: Briefcase,
      color: 'accent' as const,
      subtitle: '2 interviews scheduled this week'
    },
    {
      id: '3',
      title: 'Mentorship Hours',
      value: 24,
      change: 8,
      changeType: 'increase' as const,
      icon: Users,
      color: 'success' as const,
      subtitle: 'Monthly goal: 30 hours'
    },
    {
      id: '4',
      title: 'Skills Assessed',
      value: '12/15',
      change: 0,
      changeType: 'neutral' as const,
      icon: Award,
      color: 'warning' as const,
      subtitle: '3 more assessments to complete'
    }
  ];

  const activityData = [
    {
      id: '1',
      type: 'success' as const,
      title: 'Application Submitted',
      description: 'Software Engineer Intern at TechCorp',
      timestamp: '2 hours ago',
      icon: Briefcase,
      user: 'Alex Johnson'
    },
    {
      id: '2',
      type: 'primary' as const,
      title: 'Mentorship Session Completed',
      description: 'Career guidance session with Sarah Chen',
      timestamp: '1 day ago',
      icon: Users,
      user: 'Sarah Chen'
    },
    {
      id: '3',
      type: 'info' as const,
      title: 'Skill Assessment Completed',
      description: 'React Development - Score: 88/100',
      timestamp: '2 days ago',
      icon: Award,
      user: 'Alex Johnson'
    },
    {
      id: '4',
      type: 'warning' as const,
      title: 'Interview Reminder',
      description: 'Technical interview with StartupXYZ tomorrow',
      timestamp: '3 days ago',
      icon: Clock,
      user: 'Alex Johnson'
    }
  ];

  const chartData = [
    { name: 'Technical Skills', value: 85, color: '#4F46E5' },
    { name: 'Communication', value: 78, color: '#06B6D4' },
    { name: 'Leadership', value: 65, color: '#10B981' },
    { name: 'Problem Solving', value: 90, color: '#F59E0B' },
    { name: 'Teamwork', value: 82, color: '#EF4444' }
  ];

  const quickActions = [
    {
      id: '1',
      title: 'Browse Job Opportunities',
      description: 'Find internships and entry-level positions',
      icon: Briefcase,
      color: 'primary' as const,
      badge: '15 New',
      onClick: () => console.log('Browse jobs')
    },
    {
      id: '2',
      title: 'Connect with Mentors',
      description: 'Find experienced alumni in your field',
      icon: Users,
      color: 'success' as const,
      badge: '5 Matches',
      onClick: () => console.log('Find mentors')
    },
    {
      id: '3',
      title: 'Take Skill Assessment',
      description: 'Improve your profile with skill verification',
      icon: Award,
      color: 'accent' as const,
      onClick: () => console.log('Skill assessment')
    },
    {
      id: '4',
      title: 'Join Study Group',
      description: 'Collaborate with peers on projects',
      icon: BookOpen,
      color: 'warning' as const,
      badge: '3 Active',
      onClick: () => console.log('Study groups')
    }
  ];

  const timelineEvents = [
    {
      id: '1',
      title: 'Annual Tech Fest 2024',
      date: 'March 15-17, 2024',
      year: '2024',
      type: 'cultural' as const,
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
      type: 'cultural' as const,
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
      type: 'academic' as const,
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
      type: 'sports' as const,
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
      type: 'networking' as const,
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
      type: 'academic' as const,
      description: 'Students and faculty presented groundbreaking research in AI, biotechnology, and sustainable engineering.',
      location: 'Research Center',
      image: panelDiscussion,
      attendees: 600,
      likes: 134,
      isLiked: false,
      tags: ['Research', 'Innovation', 'Science'],
      organizer: 'Research Committee'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-secondary/20">
      <Header user={user} />
      
      {/* Corporate Background Pattern */}
      <div className="fixed inset-0 opacity-[0.02] pointer-events-none">
        <div 
          className="w-full h-full bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${dashboardBg})` }}
        />
      </div>
      
      <div className="relative container px-6 py-8 max-w-7xl mx-auto">
        <BackButton to="/" />
        
        {/* Header Section */}
        <div className="mb-8">
          <div className="flex items-center space-x-4 mb-4">
            <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center shadow-corporate">
              <GraduationCap className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-foreground">Student Dashboard</h1>
              <p className="text-muted-foreground">Welcome back, {user.name}! Track your academic and career progress.</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <Badge variant="secondary" className="px-3 py-1">
              <Target className="h-3 w-3 mr-1" />
              Junior Year
            </Badge>
            <Badge variant="outline" className="px-3 py-1">
              <BookOpen className="h-3 w-3 mr-1" />
              Computer Science
            </Badge>
            <div className="status-indicator bg-success"></div>
            <span className="text-sm text-muted-foreground">Online</span>
          </div>
        </div>

        {/* Main Dashboard Grid */}
        <div className="grid lg:grid-cols-12 gap-6">
          
          {/* Left Column - Main Metrics and Charts */}
          <div className="lg:col-span-8 space-y-6">
            
            {/* Key Metrics */}
            <MetricsWidget 
              title="Performance Overview" 
              metrics={metricsData}
            />

            {/* Skills Chart */}
            <ChartWidget
              title="Skills Assessment Results"
              subtitle="Your proficiency across key competencies"
              data={chartData}
              type="bar"
            />

            {/* Recent Activity */}
            <ActivityWidget
              title="Recent Activity"
              activities={activityData}
            />

            {/* College Timeline */}
            <TimelineWidget
              title="College Memories & Events"
              events={timelineEvents}
              userRole="student"
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

            {/* AI Career Coach */}
            <Card className="widget-container">
              <CardHeader className="widget-header">
                <CardTitle className="flex items-center">
                  <Brain className="h-5 w-5 mr-2 text-primary" />
                  AI Career Coach
                </CardTitle>
              </CardHeader>
              <CardContent className="widget-content">
                <div className="space-y-4">
                  <div className="p-4 bg-primary/5 rounded-lg border border-primary/20">
                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                        <Brain className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm font-medium mb-1">Career Recommendation</p>
                        <p className="text-xs text-muted-foreground mb-3">
                          Based on your skills and interests, consider exploring <strong>Full-Stack Development</strong> roles.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <Button className="w-full corporate-button">
                    <MessageSquare className="h-4 w-4 mr-2" />
                    Start AI Coaching Session
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Upcoming Events */}
            <Card className="widget-container">
              <CardHeader className="widget-header">
                <CardTitle className="flex items-center">
                  <Calendar className="h-5 w-5 mr-2 text-accent" />
                  Upcoming Events
                </CardTitle>
              </CardHeader>
              <CardContent className="widget-content">
                <div className="space-y-3">
                  {[
                    {
                      title: 'Tech Career Fair 2024',
                      date: 'March 15, 2024',
                      time: '10:00 AM',
                      attendees: 150,
                      type: 'Career Fair'
                    },
                    {
                      title: 'Alumni Networking Mixer',
                      date: 'March 20, 2024',
                      time: '6:00 PM',
                      attendees: 75,
                      type: 'Networking'
                    }
                  ].map((event, index) => (
                    <div key={index} className="data-point">
                      <div className="flex-1">
                        <h4 className="font-medium text-sm">{event.title}</h4>
                        <p className="text-xs text-muted-foreground">
                          {event.date} at {event.time}
                        </p>
                        <div className="flex items-center space-x-2 mt-1">
                          <Badge variant="outline" className="text-xs">{event.type}</Badge>
                          <span className="text-xs text-muted-foreground">
                            {event.attendees} attending
                          </span>
                        </div>
                      </div>
                      <Button size="sm" variant="outline">RSVP</Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Progress Tracker */}
            <Card className="widget-container">
              <CardHeader className="widget-header">
                <CardTitle className="flex items-center">
                  <TrendingUp className="h-5 w-5 mr-2 text-success" />
                  Progress Goals
                </CardTitle>
              </CardHeader>
              <CardContent className="widget-content">
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span>Monthly Applications</span>
                      <span className="font-semibold">7/10</span>
                    </div>
                    <Progress value={70} className="h-2" />
                  </div>
                  
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span>Skill Certifications</span>
                      <span className="font-semibold">12/15</span>
                    </div>
                    <Progress value={80} className="h-2" />
                  </div>
                  
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span>Network Connections</span>
                      <span className="font-semibold">45/50</span>
                    </div>
                    <Progress value={90} className="h-2" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;