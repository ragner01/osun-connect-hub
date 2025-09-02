
import React, { useState } from 'react';
import Layout from '@/components/layout/Layout';
import { Search, Filter, Plus, MoreHorizontal, Mail, Phone, Download, Eye, Edit, Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from 'sonner';
import AddEmployeeModal from '@/components/modals/AddEmployeeModal';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog';

const employees = [
  {
    id: 'EMP001',
    name: 'Adebayo Olusegun',
    position: 'Senior Health Officer',
    department: 'Ministry of Health',
    email: 'a.olusegun@osunstate.gov.ng',
    phone: '+234 803 123 4567',
    status: 'Active',
    joinDate: '2019-03-15'
  },
  {
    id: 'EMP002',
    name: 'Fatima Ibrahim',
    position: 'Education Coordinator',
    department: 'Ministry of Education',
    email: 'f.ibrahim@osunstate.gov.ng',
    phone: '+234 806 234 5678',
    status: 'Active',
    joinDate: '2020-07-22'
  },
  {
    id: 'EMP003',
    name: 'Oluwaseun Adeyemi',
    position: 'Works Engineer',
    department: 'Ministry of Works',
    email: 'o.adeyemi@osunstate.gov.ng',
    phone: '+234 805 345 6789',
    status: 'On Leave',
    joinDate: '2018-11-08'
  }
];

const Employees = () => {
  const [showAddEmployeeModal, setShowAddEmployeeModal] = useState(false);
  const [showEmployeeDetails, setShowEmployeeDetails] = useState(false);
  const [selectedEmployee, setSelectedEmployee] = useState<any>(null);
  const [searchTerm, setSearchTerm] = useState('');

  const handleAddEmployee = () => {
    setShowAddEmployeeModal(true);
  };

  const handleViewEmployee = (employee: any) => {
    setSelectedEmployee(employee);
    setShowEmployeeDetails(true);
  };

  const handleEditEmployee = (employee: any) => {
    toast.info(`Edit functionality for ${employee.name} coming soon!`);
  };

  const handleDeleteEmployee = (employee: any) => {
    toast.warning(`Delete functionality for ${employee.name} coming soon!`);
  };

  const handleExport = () => {
    toast.success('Employee data exported successfully!');
  };

  const handleFilter = () => {
    toast.info('Advanced filtering options coming soon!');
  };

  const filteredEmployees = employees.filter(employee =>
    employee.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    employee.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
    employee.department.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Layout>
      <div className="space-y-6 fade-in">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center space-y-4 sm:space-y-0">
          <div>
            <h1 className="text-xl sm:text-2xl font-bold text-foreground">Employee Management</h1>
            <p className="text-muted-foreground">Manage civil servants and their records</p>
          </div>
          <Button className="bg-gradient-primary hover:opacity-90 w-full sm:w-auto" onClick={handleAddEmployee}>
            <Plus className="w-4 h-4 mr-2" />
            Add Employee
          </Button>
        </div>

        {/* Search and Filters */}
        <div className="dashboard-card">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input 
                placeholder="Search by name, ID, or department..." 
                className="pl-10"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="flex flex-col sm:flex-row gap-2">
              <Button variant="outline" onClick={handleFilter} className="w-full sm:w-auto">
                <Filter className="w-4 h-4 mr-2" />
                Filter
              </Button>
              <Button variant="outline" onClick={handleExport} className="w-full sm:w-auto">
                <Download className="w-4 h-4 mr-2" />
                Export
              </Button>
            </div>
          </div>
        </div>

        {/* Employee List */}
        <div className="dashboard-card">
          <div className="space-y-4">
            {filteredEmployees.map((employee) => (
              <div key={employee.id} className="flex items-center justify-between p-4 border border-border rounded-lg hover-glow">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center text-white font-semibold">
                    {employee.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">{employee.name}</h3>
                    <p className="text-sm text-muted-foreground">{employee.position}</p>
                    <p className="text-xs text-muted-foreground">{employee.department}</p>
                  </div>
                </div>

                <div className="flex items-center space-x-6">
                  <div className="hidden md:block">
                    <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                      <Mail className="w-4 h-4" />
                      <span>{employee.email}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-muted-foreground mt-1">
                      <Phone className="w-4 h-4" />
                      <span>{employee.phone}</span>
                    </div>
                  </div>

                  <div>
                    <span className={`status-${employee.status.toLowerCase().replace(' ', '-')}`}>
                      {employee.status}
                    </span>
                  </div>

                  <div className="flex items-center space-x-2">
                    <Button variant="ghost" size="sm" onClick={() => handleViewEmployee(employee)}>
                      <Eye className="w-4 h-4" />
                    </Button>
                    <Button variant="ghost" size="sm" onClick={() => handleEditEmployee(employee)}>
                      <Edit className="w-4 h-4" />
                    </Button>
                    <Button variant="ghost" size="sm" onClick={() => handleDeleteEmployee(employee)}>
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="dashboard-card text-center">
            <h3 className="text-2xl font-bold text-foreground">12,847</h3>
            <p className="text-muted-foreground">Total Employees</p>
          </div>
          <div className="dashboard-card text-center">
            <h3 className="text-2xl font-bold text-success">11,963</h3>
            <p className="text-muted-foreground">Active Staff</p>
          </div>
          <div className="dashboard-card text-center">
            <h3 className="text-2xl font-bold text-warning">884</h3>
            <p className="text-muted-foreground">On Leave/Inactive</p>
          </div>
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

      {/* Employee Details Modal */}
      <Dialog open={showEmployeeDetails} onOpenChange={setShowEmployeeDetails}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>Employee Details</DialogTitle>
          </DialogHeader>
          {selectedEmployee && (
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center text-white font-semibold text-xl">
                  {selectedEmployee.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground">{selectedEmployee.name}</h3>
                  <p className="text-muted-foreground">{selectedEmployee.position}</p>
                  <p className="text-sm text-muted-foreground">{selectedEmployee.department}</p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Contact Information</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center space-x-2">
                      <Mail className="w-4 h-4 text-muted-foreground" />
                      <span>{selectedEmployee.email}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Phone className="w-4 h-4 text-muted-foreground" />
                      <span>{selectedEmployee.phone}</span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Employment Details</h4>
                  <div className="space-y-2 text-sm">
                    <div>
                      <span className="text-muted-foreground">Employee ID:</span> {selectedEmployee.id}
                    </div>
                    <div>
                      <span className="text-muted-foreground">Join Date:</span> {selectedEmployee.joinDate}
                    </div>
                    <div>
                      <span className="text-muted-foreground">Status:</span> 
                      <span className={`ml-2 status-${selectedEmployee.status.toLowerCase().replace(' ', '-')}`}>
                        {selectedEmployee.status}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
          <DialogFooter>
            <Button variant="outline" onClick={() => setShowEmployeeDetails(false)}>
              Close
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </Layout>
  );
};

export default Employees;
