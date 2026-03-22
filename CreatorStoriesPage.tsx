import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, ArrowRight, UserCircle } from 'lucide-react';

const STORIES = [
  {
    title: "From Wedding Videographer to AI Commercial Director",
    author: "James Miller",
    date: "March 12, 2024",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=800&auto=format&fit=crop",
    excerpt: "How James used Midjourney and Runway to pitch and win a ₹20L campaign for a national beverage brand without shooting a single frame of footage."
  },
  {
    title: "Building a 100k Follower TikTok Channel in 30 Days",
    author: "Sophia Lin",
    date: "February 28, 2024",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=800&auto=format&fit=crop",
    excerpt: "The exact workflow Sophia used to generate daily viral content using ChatGPT for scripts, ElevenLabs for voiceovers, and Sora for visuals."
  },
  {
    title: "The Indie Film Revolution: Scoring with AI",
    author: "David Chen",
    date: "February 15, 2024",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?q=80&w=800&auto=format&fit=crop",
    excerpt: "A deep dive into how an indie filmmaker composed an entire orchestral score for his feature film using Suno and Udio, saving thousands in budget."
  },
  {
    title: "Automating the Agency: How We Scaled Output 5x",
    author: "The Creative Co.",
    date: "January 30, 2024",
    readTime: "10 min read",
    image: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=800&auto=format&fit=crop",
    excerpt: "An inside look at a boutique agency that integrated AI into their pre-production and VFX pipelines, drastically reducing turnaround times."
  },
  {
    title: "Creating Consistent Characters Across 50 Generations",
    author: "Elena Rodriguez",
    date: "January 12, 2024",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop",
    excerpt: "Elena shares her secret Midjourney prompt structures and seed manipulation techniques for maintaining character identity in a graphic novel."
  },
  {
    title: "The Ethics of AI Art: A Creator's Perspective",
    author: "Marcus Thorne",
    date: "December 05, 2023",
    readTime: "12 min read",
    image: "https://images.unsplash.com/photo-1535016120720-40c6874c3b13?q=80&w=800&auto=format&fit=crop",
    excerpt: "A thoughtful exploration of copyright, inspiration, and the future of human creativity in the age of generative models."
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

export const CreatorStoriesPage = () => {
  return (
    <div className="pt-24 pb-24 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-coral/10 border border-accent-coral/20 text-xs font-bold uppercase tracking-wider text-accent-coral mb-6"
        >
          <BookOpen className="w-3 h-3" /> Blog & Interviews
        </motion.div>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-display font-bold text-4xl md:text-6xl mb-6 leading-tight"
        >
          Creator <span className="text-cine-textMuted">Stories.</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-cine-textMuted max-w-2xl mx-auto text-lg"
        >
          Deep dives, interviews, and case studies from the frontlines of the AI filmmaking revolution.
        </motion.p>
      </div>

      <motion.div 
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {STORIES.map((story, index) => (
          <motion.article 
            key={index}
            variants={fadeInUp}
            className="group relative bg-cine-surface rounded-3xl overflow-hidden border border-white/5 hover:border-white/20 transition-colors duration-300 flex flex-col h-full cursor-pointer"
          >
            <div className="relative aspect-[4/3] overflow-hidden">
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.6 }}
                className="absolute inset-0"
              >
                <img src={story.image} alt={story.title} className="w-full h-full object-cover" />
              </motion.div>
              <div className="absolute inset-0 bg-gradient-to-t from-cine-surface via-transparent to-transparent opacity-80" />
            </div>

            <div className="p-8 flex flex-col flex-grow">
              <div className="flex items-center gap-4 text-xs text-cine-textMuted mb-4">
                <span>{story.date}</span>
                <span className="w-1 h-1 bg-white/20 rounded-full"></span>
                <span>{story.readTime}</span>
              </div>
              
              <h3 className="font-display font-bold text-2xl mb-4 group-hover:text-accent-coral transition-colors text-gray-100 leading-snug">
                {story.title}
              </h3>
              
              <p className="text-sm text-cine-textMuted mb-6 leading-relaxed flex-grow">
                {story.excerpt}
              </p>
              
              <div className="pt-6 border-t border-white/5 flex items-center justify-between mt-auto">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                    <UserCircle className="w-5 h-5 text-gray-400" />
                  </div>
                  <span className="text-sm font-bold text-white">{story.author}</span>
                </div>
                <button className="text-accent-coral group-hover:translate-x-1 transition-transform">
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </motion.article>
        ))}
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-24 text-center"
      >
        <button className="px-8 py-4 bg-transparent border border-white/20 text-white font-bold rounded-full hover:bg-white hover:text-cine-black transition-colors">
          Load More Stories
        </button>
      </motion.div>
    </div>
  );
};
