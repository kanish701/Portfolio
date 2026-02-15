import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, Users, Code2, Rocket, MapPin, Calendar, ArrowRight, Activity, Share2, BookOpen } from 'lucide-react';

const Experience: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  const experiences = [
    {
      role: "Project Associate",
      company: "Find Infra Solutions",
      period: "Jan 2025 — Dec 2025",
      mode: "Engineering + Social",
      icon: <Code2 size={20} />,
      color: "bg-blue-600",
      stats: { tech: "ReactJS", platforms: "Meta Suite", focus: "Growth" },
      bullets: [
        "Leveraged ReactJS to develop high-performance, responsive web architectures for infrastructure projects.",
        "Managed complex social media ecosystems via Meta Business Suite to drive brand visibility and engagement.",
        "Synthesized technical development with digital marketing strategies to optimize client reach."
      ]
    },
    {
      role: "WordPress Specialist",
      company: "SIMSYS Software",
      period: "Jan 2025 — Mar 2025",
      mode: "Systems Logic",
      icon: <Terminal size={20} />,
      color: "bg-purple-600",
      stats: { cms: "WordPress", engine: "ERP", duration: "3 Months" },
      bullets: [
        "Executed end-to-end WordPress projects, delivering tailored CMS solutions for business requirements.",
        "Navigated and optimized operations within ERP software environments to streamline workflows.",
        "Translated business process needs into functional digital components and system testing."
      ]
    },
    {
      role: "Club Service Director",
      company: "Rotaract Kathir",
      period: "Jan 2024 — July 2024",
      mode: "Operations",
      icon: <Users size={20} />,
      color: "bg-emerald-600",
      stats: { events: "5+", team: "Mgmt", impact: "Community" },
      bullets: [
        "Orchestrated 5+ high-impact community service events from conceptualization to execution.",
        "Directed member coordination and team leadership to ensure project success and engagement.",
        "Managed diverse stakeholder relationships to foster a culture of service and leadership development."
      ]
    },
    {
      role: "Core Content Member",
      company: "Rotaract Kathir",
      period: "Jun 2024 — Present",
      mode: "Creative Design",
      icon: <BookOpen size={20} />,
      color: "bg-orange-600",
      stats: { bulletins: "3 Eds", tenure: "1.9 Yrs", design: "Canva/UI" },
      bullets: [
        "Authored and designed creative content for 3 official club bulletins, documenting key initiatives.",
        "Spearheaded student-led initiatives aimed at promoting club culture through visual storytelling.",
        "Collaborated on long-term leadership programs, contributing to the club's sustainable growth."
      ]
    }
  ];

  return (
    <section id="experience" className="py-16 bg-white dark:bg-[#020617] transition-colors duration-500">
      <div className="section-container">

        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="max-w-xl">
            <p className="text-primary font-bold tracking-[0.4em] uppercase text-[10px] mb-4">Professional OS</p>
            <h2 className="text-5xl md:text-8xl font-black text-slate-900 dark:text-white tracking-tighter leading-none">
              The <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Timeline.</span>
            </h2>
          </div>
          <p className="text-slate-500 dark:text-slate-400 max-w-xs text-sm leading-relaxed border-l-2 border-primary/20 pl-6 font-medium">
            A chronological log of technical deployments and leadership cycles in Coimbatore.
          </p>
        </div>

        {/* Dashboard Interface */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-2 bg-slate-100 dark:bg-white/5 p-2 rounded-[3rem] border border-slate-200 dark:border-white/10">

          {/* Left Panel: The Selector */}
          <div className="lg:col-span-4 bg-white dark:bg-slate-900/40 rounded-[2.5rem] p-4 flex flex-col gap-2">
            {experiences.map((exp, idx) => (
              <button
                key={idx}
                onClick={() => setActiveTab(idx)}
                className={`flex items-center gap-4 p-6 rounded-[2rem] transition-all duration-500 text-left ${activeTab === idx
                    ? 'bg-slate-900 dark:bg-primary text-white shadow-2xl scale-[1.02]'
                    : 'hover:bg-slate-50 dark:hover:bg-white/5 text-slate-500'
                  }`}
              >
                <div className={`p-3 rounded-xl ${activeTab === idx ? 'bg-white/20' : 'bg-slate-100 dark:bg-white/5'}`}>
                  {exp.icon}
                </div>
                <div>
                  <h4 className={`font-bold text-sm tracking-tight ${activeTab === idx ? 'text-white' : 'text-slate-900 dark:text-white'}`}>
                    {exp.role}
                  </h4>
                  <p className="text-[10px] uppercase tracking-widest opacity-60 font-black mt-1">{exp.mode}</p>
                </div>
              </button>
            ))}
          </div>

          {/* Right Panel: The Detailed Log */}
          <div className="lg:col-span-8 bg-white dark:bg-slate-900 rounded-[2.5rem] p-10 md:p-16 relative overflow-hidden shadow-inner">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="relative z-10 h-full flex flex-col"
              >
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12">
                  <div>
                    <h3 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-3 tracking-tighter italic">
                      {experiences[activeTab].company}
                    </h3>
                    <div className="flex flex-wrap items-center gap-4 text-slate-400 text-xs font-bold uppercase tracking-widest">
                      <span className="flex items-center gap-2 px-3 py-1 bg-slate-100 dark:bg-white/5 rounded-full">
                        <Calendar size={14} className="text-primary" /> {experiences[activeTab].period}
                      </span>
                      <span className="flex items-center gap-2"><MapPin size={14} /> Coimbatore, TN</span>
                    </div>
                  </div>
                </div>

                {/* KPI Metrics Bar */}
                <div className="grid grid-cols-3 gap-4 mb-12">
                  {Object.entries(experiences[activeTab].stats).map(([key, value]) => (
                    <div key={key} className="bg-slate-50 dark:bg-white/5 p-5 rounded-3xl border border-slate-100 dark:border-white/5 group hover:border-primary/30 transition-colors">
                      <p className="text-[10px] uppercase font-black text-slate-400 mb-1 tracking-tighter">{key}</p>
                      <p className="text-lg font-black text-slate-900 dark:text-white tracking-tight">{value}</p>
                    </div>
                  ))}
                </div>

                {/* Deployment Objectives */}
                <div className="space-y-6 flex-grow">
                  <p className="text-[10px] font-black text-primary uppercase tracking-[0.4em]">Core Contributions</p>
                  <ul className="space-y-5">
                    {experiences[activeTab].bullets.map((bullet, i) => (
                      <li key={i} className="flex gap-4 text-slate-600 dark:text-slate-400 text-lg leading-snug font-medium group">
                        <Activity size={20} className="text-primary mt-1 shrink-0 opacity-30 group-hover:opacity-100 transition-opacity" />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-16 flex items-center gap-3 text-slate-400 text-[10px] font-black uppercase tracking-[0.3em] opacity-50">
                  <ArrowRight size={14} className="text-primary" /> End of Deployment Log
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Background Aesthetic */}
            <div className="absolute -bottom-24 -right-24 text-[25rem] font-black text-slate-50 dark:text-white/[0.02] select-none pointer-events-none italic">
              0{activeTab + 1}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;