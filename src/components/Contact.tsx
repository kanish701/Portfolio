import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Mail, Phone, MapPin, MessageSquare, Send, User, AtSign, Linkedin, Github,
  Sparkles, ChevronRight, CheckCircle2
} from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: 'UI/UX Design', // New: Strategic Service Selection
    message: '',
  });

  const [formStatus, setFormStatus] = useState<{
    success?: boolean;
    message?: string;
  } | null>(null);

  const services = ["UI/UX Design", "Full-Stack Dev", "Growth Strategy", "Other"];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus({
      success: true,
      message: "Inquiry Received. I'll review your project details and respond within 24 hours.",
    });
    setFormData({ name: '', email: '', service: 'UI/UX Design', message: '' });
    setTimeout(() => setFormStatus(null), 5000);
  };

  return (
    <section id="contact" className="py-16 bg-white dark:bg-[#020617] transition-colors duration-500 overflow-hidden">
      <div className="section-container relative">

        {/* Background Visuals */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full -z-10" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-accent/5 blur-[100px] rounded-full -z-10" />

        <div className="mb-20 text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-widest mb-6"
          >
            <Sparkles size={12} />
            Let's Build Something Great
          </motion.div>
          <h2 className="text-5xl md:text-8xl font-black text-slate-900 dark:text-white tracking-tighter leading-none mb-6">
            Strategic <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Partnerships.</span>
          </h2>
          <p className="max-w-xl text-slate-500 dark:text-slate-400 text-lg font-light leading-relaxed">
            Have a complex problem? I’m here to provide a technical solution that drives measurable business growth.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">

          {/* Left Side: Contact Info & Value Prop */}
          <motion.div
            className="lg:col-span-4 space-y-12"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="space-y-8">
              <div className="group flex items-center gap-6">
                <div className="p-4 bg-slate-50 dark:bg-white/5 rounded-2xl group-hover:bg-primary group-hover:text-white transition-all duration-500">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Email</p>
                  <a href="mailto:kanishkardharmalingam1223@gmail.com" className="text-lg font-bold hover:text-primary transition-colors">
                    kanishkar.d@inquiry
                  </a>
                </div>
              </div>

              <div className="group flex items-center gap-6">
                <div className="p-4 bg-slate-50 dark:bg-white/5 rounded-2xl group-hover:bg-primary group-hover:text-white transition-all duration-500">
                  <Linkedin size={24} />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Network</p>
                  <a href="https://linkedin.com/in/kanishkar-d-592b27227" target="_blank" className="text-lg font-bold hover:text-primary transition-colors">
                    Connect on LinkedIn
                  </a>
                </div>
              </div>

              <div className="group flex items-center gap-6">
                <div className="p-4 bg-slate-50 dark:bg-white/5 rounded-2xl group-hover:bg-primary group-hover:text-white transition-all duration-500">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Location</p>
                  <p className="text-lg font-bold">Coimbatore, India</p>
                </div>
              </div>
            </div>

            <div className="p-8 rounded-[2rem] bg-slate-900 text-white relative overflow-hidden">
              <div className="relative z-10">
                <h4 className="text-xl font-bold mb-4">Why work with me?</h4>
                <ul className="space-y-3">
                  {["Data-Driven UI/UX", "Full-Stack Efficiency", "Growth-First Mindset"].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm text-slate-400">
                      <CheckCircle2 size={16} className="text-primary" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="absolute -bottom-10 -right-10 text-white/5 font-black text-8xl italic">K</div>
            </div>
          </motion.div>

          {/* Right Side: The Smart Form */}
          <motion.div
            className="lg:col-span-8"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="bg-slate-50 dark:bg-white/5 p-8 md:p-12 rounded-[3rem] border border-slate-100 dark:border-white/10">
              <form onSubmit={handleSubmit} className="space-y-10">

                {/* 1. Service Selector (The Strategic Part) */}
                <div className="space-y-4">
                  <p className="text-xs font-bold text-slate-500 uppercase tracking-widest pl-2">I am interested in:</p>
                  <div className="flex flex-wrap gap-3">
                    {services.map((service) => (
                      <button
                        key={service}
                        type="button"
                        onClick={() => setFormData(prev => ({ ...prev, service }))}
                        className={`px-6 py-3 rounded-2xl text-xs font-bold transition-all ${formData.service === service
                            ? 'bg-primary text-white shadow-lg shadow-primary/20 scale-105'
                            : 'bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-500 hover:border-primary/50'
                          }`}
                      >
                        {service}
                      </button>
                    ))}
                  </div>
                </div>

                {/* 2. Grid Inputs */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="relative group">
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your Name"
                      className="w-full bg-transparent border-b-2 border-slate-200 dark:border-white/10 py-4 focus:outline-none focus:border-primary transition-colors text-lg font-medium peer"
                    />
                    <User className="absolute right-0 top-4 text-slate-300 peer-focus:text-primary transition-colors" size={20} />
                  </div>
                  <div className="relative group">
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Your Email"
                      className="w-full bg-transparent border-b-2 border-slate-200 dark:border-white/10 py-4 focus:outline-none focus:border-primary transition-colors text-lg font-medium peer"
                    />
                    <AtSign className="absolute right-0 top-4 text-slate-300 peer-focus:text-primary transition-colors" size={20} />
                  </div>
                </div>

                {/* 3. Text Area */}
                <div className="relative group">
                  <textarea
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Tell me about your project or vision..."
                    className="w-full bg-transparent border-b-2 border-slate-200 dark:border-white/10 py-4 focus:outline-none focus:border-primary transition-colors text-lg font-medium resize-none peer"
                  />
                  <MessageSquare className="absolute right-0 top-4 text-slate-300 peer-focus:text-primary transition-colors" size={20} />
                </div>

                <div className="flex flex-col md:flex-row items-center justify-between gap-8 pt-6">
                  <button
                    type="submit"
                    className="btn btn-primary glow-pro px-12 py-5 w-full md:w-auto flex items-center justify-center gap-3 group"
                  >
                    <span>Initiate Project</span>
                    <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </button>

                  <AnimatePresence>
                    {formStatus && (
                      <motion.p
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0 }}
                        className="text-emerald-500 font-bold text-sm flex items-center gap-2"
                      >
                        <CheckCircle2 size={18} /> {formStatus.message}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </div>
              </form>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;