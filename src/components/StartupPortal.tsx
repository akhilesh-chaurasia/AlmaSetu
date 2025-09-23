import React, { useState } from 'react';
import { 
  Lightbulb, Plus, Heart, MessageCircle, Share2, Filter,
  TrendingUp, Users, Calendar, Eye, ChevronRight
} from 'lucide-react';
import { Button } from '@/components/ui/enhanced-button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { 
  Dialog, 
  DialogContent, 
  DialogDescription, 
  DialogHeader, 
  DialogTitle, 
  DialogTrigger 
} from '@/components/ui/dialog';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

interface StartupIdea {
  id: number;
  title: string;
  description: string;
  category: string;
  author: {
    name: string;
    role: 'student' | 'alumni';
    avatar?: string;
    year?: string;
    company?: string;
  };
  metrics: {
    likes: number;
    comments: number;
    views: number;
  };
  tags: string[];
  postedDate: string;
  status: 'idea' | 'seeking-team' | 'in-development' | 'launched';
}

interface StartupPortalProps {
  userRole: 'student' | 'alumni';
}

const StartupPortal: React.FC<StartupPortalProps> = ({ userRole }) => {
  const [ideas] = useState<StartupIdea[]>([
    {
      id: 1,
      title: 'EcoTrack - Sustainable Living Assistant',
      description: 'An AI-powered app that helps users track their carbon footprint and suggests eco-friendly alternatives for daily activities. Integrates with smart devices and provides personalized sustainability challenges.',
      category: 'Environment',
      author: {
        name: 'Emily Carter',
        role: 'student',
        year: 'Senior',
        avatar: ''
      },
      metrics: { likes: 24, comments: 8, views: 156 },
      tags: ['AI', 'Sustainability', 'Mobile App', 'IoT'],
      postedDate: '2 days ago',
      status: 'seeking-team'
    },
    {
      id: 2,
      title: 'SkillBridge - Peer-to-Peer Learning Platform',
      description: 'Connect students and professionals for skill exchange. Students can teach what they know (coding, design, languages) and learn from others. Includes video calls, project collaboration, and achievement tracking.',
      category: 'Education',
      author: {
        name: 'Marcus Rodriguez',
        role: 'alumni',
        company: 'Microsoft',
        avatar: ''
      },
      metrics: { likes: 42, comments: 15, views: 298 },
      tags: ['Education', 'Social Platform', 'Video Calling', 'Blockchain'],
      postedDate: '1 week ago',
      status: 'in-development'
    },
    {
      id: 3,
      title: 'LocalMart - Hyperlocal Marketplace',
      description: 'A platform connecting local businesses with customers in their immediate vicinity. Features real-time inventory, instant delivery, and community reviews. Perfect for supporting local economies.',
      category: 'E-commerce',
      author: {
        name: 'Sarah Kim',
        role: 'student',
        year: 'Junior',
        avatar: ''
      },
      metrics: { likes: 18, comments: 5, views: 89 },
      tags: ['E-commerce', 'Local Business', 'Mobile', 'Community'],
      postedDate: '3 days ago',
      status: 'idea'
    },
    {
      id: 4,
      title: 'MindfulSpace - Mental Health Support Network',
      description: 'Anonymous peer support platform for students and young professionals. Combines AI mood tracking, peer counseling, and professional resources. Includes crisis intervention and wellness challenges.',
      category: 'Health & Wellness',
      author: {
        name: 'Dr. James Wilson',
        role: 'alumni',
        company: 'Stanford Medicine',
        avatar: ''
      },
      metrics: { likes: 67, comments: 23, views: 445 },
      tags: ['Mental Health', 'AI', 'Community', 'Mobile App'],
      postedDate: '5 days ago',
      status: 'launched'
    }
  ]);

  const [filter, setFilter] = useState('all');
  const [isCreateDialogOpen, setIsCreateDialogOpen] = useState(false);

  const filteredIdeas = ideas.filter(idea => {
    if (filter === 'all') return true;
    if (filter === 'students') return idea.author.role === 'student';
    if (filter === 'alumni') return idea.author.role === 'alumni';
    return idea.status === filter;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'idea': return 'secondary';
      case 'seeking-team': return 'warning';
      case 'in-development': return 'primary';
      case 'launched': return 'success';
      default: return 'secondary';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'idea': return 'Idea';
      case 'seeking-team': return 'Seeking Team';
      case 'in-development': return 'In Development';
      case 'launched': return 'Launched';
      default: return status;
    }
  };

  return (
    <Card variant="elevated">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="flex items-center">
              <Lightbulb className="mr-2 h-5 w-5 text-primary" />
              Startup Ideas Portal
            </CardTitle>
            <CardDescription>
              Discover, share, and collaborate on innovative startup ideas
            </CardDescription>
          </div>
          
          <Dialog open={isCreateDialogOpen} onOpenChange={setIsCreateDialogOpen}>
            <DialogTrigger asChild>
              <Button variant="gradient">
                <Plus className="mr-2 h-4 w-4" />
                Share Idea
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-2xl">
              <DialogHeader>
                <DialogTitle>Share Your Startup Idea</DialogTitle>
                <DialogDescription>
                  Share your innovative idea with the community and find potential collaborators
                </DialogDescription>
              </DialogHeader>
              
              <div className="space-y-4">
                <div>
                  <Label htmlFor="title">Idea Title</Label>
                  <Input id="title" placeholder="Give your idea a catchy name..." />
                </div>
                
                <div>
                  <Label htmlFor="category">Category</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="technology">Technology</SelectItem>
                      <SelectItem value="health">Health & Wellness</SelectItem>
                      <SelectItem value="education">Education</SelectItem>
                      <SelectItem value="environment">Environment</SelectItem>
                      <SelectItem value="finance">Finance</SelectItem>
                      <SelectItem value="ecommerce">E-commerce</SelectItem>
                      <SelectItem value="social">Social Impact</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <Label htmlFor="description">Description</Label>
                  <Textarea 
                    id="description" 
                    placeholder="Describe your idea, the problem it solves, and your vision..."
                    className="min-h-[100px]"
                  />
                </div>
                
                <div>
                  <Label htmlFor="tags">Tags (comma-separated)</Label>
                  <Input id="tags" placeholder="AI, Mobile App, SaaS, etc." />
                </div>
                
                <div>
                  <Label htmlFor="status">Current Status</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="What stage is your idea at?" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="idea">Just an Idea</SelectItem>
                      <SelectItem value="seeking-team">Seeking Team Members</SelectItem>
                      <SelectItem value="in-development">In Development</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="flex justify-end space-x-2 pt-4">
                  <Button variant="outline" onClick={() => setIsCreateDialogOpen(false)}>
                    Cancel
                  </Button>
                  <Button variant="gradient" onClick={() => setIsCreateDialogOpen(false)}>
                    Share Idea
                  </Button>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-6">
        {/* Filters */}
        <div className="flex flex-wrap gap-2">
          <Button 
            variant={filter === 'all' ? 'default' : 'outline'} 
            size="sm" 
            onClick={() => setFilter('all')}
          >
            All Ideas
          </Button>
          <Button 
            variant={filter === 'students' ? 'default' : 'outline'} 
            size="sm" 
            onClick={() => setFilter('students')}
          >
            <Users className="mr-1 h-3 w-3" />
            Students
          </Button>
          <Button 
            variant={filter === 'alumni' ? 'default' : 'outline'} 
            size="sm" 
            onClick={() => setFilter('alumni')}
          >
            <TrendingUp className="mr-1 h-3 w-3" />
            Alumni
          </Button>
          <Button 
            variant={filter === 'seeking-team' ? 'default' : 'outline'} 
            size="sm" 
            onClick={() => setFilter('seeking-team')}
          >
            Seeking Team
          </Button>
          <Button 
            variant={filter === 'launched' ? 'default' : 'outline'} 
            size="sm" 
            onClick={() => setFilter('launched')}
          >
            Launched
          </Button>
        </div>

        {/* Ideas List */}
        <div className="space-y-4">
          {filteredIdeas.map((idea) => (
            <Card key={idea.id} variant="elevated" className="hover:shadow-md transition-all">
              <CardContent className="p-6">
                <div className="space-y-4">
                  {/* Header */}
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <h3 className="text-lg font-semibold text-foreground">{idea.title}</h3>
                        <Badge variant={getStatusColor(idea.status) as "default" | "success" | "warning" | "secondary" | "destructive" | "outline"} className="text-xs">
                          {getStatusText(idea.status)}
                        </Badge>
                      </div>
                      <Badge variant="outline" className="mb-2">{idea.category}</Badge>
                    </div>
                  </div>

                  {/* Author */}
                  <div className="flex items-center space-x-3">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src={idea.author.avatar} />
                      <AvatarFallback className="bg-gradient-primary text-white text-xs">
                        {idea.author.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <div className="text-sm">
                      <span className="font-medium">{idea.author.name}</span>
                      <span className="text-muted-foreground ml-2">
                        {idea.author.role === 'student' ? `${idea.author.year} Student` : `${idea.author.company}`}
                      </span>
                      <span className="text-muted-foreground ml-2">• {idea.postedDate}</span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {idea.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1">
                    {idea.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  {/* Actions & Metrics */}
                  <div className="flex items-center justify-between pt-2 border-t">
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                      <div className="flex items-center space-x-1">
                        <Heart className="h-4 w-4" />
                        <span>{idea.metrics.likes}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <MessageCircle className="h-4 w-4" />
                        <span>{idea.metrics.comments}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Eye className="h-4 w-4" />
                        <span>{idea.metrics.views}</span>
                      </div>
                    </div>

                    <div className="flex items-center space-x-2">
                      <Button variant="ghost" size="sm">
                        <Heart className="h-4 w-4 mr-1" />
                        Like
                      </Button>
                      <Button variant="ghost" size="sm">
                        <MessageCircle className="h-4 w-4 mr-1" />
                        Comment
                      </Button>
                      {idea.status === 'seeking-team' && (
                        <Button variant="outline" size="sm">
                          Join Team
                        </Button>
                      )}
                      <Button variant="outline" size="sm">
                        View Details
                        <ChevronRight className="h-3 w-3 ml-1" />
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredIdeas.length === 0 && (
          <div className="text-center py-12">
            <Lightbulb className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">No ideas found</h3>
            <p className="text-muted-foreground mb-4">
              Be the first to share an innovative startup idea!
            </p>
            <Button variant="gradient" onClick={() => setIsCreateDialogOpen(true)}>
              <Plus className="mr-2 h-4 w-4" />
              Share Your Idea
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default StartupPortal;