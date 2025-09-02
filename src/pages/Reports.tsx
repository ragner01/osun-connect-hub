import React, { useState } from 'react';
import { FileText, Download, Calendar, TrendingUp, Users, DollarSign, Filter, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { toast } from 'sonner';
import Layout from '@/components/layout/Layout';
import { Report } from '@/types';

const Reports = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const reports: Report[] = [
    {
      id: 1,
      title: 'Monthly Payroll Report',
      description: 'Complete payroll summary for current month',
      category: 'payroll',
      date: '2024-01-15',
      status: 'completed',
      size: '2.4 MB',
      downloads: 45
    },
    {
      id: 2,
      title: 'Employee Performance Review',
      description: 'Q4 performance evaluation summary',
      category: 'performance',
      date: '2024-01-10',
      status: 'completed',
      size: '1.8 MB',
      downloads: 32
    },
    {
      id: 3,
      title: 'Leave Management Report',
      description: 'Annual leave utilization and trends',
      category: 'leave',
      date: '2024-01-08',
      status: 'completed',
      size: '3.2 MB',
      downloads: 28
    },
    {
      id: 4,
      title: 'Training Program Analytics',
      description: 'Training completion rates and effectiveness',
      category: 'training',
      date: '2024-01-05',
      status: 'completed',
      size: '2.1 MB',
      downloads: 19
    },
    {
      id: 5,
      title: 'Department Budget Analysis',
      description: 'Budget allocation and spending patterns',
      category: 'finance',
      date: '2024-01-03',
      status: 'completed',
      size: '4.1 MB',
      downloads: 67
    },
    {
      id: 6,
      title: 'Annual Employee Survey',
      description: 'Employee satisfaction and feedback analysis',
      category: 'hr',
      date: '2023-12-28',
      status: 'completed',
      size: '5.2 MB',
      downloads: 89
    }
  ];

  const handleDownload = (report: Report) => {
    toast.success(`Downloading ${report.title}...`);
  };

  const handleGenerateReport = () => {
    toast.info('Report generation feature coming soon!');
  };

  const handleFilter = () => {
    toast.info('Advanced filtering options coming soon!');
  };

  const filteredReports = reports.filter(report => {
    const matchesSearch = report.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         report.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || report.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'bg-success';
      case 'processing': return 'bg-warning';
      case 'failed': return 'bg-error';
      default: return 'bg-muted';
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'payroll': return DollarSign;
      case 'performance': return TrendingUp;
      case 'leave': return Calendar;
      case 'training': return Users;
      case 'finance': return DollarSign;
      case 'hr': return Users;
      default: return FileText;
    }
  };

  return (
    <Layout>
      <div className="space-y-6 fade-in">
        {/* Page Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold text-foreground">Reports</h1>
            <p className="text-muted-foreground mt-1">
              Generate and manage system reports and analytics
            </p>
          </div>
          <Button className="bg-gradient-primary hover:opacity-90 w-full sm:w-auto" onClick={handleGenerateReport}>
            <FileText className="w-4 h-4 mr-2" />
            Generate New Report
          </Button>
        </div>

        {/* Report Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Total Reports</p>
                  <p className="text-2xl font-bold text-foreground">{reports.length}</p>
                </div>
                <FileText className="w-8 h-8 text-primary" />
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">This Month</p>
                  <p className="text-2xl font-bold text-foreground">4</p>
                </div>
                <Calendar className="w-8 h-8 text-success" />
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Total Downloads</p>
                  <p className="text-2xl font-bold text-foreground">280</p>
                </div>
                <Download className="w-8 h-8 text-warning" />
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Storage Used</p>
                  <p className="text-2xl font-bold text-foreground">18.8 MB</p>
                </div>
                <TrendingUp className="w-8 h-8 text-error" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Search and Filter */}
        <Card>
          <CardContent className="p-4">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <Input 
                  placeholder="Search reports..." 
                  className="pl-10"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <div className="flex gap-2">
                <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Categories</SelectItem>
                    <SelectItem value="payroll">Payroll</SelectItem>
                    <SelectItem value="performance">Performance</SelectItem>
                    <SelectItem value="leave">Leave Management</SelectItem>
                    <SelectItem value="training">Training</SelectItem>
                    <SelectItem value="finance">Finance</SelectItem>
                    <SelectItem value="hr">Human Resources</SelectItem>
                  </SelectContent>
                </Select>
                <Button variant="outline" onClick={handleFilter}>
                  <Filter className="w-4 h-4 mr-2" />
                  More Filters
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Reports List */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {filteredReports.map((report) => {
            const CategoryIcon = getCategoryIcon(report.category);
            return (
              <Card key={report.id} className="hover:shadow-md transition-shadow">
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                        <CategoryIcon className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <CardTitle className="text-lg">{report.title}</CardTitle>
                        <CardDescription className="text-sm">
                          {report.description}
                        </CardDescription>
                      </div>
                    </div>
                    <Badge className={`${getStatusColor(report.status)} text-white`}>
                      {report.status}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                    <span>Generated: {new Date(report.date).toLocaleDateString()}</span>
                    <span>{report.size}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-muted-foreground">
                      {report.downloads} downloads
                    </div>
                    <Button 
                      size="sm" 
                      variant="outline"
                      onClick={() => handleDownload(report)}
                    >
                      <Download className="w-4 h-4 mr-2" />
                      Download
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {filteredReports.length === 0 && (
          <Card>
            <CardContent className="p-8 text-center">
              <FileText className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-foreground mb-2">No reports found</h3>
              <p className="text-muted-foreground">
                Try adjusting your search criteria or generate a new report.
              </p>
            </CardContent>
          </Card>
        )}
      </div>
    </Layout>
  );
};

export default Reports;
