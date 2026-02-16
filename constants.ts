import { Project, Experience, SkillCategory, SocialLink } from './types';

export const PERSONAL_INFO = {
  name: "Alex Dev",
  role: "Aspiring Software Developer",
  headline: "Computer Science student passionate about building efficient and scalable applications.",
  summary: "I am a final-year Computer Science student with a strong foundation in algorithms and web development. Proficient in the MERN stack and eager to leverage my problem-solving skills to contribute to innovative software solutions. I thrive in collaborative environments and am constantly learning new technologies.",
  email: "alex.dev@example.com",
  location: "San Francisco, CA",
  education: [
    {
      degree: "B.S. Computer Science",
      institution: "University of Technology",
      year: "2021 - 2025 (Expected)",
      details: "GPA: 3.8/4.0 | Dean's List | Relevant Coursework: Data Structures, Algorithms, Web Development, Database Systems"
    }
  ],
  strengths: ["Problem Solving", "Teamwork", "Quick Learner", "Communication", "Adaptability"]
};

export const SKILLS: SkillCategory[] = [
  {
    title: "Frontend",
    skills: ["React", "TypeScript", "Tailwind CSS", "HTML5", "CSS3", "Redux"]
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express", "Python", "Java", "REST APIs"]
  },
  {
    title: "Database",
    skills: ["MongoDB", "PostgreSQL", "MySQL", "Firebase"]
  },
  {
    title: "Tools & DevOps",
    skills: ["Git", "GitHub", "Docker", "VS Code", "Postman", "Figma"]
  }
];

export const PROJECTS: Project[] = [
  {
    id: "1",
    title: "EcoTrack Analytics",
    description: "A full-stack dashboard for tracking environmental data visualization using D3.js and React. Features real-time data updates and exportable reports.",
    technologies: ["React", "Node.js", "D3.js", "MongoDB"],
    imageUrl: "https://picsum.photos/800/600?random=1",
    githubUrl: "https://github.com",
    demoUrl: "https://example.com"
  },
  {
    id: "2",
    title: "TaskMaster Pro",
    description: "Collaborative task management application with real-time sockets, drag-and-drop interface, and team workspaces.",
    technologies: ["TypeScript", "Socket.io", "Express", "PostgreSQL"],
    imageUrl: "https://picsum.photos/800/600?random=2",
    githubUrl: "https://github.com",
    demoUrl: "https://example.com"
  },
  {
    id: "3",
    title: "AlgoVis",
    description: "Interactive sorting algorithm visualizer built to help students understand complex algorithms through animation.",
    technologies: ["React", "Algorithms", "CSS Animation"],
    imageUrl: "https://picsum.photos/800/600?random=3",
    githubUrl: "https://github.com"
  }
];

export const EXPERIENCE: Experience[] = [
  {
    id: "1",
    role: "Software Engineering Intern",
    company: "TechFlow Solutions",
    period: "Summer 2024",
    description: "Developed reusable React components for the main dashboard, reducing load times by 20%. Collaborated with the backend team to integrate RESTful APIs.",
    type: "internship"
  },
  {
    id: "2",
    role: "Hackathon Winner",
    company: "Global Tech Hackathon",
    period: "Fall 2023",
    description: "Built 'HealthConnect', a telemedicine platform prototype in 48 hours. Won 1st place in the Healthcare track.",
    type: "hackathon"
  },
  {
    id: "3",
    role: "Research Assistant",
    company: "University Data Lab",
    period: "Jan 2023 - May 2023",
    description: "Assisted in data cleaning and visualization for large-scale social network datasets using Python and Pandas.",
    type: "academic"
  },
  {
    id: "4",
    role: "Full Stack Development",
    company: "Coursera Certification",
    period: "2022",
    description: "Completed the Meta Full Stack Developer Professional Certificate.",
    type: "certification"
  }
];

export const SOCIAL_LINKS: SocialLink[] = [
  { platform: "GitHub", url: "https://github.com", icon: "Github" },
  { platform: "LinkedIn", url: "https://linkedin.com", icon: "Linkedin" },
  { platform: "Email", url: `mailto:${PERSONAL_INFO.email}`, icon: "Mail" }
];
