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
    java,
    Csharp,
    spring,
    flutter,
    dart,
    mysql,
    sqlserver,
    firebase,
    meta,
    asp,
    starbucks,
    tdt,
    tesla,
    shopify,
    carrent,
    cookie,
    calltel,
    malefashion,
    jobit,
    tripguide,
    threejs,
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
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Mobile Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Freelancer",
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
      name: "Java",
      icon: java,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Firebase",
      icon: firebase,
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
      name: "MySQL",
      icon: mysql,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "Spring",
      icon: spring,
    },
    // {
    //   name: "c#",
    //   icon: Csharp,
    // },
    {
      name: "asp",
      icon: asp,
    },
  ];
  
  const experiences = [
    {
      title: "",
      company_name: "Ton Duc Thang University",
      icon: tdt,
      iconBg: "#383E56",
      date: "October 2021 - Now",
      points: [
        "Learning fundamental programming concepts and data structures.",
        "Understanding algorithms and their complexity analysis.",
        "Developing software applications using various programming languages such as C, Java, Javascript, C#, or Python.",
        "Working with databases and learning SQL for data manipulation and retrieval.",
        "Gaining knowledge of software engineering principles and best practices.",
        "Collaborating with peers on group projects to develop real-world software solutions.",
        "Learning about software testing and debugging techniques to ensure the quality of applications.",
      ],
    },
  ];
  const testimonials = [
    {
      testimonial:
        "When you have a dream, you've got to grab it and never let go",
      name: "Carol Burnett",  
      designation: "",
      company: "",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyPhEeUo6GGHpnU-ea5VPj-sQxsCmzLrSAzw&usqp=CAU",
    },
    {
      testimonial:
        "A person who never made a mistake never tried anything new.",
      name: "Albert Einstein",
      designation: "",
      company: "",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Albert_Einstein_Head.jpg/450px-Albert_Einstein_Head.jpg",
    },
    // {
    //   testimonial:
    //     "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    //   name: "Lisa Wang",
    //   designation: "CTO",
    //   company: "456 Enterprises",
    //   image: "https://randomuser.me/api/portraits/women/6.jpg",
    // },
  ];
  
  const projects = [
    {
      name: "Cookie",
      description:
        "An English learning app built using the Flutter framework and Firebase, is a versatile app available across multiple platforms",
      tags: [
        {
          name: "flutter",
          color: "blue-text-gradient",
        },
        {
          name: "dart",
          color: "green-text-gradient",
        },
        {
          name: "firebase",
          color: "pink-text-gradient",
        },
      ],
      image: cookie,
      source_code_link: "https://github.com/HoangPhu0705/cookie.git",
    },
    {
      name: "CallTel",
      description:
        "CallTel is a robust web-based point of sale (POS) application designed specifically for phone store management.",
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
          name: "nodejs",
          color: "pink-text-gradient",
        },
      ],
      image: calltel,
      source_code_link: "https://github.com/HoangPhu0705/CallTel",
    },
    {
      name: "Male Fashion",
      description:
        "MaleFashion is a dynamic .NET Core web application designed to be the go-to platform for all fashion enthusiasts.",
      tags: [
        {
          name: ".NET Core",
          color: "blue-text-gradient",
        },
        {
          name: "sqlserver",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: malefashion,
      source_code_link: "https://github.com/HoangPhu0705/malefashion.git",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };