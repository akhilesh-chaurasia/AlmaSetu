import React from 'react';
import { 
  Brain, Calendar, Users, Briefcase, TrendingUp, MessageSquare, 
  BookOpen, Target, Clock, ChevronRight, Star, MapPin, Award
} from 'lucide-react';
import { Button } from '@/components/ui/enhanced-button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import Header from '@/components/layout/Header';
import StartupPortal from '@/components/StartupPortal';
import BackButton from '@/components/ui/back-button';
import dashboardBg from '@/assets/dashboard-bg.jpg';
import sarahChenAvatar from '@/assets/avatars/sarah-chen.jpg';
import michaelRodriguezAvatar from '@/assets/avatars/michael-rodriguez.jpg';
import alexJohnsonAvatar from '@/assets/avatars/alex-johnson.jpg';
import careerFairImage from '@/assets/events/career-fair.jpg';

const StudentDashboard: React.FC = () => {
  const user = {
    name: 'Alex Johnson',
    email: 'alex.johnson@university.edu',
    role: 'student' as const,
    avatar: alexJohnsonAvatar
  };

  const upcomingEvents = [
    {
      id: 1,
      title: 'Tech Career Fair 2024',
      date: 'March 15, 2024',
      time: '10:00 AM',
      location: 'Main Auditorium',
      attendees: 150,
      type: 'Career Fair',
      image: careerFairImage
    },
    {
      id: 2,
      title: 'Alumni Networking Mixer',
      date: 'March 20, 2024',
      time: '6:00 PM',
      location: 'Alumni Center',
      attendees: 75,
      type: 'Networking',
      image: ''
    }
  ];

  const suggestedMentors = [
    {
      id: 1,
      name: 'Sarah Chen',
      role: 'Senior Software Engineer',
      company: 'Google',
      expertise: ['React', 'Node.js', 'System Design'],
      matchScore: 95,
      avatar: sarahChenAvatar,
      experience: '8 years'
    },
    {
      id: 2,
      name: 'Michael Rodriguez',
      role: 'Product Manager',
      company: 'Microsoft',
      expertise: ['Product Strategy', 'Data Analysis', 'Leadership'],
      matchScore: 89,
      avatar: michaelRodriguezAvatar,
      experience: '6 years'
    },
    {
      id: 3,
      name: 'Dr. Emily Johnson',
      role: 'Research Scientist',
      company: 'DeepMind',
      expertise: ['Machine Learning', 'AI Research', 'Python'],
      matchScore: 87,
      avatar: '',
      experience: '10 years'
    }
  ];

  const careerProgress = {
    profileCompletion: 75,
    skillsAssessed: 8,
    totalSkills: 12,
    mentorshipHours: 15,
    targetHours: 25,
    applicationsSubmitted: 5,
    interviewsScheduled: 2
  };

  return (
    <div className="min-h-screen bg-background">
      <Header user={user} />
      
      {/* Background */}
      <div 
        className="fixed inset-0 bg-cover bg-center bg-no-repeat opacity-5"
        style={{ backgroundImage: `url(${dashboardBg})` }}
      />
      
      <div className="relative z-10 container px-6 py-8">
        <BackButton to="/" />
        
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Welcome back, {user.name}! 👋</h1>
          <p className="text-muted-foreground text-lg">
            Ready to accelerate your career journey? Here's what's happening today.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* AI Career Coach */}
            <Card variant="premium" className="overflow-hidden">
              <div className="bg-gradient-primary p-6 text-white">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                    <Brain className="h-6 w-6" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold">AI Career Coach</h2>
                    <p className="text-white/90">Get personalized guidance for your career path</p>
                  </div>
                </div>
              </div>
              
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="flex items-start space-x-3 p-4 bg-muted/50 rounded-lg">
                    <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <Target className="h-4 w-4 text-primary" />
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold text-sm mb-1">Career Recommendation</p>
                      <p className="text-sm text-muted-foreground mb-3">
                        Based on your profile and interests, we recommend exploring <strong>Full-Stack Development</strong> roles.
                      </p>
                      <Button variant="outline" size="sm">
                        Learn More
                        <ChevronRight className="ml-1 h-3 w-3" />
                      </Button>
                    </div>
                  </div>
                  
                  <Button variant="hero" className="w-full">
                    <MessageSquare className="mr-2 h-4 w-4" />
                    Chat with AI Coach
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Suggested Mentors */}
            <Card variant="elevated">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="flex items-center">
                      <Users className="mr-2 h-5 w-5 text-primary" />
                      Suggested Mentors
                    </CardTitle>
                    <CardDescription>
                      AI-matched mentors based on your career goals
                    </CardDescription>
                  </div>
                  <Button variant="outline" size="sm">View All</Button>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4">
                {suggestedMentors.map((mentor) => (
                  <div key={mentor.id} className="flex items-center space-x-4 p-4 border rounded-lg hover:bg-muted/50 transition-colors">
                    <Avatar className="h-12 w-12">
                      <AvatarImage src={mentor.avatar} />
                      <AvatarFallback className="bg-gradient-primary text-white">
                        {mentor.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center space-x-2 mb-1">
                        <h4 className="font-semibold truncate">{mentor.name}</h4>
                        <Badge variant="secondary" className="text-xs">
                          {mentor.matchScore}% match
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground mb-1">
                        {mentor.role} at {mentor.company}
                      </p>
                      <div className="flex flex-wrap gap-1">
                        {mentor.expertise.slice(0, 2).map((skill) => (
                          <Badge key={skill} variant="outline" className="text-xs">
                            {skill}
                          </Badge>
                        ))}
                        {mentor.expertise.length > 2 && (
                          <Badge variant="outline" className="text-xs">
                            +{mentor.expertise.length - 2} more
                          </Badge>
                        )}
                      </div>
                    </div>
                    
                    <div className="flex flex-col space-y-2">
                      <Button size="sm" variant="default">
                        Connect
                      </Button>
                      <Button size="sm" variant="outline">
                        View Profile
                      </Button>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Recent Job Opportunities */}
            <Card variant="elevated">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="flex items-center">
                      <Briefcase className="mr-2 h-5 w-5 text-primary" />
                      Job Opportunities
                    </CardTitle>
                    <CardDescription>
                      Latest opportunities matching your profile
                    </CardDescription>
                  </div>
                  <Button variant="outline" size="sm">Browse All</Button>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4">
                {[
                  {
                    title: 'Software Engineer Intern',
                    company: 'TechCorp',
                    location: 'San Francisco, CA',
                    type: 'Internship',
                    salary: '$25-30/hour',
                    posted: '2 days ago'
                  },
                  {
                    title: 'Junior Full-Stack Developer',
                    company: 'StartupXYZ',
                    location: 'Remote',
                    type: 'Full-time',
                    salary: '$70-80k',
                    posted: '1 week ago'
                  }
                ].map((job, index) => (
                  <div key={index} className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/50 transition-colors">
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-1">
                        <h4 className="font-semibold">{job.title}</h4>
                        <Badge variant="secondary">{job.type}</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground mb-1">{job.company}</p>
                      <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                        <span className="flex items-center">
                          <MapPin className="mr-1 h-3 w-3" />
                          {job.location}
                        </span>
                        <span>{job.salary}</span>
                        <span>{job.posted}</span>
                      </div>
                    </div>
                    
                    <div className="flex space-x-2">
                      <Button size="sm" variant="outline">Save</Button>
                      <Button size="sm">Apply</Button>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Startup Portal */}
            <StartupPortal userRole="student" />
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            
            {/* Career Progress */}
            <Card variant="gradient">
              <CardHeader>
                <CardTitle className="flex items-center text-lg">
                  <TrendingUp className="mr-2 h-5 w-5 text-primary" />
                  Career Progress
                </CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span>Profile Completion</span>
                    <span className="font-semibold">{careerProgress.profileCompletion}%</span>
                  </div>
                  <Progress value={careerProgress.profileCompletion} className="h-2" />
                </div>
                
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span>Skills Assessed</span>
                    <span className="font-semibold">{careerProgress.skillsAssessed}/{careerProgress.totalSkills}</span>
                  </div>
                  <Progress value={(careerProgress.skillsAssessed / careerProgress.totalSkills) * 100} className="h-2" />
                </div>
                
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span>Mentorship Hours</span>
                    <span className="font-semibold">{careerProgress.mentorshipHours}/{careerProgress.targetHours}</span>
                  </div>
                  <Progress value={(careerProgress.mentorshipHours / careerProgress.targetHours) * 100} className="h-2" />
                </div>

                <div className="pt-4 space-y-2 border-t">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Applications Submitted</span>
                    <Badge variant="secondary">{careerProgress.applicationsSubmitted}</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Interviews Scheduled</span>
                    <Badge variant="success">{careerProgress.interviewsScheduled}</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Upcoming Events */}
            <Card variant="elevated">
              <CardHeader>
                <CardTitle className="flex items-center text-lg">
                  <Calendar className="mr-2 h-5 w-5 text-primary" />
                  Upcoming Events
                </CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-4">
                {upcomingEvents.map((event) => (
                  <div key={event.id} className="group">
                    <div className="relative overflow-hidden rounded-lg mb-3">
                      {event.image && (
                        <img 
                          src={event.image} 
                          alt={event.title}
                          className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                      <Badge 
                        variant="outline" 
                        className="absolute top-2 right-2 bg-white/90 backdrop-blur-sm text-xs"
                      >
                        {event.type}
                      </Badge>
                    </div>
                    <div className="space-y-2 p-3 border rounded-lg group-hover:shadow-md transition-shadow">
                      <h4 className="font-semibold text-sm">{event.title}</h4>
                      <div className="text-xs text-muted-foreground space-y-1">
                        <div className="flex items-center">
                          <Clock className="mr-1 h-3 w-3" />
                          {event.date} at {event.time}
                        </div>
                        <div className="flex items-center">
                          <MapPin className="mr-1 h-3 w-3" />
                          {event.location}
                        </div>
                        <div className="flex items-center">
                          <Users className="mr-1 h-3 w-3" />
                          {event.attendees} attendees
                        </div>
                      </div>
                      <Button size="sm" variant="outline" className="w-full hover-scale">
                        RSVP
                      </Button>
                    </div>
                  </div>
                ))}
                
                <Button variant="ghost" size="sm" className="w-full">
                  View All Events
                  <ChevronRight className="ml-1 h-3 w-3" />
                </Button>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card variant="elevated">
              <CardHeader>
                <CardTitle className="text-lg">Quick Actions</CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-3">
                <Button variant="outline" className="w-full justify-start">
                  <BookOpen className="mr-2 h-4 w-4" />
                  Update Profile
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Award className="mr-2 h-4 w-4" />
                  Take Skill Assessment
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <MessageSquare className="mr-2 h-4 w-4" />
                  Message Mentors
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Star className="mr-2 h-4 w-4" />
                  Rate Experience
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;