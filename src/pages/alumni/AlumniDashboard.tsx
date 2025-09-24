import React from 'react';
import { 
  Users, Briefcase, Calendar, MessageSquare, Award,
  Star, MapPin, ChevronRight, Search, Building
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Input } from '@/components/ui/input';
import { useNavigate } from 'react-router-dom';
import sarahAvatar from '@/assets/avatars/sarah-chen.jpg';

const AlumniDashboard: React.FC = () => {
  const navigate = useNavigate();

  const metrics = [
    { title: 'Students Mentored', value: '23', icon: Users, color: 'text-blue-600' },
    { title: 'Job Referrals', value: '8', icon: Briefcase, color: 'text-blue-600' },
    { title: 'Events Hosted', value: '5', icon: Calendar, color: 'text-blue-600' },
    { title: 'Impact Score', value: '92%', icon: Award, color: 'text-blue-600' }
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="bg-white border-b border-border">
        <div className="container mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-foreground">Alumni Dashboard</h1>
              <p className="text-muted-foreground mt-1">
                Connect with students, share your experience, and give back to the community.
              </p>
            </div>
            <div className="flex items-center space-x-3">
              <Button variant="outline" className="text-muted-foreground">
                <MessageSquare className="h-4 w-4 mr-2" />
                Messages
              </Button>
              <Button className="bg-primary hover:bg-primary/90 text-white">
                <Users className="h-4 w-4 mr-2" />
                Find Students
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white border-b border-border">
        <div className="container mx-auto px-6">
          <div className="flex space-x-8">
            <button className="py-4 px-1 border-b-2 border-primary text-primary font-medium text-sm">
              <Building className="h-4 w-4 mr-2 inline" />
              Dashboard
            </button>
            <button 
              onClick={() => navigate('/timeline')}
              className="py-4 px-1 border-b-2 border-transparent text-muted-foreground hover:text-foreground font-medium text-sm"
            >
              <Calendar className="h-4 w-4 mr-2 inline" />
              College Timeline
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

        <Card>
          <CardHeader>
            <CardTitle>Connect with Students</CardTitle>
          </CardHeader>
          <CardContent>
            <Button 
              variant="ghost" 
              className="w-full mt-4 text-primary hover:text-primary/80"
              onClick={() => navigate('/timeline')}
            >
              View College Timeline
              <ChevronRight className="h-4 w-4 ml-1" />
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AlumniDashboard;