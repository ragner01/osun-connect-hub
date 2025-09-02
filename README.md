# Osun Connect Hub

A comprehensive employee management system for Osun State Civil Service, built with modern web technologies and designed for optimal user experience across all devices.

## 🚀 Features

- **📊 Dashboard**: Real-time metrics, activity feed, and quick actions
- **👥 Employee Management**: Complete employee lifecycle management with search and filtering
- **📅 Leave Management**: Streamlined leave request and approval workflow
- **📈 Performance Management**: Performance tracking, reviews, and analytics
- **📁 Document Management**: Centralized document storage with version control
- **💰 Payroll System**: Automated payroll processing and payslip generation
- **🎓 Training Programs**: Employee training and development tracking
- **📢 Announcements**: Internal communication with priority targeting
- **📋 Reports & Analytics**: Comprehensive reporting and data visualization
- **⚙️ Settings**: System configuration and user preferences

## 🛠️ Technology Stack

- **Frontend**: React 18, TypeScript, Vite
- **UI Framework**: shadcn/ui components with Tailwind CSS
- **Routing**: React Router DOM v6
- **State Management**: TanStack Query (React Query)
- **Icons**: Lucide React
- **Notifications**: Sonner toast notifications
- **Forms**: React Hook Form with Zod validation
- **Styling**: Tailwind CSS with custom design system

## 📱 Mobile Responsive

The application is fully responsive and optimized for:
- 📱 Mobile devices (320px+)
- 📱 Tablets (768px+)
- 💻 Desktop (1024px+)
- 🖥️ Large screens (1440px+)

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn package manager

### Installation

1. **Clone the repository:**
```bash
git clone <repository-url>
cd osun-connect-hub
```

2. **Install dependencies:**
```bash
npm install
```

3. **Start the development server:**
```bash
npm run dev
```

4. **Open your browser and navigate to `http://localhost:8080`**

## 📜 Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build optimized production bundle
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint for code quality checks

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── dashboard/      # Dashboard-specific components
│   ├── layout/         # Layout components (Header, Sidebar, Layout)
│   ├── modals/         # Modal components for forms
│   └── ui/            # shadcn/ui base components
├── pages/             # Page components (routes)
├── hooks/             # Custom React hooks
├── lib/               # Utility functions and helpers
├── types/             # TypeScript type definitions
└── main.tsx           # Application entry point
```

## 🎯 Key Features

### 📊 Dashboard
- Real-time metrics and KPIs
- Interactive activity feed with navigation
- Quick action buttons for common tasks
- Department overview with employee counts
- Mobile-optimized responsive layout

### 👥 Employee Management
- Comprehensive employee directory
- Advanced search and filtering
- Employee profile management
- Department assignment and tracking
- Status management (active, inactive, on leave)

### 📅 Leave Management
- Leave request submission with validation
- Multi-level approval workflow
- Leave balance tracking
- Calendar integration
- Mobile-friendly forms

### 📈 Performance Management
- Performance review cycles
- Goal setting and tracking
- 360-degree feedback system
- Performance analytics and reporting
- Progress visualization

### 📁 Document Management
- Secure file upload and organization
- Version control and history
- Access permissions and sharing
- Advanced search and categorization
- Mobile document viewing

### 💰 Payroll System
- Automated payroll processing
- Complex salary calculations
- Tax and deduction management
- Payslip generation and distribution
- Financial reporting

### 🎓 Training Programs
- Training program management
- Employee enrollment system
- Progress tracking and analytics
- Certificate generation
- Course completion monitoring

### 📢 Announcements
- Priority-based internal communication
- Department and role targeting
- Read receipt tracking
- Rich text content support
- Mobile notification system

### 📋 Reports & Analytics
- Comprehensive report generation
- Data visualization and charts
- Export functionality (PDF, Excel)
- Scheduled report delivery
- Custom report builder

## 🎨 Design System

The application uses a custom design system with:
- **Colors**: Osun State brand colors with accessibility compliance
- **Typography**: Inter font family with proper hierarchy
- **Spacing**: Consistent spacing scale using Tailwind CSS
- **Components**: Reusable component library based on shadcn/ui
- **Animations**: Smooth transitions and micro-interactions

## 📱 Mobile Features

- **Responsive Navigation**: Collapsible sidebar with hamburger menu
- **Touch-Friendly**: 44px minimum touch targets
- **Mobile Search**: Expandable search overlay
- **Swipe Gestures**: Intuitive mobile interactions
- **Optimized Forms**: Mobile-first form design
- **Fast Loading**: Optimized bundle size and lazy loading

## 🔧 Development

### Code Quality
- TypeScript for type safety
- ESLint for code linting
- Prettier for code formatting
- Husky for git hooks

### Performance
- Code splitting and lazy loading
- Optimized bundle size
- Image optimization
- Caching strategies

## 🚀 Deployment

The application is ready for deployment to:
- **Vercel**: Zero-config deployment
- **Netlify**: Static site hosting
- **GitHub Pages**: Free hosting option
- **AWS S3**: Scalable cloud hosting

### Build for Production
```bash
npm run build
```

The build output will be in the `dist/` directory, ready for deployment.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

For support and questions:
- 📧 Email: support@osunconnect.gov.ng
- 📞 Phone: +234-XXX-XXXX
- 💬 Issues: [GitHub Issues](https://github.com/your-repo/issues)

## 🙏 Acknowledgments

- Osun State Government for the vision
- Development team for implementation
- Open source community for amazing tools
- Users for valuable feedback

---

**Built with ❤️ for Osun State Civil Service**