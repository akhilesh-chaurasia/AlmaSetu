import React from 'react';
import { GraduationCap, Users, Shield, ArrowRight, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/enhanced-button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/layout/Header';

const RoleSelection: React.FC = () => {
  const navigate = useNavigate();

  const roles = [
    {
      id: 'student',
      icon: GraduationCap,
      title: 'Student',
      subtitle: 'Current student seeking mentorship and opportunities',
      description: 'Connect with alumni mentors, explore career paths, and access exclusive job opportunities.',
      features: [
        'AI-powered mentor matching',
        'Career guidance and coaching',
        'Access to job board and internships',
        'Networking events and workshops',
        'Skill development resources'
      ],
      color: 'from-primary to-accent',
      route: '/student/dashboard'
    },
    {
      id: 'alumni',
      icon: Users,
      title: 'Alumni',
      subtitle: 'Graduate ready to give back and connect',
      description: 'Mentor students, share opportunities, and expand your professional network.',
      features: [
        'Mentor current students',
        'Post job opportunities',
        'Host networking events',
        'Share industry insights',
        'Build professional connections'
      ],
      color: 'from-accent to-success',
      route: '/alumni/dashboard'
    },
    {
      id: 'admin',
      icon: Shield,
      title: 'Administrator',
      subtitle: 'Institution admin managing the platform',
      description: 'Oversee platform operations, manage users, and access detailed analytics.',
      features: [
        'User verification and management',
        'Platform analytics and insights',
        'Event and content moderation',
        'System configuration',
        'Support and assistance'
      ],
      color: 'from-warning to-destructive',
      route: '/admin/dashboard'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container px-6 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Choose Your Role
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Select how you'd like to engage with our alumni community platform.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {roles.map((role) => (
            <Card 
              key={role.id} 
              variant="elevated" 
              className="relative overflow-hidden hover-lift group cursor-pointer"
              onClick={() => navigate(role.route)}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${role.color} opacity-5 group-hover:opacity-10 transition-opacity`} />
              
              <CardHeader className="text-center pb-4">
                <div className="relative">
                  <div className={`w-20 h-20 bg-gradient-to-br ${role.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <role.icon className="h-10 w-10 text-white" />
                  </div>
                  
                  <Badge variant="secondary" className="mb-2">
                    {role.subtitle}
                  </Badge>
                  
                  <CardTitle className="text-2xl">{role.title}</CardTitle>
                </div>
              </CardHeader>

              <CardContent className="space-y-6">
                <CardDescription className="text-center text-base leading-relaxed">
                  {role.description}
                </CardDescription>

                <div className="space-y-3">
                  <h4 className="font-semibold text-sm uppercase tracking-wide text-muted-foreground">
                    What you get:
                  </h4>
                  <ul className="space-y-2">
                    {role.features.map((feature, index) => (
                      <li key={index} className="flex items-center space-x-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-success flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Button 
                  variant="gradient" 
                  className="w-full group-hover:shadow-glow transition-all"
                  onClick={(e) => {
                    e.stopPropagation();
                    navigate(role.route);
                  }}
                >
                  Continue as {role.title}
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Not sure which role fits you? <span className="text-primary font-semibold">Contact support</span> for guidance.
          </p>
          
          <Button variant="ghost" onClick={() => navigate('/')}>
            ← Back to Home
          </Button>
        </div>
      </div>
    </div>
  );
};

export default RoleSelection;