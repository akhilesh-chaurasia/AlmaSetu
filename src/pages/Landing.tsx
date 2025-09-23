import React from 'react';
import { GraduationCap, Users, Brain, TrendingUp, ArrowRight, CheckCircle, Star } from 'lucide-react';
import { Button } from '@/components/ui/enhanced-button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useNavigate } from 'react-router-dom';
import heroBg from '@/assets/hero-bg.jpg';

const Landing: React.FC = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: Brain,
      title: "AI-Powered Matching",
      description: "Smart algorithms connect students with ideal mentors based on career goals and interests."
    },
    {
      icon: Users,
      title: "Community Building",
      description: "Foster meaningful connections between alumni across different generations and industries."
    },
    {
      icon: TrendingUp,
      title: "Career Growth",
      description: "Access exclusive job opportunities and receive guidance from industry professionals."
    }
  ];

  const stats = [
    { value: "10K+", label: "Active Alumni" },
    { value: "5K+", label: "Students Mentored" },
    { value: "95%", label: "Success Rate" },
    { value: "200+", label: "Partner Companies" }
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Software Engineer at Google",
      content: "This platform connected me with an amazing mentor who helped me land my dream job. The AI matching was spot-on!",
      rating: 5
    },
    {
      name: "Michael Rodriguez",
      role: "Alumni & Mentor",
      content: "I love giving back to students. This platform makes it so easy to connect and share my experience.",
      rating: 5
    },
    {
      name: "Dr. Emily Johnson",
      role: "University Dean",
      content: "Our alumni engagement has increased by 300% since implementing this system. Truly remarkable.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${heroBg})`,
            filter: 'brightness(0.3)'
          }}
        />
        <div className="absolute inset-0 bg-gradient-hero/80" />
        
        <div className="relative z-10 container px-6 text-center text-white">
          <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
            <Badge className="bg-white/10 text-white border-white/20 px-4 py-2 text-sm font-medium">
              Next Generation Alumni Platform
            </Badge>
            
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Connect. Mentor.{' '}
              <span className="bg-gradient-to-r from-accent to-primary-light bg-clip-text text-transparent">
                Succeed Together
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Bridge the gap between students and alumni with AI-powered mentorship, career opportunities, and meaningful connections that last a lifetime.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                variant="hero" 
                size="xl"
                onClick={() => navigate('/role-selection')}
                className="group"
              >
                Get Started Today
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button variant="glass" size="xl">
                Watch Demo
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-8 border-t border-white/20">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-white">{stat.value}</div>
                  <div className="text-white/80">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/30">
        <div className="container px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Powered by AI, Built for Connection
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Experience the future of alumni engagement with cutting-edge technology and human-centered design.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} variant="elevated" className="text-center p-8 hover-lift">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="container px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Trusted by Students & Alumni Worldwide
            </h2>
            <p className="text-xl text-muted-foreground">
              See how our platform has transformed careers and built lasting connections.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} variant="gradient" className="p-6">
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-warning text-warning" />
                    ))}
                  </div>
                  
                  <p className="text-foreground leading-relaxed">
                    "{testimonial.content}"
                  </p>
                  
                  <div className="pt-4 border-t border-border/50">
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary text-white">
        <div className="container px-6 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold">
              Ready to Transform Your Alumni Network?
            </h2>
            <p className="text-xl text-white/90">
              Join thousands of students and alumni who are already building meaningful connections and accelerating their careers.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="glass" 
                size="xl"
                onClick={() => navigate('/role-selection')}
                className="bg-white/10 hover:bg-white/20 text-white border-white/20"
              >
                <GraduationCap className="mr-2 h-5 w-5" />
                Join as Student
              </Button>
              
              <Button 
                variant="glass" 
                size="xl"
                onClick={() => navigate('/role-selection')}
                className="bg-white/10 hover:bg-white/20 text-white border-white/20"
              >
                <Users className="mr-2 h-5 w-5" />
                Join as Alumni
              </Button>
            </div>

            <div className="flex items-center justify-center space-x-6 pt-8 text-white/80">
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5" />
                <span>Free to Join</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5" />
                <span>No Setup Required</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5" />
                <span>Instant Access</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Landing;