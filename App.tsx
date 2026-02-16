import React, { useState } from 'react';
import { Menu, X, Github, Linkedin, Mail, ExternalLink, Code2, Database, Layout, Server, ChevronDown, Download, Terminal } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { PERSONAL_INFO, SKILLS, PROJECTS, EXPERIENCE, SOCIAL_LINKS } from './constants';
import Section from './components/ui/Section';
import ChatWidget from './components/ChatWidget';

// --- Sub-Components (Inline for single-file efficiency where strict modularity adds boilerplate without value) ---

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-md border-b border-slate-200 z-40 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <a href="#" className="text-2xl font-bold text-slate-900 flex items-center gap-2">
            <span className="w-8 h-8 bg-primary-600 text-white rounded-lg flex items-center justify-center text-lg">
              {PERSONAL_INFO.name.charAt(0)}
            </span>
            <span>{PERSONAL_INFO.name.split(' ')[1]}</span>
          </a>
          
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-slate-600 hover:text-primary-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a 
              href="#contact"
              className="bg-primary-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-primary-700 transition-colors"
            >
              Hire Me
            </a>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-slate-600 hover:text-slate-900 p-2">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-slate-200"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 shadow-lg">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-slate-600 hover:text-primary-600 block px-3 py-2 rounded-md text-base font-medium"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="order-2 lg:order-1"
        >
          <div className="inline-block px-3 py-1 bg-primary-50 text-primary-700 rounded-full text-sm font-medium mb-6">
            👋 Available for Internships & Roles
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight mb-6">
            Hi, I'm {PERSONAL_INFO.name} <br />
            <span className="text-primary-600">Aspiring Developer</span>
          </h1>
          <p className="text-lg text-slate-600 mb-8 max-w-lg leading-relaxed">
            {PERSONAL_INFO.headline}
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="#projects" className="bg-primary-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-primary-700 transition-colors shadow-lg shadow-primary-500/30">
              View My Projects
            </a>
            <a href="#" className="bg-white text-slate-700 border border-slate-200 px-8 py-3 rounded-lg font-medium hover:border-primary-600 hover:text-primary-600 transition-colors flex items-center gap-2">
              <Download size={18} />
              Download Resume
            </a>
          </div>
          
          <div className="mt-12 flex items-center gap-6 text-slate-500">
             {SOCIAL_LINKS.map(link => (
               <a key={link.platform} href={link.url} target="_blank" rel="noreferrer" className="hover:text-primary-600 transition-colors">
                  {link.icon === 'Github' && <Github size={24} />}
                  {link.icon === 'Linkedin' && <Linkedin size={24} />}
                  {link.icon === 'Mail' && <Mail size={24} />}
               </a>
             ))}
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="order-1 lg:order-2 flex justify-center lg:justify-end"
        >
          <div className="relative w-72 h-72 sm:w-96 sm:h-96">
            <div className="absolute inset-0 bg-primary-100 rounded-full blur-3xl opacity-50 animate-pulse" />
            <div className="relative w-full h-full bg-slate-200 rounded-2xl overflow-hidden shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-300">
              <img 
                src="https://picsum.photos/800/800?random=10" 
                alt="Profile" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </motion.div>
      </div>
      
      <motion.a 
        href="#about"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 1, repeat: Infinity, repeatType: 'reverse' }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-slate-400"
      >
        <ChevronDown size={32} />
      </motion.a>
    </section>
  );
};

