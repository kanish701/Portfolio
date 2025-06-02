import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, CalendarDays, MapPin } from 'lucide-react';

interface Experience {
  id: number;
  title: string;
  company: string;
  location: string;
  period: string;
  type: 'internship' | 'volunteer';
  description: string[];
}

const Experience: React.FC = () => {
  const experiences: Experience[] = [
    {
      id: 1,
      title: "Project Associate",
      company: "Find Infra Solutions",
      location: "Coimbatore",
      period: "Jan 2025 – Mar 2025",
      type: "internship",
      description: [
        "Developed and maintained WordPress websites for clients across various industries",
        "Managed MySQL databases for efficient data storage and retrieval",
        "Collaborated with the development team to optimize backend performance",
        "Implemented responsive designs ensuring cross-browser compatibility"
      ]
    },
    {
      id: 2,
      title: "WordPress Developer",
      company: "SIMSYS Software",
      location: "Remote",
      period: "Jan 2025 – Mar 2025",
      type: "internship",
      description: [
        "Created responsive WordPress websites using Elementor page builder",
        "Customized plugins and themes to meet specific client requirements",
        "Assisted in system testing and bug tracking procedures",
        "Gained understanding of ERP workflows and business processes",
        "Supported backend data entry operations and team coordination"
      ]
    },
    {
      id: 3,
      title: "Club Service Director",
      company: "Rotaract Club of Kathir",
      location: "Coimbatore",
      period: "2023 – 2024",
      type: "volunteer",
      description: [
        "Led a team of 15 members in planning and executing community service projects",
        "Coordinated with other clubs and organizations for collaborative initiatives",
        "Managed budgeting and resource allocation for various club activities",
        "Organized monthly meetings and maintained documentation of club activities"
      ]
    },
    {
      id: 4,
      title: "Event Organizer",
      company: "Rotaract Club of Kathir",
      location: "Coimbatore",
      period: "2024 – 2025",
      type: "volunteer",
      description: [
        "Conceptualized and executed community events with footfall of 500+ attendees",
        "Managed event logistics including venue selection, vendor coordination, and scheduling",
        "Developed promotional materials and social media campaigns to increase participation",
        "Conducted post-event evaluations to identify improvement opportunities"
      ]
    }
  ];

  // Filter experiences by type
  const internships = experiences.filter(exp => exp.type === 'internship');
  const volunteering = experiences.filter(exp => exp.type === 'volunteer');

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
    <section id="experience" className="py-20">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="section-title">Experience</h2>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Internships Section */}
          <div>
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <Briefcase className="text-primary dark:text-primary-dark" />
              Internship Experience
            </h3>
            
            <motion.div 
              className="space-y-6"
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              {internships.map((experience, index) => (
                <motion.div 
                  key={experience.id}
                  className="card p-6 relative"
                  variants={item}
                >
                  {index < internships.length - 1 && (
                    <div className="absolute left-6 top-[5.5rem] bottom-0 w-0.5 bg-gray-200 dark:bg-gray-700 -z-10"></div>
                  )}
                  
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
                    <h4 className="text-xl font-bold">{experience.title}</h4>
                    <div className="flex items-center gap-2 text-sm bg-primary/10 dark:bg-primary-dark/10 text-primary dark:text-primary-dark px-3 py-1 rounded-full">
                      <CalendarDays size={14} />
                      <span>{experience.period}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 mb-4">
                    <span className="font-medium">{experience.company}</span>
                    <span>•</span>
                    <div className="flex items-center gap-1">
                      <MapPin size={14} />
                      <span>{experience.location}</span>
                    </div>
                  </div>
                  
                  <ul className="space-y-2 list-disc pl-5">
                    {experience.description.map((point, idx) => (
                      <li key={idx}>{point}</li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </motion.div>
          </div>
          
          {/* Volunteering Section */}
          <div>
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <Briefcase className="text-accent dark:text-accent-dark" />
              Volunteer Experience
            </h3>
            
            <motion.div 
              className="space-y-6"
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              {volunteering.map((experience, index) => (
                <motion.div 
                  key={experience.id}
                  className="card p-6 relative"
                  variants={item}
                >
                  {index < volunteering.length - 1 && (
                    <div className="absolute left-6 top-[5.5rem] bottom-0 w-0.5 bg-gray-200 dark:bg-gray-700 -z-10"></div>
                  )}
                  
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
                    <h4 className="text-xl font-bold">{experience.title}</h4>
                    <div className="flex items-center gap-2 text-sm bg-accent/10 dark:bg-accent-dark/10 text-accent dark:text-accent-dark px-3 py-1 rounded-full">
                      <CalendarDays size={14} />
                      <span>{experience.period}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 mb-4">
                    <span className="font-medium">{experience.company}</span>
                    <span>•</span>
                    <div className="flex items-center gap-1">
                      <MapPin size={14} />
                      <span>{experience.location}</span>
                    </div>
                  </div>
                  
                  <ul className="space-y-2 list-disc pl-5">
                    {experience.description.map((point, idx) => (
                      <li key={idx}>{point}</li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;