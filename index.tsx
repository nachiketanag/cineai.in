import React, { useState, useEffect } from 'react';
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
  TrendingUp,
  LayoutDashboard,
  LogOut,
  BookOpen,
  Trophy,
  Clock,
  ChevronRight,
  Lock
} from 'lucide-react';
import { Course, User } from './types';
import { COURSES, DUMMY_USER } from './constants';
import { CoursesPage } from './CoursesPage';
import { FreeResourcesPage } from './FreeResourcesPage';
import { CommunityPage } from './CommunityPage';
import { PricingPage } from './PricingPage';
import { AboutPage } from './AboutPage';
import { StudentShowcasePage } from './StudentShowcasePage';
import { CreatorStoriesPage } from './CreatorStoriesPage';
import { HelpCenterPage } from './HelpCenterPage';
import { PrivacyPolicyPage } from './PrivacyPolicyPage';
import { TermsOfServicePage } from './TermsOfServicePage';
import { supabase } from './supabase';

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

const Navbar = ({ onNavigate, currentView, user, onLogout }: { onNavigate: (view: string) => void, currentView: string, user: User | null, onLogout: () => void }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: 'Courses', view: 'courses' },
    { label: 'Free Resources', view: 'resources' },
    { label: 'Community', view: 'community' },
    { label: 'Pricing', view: 'pricing' },
    { label: 'About', view: 'about' }
  ];

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "circOut" }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-[#0B0B0C]/80 border-b border-white/5"
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2 cursor-pointer group" onClick={() => onNavigate('landing')}>
          <div className="w-8 h-8 bg-accent-lime rounded-lg flex items-center justify-center transform group-hover:rotate-12 transition-transform">
            <Play fill="#0B0B0C" className="w-4 h-4 text-cine-black" />
          </div>
          <span className="font-display font-bold text-xl tracking-tight">CineAI.in</span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item, i) => (
            <motion.a 
              key={item.label} 
              href="#" 
              onClick={(e) => { e.preventDefault(); onNavigate(item.view); }}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + (i * 0.1) }}
              className={`text-sm font-medium transition-colors ${currentView === item.view ? 'text-accent-lime' : 'text-cine-textMuted hover:text-white'}`}
            >
              {item.label}
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
          {user ? (
            <>
              <button 
                onClick={() => onNavigate('dashboard')}
                className={`text-sm font-medium flex items-center gap-2 transition-colors ${currentView === 'dashboard' ? 'text-white' : 'text-accent-lime hover:text-white'}`}
              >
                <LayoutDashboard className="w-4 h-4" /> Dashboard
              </button>
              <button 
                onClick={onLogout}
                className="text-sm font-medium text-cine-textMuted hover:text-white transition-colors"
              >
                Log out
              </button>
            </>
          ) : (
            <>
              <button onClick={() => onNavigate('login')} className="text-sm font-medium hover:text-white">Log in</button>
              <button onClick={() => onNavigate('login')} className="px-5 py-2.5 bg-accent-lime text-cine-black font-bold text-sm rounded-full hover:bg-white transition-colors">
                Start Learning
              </button>
            </>
          )}
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
              {navItems.map((item) => (
                <a 
                  key={item.label} 
                  href="#" 
                  onClick={(e) => { e.preventDefault(); onNavigate(item.view); setIsOpen(false); }}
                  className={`text-lg font-medium ${currentView === item.view ? 'text-accent-lime' : 'text-white'}`}
                >
                  {item.label}
                </a>
              ))}
              <div className="h-px bg-white/10 w-full my-2"></div>
              {user ? (
                <button 
                  onClick={() => { onNavigate('dashboard'); setIsOpen(false); }}
                  className="w-full py-3 bg-accent-lime text-cine-black font-bold rounded-lg"
                >
                  Go to Dashboard
                </button>
              ) : (
                <button 
                  onClick={() => { onNavigate('login'); setIsOpen(false); }}
                  className="w-full py-3 bg-accent-lime text-cine-black font-bold rounded-lg"
                >
                  Start Learning
                </button>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

// --- Auth & Dashboard Components ---

const LoginPage = ({ onLogin, onNavigate }: { onLogin: (user: User) => void, onNavigate: (view: string) => void }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setError(error.message);
      setLoading(false);
    } else if (data.user) {
      // The onAuthStateChange listener in App will handle the login
    }
  };

  const handleGoogleLogin = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
    });
    if (error) {
      setError(error.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-6 bg-cine-black py-12">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full max-w-md bg-cine-surface p-8 rounded-3xl border border-white/10 shadow-2xl"
      >
        <div className="text-center mb-8">
          <div className="w-12 h-12 bg-accent-lime rounded-xl flex items-center justify-center mx-auto mb-4">
            <Lock className="w-6 h-6 text-cine-black" />
          </div>
          <h2 className="font-display font-bold text-3xl mb-2">Welcome Back</h2>
          <p className="text-cine-textMuted text-sm">Sign in to continue your filmmaking journey</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-cine-textMuted mb-2">Email Address</label>
            <input 
              type="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="test@cineai.in"
              className="w-full bg-cine-black border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent-lime transition-colors"
              required
            />
          </div>
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-cine-textMuted mb-2">Password</label>
            <input 
              type="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="w-full bg-cine-black border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent-lime transition-colors"
              required
            />
          </div>

          {error && <p className="text-accent-coral text-xs font-medium">{error}</p>}

          <button 
            type="submit"
            disabled={loading}
            className="w-full py-4 bg-accent-lime text-cine-black font-bold rounded-xl hover:bg-white transition-colors shadow-lg shadow-accent-lime/10 disabled:opacity-50"
          >
            {loading ? 'Signing In...' : 'Sign In'}
          </button>
        </form>

        <div className="mt-6 flex items-center justify-center space-x-4">
          <div className="h-px bg-white/10 flex-1"></div>
          <span className="text-xs text-cine-textMuted uppercase tracking-wider">Or continue with</span>
          <div className="h-px bg-white/10 flex-1"></div>
        </div>

        <button 
          onClick={handleGoogleLogin}
          className="mt-6 w-full py-3 bg-white text-cine-black font-bold rounded-xl hover:bg-gray-100 transition-colors flex items-center justify-center gap-3"
        >
          <svg className="w-5 h-5" viewBox="0 0 24 24">
            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
          </svg>
          Sign in with Google
        </button>

        <div className="mt-8 pt-6 border-t border-white/5 text-center">
          <p className="text-xs text-cine-textMuted">
            Don't have an account? <button onClick={() => onNavigate('register')} className="text-accent-lime font-bold hover:underline">Join the Academy</button>
          </p>
        </div>
      </motion.div>
    </div>
  );
};

