/**
 * Application configuration
 * Centralized configuration for the Campus24by7 application
 */

export const APP_CONFIG = {
  // Application metadata
  name: "Campus24by7",
  tagline: "Smart Hub",
  description:
    "A modern, responsive web application designed to provide comprehensive campus management and student engagement solutions.",

  // URLs and external links
  links: {
    //github: "https://github.com/Pragya-josh/campus24by7-smart-hub",
    website: "https://campus24by7.com",
    demo: "https://demo.campus24by7.com",
    contactEmail: "support@campus24by7.com",
    bookSlot: "https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ3qSQAbRlvoZg4dFW1lKzjm8JVX6pb3IRKa0135HJN3rtf_DCbZG0lu_3x9sAyrrO2BN-pjdL_6",
    login: "https://crm.campus24by7.com/",
    contactWhatsApp: "https://wa.me/919557172321",
  },

  // Theme configuration
  theme: {
    primaryColor: "#3b82f6", // Blue
    accentColor: "#06b6d4", // Cyan
    isDarkMode: false, // Default theme
  },

  // Feature flags
  features: {
    enableAnalytics: true,
    enableThemeToggle: true,
    enableNotifications: true,
    betaFeatures: false,
  },

  // API configuration
  api: {
    baseUrl: process.env.NEXT_PUBLIC_API_URL || "https://api.campus24by7.com",
    timeout: 30000,
    retryAttempts: 3,
  },

  // Pagination and data limits
  pagination: {
    defaultPageSize: 10,
    maxPageSize: 100,
  },

  // Version info
  version: "1.0.0",
} as const;

export default APP_CONFIG;
