import React, { useState } from 'react';
import { Bell, Search, User, Settings, LogOut, MessageSquare, Briefcase, Filter, Lightbulb, Users, Calendar, Building2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/enhanced-button';
import { Input } from '@/components/ui/input';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Badge } from '@/components/ui/badge';

interface HeaderProps {
  user?: {
    name: string;
    email: string;
    role: 'student' | 'alumni' | 'admin';
    avatar?: string;
  };
}

const Header: React.FC<HeaderProps> = ({ user }) => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [notifications] = React.useState([
    { 
      id: 1, 
      text: "New mentorship request from Sarah Chen", 
      unread: true, 
      type: 'mentorship',
      time: '5 min ago',
      avatar: ''
    },
    { 
      id: 2, 
      text: "Job posting: Software Engineer at TechCorp", 
      unread: true, 
      type: 'job',
      time: '1 hour ago',
      avatar: ''
    },
    { 
      id: 3, 
      text: "Alumni meetup this Friday", 
      unread: false, 
      type: 'event',
      time: '2 hours ago',
      avatar: ''
    },
    { 
      id: 4, 
      text: "Your mentee completed the project milestone", 
      unread: false, 
      type: 'achievement',
      time: '1 day ago',
      avatar: ''
    },
    { 
      id: 5, 
      text: "New message from Michael Rodriguez", 
      unread: true, 
      type: 'message',
      time: '3 days ago',
      avatar: ''
    }
  ]);

  const getNotificationIcon = (type: string) => {
    switch (type) {
      case 'mentorship': return <User className="h-4 w-4 text-primary" />;
      case 'job': return <Briefcase className="h-4 w-4 text-success" />;
      case 'event': return <Bell className="h-4 w-4 text-accent" />;
      case 'message': return <MessageSquare className="h-4 w-4 text-warning" />;
      default: return <Bell className="h-4 w-4 text-muted-foreground" />;
    }
  };

  const handleNotificationClick = (notificationId: number) => {
    // Mark notification as read and navigate to relevant page
    console.log('Notification clicked:', notificationId);
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      console.log('Search query:', searchQuery);
      // Navigate to search results or filter current page
    }
  };

  const unreadCount = notifications.filter(n => n.unread).length;

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-6">
        {/* Logo */}
        <div className="flex items-center space-x-8">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">SA</span>
            </div>
            <span className="font-semibold text-lg">Smart Alumni</span>
          </div>

          {/* Navigation Features */}
          {user && (
            <nav className="hidden lg:flex items-center space-x-6">
              {user.role === 'alumni' && (
                <>
                  <Button variant="ghost" size="sm" className="flex items-center space-x-1 hover:text-primary">
                    <Lightbulb className="h-4 w-4" />
                    <span>Startup Portal</span>
                  </Button>
                  <Button variant="ghost" size="sm" className="flex items-center space-x-1 hover:text-primary">
                    <MessageSquare className="h-4 w-4" />
                    <span>Mentorship</span>
                  </Button>
                  <Button variant="ghost" size="sm" className="flex items-center space-x-1 hover:text-primary">
                    <Users className="h-4 w-4" />
                    <span>Community</span>
                  </Button>
                  <Button variant="ghost" size="sm" className="flex items-center space-x-1 hover:text-primary">
                    <Briefcase className="h-4 w-4" />
                    <span>Jobs</span>
                  </Button>
                  <Button variant="ghost" size="sm" className="flex items-center space-x-1 hover:text-primary">
                    <Calendar className="h-4 w-4" />
                    <span>Events</span>
                  </Button>
                </>
              )}
              {user.role === 'student' && (
                <>
                  <Button variant="ghost" size="sm" className="flex items-center space-x-1 hover:text-primary">
                    <Lightbulb className="h-4 w-4" />
                    <span>Startup Portal</span>
                  </Button>
                  <Button variant="ghost" size="sm" className="flex items-center space-x-1 hover:text-primary">
                    <Users className="h-4 w-4" />
                    <span>Mentors</span>
                  </Button>
                  <Button variant="ghost" size="sm" className="flex items-center space-x-1 hover:text-primary">
                    <Briefcase className="h-4 w-4" />
                    <span>Jobs</span>
                  </Button>
                  <Button variant="ghost" size="sm" className="flex items-center space-x-1 hover:text-primary">
                    <Calendar className="h-4 w-4" />
                    <span>Events</span>
                  </Button>
                </>
              )}
              {user.role === 'admin' && (
                <>
                  <Button variant="ghost" size="sm" className="flex items-center space-x-1 hover:text-primary">
                    <Users className="h-4 w-4" />
                    <span>Users</span>
                  </Button>
                  <Button variant="ghost" size="sm" className="flex items-center space-x-1 hover:text-primary">
                    <Building2 className="h-4 w-4" />
                    <span>Analytics</span>
                  </Button>
                  <Button variant="ghost" size="sm" className="flex items-center space-x-1 hover:text-primary">
                    <Calendar className="h-4 w-4" />
                    <span>Events</span>
                  </Button>
                </>
              )}
            </nav>
          )}
        </div>

        {/* Search */}
        {user && (
          <div className="flex-1 max-w-md mx-8">
            <form onSubmit={handleSearchSubmit} className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                placeholder="Search alumni, jobs, events..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onFocus={() => setIsSearchFocused(true)}
                onBlur={() => setIsSearchFocused(false)}
                className={`pl-10 bg-muted/50 border-0 focus:bg-background transition-all duration-200 ${
                  isSearchFocused ? 'shadow-glow ring-2 ring-primary/20' : ''
                }`}
              />
              {searchQuery && (
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  className="absolute right-1 top-1/2 transform -translate-y-1/2 h-6 w-6 p-0"
                  onClick={() => setSearchQuery('')}
                >
                  ×
                </Button>
              )}
            </form>
          </div>
        )}

        {/* User Actions */}
        <div className="flex items-center space-x-4">
          {user ? (
            <>
              {/* Notifications */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon" className="relative">
                    <Bell className="h-5 w-5" />
                    {unreadCount > 0 && (
                      <Badge className="absolute -top-1 -right-1 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs bg-destructive text-destructive-foreground">
                        {unreadCount}
                      </Badge>
                    )}
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-80 max-h-96 overflow-y-auto">
                  <DropdownMenuLabel className="flex items-center justify-between">
                    <span>Notifications</span>
                    <Button variant="ghost" size="sm" className="text-xs h-auto py-1">
                      Mark all read
                    </Button>
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  {notifications.map((notification) => (
                    <DropdownMenuItem 
                      key={notification.id} 
                      className="flex items-start space-x-3 p-4 cursor-pointer hover:bg-muted/50"
                      onClick={() => handleNotificationClick(notification.id)}
                    >
                      <div className="w-8 h-8 bg-muted rounded-full flex items-center justify-center flex-shrink-0">
                        {getNotificationIcon(notification.type)}
                      </div>
                      <div className="flex-1 min-w-0">
                        <span className={`text-sm block ${notification.unread ? 'font-semibold' : ''}`}>
                          {notification.text}
                        </span>
                        <span className="text-xs text-muted-foreground">{notification.time}</span>
                        {notification.unread && (
                          <div className="w-2 h-2 bg-primary rounded-full mt-1" />
                        )}
                      </div>
                    </DropdownMenuItem>
                  ))}
                  <DropdownMenuSeparator />
                  <DropdownMenuItem className="justify-center text-primary">
                    <Button variant="ghost" size="sm" className="text-xs">
                      View All Notifications
                    </Button>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              {/* User Menu */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="relative h-9 w-9 rounded-full">
                    <div className="w-8 h-8 rounded-full bg-gradient-primary flex items-center justify-center">
                      <User className="h-4 w-4 text-white" />
                    </div>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56" align="end">
                  <DropdownMenuLabel className="font-normal">
                    <div className="flex flex-col space-y-2">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 rounded-full bg-gradient-primary flex items-center justify-center">
                          <User className="h-5 w-5 text-white" />
                        </div>
                        <div>
                          <p className="text-sm font-medium leading-none">{user.name}</p>
                          <p className="text-xs leading-none text-muted-foreground">
                            {user.email}
                          </p>
                        </div>
                      </div>
                      <Badge variant="secondary" className="w-fit text-xs capitalize">
                        {user.role}
                      </Badge>
                    </div>
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem className="cursor-pointer">
                    <User className="mr-2 h-4 w-4" />
                    <span>View Profile</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="cursor-pointer">
                    <MessageSquare className="mr-2 h-4 w-4" />
                    <span>Messages</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="cursor-pointer">
                    <Settings className="mr-2 h-4 w-4" />
                    <span>Settings</span>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem className="text-destructive cursor-pointer">
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>Log out</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </>
          ) : (
            <div className="flex items-center space-x-2">
              <Button variant="ghost" onClick={() => navigate('/auth/signin')}>Sign In</Button>
              <Button variant="hero" onClick={() => navigate('/auth/signup')}>Get Started</Button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;