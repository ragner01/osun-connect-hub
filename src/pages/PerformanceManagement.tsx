import React, { useState } from 'react';
import Layout from '@/components/layout/Layout';
import { Star, TrendingUp, Target, Award, User, Calendar, FileText, BarChart3, Eye, Edit } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { toast } from 'sonner';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog';

const performanceData = [
  {
    id: 'PR001',
    employeeName: 'Adebayo Olusegun',
    employeeId: 'EMP001',
    department: 'Ministry of Health',
    position: 'Senior Health Officer',
    currentRating: 4.2,
    lastReview: '2023-12-15',
    nextReview: '2024-06-15',
    goals: [
      { title: 'Improve healthcare delivery', progress: 85, status: 'on-track' },
      { title: 'Complete certification course', progress: 60, status: 'at-risk' },
      { title: 'Lead team training sessions', progress: 100, status: 'completed' }
    ],
    kpis: {
      productivity: 88,
      teamwork: 92,
      innovation: 76,
      leadership: 85
    }
  },
  {
    id: 'PR002',
    employeeName: 'Fatima Ibrahim',
    employeeId: 'EMP002',
    department: 'Ministry of Education',
    position: 'Education Coordinator',
    currentRating: 4.6,
    lastReview: '2024-01-10',
    nextReview: '2024-07-10',
    goals: [
      { title: 'Implement new curriculum', progress: 95, status: 'on-track' },
      { title: 'Teacher training program', progress: 78, status: 'on-track' },
      { title: 'Student assessment system', progress: 45, status: 'at-risk' }
    ],
    kpis: {
      productivity: 94,
      teamwork: 89,
      innovation: 91,
      leadership: 88
    }
  }
];

const departmentMetrics = {
  overallRating: 4.3,
  reviewCompletion: 78,
  goalAchievement: 82,
  topPerformers: 15
};

const PerformanceManagement = () => {
  const [activeTab, setActiveTab] = useState('reviews');
  const [showReviewModal, setShowReviewModal] = useState(false);
  const [showPerformanceDetails, setShowPerformanceDetails] = useState(false);
  const [selectedEmployee, setSelectedEmployee] = useState<any>(null);

  const getRatingColor = (rating: number) => {
    if (rating >= 4.5) return 'text-success';
    if (rating >= 3.5) return 'text-warning';
    return 'text-error';
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'bg-success text-success-foreground';
      case 'on-track': return 'bg-primary text-primary-foreground';
      case 'at-risk': return 'bg-warning text-warning-foreground';
      case 'overdue': return 'bg-error text-error-foreground';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star 
        key={i} 
        className={`w-4 h-4 ${i < Math.floor(rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`} 
      />
    ));
  };

  const handleCreateReview = () => {
    setShowReviewModal(true);
  };

  const handleViewDetails = (employee: any) => {
    setSelectedEmployee(employee);
    setShowPerformanceDetails(true);
  };

  const handleUpdateReview = (employee: any) => {
    toast.info(`Update review functionality for ${employee.employeeName} coming soon!`);
  };

  return (
    <Layout>
      <div className="space-y-6 fade-in">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center space-y-4 sm:space-y-0">
          <div>
            <h1 className="text-xl sm:text-2xl font-bold text-foreground">Performance Management</h1>
            <p className="text-muted-foreground">Track and manage employee performance across departments</p>
          </div>
          <Button className="bg-gradient-primary hover:opacity-90 w-full sm:w-auto" onClick={handleCreateReview}>
            <FileText className="w-4 h-4 mr-2" />
            Create Review
          </Button>
        </div>

        {/* Performance Overview */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Overall Rating</p>
                  <div className="flex items-center space-x-2">
                    <p className="text-2xl font-bold text-foreground">{departmentMetrics.overallRating}</p>
                    <div className="flex">
                      {renderStars(departmentMetrics.overallRating)}
                    </div>
                  </div>
                </div>
                <Star className="w-8 h-8 text-yellow-400" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Review Completion</p>
                  <p className="text-2xl font-bold text-foreground">{departmentMetrics.reviewCompletion}%</p>
                  <Progress value={departmentMetrics.reviewCompletion} className="mt-2" />
                </div>
                <Calendar className="w-8 h-8 text-primary" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Goal Achievement</p>
                  <p className="text-2xl font-bold text-foreground">{departmentMetrics.goalAchievement}%</p>
                  <Progress value={departmentMetrics.goalAchievement} className="mt-2" />
                </div>
                <Target className="w-8 h-8 text-success" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Top Performers</p>
                  <p className="text-2xl font-bold text-foreground">{departmentMetrics.topPerformers}</p>
                  <p className="text-xs text-muted-foreground">employees</p>
                </div>
                <Award className="w-8 h-8 text-warning" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="reviews">Performance Reviews</TabsTrigger>
            <TabsTrigger value="goals">Goals & KPIs</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
          </TabsList>

          <TabsContent value="reviews" className="space-y-4">
            {performanceData.map((employee) => (
              <Card key={employee.id} className="hover-glow">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center text-white font-semibold">
                        {employee.employeeName.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground">{employee.employeeName}</h3>
                        <p className="text-sm text-muted-foreground">{employee.position}</p>
                        <p className="text-xs text-muted-foreground">{employee.department}</p>
                      </div>
                    </div>
                    
                    <div className="text-right">
                      <div className="flex items-center space-x-2">
                        <span className={`text-2xl font-bold ${getRatingColor(employee.currentRating)}`}>
                          {employee.currentRating}
                        </span>
                        <div className="flex">
                          {renderStars(employee.currentRating)}
                        </div>
                      </div>
                      <p className="text-xs text-muted-foreground">Current Rating</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* KPI Metrics */}
                    <div>
                      <h4 className="font-medium mb-3">Key Performance Indicators</h4>
                      <div className="space-y-3">
                        <div>
                          <div className="flex justify-between text-sm mb-1">
                            <span>Productivity</span>
                            <span>{employee.kpis.productivity}%</span>
                          </div>
                          <Progress value={employee.kpis.productivity} />
                        </div>
                        <div>
                          <div className="flex justify-between text-sm mb-1">
                            <span>Teamwork</span>
                            <span>{employee.kpis.teamwork}%</span>
                          </div>
                          <Progress value={employee.kpis.teamwork} />
                        </div>
                        <div>
                          <div className="flex justify-between text-sm mb-1">
                            <span>Innovation</span>
                            <span>{employee.kpis.innovation}%</span>
                          </div>
                          <Progress value={employee.kpis.innovation} />
                        </div>
                        <div>
                          <div className="flex justify-between text-sm mb-1">
                            <span>Leadership</span>
                            <span>{employee.kpis.leadership}%</span>
                          </div>
                          <Progress value={employee.kpis.leadership} />
                        </div>
                      </div>
                    </div>

                    {/* Goals */}
                    <div>
                      <h4 className="font-medium mb-3">Current Goals</h4>
                      <div className="space-y-3">
                        {employee.goals.map((goal, index) => (
                          <div key={index} className="flex items-center justify-between">
                            <div className="flex-1">
                              <p className="text-sm font-medium">{goal.title}</p>
                              <div className="flex items-center space-x-2 mt-1">
                                <Progress value={goal.progress} className="flex-1" />
                                <span className="text-xs text-muted-foreground">{goal.progress}%</span>
                              </div>
                            </div>
                            <Badge className={`ml-2 ${getStatusColor(goal.status)}`}>
                              {goal.status.replace('-', ' ')}
                            </Badge>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-between items-center mt-6 pt-4 border-t">
                    <div className="flex space-x-4 text-sm text-muted-foreground">
                      <span>Last Review: {new Date(employee.lastReview).toLocaleDateString()}</span>
                      <span>Next Review: {new Date(employee.nextReview).toLocaleDateString()}</span>
                    </div>
                    <div className="flex space-x-2">
                      <Button size="sm" variant="outline" onClick={() => handleViewDetails(employee)}>
                        <Eye className="w-4 h-4 mr-1" />
                        View Details
                      </Button>
                      <Button size="sm" className="bg-gradient-primary" onClick={() => handleUpdateReview(employee)}>
                        <Edit className="w-4 h-4 mr-1" />
                        Update Review
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="goals">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Target className="w-5 h-5 mr-2" />
                  Goal Management
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center py-8 text-muted-foreground">
                  <Target className="w-16 h-16 mx-auto mb-4" />
                  <p>Goal setting and tracking interface</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="analytics">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <BarChart3 className="w-5 h-5 mr-2" />
                  Performance Analytics
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center py-8 text-muted-foreground">
                  <BarChart3 className="w-16 h-16 mx-auto mb-4" />
                  <p>Performance charts and analytics dashboard</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="settings">
            <Card>
              <CardHeader>
                <CardTitle>Performance Settings</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium mb-2">Review Cycle Settings</h4>
                    <p className="text-sm text-muted-foreground">Configure review periods and notifications</p>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">KPI Templates</h4>
                    <p className="text-sm text-muted-foreground">Manage performance indicators by department</p>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Rating Scales</h4>
                    <p className="text-sm text-muted-foreground">Define rating criteria and scales</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>

      {/* Modals */}
      {/* Create Review Modal */}
      <Dialog open={showReviewModal} onOpenChange={setShowReviewModal}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>Create Performance Review</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <div className="text-center py-8 text-muted-foreground">
              <FileText className="w-16 h-16 mx-auto mb-4" />
              <p>Performance review creation form will be implemented here</p>
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setShowReviewModal(false)}>
              Cancel
            </Button>
            <Button className="bg-gradient-primary" onClick={() => {
              toast.success('Performance review created successfully!');
              setShowReviewModal(false);
            }}>
              Create Review
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Performance Details Modal */}
      <Dialog open={showPerformanceDetails} onOpenChange={setShowPerformanceDetails}>
        <DialogContent className="max-w-4xl">
          <DialogHeader>
            <DialogTitle>Performance Details</DialogTitle>
          </DialogHeader>
          {selectedEmployee && (
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center text-white font-semibold text-xl">
                  {selectedEmployee.employeeName.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground">{selectedEmployee.employeeName}</h3>
                  <p className="text-muted-foreground">{selectedEmployee.position}</p>
                  <p className="text-sm text-muted-foreground">{selectedEmployee.department}</p>
                </div>
                <div className="ml-auto text-right">
                  <div className="flex items-center space-x-2">
                    <span className={`text-2xl font-bold ${getRatingColor(selectedEmployee.currentRating)}`}>
                      {selectedEmployee.currentRating}
                    </span>
                    <div className="flex">
                      {renderStars(selectedEmployee.currentRating)}
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground">Current Rating</p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-foreground mb-3">Key Performance Indicators</h4>
                  <div className="space-y-3">
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Productivity</span>
                        <span>{selectedEmployee.kpis.productivity}%</span>
                      </div>
                      <Progress value={selectedEmployee.kpis.productivity} />
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Teamwork</span>
                        <span>{selectedEmployee.kpis.teamwork}%</span>
                      </div>
                      <Progress value={selectedEmployee.kpis.teamwork} />
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Innovation</span>
                        <span>{selectedEmployee.kpis.innovation}%</span>
                      </div>
                      <Progress value={selectedEmployee.kpis.innovation} />
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Leadership</span>
                        <span>{selectedEmployee.kpis.leadership}%</span>
                      </div>
                      <Progress value={selectedEmployee.kpis.leadership} />
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold text-foreground mb-3">Current Goals</h4>
                  <div className="space-y-3">
                    {selectedEmployee.goals.map((goal, index) => (
                      <div key={index} className="flex items-center justify-between">
                        <div className="flex-1">
                          <p className="text-sm font-medium">{goal.title}</p>
                          <div className="flex items-center space-x-2 mt-1">
                            <Progress value={goal.progress} className="flex-1" />
                            <span className="text-xs text-muted-foreground">{goal.progress}%</span>
                          </div>
                        </div>
                        <Badge className={`ml-2 ${getStatusColor(goal.status)}`}>
                          {goal.status.replace('-', ' ')}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
          <DialogFooter>
            <Button variant="outline" onClick={() => setShowPerformanceDetails(false)}>
              Close
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </Layout>
  );
};

export default PerformanceManagement;