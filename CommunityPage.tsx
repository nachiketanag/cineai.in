import React from 'react';
import { motion } from 'framer-motion';
import { Users, MessageCircle, Video, Award, ArrowRight, Star } from 'lucide-react';

const FEATURES = [
  {
    title: "Private Discord Server",
    desc: "Join 5,000+ AI filmmakers sharing workflows, prompts, and feedback 24/7.",
    icon: <MessageCircle className="w-6 h-6" />,
    color: "text-accent-blue"
  },
  {
    title: "Weekly Live Q&A",
    desc: "Get your questions answered live by industry experts and top creators.",
    icon: <Video className="w-6 h-6" />,
    color: "text-accent-coral"
  },
  {
    title: "Monthly Challenges",
    desc: "Compete in themed filmmaking challenges for prizes and recognition.",
    icon: <Award className="w-6 h-6" />,
    color: "text-accent-lime"
  },
  {
    title: "Exclusive Job Board",
    desc: "Find freelance gigs and full-time roles from top brands and agencies.",
    icon: <Users className="w-6 h-6" />,
    color: "text-accent-purple"
  }
];

const TESTIMONIALS = [
  {
    name: "Alex Rivera",
    role: "Freelance Director",
    text: "The community feedback alone is worth 10x the price. I landed my first $5k commercial gig through a connection I made here.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop"
  },
  {
    name: "Sarah Chen",
    role: "Content Creator",
    text: "I was struggling with Midjourney consistency for weeks. One post in the Discord and someone shared a workflow that solved it instantly.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop"
  },
  {
    name: "Marcus Johnson",
    role: "VFX Artist",
    text: "The level of talent in this group is insane. It pushes me to be better every single day. Best investment in my career.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop"
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

export const CommunityPage = ({ onJoinClick }: { onJoinClick: () => void }) => {
  return (
    <div className="pt-24 pb-24 px-6 max-w-7xl mx-auto">
      {/* Hero Section */}
      <div className="text-center mb-24">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-blue/10 border border-accent-blue/20 text-xs font-bold uppercase tracking-wider text-accent-blue mb-6"
        >
          <Users className="w-3 h-3" /> The CineAI Network
        </motion.div>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-display font-bold text-4xl md:text-6xl mb-6 leading-tight"
        >
          Don't Build in <span className="text-cine-textMuted">Isolation.</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-cine-textMuted max-w-2xl mx-auto text-lg mb-8"
        >
          Join the most active community of AI filmmakers, VFX artists, and creative directors on the internet.
        </motion.p>
        <motion.button 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          onClick={onJoinClick}
          className="px-8 py-4 bg-accent-lime text-cine-black font-bold rounded-full hover:bg-white transition-colors text-lg"
        >
          Join the Community
        </motion.button>
      </div>

      {/* Features Grid */}
      <motion.div 
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24"
      >
        {FEATURES.map((feature, index) => (
          <motion.div 
            key={index}
            variants={fadeInUp}
            className="bg-cine-surface border border-white/5 rounded-3xl p-8 hover:border-white/20 transition-colors"
          >
            <div className={`w-12 h-12 rounded-xl bg-cine-black flex items-center justify-center mb-6 ${feature.color}`}>
              {feature.icon}
            </div>
            <h3 className="font-display font-bold text-2xl mb-4">{feature.title}</h3>
            <p className="text-cine-textMuted leading-relaxed">{feature.desc}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* Testimonials */}
      <div className="mb-24">
        <div className="text-center mb-12">
          <h2 className="font-display font-bold text-3xl md:text-4xl mb-4">What Members Say</h2>
          <p className="text-cine-textMuted max-w-xl mx-auto">Real stories from creators who leveled up their careers inside the CineAI network.</p>
        </div>
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {TESTIMONIALS.map((testimonial, index) => (
            <motion.div 
              key={index}
              variants={fadeInUp}
              className="bg-cine-surface border border-white/5 rounded-3xl p-8 flex flex-col h-full"
            >
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-accent-lime fill-current" />
                ))}
              </div>
              <p className="text-gray-300 italic mb-8 flex-grow leading-relaxed">"{testimonial.text}"</p>
              <div className="flex items-center gap-4">
                <img src={testimonial.image} alt={testimonial.name} className="w-12 h-12 rounded-full object-cover" />
                <div>
                  <h4 className="font-bold text-white">{testimonial.name}</h4>
                  <p className="text-xs text-cine-textMuted">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Final CTA */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-gradient-to-br from-accent-blue/20 to-cine-surface border border-white/10 rounded-3xl p-12 text-center relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2000&auto=format&fit=crop')] opacity-5 mix-blend-overlay" />
        <h2 className="font-display font-bold text-3xl md:text-5xl mb-6 relative z-10">Ready to level up?</h2>
        <p className="text-cine-textMuted max-w-xl mx-auto mb-8 relative z-10 text-lg">
          Get instant access to the community, weekly live calls, and our entire library of resources when you join CineAI Pro.
        </p>
        <button 
          onClick={onJoinClick}
          className="relative z-10 bg-white text-cine-black px-8 py-4 rounded-full font-bold hover:bg-accent-lime transition-colors text-lg flex items-center gap-2 mx-auto"
        >
          Become a Member <ArrowRight className="w-5 h-5" />
        </button>
      </motion.div>
    </div>
  );
};
