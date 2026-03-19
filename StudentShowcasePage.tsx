import React from 'react';
import { motion } from 'framer-motion';
import { Play, Star, ExternalLink, Sparkles } from 'lucide-react';

const SHOWCASE_ITEMS = [
  {
    title: "Neon Genesis: The AI Short",
    student: "David Kim",
    role: "VFX Artist",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop",
    tools: ["Midjourney v6", "Runway Gen-3", "ElevenLabs"],
    description: "A 2-minute cyberpunk short film created entirely with generative AI. Won 'Best AI Short' at the Digital Arts Festival."
  },
  {
    title: "Nike 'Air' Spec Commercial",
    student: "Sarah Jenkins",
    role: "Commercial Director",
    image: "https://images.unsplash.com/photo-1552346154-21d32810baa3?q=80&w=800&auto=format&fit=crop",
    tools: ["Sora", "Magnific AI", "Topaz Video"],
    description: "A spec commercial that landed Sarah a $15k contract with a major sports brand. Completed in just 4 days."
  },
  {
    title: "Echoes of Eternity",
    student: "Marcus Thorne",
    role: "Indie Filmmaker",
    image: "https://images.unsplash.com/photo-1535016120720-40c6874c3b13?q=80&w=800&auto=format&fit=crop",
    tools: ["Stable Video Diffusion", "Suno", "CapCut"],
    description: "An ambient visual album exploring themes of time and memory. Featured on Nowness."
  },
  {
    title: "The Last Barista",
    student: "Elena Rodriguez",
    role: "Content Creator",
    image: "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=80&w=800&auto=format&fit=crop",
    tools: ["Midjourney", "Pika Labs", "Epidemic Sound"],
    description: "A viral TikTok series about a robot making coffee in a post-apocalyptic world. 5M+ views."
  },
  {
    title: "Symphony of the Cells",
    student: "Dr. James Chen",
    role: "Medical Animator",
    image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?q=80&w=800&auto=format&fit=crop",
    tools: ["Runway Gen-3", "Krea AI", "DaVinci Resolve"],
    description: "Educational visualization of cellular processes used in university biology courses."
  },
  {
    title: "Cyberpunk Cityscapes",
    student: "Anita Patel",
    role: "Environment Artist",
    image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?q=80&w=800&auto=format&fit=crop",
    tools: ["Unreal Engine 5", "Midjourney", "Luma AI"],
    description: "A collection of 3D environments generated from 2D AI concepts. Now selling as asset packs."
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

export const StudentShowcasePage = () => {
  return (
    <div className="pt-24 pb-24 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-lime/10 border border-accent-lime/20 text-xs font-bold uppercase tracking-wider text-accent-lime mb-6"
        >
          <Sparkles className="w-3 h-3" /> Hall of Fame
        </motion.div>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-display font-bold text-4xl md:text-6xl mb-6 leading-tight"
        >
          Student <span className="text-cine-textMuted">Showcase.</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-cine-textMuted max-w-2xl mx-auto text-lg"
        >
          Explore the incredible films, commercials, and art created by CineAI students using the workflows taught in our courses.
        </motion.p>
      </div>

      <motion.div 
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {SHOWCASE_ITEMS.map((item, index) => (
          <motion.div 
            key={index}
            variants={fadeInUp}
            className="group relative bg-cine-surface rounded-3xl overflow-hidden border border-white/5 hover:border-white/20 transition-colors duration-300 flex flex-col h-full"
          >
            <div className="relative aspect-video overflow-hidden cursor-pointer">
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.6 }}
                className="absolute inset-0"
              >
                <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
              </motion.div>
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity transform scale-75 group-hover:scale-100">
                  <Play className="w-5 h-5 text-white ml-1" fill="currentColor" />
                </div>
              </div>
            </div>

            <div className="p-6 flex flex-col flex-grow">
              <h3 className="font-display font-bold text-xl mb-2 text-white group-hover:text-accent-lime transition-colors">
                {item.title}
              </h3>
              <p className="text-sm text-cine-textMuted mb-4 leading-relaxed flex-grow">
                {item.description}
              </p>
              
              <div className="mb-6">
                <p className="text-xs font-bold uppercase tracking-wider text-cine-textMuted mb-2">Tools Used</p>
                <div className="flex flex-wrap gap-2">
                  {item.tools.map(tool => (
                    <span key={tool} className="px-2 py-1 bg-white/5 rounded text-xs text-gray-300 border border-white/5">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                <div>
                  <p className="text-sm font-bold text-white">{item.student}</p>
                  <p className="text-xs text-cine-textMuted">{item.role}</p>
                </div>
                <button className="text-cine-textMuted hover:text-white transition-colors">
                  <ExternalLink className="w-5 h-5" />
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-24 text-center"
      >
        <h2 className="font-display font-bold text-3xl mb-6">Want to be featured?</h2>
        <p className="text-cine-textMuted mb-8 max-w-xl mx-auto">
          We regularly feature outstanding student work in our newsletter and showcase. Join a course, create something amazing, and share it in our Discord.
        </p>
        <button className="px-8 py-4 bg-white text-cine-black font-bold rounded-full hover:bg-accent-lime transition-colors">
          Submit Your Work
        </button>
      </motion.div>
    </div>
  );
};
