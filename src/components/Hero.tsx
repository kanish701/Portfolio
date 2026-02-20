import React from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { motion } from 'framer-motion';
import { ArrowUpRight, Sparkles, Star } from 'lucide-react';
// Use your existing image here
import kanishImage from '../assets/image/kanish.jpg'; 

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative min-h-screen pt-20 pb-10 flex flex-col items-center justify-center bg-white overflow-hidden">
      
      {/* Decorative Accents (The Green Sparks from the image) */}
      {/* <div className="absolute top-40 left-[10%] text-[#BEF264] opacity-80 animate-pulse">
        <Sparkles size={60} strokeWidth={1} />
      </div>
      <div className="absolute bottom-40 right-[10%] text-[#BEF264] opacity-80">
        <Sparkles size={40} strokeWidth={1} className="rotate-45" />
      </div> */}

      {/* Main Content Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 flex flex-col items-center">
        
        {/* 1. Centered Hero Headline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tighter leading-[1.1]">
            Empowering Brands <br />
            <span className="text-slate-900/40">Through Creative Solutions</span>
          </h1>
        </motion.div>

        {/* 2. The Middle Row (Subtext | Image | Badge) */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mt-4">
          
          {/* Left Side: Sub-description */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="lg:col-span-3 text-left"
          >
            <div className="text-primary-dark mb-4">
              <Sparkles size={24} />
            </div>
            <p className="text-slate-500 text-lg leading-relaxed">
              From web development to branding, I deliver innovative strategies that elevate your brand and drive growth. Let’s create something exceptional together.
            </p>
            <button className="mt-8 px-8 py-3 rounded-full border border-slate-200 text-sm font-bold hover:bg-slate-50 transition-all flex items-center gap-2">
              Innovate Your Brand
            </button>
          </motion.div>

          {/* Center: The Profile Image (Capsule/Circle Style) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 1 }}
            className="lg:col-span-6 flex justify-center relative"
          >
            {/* The Background Circle from the image */}
            <div className="absolute inset-0 bg-slate-100 rounded-full scale-90 -z-10" />
            
            <div className="relative w-72 h-72 md:w-[450px] md:h-[450px] overflow-hidden rounded-full border-[12px] border-white shadow-2xl">
              <img 
                src={kanishImage} 
                alt="Kanishkar D" 
                className="w-full h-full object-cover"
              />
            </div>

            {/* Floating Action Buttons over Image */}
            <div className="absolute bottom-6 flex gap-3 bg-black/80 backdrop-blur-md p-2 rounded-full border border-white/20">
              <button className="bg-[#FFFFFF] text-black px-6 py-3 rounded-full text-xs font-black uppercase tracking-widest hover:scale-105 transition-transform">
                Start Your Project
              </button>
              <ScrollLink to="contact" smooth={true} className="text-white px-6 py-3 rounded-full text-xs font-bold border border-white/20 hover:bg-white/10 cursor-pointer">
                Let's Collaborate
              </ScrollLink>
            </div>
          </motion.div>

          {/* Right Side: Experience Badge */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="lg:col-span-3 flex flex-col items-start lg:items-end text-left lg:text-right"
          >
            <div className="flex gap-1 mb-2">
              {[1,2,3,4,5].map(i => (
                <Star key={i} size={18} className="fill-primary-dark text-primary-dark" />
              ))}
            </div>
            <h4 className="text-5xl font-black text-slate-900 tracking-tighter">1+ Years</h4>
            <p className="text-slate-400 font-bold uppercase tracking-widest text-xs mt-1">Professional Experience</p>
            <div className="mt-6 text-primary-dark">
               <ArrowUpRight size={48} strokeWidth={1} />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Subtle Bottom Glow */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-slate-50 to-transparent opacity-50" />
    </section>
  );
};

export default Hero;