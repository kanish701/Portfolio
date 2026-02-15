import React from 'react';
import { Mail, Linkedin, Github, MessageSquare, Target, Zap, TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';
import aboutImg from '../assets/image/kanish.jpg';

const About: React.FC = () => {
  return (
    <section id="about" className="py-16 bg-white dark:bg-[#0B0F1A] transition-colors duration-300 relative overflow-hidden">
      {/* Decorative Blur */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="section-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">

          {/* Left Column: Visual & Socials (4 Cols) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="lg:col-span-5 flex flex-col items-center lg:items-start"
          >
            <div className="relative w-full max-w-sm">
              <div className="absolute inset-0 bg-primary/20 rounded-[2rem] transform rotate-3 scale-105 blur-2xl"></div>
              <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden border border-slate-200 dark:border-white/10 shadow-2xl">
                <img
                  src={aboutImg}
                  alt="Kanishkar D"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                />
              </div>

              {/* Floating Badge */}
              <div className="absolute -bottom-6 -right-6 glass p-6 rounded-2xl shadow-xl border border-white/20 dark:border-white/5 max-w-[200px]">
                <p className="text-xs font-bold text-primary dark:text-primary-dark uppercase tracking-widest mb-1">Based in</p>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white leading-tight">Coimbatore, Tamil Nadu</h3>
              </div>
            </div>

            {/* Social Links Grid */}
            <div className="mt-16 grid grid-cols-2 gap-4 w-full max-w-sm">
              <a href="mailto:kanishkardharmalingam1223@gmail.com" className="flex items-center gap-3 p-4 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/5 hover:border-primary/50 transition-all group">
                <Mail size={18} className="text-primary" />
                <span className="text-xs font-semibold text-slate-600 dark:text-slate-400">Email Me</span>
              </a>
              <a href="https://www.linkedin.com/in/kanishkar-d-592b27227/" target="_blank" className="flex items-center gap-3 p-4 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/5 hover:border-primary/50 transition-all">
                <Linkedin size={18} className="text-primary" />
                <span className="text-xs font-semibold text-slate-600 dark:text-slate-400">LinkedIn</span>
              </a>
            </div>
          </motion.div>

          {/* Right Column: Content (7 Cols) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:col-span-7"
          >
            <div className="space-y-8">
              <div>
                <h2 className="text-primary font-bold tracking-[0.3em] uppercase text-sm mb-4">The Persona</h2>
                <h3 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white leading-tight">
                  Bridging the gap between <span className="text-slate-400">Code</span> and <span className="italic">Commerce.</span>
                </h3>
              </div>

              <div className="space-y-6 text-lg text-slate-600 dark:text-slate-400 leading-relaxed font-light">
                <p>
                  I am a multi-disciplinary professional blending technical expertise in the <span className="text-slate-900 dark:text-white font-medium">MERN stack and AI</span> with a strategic focus on business growth and client success. My mission is to transform complex problems into intuitive, high-converting digital products.
                </p>
                <p>
                  With a portfolio spanning from <span className="text-slate-900 dark:text-white font-medium italic">agricultural branding</span> to <span className="text-slate-900 dark:text-white font-medium italic">premium apparel manufacturing</span>, I specialize in building digital identities that don't just look good—they perform.
                </p>
                <p>
                  My approach is data-driven. Whether I’m analyzing market gaps on Reddit or automating logistics for export firms, I focus on <span className="text-primary dark:text-primary-dark font-semibold underline underline-offset-4">Business Impact</span>. I turn code into capital and design into a competitive advantage.
                </p>
              </div>

              {/* Core Pillars / Stats Section */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 border-t border-slate-100 dark:border-white/5">
                <div className="flex flex-col gap-2">
                  <Target size={24} className="text-primary" />
                  <h4 className="font-bold text-slate-900 dark:text-white">Growth Focused</h4>
                  <p className="text-sm text-slate-500">Strategies tailored to scale client revenue.</p>
                </div>
                <div className="flex flex-col gap-2">
                  <Zap size={24} className="text-primary" />
                  <h4 className="font-bold text-slate-900 dark:text-white">Full-Stack Capability</h4>
                  <p className="text-sm text-slate-500">From UI prototypes to cloud deployment.</p>
                </div>
                <div className="flex flex-col gap-2">
                  <TrendingUp size={24} className="text-primary" />
                  <h4 className="font-bold text-slate-900 dark:text-white">Analytical Mind</h4>
                  <p className="text-sm text-slate-500">Data-backed decision making in every design.</p>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;