const RegisterPage = ({ onRegister, onNavigate }: { onRegister: (user: User) => void, onNavigate: (view: string) => void }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          full_name: name,
          mobile: mobile,
        }
      }
    });

    if (error) {
      setError(error.message);
      setLoading(false);
    } else if (data.user) {
      // The onAuthStateChange listener in App will handle the login
    }
  };

  const handleGoogleLogin = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
    });
    if (error) {
      setError(error.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-6 bg-cine-black py-12">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full max-w-md bg-cine-surface p-8 rounded-3xl border border-white/10 shadow-2xl"
      >
        <div className="text-center mb-8">
          <div className="w-12 h-12 bg-accent-lime rounded-xl flex items-center justify-center mx-auto mb-4">
            <Users className="w-6 h-6 text-cine-black" />
          </div>
          <h2 className="font-display font-bold text-3xl mb-2">Create Account</h2>
          <p className="text-cine-textMuted text-sm">Join the Academy and start your journey</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-cine-textMuted mb-2">Full Name</label>
            <input 
              type="text" 
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="John Doe"
              className="w-full bg-cine-black border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent-lime transition-colors"
              required
            />
          </div>
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-cine-textMuted mb-2">Email Address</label>
            <input 
              type="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="test@cineai.in"
              className="w-full bg-cine-black border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent-lime transition-colors"
              required
            />
          </div>
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-cine-textMuted mb-2">Mobile Number</label>
            <input 
              type="tel" 
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              placeholder="+91 98765 43210"
              className="w-full bg-cine-black border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent-lime transition-colors"
              required
            />
          </div>
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-cine-textMuted mb-2">Password</label>
            <input 
              type="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="w-full bg-cine-black border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent-lime transition-colors"
              required
            />
          </div>

          {error && <p className="text-accent-coral text-xs font-medium">{error}</p>}

          <button 
            type="submit"
            disabled={loading}
            className="w-full py-4 bg-accent-lime text-cine-black font-bold rounded-xl hover:bg-white transition-colors shadow-lg shadow-accent-lime/10 disabled:opacity-50"
          >
            {loading ? 'Creating Account...' : 'Create Account'}
          </button>
        </form>

        <div className="mt-6 flex items-center justify-center space-x-4">
          <div className="h-px bg-white/10 flex-1"></div>
          <span className="text-xs text-cine-textMuted uppercase tracking-wider">Or continue with</span>
          <div className="h-px bg-white/10 flex-1"></div>
        </div>

        <button 
          onClick={handleGoogleLogin}
          className="mt-6 w-full py-3 bg-white text-cine-black font-bold rounded-xl hover:bg-gray-100 transition-colors flex items-center justify-center gap-3"
        >
          <svg className="w-5 h-5" viewBox="0 0 24 24">
            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
          </svg>
          Sign up with Google
        </button>

        <div className="mt-8 pt-6 border-t border-white/5 text-center">
          <p className="text-xs text-cine-textMuted">
            Already have an account? <button onClick={() => onNavigate('login')} className="text-accent-lime font-bold hover:underline">Log in</button>
          </p>
        </div>
      </motion.div>
    </div>
  );
};

