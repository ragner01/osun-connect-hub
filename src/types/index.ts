// Common types used across the application

export interface Employee {
  id: string;
  name: string;
  position: string;
  department: string;
  email: string;
  phone: string;
  status: 'active' | 'inactive' | 'on_leave';
  joinDate: string;
  salary?: number;
  manager?: string;
}

export interface LeaveRequest {
  id: string;
  employeeId: string;
  employeeName: string;
  type: 'annual' | 'sick' | 'maternity' | 'paternity' | 'emergency';
  startDate: string;
  endDate: string;
  days: number;
  status: 'pending' | 'approved' | 'rejected';
  reason: string;
  appliedDate: string;
  approvedBy?: string;
  comments?: string;
}

export interface PerformanceReview {
  id: string;
  employeeId: string;
  employeeName: string;
  period: string;
  rating: number;
  goals: string[];
  achievements: string[];
  areasForImprovement: string[];
  managerComments: string;
  employeeComments?: string;
  status: 'draft' | 'submitted' | 'approved';
  reviewDate: string;
}

export interface Document {
  id: string;
  name: string;
  type: string;
  size: string;
  category: 'policy' | 'procedure' | 'form' | 'report' | 'other';
  department: string;
  uploadDate: string;
  uploadedBy: string;
  description?: string;
  tags?: string[];
}

export interface TrainingProgram {
  id: string;
  title: string;
  description: string;
  category: string;
  duration: string;
  startDate: string;
  endDate: string;
  maxParticipants: number;
  currentParticipants: number;
  status: 'upcoming' | 'ongoing' | 'completed' | 'cancelled';
  instructor: string;
  location: string;
  cost?: number;
}

export interface Announcement {
  id: string;
  title: string;
  content: string;
  category: 'general' | 'urgent' | 'policy' | 'event' | 'maintenance';
  priority: 'low' | 'medium' | 'high' | 'urgent';
  targetAudience: 'all' | 'department' | 'role';
  targetDepartment?: string;
  targetRole?: string;
  publishDate: string;
  expiryDate?: string;
  author: string;
  status: 'draft' | 'published' | 'archived';
  attachments?: string[];
}

export interface PayrollRecord {
  id: string;
  employeeId: string;
  employeeName: string;
  department: string;
  basicSalary: number;
  allowances: number;
  deductions: number;
  netSalary: number;
  period: string;
  status: 'pending' | 'processed' | 'paid';
  payDate: string;
  bankAccount?: string;
}

export interface Report {
  id: number;
  title: string;
  description: string;
  category: 'payroll' | 'performance' | 'leave' | 'training' | 'finance' | 'hr';
  date: string;
  status: 'completed' | 'processing' | 'failed';
  size: string;
  downloads: number;
}

export interface Activity {
  id: number;
  type: string;
  message: string;
  time: string;
  icon: any; // LucideIcon type
  iconColor: string;
  action?: string;
  route?: string;
}
