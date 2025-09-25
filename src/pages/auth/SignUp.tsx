import React, { useState } from 'react';
import { User, Lock, Mail, Eye, EyeOff, GraduationCap, Building2 } from 'lucide-react';
import { Button } from '@/components/ui/enhanced-button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { useNavigate } from 'react-router-dom';
import BackButton from '@/components/ui/back-button';
import heroBackground from '@/assets/hero-bg.jpg';

const SignUp: React.FC = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    role: 'student' as 'student' | 'alumni',
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    // Student specific
    university: '',
    major: '',
    year: '',
    studentId: '',
    // Alumni specific
    graduationYear: '',
    currentCompany: '',
    currentPosition: '',
    experience: '',
    // Common
    bio: '',
    linkedin: '',
    interests: ''
  });

  const handleNext = () => {
    if (step < 3) setStep(step + 1);
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate successful registration
    navigate('/role-selection');
  };

  const updateFormData = (field: string, value: string) => {
    setFormData({ ...formData, [field]: value });
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      {/* Background */}
      <div 
        className="fixed inset-0 bg-cover bg-center bg-no-repeat opacity-10"
        style={{ backgroundImage: `url(${heroBackground})` }}
      />
      
      <div className="relative z-10 w-full max-w-md">
        {step === 1 ? (
          <BackButton to="/" className="mb-6" />
        ) : (
          <BackButton className="mb-6" />
        )}
        
        <Card variant="elevated" className="w-full">
          <CardHeader className="text-center">
            <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
              {formData.role === 'student' ? (
                <GraduationCap className="h-8 w-8 text-white" />
              ) : (
                <Building2 className="h-8 w-8 text-white" />
              )}
            </div>
            <CardTitle className="text-2xl">Join Alma Setu</CardTitle>
            <CardDescription>
              Step {step} of 3: Create your account
            </CardDescription>
          </CardHeader>
          
          <CardContent>
            {/* Progress Indicator */}
            <div className="flex items-center justify-center mb-6">
              {[1, 2, 3].map((num) => (
                <React.Fragment key={num}>
                  <div 
                    className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                      num <= step ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'
                    }`}
                  >
                    {num}
                  </div>
                  {num < 3 && (
                    <div 
                      className={`w-12 h-0.5 ${
                        num < step ? 'bg-primary' : 'bg-muted'
                      }`} 
                    />
                  )}
                </React.Fragment>
              ))}
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Step 1: Role & Basic Info */}
              {step === 1 && (
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label>I am a</Label>
                    <div className="grid grid-cols-2 gap-2">
                      <Button
                        type="button"
                        variant={formData.role === 'student' ? 'default' : 'outline'}
                        onClick={() => updateFormData('role', 'student')}
                        className="flex flex-col items-center p-4 h-auto"
                      >
                        <GraduationCap className="h-6 w-6 mb-2" />
                        Student
                      </Button>
                      <Button
                        type="button"
                        variant={formData.role === 'alumni' ? 'default' : 'outline'}
                        onClick={() => updateFormData('role', 'alumni')}
                        className="flex flex-col items-center p-4 h-auto"
                      >
                        <Building2 className="h-6 w-6 mb-2" />
                        Alumni
                      </Button>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input 
                        id="firstName"
                        value={formData.firstName}
                        onChange={(e) => updateFormData('firstName', e.target.value)}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input 
                        id="lastName"
                        value={formData.lastName}
                        onChange={(e) => updateFormData('lastName', e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                      <Input 
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => updateFormData('email', e.target.value)}
                        className="pl-10"
                        required
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Step 2: Password & Security */}
              {step === 2 && (
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="password">Password</Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                      <Input 
                        id="password"
                        type={showPassword ? 'text' : 'password'}
                        value={formData.password}
                        onChange={(e) => updateFormData('password', e.target.value)}
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

                  <div className="space-y-2">
                    <Label htmlFor="confirmPassword">Confirm Password</Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                      <Input 
                        id="confirmPassword"
                        type="password"
                        value={formData.confirmPassword}
                        onChange={(e) => updateFormData('confirmPassword', e.target.value)}
                        className="pl-10"
                        required
                      />
                    </div>
                  </div>

                  {formData.role === 'student' && (
                    <>
                      <div className="space-y-2">
                        <Label htmlFor="university">University</Label>
                        <Input 
                          id="university"
                          value={formData.university}
                          onChange={(e) => updateFormData('university', e.target.value)}
                          placeholder="e.g., Stanford University"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="studentId">Student ID</Label>
                        <Input 
                          id="studentId"
                          value={formData.studentId}
                          onChange={(e) => updateFormData('studentId', e.target.value)}
                          required
                        />
                      </div>
                    </>
                  )}
                </div>
              )}

              {/* Step 3: Role-specific Details */}
              {step === 3 && (
                <div className="space-y-4">
                  {formData.role === 'student' ? (
                    <>
                      <div className="space-y-2">
                        <Label htmlFor="major">Major/Field of Study</Label>
                        <Input 
                          id="major"
                          value={formData.major}
                          onChange={(e) => updateFormData('major', e.target.value)}
                          placeholder="e.g., Computer Science"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="year">Academic Year</Label>
                        <Select value={formData.year} onValueChange={(value) => updateFormData('year', value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select your year" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="freshman">Freshman</SelectItem>
                            <SelectItem value="sophomore">Sophomore</SelectItem>
                            <SelectItem value="junior">Junior</SelectItem>
                            <SelectItem value="senior">Senior</SelectItem>
                            <SelectItem value="graduate">Graduate Student</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="space-y-2">
                        <Label htmlFor="graduationYear">Graduation Year</Label>
                        <Input 
                          id="graduationYear"
                          type="number"
                          value={formData.graduationYear}
                          onChange={(e) => updateFormData('graduationYear', e.target.value)}
                          placeholder="e.g., 2020"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="currentCompany">Current Company</Label>
                        <Input 
                          id="currentCompany"
                          value={formData.currentCompany}
                          onChange={(e) => updateFormData('currentCompany', e.target.value)}
                          placeholder="e.g., Google, Microsoft"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="currentPosition">Current Position</Label>
                        <Input 
                          id="currentPosition"
                          value={formData.currentPosition}
                          onChange={(e) => updateFormData('currentPosition', e.target.value)}
                          placeholder="e.g., Software Engineer"
                          required
                        />
                      </div>
                    </>
                  )}

                  <div className="space-y-2">
                    <Label htmlFor="interests">Interests/Skills</Label>
                    <Input 
                      id="interests"
                      value={formData.interests}
                      onChange={(e) => updateFormData('interests', e.target.value)}
                      placeholder="e.g., AI, Web Development, Product Management"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="bio">Brief Bio (Optional)</Label>
                    <Textarea 
                      id="bio"
                      value={formData.bio}
                      onChange={(e) => updateFormData('bio', e.target.value)}
                      placeholder="Tell us a bit about yourself..."
                      className="min-h-[80px]"
                    />
                  </div>
                </div>
              )}

              {/* Navigation Buttons */}
              <div className="flex justify-between pt-4">
                {step > 1 && (
                  <Button type="button" variant="outline" onClick={handleBack}>
                    Previous
                  </Button>
                )}
                
                {step < 3 ? (
                  <Button type="button" onClick={handleNext} className="ml-auto">
                    Next
                  </Button>
                ) : (
                  <Button type="submit" variant="gradient" className="ml-auto">
                    Create Account
                  </Button>
                )}
              </div>
            </form>

            {step === 1 && (
              <div className="text-center text-sm mt-4">
                <span className="text-muted-foreground">Already have an account? </span>
                <Button 
                  variant="link" 
                  size="sm" 
                  className="p-0 h-auto"
                  onClick={() => navigate('/auth/signin')}
                >
                  Sign in
                </Button>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default SignUp;