
import React from 'react';
import { Clock, CheckCircle, AlertCircle, XCircle, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import { Activity } from '@/types';

const activities: Activity[] = [
  {
    id: 1,
    type: 'leave_approved',
    message: 'Adebayo Olusegun\'s annual leave approved',
    time: '2 hours ago',
    icon: CheckCircle,
    iconColor: 'text-success',
    action: 'view_leave',
    route: '/leave'
  },
  {
    id: 2,
    type: 'document_uploaded',
    message: 'New policy document uploaded',
    time: '4 hours ago',
    icon: AlertCircle,
    iconColor: 'text-warning',
    action: 'view_document',
    route: '/documents'
  },
  {
    id: 3,
    type: 'performance_review',
    message: 'Q4 performance reviews due',
    time: '6 hours ago',
    icon: Clock,
    iconColor: 'text-primary',
    action: 'view_performance',
    route: '/performance'
  },
  {
    id: 4,
    type: 'leave_rejected',
    message: 'Fatima Ibrahim\'s sick leave requires documentation',
    time: '1 day ago',
    icon: XCircle,
    iconColor: 'text-error',
    action: 'view_leave',
    route: '/leave'
  }
];

const RecentActivity = () => {
  const navigate = useNavigate();

  const handleActivityClick = (activity: Activity) => {
    toast.info(`Navigating to ${activity.type.replace('_', ' ')} details`);
    navigate(activity.route);
  };

  return (
    <div className="dashboard-card">
      <h3 className="text-lg font-semibold text-foreground mb-4">Recent Activity</h3>
      <div className="space-y-4">
        {activities.map((activity) => (
          <div key={activity.id} className="flex items-start space-x-3 p-3 rounded-lg hover:bg-muted/50 transition-colors">
            <div className={`mt-1 ${activity.iconColor}`}>
              <activity.icon className="w-4 h-4" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm text-foreground">{activity.message}</p>
              <p className="text-xs text-muted-foreground mt-1">{activity.time}</p>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => handleActivityClick(activity)}
              className="opacity-0 group-hover:opacity-100 transition-opacity"
            >
              <Eye className="w-3 h-3" />
            </Button>
          </div>
        ))}
      </div>
      <div className="mt-4 pt-4 border-t border-border">
        <Button 
          variant="outline" 
          size="sm" 
          className="w-full"
          onClick={() => {
            toast.info('Viewing all activities...');
            navigate('/announcements');
          }}
        >
          View All Activities
        </Button>
      </div>
    </div>
  );
};

export default RecentActivity;
