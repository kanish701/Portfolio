import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar } from 'lucide-react';

interface Education {
  id: number;
  institution: string;
  degree: string;
  specialization?: string; // Added specialization field
  period: string;
  score: string;
  icon: React.ReactNode;
}

const Education: React.FC = () => {
  const education: Education[] = [
    {
      id: 1,
      institution: "Kathir College of Engineering",
      degree: "Bachelor of Technology",
      specialization: "Artificial Intelligence and Data Science", // Specialization added
      period: "2021 – 2025",
      score: "CGPA: 7.24",
      icon: <GraduationCap size={24} />,
    },
    {
      id: 2,
      institution: "Subash Matric Higher Secondary School",
      degree: "Higher Secondary",
      specialization: "Maths-Computer Science", // Specialization added
      period: "2020 – 2021",
      score: "Score: 75.6%",
      icon: <GraduationCap size={24} />,
    },
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
    <section id="education" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="section-title">Education</h2>
          <p className="mt-4 text-lg max-w-2xl mx-auto">
            My academic journey and achievements.
          </p>
        </div>
        
        <motion.div 
          className="max-w-3xl mx-auto space-y-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {education.map((edu) => (
            <motion.div 
              key={edu.id}
              className="card p-6 relative border-l-4 border-primary dark:border-primary-dark"
              variants={item}
              whileHover={{ 
                x: 5,
                transition: { duration: 0.2 }
              }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-primary/10 dark:bg-primary-dark/10 rounded-lg text-primary dark:text-primary-dark">
                  {edu.icon}
                </div>
                <h3 className="text-xl font-bold">{edu.institution}</h3>
              </div>
              
              <div className="space-y-2 ml-2">
                <p className="text-lg font-medium text-gray-800 dark:text-gray-200">
                  {edu.degree}
                  {edu.specialization && ` - ${edu.specialization}`} {/* Display specialization */}
                </p>
                
                <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
                  <div className="flex items-center gap-1">
                    <Calendar size={14} />
                    <span>{edu.period}</span>
                  </div>
                  <span className="font-medium text-primary dark:text-primary-dark">
                    {edu.score}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
