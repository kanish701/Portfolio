import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Code, Globe, Layers } from 'lucide-react';
// Asset Imports
import project1Img from '../assets/image/AIyutham.png';
import project3Img from '../assets/image/Wearme appaarels.png';
import project4Img from '../assets/image/Shady.png';
import project5Img from '../assets/image/Manpower.png';
import supreme from '../assets/image/supreme.png';
import freshfarming from '../assets/image/freshfarm.png';
import kalimah from '../assets/image/kalimah.png';
import visanavigator from '../assets/image/visanavigator.png';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubLink?: string;
  demoLink?: string;
  category: "Web Development" | "Business Solutions" | "Data & AI";
}

const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: "AIyutham",
      category: "Business Solutions",
      description: "Developed an AI-integrated platform for a digital marketing startup. Focused on a modern 'dark-mode' aesthetic to align with their cutting-edge automation services.",
      image: project1Img,
      technologies: ["WordPress", "Custom CSS", "AI Integration", "SEO"],
      demoLink: "https://aiyutham.com/",
    },
    {
      id: 6,
      title: "Visa Navigator",
      category: "Web Development",
      description: "Engineered a high-conversion lead capture system for a visa firm. Integrated Google Sheets as a serverless CRM to automate client data processing without overhead costs.",
      image: visanavigator,
      technologies: ["React", "TypeScript", "Framer Motion", "Google API"],
      demoLink: "https://visanavigator.in/",
    },
    {
      id: 9,
      title: "Kalimah Exports",
      category: "Web Development",
      description: "A premium digital storefront for an apparel manufacturer. Focused on high-fidelity visual storytelling and a minimalist UI to attract international fashion brands.",
      image: kalimah,
      technologies: ["React", "Tailwind CSS", "TypeScript", "Branding"],
      demoLink: "https://kalimahexports.com/",
    },
    {
      id: 2,
      title: "Reddit Market Analyzer",
      category: "Data & AI",
      description: "A Python-based business intelligence tool that scrapes niche subreddits to identify consumer 'pain points' and untapped market opportunities using NLP.",
      image: "https://miro.medium.com/1*kd5sLS5brHjN6i5-u76iCg.jpeg",
      technologies: ["Python", "LLM", "Pandas", "Streamlit"],
      githubLink: "#",
    },
    {
      id: 3,
      title: "WearMe Apparels",
      category: "Business Solutions",
      description: "Digital brand transformation for a lifestyle clothing line. Created a visual philosophy that bridges the gap between traditional manufacturing and modern fashion trends.",
      image: project3Img,
      technologies: ["WordPress", "Elementor", "Brand Strategy"],
      demoLink: "https://wearmeappaarels.website.simsys.in/",
    },
    {
      id: 8,
      title: "Supreme Fashions India",
      category: "Web Development",
      description: "Corporate identity for a textile giant. Designed to showcase production capacity and quality standards to global B2B fashion buyers.",
      image: supreme,
      technologies: ["React JS", "TypeScript", "Responsive UI"],
      demoLink: "https://supremeindia.in/",
    },
    {
      id: 7,
      title: "FreshFarming",
      category: "Business Solutions",
      description: "B2B export platform for agricultural goods. Implemented trust-centered design principles and SEO-copywriting to facilitate international trade inquiries.",
      image: freshfarming,
      technologies: ["HTML5", "CSS3", "Copywriting", "SEO"],
      demoLink: "https://freshfarming.in/",
    },
    {
      id: 4,
      title: "S.H.A.D.Y AI",
      category: "Data & AI",
      description: "Real-time human activity detection system using the YOLO framework. A technical showcase of computer vision applied to security and safety monitoring.",
      image: project4Img,
      technologies: ["Python", "YOLO v8", "OpenCV", "Deep Learning"],
      githubLink: "#",
    },
    {
      id: 5,
      title: "Weman Power",
      category: "Web Development",
      description: "A professional service showcase for a manpower agency. Features dynamic job categorization and a streamlined login flow for enterprise employers.",
      image: project5Img,
      technologies: ["React", "Tailwind CSS", "React Router"],
      demoLink: "#",
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.15 } },
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
  };

  return (
    <section id="projects" className="py-16 bg-white dark:bg-[#0B0F1A] relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[120px] -z-10" />

      <div className="section-container">
        <div className="max-w-3xl mb-20">
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="text-primary font-bold tracking-[0.2em] uppercase text-sm mb-4"
          >
            Portfolio
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-extrabold text-slate-900 dark:text-white mb-6"
          >
            Selected <span className="text-slate-400 dark:text-slate-500 underline decoration-primary/30">Works.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed"
          >
            I specialize in building digital experiences that balance technical efficiency with business growth.
            From AI-driven analysis to premium apparel branding.
          </motion.p>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.05 }}
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={item}
              className="group card flex flex-col h-full bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-3xl overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2"
            >
              {/* Image Container */}
              <div className="relative h-72 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-4 right-4">
                  <span className="px-4 py-1.5 rounded-full bg-white/90 dark:bg-black/60 backdrop-blur-md text-[10px] font-bold uppercase tracking-wider text-slate-800 dark:text-slate-200 border border-white/20">
                    {project.category}
                  </span>
                </div>

                {/* Overlay Links */}
                <div className="absolute inset-0 bg-slate-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  {project.demoLink && project.demoLink !== "#" && (
                    <a href={project.demoLink} target="_blank" rel="noreferrer" className="p-4 bg-white text-slate-900 rounded-full hover:scale-110 transition-transform">
                      <Globe size={24} />
                    </a>
                  )}
                  {project.githubLink && (
                    <a href={project.githubLink} target="_blank" rel="noreferrer" className="p-4 bg-primary text-white rounded-full hover:scale-110 transition-transform">
                      <Github size={24} />
                    </a>
                  )}
                </div>
              </div>

              {/* Content */}
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-primary transition-colors italic tracking-tight">
                  {project.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 mb-8 line-clamp-3 text-sm leading-relaxed">
                  {project.description}
                </p>

                <div className="mt-auto flex flex-wrap gap-2">
                  {project.technologies.slice(0, 4).map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 text-[11px] font-medium rounded-lg bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-white/10"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;