import React from 'react';
import { motion } from 'framer-motion';
import { Play, Users, Globe, Award, ArrowRight } from 'lucide-react';

const TEAM = [
  {
    name: "Alex Rivera",
    role: "Founder & Lead Instructor",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop",
    bio: "Former commercial director turned AI filmmaker. Directed campaigns for Nike and Sony using generative AI."
  },
  {
    name: "Sarah Chen",
    role: "Head of Curriculum",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400&auto=format&fit=crop",
    bio: "VFX supervisor with 10 years experience. Specializes in integrating AI tools into traditional pipelines."
  },
  {
    name: "Marcus Johnson",
    role: "Community Manager",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&auto=format&fit=crop",
    bio: "Passionate about connecting creators. Hosts our weekly live Q&As and manages the Discord."
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

export const AboutPage = ({ onJoinClick }: { onJoinClick: () => void }) => {
  return (
    <div className="pt-24 pb-24 px-6 max-w-7xl mx-auto">
      {/* Hero Section */}
      <div className="text-center mb-24">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-purple/10 border border-accent-purple/20 text-xs font-bold uppercase tracking-wider text-accent-purple mb-6"
        >
          <Play className="w-3 h-3" /> Our Story
        </motion.div>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-display font-bold text-4xl md:text-6xl mb-6 leading-tight"
        >
          Democratizing <br /> <span className="text-cine-textMuted">Cinematic Storytelling.</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-cine-textMuted max-w-2xl mx-auto text-lg mb-8"
        >
          We believe that anyone with a story to tell should have the tools to tell it. AI is leveling the playing field, and we're here to teach you how to play.
        </motion.p>
      </div>

      {/* Mission & Vision */}
      <motion.div 
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-24 items-center"
      >
        <motion.div variants={fadeInUp} className="relative aspect-video rounded-3xl overflow-hidden border border-white/10">
          <img src="https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=1200&auto=format&fit=crop" alt="Filmmaking process" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-cine-black/80 to-transparent" />
          <div className="absolute bottom-6 left-6 flex items-center gap-4">
            <div className="w-12 h-12 bg-accent-lime rounded-full flex items-center justify-center">
              <Play className="w-5 h-5 text-cine-black ml-1" />
            </div>
            <span className="font-bold text-white tracking-wider uppercase text-sm">Watch our manifesto</span>
          </div>
        </motion.div>
        
        <motion.div variants={fadeInUp}>
          <h2 className="font-display font-bold text-3xl mb-6">The New Era of Filmmaking</h2>
          <p className="text-cine-textMuted leading-relaxed mb-6">
            For decades, high-end filmmaking was gatekept by massive budgets, expensive gear, and exclusive networks. Generative AI has shattered those barriers.
          </p>
          <p className="text-cine-textMuted leading-relaxed mb-8">
            CineAI was founded in 2024 with a simple mission: to empower the next generation of creators with the skills to produce Hollywood-quality content from their laptops. We don't just teach tools; we teach the art of storytelling augmented by technology.
          </p>
          
          <div className="grid grid-cols-2 gap-6">
            <div>
              <div className="text-3xl font-bold text-accent-lime mb-2">50k+</div>
              <div className="text-sm text-cine-textMuted uppercase tracking-wider font-bold">Students</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-accent-blue mb-2">120+</div>
              <div className="text-sm text-cine-textMuted uppercase tracking-wider font-bold">Countries</div>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Values */}
      <div className="mb-24">
        <div className="text-center mb-12">
          <h2 className="font-display font-bold text-3xl md:text-4xl mb-4">Our Core Values</h2>
          <p className="text-cine-textMuted max-w-xl mx-auto">The principles that guide everything we build and teach.</p>
        </div>
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {[
            { icon: <Users className="w-6 h-6 text-accent-blue" />, title: "Community First", desc: "We learn better together. Collaboration over competition." },
            { icon: <Globe className="w-6 h-6 text-accent-lime" />, title: "Accessible Education", desc: "High-quality training shouldn't cost a year's tuition." },
            { icon: <Award className="w-6 h-6 text-accent-purple" />, title: "Story Over Spectacle", desc: "AI is a tool. The story is the soul. We teach both." }
          ].map((value, index) => (
            <motion.div 
              key={index}
              variants={fadeInUp}
              className="bg-cine-surface border border-white/5 rounded-3xl p-8 text-center hover:border-white/20 transition-colors"
            >
              <div className="w-16 h-16 mx-auto bg-cine-black rounded-2xl flex items-center justify-center mb-6">
                {value.icon}
              </div>
              <h3 className="font-bold text-xl mb-4">{value.title}</h3>
              <p className="text-cine-textMuted leading-relaxed">{value.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Team */}
      <div className="mb-24">
        <div className="text-center mb-12">
          <h2 className="font-display font-bold text-3xl md:text-4xl mb-4">Meet the Team</h2>
          <p className="text-cine-textMuted max-w-xl mx-auto">Industry veterans passionate about the future of creation.</p>
        </div>
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {TEAM.map((member, index) => (
            <motion.div 
              key={index}
              variants={fadeInUp}
              className="group relative bg-cine-surface rounded-3xl overflow-hidden border border-white/5 hover:border-white/20 transition-colors"
            >
              <div className="aspect-square overflow-hidden">
                <img src={member.image} alt={member.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-6">
                <h3 className="font-bold text-xl mb-1">{member.name}</h3>
                <p className="text-xs font-bold uppercase tracking-wider text-accent-lime mb-4">{member.role}</p>
                <p className="text-sm text-cine-textMuted leading-relaxed">{member.bio}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* CTA */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-accent-lime rounded-3xl p-12 text-center relative overflow-hidden"
      >
        <h2 className="font-display font-bold text-3xl md:text-5xl mb-6 text-cine-black relative z-10">Join the Revolution</h2>
        <p className="text-cine-black/80 max-w-xl mx-auto mb-8 relative z-10 text-lg font-medium">
          Start your journey today and learn how to create cinematic content that stands out.
        </p>
        <button 
          onClick={onJoinClick}
          className="relative z-10 bg-cine-black text-white px-8 py-4 rounded-full font-bold hover:bg-white hover:text-cine-black transition-colors text-lg flex items-center gap-2 mx-auto"
        >
          Start Learning <ArrowRight className="w-5 h-5" />
        </button>
      </motion.div>
    </div>
  );
};
