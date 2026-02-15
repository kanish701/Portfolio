import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, Star, BookOpen } from 'lucide-react';

interface Education {
  id: number;
  institution: string;
  degree: string;
  specialization?: string;
  period: string;
  score: string;
  description: string; // Added description to show relevance
}

const Education: React.FC = () => {
  const education: Education[] = [
    {
      id: 1,
      institution: "Kathir College of Engineering",
      degree: "Bachelor of Technology",
      specialization: "Artificial Intelligence and Data Science",
      period: "2021 – 2025",
      score: "CGPA: 7.24",
      description: "Focusing on human-computer interaction, predictive modeling, and data visualization strategies."
    },
    {
      id: 2,
      institution: "Subash Matric Higher Secondary School",
      degree: "Higher Secondary",
      specialization: "Maths - Computer Science",
      period: "2020 – 2021",
      score: "Score: 75.6%",
      description: "Foundation in computational thinking and mathematical logic."
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.3 },
    },
  };

  const item = {
    hidden: { opacity: 0, x: -20 },
    show: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section id="education" className="py-16 bg-white dark:bg-[#0B0F1A] relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-20 right-[10%] w-64 h-64 bg-primary/5 blur-[100px] rounded-full" />
      </div>

      <div className="section-container">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div className="max-w-xl">
            <h2 className="text-primary font-bold tracking-[0.3em] uppercase text-sm mb-4">Academic Foundation</h2>
            <h3 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Education <span className="text-slate-400">&</span> Certifications
            </h3>
          </div>
          <p className="text-slate-500 dark:text-slate-400 md:max-w-xs text-sm leading-relaxed">
            Combining analytical rigor with creative execution to solve complex digital problems.
          </p>
        </div>

        <motion.div
          className="relative max-w-4xl mx-auto"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {/* Vertical Timeline Line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-px bg-slate-200 dark:bg-slate-800 hidden sm:block" />

          {education.map((edu, index) => (
            <motion.div
              key={edu.id}
              variants={item}
              className={`relative flex items-center justify-between mb-12 w-full ${index % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"
                }`}
            >
              {/* Timeline Dot */}
              <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-white dark:border-[#0B0F1A] z-10 hidden sm:block" />

              {/* Content Card */}
              <div className="w-full md:w-[45%]">
                <div className="card p-8 group hover:border-primary/50 transition-all">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-primary/10 rounded-xl text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                      <GraduationCap size={22} />
                    </div>
                    <div>
                      <span className="text-[10px] font-bold text-primary uppercase tracking-widest">{edu.period}</span>
                      <h4 className="text-xl font-bold text-slate-900 dark:text-white tracking-tight">{edu.institution}</h4>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <p className="text-lg font-semibold text-slate-700 dark:text-slate-200 leading-tight">
                      {edu.degree}
                    </p>
                    <p className="text-sm font-medium text-primary/80 dark:text-primary-dark/80">
                      {edu.specialization}
                    </p>
                    <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed italic">
                      "{edu.description}"
                    </p>

                    <div className="pt-4 flex items-center gap-2">
                      <Star size={14} className="text-amber-500 fill-amber-500" />
                      <span className="text-sm font-bold text-slate-900 dark:text-white">
                        {edu.score}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Spacer for desktop layout */}
              <div className="hidden md:block w-[45%]" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Education;