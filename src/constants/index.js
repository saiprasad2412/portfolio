import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    homeaway,
    jobit,
    tripguide,
    threejs,
    hts,
    angular,
    finance
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Frontend Developer",
      icon: web,
    },
    {
      title: "Data Structures and Algorithms",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Software Developer",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "Angular",
      icon: angular,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Frontend Web Developer Intern",
      company_name: "HTS Tech Solutions",
      icon: hts,
      iconBg: "#383E56",
      date: "June 2022 - Dec 2022",
      points: [
        "Key project development: Spearheaded the creation of all UIs for a critical company project, leading to the successful implementation of the website using React.",
        "Responsive design: Developed a responsive Angular website for a construction company, increasing user engagement by 45% and facilitating easy contact.",
        "Contributed to the creation of over 10 UIs in a dynamic ticker life web app.",
        
      ],
    },
    {
      title: "Software Developer",
      company_name: "HTS Tech Solutions",
      icon: hts,
      iconBg: "#E6DEDD",
      date: "Jan 2024 - present",
      points: [
        "Upgraded website technology stack: Migrated from Angular 10 to Angular 17, increasing functionality by 70% and improving user experience by 50%.",
        "Enhanced performance: Implemented server-side rendering (SSR) with Angular SSR, reducing load times by 40% and boosting SEO performance by 60%.",
        "Optimized SEO: Generated static HTML snapshots, resulting in a 30% increase in search engine visibility and organic traffic.",
        "Optimized SEO: Generated static HTML snapshots, resulting in a 30% increase in search engine visibility and organic traffic.",
      ],
    }
    
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "HomeAway",
      description:
        "HomeAway is an all-in-one platform designed for property listings, offering seamless solutions for both property owners and buyers. Whether you're looking to sell or rent out your property, or searching for your dream home, HomeAway provides the tools you need.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "prisma",
          color: "pink-text-gradient",
        },
      ],
      image: homeaway,
      source_code_link: "https://github.com/saiprasad2412/HomeAway",
    },
    {
      name: "Finance Tracker",
      description:
        "Personal Finance Tracker is a web application that helps you manage your finances effectively. With this application, you can track your income and expenses, set budgets, and gain better control over your financial health.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "restapi",
          color: "pink-text-gradient",
        },
      ],
      image: finance,
      source_code_link: "https://github.com/saiprasad2412/Finance_Tracker",
    },
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };