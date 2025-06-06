import React from 'react';
import { Mail, Phone, Linkedin, Github } from 'lucide-react';
import { motion } from 'framer-motion';
import aboutImg from '../assets/image/kanish.jpg';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="section-title">About Me</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="order-2 md:order-1"
          >
            <p className="text-lg mb-6 leading-relaxed">
              I'm a passionate final-year AI & Data Science student with a strong interest in building intelligent systems 
              and analyzing complex datasets. My experience in WordPress development has honed my skills in creating 
              responsive, user-friendly websites for clients across various industries.
            </p>
            <p className="text-lg mb-6 leading-relaxed">
              I thrive in collaborative environments and have demonstrated leadership capabilities through my work 
              with the Rotaract Club. My technical expertise spans from front-end development to machine learning, 
              and I'm constantly expanding my knowledge to stay ahead in this rapidly evolving field.
            </p>
            <p className="text-lg mb-8 leading-relaxed">
              As an aspiring analyst, I'm driven by a desire to extract meaningful insights from data and translate 
              them into actionable strategies. I'm seeking opportunities to apply my technical skills and analytical 
              mindset to solve real-world problems.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Mail className="text-primary dark:text-primary-dark" size={20} />
                <a href="mailto:kanishkardharmalingam1223@gmail.com" className="hover:text-primary dark:hover:text-primary-dark transition-colors">
                  kanishkardharmalingam1223@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="text-primary dark:text-primary-dark" size={20} />
                <a href="tel:+91 9994496256" className="hover:text-primary dark:hover:text-primary-dark transition-colors">
                  +91 99944 96256
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Linkedin className="text-primary dark:text-primary-dark" size={20} />
                <a href="https://www.linkedin.com/in/kanishkar-d-592b27227/" target="_blank" rel="noopener noreferrer" className="hover:text-primary dark:hover:text-primary-dark transition-colors">
                  linkedin.com/in/kanishkar-d-592b27227
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Github className="text-primary dark:text-primary-dark" size={20} />
                <a href="https://github.com/kanish701" target="_blank" rel="noopener noreferrer" className="hover:text-primary dark:hover:text-primary-dark transition-colors">
                  github.com/kanish701
                </a>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="order-1 md:order-2"
          >
            <div className="relative">
              <div className="aspect-square max-w-md mx-auto rounded-2xl overflow-hidden shadow-xl">
                <img 
                    src={aboutImg}
                    alt="Kanishkar D" 
                    className="w-full h-full object-cover"
/>
              </div>
              <div className="absolute -bottom-5 -right-5 bg-white dark:bg-dark-card p-4 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold text-primary dark:text-primary-dark">Kanishkar D</h3>
                <p className="text-sm opacity-75">Coimbatore, Tamil Nadu</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
