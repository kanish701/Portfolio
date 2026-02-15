import React from 'react';
import { motion } from 'framer-motion';
import {
  Zap, Database, Smartphone, Layout,
  Terminal, Globe, Bot, BarChart3,
  Layers, Workflow
} from 'lucide-react';

const Skills: React.FC = () => {
  const ecosystem = [
    {
      stage: "The Experience Layer",
      objective: "Converting Users into Customers",
      icon: <Layout className="text-pink-500" />,
      description: "Crafting the visual identity and high-performance interfaces that define a brand's first impression.",
      tools: ["React JS", "Next.js", "TypeScript", "Tailwind CSS", "Canva", "HTML/CSS"]
    },
    {
      stage: "The Engine & Automation",
      objective: "Scaling Business Operations",
      icon: <Workflow className="text-blue-500" />,
      description: "Automating lead captures and logistics using lightweight, cost-effective solutions for high efficiency.",
      tools: ["Node.js", "Python", "Google App Script", "Supabase", "Firebase", "MongoDB"]
    },
    {
      stage: "Intelligence & Deployment",
      objective: "Data-Driven Growth",
      icon: <Bot className="text-emerald-500" />,
      description: "Augmenting production with AI workflows and deploying to global infrastructure for 99.9% uptime.",
      tools: ["ChatGPT", "Gemini", "Grok", "Vercel", "Netlify", "Git/GitHub"]
    }
  ];

  return (
    <section id="skills" className="py-16 bg-[#F8FAFC] dark:bg-[#020617] transition-colors duration-500 overflow-hidden">
      <div className="section-container relative">

        {/* Modern Header for a Business-Minded Designer */}
        <div className="mb-20">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-primary font-bold tracking-[0.4em] uppercase text-[10px] mb-4"
          >
            Technical Infrastructure
          </motion.p>
          <h2 className="text-5xl md:text-7xl font-black text-slate-900 dark:text-white tracking-tighter leading-none mb-6">
            The <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Ecosystem.</span>
          </h2>
          <p className="max-w-2xl text-slate-500 dark:text-slate-400 text-lg">
            I don't just write code; I architect systems that bridge the gap between technical possibility and business reality.
          </p>
        </div>

        {/* Ecosystem Horizontal/Vertical Flow */}
        <div className="space-y-6">
          {ecosystem.map((group, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.15 }}
              viewport={{ once: true }}
              className="group relative flex flex-col md:flex-row items-center gap-8 p-1 w-full"
            >
              {/* The "Stage" Card */}
              <div className="w-full md:w-1/3 bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-[2rem] p-10 transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-primary/5 group-hover:border-primary/20">
                <div className="mb-6 p-4 w-fit bg-slate-50 dark:bg-slate-900 rounded-2xl">
                  {group.icon}
                </div>
                <h3 className="text-sm font-bold text-primary uppercase tracking-widest mb-2">{group.stage}</h3>
                <h4 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 leading-tight">{group.objective}</h4>
                <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                  {group.description}
                </p>
              </div>

              {/* The "Tool Path" - Connecting Line */}
              <div className="hidden md:flex flex-1 items-center justify-center relative">
                <div className="w-full h-[2px] bg-gradient-to-r from-slate-200 dark:from-slate-800 to-transparent" />
                <div className="absolute right-0 w-3 h-3 rounded-full bg-slate-200 dark:bg-slate-800" />
              </div>

              {/* The "Tool Grid" */}
              <div className="w-full md:w-1/2 flex flex-wrap gap-3">
                {group.tools.map((tool, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.05, backgroundColor: 'rgba(99, 102, 241, 0.1)' }}
                    className="px-6 py-3 rounded-2xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 text-sm font-semibold text-slate-700 dark:text-slate-300 shadow-sm flex items-center gap-3 transition-all"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    {tool}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Banner: The Business Hook */}
        <div className="mt-24 p-12 rounded-[3rem] bg-slate-900 dark:bg-primary text-white text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent" />
          <h4 className="text-2xl md:text-3xl font-bold mb-4 relative z-10">Looking for a technical partner to grow your business?</h4>
          <p className="text-white/70 max-w-xl mx-auto mb-8 relative z-10 text-lg font-light">
            I combine the speed of modern AI with the reliability of enterprise-grade tech stacks to deliver results.
          </p>
          <button className="px-10 py-4 bg-white text-slate-900 rounded-full font-bold hover:scale-105 transition-transform relative z-10">
            Let's Talk Strategy
          </button>
        </div>
      </div>
    </section>
  );
};

export default Skills;