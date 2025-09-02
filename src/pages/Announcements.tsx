import React, { useState } from 'react';
import Layout from '@/components/layout/Layout';
import { Bell, Megaphone, Calendar, User, Pin, Eye, MessageCircle, Plus, Filter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { toast } from 'sonner';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog';

const announcements = [
  {
    id: 'ANN001',
    title: 'New Health Insurance Benefits for Civil Servants',
    content: 'We are pleased to announce the introduction of enhanced health insurance coverage for all Osun State civil servants. The new policy includes dental care, eye care, and specialized medical treatments.',
    category: 'Benefits',
    priority: 'high',
    author: 'Ministry of Health',
    publishDate: '2024-01-22',
    expiryDate: '2024-03-22',
    views: 2847,
    comments: 34,
    isPinned: true,
    status: 'published',
    targetAudience: 'All Employees'
  },
  {
    id: 'ANN002',
    title: 'Annual Performance Review Period',
    content: 'The annual performance review period for 2023 has commenced. All employees are required to complete their self-assessments by February 15, 2024. Supervisors must complete evaluations by February 28, 2024.',
    category: 'HR Policy',
    priority: 'high',
    author: 'Human Resources Department',
    publishDate: '2024-01-20',
    expiryDate: '2024-02-28',
    views: 1923,
    comments: 67,
    isPinned: true,
    status: 'published',
    targetAudience: 'All Employees'
  },
  {
    id: 'ANN003',
    title: 'Office Renovation Schedule - Ministry of Education',
    content: 'The Ministry of Education headquarters will undergo renovation from February 5-19, 2024. Alternative workspaces have been arranged at the Osun State Secretariat Building B.',
    category: 'Facilities',
    priority: 'medium',
    author: 'Ministry of Works',
    publishDate: '2024-01-18',
    expiryDate: '2024-02-20',
    views: 456,
    comments: 12,
    isPinned: false,
    status: 'published',
    targetAudience: 'Ministry of Education'
  },
  {
    id: 'ANN004',
    title: 'Digital Literacy Training Program Registration',
    content: 'Registration is now open for the Digital Literacy Training Program. This comprehensive 6-week course covers essential digital skills for modern civil service. Limited spots available.',
    category: 'Training',
    priority: 'medium',
    author: 'Training Department',
    publishDate: '2024-01-15',
    expiryDate: '2024-02-15',
    views: 789,
    comments: 23,
    isPinned: false,
    status: 'published',
    targetAudience: 'All Employees'
  }
];

const categories = ['All', 'HR Policy', 'Benefits', 'Training', 'Facilities', 'Events', 'Technology'];
const priorities = ['All', 'High', 'Medium', 'Low'];

const Announcements = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedPriority, setSelectedPriority] = useState('All');
  const [showCreateAnnouncementModal, setShowCreateAnnouncementModal] = useState(false);
  const [showAnnouncementDetails, setShowAnnouncementDetails] = useState(false);
  const [selectedAnnouncement, setSelectedAnnouncement] = useState<any>(null);

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'bg-error text-error-foreground';
      case 'medium': return 'bg-warning text-warning-foreground';
      case 'low': return 'bg-success text-success-foreground';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'HR Policy': return 'bg-blue-100 text-blue-800';
      case 'Benefits': return 'bg-green-100 text-green-800';
      case 'Training': return 'bg-purple-100 text-purple-800';
      case 'Facilities': return 'bg-orange-100 text-orange-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const filteredAnnouncements = announcements.filter(announcement => {
    if (selectedCategory !== 'All' && announcement.category !== selectedCategory) return false;
    if (selectedPriority !== 'All' && announcement.priority !== selectedPriority.toLowerCase()) return false;
    return true;
  });

  const handleCreateAnnouncement = () => {
    setShowCreateAnnouncementModal(true);
  };

  const handleViewDetails = (announcement: any) => {
    setSelectedAnnouncement(announcement);
    setShowAnnouncementDetails(true);
  };

  const handleComment = (announcement: any) => {
    toast.info(`Comment functionality for "${announcement.title}" coming soon!`);
  };

  return (
    <Layout>
      <div className="space-y-6 fade-in">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center space-y-4 sm:space-y-0">
          <div>
            <h1 className="text-xl sm:text-2xl font-bold text-foreground">Announcements & News</h1>
            <p className="text-muted-foreground">Stay updated with the latest news and announcements</p>
          </div>
          <Button className="bg-gradient-primary hover:opacity-90 w-full sm:w-auto" onClick={handleCreateAnnouncement}>
            <Plus className="w-4 h-4 mr-2" />
            Create Announcement
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Total Announcements</p>
                  <p className="text-2xl font-bold text-foreground">47</p>
                </div>
                <Megaphone className="w-8 h-8 text-primary" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Pinned Posts</p>
                  <p className="text-2xl font-bold text-foreground">3</p>
                </div>
                <Pin className="w-8 h-8 text-warning" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Total Views</p>
                  <p className="text-2xl font-bold text-foreground">12.4K</p>
                </div>
                <Eye className="w-8 h-8 text-success" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Comments</p>
                  <p className="text-2xl font-bold text-foreground">387</p>
                </div>
                <MessageCircle className="w-8 h-8 text-primary" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="all">All Announcements</TabsTrigger>
            <TabsTrigger value="pinned">Pinned Posts</TabsTrigger>
            <TabsTrigger value="drafts">Drafts</TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="space-y-4">
            {/* Search and Filters */}
            <Card>
              <CardContent className="p-4">
                <div className="flex flex-col md:flex-row gap-4">
                  <Input 
                    placeholder="Search announcements..." 
                    className="flex-1"
                  />
                  <div className="flex gap-2">
                    <select 
                      className="px-3 py-2 border rounded-md text-sm"
                      value={selectedCategory}
                      onChange={(e) => setSelectedCategory(e.target.value)}
                    >
                      {categories.map(category => (
                        <option key={category} value={category}>{category}</option>
                      ))}
                    </select>
                    
                    <select 
                      className="px-3 py-2 border rounded-md text-sm"
                      value={selectedPriority}
                      onChange={(e) => setSelectedPriority(e.target.value)}
                    >
                      {priorities.map(priority => (
                        <option key={priority} value={priority}>Priority: {priority}</option>
                      ))}
                    </select>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Announcements List */}
            <div className="space-y-4">
              {filteredAnnouncements.map((announcement) => (
                <Card key={announcement.id} className={`hover-glow ${announcement.isPinned ? 'border-warning border-2' : ''}`}>
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          {announcement.isPinned && (
                            <Pin className="w-5 h-5 text-warning" />
                          )}
                          <h3 className="text-lg font-semibold text-foreground">{announcement.title}</h3>
                        </div>
                        
                        <div className="flex items-center space-x-2 mb-3">
                          <Badge className={getPriorityColor(announcement.priority)}>
                            {announcement.priority.toUpperCase()}
                          </Badge>
                          <Badge variant="outline" className={getCategoryColor(announcement.category)}>
                            {announcement.category}
                          </Badge>
                          <Badge variant="outline">
                            {announcement.targetAudience}
                          </Badge>
                        </div>
                      </div>
                    </div>

                    <p className="text-muted-foreground mb-4 leading-relaxed">{announcement.content}</p>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-6 text-sm text-muted-foreground">
                        <div className="flex items-center space-x-1">
                          <User className="w-4 h-4" />
                          <span>{announcement.author}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Calendar className="w-4 h-4" />
                          <span>{new Date(announcement.publishDate).toLocaleDateString()}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Eye className="w-4 h-4" />
                          <span>{announcement.views} views</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <MessageCircle className="w-4 h-4" />
                          <span>{announcement.comments} comments</span>
                        </div>
                      </div>

                      <div className="flex space-x-2">
                        <Button size="sm" variant="outline" onClick={() => handleViewDetails(announcement)}>
                          <Eye className="w-4 h-4 mr-1" />
                          View Details
                        </Button>
                        <Button size="sm" variant="outline" onClick={() => handleComment(announcement)}>
                          <MessageCircle className="w-4 h-4 mr-1" />
                          Comment
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="pinned">
            <div className="space-y-4">
              {announcements
                .filter(announcement => announcement.isPinned)
                .map((announcement) => (
                  <Card key={announcement.id} className="border-warning border-2 hover-glow">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-3 mb-4">
                        <Pin className="w-5 h-5 text-warning mt-1" />
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold text-foreground mb-2">{announcement.title}</h3>
                          <p className="text-muted-foreground mb-3">{announcement.content}</p>
                          <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                            <span>{announcement.author}</span>
                            <span>{new Date(announcement.publishDate).toLocaleDateString()}</span>
                            <span>{announcement.views} views</span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
            </div>
          </TabsContent>

          <TabsContent value="drafts">
            <Card>
              <CardHeader>
                <CardTitle>Draft Announcements</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center py-8 text-muted-foreground">
                  <Bell className="w-16 h-16 mx-auto mb-4" />
                  <p>No draft announcements at the moment</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>

      {/* Modals */}
      {/* Create Announcement Modal */}
      <Dialog open={showCreateAnnouncementModal} onOpenChange={setShowCreateAnnouncementModal}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>Create Announcement</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <div className="text-center py-8 text-muted-foreground">
              <Megaphone className="w-16 h-16 mx-auto mb-4" />
              <p>Announcement creation form will be implemented here</p>
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setShowCreateAnnouncementModal(false)}>
              Cancel
            </Button>
            <Button className="bg-gradient-primary" onClick={() => {
              toast.success('Announcement created successfully!');
              setShowCreateAnnouncementModal(false);
            }}>
              Create Announcement
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Announcement Details Modal */}
      <Dialog open={showAnnouncementDetails} onOpenChange={setShowAnnouncementDetails}>
        <DialogContent className="max-w-4xl">
          <DialogHeader>
            <DialogTitle>Announcement Details</DialogTitle>
          </DialogHeader>
          {selectedAnnouncement && (
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                {selectedAnnouncement.isPinned && (
                  <Pin className="w-6 h-6 text-warning mt-1" />
                )}
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-foreground mb-2">{selectedAnnouncement.title}</h3>
                  <div className="flex items-center space-x-2 mb-4">
                    <Badge className={getPriorityColor(selectedAnnouncement.priority)}>
                      {selectedAnnouncement.priority.toUpperCase()}
                    </Badge>
                    <Badge variant="outline" className={getCategoryColor(selectedAnnouncement.category)}>
                      {selectedAnnouncement.category}
                    </Badge>
                    <Badge variant="outline">
                      {selectedAnnouncement.targetAudience}
                    </Badge>
                  </div>
                </div>
              </div>
              
              <div className="prose max-w-none">
                <p className="text-foreground leading-relaxed">{selectedAnnouncement.content}</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-foreground mb-3">Publication Details</h4>
                  <div className="space-y-2 text-sm">
                    <div>
                      <span className="text-muted-foreground">Author:</span> {selectedAnnouncement.author}
                    </div>
                    <div>
                      <span className="text-muted-foreground">Published:</span> {new Date(selectedAnnouncement.publishDate).toLocaleDateString()}
                    </div>
                    <div>
                      <span className="text-muted-foreground">Expires:</span> {new Date(selectedAnnouncement.expiryDate).toLocaleDateString()}
                    </div>
                    <div>
                      <span className="text-muted-foreground">Status:</span> 
                      <Badge className="ml-2 bg-success text-success-foreground">
                        {selectedAnnouncement.status}
                      </Badge>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold text-foreground mb-3">Engagement</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center space-x-2">
                      <Eye className="w-4 h-4 text-muted-foreground" />
                      <span>{selectedAnnouncement.views} views</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <MessageCircle className="w-4 h-4 text-muted-foreground" />
                      <span>{selectedAnnouncement.comments} comments</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
          <DialogFooter>
            <Button variant="outline" onClick={() => setShowAnnouncementDetails(false)}>
              Close
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </Layout>
  );
};

export default Announcements;