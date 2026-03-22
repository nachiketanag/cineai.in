import React from 'react';
import { motion } from 'framer-motion';
import { Search, HelpCircle, FileText, MessageSquare, Mail, ChevronRight } from 'lucide-react';

// Mock icons for categories since we can't import them all easily at the top
const Play = ({ className }: { className?: string }) => <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>;
const CreditCard = ({ className }: { className?: string }) => <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" /></svg>;
const MonitorPlay = ({ className }: { className?: string }) => <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>;
const Wrench = ({ className }: { className?: string }) => <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>;
const Award = ({ className }: { className?: string }) => <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" /></svg>;

const CATEGORIES = [
  {
    title: "Getting Started",
    icon: <Play className="w-6 h-6" />,
    articles: ["How to enroll in a course", "System requirements for AI tools", "Navigating the dashboard"]
  },
  {
    title: "Account & Billing",
    icon: <CreditCard className="w-6 h-6" />,
    articles: ["Managing your subscription", "Updating payment methods", "Refund policy"]
  },
  {
    title: "Course Access",
    icon: <MonitorPlay className="w-6 h-6" />,
    articles: ["Downloading resources", "Accessing live Q&A sessions", "Troubleshooting video playback"]
  },
  {
    title: "Community & Discord",
    icon: <MessageSquare className="w-6 h-6" />,
    articles: ["How to join the Discord server", "Community guidelines", "Finding freelance jobs"]
  },
  {
    title: "Technical Support",
    icon: <Wrench className="w-6 h-6" />,
    articles: ["Midjourney bot setup", "Runway Gen-3 error codes", "Audio syncing issues"]
  },
  {
    title: "Certifications",
    icon: <Award className="w-6 h-6" />,
    articles: ["How to earn a certificate", "Sharing your certificate on LinkedIn", "Verifying credentials"]
  }
];

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

export const HelpCenterPage = () => {
  return (
    <div className="pt-24 pb-24 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-blue/10 border border-accent-blue/20 text-xs font-bold uppercase tracking-wider text-accent-blue mb-6"
        >
          <HelpCircle className="w-3 h-3" /> Support
        </motion.div>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-display font-bold text-4xl md:text-6xl mb-6 leading-tight"
        >
          How can I <span className="text-cine-textMuted">help?</span>
        </motion.h1>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="relative max-w-2xl mx-auto mt-8"
        >
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-6 h-6 text-cine-textMuted" />
          <input 
            type="text" 
            placeholder="Search for articles, tutorials, or FAQs..." 
            className="w-full bg-cine-surface border border-white/10 rounded-2xl pl-14 pr-4 py-4 text-lg text-white focus:outline-none focus:border-accent-lime transition-colors shadow-lg"
          />
        </motion.div>
      </div>

      <motion.div 
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24"
      >
        {CATEGORIES.map((category, index) => (
          <motion.div 
            key={index}
            variants={fadeInUp}
            className="bg-cine-surface rounded-3xl p-8 border border-white/5 hover:border-white/20 transition-colors"
          >
            <div className="w-12 h-12 rounded-xl bg-cine-black flex items-center justify-center mb-6 text-accent-blue">
              {category.icon}
            </div>
            <h3 className="font-display font-bold text-2xl mb-6 text-white">{category.title}</h3>
            <ul className="space-y-4">
              {category.articles.map((article, i) => (
                <li key={i}>
                  <a href="#" className="flex items-center justify-between text-sm text-cine-textMuted hover:text-accent-lime transition-colors group">
                    <span>{article}</span>
                    <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
              ))}
            </ul>
            <a href="#" className="inline-block mt-8 text-sm font-bold text-accent-blue hover:text-white transition-colors">
              View all articles &rarr;
            </a>
          </motion.div>
        ))}
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-gradient-to-br from-cine-surface to-cine-black border border-white/10 rounded-3xl p-12 text-center relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2000&auto=format&fit=crop')] opacity-5 mix-blend-overlay" />
        <h2 className="font-display font-bold text-3xl mb-4 relative z-10">Still need help?</h2>
        <p className="text-cine-textMuted max-w-xl mx-auto mb-8 relative z-10 text-lg">
          I am available Monday through Friday, 9am to 5pm EST. I typically respond within 24 hours.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 relative z-10">
          <button className="bg-white text-cine-black px-8 py-4 rounded-full font-bold hover:bg-accent-lime transition-colors text-lg flex items-center justify-center gap-2">
            <Mail className="w-5 h-5" /> Contact Support
          </button>
          <button className="bg-transparent border border-white/20 text-white px-8 py-4 rounded-full font-bold hover:bg-white hover:text-cine-black transition-colors text-lg flex items-center justify-center gap-2">
            <MessageSquare className="w-5 h-5" /> Ask the Community
          </button>
        </div>
      </motion.div>
    </div>
  );
};
