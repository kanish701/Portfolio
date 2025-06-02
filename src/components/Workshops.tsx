import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Calendar, MapPin } from 'lucide-react';

interface Workshop {
  id: number;
  title: string;
  organizer: string;
  location: string;
  date: string;
  description: string;
}

const Workshops: React.FC = () => {
  const workshops: Workshop[] = [
    {
      id: 1,
      title: "Machine Learning Workshop",
      organizer: "KGISL Institute of Technology",
      location: "Coimbatore",
      date: "March 2023",
      description: "Comprehensive introduction to supervised learning, unsupervised learning, and reinforcement learning techniques. Hands-on projects with real-world datasets."
    },
    {
      id: 2,
      title: "Groww Trader Meetup",
      organizer: "Groww",
      location: "Tirupur",
      date: "July 2024",
      description: "Interactive session on stock market analysis, trading strategies, and investment principles. Networking with experienced traders and financial analysts."
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
    <section id="workshops" className="py-20">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="section-title">Workshops & Conferences</h2>
          <p className="mt-4 text-lg max-w-2xl mx-auto">
            Professional events I've attended to expand my knowledge and network.
          </p>
        </div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {workshops.map((workshop) => (
            <motion.div 
              key={workshop.id}
              className="card p-6 border-l-4 border-primary dark:border-primary-dark"
              variants={item}
              whileHover={{ 
                x: 5,
                transition: { duration: 0.2 }
              }}
            >
              <div className="flex items-center gap-3 mb-4">
                <BookOpen className="text-primary dark:text-primary-dark" size={24} />
                <h3 className="text-xl font-bold">{workshop.title}</h3>
              </div>
              
              <div className="space-y-3 ml-2">
                <div className="flex items-center gap-2 text-sm">
                  <span className="font-medium">{workshop.organizer}</span>
                </div>
                
                <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
                  <div className="flex items-center gap-1">
                    <MapPin size={14} />
                    <span>{workshop.location}</span>
                  </div>
                  
                  <div className="flex items-center gap-1">
                    <Calendar size={14} />
                    <span>{workshop.date}</span>
                  </div>
                </div>
                
                <p className="text-gray-600 dark:text-gray-300 mt-3">
                  {workshop.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Workshops;