import React, { useState } from 'react';
import { User, Lock, Mail, Eye, EyeOff } from 'lucide-react';
import { Button } from '@/components/ui/enhanced-button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useNavigate } from 'react-router-dom';
import BackButton from '@/components/ui/back-button';
import heroBackground from '@/assets/hero-bg.jpg';

const SignIn: React.FC = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [role, setRole] = useState<'student' | 'alumni' | 'admin'>('student');
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleSignIn = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate sign in - redirect to appropriate dashboard
    switch (role) {
      case 'student':
        navigate('/student/dashboard');
        break;
      case 'alumni':
        navigate('/alumni/dashboard');
        break;
      case 'admin':
        navigate('/admin/dashboard');
        break;
    }
  };

  const handleDemoLogin = (demoRole: 'student' | 'alumni' | 'admin') => {
    const demoCredentials = {
      student: { email: 'demo.student@university.edu', password: 'student123' },
      alumni: { email: 'demo.alumni@company.com', password: 'alumni123' },
      admin: { email: 'demo.admin@smartalumni.com', password: 'admin123' }
    };

    setRole(demoRole);
    setFormData(demoCredentials[demoRole]);
    
    // Simulate automatic login after a brief delay
    setTimeout(() => {
      switch (demoRole) {
        case 'student':
          navigate('/student/dashboard');
          break;
        case 'alumni':
          navigate('/alumni/dashboard');
          break;
        case 'admin':
          navigate('/admin/dashboard');
          break;
      }
    }, 500);
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      {/* Background */}
      <div 
        className="fixed inset-0 bg-cover bg-center bg-no-repeat opacity-10"
        style={{ backgroundImage: `url(${heroBackground})` }}
      />
      
      <div className="relative z-10 w-full max-w-md">
        <BackButton to="/" className="mb-6" />
        
        <Card variant="elevated" className="w-full">
          <CardHeader className="text-center">
            <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
              <User className="h-8 w-8 text-white" />
            </div>
            <CardTitle className="text-2xl">Welcome Back</CardTitle>
            <CardDescription>
              Sign in to your Smart Alumni account
            </CardDescription>
          </CardHeader>
          
          <CardContent className="space-y-6">
            {/* Demo Login Options */}
            <div className="space-y-3">
              <Label className="text-sm font-medium">Quick Demo Login:</Label>
              <div className="grid grid-cols-3 gap-2">
                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={() => handleDemoLogin('student')}
                  className="flex flex-col items-center p-3 h-auto"
                >
                  <User className="h-4 w-4 mb-1" />
                  <span className="text-xs">Student</span>
                </Button>
                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={() => handleDemoLogin('alumni')}
                  className="flex flex-col items-center p-3 h-auto"
                >
                  <User className="h-4 w-4 mb-1" />
                  <span className="text-xs">Alumni</span>
                </Button>
                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={() => handleDemoLogin('admin')}
                  className="flex flex-col items-center p-3 h-auto"
                >
                  <User className="h-4 w-4 mb-1" />
                  <span className="text-xs">Admin</span>
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-background px-2 text-muted-foreground">
                  Or continue with
                </span>
              </div>
            </div>

            <form onSubmit={handleSignIn} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="role">Sign in as</Label>
                <Select value={role} onValueChange={(value: 'student' | 'alumni' | 'admin') => setRole(value)}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="student">Student</SelectItem>
                    <SelectItem value="alumni">Alumni</SelectItem>
                    <SelectItem value="admin">Administrator</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                  <Input 
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="pl-10"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                  <Input 
                    id="password"
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Enter your password"
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    className="pl-10 pr-10"
                    required
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <EyeOff className="h-4 w-4 text-muted-foreground" />
                    ) : (
                      <Eye className="h-4 w-4 text-muted-foreground" />
                    )}
                  </Button>
                </div>
              </div>

              <div className="flex items-center justify-between text-sm">
                <label className="flex items-center space-x-2 cursor-pointer">
                  <input type="checkbox" className="rounded border-gray-300" />
                  <span className="text-muted-foreground">Remember me</span>
                </label>
                <Button variant="link" size="sm" className="p-0 h-auto">
                  Forgot password?
                </Button>
              </div>

              <Button type="submit" variant="gradient" className="w-full">
                Sign In
              </Button>
            </form>

            <div className="text-center text-sm">
              <span className="text-muted-foreground">Don't have an account? </span>
              <Button 
                variant="link" 
                size="sm" 
                className="p-0 h-auto"
                onClick={() => navigate('/auth/signup')}
              >
                Sign up
              </Button>
            </div>

            {/* Demo Credentials Info */}
            <div className="mt-6 p-4 bg-muted/50 rounded-lg">
              <h4 className="text-sm font-medium mb-2">Demo Credentials:</h4>
              <div className="space-y-1 text-xs text-muted-foreground">
                <div><strong>Student:</strong> demo.student@university.edu / student123</div>
                <div><strong>Alumni:</strong> demo.alumni@company.com / alumni123</div>
                <div><strong>Admin:</strong> demo.admin@smartalumni.com / admin123</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default SignIn;