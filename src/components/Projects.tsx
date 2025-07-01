import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';
import project1Img from '../assets/image/AIyutham.png';
import porject3Img from '../assets/image/Wearme appaarels.png'; // Adjust the import path as necessary
import project4Img from '../assets/image/Shady.png';
import project5Img from '../assets/image/Manpower.png';
 // Adjust the import path as necessary

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubLink?: string;
  demoLink?: string;
}

const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: "AIyutham – AI-Powered Digital Solutions Website",
      description: "I developed the official website for AIyutham, an AI-based startup that provides cutting-edge digital marketing and web automation solutions. The goal was to build a modern, responsive, and AI-integrated platform that effectively communicates their services and brand vision.",
      image: project1Img,
      technologies: ["WordPress + Elementor", "Custom CSS", "SEO Tools","Web Design"],
      githubLink: "#",
    },
    {
      id: 2,
      title: "Credit Card Fraud Detection",
      description: "Built a machine learning model to detect fraudulent credit card transactions with high accuracy. Implemented data preprocessing, feature engineering, and model optimization.",
      image: "https://images.pexels.com/photos/259249/pexels-photo-259249.jpeg?auto=compress&cs=tinysrgb&w=600",
      technologies: ["Python", "Scikit-learn", "Pandas", "TensorFlow", "Data Visualization"],
      githubLink: "#",
      demoLink: "#",
    },
    {
      id: 3,
      title: "WearMe Apparels – Fashion Brand Website Development",
      description: "I developed the official website for WearMe Apparels, a growing fashion and lifestyle brand. The goal was to build a modern, visually appealing platform that showcases the brand, collections, and style philosophy — without direct e-commerce integration.",
      image: porject3Img,
      technologies: ["WordPress + Elementor", "HTML", "Custom CSS", "SEO Tools"],
      demoLink: "https://wearmeappaarels.website.simsys.in/",
    },
    {
      id: 4,
      title: "S.H.A.D.Y – Smart Human Activity Detection Using YOLO",
      description: "Implemented a computer vision system that detects and classifies human activities in real-time using YOLO object detection framework.",
      image: project4Img,
      technologies: ["Python", "YOLO", "OpenCV", "Deep Learning", "Computer Vision"],
      githubLink: "#",
      demoLink: "#",
    },
    {
      id: 5,
      title: "Weman power – Static Website for a Manpower Service Provider",
      description: "Designed and developed a fully responsive, frontend-only website for a fictional manpower service provider company. The website functions like a professional business showcase with clear service categories, static job listings, and a functional login flow for employers",
      image: project5Img,
      technologies: ["JavaScript", "Reacts", "Tailwind CSS", "React Router"],
      demoLink: "",
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="projects" className="py-20">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="section-title">Projects</h2>
          <p className="mt-4 text-lg max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my technical skills and problem-solving abilities.
          </p>
        </div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {projects.map((project) => (
            <motion.div 
              key={project.id} 
              className="card overflow-hidden group"
              variants={item}
              whileHover={{ y: -5 }}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4 flex gap-3">
                    {project.githubLink && (
                      <a 
                        href={project.githubLink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/40 transition-colors"
                      >
                        <Github size={20} className="text-white" />
                      </a>
                    )}
                    {project.demoLink && (
                      <a 
                        href={project.demoLink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/40 transition-colors"
                      >
                        <ExternalLink size={20} className="text-white" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.technologies.map((tech, index) => (
                    <span 
                      key={index} 
                      className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full dark:bg-primary-dark/10 dark:text-primary-dark"
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
