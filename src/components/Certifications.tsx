import React from 'react';
import { motion } from 'framer-motion';
import { Award, ExternalLink } from 'lucide-react';

interface Certification {
  id: number;
  title: string;
  issuer: string;
  date: string;
  link?: string;
  icon: string;
}

const Certifications: React.FC = () => {
  const certifications: Certification[] = [
    {
      id: 1,
      title: "Python Programming",
      issuer: "Simplilearn",
      date: "March 2023",
      link: "#",
      icon: "🐍",
    },
    {
      id: 2,
      title: "MySQL Database Administration",
      issuer: "Great Learning",
      date: "June 2023",
      link: "#",
      icon: "🗄️",
    },
    {
      id: 3,
      title: "Excel for Data Analysis",
      issuer: "Alison",
      date: "September 2023",
      link: "#",
      icon: "📊",
    },
    {
      id: 4,
      title: "Microsoft Office Specialist",
      issuer: "Microsoft",
      date: "January 2024",
      link: "#",
      icon: "📝",
    },
    {
      id: 5,
      title: "HR Management Fundamentals",
      issuer: "Coursera",
      date: "November 2023",
      link: "#",
      icon: "👥",
    },
    {
      id: 6,
      title: "Project Management Essentials",
      issuer: "Google",
      date: "February 2024",
      link: "#",
      icon: "📈",
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="certifications" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="section-title">Certifications</h2>
          <p className="mt-4 text-lg max-w-2xl mx-auto">
            Professional certifications that validate my skills and expertise.
          </p>
        </div>
        
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {certifications.map((cert) => (
            <motion.div 
              key={cert.id}
              className="card p-6 flex flex-col h-full"
              variants={item}
              whileHover={{ 
                y: -5,
                transition: { duration: 0.2 }
              }}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="text-3xl">
                    {cert.icon}
                  </div>
                  <Award className="text-primary dark:text-primary-dark" size={24} />
                </div>
                {cert.link && (
                  <a 
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-primary dark:hover:text-primary-dark transition-colors"
                  >
                    <ExternalLink size={18} />
                  </a>
                )}
              </div>
              
              <h3 className="text-xl font-bold mb-2">{cert.title}</h3>
              
              <div className="mt-auto">
                <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400 mt-4">
                  <span>{cert.issuer}</span>
                  <span>{cert.date}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;