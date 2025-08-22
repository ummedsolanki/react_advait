//Header.jsx (Header Menu Data)
export const headerData = {
  home: "Home",
  about: "About",
  industries: "Industries",
  services: "Services",
  contact: "Contact",
  careers: "Join Us",
  insights: "Insights",
  contactUs: "Contact Us",
};

//Header.jsx (Sub Menu Modal Data)
export const modalContent = {
  industries: [
    { title: "Healthcare", link: "/industries/healthcare" },
    { title: "Finance", link: "/industries/finance" },
    { title: "Education", link: "/industries/education" },
    { title: "Retail", link: "/industries/retail" },
  ],
  services: [
    { title: "Cloud Solution", link: "/services/cloud-solution" },
    {
      title: "Consulting & Engineering Services",
      link: "/services/consulting",
    },
    { title: "Modernization", link: "/services/modernization" },
    { title: "Solutions", link: "/services/solutions" },
    { title: "Infra", link: "/services/infra" },
  ],
};

//Why.jsx (Why Card Data)
import why1 from "../assets/Innovation.svg";
import why2 from "../assets/Industries.svg";
import why3 from "../assets/Scalability.svg";
import why4 from "../assets/Cost.svg";

import InnovationBlack from "../assets/Innovationblack.svg";
import IndustriesBlack from "../assets/Industriesblack.svg";
import ScalabilityBlack from "../assets/Scalabilityblack.svg";
import CostBlack from "../assets/Costblack.svg";
export const whyText = {
  whyAdvait: "Why Advait",
  whyAdvaitSub: "Make the Smartest Move",
  whyAdvaitSub2: "for Your Future Goal!",
};

export const whyCardData = [
  {
    title: "Innovative Solution",
    desc: "We deliver cutting-edge IT solutions tailored to your business needs.",
    img: why1,
    hoverImg: InnovationBlack,
  },
  {
    title: "Industry Expertise",
    desc: "Benefit from our deep understanding of diverse industry sectors.",
    img: why2,
    hoverImg: IndustriesBlack,
  },
  {
    title: "Scalability",
    desc: "Our services grow with your business, ensuring long-term value.",
    img: why3,
    hoverImg: ScalabilityBlack,
  },
  {
    title: "Cost Efficiency",
    desc: "We help reduce operational costs while improving overall efficiency.",
    img: why4,
    hoverImg: CostBlack,
  },
];

//Company Experience Data
export const companyExpData = [
  { number: "10+", text: "Years Experience" },
  { number: "100+", text: "Projects Completed" },
  { number: "50+", text: "Happy Clients" },
  { number: "24/7", text: "Support" },
];

//Solutions Data
import service1 from "../assets/card1.jpg";
import service2 from "../assets/card6.jpg";
import service3 from "../assets/card3.jpg";
import service4 from "../assets/card4.jpg";
import service5 from "../assets/card5.jpg";

export const solutionsText = {
  solutionsTitle: "Our Solution",
  solutionsSubTitle: "Tailored Solution",
  solutionsSubTitle2: "to Grow",
  solutionsSubTitle3: "& Expand Your Business",
  solutionsViewAll: "View all solution",
};

export const solutionsData = [
  {
    title: "SAP Analytics Cloud",
    description:
      "Make real-time, data-driven decisions with powerful dashboards and predictive analytics.",
    src: service1,
  },
  {
    title: "SAP Fiori & UX",
    description:
      "Build intuitive, role-based, and responsive interfaces with SAP Fiori to boost productivity and user satisfaction.",
    src: service3,
  },
  {
    title: "Rise with SAP Private cloud",
    description:
      "Private cloud is a suite of intelligent ERP software that includes digital process to enhance efficiency, predictive and simulation",
    src: service2,
  },
  {
    title: "SAP S/4HANA",
    description:
      "Modernize your ERP with Greenfield, Brownfield, or Bluefield strategies for SAP S/4HANA.",
    src: service4,
  },
  {
    title: "SAP Development",
    description:
      "Leverage cloud agility with SAP’s bundled offering. We help you adopt RISE with SAP with speed, flexibility, and business value.",
    src: service5,
  },
];