const About: React.FC = () => {
  return (
    <Section id="about" title="About Me" subtitle="Get to know my background and what drives me." dark>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="col-span-1 md:col-span-2 space-y-6 text-slate-600 leading-relaxed">
          <p className="text-lg text-slate-900 font-medium">
            {PERSONAL_INFO.summary}
          </p>
          <p>
            Currently pursuing my <strong>{PERSONAL_INFO.education[0].degree}</strong> at {PERSONAL_INFO.education[0].institution}, 
            where I focus on data structures, algorithms, and modern web development.
          </p>
          <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 mt-6">
            <h4 className="font-semibold text-slate-900 mb-4 flex items-center gap-2">
              <Terminal size={20} className="text-primary-600"/>
              Career Objective
            </h4>
            <p className="text-sm">
              Eager to join a forward-thinking engineering team where I can apply my skills in 
              frontend and backend development to solve real-world problems while learning from experienced mentors.
            </p>
          </div>
        </div>
        
        <div className="col-span-1 space-y-6">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
            <h4 className="font-semibold text-slate-900 mb-4">Key Strengths</h4>
            <div className="flex flex-wrap gap-2">
              {PERSONAL_INFO.strengths.map(strength => (
                <span key={strength} className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm">
                  {strength}
                </span>
              ))}
            </div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
            <h4 className="font-semibold text-slate-900 mb-4">Education</h4>
            {PERSONAL_INFO.education.map((edu, idx) => (
              <div key={idx} className="border-l-2 border-primary-200 pl-4">
                <div className="font-medium text-slate-900">{edu.degree}</div>
                <div className="text-sm text-primary-600 mb-1">{edu.institution}</div>
                <div className="text-xs text-slate-500 mb-2">{edu.year}</div>
                <div className="text-xs text-slate-600">{edu.details}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

const Skills: React.FC = () => {
  const getIcon = (title: string) => {
    switch(title) {
      case 'Frontend': return <Layout size={24} />;
      case 'Backend': return <Server size={24} />;
      case 'Database': return <Database size={24} />;
      default: return <Code2 size={24} />;
    }
  };

  return (
    <Section id="skills" title="Technical Skills" subtitle="My technical toolbox and proficiency areas.">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {SKILLS.map((category, idx) => (
          <motion.div 
            key={category.title}
            whileHover={{ y: -5 }}
            className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 hover:shadow-md transition-all"
          >
            <div className="w-12 h-12 bg-primary-50 text-primary-600 rounded-lg flex items-center justify-center mb-6">
              {getIcon(category.title)}
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-4">{category.title}</h3>
            <div className="flex flex-wrap gap-2">
              {category.skills.map(skill => (
                <span key={skill} className="px-3 py-1 bg-slate-50 text-slate-700 text-sm rounded border border-slate-100">
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

const Projects: React.FC = () => {
  return (
    <Section id="projects" title="Featured Projects" subtitle="A selection of projects I've built to demonstrate my skills." dark>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {PROJECTS.map((project) => (
          <motion.div 
            key={project.id}
            whileHover={{ y: -8 }}
            className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 flex flex-col"
          >
            <div className="h-48 overflow-hidden bg-slate-200 relative group">
              <img 
                src={project.imageUrl} 
                alt={project.title} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-slate-900/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                <a href={project.githubUrl} target="_blank" rel="noreferrer" className="bg-white/90 p-2 rounded-full text-slate-900 hover:text-primary-600">
                  <Github size={20} />
                </a>
                {project.demoUrl && (
                  <a href={project.demoUrl} target="_blank" rel="noreferrer" className="bg-white/90 p-2 rounded-full text-slate-900 hover:text-primary-600">
                    <ExternalLink size={20} />
                  </a>
                )}
              </div>
            </div>
            <div className="p-6 flex-1 flex flex-col">
              <h3 className="text-xl font-bold text-slate-900 mb-2">{project.title}</h3>
              <p className="text-slate-600 mb-4 text-sm flex-1">{project.description}</p>
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.technologies.map(tech => (
                  <span key={tech} className="text-xs font-medium text-primary-600 bg-primary-50 px-2 py-1 rounded">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

const Experience: React.FC = () => {
  return (
    <Section id="experience" title="Experience & Achievements" subtitle="My professional journey and milestones so far.">
      <div className="max-w-3xl mx-auto space-y-8">
        {EXPERIENCE.map((item, idx) => (
          <div key={item.id} className="relative pl-8 md:pl-0">
            {/* Timeline Line */}
            <div className="hidden md:block absolute left-[50%] top-0 bottom-0 w-px bg-slate-200 -translate-x-1/2" />
            
            <div className={`md:flex items-center justify-between gap-8 ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
              {/* Timeline Dot */}
              <div className="absolute left-0 md:left-1/2 w-4 h-4 rounded-full bg-primary-600 border-4 border-white shadow -translate-x-1.5 md:-translate-x-2 mt-1.5 md:mt-0" />
              
              <div className="md:w-[45%] mb-2 md:mb-0">
                <div className={`flex flex-col ${idx % 2 === 0 ? 'md:items-start' : 'md:items-end'}`}>
                   <span className="text-sm font-semibold text-primary-600 tracking-wide uppercase mb-1">{item.period}</span>
                   <h3 className="text-xl font-bold text-slate-900">{item.role}</h3>
                   <span className="text-slate-500 font-medium mb-2">{item.company}</span>
                </div>
              </div>
              
              <div className="md:w-[45%] bg-slate-50 p-6 rounded-xl border border-slate-100">
                <p className="text-slate-600 text-sm leading-relaxed">
                  {item.description}
                </p>
                <span className="inline-block mt-3 text-xs font-semibold px-2 py-1 bg-slate-200 text-slate-700 rounded capitalize">
                  {item.type}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

const Contact: React.FC = () => {
  return (
    <Section id="contact" title="Get In Touch" subtitle="I'm currently looking for internship opportunities. Let's connect!" dark>
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col md:flex-row">
        <div className="bg-primary-900 p-10 text-white md:w-2/5 flex flex-col justify-between">
          <div>
            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
            <p className="text-primary-200 mb-8 leading-relaxed">
              Fill out the form or contact me directly via email. I usually respond within 24 hours.
            </p>
            <div className="space-y-6">
              <a href={`mailto:${PERSONAL_INFO.email}`} className="flex items-center gap-4 text-primary-100 hover:text-white transition-colors">
                <Mail size={20} />
                <span>{PERSONAL_INFO.email}</span>
              </a>
              <a href={SOCIAL_LINKS.find(l => l.platform === 'LinkedIn')?.url} className="flex items-center gap-4 text-primary-100 hover:text-white transition-colors">
                <Linkedin size={20} />
                <span>LinkedIn Profile</span>
              </a>
              <a href={SOCIAL_LINKS.find(l => l.platform === 'GitHub')?.url} className="flex items-center gap-4 text-primary-100 hover:text-white transition-colors">
                <Github size={20} />
                <span>GitHub Profile</span>
              </a>
            </div>
          </div>
          <div className="mt-12 md:mt-0">
             <div className="w-24 h-24 bg-primary-800 rounded-full blur-3xl absolute bottom-10 left-10" />
          </div>
        </div>
        
        <div className="p-10 md:w-3/5">
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium text-slate-700">Name</label>
                <input type="text" id="name" className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all" placeholder="John Doe" />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-slate-700">Email</label>
                <input type="email" id="email" className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all" placeholder="john@example.com" />
              </div>
            </div>
            <div className="space-y-2">
              <label htmlFor="subject" className="text-sm font-medium text-slate-700">Subject</label>
              <input type="text" id="subject" className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all" placeholder="Internship Opportunity" />
            </div>
            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium text-slate-700">Message</label>
              <textarea id="message" rows={4} className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all resize-none" placeholder="Hi, I'd like to discuss..."></textarea>
            </div>
            <button type="submit" className="w-full bg-primary-600 text-white font-medium py-3 rounded-lg hover:bg-primary-700 transition-colors shadow-lg shadow-primary-500/20">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </Section>
  );
};

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-slate-200 py-12">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <h2 className="text-xl font-bold text-slate-900 mb-2">{PERSONAL_INFO.name}</h2>
          <p className="text-slate-500 text-sm">© {new Date().getFullYear()} All rights reserved.</p>
        </div>
        <div className="flex items-center gap-6">
          {SOCIAL_LINKS.map(link => (
             <a key={link.platform} href={link.url} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-primary-600 transition-colors">
                {link.icon === 'Github' && <Github size={20} />}
                {link.icon === 'Linkedin' && <Linkedin size={20} />}
                {link.icon === 'Mail' && <Mail size={20} />}
             </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

function App() {
  return (
    <div className="min-h-screen relative">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
      <ChatWidget />
    </div>
  );
}

export default App;
