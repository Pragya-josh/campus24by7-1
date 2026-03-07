import { NavLink, Feature, Module, PricingPlan, Testimonial } from "@/types";
import {
  UserCheck,
  CreditCard,
  Wallet,
  Bus,
  Receipt,
  IdCard,
  FileText,
  Bell,
  Calendar,
  Package,
} from "lucide-react";

// Navigation Links
// Navigation Links
export const NAV_LINKS = [
  {
    name: "Solutions",
    children: [
      { name: "School Management", href: "/school-management", description: "ERP for K-12 and Pre-schools" },
      { name: "College Management", href: "/college-management", description: "Higher education administration" },
      { name: "Institute Management", href: "/institute-management", description: "Coaching and vocational centers" },
    ]
  },
  {
    name: "Product",
    children: [
      { name: "Features", href: "/features", description: "Explore all 50+ modules" },
      { name: "Compare", href: "/compare", description: "Campus24by7 vs Legacy Systems" },
      { name: "Explore Institutions", href: "/explore", description: "Directory of educational hubs" },
    ]
  },
  { name: "Pricing", href: "/pricing" },
  {
    name: "Company",
    children: [
      { name: "About Us", href: "/about", description: "" },
      { name: "Success Stories", href: "/success-stories", description: "Real results from institutions" },
      { name: "FAQ", href: "/faq", description: "" },
      { name: "Contact", href: "/contact", description: "" },
    ]
  },
];

// Hero Section
export const HERO_HIGHLIGHTS = [
  "Trusted by 500+ institutions",
  "99.9% uptime guaranteed",
  "24/7 support available",
];

// Features
export const FEATURES: Feature[] = [
  {
    icon: UserCheck,
    title: "Attendance Automation",
    description:
      "Biometric, RFID & app-based attendance tracking for students and staff.",
  },
  {
    icon: CreditCard,
    title: "Fee Collection & Reminders",
    description: "Online/offline fee payments with automated SMS & email reminders.",
  },
  {
    icon: Wallet,
    title: "Salary & Payroll",
    description: "Automated salary calculation, deductions, and payslip generation.",
  },
  {
    icon: Bus,
    title: "Transport Management",
    description: "Route planning, GPS tracking, and transport fee management.",
  },
  {
    icon: Receipt,
    title: "Expense Management",
    description: "Track all institutional expenses with detailed reports and analytics.",
  },
  {
    icon: IdCard,
    title: "Digital ID Cards",
    description: "Generate professional ID cards for students and staff instantly.",
  },
  {
    icon: FileText,
    title: "Report Cards & Exams",
    description: "Complete exam management with automatic report card generation.",
  },
  {
    icon: Bell,
    title: "Noticeboard & Communication",
    description: "Instant notifications to parents, students, and staff via app & SMS.",
  },
  {
    icon: Calendar,
    title: "Timetable Management",
    description: "Smart scheduling for classes, teachers, and resources.",
  },
  {
    icon: Package,
    title: "Inventory Management",
    description: "Track books, equipment, and supplies with stock alerts.",
  },
];

// Modules
export const MODULES: Module[] = [
  {
    icon: Crown,
    title: "Leadership Portal",
    subtitle: "For Owners & Directors",
    features: [
      "Real-time revenue & expense tracking",
      "Multi-branch overview dashboard",
      "Performance analytics & reports",
    ],
    gradient: "from-amber-500 to-orange-500",
  },
  {
    icon: Users,
    title: "Channel Partner Admin",
    subtitle: "For Partners & Resellers",
    features: [
      "Client management dashboard",
      "Commission tracking & reports",
      "Support ticket management",
    ],
    gradient: "from-violet-500 to-purple-500",
  },
  {
    icon: GraduationCap,
    title: "Principal Dashboard",
    subtitle: "For School Heads",
    features: [
      "Staff & student management",
      "Academic performance overview",
      "Approval workflows & notices",
    ],
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: BookOpen,
    title: "Teacher Portal",
    subtitle: "For Teaching Staff",
    features: [
      "Attendance marking & reports",
      "Grade entry & assessments",
      "Class timetable & resources",
    ],
    gradient: "from-emerald-500 to-teal-500",
  },
  {
    icon: Heart,
    title: "Parent Portal",
    subtitle: "For Parents & Guardians",
    features: [
      "Child's attendance & grades",
      "Fee payment & receipts",
      "Direct teacher communication",
    ],
    gradient: "from-pink-500 to-rose-500",
  },
  {
    icon: Calculator,
    title: "Accountant Portal",
    subtitle: "For Finance Team",
    features: [
      "Fee collection & tracking",
      "Expense management",
      "Financial reports & ledgers",
    ],
    gradient: "from-indigo-500 to-blue-500",
  },
  {
    icon: UserCircle,
    title: "Student Portal",
    subtitle: "For Students",
    features: [
      "View attendance & grades",
      "Download study materials",
      "Check timetable & notices",
    ],
    gradient: "from-cyan-500 to-blue-500",
  },
];

// Pricing Plans
export const PRICING_PLANS: PricingPlan[] = [
  {
    name: "Basic",
    description: "Perfect for small schools getting started",
    price: "₹4,999",
    period: "/month",
    features: [
      "Up to 250 students",
      "Attendance management",
      "Fee collection",
      "Basic reports",
      "Email support",
    ],
    popular: false,
    cta: "Start Free Trial",
  },
  {
    name: "Pro",
    description: "For growing institutions with advanced needs",
    price: "₹9,999",
    period: "/month",
    features: [
      "Up to 850 students",
      "All Basic features",
      "Parent & student portals",
      "Salary & payroll",
      "Transport management",
      "ID Card",
      "Exam & report cards",
      "SMS notifications",
      "Advanced analytics",
      "Priority support",
    ],
    popular: true,
    cta: "Get Started",
  },
  {
    name: "Enterprise",
    description: "For large institutions & groups",
    price: "Custom",
    period: "",
    features: [
      "Unlimited students",
      "Multi-branch support",
      "Mobile app access",
      "All Pro features",
      "Custom integrations",
      "Dedicated account manager",
      "On-premise deployment option",
      "Custom branding",
      "24/7 phone support",
      "Training & onboarding",
    ],
    popular: false,
    cta: "Contact Sales",
  },
];

// Testimonials
export const TESTIMONIALS: Testimonial[] = [
  // {
  //   name: "Dr. Rajesh Kumar",
  //   role: "Principal",
  //   institution: "Delhi Public School",
  //   content:
  //     "Campus24by7 transformed how we manage our school. Fee collection that took days now happens in minutes. Our parents love the mobile app!",
  //   avatar: "RK",
  //   rating: 5,
  // },
  // {
  //   name: "Mrs. Priya Sharma",
  //   role: "Director",
  //   institution: "Sunshine Academy",
  //   content:
  //     "Managing 3 branches was a nightmare before Campus24by7. Now I can see everything from one dashboard. The support team is exceptional!",
  //   avatar: "PS",
  //   rating: 5,
  // },
  // {
  //   name: "Mr. Amit Patel",
  //   role: "Chairman",
  //   institution: "Patel Group of Schools",
  //   content:
  //     "We reduced our administrative costs by 40% after implementing Campus24by7. Best investment we've made for our institution.",
  //   avatar: "AP",
  //   rating: 5,
  // },
  // {
  //   name: "Mrs. Sunita Reddy",
  //   role: "Founder",
  //   institution: "Little Stars Preschool",
  //   content:
  //     "Even as a small preschool, Campus24by7 fits our needs perfectly. The parent communication feature has improved our engagement significantly.",
  //   avatar: "SR",
  //   rating: 5,
  // },
];

// Missing icons import - adding them
import {
  Crown,
  Users,
  GraduationCap,
  BookOpen,
  Heart,
  Calculator,
  UserCircle,
} from "lucide-react";
