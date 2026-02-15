import React from 'react';
import { motion } from 'framer-motion';
import { Radio, Zap, Users, Globe, MapPin, Calendar, TrendingUp, BrainCircuit } from 'lucide-react';

const Workshops: React.FC = () => {
  const signals = [
    {
      id: "SIG-02",
      title: "Financial Market Intelligence",
      organizer: "Groww Trader Meetup",
      location: "Tirupur, TN",
      date: "July 2024",
      icon: <TrendingUp className="text-emerald-500" />,
      insight: "Deep-dive into trading psychology, risk management, and market liquidity. Focused on networking with high-net-worth analysts and understanding retail investor behavior.",
      skills: ["Market Analysis", "Strategic Networking", "Risk Logic"]
    },
    {
      id: "SIG-01",
      title: "Algorithmic Logic Synthesis",
      organizer: "KGISL Institute of Technology",
      location: "Coimbatore, TN",
      date: "March 2023",
      icon: <BrainCircuit className="text-primary" />,
      insight: "Advanced immersion into supervised and reinforcement learning. Re-engineered real-world datasets to understand predictive modeling and its application in user behavior.",
      skills: ["Neural Networks", "Data Modeling", "Reinforcement Logic"]
    }
  ];

  return (
    <section id="workshops" className="py-16 bg-[#F8FAFC] dark:bg-[#020617] transition-colors duration-500 overflow-hidden">
      <div className="section-container relative">

        {/* Background Visual: Subtle Pulse Waves */}
        <div className="absolute top-0 right-0 p-40 opacity-10 pointer-events-none">
          <div className="w-96 h-96 rounded-full border-[1px] border-primary animate-ping" />
        </div>

        {/* Header Section */}
        <div className="mb-24">
          <div className="flex items-center gap-3 text-primary font-bold tracking-[0.4em] uppercase text-[10px] mb-4">
            <Radio size={14} className="animate-pulse" />
            <span>External Signals</span>
          </div>
          <h2 className="text-6xl md:text-9xl font-black text-slate-900 dark:text-white tracking-tighter leading-none mb-8">
            Knowledge. <br /> <span className="text-transparent stroke-text dark:text-white/10">Uplink.</span>
          </h2>
          <p className="max-w-xl text-slate-500 dark:text-slate-400 text-lg font-light leading-relaxed border-l-2 border-primary/20 pl-6">
            Infiltrating high-level meetups and technical workshops to harvest insights and expand the strategic network.
          </p>
        </div>

        {/* The Signal Feed */}
        <div className="space-y-6 max-w-6xl mx-auto">
          {signals.map((sig, idx) => (
            <motion.div
              key={sig.id}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="group relative flex flex-col lg:flex-row items-stretch bg-white dark:bg-white/5 rounded-[2.5rem] border border-slate-200 dark:border-white/10 overflow-hidden hover:border-primary/30 transition-all duration-500"
            >
              {/* Left Side: Source & Location (30%) */}
              <div className="lg:w-1/3 p-8 md:p-12 bg-slate-50 dark:bg-white/[0.02] border-b lg:border-b-0 lg:border-r border-slate-200 dark:border-white/10">
                <div className="flex justify-between items-start mb-10">
                  <div className="p-4 bg-white dark:bg-slate-900 rounded-2xl shadow-sm group-hover:scale-110 transition-transform duration-500">
                    {sig.icon}
                  </div>
                  <span className="text-[10px] font-black text-slate-400 tracking-[0.3em] uppercase">{sig.id}</span>
                </div>

                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 leading-tight">{sig.title}</h3>

                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-xs font-bold text-primary uppercase tracking-widest">
                    <Users size={14} /> {sig.organizer}
                  </div>
                  <div className="flex items-center gap-4 text-slate-400 text-[10px] font-bold uppercase tracking-widest">
                    <span className="flex items-center gap-1.5"><MapPin size={12} /> {sig.location}</span>
                    <span className="flex items-center gap-1.5"><Calendar size={12} /> {sig.date}</span>
                  </div>
                </div>
              </div>

              {/* Right Side: The Intel (70%) */}
              <div className="lg:w-2/3 p-8 md:p-12 flex flex-col justify-center">
                <p className="text-[10px] font-black text-primary uppercase tracking-[0.4em] mb-4">Core Intel</p>
                <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed mb-10 font-medium">
                  "{sig.insight}"
                </p>

                <div className="flex flex-wrap gap-2">
                  {sig.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="px-4 py-1.5 rounded-full bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-[10px] font-black uppercase tracking-widest text-slate-500 group-hover:text-primary transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Decorative "Uplink" Arrow */}
              <div className="absolute top-12 right-12 opacity-0 group-hover:opacity-20 transition-opacity">
                <Zap size={40} className="text-primary" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Workshops;