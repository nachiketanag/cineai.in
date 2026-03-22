import React from 'react';
import { motion } from 'framer-motion';
import { Download, FileText, Video, Link as LinkIcon, ArrowRight } from 'lucide-react';

const RESOURCES = [
  {
    title: "Midjourney Prompt Guide v6",
    type: "PDF Guide",
    icon: <FileText className="w-6 h-6" />,
    desc: "A comprehensive 50-page guide to mastering cinematic prompts in Midjourney v6.",
    image: "https://images.unsplash.com/photo-1682687220063-4742bd7fd538?q=80&w=800&auto=format&fit=crop",
    color: "from-accent-purple/20"
  },
  {
    title: "Runway Gen-3 Cheat Sheet",
    type: "Cheat Sheet",
    icon: <FileText className="w-6 h-6" />,
    desc: "Quick reference guide for camera movements, lighting, and style parameters.",
    image: "https://images.unsplash.com/photo-1535016120720-40c6874c3b13?q=80&w=800&auto=format&fit=crop",
    color: "from-accent-lime/20"
  },
  {
    title: "AI Sound Design Workflow",
    type: "Video Tutorial",
    icon: <Video className="w-6 h-6" />,
    desc: "A 20-minute breakdown of how to score a short film using ElevenLabs and Suno.",
    image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?q=80&w=800&auto=format&fit=crop",
    color: "from-accent-coral/20"
  },
  {
    title: "Notion Production Template",
    type: "Template",
    icon: <LinkIcon className="w-6 h-6" />,
    desc: "The exact Notion template I use to manage my AI film productions from script to screen.",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=800&auto=format&fit=crop",
    color: "from-accent-blue/20"
  },
  {
    title: "Top 100 AI Tools Directory",
    type: "Database",
    icon: <LinkIcon className="w-6 h-6" />,
    desc: "A curated, regularly updated database of the best AI tools for filmmakers.",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800&auto=format&fit=crop",
    color: "from-accent-lime/20"
  },
  {
    title: "Client Pitch Deck Template",
    type: "Template",
    icon: <FileText className="w-6 h-6" />,
    desc: "Win more freelance gigs with this proven pitch deck template for AI video services.",
    image: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=800&auto=format&fit=crop",
    color: "from-accent-purple/20"
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

export const FreeResourcesPage = () => {
  return (
    <div className="pt-24 pb-24 px-6 max-w-7xl mx-auto">
      <div className="mb-16 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-lime/10 border border-accent-lime/20 text-xs font-bold uppercase tracking-wider text-accent-lime mb-6"
        >
          <Download className="w-3 h-3" /> 100% Free
        </motion.div>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-display font-bold text-4xl md:text-6xl mb-6 leading-tight"
        >
          Free Tools & <br /> <span className="text-cine-textMuted">Resources</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-cine-textMuted max-w-2xl mx-auto text-lg"
        >
          Download my best guides, templates, and workflows to accelerate your AI filmmaking journey without spending a dime.
        </motion.p>
      </div>

      <motion.div 
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {RESOURCES.map((resource, index) => (
          <motion.div 
            key={index}
            variants={fadeInUp}
            whileHover={{ y: -8 }}
            className="group relative bg-cine-surface rounded-3xl overflow-hidden border border-white/5 hover:border-white/20 transition-colors duration-300 flex flex-col h-full cursor-pointer"
          >
            <div className="relative h-48 overflow-hidden">
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.6 }}
                className="absolute inset-0"
              >
                   <img src={resource.image} alt={resource.title} className="w-full h-full object-cover" />
              </motion.div>
              
              <div className={`absolute inset-0 bg-gradient-to-t ${resource.color} via-cine-black/60 to-cine-black/30`} />
              
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 bg-cine-black/60 backdrop-blur-md rounded-lg text-xs font-bold uppercase tracking-wider text-white border border-white/10 flex items-center gap-2">
                  {resource.icon} {resource.type}
                </span>
              </div>
            </div>

            <div className="p-8 flex flex-col flex-grow">
              <h3 className="font-display font-bold text-2xl mb-3 group-hover:text-white transition-colors text-gray-100">
                {resource.title}
              </h3>
              <p className="text-sm text-cine-textMuted mb-6 leading-relaxed">
                {resource.desc}
              </p>
              
              <div className="mt-auto pt-6 border-t border-white/5">
                <button className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-accent-lime group-hover:gap-3 transition-all">
                  Download Now <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
      
      {/* Newsletter CTA */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-24 bg-cine-surface border border-white/10 rounded-3xl p-12 text-center relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-accent-lime/5 to-transparent pointer-events-none" />
        <h2 className="font-display font-bold text-3xl mb-4 relative z-10">Want more free resources?</h2>
        <p className="text-cine-textMuted max-w-xl mx-auto mb-8 relative z-10">
          Join 50,000+ creators getting my best AI filmmaking prompts, workflows, and tool updates delivered every week.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto relative z-10">
          <input 
            type="email" 
            placeholder="Enter your email" 
            className="flex-grow bg-cine-black border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent-lime transition-colors"
          />
          <button className="bg-white text-cine-black px-6 py-3 rounded-xl font-bold hover:bg-accent-lime transition-colors whitespace-nowrap">
            Subscribe
          </button>
        </div>
      </motion.div>
    </div>
  );
};
