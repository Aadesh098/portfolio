import { link } from "fs";

export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Resume", link: "https://avs-resume.tiiny.site/" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I engineer efficient systems that solve real world problems",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible in learning new technologies",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "Tech Stack",
    description: "Core",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "A Tech Enthusiast crafting modern solutions",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Software Engineer at Fastenal India",
    description: "Work in Action",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you wish to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Aivora",
    des: "An AI-native engine that transforms intent into deployable systems.",
    img: "/p1.png",
    iconLists: ["/next.svg", "/ts.svg", "/tail.svg", "/convex.png", "/c.svg"],
    link: "https://aivora-avs.vercel.app",
    githubLink: "https://github.com/Aadesh098/aivora",
  },
  {
    id: 2,
    title: "EchoForge",
    des: "An AI-native voice engine that transforms text into lifelike, expressive speech.",
    img: "/p2.png",
    iconLists: ["/next.svg", "/ts.svg", "/tail.svg", "/prisma.png", "/c.svg"],
    link: "https://echoforge-avs.vercel.app/",
    githubLink: "https://github.com/Aadesh098/echoforge",
  },
  {
    id: 3,
    title: "URJA '23 Website",
    des: "Thapar Institute of Engineering and Technology’s flagship sports fest official website.",
    img: "/p4.png",
    iconLists: ["/react.png", "/ts.svg", "/tail.svg", "/fb.svg", "/axios.png"],
    link: "https://urja2023.vercel.app/",
    githubLink: "https://github.com/Aadesh098/urja2023",
  },
  {
    id: 4,
    title: "Avs Portfolio",
    des: "A modern, high-performance portfolio showcasing projects with immersive 3D visuals and animations.",
    img: "/p3.png",
    iconLists: ["/next.svg", "/ts.svg", "/tail.svg", "/json.png", "/git.svg"],
    link: "https://portfolio-avs.vercel.app/",
    githubLink: "https://github.com/Aadesh098/portfolio",
  },
];

