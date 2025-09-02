import React, { useState } from 'react';
import Layout from '@/components/layout/Layout';
import { GraduationCap, Users, Calendar, Trophy, BookOpen, Video, FileText, Plus, Eye, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { toast } from 'sonner';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog';

const trainingPrograms = [
  {
    id: 'TRN001',
    title: 'Digital Governance and E-Government Services',
    category: 'Technology',
    instructor: 'Prof. Adeyemi Olumide',
    duration: '6 weeks',
    startDate: '2024-02-15',
    endDate: '2024-03-29',
    participants: 45,
    maxParticipants: 50,
    completionRate: 78,
    status: 'ongoing',
    description: 'Comprehensive training on digital transformation in public service delivery',
    modules: 8,
    certificates: 35
  },
  {
    id: 'TRN002',
    title: 'Leadership Excellence in Public Service',
    category: 'Leadership',
    instructor: 'Dr. Fatima Abubakar',
    duration: '4 weeks',
    startDate: '2024-01-20',
    endDate: '2024-02-17',
    participants: 32,
    maxParticipants: 35,
    completionRate: 94,
    status: 'completed',
    description: 'Advanced leadership skills for senior civil servants',
    modules: 6,
    certificates: 30
  },
  {
    id: 'TRN003',
    title: 'Financial Management and Budgeting',
    category: 'Finance',
    instructor: 'CPA Bola Ogundimu',
    duration: '3 weeks',
    startDate: '2024-03-01',
    endDate: '2024-03-22',
    participants: 28,
    maxParticipants: 40,
    completionRate: 0,
    status: 'upcoming',
    description: 'Essential financial management skills for government officials',
    modules: 5,
    certificates: 0
  }
];

const enrolledCourses = [
  {
    id: 'TRN001',
    title: 'Digital Governance and E-Government Services',
    progress: 65,
    nextModule: 'Module 5: Data Analytics in Government',
    dueDate: '2024-02-25'
  },
  {
    id: 'TRN004',
    title: 'Project Management Fundamentals',
    progress: 100,
    nextModule: 'Certificate Available',
    dueDate: 'Completed'
  }
];

const TrainingPrograms = () => {
  const [activeTab, setActiveTab] = useState('programs');
  const [showCreateProgramModal, setShowCreateProgramModal] = useState(false);
  const [showProgramDetails, setShowProgramDetails] = useState(false);
  const [selectedProgram, setSelectedProgram] = useState<any>(null);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'ongoing': return 'bg-primary text-primary-foreground';
      case 'completed': return 'bg-success text-success-foreground';
      case 'upcoming': return 'bg-warning text-warning-foreground';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Technology': return 'bg-blue-100 text-blue-800';
      case 'Leadership': return 'bg-purple-100 text-purple-800';
      case 'Finance': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const handleCreateProgram = () => {
    setShowCreateProgramModal(true);
  };

  const handleViewDetails = (program: any) => {
    setSelectedProgram(program);
    setShowProgramDetails(true);
  };

  const handleEnrollNow = (program: any) => {
    toast.success(`Successfully enrolled in ${program.title}!`);
  };

  const handleContinue = (program: any) => {
    toast.info(`Continuing ${program.title}...`);
  };

  const handleGetCertificate = (course: any) => {
    toast.success(`Certificate for ${course.title} downloaded!`);
  };

  const handleContinueLearning = (course: any) => {
    toast.info(`Continuing ${course.title}...`);
  };

  const handleDownloadCertificate = () => {
    toast.success('Certificate downloaded successfully!');
  };

  return (
    <Layout>
      <div className="space-y-6 fade-in">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center space-y-4 sm:space-y-0">
          <div>
            <h1 className="text-xl sm:text-2xl font-bold text-foreground">Training Programs</h1>
            <p className="text-muted-foreground">Continuous learning and professional development</p>
          </div>
          <Button className="bg-gradient-primary hover:opacity-90 w-full sm:w-auto" onClick={handleCreateProgram}>
            <Plus className="w-4 h-4 mr-2" />
            Create Program
          </Button>
        </div>

        {/* Training Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Active Programs</p>
                  <p className="text-2xl font-bold text-foreground">24</p>
                </div>
                <GraduationCap className="w-8 h-8 text-primary" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Total Participants</p>
                  <p className="text-2xl font-bold text-foreground">1,247</p>
                </div>
                <Users className="w-8 h-8 text-success" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Certificates Issued</p>
                  <p className="text-2xl font-bold text-foreground">892</p>
                </div>
                <Trophy className="w-8 h-8 text-warning" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Avg. Completion</p>
                  <p className="text-2xl font-bold text-foreground">84%</p>
                </div>
                <BookOpen className="w-8 h-8 text-primary" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="programs">All Programs</TabsTrigger>
            <TabsTrigger value="enrolled">My Courses</TabsTrigger>
            <TabsTrigger value="certificates">Certificates</TabsTrigger>
            <TabsTrigger value="calendar">Training Calendar</TabsTrigger>
          </TabsList>

          <TabsContent value="programs" className="space-y-4">
            <div className="grid gap-6">
              {trainingPrograms.map((program) => (
                <Card key={program.id} className="hover-glow">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <h3 className="text-lg font-semibold text-foreground">{program.title}</h3>
                          <Badge className={getStatusColor(program.status)}>
                            {program.status}
                          </Badge>
                          <Badge variant="outline" className={getCategoryColor(program.category)}>
                            {program.category}
                          </Badge>
                        </div>
                        <p className="text-muted-foreground mb-3">{program.description}</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
                      <div className="text-center p-3 bg-muted/50 rounded-lg">
                        <Calendar className="w-6 h-6 mx-auto mb-2 text-primary" />
                        <p className="text-sm font-medium">{program.duration}</p>
                        <p className="text-xs text-muted-foreground">Duration</p>
                      </div>
                      
                      <div className="text-center p-3 bg-muted/50 rounded-lg">
                        <Users className="w-6 h-6 mx-auto mb-2 text-success" />
                        <p className="text-sm font-medium">{program.participants}/{program.maxParticipants}</p>
                        <p className="text-xs text-muted-foreground">Enrolled</p>
                      </div>
                      
                      <div className="text-center p-3 bg-muted/50 rounded-lg">
                        <BookOpen className="w-6 h-6 mx-auto mb-2 text-warning" />
                        <p className="text-sm font-medium">{program.modules}</p>
                        <p className="text-xs text-muted-foreground">Modules</p>
                      </div>
                      
                      <div className="text-center p-3 bg-muted/50 rounded-lg">
                        <Trophy className="w-6 h-6 mx-auto mb-2 text-error" />
                        <p className="text-sm font-medium">{program.completionRate}%</p>
                        <p className="text-xs text-muted-foreground">Completion</p>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                        <span>Instructor: {program.instructor}</span>
                        <span>Start: {new Date(program.startDate).toLocaleDateString()}</span>
                      </div>
                      
                      <div className="flex space-x-2">
                        <Button size="sm" variant="outline" onClick={() => handleViewDetails(program)}>
                          <Eye className="w-4 h-4 mr-1" />
                          View Details
                        </Button>
                        {program.status === 'upcoming' && (
                          <Button size="sm" className="bg-gradient-primary" onClick={() => handleEnrollNow(program)}>
                            Enroll Now
                          </Button>
                        )}
                        {program.status === 'ongoing' && (
                          <Button size="sm" className="bg-gradient-primary" onClick={() => handleContinue(program)}>
                            Continue
                          </Button>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="enrolled" className="space-y-4">
            <div className="grid gap-4">
              {enrolledCourses.map((course) => (
                <Card key={course.id} className="hover-glow">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-lg font-semibold text-foreground">{course.title}</h3>
                      <Badge className={course.progress === 100 ? 'bg-success text-success-foreground' : 'bg-primary text-primary-foreground'}>
                        {course.progress === 100 ? 'Completed' : 'In Progress'}
                      </Badge>
                    </div>
                    
                    <div className="space-y-3">
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span>Progress</span>
                          <span>{course.progress}%</span>
                        </div>
                        <Progress value={course.progress} />
                      </div>
                      
                      <div className="flex justify-between items-center">
                        <div>
                          <p className="text-sm font-medium">{course.nextModule}</p>
                          <p className="text-xs text-muted-foreground">
                            {course.progress === 100 ? 'Congratulations!' : `Due: ${course.dueDate}`}
                          </p>
                        </div>
                        
                        <div className="flex space-x-2">
                          {course.progress === 100 ? (
                            <Button size="sm" className="bg-gradient-primary" onClick={() => handleGetCertificate(course)}>
                              <Trophy className="w-4 h-4 mr-2" />
                              Get Certificate
                            </Button>
                          ) : (
                            <Button size="sm" className="bg-gradient-primary" onClick={() => handleContinueLearning(course)}>
                              Continue Learning
                            </Button>
                          )}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="certificates">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Trophy className="w-5 h-5 mr-2" />
                  My Certificates
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="border-2 border-dashed border-muted rounded-lg p-6 text-center">
                    <Trophy className="w-12 h-12 mx-auto mb-3 text-warning" />
                    <h4 className="font-medium mb-2">Project Management Fundamentals</h4>
                    <p className="text-sm text-muted-foreground mb-3">Issued on Jan 15, 2024</p>
                    <Button size="sm" variant="outline" onClick={handleDownloadCertificate}>Download PDF</Button>
                  </div>
                  
                  <div className="border-2 border-dashed border-muted rounded-lg p-6 text-center opacity-50">
                    <GraduationCap className="w-12 h-12 mx-auto mb-3 text-muted-foreground" />
                    <h4 className="font-medium mb-2">Digital Governance (In Progress)</h4>
                    <p className="text-sm text-muted-foreground mb-3">Complete course to earn certificate</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="calendar">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Calendar className="w-5 h-5 mr-2" />
                  Training Calendar
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="border rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-medium">Digital Governance and E-Government Services</h4>
                      <Badge className="bg-primary text-primary-foreground">Ongoing</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">Feb 15 - Mar 29, 2024 • Every Tuesday & Thursday</p>
                  </div>
                  
                  <div className="border rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-medium">Financial Management and Budgeting</h4>
                      <Badge className="bg-warning text-warning-foreground">Upcoming</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">Mar 1 - Mar 22, 2024 • Every Monday & Wednesday</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>

      {/* Modals */}
      {/* Create Program Modal */}
      <Dialog open={showCreateProgramModal} onOpenChange={setShowCreateProgramModal}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>Create Training Program</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <div className="text-center py-8 text-muted-foreground">
              <GraduationCap className="w-16 h-16 mx-auto mb-4" />
              <p>Training program creation form will be implemented here</p>
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setShowCreateProgramModal(false)}>
              Cancel
            </Button>
            <Button className="bg-gradient-primary" onClick={() => {
              toast.success('Training program created successfully!');
              setShowCreateProgramModal(false);
            }}>
              Create Program
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Program Details Modal */}
      <Dialog open={showProgramDetails} onOpenChange={setShowProgramDetails}>
        <DialogContent className="max-w-4xl">
          <DialogHeader>
            <DialogTitle>Program Details</DialogTitle>
          </DialogHeader>
          {selectedProgram && (
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center text-white font-semibold text-xl">
                  <GraduationCap className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground">{selectedProgram.title}</h3>
                  <p className="text-muted-foreground">{selectedProgram.description}</p>
                  <div className="flex items-center space-x-2 mt-2">
                    <Badge className={getStatusColor(selectedProgram.status)}>
                      {selectedProgram.status}
                    </Badge>
                    <Badge variant="outline" className={getCategoryColor(selectedProgram.category)}>
                      {selectedProgram.category}
                    </Badge>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-foreground mb-3">Program Information</h4>
                  <div className="space-y-2 text-sm">
                    <div>
                      <span className="text-muted-foreground">Duration:</span> {selectedProgram.duration}
                    </div>
                    <div>
                      <span className="text-muted-foreground">Instructor:</span> {selectedProgram.instructor}
                    </div>
                    <div>
                      <span className="text-muted-foreground">Start Date:</span> {new Date(selectedProgram.startDate).toLocaleDateString()}
                    </div>
                    <div>
                      <span className="text-muted-foreground">End Date:</span> {new Date(selectedProgram.endDate).toLocaleDateString()}
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold text-foreground mb-3">Statistics</h4>
                  <div className="space-y-2 text-sm">
                    <div>
                      <span className="text-muted-foreground">Participants:</span> {selectedProgram.participants}/{selectedProgram.maxParticipants}
                    </div>
                    <div>
                      <span className="text-muted-foreground">Modules:</span> {selectedProgram.modules}
                    </div>
                    <div>
                      <span className="text-muted-foreground">Completion Rate:</span> {selectedProgram.completionRate}%
                    </div>
                    <div>
                      <span className="text-muted-foreground">Certificates Issued:</span> {selectedProgram.certificates}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
          <DialogFooter>
            <Button variant="outline" onClick={() => setShowProgramDetails(false)}>
              Close
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </Layout>
  );
};

export default TrainingPrograms;