//Services Data
import service12 from "../assets/card_service_1.jpg";
import service22 from "../assets/card_service_2.jpg";
import service32 from "../assets/card_service_3.jpg";
import service42 from "../assets/card_service_4.jpg";
import service52 from "../assets/card_service_5.jpg";

export const servicesText = {
  servicesTitle: "Our Services",
  servicesSubTitle: "Tailored Services",
  servicesSubTitle2: "to Grow",
  servicesSubTitle3: "& Expand Your Business",
  servicesViewAll: "View all services",
};

export const servicesData = [
  {
    title: "Implementation & Rollouts Analytics Cloud",
    description:
      "Lorem Ipsum cloud agility with SAP’s bundled offering. We help you adopt RISE with SAP with speed, flexibility, and business value.",
    src: service12,
  },
  {
    title: "SAP Upgrades & Migrations",
    description:
      "Lorem Ipsum cloud agility with SAP’s bundled offering. We help you adopt RISE with SAP with speed, flexibility, and business value.",
    src: service22,
  },
  {
    title: "Managed Services & Support",
    description:
      "Lorem Ipsum cloud agility with SAP’s bundled offering. We help you adopt RISE with SAP with speed, flexibility, and business value.",
    src: service32,
  },
  {
    title: "Staff Augmentation",
    description:
      "Lorem Ipsum cloud agility with SAP’s bundled offering. We help you adopt RISE with SAP with speed, flexibility, and business value.",
    src: service42,
  },
  {
    title: "Training & Management",
    description:
      "Lorem Ipsum cloud agility with SAP’s bundled offering. We help you adopt RISE with SAP with speed, flexibility, and business value.",
    src: service52,
  },
];

//Hero Banner Data
export const heroText = {
  heroTitle: "Take Your Business",
  heroSubTitle: "To Next Level",
  heroSubTitle2: "Start Your Journey With Us Today",
  contactUs: "Contact Us",
};

//Blog Data
import blog1 from "../assets/blog_1.jpg";
import blog2 from "../assets/blog_2.jpg";
import blog3 from "../assets/blog_3.jpg";

export const blogText = {
  blogTitle: "Our Blogs",
  blogSubTitle: "Your source for",
  blogSubTitle2: "smart,",
  blogSubTitle3: "simple IT insights.",
  blogViewAll: "View all Blogs",
};

export const blogData = [
  {
    title: "Digital Transformation",
    description:
      "In today's fast-paced digital landscape, organizations are under increasing pressure to innovate, and stay competitive.",
    src: blog1,
  },
  {
    title: "SAP Business Solution",
    description:
      "In a world where digital transformation is not just an option but a necessity businesses are turning to agile.",
    src: blog2,
  },
  {
    title: "Chemical Industry",
    description:
      "The chemical industry stands at a critical juncture navigating increasing regulatory pressures, and growing calls for sustainability.",
    src: blog3,
  },
];

//Client Image (RtlSlider)
import clientImage1 from "../assets/i1.png";
import clientImage2 from "../assets/i2.png";
import clientImage3 from "../assets/i3.svg";
import clientImage4 from "../assets/i4.png";
import clientImage5 from "../assets/i5.png";
import clientImage6 from "../assets/gold.svg";
import clientImage7 from "../assets/i7.png";

export const ClientImages = [
  clientImage1,
  clientImage2,
  clientImage3,
  clientImage4,
  clientImage5,
  clientImage6,
  clientImage7,
];

//Footer Details
export const footerDetails = {
  IndiaHeadOffice: "India Head Office",
  Address:
    "Advait House Plot 10: Sunshine Industrial Hub – 1, Near Zydus Lifesciences,Near Navapura Railway Crossing, Navapura, Changodar, Ahmedabad  382213. Gujarat. India",
  Phone: "+91-92270-22260",
  Email: "sales@advaitbusiness.com",
};

//Footer
export const footerData = {
  footerText: "© 2025 ADVAIT BUSINESS SOLUTION pvt ltd. All rights reserved.",
  privacyPolicy: "Privacy Policy",
};