const Dashboard = ({ user, onLogout }: { user: User, onLogout: () => void }) => {
  const [activeCourse, setActiveCourse] = useState<Course | null>(null);
  const [completedModules, setCompletedModules] = useState<string[]>(user.completedModules);
  const [showCompletionAnim, setShowCompletionAnim] = useState(false);
  const [currentTab, setCurrentTab] = useState<'overview' | 'community' | 'certificates'>('overview');

  const handleModuleToggle = (moduleId: string, course: Course) => {
    setCompletedModules(prev => {
      const isNowCompleted = !prev.includes(moduleId);
      const newCompleted = isNowCompleted 
        ? [...prev, moduleId] 
        : prev.filter(id => id !== moduleId);
      
      // Check if course is now fully completed
      const courseModuleIds = course.modules.map(m => m.id);
      const allCompleted = courseModuleIds.every(id => newCompleted.includes(id));
      
      if (allCompleted && isNowCompleted) {
        setShowCompletionAnim(true);
        setTimeout(() => setShowCompletionAnim(false), 5000);
      }

      return newCompleted;
    });
  };

  const calculateProgress = (course: Course) => {
    const courseModuleIds = course.modules.map(m => m.id);
    const completedCount = courseModuleIds.filter(id => completedModules.includes(id)).length;
    return Math.round((completedCount / courseModuleIds.length) * 100);
  };

  const tabs = [
    { id: 'overview', icon: <LayoutDashboard className="w-5 h-5" />, label: "Overview" },
    { id: 'community', icon: <Users className="w-5 h-5" />, label: "Community" },
    { id: 'certificates', icon: <Award className="w-5 h-5" />, label: "Certificates" },
  ];

  return (
    <div className="min-h-screen bg-cine-black flex">
      {/* Completion Animation Overlay */}
      <AnimatePresence>
        {showCompletionAnim && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-cine-black/90 backdrop-blur-md"
          >
            <motion.div 
              initial={{ scale: 0.5, rotate: -10 }}
              animate={{ scale: 1, rotate: 0 }}
              className="text-center"
            >
              <div className="w-32 h-32 bg-accent-lime rounded-full flex items-center justify-center mx-auto mb-8 shadow-[0_0_100px_rgba(204,255,0,0.5)]">
                <Trophy className="w-16 h-16 text-cine-black" />
              </div>
              <h2 className="font-display font-bold text-5xl mb-4">Course Completed!</h2>
              <p className="text-xl text-cine-textMuted">You're one step closer to AI mastery.</p>
              
              {/* Confetti simulation with motion */}
              {[...Array(20)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ x: 0, y: 0, opacity: 1 }}
                  animate={{ 
                    x: (Math.random() - 0.5) * 1000, 
                    y: (Math.random() - 0.5) * 1000,
                    opacity: 0,
                    rotate: 360
                  }}
                  transition={{ duration: 2, ease: "easeOut" }}
                  className="absolute top-1/2 left-1/2 w-3 h-3 rounded-full"
                  style={{ backgroundColor: i % 2 === 0 ? '#CCFF00' : '#2D5BFF' }}
                />
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <aside className="w-20 md:w-64 border-r border-white/5 flex flex-col items-center md:items-start p-6 bg-cine-surface/30">
        <div className="flex items-center gap-3 mb-12 cursor-pointer" onClick={() => { setActiveCourse(null); setCurrentTab('overview'); }}>
          <div className="w-10 h-10 bg-accent-lime rounded-xl flex items-center justify-center shrink-0">
            <Play fill="#0B0B0C" className="w-5 h-5 text-cine-black" />
          </div>
          <span className="font-display font-bold text-xl hidden md:block">CineAI</span>
        </div>

        <nav className="flex-grow w-full space-y-2">
          {tabs.map((tab) => (
            <button 
              key={tab.id}
              onClick={() => {
                setCurrentTab(tab.id as any);
                setActiveCourse(null);
              }}
              className={`w-full flex items-center gap-4 p-3 rounded-xl transition-colors ${currentTab === tab.id && !activeCourse ? 'bg-white/10 text-accent-lime' : 'text-cine-textMuted hover:bg-white/5 hover:text-white'}`}
            >
              {tab.icon}
              <span className="font-medium hidden md:block">{tab.label}</span>
            </button>
          ))}
          {activeCourse && (
            <button 
              className="w-full flex items-center gap-4 p-3 rounded-xl bg-white/10 text-accent-lime"
            >
              <BookOpen className="w-5 h-5" />
              <span className="font-medium hidden md:block">Active Course</span>
            </button>
          )}
        </nav>

        <button 
          onClick={onLogout}
          className="w-full flex items-center gap-4 p-3 rounded-xl text-cine-textMuted hover:bg-accent-coral/10 hover:text-accent-coral transition-colors mt-auto"
        >
          <LogOut className="w-5 h-5" />
          <span className="font-medium hidden md:block">Log out</span>
        </button>
      </aside>

      {/* Main Content */}
      <main className="flex-grow p-6 md:p-12 overflow-y-auto no-scrollbar">
        <AnimatePresence mode="wait">
          {activeCourse ? (
            <motion.div 
              key="player"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="max-w-6xl mx-auto"
            >
              <button 
                onClick={() => setActiveCourse(null)}
                className="flex items-center gap-2 text-cine-textMuted hover:text-white mb-8 transition-colors"
              >
                <ArrowRight className="w-4 h-4 rotate-180" /> Back to Dashboard
              </button>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                {/* Video Player Area */}
                <div className="lg:col-span-2">
                  <div className="aspect-video bg-black rounded-3xl overflow-hidden border border-white/10 shadow-2xl mb-8">
                    <iframe 
                      width="100%" 
                      height="100%" 
                      src={activeCourse.videoUrl} 
                      title="Course Video" 
                      frameBorder="0" 
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                      allowFullScreen
                    ></iframe>
                  </div>
                  <h1 className="font-display font-bold text-3xl mb-4">{activeCourse.title}</h1>
                  <p className="text-cine-textMuted leading-relaxed mb-8">
                    {activeCourse.description}
                  </p>
                  
                  <div className="flex items-center gap-6 p-6 bg-cine-surface rounded-2xl border border-white/5">
                    <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop" className="w-12 h-12 rounded-full object-cover" alt="Instructor" />
                    <div>
                      <p className="text-xs text-cine-textMuted uppercase font-bold tracking-widest">Your Instructor</p>
                      <p className="font-bold text-lg">{activeCourse.instructor}</p>
                      <p className="text-sm text-cine-textMuted mt-1">Alumni of IIT ISM Dhanbad, AI Video Ads | Performance Creative | Generative AI for Brands expert.</p>
                    </div>
                  </div>
                </div>

                {/* Curriculum Sidebar */}
                <div className="lg:col-span-1">
                  <div className="bg-cine-surface rounded-3xl border border-white/10 overflow-hidden">
                    <div className="p-6 border-b border-white/5 bg-white/5">
                      <h3 className="font-bold flex items-center gap-2">
                        <Layers className="w-4 h-4 text-accent-lime" /> Curriculum
                      </h3>
                    </div>
                    <div className="p-4 space-y-2">
                      {activeCourse.modules.map((module, idx) => {
                        const isCompleted = completedModules.includes(module.id);
                        return (
                          <button 
                            key={module.id}
                            onClick={() => handleModuleToggle(module.id, activeCourse)}
                            className={`w-full flex items-center justify-between p-4 rounded-xl transition-all ${isCompleted ? 'bg-accent-lime/10 border border-accent-lime/20' : 'bg-white/5 border border-transparent hover:border-white/10'}`}
                          >
                            <div className="flex items-center gap-4">
                              <span className={`w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold ${isCompleted ? 'bg-accent-lime text-cine-black' : 'bg-white/10 text-cine-textMuted'}`}>
                                {isCompleted ? <CheckCircle2 className="w-3 h-3" /> : idx + 1}
                              </span>
                              <span className={`text-sm font-medium ${isCompleted ? 'text-white' : 'text-cine-textMuted'}`}>{module.title}</span>
                            </div>
                            {isCompleted ? (
                              <span className="text-[10px] font-bold text-accent-lime uppercase tracking-widest">Done</span>
                            ) : (
                              <Play className="w-3 h-3 text-cine-textMuted" />
                            )}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ) : currentTab === 'overview' ? (
            <motion.div 
              key="overview"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              <header className="mb-12">
                <h1 className="font-display font-bold text-4xl mb-2">Hello, {user.name}</h1>
                <p className="text-cine-textMuted">Continue where you left off today.</p>
              </header>

              {/* Stats Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                {[
                  { label: "Courses Enrolled", value: user.enrolledCourses.length, icon: <BookOpen className="text-accent-blue" /> },
                  { label: "Modules Completed", value: completedModules.length, icon: <CheckCircle2 className="text-accent-lime" /> },
                  { label: "Learning Hours", value: "24.5", icon: <Clock className="text-accent-purple" /> },
                ].map((stat, i) => (
                  <div key={i} className="bg-cine-surface p-6 rounded-2xl border border-white/5">
                    <div className="flex items-center justify-between mb-4">
                      <div className="p-2 bg-white/5 rounded-lg">{stat.icon}</div>
                    </div>
                    <p className="text-cine-textMuted text-sm mb-1">{stat.label}</p>
                    <p className="text-3xl font-display font-bold">{stat.value}</p>
                  </div>
                ))}
              </div>

              <h2 className="font-display font-bold text-2xl mb-6">Your Courses</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {COURSES.filter(c => user.enrolledCourses.includes(c.id)).map((course) => {
                  const progress = calculateProgress(course);
                  return (
                    <motion.div 
                      key={course.id}
                      whileHover={{ y: -5 }}
                      onClick={() => setActiveCourse(course)}
                      className="bg-cine-surface rounded-2xl overflow-hidden border border-white/5 cursor-pointer group"
                    >
                      <div className="flex h-40">
                        <div className="w-1/3 shrink-0">
                          <img src={course.image} className="w-full h-full object-cover" alt={course.title} />
                        </div>
                        <div className="p-6 flex flex-col justify-between flex-grow">
                          <div>
                            <span className="text-[10px] font-bold uppercase tracking-widest text-accent-lime mb-1 block">{course.category}</span>
                            <h3 className="font-bold text-lg leading-tight group-hover:text-accent-lime transition-colors">{course.title}</h3>
                          </div>
                          <div className="space-y-2">
                            <div className="flex justify-between text-xs">
                              <span className="text-cine-textMuted">Progress</span>
                              <span className="text-white font-bold">{progress}%</span>
                            </div>
                            <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                              <motion.div 
                                initial={{ width: 0 }}
                                animate={{ width: `${progress}%` }}
                                className="h-full bg-accent-lime"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ) : currentTab === 'community' ? (
            <motion.div 
              key="community"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="max-w-4xl"
            >
              <h1 className="font-display font-bold text-4xl mb-6">Community Feed</h1>
              <p className="text-cine-textMuted mb-12 text-lg">Connect with fellow AI filmmakers and share your work.</p>
              
              <div className="space-y-6">
                {[1, 2, 3].map(i => (
                  <div key={i} className="bg-cine-surface p-6 rounded-2xl border border-white/5">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-10 h-10 rounded-full bg-white/10" />
                      <div>
                        <p className="font-bold">Creator_{i}</p>
                        <p className="text-xs text-cine-textMuted">2 hours ago</p>
                      </div>
                    </div>
                    <p className="text-gray-300 mb-4">Just finished my first AI commercial using the workflows from Course 1! The results are mind-blowing.</p>
                    <div className="aspect-video bg-white/5 rounded-xl mb-4 flex items-center justify-center">
                      <Play className="w-12 h-12 text-white/20" />
                    </div>
                    <div className="flex items-center gap-6">
                      <button className="flex items-center gap-2 text-sm text-cine-textMuted hover:text-accent-lime transition-colors">
                        <Star className="w-4 h-4" /> 24 Likes
                      </button>
                      <button className="flex items-center gap-2 text-sm text-cine-textMuted hover:text-accent-lime transition-colors">
                        <MessageCircle className="w-4 h-4" /> 8 Comments
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ) : (
            <motion.div 
              key="certificates"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="max-w-4xl"
            >
              <h1 className="font-display font-bold text-4xl mb-6">Your Certificates</h1>
              <p className="text-cine-textMuted mb-12 text-lg">Showcase your mastery of AI filmmaking.</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-cine-surface p-8 rounded-3xl border border-white/5 flex flex-col items-center text-center">
                  <div className="w-20 h-20 bg-accent-lime/10 rounded-full flex items-center justify-center mb-6">
                    <Award className="w-10 h-10 text-accent-lime" />
                  </div>
                  <h3 className="font-bold text-xl mb-2">AI Commercial Specialist</h3>
                  <p className="text-sm text-cine-textMuted mb-6">Completed on Oct 12, 2024</p>
                  <button className="px-6 py-3 bg-white/5 border border-white/10 rounded-xl text-sm font-bold hover:bg-white hover:text-cine-black transition-all">
                    Download PDF
                  </button>
                </div>
                
                <div className="bg-cine-surface p-8 rounded-3xl border border-white/5 border-dashed flex flex-col items-center justify-center text-center opacity-50">
                  <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center mb-4">
                    <Lock className="w-6 h-6 text-cine-textMuted" />
                  </div>
                  <p className="text-sm font-medium">Complete "Narrative Storytelling" to unlock</p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
};
const Hero = ({ onCtaClick }: { onCtaClick: () => void }) => {
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
          <button 
            onClick={onCtaClick}
            className="w-full sm:w-auto px-8 py-4 bg-accent-lime text-cine-black font-bold text-lg rounded-full hover:bg-white hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 group"
          >
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

const CourseCard: React.FC<CourseCardProps & { onClick?: () => void }> = ({ title, category, instructor, duration, image, accentColor = "#2D5BFF", variants, onClick }) => {
  return (
    <motion.div 
      variants={variants}
      whileHover={{ y: -8 }}
      onClick={onClick}
      className="group relative bg-cine-surface rounded-2xl overflow-hidden border border-white/5 hover:border-white/20 transition-colors duration-300 flex flex-col h-full cursor-pointer"
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

const CourseGrid = ({ onCourseClick }: { onCourseClick: () => void }) => {
  const courses = [
    {
      title: "The 30-Second AI Ad Spot",
      category: "Commercials",
      instructor: "Nachiketa Nag",
      duration: "4h 20m",
      image: "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?q=80&w=800&auto=format&fit=crop",
      accentColor: "#CCFF00"
    },
    {
      title: "Narrative Storytelling with Sora",
      category: "Cinema",
      instructor: "Nachiketa Nag",
      duration: "6h 15m",
      image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop",
      accentColor: "#2D5BFF"
    },
    {
      title: "The 'Infinite Content' Engine",
      category: "Automation",
      instructor: "Nachiketa Nag",
      duration: "3h 45m",
      image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=800&auto=format&fit=crop",
      accentColor: "#FF6B6B"
    },
    {
      title: "Runway Gen-3 Masterclass",
      category: "VFX",
      instructor: "Nachiketa Nag",
      duration: "5h 10m",
      image: "https://images.unsplash.com/photo-1535016120720-40c6874c3b13?q=80&w=800&auto=format&fit=crop",
      accentColor: "#9F55FF"
    },
    {
      title: "AI Sound Design & Scoring",
      category: "Audio",
      instructor: "Nachiketa Nag",
      duration: "2h 50m",
      image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?q=80&w=800&auto=format&fit=crop",
      accentColor: "#FFD166"
    },
    {
      title: "Freelance Agency Blueprint",
      category: "Business",
      instructor: "Nachiketa Nag",
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
          onClick={(e) => { e.preventDefault(); onCourseClick(); }}
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
          <CourseCard key={index} {...course} variants={fadeInUp} onClick={onCourseClick} />
        ))}
      </motion.div>
      
      <div className="mt-12 md:hidden text-center">
        <a href="#" onClick={(e) => { e.preventDefault(); onCourseClick(); }} className="inline-flex items-center gap-2 text-accent-lime font-medium hover:text-white transition-colors">
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
            Join 15,000+ creators bridging the gap between imagination and reality. I teach the workflows that agencies are charging ₹10L+ for.
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
             Filmmaking is collaborative. Get instant feedback on your prompts, share your latest renders, and collaborate with peers in my exclusive Discord server.
           </motion.p>
           
           <motion.div variants={staggerContainer} className="space-y-4">
             <motion.div variants={fadeInUp} className="flex items-center gap-4 p-4 rounded-xl bg-cine-black/50 border border-white/5">
                <MessageCircle className="w-6 h-6 text-accent-lime" />
                <div>
                  <h4 className="font-bold text-white">24/7 Prompt Support</h4>
                  <p className="text-sm text-cine-textMuted">Stuck? I will help debug your workflows.</p>
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
  const testimonials = [
    {
      quote: "Before CineAI, I had zero editing skills. Now I create real estate videos in 2 minutes and get leads every week.",
      author: "Rahul Sharma",
      location: "Delhi",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
      quote: "I started as a beginner. CineAI’s prompts and tools made me confident to start freelancing within 15 days.",
      author: "Priya Verma",
      location: "Lucknow",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    {
      quote: "As a photographer, CineAI helped me add AI videos to my services. My income literally doubled.",
      author: "Arjun Patel",
      location: "Ahmedabad",
      avatar: "https://randomuser.me/api/portraits/men/45.jpg"
    },
    {
      quote: "AI filmmaking felt complicated, but CineAI made it super simple. The step-by-step system is gold.",
      author: "Sneha Das",
      location: "Kolkata",
      avatar: "https://randomuser.me/api/portraits/women/68.jpg"
    },
    {
      quote: "I used CineAI to create property ads — got 20+ leads from one reel. This is insane.",
      author: "Mohit Gupta",
      location: "Noida",
      avatar: "https://randomuser.me/api/portraits/men/22.jpg"
    },
    {
      quote: "The prompt packs alone are worth it. I use them daily for content creation.",
      author: "Neha Singh",
      location: "Patna",
      avatar: "https://randomuser.me/api/portraits/women/33.jpg"
    },
    {
      quote: "I don’t even have a high-end laptop. Still making AI videos using CineAI tools.",
      author: "Rakesh Yadav",
      location: "Jaipur",
      avatar: "https://randomuser.me/api/portraits/men/55.jpg"
    },
    {
      quote: "CineAI helped me build a personal brand on Instagram using AI reels.",
      author: "Aditi Mehta",
      location: "Mumbai",
      avatar: "https://randomuser.me/api/portraits/women/21.jpg"
    },
    {
      quote: "I now offer AI video services to clients. Closed my first ₹25,000 deal after learning from CineAI.",
      author: "Imran Khan",
      location: "Hyderabad",
      avatar: "https://randomuser.me/api/portraits/men/66.jpg"
    },
    {
      quote: "Best investment I made this year. CineAI is not just a course — it’s a system.",
      author: "Souvik Roy",
      location: "Kolkata",
      avatar: "https://randomuser.me/api/portraits/men/77.jpg"
    }
  ];

  return (
    <section className="py-24 overflow-hidden border-b border-white/5 bg-cine-black">
      <div className="max-w-7xl mx-auto px-6 mb-16 text-center">
        <motion.h2 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true }} 
          variants={fadeInUp} 
          className="font-display font-bold text-3xl md:text-5xl mb-4"
        >
          Real People. Real Results.
        </motion.h2>
      </div>
      
      <div className="relative flex overflow-x-hidden group pb-12">
        {/* Gradient masks for smooth fade on edges */}
        <div className="absolute inset-y-0 left-0 w-1/6 bg-gradient-to-r from-cine-black to-transparent z-10 pointer-events-none"></div>
        <div className="absolute inset-y-0 right-0 w-1/6 bg-gradient-to-l from-cine-black to-transparent z-10 pointer-events-none"></div>
        
        <motion.div 
          className="flex gap-6 whitespace-nowrap px-3"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, ease: "linear", duration: 40 }}
        >
          {[...testimonials, ...testimonials].map((item, i) => (
            <div key={i} className="w-[350px] flex-shrink-0 bg-cine-surface p-8 rounded-2xl border border-white/5 relative whitespace-normal flex flex-col">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, idx) => (
                  <Star key={idx} className="w-4 h-4 text-accent-lime fill-current" />
                ))}
              </div>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed flex-grow">"{item.quote}"</p>
              <div className="flex items-center gap-4 mt-auto">
                <img src={item.avatar} alt={item.author} className="w-12 h-12 rounded-full border border-white/10 object-cover" />
                <div>
                  <h4 className="font-bold text-white">{item.author}</h4>
                  <p className="text-sm text-cine-textMuted">{item.location}</p>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      <motion.div 
        initial="hidden" 
        whileInView="visible" 
        viewport={{ once: true }} 
        variants={fadeInUp} 
        className="text-center mt-8"
      >
        <button className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent-lime text-cine-black font-bold text-lg rounded-full hover:bg-white hover:scale-105 transition-all duration-300">
          👉 Join 1000+ creators using CineAI
        </button>
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
    { q: "Do I need a powerful computer?", a: "No. Most tools I teach (Midjourney, Runway, Sora) are cloud-based. You can run them on a standard laptop or even a tablet." },
    { q: "Are the AI tools included in the price?", a: "The academy subscription covers the training. You will need your own subscriptions to tools like Midjourney (~₹1,000/mo) or Runway, though I teach free alternatives where possible." },
    { q: "Is this suitable for complete beginners?", a: "Absolutely. I have a 'Zero to Hero' track specifically designed for people who have never written a prompt before." },
    { q: "Can I cancel anytime?", a: "Yes, my monthly membership is flexible. Cancel with one click from your dashboard." }
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

const CTA = ({ onCtaClick }: { onCtaClick: () => void }) => {
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
             <button 
               onClick={onCtaClick}
               className="px-12 py-5 bg-accent-lime text-cine-black font-bold text-lg md:text-xl rounded-full hover:bg-white hover:scale-105 transition-all duration-300 shadow-[0_0_50px_rgba(204,255,0,0.25)] flex items-center gap-3"
             >
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

const Footer = ({ onNavigate }: { onNavigate: (view: string) => void }) => {
  const startYear = 2024;
  const currentYear = new Date().getFullYear();

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
          <div className="flex items-center gap-2 mb-6 cursor-pointer" onClick={() => onNavigate('landing')}>
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
            <li><a href="#" onClick={(e) => { e.preventDefault(); onNavigate('courses'); }} className="hover:text-accent-lime transition-colors">AI Ads & Commercials</a></li>
            <li><a href="#" onClick={(e) => { e.preventDefault(); onNavigate('courses'); }} className="hover:text-accent-lime transition-colors">Short-Form Viral Video</a></li>
            <li><a href="#" onClick={(e) => { e.preventDefault(); onNavigate('courses'); }} className="hover:text-accent-lime transition-colors">Cinematic AI Filmmaking</a></li>
            <li><a href="#" onClick={(e) => { e.preventDefault(); onNavigate('courses'); }} className="hover:text-accent-lime transition-colors">Automation & Content Systems</a></li>
          </ul>
        </motion.div>

        <motion.div variants={fadeInUp}>
          <h4 className="font-bold text-white mb-6">Company</h4>
          <ul className="space-y-4 text-sm text-cine-textMuted">
            <li><a href="#" onClick={(e) => { e.preventDefault(); onNavigate('about'); }} className="hover:text-accent-lime transition-colors">About Us</a></li>
            <li><a href="#" onClick={(e) => { e.preventDefault(); onNavigate('showcase'); }} className="hover:text-accent-lime transition-colors">Student Showcase</a></li>
            <li><a href="#" onClick={(e) => { e.preventDefault(); onNavigate('stories'); }} className="hover:text-accent-lime transition-colors">Creator Stories</a></li>
            <li><a href="#" onClick={(e) => { e.preventDefault(); onNavigate('help'); }} className="hover:text-accent-lime transition-colors">Help Center</a></li>
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
        <p>&copy; {startYear === currentYear ? startYear : `${startYear}–${currentYear}`} CineAI Labs. All rights reserved.</p>
        <div className="flex gap-6">
          <a href="#" onClick={(e) => { e.preventDefault(); onNavigate('privacy'); }} className="hover:text-white">Privacy Policy</a>
          <a href="#" onClick={(e) => { e.preventDefault(); onNavigate('terms'); }} className="hover:text-white">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

// --- Main App Component ---

const App = () => {
  const [view, setView] = useState<string>('landing');
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    // Check active session
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session?.user) {
        const userData: User = {
          id: session.user.id,
          name: session.user.user_metadata?.full_name || session.user.email?.split('@')[0] || 'User',
          email: session.user.email || '',
          enrolledCourses: session.user.user_metadata?.enrolledCourses || DUMMY_USER.enrolledCourses,
          completedModules: session.user.user_metadata?.completedModules || DUMMY_USER.completedModules,
        };
        setUser(userData);
        if (view === 'login' || view === 'register') {
          setView('dashboard');
        }
      }
    });

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      if (session?.user) {
        const userData: User = {
          id: session.user.id,
          name: session.user.user_metadata?.full_name || session.user.email?.split('@')[0] || 'User',
          email: session.user.email || '',
          enrolledCourses: session.user.user_metadata?.enrolledCourses || DUMMY_USER.enrolledCourses,
          completedModules: session.user.user_metadata?.completedModules || DUMMY_USER.completedModules,
        };
        setUser(userData);
        if (view === 'login' || view === 'register') {
          setView('dashboard');
        }
      } else {
        setUser(null);
      }
    });

    return () => subscription.unsubscribe();
  }, [view]);

  const handleLogin = (userData: User) => {
    // Legacy handler, now managed by onAuthStateChange
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    setUser(null);
    setView('landing');
  };

  if (view === 'login') {
    return <LoginPage onLogin={handleLogin} onNavigate={setView} />;
  }

  if (view === 'register') {
    return <RegisterPage onRegister={handleLogin} onNavigate={setView} />;
  }

  if (view === 'dashboard' && user) {
    return <Dashboard user={user} onLogout={handleLogout} />;
  }

  return (
    <div className="bg-cine-black min-h-screen text-cine-text font-sans selection:bg-accent-lime selection:text-cine-black">
      <Navbar 
        onNavigate={setView}
        currentView={view}
        user={user}
        onLogout={handleLogout}
      />
      <main>
        {view === 'landing' && (
          <>
            <Hero onCtaClick={() => setView(user ? 'dashboard' : 'login')} />
            <ToolsSection />
            <FilterStrip />
            <CourseGrid onCourseClick={() => setView(user ? 'dashboard' : 'login')} />
            <LearningPaths />
            <CertificationSection />
            <SkillSection />
            <JourneySection />
            <CommunitySection />
            <Testimonials />
            <TrustSection />
            <FAQ />
            <CTA onCtaClick={() => setView(user ? 'dashboard' : 'login')} />
          </>
        )}
        {view === 'courses' && <CoursesPage onCourseClick={() => setView(user ? 'dashboard' : 'login')} />}
        {view === 'resources' && <FreeResourcesPage />}
        {view === 'community' && <CommunityPage onJoinClick={() => setView(user ? 'dashboard' : 'login')} />}
        {view === 'pricing' && <PricingPage onSubscribeClick={() => setView(user ? 'dashboard' : 'login')} />}
        {view === 'about' && <AboutPage onJoinClick={() => setView(user ? 'dashboard' : 'login')} />}
        {view === 'showcase' && <StudentShowcasePage />}
        {view === 'stories' && <CreatorStoriesPage />}
        {view === 'help' && <HelpCenterPage />}
        {view === 'privacy' && <PrivacyPolicyPage />}
        {view === 'terms' && <TermsOfServicePage />}
      </main>
      <Footer onNavigate={setView} />
    </div>
  );
};

const root = createRoot(document.getElementById('root'));
root.render(<App />);

export default App;