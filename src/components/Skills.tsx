import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Database, Brain, BarChart3, Wrench, MonitorSmartphone, FileCode, Figma, Palette, FlaskRound as Flask, Phone as Python, GitBranch, LineChart, Table, FileSpreadsheet, Bot, Terminal, MessageSquare } from 'lucide-react';

interface Skill {
  name: string;
  icon: React.ReactNode;
  color: string;
}

interface SkillGroup {
  id: string;
  title: string;
  icon: React.ReactNode;
  skills: Skill[];
}

const Skills: React.FC = () => {
  const skillGroups: SkillGroup[] = [
    {
      id: "frontend",
      title: "Front-End Development",
      icon: <MonitorSmartphone size={24} />,
      skills: [
        { name: "HTML", icon: <FileCode size={20} />, color: "text-orange-500" },
        { name: "CSS", icon: <Palette size={20} />, color: "text-blue-500" },
        { name: "JavaScript", icon: <Code2 size={20} />, color: "text-yellow-500" },
        { name: "Tailwind", icon: <Code2 size={20} />, color: "text-cyan-500" },
        { name: "WordPress", icon: <Code2 size={20} />, color: "text-blue-600" },
      ],
    },
    {
      id: "backend",
      title: "Back-End Development",
      icon: <Database size={24} />,
      skills: [
        { name: "Python", icon: <Python size={20} />, color: "text-blue-500" },
        { name: "PHP", icon: <FileCode size={20} />, color: "text-purple-600" },
        { name: "Flask", icon: <Flask size={20} />, color: "text-gray-600" },
        { name: "Vite", icon: <Code2 size={20} />, color: "text-yellow-500" },
      ],
    },
    {
      id: "aiml",
      title: "AI/ML Technologies",
      icon: <Brain size={24} />,
      skills: [
        { name: "TensorFlow", icon: <Brain size={20} />, color: "text-orange-500" },
        { name: "Scikit-learn", icon: <Bot size={20} />, color: "text-blue-500" },
        { name: "Pandas", icon: <Table size={20} />, color: "text-purple-500" },
        { name: "NumPy", icon: <LineChart size={20} />, color: "text-blue-600" },
        { name: "YOLO", icon: <Brain size={20} />, color: "text-green-500" },
      ],
    },
    {
      id: "analytics",
      title: "Analytics & Tools",
      icon: <BarChart3 size={24} />,
      skills: [
        { name: "Tableau", icon: <BarChart3 size={20} />, color: "text-blue-500" },
        { name: "Power BI", icon: <LineChart size={20} />, color: "text-yellow-500" },
        { name: "Excel", icon: <FileSpreadsheet size={20} />, color: "text-green-600" },
        { name: "Agile", icon: <Code2 size={20} />, color: "text-blue-500" },
      ],
    },
    {
      id: "others",
      title: "Other Tools",
      icon: <Wrench size={24} />,
      skills: [
        { name: "Git", icon: <GitBranch size={20} />, color: "text-orange-500" },
        { name: "GitHub", icon: <Code2 size={20} />, color: "text-gray-600" },
        { name: "Figma", icon: <Figma size={20} />, color: "text-purple-500" },
        { name: "Canva", icon: <Palette size={20} />, color: "text-teal-500" },
        { name: "VS Code", icon: <Terminal size={20} />, color: "text-blue-500" },
        { name: "SurveyMonkey", icon: <MessageSquare size={20} />, color: "text-green-500" },
        { name: "ChatGPT", icon: <Bot size={20} />, color: "text-teal-500" },
        { name: "Chrok", icon: <Code2 size={20} />, color: "text-purple-500" },
      ],
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="section-title">Skills</h2>
          <p className="mt-4 text-lg max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise and professional capabilities.
          </p>
        </div>
        
        <motion.div 
          className="space-y-16"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {skillGroups.map((group, index) => (
            <motion.div 
              key={group.id}
              className={`flex flex-col ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              } gap-8 items-center`}
              variants={item}
            >
              <div className="w-full md:w-1/3 text-center md:text-left">
                <div className="inline-flex items-center gap-3 mb-4">
                  <div className="p-3 bg-primary/10 dark:bg-primary-dark/10 rounded-lg text-primary dark:text-primary-dark">
                    {group.icon}
                  </div>
                  <h3 className="text-2xl font-bold">{group.title}</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-400">
                  Expertise in various {group.title.toLowerCase()} technologies and tools.
                </p>
              </div>
              
              <div className="w-full md:w-2/3">
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                  {group.skills.map((skill) => (
                    <div 
                      key={skill.name}
                      className="card p-4 flex flex-col items-center text-center hover:scale-105 transition-transform duration-300"
                    >
                      <div className={`p-3 rounded-full ${skill.color} bg-opacity-10 mb-3`}>
                        {skill.icon}
                      </div>
                      <span className="font-medium">{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;