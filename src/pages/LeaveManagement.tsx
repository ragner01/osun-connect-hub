import React, { useState } from 'react';
import Layout from '@/components/layout/Layout';
import { Calendar, Clock, User, FileText, CheckCircle, XCircle, AlertCircle, Plus, Filter, Eye, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { toast } from 'sonner';
import LeaveRequestModal from '@/components/modals/LeaveRequestModal';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog';

const leaveRequests = [
  {
    id: 'LR001',
    employeeName: 'Adebayo Olusegun',
    employeeId: 'EMP001',
    department: 'Ministry of Health',
    leaveType: 'Annual Leave',
    startDate: '2024-01-15',
    endDate: '2024-01-25',
    days: 10,
    reason: 'Family vacation',
    status: 'pending',
    appliedDate: '2024-01-01',
    supervisor: 'Dr. Aisha Salami'
  },
  {
    id: 'LR002',
    employeeName: 'Fatima Ibrahim',
    employeeId: 'EMP002',
    department: 'Ministry of Education',
    leaveType: 'Sick Leave',
    startDate: '2024-01-10',
    endDate: '2024-01-12',
    days: 3,
    reason: 'Medical treatment',
    status: 'approved',
    appliedDate: '2024-01-08',
    supervisor: 'Prof. Kamoru Adebisi'
  },
  {
    id: 'LR003',
    employeeName: 'Oluwaseun Adeyemi',
    employeeId: 'EMP003',
    department: 'Ministry of Works',
    leaveType: 'Maternity Leave',
    startDate: '2024-02-01',
    endDate: '2024-05-01',
    days: 90,
    reason: 'Maternity care',
    status: 'rejected',
    appliedDate: '2024-01-20',
    supervisor: 'Eng. Babatunde Oyo'
  }
];

const leaveBalance = {
  annual: { total: 21, used: 5, remaining: 16 },
  sick: { total: 30, used: 3, remaining: 27 },
  maternity: { total: 90, used: 0, remaining: 90 },
  compassionate: { total: 7, used: 0, remaining: 7 }
};

const LeaveManagement = () => {
  const [activeTab, setActiveTab] = useState('requests');
  const [showLeaveRequestModal, setShowLeaveRequestModal] = useState(false);
  const [showLeaveDetails, setShowLeaveDetails] = useState(false);
  const [selectedLeave, setSelectedLeave] = useState<any>(null);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'approved': return 'bg-success text-success-foreground';
      case 'pending': return 'bg-warning text-warning-foreground';
      case 'rejected': return 'bg-error text-error-foreground';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'approved': return CheckCircle;
      case 'pending': return Clock;
      case 'rejected': return XCircle;
      default: return AlertCircle;
    }
  };

  const handleNewLeaveRequest = () => {
    setShowLeaveRequestModal(true);
  };

  const handleViewLeave = (leave: any) => {
    setSelectedLeave(leave);
    setShowLeaveDetails(true);
  };

  const handleApproveLeave = (leaveId: string) => {
    toast.success(`Leave request ${leaveId} approved successfully!`);
  };

  const handleRejectLeave = (leaveId: string) => {
    toast.warning(`Leave request ${leaveId} rejected.`);
  };

  const handleExport = () => {
    toast.success('Leave data exported successfully!');
  };

  const handleFilter = () => {
    toast.info('Advanced filtering options coming soon!');
  };

  return (
    <Layout>
      <div className="space-y-6 fade-in">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center space-y-4 sm:space-y-0">
          <div>
            <h1 className="text-xl sm:text-2xl font-bold text-foreground">Leave Management</h1>
            <p className="text-muted-foreground">Manage leave requests and employee leave balance</p>
          </div>
          <Button className="bg-gradient-primary hover:opacity-90 w-full sm:w-auto" onClick={handleNewLeaveRequest}>
            <Plus className="w-4 h-4 mr-2" />
            New Leave Request
          </Button>
        </div>

        {/* Leave Balance Overview */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Annual Leave</p>
                  <p className="text-2xl font-bold text-foreground">{leaveBalance.annual.remaining}</p>
                  <p className="text-xs text-muted-foreground">of {leaveBalance.annual.total} days</p>
                </div>
                <Calendar className="w-8 h-8 text-primary" />
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Sick Leave</p>
                  <p className="text-2xl font-bold text-foreground">{leaveBalance.sick.remaining}</p>
                  <p className="text-xs text-muted-foreground">of {leaveBalance.sick.total} days</p>
                </div>
                <FileText className="w-8 h-8 text-warning" />
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Maternity Leave</p>
                  <p className="text-2xl font-bold text-foreground">{leaveBalance.maternity.remaining}</p>
                  <p className="text-xs text-muted-foreground">of {leaveBalance.maternity.total} days</p>
                </div>
                <User className="w-8 h-8 text-success" />
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Compassionate</p>
                  <p className="text-2xl font-bold text-foreground">{leaveBalance.compassionate.remaining}</p>
                  <p className="text-xs text-muted-foreground">of {leaveBalance.compassionate.total} days</p>
                </div>
                <AlertCircle className="w-8 h-8 text-error" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="requests">Leave Requests</TabsTrigger>
            <TabsTrigger value="calendar">Leave Calendar</TabsTrigger>
            <TabsTrigger value="reports">Reports</TabsTrigger>
          </TabsList>

          <TabsContent value="requests" className="space-y-4">
            {/* Search and Filter */}
            <Card>
              <CardContent className="p-4">
                <div className="flex flex-col md:flex-row gap-4">
                  <Input 
                    placeholder="Search by employee name or ID..." 
                    className="flex-1"
                  />
                  <div className="flex gap-2">
                    <Button variant="outline" onClick={handleFilter}>
                      <Filter className="w-4 h-4 mr-2" />
                      Filter by Status
                    </Button>
                    <Button variant="outline" onClick={handleFilter}>
                      Filter by Department
                    </Button>
                    <Button variant="outline" onClick={handleExport}>
                      <Download className="w-4 h-4 mr-2" />
                      Export
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Leave Requests List */}
            <div className="space-y-4">
              {leaveRequests.map((request) => {
                const StatusIcon = getStatusIcon(request.status);
                return (
                  <Card key={request.id} className="hover-glow">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center space-x-4 mb-3">
                            <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center text-white font-semibold">
                              {request.employeeName.split(' ').map(n => n[0]).join('')}
                            </div>
                            <div>
                              <h3 className="font-semibold text-foreground">{request.employeeName}</h3>
                              <p className="text-sm text-muted-foreground">{request.department}</p>
                            </div>
                            <Badge className={getStatusColor(request.status)}>
                              <StatusIcon className="w-3 h-3 mr-1" />
                              {request.status.charAt(0).toUpperCase() + request.status.slice(1)}
                            </Badge>
                          </div>
                          
                          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                            <div>
                              <p className="text-muted-foreground">Leave Type</p>
                              <p className="font-medium">{request.leaveType}</p>
                            </div>
                            <div>
                              <p className="text-muted-foreground">Duration</p>
                              <p className="font-medium">{request.days} days</p>
                            </div>
                            <div>
                              <p className="text-muted-foreground">Start Date</p>
                              <p className="font-medium">{new Date(request.startDate).toLocaleDateString()}</p>
                            </div>
                            <div>
                              <p className="text-muted-foreground">End Date</p>
                              <p className="font-medium">{new Date(request.endDate).toLocaleDateString()}</p>
                            </div>
                          </div>
                          
                          <div className="mt-3">
                            <p className="text-muted-foreground text-sm">Reason</p>
                            <p className="text-foreground">{request.reason}</p>
                          </div>
                        </div>
                        
                        <div className="flex space-x-2">
                          <Button size="sm" variant="outline" onClick={() => handleViewLeave(request)}>
                            <Eye className="w-4 h-4 mr-1" />
                            View
                          </Button>
                          {request.status === 'pending' && (
                            <>
                              <Button size="sm" className="bg-success hover:bg-success/90" onClick={() => handleApproveLeave(request.id)}>
                                <CheckCircle className="w-4 h-4 mr-1" />
                                Approve
                              </Button>
                              <Button size="sm" variant="outline" className="text-error border-error hover:bg-error hover:text-error-foreground" onClick={() => handleRejectLeave(request.id)}>
                                <XCircle className="w-4 h-4 mr-1" />
                                Reject
                              </Button>
                            </>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </TabsContent>

          <TabsContent value="calendar">
            <Card>
              <CardHeader>
                <CardTitle>Leave Calendar</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-96 flex items-center justify-center text-muted-foreground">
                  <div className="text-center">
                    <Calendar className="w-16 h-16 mx-auto mb-4" />
                    <p>Calendar view will show all approved leaves</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="reports">
            <Card>
              <CardHeader>
                <CardTitle>Leave Reports & Analytics</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h4 className="font-semibold">Department Usage</h4>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Ministry of Health</span>
                        <span className="text-sm font-medium">65%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div className="bg-primary h-2 rounded-full" style={{ width: '65%' }}></div>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Ministry of Education</span>
                        <span className="text-sm font-medium">42%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div className="bg-primary h-2 rounded-full" style={{ width: '42%' }}></div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <h4 className="font-semibold">Monthly Trends</h4>
                    <div className="h-40 flex items-center justify-center text-muted-foreground">
                      <p>Chart showing leave trends over time</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>

      {/* Modals */}
      <LeaveRequestModal
        isOpen={showLeaveRequestModal}
        onClose={() => setShowLeaveRequestModal(false)}
        onSuccess={() => {
          toast.success('Leave request submitted successfully!');
        }}
      />

      {/* Leave Details Modal */}
      <Dialog open={showLeaveDetails} onOpenChange={setShowLeaveDetails}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>Leave Request Details</DialogTitle>
          </DialogHeader>
          {selectedLeave && (
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center text-white font-semibold text-xl">
                  {selectedLeave.employeeName.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground">{selectedLeave.employeeName}</h3>
                  <p className="text-muted-foreground">{selectedLeave.department}</p>
                  <Badge className={getStatusColor(selectedLeave.status)}>
                    {selectedLeave.status.charAt(0).toUpperCase() + selectedLeave.status.slice(1)}
                  </Badge>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Leave Information</h4>
                  <div className="space-y-2 text-sm">
                    <div>
                      <span className="text-muted-foreground">Leave Type:</span> {selectedLeave.leaveType}
                    </div>
                    <div>
                      <span className="text-muted-foreground">Duration:</span> {selectedLeave.days} days
                    </div>
                    <div>
                      <span className="text-muted-foreground">Start Date:</span> {new Date(selectedLeave.startDate).toLocaleDateString()}
                    </div>
                    <div>
                      <span className="text-muted-foreground">End Date:</span> {new Date(selectedLeave.endDate).toLocaleDateString()}
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Request Details</h4>
                  <div className="space-y-2 text-sm">
                    <div>
                      <span className="text-muted-foreground">Applied Date:</span> {new Date(selectedLeave.appliedDate).toLocaleDateString()}
                    </div>
                    <div>
                      <span className="text-muted-foreground">Supervisor:</span> {selectedLeave.supervisor}
                    </div>
                    <div>
                      <span className="text-muted-foreground">Employee ID:</span> {selectedLeave.employeeId}
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-foreground mb-2">Reason</h4>
                <p className="text-sm text-foreground bg-muted p-3 rounded-lg">{selectedLeave.reason}</p>
              </div>
            </div>
          )}
          <DialogFooter>
            <Button variant="outline" onClick={() => setShowLeaveDetails(false)}>
              Close
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </Layout>
  );
};

export default LeaveManagement;