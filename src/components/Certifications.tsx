import React from 'react';
import { motion } from 'framer-motion';
import {
  Award, ExternalLink, ShieldCheck,
  Database, BarChart, Users,
  Briefcase, Code, FileSpreadsheet
} from 'lucide-react';

interface Certification {
  id: number;
  title: string;
  issuer: string;
  date: string;
  link: string;
  category: 'Data' | 'Business' | 'Tools';
  icon: React.ReactNode;
}

const Certifications: React.FC = () => {
  const certifications: Certification[] = [
    {
      id: 6,
      title: "Project Management Essentials",
      issuer: "Google",
      date: "Feb 2024",
      link: "#",
      category: "Business",
      icon: <Briefcase size={20} className="text-blue-500" />,
    },
    {
      id: 5,
      title: "HR Management Fundamentals",
      issuer: "Coursera",
      date: "Nov 2023",
      link: "#",
      category: "Business",
      icon: <Users size={20} className="text-emerald-500" />,
    },
    {
      id: 1,
      title: "Python Programming",
      issuer: "Simplilearn",
      date: "Mar 2023",
      link: "#",
      category: "Data",
      icon: <Code size={20} className="text-amber-500" />,
    },
    {
      id: 2,
      title: "MySQL Database Admin",
      issuer: "Great Learning",
      date: "Jun 2023",
      link: "#",
      category: "Data",
      icon: <Database size={20} className="text-indigo-500" />,
    },
    {
      id: 3,
      title: "Excel for Data Analysis",
      issuer: "Alison",
      date: "Sep 2023",
      link: "#",
      category: "Tools",
      icon: <BarChart size={20} className="text-green-500" />,
    },
    {
      id: 4,
      title: "Microsoft Office Specialist",
      issuer: "Microsoft",
      date: "Jan 2024",
      link: "#",
      category: "Tools",
      icon: <FileSpreadsheet size={20} className="text-red-500" />,
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  return (
    <section id="certifications" className="py-16 bg-white dark:bg-[#020617] relative overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute top-0 right-0 p-20 opacity-[0.03] dark:opacity-[0.07] pointer-events-none">
        <ShieldCheck size={400} />
      </div>

      <div className="section-container relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="max-w-xl">
            <p className="text-primary font-bold tracking-[0.4em] uppercase text-[10px] mb-4">Verification</p>
            <h2 className="text-5xl md:text-7xl font-black text-slate-900 dark:text-white tracking-tighter leading-none">
              The <span className="text-slate-400">Vault.</span>
            </h2>
          </div>
          <p className="text-slate-500 dark:text-slate-400 max-w-xs text-sm leading-relaxed font-medium">
            Industry-recognized credentials validating technical proficiency and strategic business management.
          </p>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {certifications.map((cert) => (
            <motion.div
              key={cert.id}
              whileHover={{ scale: 1.02, y: -5 }}
              className="group relative bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/10 p-8 rounded-[2rem] flex flex-col justify-between transition-all duration-500 hover:shadow-2xl hover:shadow-primary/5 hover:border-primary/20"
            >
              <div>
                <div className="flex justify-between items-start mb-6">
                  <div className="p-3 bg-white dark:bg-slate-900 rounded-2xl shadow-sm group-hover:bg-primary group-hover:text-white transition-all duration-500">
                    {cert.icon}
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 bg-slate-100 dark:bg-white/5 px-3 py-1 rounded-full">
                    {cert.category}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 tracking-tight group-hover:text-primary transition-colors">
                  {cert.title}
                </h3>
                <p className="text-sm font-semibold text-slate-400 uppercase tracking-tighter">
                  {cert.issuer}
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-200/50 dark:border-white/5 flex items-center justify-between">
                <div className="flex items-center gap-2 text-[10px] font-bold text-slate-400">
                  <ShieldCheck size={14} className="text-primary" />
                  VERIFIED • {cert.date}
                </div>
                <a
                  href={cert.link}
                  target="_blank"
                  className="p-2 rounded-full hover:bg-primary/10 text-slate-400 hover:text-primary transition-all"
                >
                  <ExternalLink size={16} />
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Professional Footer for the section */}
        <div className="mt-20 flex flex-wrap justify-center gap-8 opacity-30 grayscale hover:grayscale-0 transition-all duration-1000">
          <p className="text-xs font-bold tracking-[0.2em] text-slate-500 uppercase">Trusted by Global Learning Partners</p>
        </div>
      </div>
    </section>
  );
};

export default Certifications;