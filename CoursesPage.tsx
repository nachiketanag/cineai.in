import React from 'react';
import { motion } from 'framer-motion';
import { Play, Layers, ArrowRight, Search, Filter } from 'lucide-react';

const COURSES = [
  {
    title: "The 30-Second AI Ad Spot",
    category: "Commercials",
    instructor: "Leo K.",
    duration: "4h 20m",
    image: "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?q=80&w=800&auto=format&fit=crop",
    accentColor: "#CCFF00",
    level: "Beginner",
    modules: 12
  },
  {
    title: "Narrative Storytelling with Sora",
    category: "Cinema",
    instructor: "Elena R.",
    duration: "6h 15m",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop",
    accentColor: "#2D5BFF",
    level: "Advanced",
    modules: 18
  },
  {
    title: "The 'Infinite Content' Engine",
    category: "Automation",
    instructor: "Marcus T.",
    duration: "3h 45m",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=800&auto=format&fit=crop",
    accentColor: "#FF6B6B",
    level: "Intermediate",
    modules: 10
  },
  {
    title: "Runway Gen-3 Masterclass",
    category: "VFX",
    instructor: "Sarah J.",
    duration: "5h 10m",
    image: "https://images.unsplash.com/photo-1535016120720-40c6874c3b13?q=80&w=800&auto=format&fit=crop",
    accentColor: "#9F55FF",
    level: "Advanced",
    modules: 15
  },
  {
    title: "AI Sound Design & Scoring",
    category: "Audio",
    instructor: "David B.",
    duration: "2h 50m",
    image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?q=80&w=800&auto=format&fit=crop",
    accentColor: "#FFD166",
    level: "Beginner",
    modules: 8
  },
  {
    title: "Freelance Agency Blueprint",
    category: "Business",
    instructor: "Jessica L.",
    duration: "4h 00m",
    image: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=800&auto=format&fit=crop",
    accentColor: "#CCFF00",
    level: "Intermediate",
    modules: 14
  },
  {
    title: "Midjourney Cinematic Prompts",
    category: "Pre-production",
    instructor: "Alex M.",
    duration: "3h 20m",
    image: "https://images.unsplash.com/photo-1682687220063-4742bd7fd538?q=80&w=800&auto=format&fit=crop",
    accentColor: "#FF6B6B",
    level: "Beginner",
    modules: 9
  },
  {
    title: "AI Character Consistency",
    category: "Animation",
    instructor: "Chris D.",
    duration: "5h 45m",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop",
    accentColor: "#9F55FF",
    level: "Advanced",
    modules: 16
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

export const CoursesPage = ({ onCourseClick }: { onCourseClick: () => void }) => {
  return (
    <div className="pt-24 pb-24 px-6 max-w-7xl mx-auto">
      <div className="mb-12">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-display font-bold text-4xl md:text-5xl mb-4"
        >
          Master AI Filmmaking
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-cine-textMuted max-w-2xl text-lg"
        >
          Explore our comprehensive library of courses designed to take you from beginner to booked professional.
        </motion.p>
      </div>

      {/* Filters and Search */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="flex flex-col md:flex-row gap-4 mb-12"
      >
        <div className="relative flex-grow max-w-md">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-cine-textMuted" />
          <input 
            type="text" 
            placeholder="Search courses..." 
            className="w-full bg-cine-surface border border-white/10 rounded-xl pl-12 pr-4 py-3 text-white focus:outline-none focus:border-accent-lime transition-colors"
          />
        </div>
        <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0 hide-scrollbar">
          {['All', 'Commercials', 'Cinema', 'Automation', 'VFX', 'Audio', 'Business'].map((cat, i) => (
            <button 
              key={cat}
              className={`px-4 py-2 rounded-lg whitespace-nowrap text-sm font-medium transition-colors ${i === 0 ? 'bg-white text-cine-black' : 'bg-cine-surface border border-white/10 text-cine-textMuted hover:text-white'}`}
            >
              {cat}
            </button>
          ))}
        </div>
      </motion.div>

      {/* Course Grid */}
      <motion.div 
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {COURSES.map((course, index) => (
          <motion.div 
            key={index}
            variants={fadeInUp}
            whileHover={{ y: -8 }}
            onClick={onCourseClick}
            className="group relative bg-cine-surface rounded-2xl overflow-hidden border border-white/5 hover:border-white/20 transition-colors duration-300 flex flex-col h-full cursor-pointer"
          >
            <div className="relative aspect-[4/3] overflow-hidden">
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.6 }}
                className="absolute inset-0"
              >
                   <img src={course.image} alt={course.title} className="w-full h-full object-cover" />
              </motion.div>
              
              <div className="absolute inset-0 bg-gradient-to-t from-cine-surface via-transparent to-transparent opacity-80" />
              
              <div className="absolute top-4 left-4 flex gap-2">
                <span className="px-3 py-1 bg-cine-black/60 backdrop-blur-md rounded-lg text-xs font-bold uppercase tracking-wider text-white border border-white/10">
                  {course.category}
                </span>
                <span className="px-3 py-1 bg-cine-black/60 backdrop-blur-md rounded-lg text-xs font-bold uppercase tracking-wider text-white border border-white/10">
                  {course.level}
                </span>
              </div>
            </div>

            <div className="p-6 flex flex-col flex-grow">
              <h3 className="font-display font-bold text-xl mb-2 group-hover:text-white transition-colors text-gray-100">
                {course.title}
              </h3>
              <p className="text-sm text-cine-textMuted mb-4">with {course.instructor}</p>
              
              <div className="mt-auto flex items-center justify-between pt-4 border-t border-white/5">
                <div className="flex items-center gap-4">
                  <span className="text-xs font-medium text-cine-textMuted flex items-center gap-1">
                    <Layers className="w-3 h-3" /> {course.modules} Modules
                  </span>
                  <span className="text-xs font-medium text-cine-textMuted flex items-center gap-1">
                    <Play className="w-3 h-3" /> {course.duration}
                  </span>
                </div>
                <button className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-white group-hover:text-cine-black transition-all">
                  <ArrowRight className="w-4 h-4 ml-0.5" />
                </button>
              </div>
            </div>

            <div 
              className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-[-1]"
              style={{ boxShadow: `0px 20px 40px -10px ${course.accentColor}40` }}
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};
