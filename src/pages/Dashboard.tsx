
import React from 'react';
import { Users, Calendar, TrendingUp, FileText, Clock, CheckCircle } from 'lucide-react';
import MetricCard from '@/components/dashboard/MetricCard';
import RecentActivity from '@/components/dashboard/RecentActivity';
import QuickActions from '@/components/dashboard/QuickActions';

const Dashboard = () => {
  return (
    <div className="space-y-6 fade-in">
      {/* Welcome Section */}
      <div className="bg-gradient-hero rounded-xl p-4 sm:p-6 lg:p-8 text-white">
        <h1 className="text-2xl sm:text-3xl font-bold mb-2">Osun State Civil Service Portal</h1>
        <p className="text-base sm:text-lg opacity-90">
          Managing excellence in public service delivery across Osun State
        </p>
        <div className="mt-4 flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-6 text-sm">
          <div className="flex items-center space-x-2">
            <CheckCircle className="w-4 h-4" />
            <span>System Operational</span>
          </div>
          <div className="flex items-center space-x-2">
            <Clock className="w-4 h-4" />
            <span>Last Updated: {new Date().toLocaleTimeString()}</span>
          </div>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        <MetricCard
          title="Total Employees"
          value="12,847"
          change="+2.5% from last month"
          changeType="increase"
          icon={Users}
        />
        <MetricCard
          title="Pending Leave Requests"
          value="34"
          change="5 urgent reviews"
          changeType="neutral"
          icon={Calendar}
        />
        <MetricCard
          title="Performance Reviews"
          value="89%"
          change="+5% completion rate"
          changeType="increase"
          icon={TrendingUp}
        />
        <MetricCard
          title="Active Documents"
          value="1,203"
          change="15 updated today"
          changeType="increase"
          icon={FileText}
        />
      </div>

      {/* Dashboard Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
        <RecentActivity />
        <QuickActions />
      </div>

      {/* Department Overview */}
      <div className="dashboard-card">
        <h3 className="text-lg font-semibold text-foreground mb-4">Department Overview</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            { name: 'Ministry of Health', employees: 3247, status: 'active' },
            { name: 'Ministry of Education', employees: 4521, status: 'active' },
            { name: 'Ministry of Works', employees: 1876, status: 'active' },
            { name: 'Ministry of Agriculture', employees: 2103, status: 'active' },
            { name: 'Local Government Affairs', employees: 890, status: 'active' },
            { name: 'Ministry of Finance', employees: 210, status: 'active' }
          ].map((dept) => (
            <div key={dept.name} className="p-4 border border-border rounded-lg hover-glow">
              <h4 className="font-medium text-foreground">{dept.name}</h4>
              <p className="text-sm text-muted-foreground mt-1">{dept.employees} employees</p>
              <div className="mt-2">
                <span className="status-active">{dept.status}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
