import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, X, Zap, Crown, ArrowRight, ChevronDown, Star } from 'lucide-react';

const PLANS = [
  {
    name: "Starter Access",
    price: "Free",
    originalPrice: "₹99",
    period: "forever",
    desc: "Best for beginners starting their AI journey",
    features: [
      "Beginner-Friendly AI Video Lessons",
      "Starter Prompt Pack (Ready-to-Use)",
      "Guided First Video Project",
      "Basic AI Tools Setup Guide",
      "Community Access (Beginner Level)",
      "Upgrade Anytime"
    ],
    missing: [],
    buttonText: "Start Learning",
    buttonVariant: "outline",
    popular: false
  },
  {
    name: "CineAI Pro",
    price: "₹999",
    originalPrice: "₹1,999",
    period: "one-time",
    desc: "Complete system to create, grow, and start earning",
    features: [
      "Full AI Filmmaking Course (Complete System)",
      "2000+ High-Performance Prompt Packs",
      "Real Estate & Business Ad Creation System",
      "Viral Content Frameworks",
      "AI Video Editing Workflows",
      "Fast Video Creation System",
      "Monetization Blueprint",
      "Lifetime Access (One-Time Payment)",
      "Future Core Updates Included"
    ],
    missing: [],
    buttonText: "Join Pro",
    buttonVariant: "primary",
    popular: true
  },
  {
    name: "CineAI Elite",
    price: "₹4,999",
    originalPrice: "₹9,999",
    period: "one-time",
    desc: "Advanced creator + business + automation system",
    features: [
      "Advanced Prompt Libraries (Premium Packs)",
      "AI Automation Systems & Agent Workflows",
      "Client Acquisition System (Scripts + Strategies)",
      "Website & Landing Page Templates",
      "Business & Personal Brand Setup Blueprint",
      "Private Elite Community (Serious Creators Only)",
      "Live Sessions & Advanced Training",
      "Priority Support & Faster Guidance",
      "Early Access to New Features & Systems",
      "Complete AI Creator Ecosystem"
    ],
    missing: [],
    buttonText: "Join Elite",
    buttonVariant: "secondary",
    popular: false
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

export const PricingPage = ({ onSubscribeClick }: { onSubscribeClick: () => void }) => {
  return (
    <div className="pt-24 pb-24 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-lime/10 border border-accent-lime/20 text-xs font-bold uppercase tracking-wider text-accent-lime mb-6"
        >
          <Zap className="w-3 h-3" /> Simple Pricing
        </motion.div>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-display font-bold text-4xl md:text-6xl mb-6 leading-tight"
        >
          Choose Your Path to Becoming an <span className="text-accent-lime">AI Creator</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-cine-textMuted max-w-2xl mx-auto text-lg mb-8"
        >
          Start small or go all-in — everything you need to create, grow, and earn with AI
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-6 text-sm font-medium text-gray-300"
        >
          <span className="flex items-center gap-2"><Check className="w-4 h-4 text-accent-lime" /> 1000+ creators</span>
          <span className="flex items-center gap-2"><Check className="w-4 h-4 text-accent-lime" /> Beginner friendly</span>
          <span className="flex items-center gap-2"><Check className="w-4 h-4 text-accent-lime" /> No editing experience needed</span>
        </motion.div>
      </div>

      <motion.div 
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
      >
        {PLANS.map((plan, index) => (
          <motion.div 
            key={index}
            variants={fadeInUp}
            className={`relative bg-cine-surface rounded-3xl p-8 flex flex-col h-full border ${plan.popular ? 'border-accent-lime shadow-[0_0_40px_-10px_rgba(204,255,0,0.2)]' : 'border-white/10 hover:border-white/20 transition-colors'}`}
          >
            {plan.popular && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 flex gap-2 whitespace-nowrap">
                <span className="px-4 py-1 bg-accent-lime text-cine-black text-xs font-bold uppercase tracking-wider rounded-full flex items-center gap-1 shadow-lg">
                  <Crown className="w-3 h-3" /> Most Popular
                </span>
                <span className="px-4 py-1 bg-accent-coral text-white text-xs font-bold uppercase tracking-wider rounded-full flex items-center gap-1 shadow-lg">
                  Limited Time
                </span>
              </div>
            )}
            
            <div className="mb-8">
              <h3 className="font-display font-bold text-2xl mb-2">{plan.name}</h3>
              <p className="text-cine-textMuted text-sm h-10">{plan.desc}</p>
            </div>
            
            <div className="mb-8 flex items-baseline gap-2 flex-wrap">
              {plan.originalPrice && (
                <span className="text-2xl font-display font-bold text-cine-textMuted line-through decoration-red-500/50">{plan.originalPrice}</span>
              )}
              <span className="font-display font-bold text-5xl">{plan.price}</span>
              <span className="text-cine-textMuted">{plan.period}</span>
            </div>
            
            <button 
              onClick={onSubscribeClick}
              className={`w-full py-4 rounded-xl font-bold text-sm mb-8 transition-colors ${
                plan.buttonVariant === 'primary' 
                  ? 'bg-accent-lime text-cine-black hover:bg-white' 
                  : plan.buttonVariant === 'secondary'
                  ? 'bg-white text-cine-black hover:bg-gray-200'
                  : 'bg-transparent border border-white/20 text-white hover:border-white/50'
              }`}
            >
              {plan.buttonText}
            </button>
            
            <div className="flex-grow">
              <p className="text-xs font-bold uppercase tracking-wider text-cine-textMuted mb-4">What's included</p>
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-gray-300">
                    <Check className="w-5 h-5 text-accent-lime shrink-0" />
                    <span className={feature.includes("Lifetime Access") ? "font-bold text-accent-lime" : ""}>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Bonus Conversion Line */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-12 text-center"
      >
        <p className="text-xl font-bold text-white">👉 "Not sure? Try for Free first"</p>
      </motion.div>

      {/* Optional Add-On */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-16 max-w-4xl mx-auto bg-gradient-to-r from-cine-surface to-cine-black border border-white/10 rounded-3xl p-8 flex flex-col md:flex-row items-center justify-between gap-8"
      >
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-blue/10 border border-accent-blue/20 text-xs font-bold uppercase tracking-wider text-accent-blue mb-4">
            Optional Add-On
          </div>
          <h3 className="font-display font-bold text-2xl mb-2">🔓 CineAI Club</h3>
          <p className="text-cine-textMuted mb-4">Stay ahead with constantly updated content</p>
          <div className="flex items-baseline gap-1 mb-6">
            <span className="font-display font-bold text-4xl">₹199</span>
            <span className="text-cine-textMuted">/month</span>
          </div>
        </div>
        <div className="flex-grow">
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              "Weekly new prompts",
              "Trending video ideas",
              "Latest AI tools updates",
              "Exclusive templates",
              "Ongoing support"
            ].map((feature, i) => (
              <li key={i} className="flex items-center gap-2 text-sm text-gray-300">
                <Check className="w-4 h-4 text-accent-blue shrink-0" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <button 
            onClick={onSubscribeClick}
            className="px-6 py-3 bg-white text-cine-black font-bold rounded-xl hover:bg-gray-200 transition-colors whitespace-nowrap"
          >
            Join Club
          </button>
        </div>
      </motion.div>

      {/* Value Comparison */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-24 max-w-3xl mx-auto text-center"
      >
        <h2 className="font-display font-bold text-3xl mb-8">Real Value You Get</h2>
        <div className="bg-cine-surface border border-white/10 rounded-2xl p-8 max-w-md mx-auto">
          <div className="space-y-4 mb-6 text-lg">
            <div className="flex justify-between items-center border-b border-white/5 pb-4">
              <span className="text-gray-300">Course Value</span>
              <span className="font-bold text-white">₹10,000+</span>
            </div>
            <div className="flex justify-between items-center border-b border-white/5 pb-4">
              <span className="text-gray-300">Prompt Packs</span>
              <span className="font-bold text-white">₹5,000+</span>
            </div>
            <div className="flex justify-between items-center pb-2">
              <span className="text-gray-300">Templates</span>
              <span className="font-bold text-white">₹3,000+</span>
            </div>
          </div>
          <div className="pt-6 border-t border-white/10">
            <p className="text-2xl font-display font-bold text-accent-lime">Get everything starting for Free</p>
          </div>
        </div>
      </motion.div>

      {/* Why Choose CineAI */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-24 max-w-4xl mx-auto"
      >
        <h2 className="font-display font-bold text-3xl mb-10 text-center">Why Choose CineAI?</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[
            "Beginner to pro system",
            "Focus on real income (not just learning)",
            "Ready-to-use prompts",
            "Fast content creation",
            "Works on basic devices"
          ].map((item, i) => (
            <div key={i} className="bg-cine-surface border border-white/5 rounded-xl p-6 flex items-start gap-4">
              <div className="bg-accent-lime/10 p-2 rounded-lg shrink-0">
                <Zap className="w-5 h-5 text-accent-lime" />
              </div>
              <p className="font-medium text-white">{item}</p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Testimonials (Short) */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-24 max-w-5xl mx-auto"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            "Got my first client in 10 days",
            "Creating videos in minutes now",
            "Best investment for content creators"
          ].map((quote, i) => (
            <div key={i} className="bg-cine-surface border border-white/5 rounded-2xl p-8 text-center relative mt-4">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 flex gap-1 bg-cine-black px-3 py-1 rounded-full border border-white/10">
                {[...Array(5)].map((_, idx) => <Star key={idx} className="w-4 h-4 text-accent-lime fill-current" />)}
              </div>
              <p className="text-lg font-medium text-white mt-2">"{quote}"</p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Pricing FAQ */}
      <PricingFAQ />

      {/* Final CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-32 mb-12 max-w-4xl mx-auto bg-gradient-to-r from-cine-surface to-cine-black border border-white/10 rounded-3xl p-12 text-center relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-64 h-64 bg-accent-lime/10 blur-[100px] rounded-full pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent-blue/10 blur-[100px] rounded-full pointer-events-none"></div>
        
        <h2 className="relative z-10 font-display font-bold text-4xl md:text-5xl mb-6">Start Creating & Earning with AI Today</h2>
        <p className="relative z-10 text-accent-coral font-bold tracking-wide uppercase text-sm mb-10">
          Limited-time pricing — may increase soon
        </p>
        
        <div className="relative z-10 flex flex-col sm:flex-row items-center justify-center gap-4">
           <button onClick={onSubscribeClick} className="w-full sm:w-auto px-8 py-4 bg-transparent border border-white/20 text-white font-bold text-lg rounded-full hover:bg-white/10 transition-all duration-300">
             Start for Free
           </button>
           <button onClick={onSubscribeClick} className="w-full sm:w-auto px-8 py-4 bg-accent-lime text-cine-black font-bold text-lg rounded-full hover:bg-white transition-all duration-300">
             Get Pro Access
           </button>
        </div>
      </motion.div>
    </div>
  );
};

const PRICING_FAQS = [
  { q: "Do I need experience?", a: "No, everything is beginner-friendly" },
  { q: "Will I get lifetime access?", a: "Yes (for Pro & Elite plans)" },
  { q: "Can I use this for business?", a: "Yes, especially for real estate & services" },
  { q: "Do I need expensive tools?", a: "No, works with free/low-cost tools" },
  { q: "How much does CineAI cost?", a: "CineAI starts for Free for beginner access. The full CineAI Pro course costs ₹999, and the advanced CineAI Elite plan is priced at ₹4999." },
  { q: "Which CineAI plan should I choose?", a: "If you are a beginner, start for Free. For complete learning and results, CineAI Pro at ₹999 is the best option. For advanced systems and client-level skills, choose Elite at ₹4999." },
  { q: "What is included in the Free starter plan?", a: "The Free plan includes beginner lessons, starter prompts, your first AI video project, and community access." },
  { q: "What do I get in CineAI Pro (₹999)?", a: "CineAI Pro includes the full AI filmmaking course, 2000+ prompts, proven content systems, editing workflows, and lifetime access." },
  { q: "What extra benefits are included in CineAI Elite (₹4999)?", a: "CineAI Elite includes everything in Pro plus advanced prompt packs, automation systems, client acquisition strategies, templates, private community access, and live sessions." },
  { q: "Is CineAI a one-time payment or subscription?", a: "CineAI Pro (₹999) and Elite (₹4999) are one-time payments with lifetime access. CineAI Club is a separate monthly subscription for ongoing updates." },
  { q: "Do I get lifetime access after purchase?", a: "Yes, both Pro and Elite plans include lifetime access. You can access your content anytime." },
  { q: "Are there any hidden charges?", a: "No, there are no hidden charges. You pay once, and all included features are clearly listed." },
  { q: "Can I upgrade from the Free plan to Pro or Elite later?", a: "Yes, you can start for Free and upgrade to CineAI Pro or Elite anytime." },
  { q: "Is CineAI Pro (₹999) worth it?", a: "CineAI Pro offers a complete system including prompts, workflows, and monetization strategies, making it highly valuable for its price." },
  { q: "Will I be able to earn after buying CineAI?", a: "CineAI teaches practical systems for freelancing, content creation, and lead generation, which can help you start earning using AI skills." },
  { q: "Is there a refund policy?", a: "Since CineAI provides instant access to digital content, refunds may not be available. You can start for Free to test before upgrading." },
  { q: "How do I access CineAI after payment?", a: "You get instant access to your dashboard after payment, where all lessons and resources are available." },
  { q: "Do I need expensive tools separately?", a: "No, CineAI focuses on free or low-cost tools that work on basic devices." },
  { q: "Why is CineAI priced at ₹999 and ₹4999 compared to other courses?", a: "CineAI is designed to be affordable while still providing high-value systems, making it accessible without compromising on quality." }
];

const PricingFAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="mt-32 max-w-3xl mx-auto">
      <div className="text-center mb-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-lime/10 border border-accent-lime/20 text-xs font-bold uppercase tracking-wider text-accent-lime mb-6"
        >
          <Zap className="w-3 h-3" /> FAQ
        </motion.div>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display font-bold text-3xl md:text-5xl mb-6"
        >
          Pricing Questions
        </motion.h2>
        
        {/* FINAL CONVERSION BOOST */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="p-6 bg-gradient-to-r from-accent-lime/10 to-transparent border border-accent-lime/20 rounded-2xl inline-block max-w-2xl mx-auto"
        >
          <p className="text-xl font-medium text-white">🚀 <span className="text-accent-lime">Not sure yet?</span> Start for Free and upgrade anytime.</p>
        </motion.div>
      </div>

      <motion.div 
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="space-y-4"
      >
        {PRICING_FAQS.map((faq, i) => (
          <motion.div key={i} variants={fadeInUp} className="border border-white/10 rounded-xl bg-cine-surface overflow-hidden">
            <button 
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
              className="w-full flex items-center justify-between p-6 text-left hover:bg-white/5 transition-colors"
            >
              <span className="font-medium text-lg pr-8">{faq.q}</span>
              <ChevronDown className={`w-5 h-5 shrink-0 transition-transform duration-300 ${openIndex === i ? 'rotate-180 text-accent-lime' : 'text-cine-textMuted'}`} />
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
    </div>
  );
};
