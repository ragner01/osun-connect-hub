
import React, { useState } from 'react';
import { Bell, Search, User, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useIsMobile } from '@/hooks/use-mobile';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';

interface HeaderProps {
  onMenuClick?: () => void;
}

const Header = ({ onMenuClick }: HeaderProps) => {
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const isMobile = useIsMobile();
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      toast.info(`Searching for: ${searchTerm}`);
      // Navigate to employees page with search term
      navigate(`/employees?search=${encodeURIComponent(searchTerm)}`);
      setSearchTerm('');
      setSearchOpen(false);
    }
  };

  return (
    <header className="portal-header h-14 sm:h-16 px-3 sm:px-6 flex items-center justify-between">
      <div className="flex items-center space-x-2 sm:space-x-4">
        {/* Mobile Menu Button */}
        {isMobile && (
          <Button
            variant="ghost"
            size="sm"
            onClick={onMenuClick}
            className="text-primary hover:bg-primary/10 p-2"
          >
            <Menu className="w-5 h-5" />
          </Button>
        )}
        
        <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4">
          <h2 className="text-lg sm:text-xl font-semibold text-primary">Good morning, Admin</h2>
          {!isMobile && (
            <div className="text-sm text-muted-foreground">
              {new Date().toLocaleDateString('en-US', { 
                weekday: 'long', 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
            </div>
          )}
        </div>
      </div>

      <div className="flex items-center space-x-2 sm:space-x-4">
        {/* Search */}
        {isMobile ? (
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setSearchOpen(!searchOpen)}
            className="text-primary hover:bg-primary/10 p-2"
          >
            <Search className="w-5 h-5" />
          </Button>
        ) : (
          <form onSubmit={handleSearch} className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <Input 
              placeholder="Search employees, documents..." 
              className="pl-10 w-48 lg:w-64"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </form>
        )}

        {/* Notifications */}
        <Button 
          variant="ghost" 
          size="sm" 
          className="relative"
          onClick={() => {
            toast.info('Notifications feature coming soon!');
            navigate('/announcements');
          }}
        >
          <Bell className="w-5 h-5" />
          <span className="absolute -top-1 -right-1 bg-error text-white text-xs rounded-full w-4 h-4 sm:w-5 sm:h-5 flex items-center justify-center text-xs">
            3
          </span>
        </Button>

        {/* Profile */}
        {!isMobile && (
          <Button 
            variant="ghost" 
            size="sm"
            onClick={() => {
              toast.info('Profile settings coming soon!');
              navigate('/settings');
            }}
          >
            <User className="w-5 h-5 mr-2" />
            Profile
          </Button>
        )}
      </div>

      {/* Mobile Search Overlay */}
      {isMobile && searchOpen && (
        <div className="absolute top-full left-0 right-0 bg-background border-b shadow-lg p-4 z-30">
          <form onSubmit={handleSearch} className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <Input 
              placeholder="Search employees, documents..." 
              className="pl-10 w-full"
              autoFocus
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </form>
        </div>
      )}
    </header>
  );
};

export default Header;
