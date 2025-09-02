import React, { useState } from 'react';
import Layout from '@/components/layout/Layout';
import { Upload, Download, FileText, Folder, Search, Filter, Eye, Share, Trash2, Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { toast } from 'sonner';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog';

const documents = [
  {
    id: 'DOC001',
    name: 'Employee Handbook 2024',
    type: 'PDF',
    category: 'Policy',
    department: 'Human Resources',
    size: '2.4 MB',
    uploadedBy: 'Admin User',
    uploadDate: '2024-01-15',
    lastModified: '2024-01-20',
    downloads: 247,
    status: 'published'
  },
  {
    id: 'DOC002',
    name: 'Leave Application Form',
    type: 'PDF',
    category: 'Forms',
    department: 'Human Resources',
    size: '156 KB',
    uploadedBy: 'HR Manager',
    uploadDate: '2024-01-10',
    lastModified: '2024-01-10',
    downloads: 89,
    status: 'published'
  },
  {
    id: 'DOC003',
    name: 'Performance Review Template',
    type: 'DOCX',
    category: 'Templates',
    department: 'Human Resources',
    size: '324 KB',
    uploadedBy: 'HR Manager',
    uploadDate: '2024-01-08',
    lastModified: '2024-01-12',
    downloads: 156,
    status: 'draft'
  },
  {
    id: 'DOC004',
    name: 'Budget Proposal Q2 2024',
    type: 'XLSX',
    category: 'Financial',
    department: 'Finance',
    size: '1.8 MB',
    uploadedBy: 'Finance Director',
    uploadDate: '2024-01-05',
    lastModified: '2024-01-18',
    downloads: 45,
    status: 'published'
  }
];

const folders = [
  { name: 'Policies & Procedures', count: 23, lastUpdated: '2024-01-20' },
  { name: 'Employee Records', count: 1247, lastUpdated: '2024-01-19' },
  { name: 'Training Materials', count: 67, lastUpdated: '2024-01-18' },
  { name: 'Financial Reports', count: 89, lastUpdated: '2024-01-17' },
  { name: 'Legal Documents', count: 34, lastUpdated: '2024-01-15' },
  { name: 'Meeting Minutes', count: 156, lastUpdated: '2024-01-14' }
];

const DocumentManagement = () => {
  const [activeTab, setActiveTab] = useState('documents');
  const [viewMode, setViewMode] = useState('list');
  const [showUploadModal, setShowUploadModal] = useState(false);
  const [showNewFolderModal, setShowNewFolderModal] = useState(false);
  const [showDocumentDetails, setShowDocumentDetails] = useState(false);
  const [selectedDocument, setSelectedDocument] = useState<any>(null);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'published': return 'bg-success text-success-foreground';
      case 'draft': return 'bg-warning text-warning-foreground';
      case 'archived': return 'bg-muted text-muted-foreground';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  const getFileIcon = (type: string) => {
    return FileText; // Could be expanded with different icons for different file types
  };

  const handleUpload = () => {
    setShowUploadModal(true);
  };

  const handleNewFolder = () => {
    setShowNewFolderModal(true);
  };

  const handleViewDocument = (doc: any) => {
    setSelectedDocument(doc);
    setShowDocumentDetails(true);
  };

  const handleDownloadDocument = (doc: any) => {
    toast.success(`Downloading ${doc.name}...`);
  };

  const handleShareDocument = (doc: any) => {
    toast.info(`Sharing ${doc.name}...`);
  };

  const handleDeleteDocument = (doc: any) => {
    toast.warning(`Delete functionality for ${doc.name} coming soon!`);
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
            <h1 className="text-xl sm:text-2xl font-bold text-foreground">Document Management</h1>
            <p className="text-muted-foreground">Manage official documents and files across departments</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-2">
            <Button variant="outline" onClick={handleUpload} className="w-full sm:w-auto">
              <Upload className="w-4 h-4 mr-2" />
              Upload
            </Button>
            <Button className="bg-gradient-primary hover:opacity-90 w-full sm:w-auto" onClick={handleNewFolder}>
              <Plus className="w-4 h-4 mr-2" />
              New Folder
            </Button>
          </div>
        </div>

        {/* Document Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Total Documents</p>
                  <p className="text-2xl font-bold text-foreground">1,456</p>
                </div>
                <FileText className="w-8 h-8 text-primary" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Storage Used</p>
                  <p className="text-2xl font-bold text-foreground">2.4 GB</p>
                  <p className="text-xs text-muted-foreground">of 10 GB</p>
                </div>
                <Upload className="w-8 h-8 text-warning" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Downloads Today</p>
                  <p className="text-2xl font-bold text-foreground">89</p>
                </div>
                <Download className="w-8 h-8 text-success" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Active Folders</p>
                  <p className="text-2xl font-bold text-foreground">24</p>
                </div>
                <Folder className="w-8 h-8 text-primary" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="documents">All Documents</TabsTrigger>
            <TabsTrigger value="folders">Folders</TabsTrigger>
            <TabsTrigger value="recent">Recent Activity</TabsTrigger>
          </TabsList>

          <TabsContent value="documents" className="space-y-4">
            {/* Search and Filter */}
            <Card>
              <CardContent className="p-4">
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="flex-1 relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                    <Input 
                      placeholder="Search documents..." 
                      className="pl-10"
                    />
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" onClick={handleFilter}>
                      <Filter className="w-4 h-4 mr-2" />
                      Filter by Category
                    </Button>
                    <Button variant="outline" onClick={handleFilter}>
                      Filter by Department
                    </Button>
                    <Button variant="outline" onClick={handleFilter}>
                      Sort by Date
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Documents List */}
            <div className="space-y-3">
              {documents.map((doc) => {
                const FileIcon = getFileIcon(doc.type);
                return (
                  <Card key={doc.id} className="hover-glow">
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4 flex-1">
                          <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                            <FileIcon className="w-5 h-5 text-primary" />
                          </div>
                          
                          <div className="flex-1">
                            <div className="flex items-center space-x-2 mb-1">
                              <h3 className="font-medium text-foreground">{doc.name}</h3>
                              <Badge className={getStatusColor(doc.status)}>
                                {doc.status}
                              </Badge>
                            </div>
                            
                            <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                              <span>{doc.type} • {doc.size}</span>
                              <span>{doc.category}</span>
                              <span>{doc.department}</span>
                              <span>{doc.downloads} downloads</span>
                            </div>
                          </div>
                        </div>

                        <div className="flex items-center space-x-2">
                          <Button size="sm" variant="ghost" onClick={() => handleViewDocument(doc)}>
                            <Eye className="w-4 h-4" />
                          </Button>
                          <Button size="sm" variant="ghost" onClick={() => handleDownloadDocument(doc)}>
                            <Download className="w-4 h-4" />
                          </Button>
                          <Button size="sm" variant="ghost" onClick={() => handleShareDocument(doc)}>
                            <Share className="w-4 h-4" />
                          </Button>
                          <Button size="sm" variant="ghost" className="text-error" onClick={() => handleDeleteDocument(doc)}>
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </TabsContent>

          <TabsContent value="folders" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {folders.map((folder, index) => (
                <Card key={index} className="hover-glow cursor-pointer">
                  <CardContent className="p-6 text-center">
                    <Folder className="w-12 h-12 mx-auto mb-3 text-primary" />
                    <h3 className="font-medium text-foreground mb-2">{folder.name}</h3>
                    <p className="text-sm text-muted-foreground">{folder.count} files</p>
                    <p className="text-xs text-muted-foreground">Updated {new Date(folder.lastUpdated).toLocaleDateString()}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="recent">
            <Card>
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3 p-3 border rounded-lg">
                    <Upload className="w-5 h-5 text-success" />
                    <div>
                      <p className="font-medium">Employee Handbook 2024 uploaded</p>
                      <p className="text-sm text-muted-foreground">by Admin User • 2 hours ago</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3 p-3 border rounded-lg">
                    <Download className="w-5 h-5 text-primary" />
                    <div>
                      <p className="font-medium">Leave Application Form downloaded 15 times</p>
                      <p className="text-sm text-muted-foreground">in the last 4 hours</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3 p-3 border rounded-lg">
                    <FileText className="w-5 h-5 text-warning" />
                    <div>
                      <p className="font-medium">Budget Proposal Q2 2024 modified</p>
                      <p className="text-sm text-muted-foreground">by Finance Director • Yesterday</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>

      {/* Modals */}
      {/* Upload Modal */}
      <Dialog open={showUploadModal} onOpenChange={setShowUploadModal}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>Upload Document</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <div className="text-center py-8 text-muted-foreground">
              <Upload className="w-16 h-16 mx-auto mb-4" />
              <p>File upload interface will be implemented here</p>
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setShowUploadModal(false)}>
              Cancel
            </Button>
            <Button className="bg-gradient-primary" onClick={() => {
              toast.success('Document uploaded successfully!');
              setShowUploadModal(false);
            }}>
              Upload
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* New Folder Modal */}
      <Dialog open={showNewFolderModal} onOpenChange={setShowNewFolderModal}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle>Create New Folder</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <div className="text-center py-8 text-muted-foreground">
              <Folder className="w-16 h-16 mx-auto mb-4" />
              <p>Folder creation form will be implemented here</p>
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setShowNewFolderModal(false)}>
              Cancel
            </Button>
            <Button className="bg-gradient-primary" onClick={() => {
              toast.success('Folder created successfully!');
              setShowNewFolderModal(false);
            }}>
              Create Folder
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Document Details Modal */}
      <Dialog open={showDocumentDetails} onOpenChange={setShowDocumentDetails}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>Document Details</DialogTitle>
          </DialogHeader>
          {selectedDocument && (
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <FileText className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground">{selectedDocument.name}</h3>
                  <p className="text-sm text-muted-foreground">{selectedDocument.type} • {selectedDocument.size}</p>
                </div>
                <Badge className={getStatusColor(selectedDocument.status)}>
                  {selectedDocument.status}
                </Badge>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Document Information</h4>
                  <div className="space-y-2 text-sm">
                    <div>
                      <span className="text-muted-foreground">Category:</span> {selectedDocument.category}
                    </div>
                    <div>
                      <span className="text-muted-foreground">Department:</span> {selectedDocument.department}
                    </div>
                    <div>
                      <span className="text-muted-foreground">Uploaded by:</span> {selectedDocument.uploadedBy}
                    </div>
                    <div>
                      <span className="text-muted-foreground">Upload date:</span> {new Date(selectedDocument.uploadDate).toLocaleDateString()}
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Statistics</h4>
                  <div className="space-y-2 text-sm">
                    <div>
                      <span className="text-muted-foreground">Downloads:</span> {selectedDocument.downloads}
                    </div>
                    <div>
                      <span className="text-muted-foreground">Last modified:</span> {new Date(selectedDocument.lastModified).toLocaleDateString()}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
          <DialogFooter>
            <Button variant="outline" onClick={() => setShowDocumentDetails(false)}>
              Close
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </Layout>
  );
};

export default DocumentManagement;