export const coursework = [
  {
    name: "Semester - 1",
    subject1: "Electrical and Electronics Engineering (UES013) - 9",
    subject2: "Computer Programming (UTA003) - 9",
    subject3: "Mathematics-1 (UMA010) - 9",
    subject4: "Mechanics (UES009) - 9",
    subject5: "Energy and Environment (UEN002)- 9",
    subject6: "Applied Chemistry (UCB008) - 7",
    cg: "8.6 / 10",
    sg: "8.6 / 10",
  },
  {
    name: "Semester - 2",
    subject1: "Object Oriented Programming (UTA018) - 10",
    subject2: "Professional Communication (UHU003) - 10",
    subject3: "Manufacturing Processes (UTA026) - 10",
    subject4: "Engineering Drawing (UTA015) - 9",
    subject5: "Applied Physics (UPH004) - 9",
    subject6: "Mathematics - 2 (UMA004) - 8",
    cg: "9.3 / 10",
    sg: "9.0 / 10",
  },
  {
    name: "Semester - 3",
    subject1: "Operating Systems (UCS303) - 10",
    subject2: "Computer Architecture and Organization (UCS510) - 10",
    subject3: "Discrete Mathematical Structures (UCS405) - 10",
    subject4: "Data Structures and Algorithms (UCS301) - 9",
    subject5: "Numerical Analysis (UMA011) - 9",
    subject6: "Experimental Learning Activity - NA",
    cg: "9.2 / 10",
    sg: "9.6 / 10",
  },
  {
    name: "Semester - 4",
    subject1: "Database Management Systems (UCS310) - 10",
    subject2: "Software Engineering (UCS503) - 10",
    subject3: "Computer Networks (UCS414) - 10",
    subject4: "Artificial Intelligence (UCS411) - 10",
    subject5: "Design and Analysis of Algorithms (UCS415) - 9",
    subject6: "Optimization Techniques (UMA035) - 9",
    cg: "9.3 / 10",
    sg: "9.6 / 10",
  },
  {
    name: "Semester - 5",
    subject1: "Network Programming (UCS413) - 10",
    subject2: "Machine Learning (UML501) - 9",
    subject3: "UI / UX Specialist (UCS542) - 9",
    subject4: "Introduction to Corporate Finance (UHU018) - 9",
    subject5: "Probability and Statistics (UCS410) - 8",
    subject6: "Cloud Computing (UCS531) - 8",
    cg: "9.2 / 10",
    sg: "8.8 / 10",
  },
  {
    name: "Semester - 6",
    subject1: "Database Engineering (UCS677) - 10",
    subject2: "Computer Graphics (UCS505) - 10",
    subject3: "Quantum Computing (UCS619) - 9",
    subject4: "Test Automation (UCS662) - 9",
    subject5: "Theory of Computation (UCS701) - 8",
    subject6: "Experiental Learning Activity - NA",
    cg: "9.2 / 10",
    sg: "9.2 / 10",
  },
  {
    name: "Semester - 7",
    subject1: "COGNITIVE COMPUTING (UCS712) - 9",
    subject2: "COMPILER CONSTRUCTION (UCS802) - 10",
    subject3: "CAPSTONE PROJECT (UCS797) - 10",
    subject4: "HUMANITIES FOR ENGINEERS (UHU005) - 10",
    subject5: "CLOUD & DEVOPS (UCS745) - 10",
    subject6: "Experiental Learning Activity - NA",
    cg: "9.3 / 10",
    sg: "9.9 / 10",
  },
  {
    name: "Semester - 8",
    subject1: "PROJECT SEMESTER (UCS895) - 10",
    subject2: "NA - NA",
    subject3: "NA - NA",
    subject4: "NA - NA",
    subject5: "NA - NA",
    subject6: "NA - NA",
    cg: "9.4 / 10",
    sg: "10 / 10",
  },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const studentCells = [
  {
    id: 1,
    title: "Urja, Tiet (Thapar's Annual Sports Fest)",
    desc: "Excecutive Board - Led a team of 300 students to successfully organize one of India’s premier sporting festivals - Urja 2024.",
    className: "md:col-span-2",
    thumbnail: "/exp1.png",
    link: "https://www.instagram.com/urja.tiet/",
  },
  {
    id: 2,
    title: "Creative Computing Society (Coding Student Cell)",
    desc: " Excecutive Member - Organized various ech events including tech hackathons, guest seminars, speaker sessions.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
    link: "https://www.instagram.com/ccs_tiet/",
  },
  {
    id: 3,
    title: "Markfin, Tiet (Finance Student Cell)",
    desc: "Core Member - Organized over 10 Finance and Marketing events including Investment Workshops and Speaker Sessions.",
    className: "md:col-span-2",
    thumbnail: "/exp4.png",
    link: "https://www.instagram.com/markfin.tiet/",
  },
  {
    id: 4,
    title: "Rotaract Club Tiet (Social Welfare Student Cell)",
    desc: "Excecutive Member - Successfully executed 15+ welfare initiatives inclusing awareness drives and donation campaigns.",
    className: "md:col-span-2",
    thumbnail: "/exp2.png",
    link: "https://www.instagram.com/rotaractclubtiet/",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/aadesh001/",
  },
  {
    id: 2,
    img: "/git.svg",
    link: "https://github.com/Aadesh098",
  },
  {
    id: 3,
    img: "/ig.svg",
    link: "https://www.instagram.com/aadesh_001/",
  },
];

export const technologies = [
  {
    name: "C++",
    icon: "/cpp.svg",
  },
  {
    name: "Java",
    icon: "/java.png",
  },
  {
    name: "Javascript",
    icon: "/js.svg",
  },
  {
    name: "ReactJs",
    icon: "/react.png",
  },
  {
    name: "NextJs",
    icon: "/nextjs.png",
  },
  {
    name: "Tailwind",
    icon: "/twcss.png",
  },
  {
    name: "NodeJs",
    icon: "/node.png",
  },
  {
    name: "MongoDB",
    icon: "/mongo.png",
  },
  {
    name: "PostgresSQL",
    icon: "/pg.png",
  },
  {
    name: "Convex",
    icon: "/convex.png",
  },
  {
    name: "Prisma",
    icon: "/prisma.svg",
  },
  {
    name: "Terraform",
    icon: "/terraform.png",
  },
  {
    name: "Azure",
    icon: "/azure.png",
  },
  {
    name: "AWS",
    icon: "/aws.png",
  },
  {
    name: "Git",
    icon: "/gith.svg",
  },
];
