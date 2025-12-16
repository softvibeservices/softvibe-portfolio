export interface PortfolioItem {
  slug: string
  title: string
  logo: string
  mainImage: string
  shortDescription: string
  projectUrl: string
  content: string
  sortOrder: string
  categories?: string[]
}

// Real SoftVibe Services project data
function getPortfolioData(): PortfolioItem[] {
  return [
    {
      slug: "hotel-management-system",
      title: "LuxeStay – Hotel Experience Platform",
      logo: "/elegant-hotel-logo.png",
      mainImage: "/hotel-management-dashboard.png",
      shortDescription: "Luxury hotel experience platform with immersive UI, animated navigation, and guest-focused interaction design.",
      projectUrl: "https://hotel-management-1hflsskiz-amars-projects-fbd95eb7.vercel.app",
      content: `
    <h3>Project Overview</h3>
    <p>
      LuxeStay is a modern hotel experience platform focused on delivering a premium digital presence
      for luxury hospitality brands. Instead of traditional multi-page routing, the application uses
      a section-based rendering model with smooth animated transitions, creating a seamless and
      immersive browsing experience for guests.
    </p>
    <p>
      The platform is designed to showcase hotel offerings such as rooms, amenities, dining,
      gallery, location, and contact information through visually rich layouts, motion-driven
      interactions, and responsive design principles.
    </p>

    <h3>Key Features</h3>
    <ul>
      <li>Single-page section-based navigation with smooth animated transitions</li>
      <li>Interactive navbar with active section tracking and responsive mobile menu</li>
      <li>Luxury-themed UI with gradients, glassmorphism, and micro-interactions</li>
      <li>Amenities section with category filtering, premium tags, and 24/7 availability indicators</li>
      <li>Gallery section with category filters and animated image previews</li>
      <li>Reservation and contact form with animated submission feedback</li>
      <li>Testimonials, hotel imagery, and location preview for trust and engagement</li>
      <li>Fully responsive design optimized for desktop, tablet, and mobile devices</li>
    </ul>

    <h3>Technologies Used</h3>
    <p>
      The project is built using Next.js (App Router) and React 19 with TypeScript for type safety
      and scalability. Tailwind CSS powers the responsive and theme-rich UI, while Framer Motion
      is used extensively to deliver smooth transitions, hover effects, and entrance animations.
      Lucide React icons enhance visual clarity and consistency across the interface.
    </p>

    <h3>UI/UX & Design Focus</h3>
    <p>
      LuxeStay emphasizes user experience through motion-driven storytelling and visual hierarchy.
      Each section is designed to guide the user naturally, reduce cognitive load, and highlight
      premium offerings. Micro-animations, hover states, and staggered transitions add polish
      without compromising performance.
    </p>

    <h3>Business Impact</h3>
    <p>
      This platform helps hotels elevate their brand presence, improve guest engagement, and
      present services in a clear and compelling way. The intuitive navigation and visually
      appealing layout reduce bounce rates, increase inquiry conversions, and provide guests
      with a premium digital experience aligned with luxury hospitality standards.
    </p>
  `,
      sortOrder: "2024-01-20",
      categories: ["all", "web", "hospitality", "uiux"],
    },
    {
      slug: "restaurant-website",
      title: "Foodie - Restaurant Website",
      logo: "/restaurant-logo.png",
      mainImage: "/modern-restaurant-website.png",
      shortDescription: "Animated restaurant website with dynamic menu, category filtering, and immersive UI/UX design.",
      projectUrl: "https://restaurant-website-fjrqhuclw-amars-projects-fbd95eb7.vercel.app",
      content: `
    <h3>Project Overview</h3>
    <p>
      This project is a modern, visually rich restaurant website designed to deliver an engaging digital experience for food businesses.
      It focuses on strong UI/UX principles, smooth animations, and interactive components to showcase restaurant offerings in an appealing and intuitive way.
      The website serves as a complete digital presence, allowing users to explore the menu, learn about the brand, and easily get in touch.
    </p>

    <h3>User Experience & Interface Design</h3>
    <p>
      The interface is built around a clean layout, bold typography, and gradient-based visuals that reflect a premium food brand.
      Smooth animations powered by Framer Motion enhance user engagement without affecting performance.
      The site is fully responsive, ensuring a seamless experience across desktop, tablet, and mobile devices.
    </p>

    <h3>Key Features</h3>
    <ul>
      <li>Animated hero section with rotating highlights and call-to-action buttons</li>
      <li>Sticky navigation header with scroll-based styling and mobile menu</li>
      <li>Dynamic menu system powered by live API data</li>
      <li>Category-based menu filtering (Indian, Italian, Chinese, Desserts, etc.)</li>
      <li>Interactive menu cards with pricing, ratings, and hover effects</li>
      <li>Quick View modal for detailed dish previews without page reload</li>
      <li>About section featuring brand story, statistics, values, and team profiles</li>
      <li>Contact form with validation and animated success feedback</li>
      <li>Call-to-action sections for ordering, menu access, and contact</li>
      <li>Performance-optimized images with graceful error handling</li>
    </ul>

    <h3>Technologies Used</h3>
    <p>
      The website is built using React with Vite for fast development and optimized performance.
      Tailwind CSS is used to create a responsive and consistent design system, while Framer Motion powers smooth animations and micro-interactions.
      Menu data is dynamically fetched from a public food API, demonstrating real-world data integration and asynchronous state handling.
    </p>

    <h3>Business & Portfolio Impact</h3>
    <p>
      This project demonstrates how a restaurant can establish a strong digital presence using modern frontend technologies and high-quality UI/UX design.
      The interactive menu and smooth browsing experience encourage users to explore more dishes, increasing engagement time.
      As a portfolio project, it highlights skills in component-driven development, animation design, API integration, and responsive layouts suitable for real-world food and hospitality businesses.
    </p>
  `,
      sortOrder: "2024-01-15",
      categories: ["all", "web", "food"],
    },
    {
      slug: "ice-cream-inventory",
      title: "Ice Cream Inventory System",
      logo: "/ice-cream-logo.png",
      mainImage: "/inventory-management-dashboard.png",
      shortDescription: "Enterprise inventory and order management system for ice cream wholesalers and retailers with stock tracking, billing, and delivery workflows.",
      projectUrl: "https://icecream-inventory-8iyzqwpj1-amars-projects-fbd95eb7.vercel.app/",
      content: `
    <h3>Project Overview</h3>
    <p>
      The <strong>Ice Cream Inventory Management System</strong> is a full-scale enterprise web application
      built for ice cream wholesalers, distributors, and retail businesses. The platform centralizes
      product inventory, customer orders, delivery operations, billing, and sales insights into a
      single, easy-to-manage dashboard.
    </p>
    <p>
      Designed to handle daily operational complexity, the system ensures accurate stock tracking,
      minimizes manual errors, and provides real-time visibility across inventory, sales, and delivery workflows.
    </p>

    <h3>Key Features</h3>
    <ul>
      <li>Real-time inventory and stock level monitoring</li>
      <li>Product and flavor management with pricing and quantity control</li>
      <li>Customer management with sales ledger and credit/debit tracking</li>
      <li>Order creation, tracking, and settlement management</li>
      <li>Delivery partner onboarding, approval, and OTP-based login</li>
      <li>Order assignment and delivery status updates (Pending, On the Way, Delivered)</li>
      <li>Automated invoice generation with downloadable PDF bills</li>
      <li>Seller profile and bank detail management for billing accuracy</li>
      <li>Restock history tracking and stock movement logs</li>
      <li>Email notifications for OTP verification and delivery workflows</li>
      <li>Secure authentication with OTP-based registration and password recovery</li>
      <li>Responsive dashboard optimized for desktop and mobile devices</li>
    </ul>

    <h3>Technologies Used</h3>
    <p>
      The application is built using <strong>Next.js (App Router)</strong>, <strong>React</strong>, and
      <strong>TypeScript</strong> to ensure scalability, maintainability, and performance.
      The backend leverages <strong>Next.js API Routes</strong> with <strong>MongoDB</strong> and
      <strong>Mongoose</strong> for structured data handling.
    </p>
    <p>
      Additional integrations include <strong>Cloudinary</strong> for image and asset management,
      <strong>Nodemailer</strong> for email-based OTP verification, and
      <strong>jsPDF</strong> for dynamic invoice generation.
      The entire system is deployed on <strong>Vercel</strong> for fast and reliable delivery.
    </p>

    <h3>Business Impact</h3>
    <p>
      This system significantly improves operational efficiency by eliminating manual stock tracking
      and fragmented billing processes. Businesses gain better control over inventory turnover,
      reduce stock mismatches, and streamline order fulfillment.
    </p>
    <p>
      With real-time visibility into sales and delivery status, shop owners can make data-driven
      decisions, improve customer satisfaction, and scale their distribution operations with confidence.
    </p>
  `,
      sortOrder: "2024-01-10",
      categories: ["all", "web", "retail"],
    },
  ]
}

export async function fetchPortfolioData(): Promise<PortfolioItem[]> {
  return getPortfolioData()
}
