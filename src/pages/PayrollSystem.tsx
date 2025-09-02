import React, { useState } from 'react';
import Layout from '@/components/layout/Layout';
import { CreditCard, DollarSign, TrendingUp, Calendar, Download, Eye, User, Calculator, Play, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { toast } from 'sonner';

const payrollData = [
  {
    id: 'PAY001',
    employeeId: 'EMP001',
    employeeName: 'Adebayo Olusegun',
    department: 'Ministry of Health',
    grade: 'Grade Level 14',
    basicSalary: 280000,
    allowances: {
      housing: 84000,
      transport: 42000,
      medical: 28000,
      responsibility: 56000
    },
    deductions: {
      tax: 45600,
      pension: 22400,
      nhf: 2800,
      insurance: 8400
    },
    grossPay: 490000,
    netPay: 410800,
    payPeriod: '2024-01',
    status: 'processed'
  },
  {
    id: 'PAY002',
    employeeId: 'EMP002',
    employeeName: 'Fatima Ibrahim',
    department: 'Ministry of Education',
    grade: 'Grade Level 12',
    basicSalary: 220000,
    allowances: {
      housing: 66000,
      transport: 33000,
      medical: 22000,
      responsibility: 44000
    },
    deductions: {
      tax: 35200,
      pension: 17600,
      nhf: 2200,
      insurance: 6600
    },
    grossPay: 385000,
    netPay: 323400,
    payPeriod: '2024-01',
    status: 'processed'
  }
];

const payrollSummary = {
  totalEmployees: 12847,
  totalGrossPay: 5640000000, // 5.64 billion naira
  totalDeductions: 1128000000, // 1.128 billion naira
  totalNetPay: 4512000000, // 4.512 billion naira
  pendingPayments: 234,
  processedPayments: 12613
};

const PayrollSystem = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const handleProcessPayroll = () => {
    toast.success('Payroll processing started! This may take a few minutes.');
  };

  const handleGenerateReport = () => {
    toast.success('Payroll report generated successfully!');
  };

  const handleExportData = () => {
    toast.success('Payroll data exported successfully!');
  };

  const handleViewPayroll = (payrollId: string) => {
    toast.info(`Viewing payroll details for ${payrollId}`);
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-NG', {
      style: 'currency',
      currency: 'NGN',
      minimumFractionDigits: 0
    }).format(amount);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'processed': return 'bg-success text-success-foreground';
      case 'pending': return 'bg-warning text-warning-foreground';
      case 'failed': return 'bg-error text-error-foreground';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  return (
    <Layout>
      <div className="space-y-6 fade-in">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center space-y-4 sm:space-y-0">
          <div>
            <h1 className="text-xl sm:text-2xl font-bold text-foreground">Payroll System</h1>
            <p className="text-muted-foreground">Manage salaries, allowances, and deductions</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-2">
            <Button variant="outline" onClick={handleExportData} className="w-full sm:w-auto">
              <Download className="w-4 h-4 mr-2" />
              Export Payroll
            </Button>
            <Button className="bg-gradient-primary hover:opacity-90 w-full sm:w-auto" onClick={handleProcessPayroll}>
              <Play className="w-4 h-4 mr-2" />
              Process Payroll
            </Button>
          </div>
        </div>

        {/* Payroll Summary */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Total Gross Pay</p>
                  <p className="text-lg font-bold text-foreground">₦5.64B</p>
                  <p className="text-xs text-muted-foreground">Current month</p>
                </div>
                <DollarSign className="w-8 h-8 text-success" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Total Deductions</p>
                  <p className="text-lg font-bold text-foreground">₦1.13B</p>
                  <p className="text-xs text-muted-foreground">Tax, pension, etc.</p>
                </div>
                <TrendingUp className="w-8 h-8 text-warning" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Net Pay</p>
                  <p className="text-lg font-bold text-foreground">₦4.51B</p>
                  <p className="text-xs text-muted-foreground">Take home pay</p>
                </div>
                <CreditCard className="w-8 h-8 text-primary" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Processed</p>
                  <p className="text-lg font-bold text-foreground">{payrollSummary.processedPayments}</p>
                  <p className="text-xs text-muted-foreground">of {payrollSummary.totalEmployees} employees</p>
                </div>
                <User className="w-8 h-8 text-success" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="overview">Payroll Overview</TabsTrigger>
            <TabsTrigger value="employees">Employee Payroll</TabsTrigger>
            <TabsTrigger value="reports">Reports</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-4">
            {/* Recent Payroll Runs */}
            <Card>
              <CardHeader>
                <CardTitle>Recent Payroll Runs</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 border rounded-lg">
                    <div>
                      <p className="font-medium">January 2024 Payroll</p>
                      <p className="text-sm text-muted-foreground">Processed on Jan 25, 2024</p>
                    </div>
                    <div className="text-right">
                      <p className="font-medium">₦4.51B</p>
                      <Badge className="bg-success text-success-foreground">Completed</Badge>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between p-4 border rounded-lg">
                    <div>
                      <p className="font-medium">December 2023 Payroll</p>
                      <p className="text-sm text-muted-foreground">Processed on Dec 25, 2023</p>
                    </div>
                    <div className="text-right">
                      <p className="font-medium">₦4.48B</p>
                      <Badge className="bg-success text-success-foreground">Completed</Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Department Breakdown */}
            <Card>
              <CardHeader>
                <CardTitle>Department Payroll Breakdown</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Ministry of Health</span>
                      <span className="text-sm font-medium">₦1.2B (27%)</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div className="bg-primary h-2 rounded-full" style={{ width: '27%' }}></div>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Ministry of Education</span>
                      <span className="text-sm font-medium">₦1.8B (40%)</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div className="bg-primary h-2 rounded-full" style={{ width: '40%' }}></div>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Ministry of Works</span>
                      <span className="text-sm font-medium">₦0.8B (18%)</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div className="bg-primary h-2 rounded-full" style={{ width: '18%' }}></div>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Other Ministries</span>
                      <span className="text-sm font-medium">₦0.7B (15%)</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div className="bg-primary h-2 rounded-full" style={{ width: '15%' }}></div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="employees" className="space-y-4">
            {/* Search Bar */}
            <Card>
              <CardContent className="p-4">
                <Input placeholder="Search employee by name or ID..." />
              </CardContent>
            </Card>

            {/* Employee Payroll Details */}
            <div className="space-y-4">
              {payrollData.map((employee) => (
                <Card key={employee.id} className="hover-glow">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center text-white font-semibold">
                          {employee.employeeName.split(' ').map(n => n[0]).join('')}
                        </div>
                        <div>
                          <h3 className="font-semibold text-foreground">{employee.employeeName}</h3>
                          <p className="text-sm text-muted-foreground">{employee.department}</p>
                          <p className="text-xs text-muted-foreground">{employee.grade}</p>
                        </div>
                      </div>
                      
                      <Badge className={getStatusColor(employee.status)}>
                        {employee.status}
                      </Badge>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      {/* Earnings */}
                      <div>
                        <h4 className="font-medium mb-3 text-success">Earnings</h4>
                        <div className="space-y-2 text-sm">
                          <div className="flex justify-between">
                            <span>Basic Salary</span>
                            <span className="font-medium">{formatCurrency(employee.basicSalary)}</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Housing Allowance</span>
                            <span className="font-medium">{formatCurrency(employee.allowances.housing)}</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Transport Allowance</span>
                            <span className="font-medium">{formatCurrency(employee.allowances.transport)}</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Medical Allowance</span>
                            <span className="font-medium">{formatCurrency(employee.allowances.medical)}</span>
                          </div>
                          <div className="flex justify-between border-t pt-2">
                            <span className="font-medium">Gross Pay</span>
                            <span className="font-bold">{formatCurrency(employee.grossPay)}</span>
                          </div>
                        </div>
                      </div>

                      {/* Deductions */}
                      <div>
                        <h4 className="font-medium mb-3 text-error">Deductions</h4>
                        <div className="space-y-2 text-sm">
                          <div className="flex justify-between">
                            <span>Income Tax</span>
                            <span className="font-medium">{formatCurrency(employee.deductions.tax)}</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Pension (8%)</span>
                            <span className="font-medium">{formatCurrency(employee.deductions.pension)}</span>
                          </div>
                          <div className="flex justify-between">
                            <span>NHF (2.5%)</span>
                            <span className="font-medium">{formatCurrency(employee.deductions.nhf)}</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Group Insurance</span>
                            <span className="font-medium">{formatCurrency(employee.deductions.insurance)}</span>
                          </div>
                          <div className="flex justify-between border-t pt-2">
                            <span className="font-medium">Total Deductions</span>
                            <span className="font-bold">{formatCurrency(Object.values(employee.deductions).reduce((a, b) => a + b, 0))}</span>
                          </div>
                        </div>
                      </div>

                      {/* Net Pay */}
                      <div>
                        <h4 className="font-medium mb-3">Net Pay</h4>
                        <div className="text-center p-4 bg-success/10 rounded-lg">
                          <p className="text-2xl font-bold text-success">{formatCurrency(employee.netPay)}</p>
                          <p className="text-sm text-muted-foreground">Take Home Pay</p>
                        </div>
                        <div className="mt-4 space-y-2">
                          <Button size="sm" variant="outline" className="w-full" onClick={() => handleViewPayroll(payroll.id)}>
                            <Eye className="w-4 h-4 mr-2" />
                            View Payslip
                          </Button>
                          <Button size="sm" variant="outline" className="w-full" onClick={handleExportData}>
                            <Download className="w-4 h-4 mr-2" />
                            Download PDF
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="reports">
            <Card>
              <CardHeader>
                <CardTitle>Payroll Reports</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Button variant="outline" className="h-20 flex-col" onClick={handleGenerateReport}>
                    <Calendar className="w-6 h-6 mb-2" />
                    Monthly Payroll Report
                  </Button>
                  <Button variant="outline" className="h-20 flex-col" onClick={handleGenerateReport}>
                    <TrendingUp className="w-6 h-6 mb-2" />
                    Annual Tax Report
                  </Button>
                  <Button variant="outline" className="h-20 flex-col" onClick={handleGenerateReport}>
                    <DollarSign className="w-6 h-6 mb-2" />
                    Pension Remittance
                  </Button>
                  <Button variant="outline" className="h-20 flex-col" onClick={handleGenerateReport}>
                    <User className="w-6 h-6 mb-2" />
                    Employee Summary
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="settings">
            <Card>
              <CardHeader>
                <CardTitle>Payroll Settings</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-medium mb-2">Tax Configuration</h4>
                    <p className="text-sm text-muted-foreground">Configure tax brackets and rates</p>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Allowances & Benefits</h4>
                    <p className="text-sm text-muted-foreground">Manage standard allowances by grade level</p>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Deduction Rules</h4>
                    <p className="text-sm text-muted-foreground">Set up automatic deductions and formulas</p>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Payment Schedule</h4>
                    <p className="text-sm text-muted-foreground">Configure payroll processing dates</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
};

export default PayrollSystem;