import React from 'react';
import { 
  GraduationCap, Briefcase, Calendar, Users, 
  BookOpen, Target, MessageSquare, Award, Clock,
  Star, MapPin, ChevronRight, Search
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Input } from '@/components/ui/input';
import { useNavigate } from 'react-router-dom';
import alexAvatar from '@/assets/avatars/alex-johnson.jpg';

const StudentDashboard: React.FC = () => {
  const navigate = useNavigate();

  const metrics = [
    { title: 'Active Mentorships', value: '3', icon: Users, color: 'text-blue-600' },
    { title: 'Applications Sent', value: '12', icon: Briefcase, color: 'text-blue-600' },
    { title: 'Events Attended', value: '8', icon: Calendar, color: 'text-blue-600' },
    { title: 'Profile Score', value: '85%', icon: Award, color: 'text-blue-600' }
  ];

  const mentors = [
    {
      name: 'Sanvi Shukla',
      role: 'Senior Software Engineer at JustPay',
      location: 'Mumbai',
      experience: '2 years',
      students: '23 students',
      rating: 4.9,
      tags: ['Machine Learning', 'Python', 'Data Science'],
      avatar: alexAvatar
    },
    {
      name: 'Rahul Jha', 
      role: 'Product Manager at Google',
      location: 'Bangalore',
      experience: '6 years',
      students: '15 students',
      rating: 4.8,
      tags: ['Product Strategy', 'Analytics', 'Leadership'],
      avatar: alexAvatar
    }
  ];

  const upcomingEvents = [
    {
      title: 'Tech Career Fair 2024',
      date: 'Feb 15, 2024',
      time: '10:00 AM - 4:00 PM',
      location: 'Student Center',
      type: 'Career Fair',
      attendees: 450
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="bg-white border-b border-border">
        <div className="container mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-foreground">Student Dashboard</h1>
              <p className="text-muted-foreground mt-1">
                Explore opportunities, connect with alumni, and accelerate your career.
              </p>
            </div>
            <div className="flex items-center space-x-3">
              <Button variant="outline" className="text-muted-foreground">
                <MessageSquare className="h-4 w-4 mr-2" />
                Ask Question
              </Button>
              <Button className="bg-primary hover:bg-primary/90 text-white">
                <Search className="h-4 w-4 mr-2" />
                Find Mentors
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white border-b border-border">
        <div className="container mx-auto px-6">
          <div className="flex space-x-8">
            <button className="py-4 px-1 border-b-2 border-primary text-primary font-medium text-sm">
              <GraduationCap className="h-4 w-4 mr-2 inline" />
              Dashboard
            </button>
            <button 
              onClick={() => navigate('/timeline')}
              className="py-4 px-1 border-b-2 border-transparent text-muted-foreground hover:text-foreground font-medium text-sm"
            >
              <Calendar className="h-4 w-4 mr-2 inline" />
              AI Timetable
            </button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {metrics.map((metric, index) => (
            <Card key={index} className="hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">{metric.title}</p>
                    <p className="text-2xl font-bold text-foreground">{metric.value}</p>
                  </div>
                  <div className={`p-3 rounded-lg bg-blue-50 ${metric.color}`}>
                    <metric.icon className="h-6 w-6" />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <Card>
            <CardHeader className="pb-4">
              <CardTitle className="flex items-center text-lg">
                <Users className="h-5 w-5 mr-2" />
                Find Mentors
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="relative mb-6">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input placeholder="Search by name, company, or expertise..." className="pl-10" />
              </div>
              <div className="space-y-4">
                {mentors.map((mentor, index) => (
                  <div key={index} className="flex items-start space-x-4 p-4 border border-border rounded-lg hover:bg-gray-50 transition-colors">
                    <Avatar className="h-12 w-12">
                      <AvatarImage src={mentor.avatar} alt={mentor.name} />
                      <AvatarFallback>{mentor.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-1">
                        <h4 className="font-medium text-foreground">{mentor.name}</h4>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Star className="h-3 w-3 mr-1 fill-yellow-400 text-yellow-400" />
                          {mentor.rating}
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground mb-2">{mentor.role}</p>
                      <div className="flex space-x-2">
                        <Button variant="outline" size="sm" className="text-xs">
                          <MessageSquare className="h-3 w-3 mr-1" />
                          Message
                        </Button>
                        <Button size="sm" className="text-xs bg-primary hover:bg-primary/90">
                          Connect
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-4">
              <CardTitle className="flex items-center text-lg">
                <Calendar className="h-5 w-5 mr-2" />
                Upcoming Events
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Button 
                variant="ghost" 
                className="w-full mt-4 text-primary hover:text-primary/80"
                onClick={() => navigate('/timeline')}
              >
                View All Events
                <ChevronRight className="h-4 w-4 ml-1" />
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;