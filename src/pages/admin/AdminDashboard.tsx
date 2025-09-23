import React from 'react';
import { 
  Shield, Users, TrendingUp, Calendar, CheckCircle, 
  AlertTriangle, BarChart3, PieChart, Activity, Settings
} from 'lucide-react';
import { Button } from '@/components/ui/enhanced-button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import Header from '@/components/layout/Header';

const AdminDashboard: React.FC = () => {
  const user = {
    name: 'Dr. Emily Johnson',
    email: 'admin@university.edu',
    role: 'admin' as const,
    avatar: ''
  };

  const platformStats = {
    totalUsers: 15420,
    activeStudents: 8950,
    verifiedAlumni: 6470,
    pendingVerifications: 45,
    totalMentorships: 3200,
    activeMentorships: 890,
    jobPostings: 156,
    upcomingEvents: 23,
    platformGrowth: 12.5 // percentage
  };

  const pendingVerifications = [
    {
      id: 1,
      name: 'Michael Chen',
      email: 'michael.chen@email.com',
      role: 'Alumni',
      company: 'Microsoft',
      position: 'Senior Software Engineer',
      submittedDate: '2 days ago',
      documents: ['Diploma', 'Employment Letter']
    },
    {
      id: 2,
      name: 'Sarah Williams',
      email: 'sarah.w@email.com',
      role: 'Alumni',
      company: 'Amazon',
      position: 'Product Manager',
      submittedDate: '1 week ago',
      documents: ['Diploma', 'LinkedIn Profile']
    }
  ];

  const recentActivity = [
    { type: 'user', action: 'New student registration', user: 'Alex Thompson', time: '5 min ago' },
    { type: 'mentor', action: 'Mentorship session completed', user: 'Sarah Chen & John Doe', time: '1 hour ago' },
    { type: 'job', action: 'New job posting', user: 'TechCorp', time: '3 hours ago' },
    { type: 'event', action: 'Event registration milestone', user: 'Career Fair 2024 (100+ attendees)', time: '6 hours ago' }
  ];

  const monthlyMetrics = [
    { month: 'Jan', students: 120, alumni: 85, mentorships: 45 },
    { month: 'Feb', students: 150, alumni: 92, mentorships: 67 },
    { month: 'Mar', students: 180, alumni: 110, mentorships: 89 }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header user={user} />
      
      <div className="container px-6 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Admin Dashboard 🛡️</h1>
          <p className="text-muted-foreground text-lg">
            Monitor platform health, manage users, and oversee alumni engagement activities.
          </p>
        </div>

        {/* Key Metrics */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <Card variant="gradient" className="text-center p-6">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
              <Users className="h-6 w-6 text-primary" />
            </div>
            <div className="text-2xl font-bold mb-1">{platformStats.totalUsers.toLocaleString()}</div>
            <div className="text-sm text-muted-foreground">Total Users</div>
            <div className="flex items-center justify-center mt-2 text-xs text-success">
              <TrendingUp className="h-3 w-3 mr-1" />
              +{platformStats.platformGrowth}% this month
            </div>
          </Card>

          <Card variant="gradient" className="text-center p-6">
            <div className="w-12 h-12 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-3">
              <CheckCircle className="h-6 w-6 text-success" />
            </div>
            <div className="text-2xl font-bold mb-1">{platformStats.activeMentorships}</div>
            <div className="text-sm text-muted-foreground">Active Mentorships</div>
            <div className="text-xs text-muted-foreground mt-2">
              of {platformStats.totalMentorships} total
            </div>
          </Card>

          <Card variant="gradient" className="text-center p-6">
            <div className="w-12 h-12 bg-warning/10 rounded-full flex items-center justify-center mx-auto mb-3">
              <AlertTriangle className="h-6 w-6 text-warning" />
            </div>
            <div className="text-2xl font-bold mb-1">{platformStats.pendingVerifications}</div>
            <div className="text-sm text-muted-foreground">Pending Verifications</div>
            <Button variant="warning" size="sm" className="mt-2 text-xs">
              Review Now
            </Button>
          </Card>

          <Card variant="gradient" className="text-center p-6">
            <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-3">
              <Calendar className="h-6 w-6 text-accent" />
            </div>
            <div className="text-2xl font-bold mb-1">{platformStats.upcomingEvents}</div>
            <div className="text-sm text-muted-foreground">Upcoming Events</div>
            <div className="text-xs text-muted-foreground mt-2">
              {platformStats.jobPostings} active job postings
            </div>
          </Card>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* Pending Verifications */}
            <Card variant="elevated">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="flex items-center">
                      <Shield className="mr-2 h-5 w-5 text-primary" />
                      Verification Queue
                      <Badge variant="warning" className="ml-2">{pendingVerifications.length} Pending</Badge>
                    </CardTitle>
                    <CardDescription>
                      Alumni awaiting verification approval
                    </CardDescription>
                  </div>
                  <Button variant="outline" size="sm">View All</Button>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4">
                {pendingVerifications.map((verification) => (
                  <div key={verification.id} className="p-4 border rounded-lg space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <Avatar className="h-10 w-10">
                          <AvatarFallback className="bg-gradient-primary text-white">
                            {verification.name.split(' ').map(n => n[0]).join('')}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <h4 className="font-semibold">{verification.name}</h4>
                          <p className="text-sm text-muted-foreground">{verification.email}</p>
                        </div>
                      </div>
                      <Badge variant="outline">{verification.role}</Badge>
                    </div>
                    
                    <div className="bg-muted/50 p-3 rounded space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span className="font-medium">Position:</span>
                        <span>{verification.position}</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="font-medium">Company:</span>
                        <span>{verification.company}</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="font-medium">Submitted:</span>
                        <span>{verification.submittedDate}</span>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-1 mb-3">
                      <span className="text-xs text-muted-foreground">Documents:</span>
                      {verification.documents.map((doc) => (
                        <Badge key={doc} variant="secondary" className="text-xs">
                          {doc}
                        </Badge>
                      ))}
                    </div>
                    
                    <div className="flex space-x-2">
                      <Button size="sm" variant="success">
                        Approve
                      </Button>
                      <Button size="sm" variant="outline">
                        Review Documents
                      </Button>
                      <Button size="sm" variant="ghost">
                        Request More Info
                      </Button>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Platform Analytics */}
            <Card variant="elevated">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <BarChart3 className="mr-2 h-5 w-5 text-primary" />
                  Platform Analytics
                </CardTitle>
                <CardDescription>
                  Monthly growth and engagement metrics
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <div className="space-y-6">
                  {/* User Growth */}
                  <div>
                    <h4 className="font-semibold mb-4">User Registration Trends</h4>
                    <div className="space-y-3">
                      {monthlyMetrics.map((metric, index) => (
                        <div key={metric.month} className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span>{metric.month} 2024</span>
                            <span className="font-semibold">
                              {metric.students + metric.alumni} total users
                            </span>
                          </div>
                          <div className="space-y-1">
                            <div className="flex justify-between text-xs">
                              <span>Students: {metric.students}</span>
                              <span>Alumni: {metric.alumni}</span>
                            </div>
                            <Progress 
                              value={(metric.students / (metric.students + metric.alumni)) * 100} 
                              className="h-2" 
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Mentorship Success */}
                  <div className="border-t pt-6">
                    <h4 className="font-semibold mb-4">Mentorship Engagement</h4>
                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-success">89%</div>
                        <div className="text-xs text-muted-foreground">Success Rate</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-primary">4.8</div>
                        <div className="text-xs text-muted-foreground">Avg Rating</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-accent">156</div>
                        <div className="text-xs text-muted-foreground">Hrs/Month</div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            
            {/* Quick Actions */}
            <Card variant="premium">
              <CardHeader>
                <CardTitle className="text-lg">Admin Actions</CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-3">
                <Button variant="gradient" className="w-full justify-start">
                  <Users className="mr-2 h-4 w-4" />
                  Manage Users
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <BarChart3 className="mr-2 h-4 w-4" />
                  View Analytics
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Calendar className="mr-2 h-4 w-4" />
                  Event Management
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Settings className="mr-2 h-4 w-4" />
                  System Settings
                </Button>
              </CardContent>
            </Card>

            {/* Recent Activity */}
            <Card variant="elevated">
              <CardHeader>
                <CardTitle className="flex items-center text-lg">
                  <Activity className="mr-2 h-5 w-5 text-primary" />
                  Recent Activity
                </CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-3">
                {recentActivity.map((activity, index) => (
                  <div key={index} className="flex items-start space-x-3 p-2">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium">{activity.action}</p>
                      <p className="text-xs text-muted-foreground">{activity.user}</p>
                      <p className="text-xs text-muted-foreground">{activity.time}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* System Health */}
            <Card variant="elevated">
              <CardHeader>
                <CardTitle className="flex items-center text-lg">
                  <PieChart className="mr-2 h-5 w-5 text-primary" />
                  System Health
                </CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Server Status</span>
                    <Badge variant="success">Online</Badge>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Database</span>
                    <Badge variant="success">Healthy</Badge>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>API Response</span>
                    <Badge variant="success">Fast</Badge>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Storage</span>
                    <Badge variant="warning">75% Used</Badge>
                  </div>
                </div>
                
                <div className="pt-4 border-t">
                  <div className="text-sm font-medium mb-2">Platform Uptime</div>
                  <div className="text-2xl font-bold text-success">99.9%</div>
                  <div className="text-xs text-muted-foreground">Last 30 days</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;