import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Play, 
  ArrowRight, 
  CheckCircle2, 
  Menu, 
  X, 
  ChevronDown, 
  Star,
  Film,
  Zap,
  Users,
  Layers,
  MonitorPlay,
  Cpu,
  Wand2,
  Video,
  Clapperboard,
  MessageCircle,
  Share2,
  Award,
  TrendingUp
} from 'lucide-react';

// --- Animation Variants ---

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: "easeOut" } 
  }
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1, 
    transition: { duration: 0.8, ease: "easeOut" } 
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1
    }
  }
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { 
    opacity: 1, 
    scale: 1, 
    transition: { duration: 0.6, ease: "easeOut" } 
  }
};

const slideInLeft = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const slideInRight = {
  hidden: { opacity: 0, x: 30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

// --- Components ---

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "circOut" }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-[#0B0B0C]/80 border-b border-white/5"
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2 cursor-pointer group">
          <div className="w-8 h-8 bg-accent-lime rounded-lg flex items-center justify-center transform group-hover:rotate-12 transition-transform">
            <Play fill="#0B0B0C" className="w-4 h-4 text-cine-black" />
          </div>
          <span className="font-display font-bold text-xl tracking-tight">CineAI.in</span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {['Courses', 'Free Resources', 'Community', 'Pricing', 'About'].map((item, i) => (
            <motion.a 
              key={item} 
              href="#" 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + (i * 0.1) }}
              className="text-sm font-medium text-cine-textMuted hover:text-white transition-colors"
            >
              {item}
            </motion.a>
          ))}
        </div>

        {/* Desktop CTA */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6 }}
          className="hidden md:flex items-center gap-4"
        >
          <a href="#" className="text-sm font-medium hover:text-white">Log in</a>
          <button className="px-5 py-2.5 bg-accent-lime text-cine-black font-bold text-sm rounded-full hover:bg-white transition-colors">
            Start Learning
          </button>
        </motion.div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-cine-surface border-b border-white/5 overflow-hidden"
          >
            <div className="px-6 py-8 flex flex-col gap-6">
              {['Courses', 'Free Resources', 'Community', 'Pricing', 'About'].map((item) => (
                <a key={item} href="#" className="text-lg font-medium text-white">
                  {item}
                </a>
              ))}
              <div className="h-px bg-white/10 w-full my-2"></div>
              <button className="w-full py-3 bg-accent-lime text-cine-black font-bold rounded-lg">
                Start Learning
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-screen pt-20 flex items-center justify-center overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-cine-black">
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-accent-blue/20 blur-[120px] rounded-full mix-blend-screen animate-pulse duration-[8000ms]"></div>
        <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-accent-coral/10 blur-[120px] rounded-full mix-blend-screen"></div>
        <div className="absolute top-[40%] left-[50%] w-[30%] h-[30%] bg-accent-lime/5 blur-[100px] rounded-full -translate-x-1/2 -translate-y-1/2"></div>
      </div>

      {/* Floating Shapes */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Sphere */}
        <motion.div 
          animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[15%] right-[15%] w-24 h-24 md:w-32 md:h-32 rounded-full border border-white/10 bg-gradient-to-br from-white/5 to-transparent backdrop-blur-sm"
        />
        {/* Triangle (CSS Border Hack) */}
        <motion.div 
          animate={{ y: [0, 30, 0], rotate: [0, -5, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-[20%] left-[10%] w-0 h-0 border-l-[40px] border-l-transparent border-r-[40px] border-r-transparent border-b-[70px] border-b-white/5 opacity-50 backdrop-blur-sm"
        />
        {/* Donut/Torus representation */}
        <motion.div 
          animate={{ y: [0, -15, 0], rotate: [0, 360, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-[30%] left-[5%] w-16 h-16 border-4 border-accent-lime/20 rounded-full"
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-accent-lime text-xs font-bold tracking-wide uppercase mb-6 backdrop-blur-md">
            New: Sora & Veo Workflows Available
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-display font-bold text-5xl md:text-7xl lg:text-8xl leading-[1.1] mb-8 tracking-tight"
        >
          Build Your <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/50">
            AI Filmmaking Career
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl text-cine-textMuted max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Stop watching the future—direct it. Master AI ads, viral reels, cinematic video, and automation workflows in one premium academy.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button className="w-full sm:w-auto px-8 py-4 bg-accent-lime text-cine-black font-bold text-lg rounded-full hover:bg-white hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 group">
            Start All-Access Free Trial
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </button>
          
          <button className="w-full sm:w-auto px-8 py-4 bg-transparent border border-white/20 text-white font-medium text-lg rounded-full hover:bg-white/10 hover:border-white transition-all duration-300 flex items-center justify-center gap-2">
            <Play className="w-5 h-5 fill-current" />
            Watch Free Masterclass
          </button>
        </motion.div>
        
        {/* Trusted Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-20 pt-10 border-t border-white/5"
        >
          <p className="text-sm text-cine-textMuted mb-6">Course alumini work at</p>
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-40 hover:opacity-100 transition-opacity duration-500"
          >
             {["NETFLIX", "ADOBE", "OGILVY", "VICE"].map((brand, i) => (
                <motion.span 
                  key={i} 
                  variants={fadeInUp}
                  className="text-xl font-display font-bold tracking-widest grayscale hover:grayscale-0 transition-all"
                >
                  {brand}
                </motion.span>
             ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

const ToolsSection = () => {
  const tools = [
    "Runway", "Pika", "Sora", "Midjourney", "After Effects", "Premiere Pro", 
    "Blender", "Unreal Engine", "Photoshop", "DaVinci Resolve", "ElevenLabs", "Topaz AI"
  ];

  return (
    <section className="py-20 border-b border-white/5 bg-cine-black overflow-hidden relative">
      <div className="absolute inset-0 bg-gradient-to-r from-cine-black via-transparent to-cine-black z-20 pointer-events-none"></div>
      
      <div className="text-center mb-12 relative z-10 px-6">
        <motion.h2 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="font-display font-bold text-3xl md:text-4xl mb-3"
        >
          Learn the Tools
        </motion.h2>
        <motion.p 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          transition={{ delay: 0.1 }}
          className="text-cine-textMuted"
        >
          Master the AI video tools professionals use.
        </motion.p>
      </div>

      <div className="relative flex overflow-x-hidden group">
        <motion.div 
          className="flex gap-12 whitespace-nowrap py-4"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, ease: "linear", duration: 30 }}
        >
          {[...tools, ...tools, ...tools].map((tool, index) => (
            <div 
              key={index} 
              className="flex items-center gap-2 text-2xl md:text-4xl font-display font-bold text-white/20 hover:text-white/80 hover:text-accent-lime transition-all duration-300 cursor-default"
            >
              <Cpu className="w-6 h-6 md:w-8 md:h-8 opacity-50" />
              {tool}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const FilterStrip = () => {
  const filters = [
    { id: 'all', label: 'All Courses' },
    { id: 'ads', label: 'AI Commercials' },
    { id: 'reels', label: 'Viral Reels' },
    { id: 'cinema', label: 'Cinema Diffusion' },
    { id: 'automation', label: 'Agent Workflows' },
    { id: 'freelance', label: 'Freelance Biz' },
  ];
  const [active, setActive] = useState('all');

  return (
    <div className="sticky top-20 z-40 bg-cine-black/90 backdrop-blur-xl border-b border-white/5 py-4 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="flex items-center gap-3 overflow-x-auto no-scrollbar pb-1 md:pb-0"
        >
          {filters.map((filter) => (
            <motion.button
              key={filter.id}
              variants={fadeInUp}
              onClick={() => setActive(filter.id)}
              className={`
                relative px-5 py-2.5 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-300
                ${active === filter.id 
                  ? 'text-cine-black bg-white' 
                  : 'text-cine-textMuted bg-cine-surface hover:bg-cine-surfaceLight hover:text-white'
                }
              `}
            >
              {filter.label}
              {active === filter.id && (
                 <motion.div
                  layoutId="activeFilterGlow"
                  className="absolute inset-0 rounded-full shadow-[0_0_20px_rgba(255,255,255,0.3)] z-[-1]"
                 />
              )}
            </motion.button>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

interface CourseCardProps {
  title: string;
  category: string;
  instructor: string;
  duration: string;
  image: string;
  accentColor?: string;
  variants?: any;
}

const CourseCard: React.FC<CourseCardProps> = ({ title, category, instructor, duration, image, accentColor = "#2D5BFF", variants }) => {
  return (
    <motion.div 
      variants={variants}
      whileHover={{ y: -8 }}
      className="group relative bg-cine-surface rounded-2xl overflow-hidden border border-white/5 hover:border-white/20 transition-colors duration-300 flex flex-col h-full"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.6 }}
          className="absolute inset-0"
        >
             <img src={image} alt={title} className="w-full h-full object-cover" />
        </motion.div>
        
        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-cine-surface via-transparent to-transparent opacity-80" />
        
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 bg-cine-black/60 backdrop-blur-md rounded-lg text-xs font-bold uppercase tracking-wider text-white border border-white/10">
            {category}
          </span>
        </div>
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <h3 className="font-display font-bold text-xl mb-2 group-hover:text-white transition-colors text-gray-100">
          {title}
        </h3>
        <p className="text-sm text-cine-textMuted mb-4">with {instructor}</p>
        
        <div className="mt-auto flex items-center justify-between pt-4 border-t border-white/5">
          <span className="text-xs font-medium text-cine-textMuted flex items-center gap-1">
            <Layers className="w-3 h-3" /> {duration}
          </span>
          <button className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-white group-hover:text-cine-black transition-all">
            <Play className="w-3 h-3 fill-current ml-0.5" />
          </button>
        </div>
      </div>

      {/* Hover Glow Effect */}
      <div 
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-[-1]"
        style={{ boxShadow: `0px 20px 40px -10px ${accentColor}40` }} // 40 is hex opacity
      />
    </motion.div>
  );
};

const CourseGrid = () => {
  const courses = [
    {
      title: "The 30-Second AI Ad Spot",
      category: "Commercials",
      instructor: "Leo K.",
      duration: "4h 20m",
      image: "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?q=80&w=800&auto=format&fit=crop",
      accentColor: "#CCFF00"
    },
    {
      title: "Narrative Storytelling with Sora",
      category: "Cinema",
      instructor: "Elena R.",
      duration: "6h 15m",
      image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop",
      accentColor: "#2D5BFF"
    },
    {
      title: "The 'Infinite Content' Engine",
      category: "Automation",
      instructor: "Marcus T.",
      duration: "3h 45m",
      image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=800&auto=format&fit=crop",
      accentColor: "#FF6B6B"
    },
    {
      title: "Runway Gen-3 Masterclass",
      category: "VFX",
      instructor: "Sarah J.",
      duration: "5h 10m",
      image: "https://images.unsplash.com/photo-1535016120720-40c6874c3b13?q=80&w=800&auto=format&fit=crop",
      accentColor: "#9F55FF"
    },
    {
      title: "AI Sound Design & Scoring",
      category: "Audio",
      instructor: "David B.",
      duration: "2h 50m",
      image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?q=80&w=800&auto=format&fit=crop",
      accentColor: "#FFD166"
    },
    {
      title: "Freelance Agency Blueprint",
      category: "Business",
      instructor: "Jessica L.",
      duration: "4h 00m",
      image: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=800&auto=format&fit=crop",
      accentColor: "#CCFF00"
    }
  ];

  return (
    <section className="py-24 px-6 max-w-7xl mx-auto">
      <div className="flex items-end justify-between mb-12">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.h2 variants={fadeInUp} className="font-display font-bold text-3xl md:text-4xl mb-4">Featured Courses</motion.h2>
          <motion.p variants={fadeInUp} className="text-cine-textMuted max-w-md">Hand-picked curriculums designed to take you from beginner to booked professional.</motion.p>
        </motion.div>
        <motion.a 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          href="#" 
          className="hidden md:flex items-center gap-2 text-accent-lime font-medium hover:text-white transition-colors"
        >
          View all courses <ArrowRight className="w-4 h-4" />
        </motion.a>
      </div>

      <motion.div 
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {courses.map((course, index) => (
          <CourseCard key={index} {...course} variants={fadeInUp} />
        ))}
      </motion.div>
      
      <div className="mt-12 md:hidden text-center">
        <a href="#" className="inline-flex items-center gap-2 text-accent-lime font-medium hover:text-white transition-colors">
          View all courses <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </section>
  );
};

const LearningPaths = () => {
  const paths = [
    {
      title: "AI Video Creator",
      desc: "Master ads, reels, and short films for social media dominance.",
      icon: <Video className="w-6 h-6" />,
      image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44c?q=80&w=800&auto=format&fit=crop",
      color: "from-accent-blue/20"
    },
    {
      title: "AI Filmmaker Pro",
      desc: "Deep dive into cinematic storytelling, directing, and diffusion.",
      icon: <Clapperboard className="w-6 h-6" />,
      image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=800&auto=format&fit=crop",
      color: "from-accent-purple/20"
    },
    {
      title: "Automation Systems",
      desc: "Build no-code content engines that scale your output 10x.",
      icon: <Zap className="w-6 h-6" />,
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800&auto=format&fit=crop",
      color: "from-accent-coral/20"
    }
  ];

  return (
    <section className="py-24 px-6 max-w-7xl mx-auto border-t border-white/5">
      <div className="text-center mb-16">
        <motion.div
           initial="hidden"
           whileInView="visible"
           viewport={{ once: true }}
           variants={staggerContainer}
        >
           <motion.h2 variants={fadeInUp} className="font-display font-bold text-3xl md:text-4xl mb-4">Learn the Trade</motion.h2>
           <motion.p variants={fadeInUp} className="text-cine-textMuted max-w-xl mx-auto">Choose a structured learning path designed to get you from zero to professional in record time.</motion.p>
        </motion.div>
      </div>

      <motion.div 
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-3 gap-8"
      >
        {paths.map((path, index) => (
          <motion.div 
            key={index}
            variants={fadeInUp}
            whileHover={{ y: -10 }}
            className="relative h-[480px] rounded-3xl overflow-hidden group cursor-pointer border border-white/5"
          >
            {/* Background Image */}
            <div className="absolute inset-0">
               <motion.img 
                  initial={{ scale: 1 }}
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.7 }}
                  src={path.image} 
                  alt={path.title} 
                  className="w-full h-full object-cover" 
               />
            </div>
            
            {/* Gradient Overlay */}
            <div className={`absolute inset-0 bg-gradient-to-t ${path.color} via-cine-black/60 to-cine-black/30`}></div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-cine-black opacity-90"></div>

            <div className="absolute inset-0 p-8 flex flex-col justify-end items-start">
               <div className="mb-4 bg-white/10 backdrop-blur-md p-3 rounded-xl text-white border border-white/10 group-hover:bg-accent-lime group-hover:text-cine-black transition-colors duration-300">
                 {path.icon}
               </div>
               <h3 className="font-display font-bold text-3xl mb-3 leading-tight">{path.title}</h3>
               <p className="text-gray-300 mb-6 text-sm leading-relaxed opacity-80 group-hover:opacity-100 transition-opacity">
                 {path.desc}
               </p>
               <button className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider hover:gap-3 transition-all">
                 Explore Path <ArrowRight className="w-4 h-4" />
               </button>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

const CertificationSection = () => {
  return (
    <section className="py-24 px-6 border-t border-white/5 bg-cine-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        {/* Text Side */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-purple/10 border border-accent-purple/20 text-xs font-bold uppercase tracking-wider text-accent-purple mb-6">
            <Award className="w-3 h-3" /> Career Certified
          </motion.div>
          <motion.h2 variants={fadeInUp} className="font-display font-bold text-3xl md:text-5xl mb-6 leading-tight">
            Advance Your AI <br /> <span className="text-white">Creative Career.</span>
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-lg text-cine-textMuted mb-8 leading-relaxed max-w-md">
             Earn practical AI filmmaking skills with industry-relevant certification designed for creators, freelancers, and digital professionals who want to lead the industry.
          </motion.p>
          <motion.button variants={fadeInUp} className="px-8 py-4 bg-white/5 border border-white/10 text-white font-bold text-sm rounded-full hover:bg-white hover:text-cine-black transition-all duration-300 flex items-center gap-2 group">
            View Certification Courses
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </motion.button>
        </motion.div>

        {/* Image Side */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={scaleIn}
          className="relative"
        >
           <div className="absolute inset-0 bg-accent-purple/20 blur-[80px] rounded-full pointer-events-none -z-10"></div>
           <div className="rounded-2xl overflow-hidden border border-white/10 relative group">
             <div className="absolute inset-0 bg-gradient-to-tr from-cine-black/60 to-transparent z-10"></div>
             <motion.img 
               whileHover={{ scale: 1.05 }}
               transition={{ duration: 0.7 }}
               src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=800&auto=format&fit=crop" 
               alt="Certification" 
               className="w-full h-full object-cover"
             />
             {/* Abstract UI Badge overlay */}
             <motion.div 
               initial={{ y: 20, opacity: 0 }}
               whileInView={{ y: 0, opacity: 1 }}
               transition={{ delay: 0.5 }}
               className="absolute bottom-6 left-6 z-20 bg-cine-surface/90 backdrop-blur-md p-4 rounded-xl border border-white/10 flex items-center gap-4 shadow-xl"
             >
                <div className="bg-accent-lime rounded-full p-2">
                   <CheckCircle2 className="w-5 h-5 text-cine-black" />
                </div>
                <div>
                   <p className="text-xs text-cine-textMuted uppercase font-bold tracking-wider">Status</p>
                   <p className="text-white font-bold">Certified Pro</p>
                </div>
             </motion.div>
           </div>
        </motion.div>
      </div>
    </section>
  )
}

const SkillSection = () => {
  return (
    <section className="py-24 px-6 border-t border-white/5 bg-cine-surface relative">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        {/* Image Side (Left) */}
         <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={scaleIn}
          className="relative order-2 md:order-1"
        >
           <div className="rounded-2xl overflow-hidden border border-white/10 relative group h-[400px]">
             <motion.img 
               whileHover={{ scale: 1.05 }}
               transition={{ duration: 0.7 }}
               src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=800&auto=format&fit=crop" 
               alt="Editing Workflow" 
               className="w-full h-full object-cover"
             />
             <div className="absolute inset-0 bg-cine-black/20 group-hover:bg-transparent transition-colors duration-500"></div>
           </div>
        </motion.div>

        {/* Text Side (Right) */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="order-1 md:order-2"
        >
          <motion.div variants={slideInRight} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-blue/10 border border-accent-blue/20 text-xs font-bold uppercase tracking-wider text-accent-blue mb-6">
            <TrendingUp className="w-3 h-3" /> Skill Growth
          </motion.div>
          <motion.h2 variants={slideInRight} className="font-display font-bold text-3xl md:text-5xl mb-6 leading-tight">
            Level Up Your <br/> <span className="text-white">Creative Skills.</span>
          </motion.h2>
          <motion.p variants={slideInRight} className="text-lg text-cine-textMuted mb-8 leading-relaxed max-w-md">
             Learn AI ads, cinematic reels, video automation, and storytelling workflows that help you create faster, better, and more profitably.
          </motion.p>
          <motion.div variants={slideInRight} className="flex flex-wrap items-center gap-4">
            <button className="px-8 py-4 bg-accent-lime text-cine-black font-bold text-sm rounded-full hover:bg-white transition-all duration-300">
              Explore Courses
            </button>
            <a href="#" className="text-sm font-medium text-white hover:text-accent-lime transition-colors flex items-center gap-2">
               See Learning Paths <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

const JourneySection = () => {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background Parallax Simulation */}
      <div className="absolute inset-0 bg-cine-surface">
        <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1626785774573-4b79931433da?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center mix-blend-overlay grayscale"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-cine-black via-transparent to-cine-black"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.div
           initial="hidden"
           whileInView="visible"
           viewport={{ once: true }}
           variants={staggerContainer}
        >
          <motion.div variants={fadeInUp} className="inline-block p-4 rounded-full bg-white/5 backdrop-blur-md mb-8">
            <MonitorPlay className="w-8 h-8 text-accent-lime" />
          </motion.div>
          <motion.h2 variants={fadeInUp} className="font-display font-bold text-4xl md:text-6xl mb-6">From Prompt to Premiere.</motion.h2>
          <motion.p variants={fadeInUp} className="text-xl text-cine-textMuted mb-10 max-w-2xl mx-auto">
            Join 15,000+ creators bridging the gap between imagination and reality. We teach the workflows that agencies are charging $10k+ for.
          </motion.p>
          <motion.button variants={fadeInUp} className="px-8 py-4 bg-white text-cine-black font-bold text-lg rounded-full hover:bg-accent-lime transition-colors">
            View Student Showcase
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

const CommunitySection = () => {
  return (
    <section className="py-24 px-6 bg-cine-surface border-y border-white/5 relative overflow-hidden">
       {/* Ambient glow */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-accent-blue/5 blur-[100px] rounded-full pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
           <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-bold uppercase tracking-wider text-accent-coral mb-6">
             <Users className="w-3 h-3" /> Community First
           </motion.div>
           <motion.h2 variants={fadeInUp} className="font-display font-bold text-4xl md:text-5xl mb-6 leading-tight">
             And Never Learn Alone
           </motion.h2>
           <motion.p variants={fadeInUp} className="text-lg text-cine-textMuted mb-8 leading-relaxed">
             Filmmaking is collaborative. Get instant feedback on your prompts, share your latest renders, and collaborate with peers in our exclusive Discord server.
           </motion.p>
           
           <motion.div variants={staggerContainer} className="space-y-4">
             <motion.div variants={fadeInUp} className="flex items-center gap-4 p-4 rounded-xl bg-cine-black/50 border border-white/5">
                <MessageCircle className="w-6 h-6 text-accent-lime" />
                <div>
                  <h4 className="font-bold text-white">24/7 Prompt Support</h4>
                  <p className="text-sm text-cine-textMuted">Stuck? Our experts help debug your workflows.</p>
                </div>
             </motion.div>
             <motion.div variants={fadeInUp} className="flex items-center gap-4 p-4 rounded-xl bg-cine-black/50 border border-white/5">
                <Share2 className="w-6 h-6 text-accent-blue" />
                <div>
                  <h4 className="font-bold text-white">Weekly Showcases</h4>
                  <p className="text-sm text-cine-textMuted">Get your work featured to 50k+ followers.</p>
                </div>
             </motion.div>
           </motion.div>
        </motion.div>

        <div className="relative">
           {/* Abstract visual of community nodes */}
           <div className="grid grid-cols-2 gap-4">
             <motion.div 
               initial="hidden"
               whileInView="visible"
               viewport={{ once: true }}
               variants={staggerContainer}
               className="space-y-4 mt-8"
              >
               <motion.img variants={fadeInUp} src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400&auto=format&fit=crop" className="rounded-2xl border border-white/10 w-full h-48 object-cover opacity-80" />
               <motion.img variants={fadeInUp} src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=400&auto=format&fit=crop" className="rounded-2xl border border-white/10 w-full h-64 object-cover" />
             </motion.div>
             <motion.div 
               initial="hidden"
               whileInView="visible"
               viewport={{ once: true }}
               variants={staggerContainer}
               className="space-y-4"
              >
               <motion.img variants={fadeInUp} src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=400&auto=format&fit=crop" className="rounded-2xl border border-white/10 w-full h-64 object-cover" />
               <motion.img variants={fadeInUp} src="https://images.unsplash.com/photo-1521119989659-a83eee488058?q=80&w=400&auto=format&fit=crop" className="rounded-2xl border border-white/10 w-full h-48 object-cover opacity-80" />
             </motion.div>
           </div>
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto border-b border-white/5">
      <motion.h2 
        initial="hidden" 
        whileInView="visible" 
        viewport={{ once: true }} 
        variants={fadeInUp} 
        className="font-display font-bold text-3xl md:text-4xl mb-16 text-center"
      >
        Success Stories
      </motion.h2>
      
      <motion.div 
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
      >
        {[
          {
            quote: "I went from manual editing to shipping 5x the video volume in a week. CineAI isn't just a course, it's an operating system.",
            author: "Sarah Jenkins",
            role: "Creative Director",
            avatar: "https://randomuser.me/api/portraits/women/44.jpg"
          },
          {
            quote: "The automation module alone saved my agency 20 hours a week. The ROI on this membership is insane.",
            author: "Marcus Chen",
            role: "Agency Owner",
            avatar: "https://randomuser.me/api/portraits/men/32.jpg"
          },
          {
            quote: "Finally, a place that teaches the 'why' and 'how' of AI art, not just the tools. My films look cinematic for the first time.",
            author: "Elara V.",
            role: "Indie Filmmaker",
            avatar: "https://randomuser.me/api/portraits/women/65.jpg"
          }
        ].map((item, i) => (
          <motion.div key={i} variants={fadeInUp} className="bg-cine-surface p-8 rounded-2xl border border-white/5 relative">
            <div className="absolute -top-3 -left-3">
              <div className="bg-cine-black p-2 rounded-full border border-white/10">
                 <Star className="w-4 h-4 text-accent-lime fill-current" />
              </div>
            </div>
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">"{item.quote}"</p>
            <div className="flex items-center gap-3">
              <img src={item.avatar} alt={item.author} className="w-10 h-10 rounded-full border border-white/10" />
              <div>
                <h4 className="font-bold text-sm text-white">{item.author}</h4>
                <p className="text-xs text-cine-textMuted">{item.role}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

const TrustSection = () => {
  const brands = [
    { name: "NETFLIX", opacity: "opacity-50" },
    { name: "GOOGLE", opacity: "opacity-40" },
    { name: "SPOTIFY", opacity: "opacity-60" },
    { name: "VICE", opacity: "opacity-50" },
    { name: "OGILVY", opacity: "opacity-40" },
    { name: "ADOBE", opacity: "opacity-60" },
    { name: "HBO", opacity: "opacity-50" },
    { name: "SONY", opacity: "opacity-40" }
  ];

  return (
    <section className="py-24 bg-cine-black border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 text-center">
         <motion.h2 
           initial="hidden" 
           whileInView="visible" 
           viewport={{ once: true }} 
           variants={fadeInUp} 
           className="font-display font-bold text-2xl md:text-3xl mb-12 text-white"
         >
           Trusted by Creators Worldwide
         </motion.h2>
         <motion.div 
           variants={staggerContainer}
           initial="hidden"
           whileInView="visible"
           viewport={{ once: true }}
           className="grid grid-cols-2 md:grid-cols-4 gap-12 items-center justify-items-center"
         >
            {brands.map((brand, idx) => (
              <motion.div 
                key={idx}
                variants={fadeInUp}
                whileHover={{ scale: 1.1, opacity: 1 }}
                className={`text-2xl md:text-3xl font-display font-bold tracking-[0.2em] text-white ${brand.opacity} hover:text-accent-lime transition-all duration-300 cursor-default`}
              >
                {brand.name}
              </motion.div>
            ))}
         </motion.div>
      </div>
    </section>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const faqs = [
    { q: "Do I need a powerful computer?", a: "No. Most tools we teach (Midjourney, Runway, Sora) are cloud-based. You can run them on a standard laptop or even a tablet." },
    { q: "Are the AI tools included in the price?", a: "The academy subscription covers the training. You will need your own subscriptions to tools like Midjourney (~$10/mo) or Runway, though we teach free alternatives where possible." },
    { q: "Is this suitable for complete beginners?", a: "Absolutely. We have a 'Zero to Hero' track specifically designed for people who have never written a prompt before." },
    { q: "Can I cancel anytime?", a: "Yes, our monthly membership is flexible. Cancel with one click from your dashboard." }
  ];

  return (
    <section className="py-24 px-6 max-w-3xl mx-auto">
      <motion.h2 
        initial="hidden" 
        whileInView="visible" 
        viewport={{ once: true }} 
        variants={fadeInUp} 
        className="font-display font-bold text-3xl md:text-4xl mb-12 text-center"
      >
        Common Questions
      </motion.h2>
      <motion.div 
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="space-y-4"
      >
        {faqs.map((faq, i) => (
          <motion.div key={i} variants={fadeInUp} className="border border-white/10 rounded-xl bg-cine-surface overflow-hidden">
            <button 
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
              className="w-full flex items-center justify-between p-6 text-left hover:bg-white/5 transition-colors"
            >
              <span className="font-medium text-lg">{faq.q}</span>
              <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${openIndex === i ? 'rotate-180 text-accent-lime' : 'text-cine-textMuted'}`} />
            </button>
            <AnimatePresence>
              {openIndex === i && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  <div className="p-6 pt-0 text-cine-textMuted leading-relaxed border-t border-white/5 mt-2">
                    {faq.a}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

const CTA = () => {
  return (
    <section className="relative w-full py-32 md:py-48 overflow-hidden flex items-center justify-center">
      {/* Background Image with Parallax/Zoom */}
      <div className="absolute inset-0 z-0">
        <motion.img 
          src="https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=2550&auto=format&fit=crop" 
          alt="Cinematic Background" 
          className="w-full h-full object-cover opacity-60"
          initial={{ scale: 1 }}
          whileInView={{ scale: 1.05 }}
          transition={{ duration: 8, ease: "easeOut" }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-cine-black via-cine-black/80 to-transparent"></div>
        <div className="absolute inset-0 bg-cine-black/40"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.div
           initial="hidden"
           whileInView="visible"
           viewport={{ once: true }}
           variants={staggerContainer}
        >
          <motion.h2 
            variants={fadeInUp}
            className="font-display font-bold text-5xl md:text-7xl mb-8 leading-[1.1] tracking-tight text-white"
          >
            The future of filmmaking is <br className="hidden md:block" /> <span className="text-accent-lime">AI-assisted.</span> Learn it early.
          </motion.h2>
          
          <motion.p 
            variants={fadeInUp}
            className="text-xl md:text-2xl text-gray-300 mb-12 max-w-2xl mx-auto font-light leading-relaxed"
          >
            Learn practical AI workflows used in modern creative teams. From prompts to finished films—build skills for ads, reels, and creative automation.
          </motion.p>
          
          <motion.div
             variants={fadeInUp}
             className="flex flex-col items-center"
          >
             <button className="px-12 py-5 bg-accent-lime text-cine-black font-bold text-lg md:text-xl rounded-full hover:bg-white hover:scale-105 transition-all duration-300 shadow-[0_0_50px_rgba(204,255,0,0.25)] flex items-center gap-3">
               <Play className="w-5 h-5 fill-current" />
               Start Your AI Filmmaking Journey
             </button>
             
             <div className="mt-8 flex flex-col md:flex-row items-center gap-4 text-sm text-cine-textMuted">
               <span className="flex items-center gap-2">
                 <CheckCircle2 className="w-4 h-4 text-accent-lime" />
                 Growing global community
               </span>
               <span className="hidden md:block text-white/20">•</span>
               <span>Beginner-friendly</span>
               <span className="hidden md:block text-white/20">•</span>
               <span>Cancel anytime</span>
             </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-cine-black border-t border-white/5 pt-20 pb-10 px-6">
      <motion.div 
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-16"
      >
        <motion.div variants={fadeInUp} className="col-span-1 md:col-span-1">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
              <Play fill="#0B0B0C" className="w-4 h-4 text-cine-black" />
            </div>
            <span className="font-display font-bold text-xl">CineAI.in</span>
          </div>
          <p className="text-cine-textMuted text-sm leading-relaxed mb-6">
            Practical AI filmmaking education for modern creators. Learn AI workflows for the new creative era.
          </p>
          <div className="flex flex-col gap-2 text-xs text-cine-textMuted opacity-80">
            <span className="flex items-center gap-1.5"><CheckCircle2 className="w-3 h-3 text-accent-lime" /> Updated for latest AI tools</span>
            <span className="flex items-center gap-1.5"><CheckCircle2 className="w-3 h-3 text-accent-lime" /> Community support included</span>
          </div>
        </motion.div>
        
        <motion.div variants={fadeInUp}>
          <h4 className="font-bold text-white mb-6">Courses</h4>
          <ul className="space-y-4 text-sm text-cine-textMuted">
            <li><a href="#" className="hover:text-accent-lime transition-colors">AI Ads & Commercials</a></li>
            <li><a href="#" className="hover:text-accent-lime transition-colors">Short-Form Viral Video</a></li>
            <li><a href="#" className="hover:text-accent-lime transition-colors">Cinematic AI Filmmaking</a></li>
            <li><a href="#" className="hover:text-accent-lime transition-colors">Automation & Content Systems</a></li>
          </ul>
        </motion.div>

        <motion.div variants={fadeInUp}>
          <h4 className="font-bold text-white mb-6">Company</h4>
          <ul className="space-y-4 text-sm text-cine-textMuted">
            <li><a href="#" className="hover:text-accent-lime transition-colors">About Us</a></li>
            <li><a href="#" className="hover:text-accent-lime transition-colors">Student Showcase</a></li>
            <li><a href="#" className="hover:text-accent-lime transition-colors">Creator Stories</a></li>
            <li><a href="#" className="hover:text-accent-lime transition-colors">Help Center</a></li>
          </ul>
        </motion.div>

        <motion.div variants={fadeInUp}>
          <h4 className="font-bold text-white mb-6">Free Resources</h4>
          <p className="text-sm text-cine-textMuted mb-4">Free weekly AI filmmaking prompts, workflows, and tool updates.</p>
          <div className="flex flex-col gap-2">
            <input 
              type="email" 
              placeholder="Enter email" 
              className="bg-cine-surface border border-white/10 rounded-lg px-4 py-2 text-sm text-white focus:outline-none focus:border-accent-lime w-full"
            />
            <button className="bg-white text-cine-black px-4 py-2 rounded-lg font-bold text-sm hover:bg-accent-lime transition-colors w-full">
              Join Free Creator Newsletter
            </button>
          </div>
        </motion.div>
      </motion.div>

      <div className="max-w-7xl mx-auto border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-cine-textMuted">
        <p>&copy; 2024 CineAI Inc. All rights reserved.</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-white">Privacy Policy</a>
          <a href="#" className="hover:text-white">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

// --- Main App Component ---

const App = () => {
  return (
    <div className="bg-cine-black min-h-screen text-cine-text font-sans selection:bg-accent-lime selection:text-cine-black">
      <Navbar />
      <main>
        <Hero />
        <ToolsSection />
        <FilterStrip />
        <CourseGrid />
        <LearningPaths />
        <CertificationSection />
        <SkillSection />
        <JourneySection />
        <CommunitySection />
        <Testimonials />
        <TrustSection />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

const root = createRoot(document.getElementById('root'));
root.render(<App />);

export default App;