import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/enhanced-button';
import { useNavigate } from 'react-router-dom';

interface BackButtonProps {
  label?: string;
  to?: string;
  className?: string;
}

const BackButton: React.FC<BackButtonProps> = ({ 
  label = 'Back', 
  to,
  className = '' 
}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (to) {
      navigate(to);
    } else {
      navigate(-1);
    }
  };

  return (
    <Button 
      variant="ghost" 
      size="sm" 
      onClick={handleClick}
      className={`mb-4 ${className}`}
    >
      <ArrowLeft className="mr-2 h-4 w-4" />
      {label}
    </Button>
  );
};

export default BackButton;