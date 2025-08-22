//Header.jsx (Header Menu Data)
export const headerData = {
  home: "Home",
  about: "About",
  industries: "Industries",
  services: "Services",
  contact: "Contact",
  careers: "Careers",
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
    { title: "Services", link: "/services" },
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
import printer from "../assets/i1.png";
export const whyText = {
  whyAdvait: "Why Advait",
  whyAdvaitSub: "Make the Smartest Move",
  whyAdvaitSub2: "for Your Future Goal!",
};

export const whyCardData = [
  {
    title: "Innovative Solution",
    desc: "We deliver cutting-edge IT solutions tailored to your business needs.",
    img: printer,
  },
  {
    title: "Cost-efficiency",
    desc: "We help reduce costs while improving overall efficiency.",
    img: printer,
  },
  {
    title: "Industry Expertise",
    desc: "Benefit from our deep understanding of diverse industry sectors.",
    img: printer,
  },
  {
    title: "Scalability",
    desc: "Our services grow with your business, ensuring long-term value.",
    img: printer,
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
import service2 from "../assets/card2.jpg";
import service3 from "../assets/card3.jpg";

export const solutionsText = {
  solutionsTitle: "Our Solutions",
  solutionsSubTitle: "Tailored Solutions",
  solutionsSubTitle2: "to Grow",
  solutionsSubTitle3: "& Expand Your Business",
  solutionsViewAll: "View all solutions",
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
    src: service2,
  },
  {
    title: "SAP S/4HANA",
    description:
      "Modernize your ERP with Greenfield, Brownfield, or Bluefield strategies for SAP S/4HANA.",
    src: service3,
  },
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
    src: service2,
  },
];

//Services Data
import service12 from "../assets/card1.jpg";
import service22 from "../assets/card2.jpg";
import service32 from "../assets/card3.jpg";

export const servicesText = {
  servicesTitle: "Our Services",
  servicesSubTitle: "Tailored Services",
  servicesSubTitle2: "to Grow",
  servicesSubTitle3: "& Expand Your Business",
  servicesViewAll: "View all services",
};

export const servicesData = [
  {
    title: "SAP Analytics Cloud",
    description:
      "Make real-time, data-driven decisions with powerful dashboards and predictive analytics.",
    src: service12,
  },
  {
    title: "SAP Fiori & UX",
    description:
      "Build intuitive, role-based, and responsive interfaces with SAP Fiori to boost productivity and user satisfaction.",
    src: service22,
  },
  {
    title: "SAP S/4HANA",
    description:
      "Modernize your ERP with Greenfield, Brownfield, or Bluefield strategies for SAP S/4HANA.",
    src: service32,
  },
  {
    title: "SAP Analytics Cloud",
    description:
      "Make real-time, data-driven decisions with powerful dashboards and predictive analytics.",
    src: service12,
  },
  {
    title: "SAP Fiori & UX",
    description:
      "Build intuitive, role-based, and responsive interfaces with SAP Fiori to boost productivity and user satisfaction.",
    src: service22,
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
import blog1 from "../assets/card1.jpg";
import blog2 from "../assets/card2.jpg";
import blog3 from "../assets/card3.jpg";

export const blogText = {
  blogTitle: "Our Blogs",
  blogSubTitle: "Your source for",
  blogSubTitle2: "smart,",
  blogSubTitle3: "simple IT insights.",
  blogViewAll: "View all Blogs",
};

export const blogData = [
  {
    title: "SAP Analytics Cloud",
    description:
      "Make real-time, data-driven decisions with powerful dashboards and predictive analytics.",
    src: blog1,
  },
  {
    title: "SAP Fiori & UX",
    description:
      "Build intuitive, role-based, and responsive interfaces with SAP Fiori to boost productivity and user satisfaction.",
    src: blog2,
  },
  {
    title: "SAP S/4HANA",
    description:
      "Modernize your ERP with Greenfield, Brownfield, or Bluefield strategies for SAP S/4HANA.",
    src: blog3,
  },
  {
    title: "SAP Analytics Cloud",
    description:
      "Make real-time, data-driven decisions with powerful dashboards and predictive analytics.",
    src: blog1,
  },
  {
    title: "SAP Fiori & UX",
    description:
      "Build intuitive, role-based, and responsive interfaces with SAP Fiori to boost productivity and user satisfaction.",
    src: blog2,
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
    "Plot # 10: Sunshine Industrial Hub – 1, Near Zydus Lifesciences, Near Navapura Railway Crossing, Navapura, Changodar, Ahmedabad 382213. Gujarat. India",
  Phone: "+91-92270-22260",
  Email: "advait@advaitit.com",
};


//Footer 
export const footerData = {
    footerText: "© 2025 ADVAIT BUSINESS SOLUTION. All rights reserved.",
    privacyPolicy: "Privacy Policy",
}
