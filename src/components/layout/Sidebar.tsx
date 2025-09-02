
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Users, 
  Calendar, 
  TrendingUp, 
  FolderOpen, 
  CreditCard,
  GraduationCap,
  Bell,
  FileText,
  Settings,
  LogOut,
  Home,
  X
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { toast } from 'sonner';
import { Button } from '@/components/ui/button';
import { useIsMobile } from '@/hooks/use-mobile';

const navigation = [
  { name: 'Dashboard', href: '/', icon: LayoutDashboard },
  { name: 'Employee Management', href: '/employees', icon: Users },
  { name: 'Leave Management', href: '/leave', icon: Calendar },
  { name: 'Performance', href: '/performance', icon: TrendingUp },
  { name: 'Documents', href: '/documents', icon: FolderOpen },
  { name: 'Payroll', href: '/payroll', icon: CreditCard },
  { name: 'Training', href: '/training', icon: GraduationCap },
  { name: 'Announcements', href: '/announcements', icon: Bell },
  { name: 'Reports', href: '/reports', icon: FileText },
];

interface SidebarProps {
  onClose?: () => void;
}

const Sidebar = ({ onClose }: SidebarProps) => {
  const location = useLocation();
  const isMobile = useIsMobile();

  const handleLogout = () => {
    toast.success('Logged out successfully!');
    // In a real app, you would clear tokens, redirect to login, etc.
    // For now, we'll just show a success message
  };

  const handleLinkClick = () => {
    if (isMobile && onClose) {
      onClose();
    }
  };

  return (
    <div className="portal-sidebar w-64 min-h-screen flex flex-col">
      {/* Logo Section */}
      <div className="p-4 sm:p-6 border-b border-white/10">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-osun-gold rounded-lg flex items-center justify-center">
              <Home className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="font-bold text-lg text-white">Osun State</h1>
              <p className="text-xs text-white/70">Civil Service Portal</p>
            </div>
          </div>
          {isMobile && (
            <Button
              variant="ghost"
              size="sm"
              onClick={onClose}
              className="text-white hover:bg-white/10 p-2"
            >
              <X className="w-5 h-5" />
            </Button>
          )}
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-3 sm:px-4 py-4 sm:py-6 space-y-2">
        {navigation.map((item) => {
          const isActive = location.pathname === item.href;
          return (
            <Link
              key={item.name}
              to={item.href}
              onClick={handleLinkClick}
              className={cn(
                'flex items-center px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 group',
                isActive
                  ? 'bg-white/10 text-white shadow-md'
                  : 'text-white/70 hover:text-white hover:bg-white/5'
              )}
            >
              <item.icon className={cn(
                'w-5 h-5 mr-3 transition-colors',
                isActive ? 'text-osun-gold' : 'group-hover:text-osun-gold'
              )} />
              {item.name}
            </Link>
          );
        })}
      </nav>

      {/* Bottom Actions */}
      <div className="p-3 sm:p-4 border-t border-white/10 space-y-2">
        <Link
          to="/settings"
          onClick={handleLinkClick}
          className="flex items-center px-3 py-2.5 rounded-lg text-sm font-medium text-white/70 hover:text-white hover:bg-white/5 transition-all duration-200"
        >
          <Settings className="w-5 h-5 mr-3" />
          Settings
        </Link>
        <button 
          onClick={handleLogout}
          className="flex items-center px-3 py-2.5 rounded-lg text-sm font-medium text-white/70 hover:text-white hover:bg-white/5 transition-all duration-200 w-full"
        >
          <LogOut className="w-5 h-5 mr-3" />
          Logout
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
