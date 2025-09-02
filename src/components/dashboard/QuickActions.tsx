
import React, { useState } from 'react';
import { Plus, FileText, Users, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import AddEmployeeModal from '@/components/modals/AddEmployeeModal';
import LeaveRequestModal from '@/components/modals/LeaveRequestModal';

const QuickActions = () => {
  const navigate = useNavigate();
  const [showAddEmployeeModal, setShowAddEmployeeModal] = useState(false);
  const [showLeaveRequestModal, setShowLeaveRequestModal] = useState(false);

  const actions = [
    {
      title: 'Add Employee',
      description: 'Register new civil servant',
      icon: Plus,
      color: 'bg-gradient-primary',
      action: () => setShowAddEmployeeModal(true)
    },
    {
      title: 'Process Leave',
      description: 'Review pending applications',
      icon: Calendar,
      color: 'bg-gradient-gold',
      action: () => setShowLeaveRequestModal(true)
    },
    {
      title: 'Generate Report',
      description: 'Create department reports',
      icon: FileText,
      color: 'bg-success',
      action: () => {
        toast.success('Report generation started! Check the Reports section.');
        navigate('/reports');
      }
    },
    {
      title: 'Manage Departments',
      description: 'Update organizational structure',
      icon: Users,
      color: 'bg-primary',
      action: () => {
        toast.info('Department management feature coming soon!');
        navigate('/employees');
      }
    }
  ];

  return (
    <>
      <div className="dashboard-card">
        <h3 className="text-lg font-semibold text-foreground mb-4">Quick Actions</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
          {actions.map((action) => (
            <Button
              key={action.title}
              variant="ghost"
              className="h-auto p-4 flex flex-col items-center space-y-2 hover-lift"
              onClick={action.action}
            >
              <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${action.color}`}>
                <action.icon className="w-5 h-5 text-white" />
              </div>
              <div className="text-center">
                <p className="font-medium text-sm">{action.title}</p>
                <p className="text-xs text-muted-foreground">{action.description}</p>
              </div>
            </Button>
          ))}
        </div>
      </div>

      {/* Modals */}
      <AddEmployeeModal
        isOpen={showAddEmployeeModal}
        onClose={() => setShowAddEmployeeModal(false)}
        onSuccess={() => {
          toast.success('Employee added successfully!');
        }}
      />

      <LeaveRequestModal
        isOpen={showLeaveRequestModal}
        onClose={() => setShowLeaveRequestModal(false)}
        onSuccess={() => {
          toast.success('Leave request submitted successfully!');
        }}
      />
    </>
  );
};

export default QuickActions;
