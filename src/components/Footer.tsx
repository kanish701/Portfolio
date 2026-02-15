import React from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white dark:bg-black border-t border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 py-12 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-6 font-heading text-primary dark:text-primary-dark tracking-wide">KANISHKAR D</h3>
            <p className="max-w-md leading-relaxed mb-6">
              AI & Data Science student, WordPress developer, and aspiring analyst passionate about creating innovative solutions and extracting meaningful insights from data.
            </p>
            <div className="flex gap-4">
              <a href="https://linkedin.com/in/kanishkar-d-592b27227" target="_blank" rel="noopener noreferrer" className="p-2 bg-slate-100 dark:bg-slate-900 rounded-full hover:bg-primary hover:text-white dark:hover:bg-primary transition-all duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </a>
              <a href="https://github.com/kanish701" target="_blank" rel="noopener noreferrer" className="p-2 bg-slate-100 dark:bg-slate-900 rounded-full hover:bg-primary hover:text-white dark:hover:bg-primary transition-all duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 text-slate-800 dark:text-white">Quick Links</h4>
            <ul className="space-y-3">
              {['Home', 'About', 'Projects', 'Skills', 'Experience', 'Contact'].map((item) => (
                <li key={item}>
                  <ScrollLink
                    to={item.toLowerCase()}
                    smooth={true}
                    duration={500}
                    offset={-70}
                    className="hover:text-primary dark:hover:text-primary transition-colors cursor-pointer flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-400 group-hover:bg-primary transition-colors"></span> {item}
                  </ScrollLink>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 text-slate-800 dark:text-white">Contact</h4>
            <div className="space-y-4">
              <a href="mailto:kanishkardharmalinagm1223@gmail.com" className="group flex items-center gap-3 hover:text-primary transition-colors">
                <span className="p-2 bg-slate-100 dark:bg-slate-900 rounded-full group-hover:text-white group-hover:bg-primary transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                </span>
                <span className="text-sm">kanishkardharmalinagm1223@gmail.com</span>
              </a>
              <a href="tel:+919994496256" className="group flex items-center gap-3 hover:text-primary transition-colors">
                <span className="p-2 bg-slate-100 dark:bg-slate-900 rounded-full group-hover:text-white group-hover:bg-primary transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                </span>
                <span className="text-sm">+91 999 449 6256</span>
              </a>
              <div className="flex items-center gap-3">
                <span className="p-2 bg-slate-100 dark:bg-slate-900 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                </span>
                <span className="text-sm">Coimbatore, Tamil Nadu</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-200 dark:border-slate-800 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-center sm:text-left">
            © {currentYear} Kanishkar D. Built with React & Tailwind.
          </p>

          <ScrollLink
            to="hero"
            smooth={true}
            duration={800}
            className="mt-4 sm:mt-0 p-3 bg-primary text-white rounded-full hover:bg-primary-dark transition-all shadow-lg hover:shadow-primary/30 cursor-pointer animate-bounce"
            aria-label="Scroll to top"
          >
            <ArrowUp size={20} />
          </ScrollLink>
        </div>
      </div>
    </footer>
  );
};

export default Footer;