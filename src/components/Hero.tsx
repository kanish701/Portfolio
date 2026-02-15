import React, { useCallback } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { TypeAnimation } from 'react-type-animation';
import Particles from 'react-particles';
import { loadSlim } from 'tsparticles-slim';
import type { Engine } from 'tsparticles-engine';
import { Download, ArrowRight, MousePointer2, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white dark:bg-[#0B0F1A]">
      
      {/* 1. Refined Background: Lowered density for a "cleaner" UI */}
      <Particles
        id="tsparticles"
        className="absolute inset-0 z-0"
        init={particlesInit}
        options={{
          fullScreen: { enable: false },
          fpsLimit: 120,
          particles: {
            color: { value: "#6366f1" },
            links: {
              color: "#6366f1",
              distance: 200,
              enable: true,
              opacity: 0.1, // Very subtle
              width: 1,
            },
            move: { enable: true, speed: 0.4, direction: "none", outModes: "out" },
            number: { value: 30, density: { enable: true, area: 1000 } },
            opacity: { value: 0.2 },
            size: { value: { min: 1, max: 2 } },
          },
          detectRetina: true,
        }}
      />

      {/* 2. Visual Hook: Gradient Orbs for Depth */}
      <div className="absolute top-1/4 -left-20 w-80 h-80 bg-primary/10 blur-[120px] rounded-full animate-pulse" />
      <div className="absolute bottom-1/4 -right-20 w-[500px] h-[500px] bg-accent/5 blur-[140px] rounded-full" />

      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        
        {/* 3. Availability Badge: Classic UI/UX Professional Touch */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-600 dark:text-slate-400 text-xs font-bold uppercase tracking-widest mb-8"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
          </span>
          Available for Digital Strategy & Design
        </motion.div>

        {/* 4. Main Title: Emphasis on the Name and Brand */}
        <h1 className="text-6xl sm:text-7xl md:text-9xl font-extrabold mb-6 tracking-tighter leading-none text-slate-900 dark:text-white">
          Kanishkar <span className="text-primary italic">D.</span>
        </h1>

        {/* 5. Strategy-Led Typing Animation */}
        <div className="h-12 flex justify-center items-center mb-6">
          <TypeAnimation
            sequence={[
              'Strategic UI/UX Designer.',
              2000,
              'Full-Stack Developer.',
              2000,
              'Data-Driven Growth Analyst.',
              2000,
              'WordPress Architect.',
              2000,
            ]}
            wrapper="h2"
            speed={50}
            repeat={Infinity}
            className="text-xl sm:text-2xl md:text-3xl font-medium text-slate-500 dark:text-slate-400 tracking-tight"
          />
        </div>

        {/* 6. High-Impact Copy: Focused on Results, Not Just Skills */}
        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-12 text-slate-600 dark:text-slate-400 leading-relaxed font-light">
          I bridge the gap between <span className="font-semibold text-slate-900 dark:text-white">technical complexity</span> and 
          <span className="font-semibold text-slate-900 dark:text-white"> human-centric design</span> to build digital products that scale.
        </p>

        {/* 7. Action Buttons: Upgraded with "Glow-Pro" and Micro-interactions */}
        <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
          <a
            href="/public/Kanishkar Resume.pdf"
            className="btn btn-primary glow-pro w-full sm:w-auto px-10 py-4 flex items-center justify-center gap-3 group"
            download
          >
            <Download size={18} className="group-hover:translate-y-0.5 transition-transform" />
            Download Case Studies
          </a>

          <ScrollLink
            to="contact"
            smooth={true}
            className="btn btn-secondary w-full sm:w-auto px-10 py-4 flex items-center justify-center gap-3 cursor-pointer group"
          >
            Start a Project
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </ScrollLink>
        </div>
      </div>

      {/* 8. Refined Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-3 opacity-50 hover:opacity-100 transition-opacity">
        <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-slate-400">Explore</span>
        <ScrollLink to="about" smooth={true} className="cursor-pointer">
          <div className="w-6 h-10 rounded-full border-2 border-slate-300 dark:border-slate-700 p-1">
            <motion.div 
              animate={{ y: [0, 12, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="w-1 h-2 bg-primary rounded-full mx-auto"
            />
          </div>
        </ScrollLink>
      </div>
    </section>
  );
};

export default Hero;