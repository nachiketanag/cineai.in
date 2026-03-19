import React from 'react';
import { motion } from 'framer-motion';
import { Check, X, Zap, Crown, ArrowRight } from 'lucide-react';

const PLANS = [
  {
    name: "Starter",
    price: "Free",
    period: "forever",
    desc: "Perfect for getting your feet wet with AI filmmaking.",
    features: [
      "Access to 3 beginner courses",
      "Basic community access (read-only)",
      "Monthly newsletter",
      "Standard support"
    ],
    missing: [
      "Advanced masterclasses",
      "Live weekly Q&A calls",
      "Private Discord channels",
      "1-on-1 mentorship",
      "Job board access"
    ],
    buttonText: "Start Learning",
    buttonVariant: "outline",
    popular: false
  },
  {
    name: "Pro",
    price: "$49",
    period: "/month",
    desc: "Everything you need to become a professional AI filmmaker.",
    features: [
      "Access to ALL courses & masterclasses",
      "Full community & Discord access",
      "Weekly live Q&A with experts",
      "Downloadable templates & assets",
      "Exclusive job board access",
      "Priority email support"
    ],
    missing: [
      "1-on-1 mentorship",
      "Agency setup consulting"
    ],
    buttonText: "Join Pro",
    buttonVariant: "primary",
    popular: true
  },
  {
    name: "Agency",
    price: "$199",
    period: "/month",
    desc: "For teams and serious freelancers scaling their business.",
    features: [
      "Everything in Pro",
      "3 Team member accounts",
      "Monthly 1-on-1 mentorship call",
      "Agency setup & scaling consulting",
      "White-label client templates",
      "24/7 priority Slack support"
    ],
    missing: [],
    buttonText: "Contact Sales",
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
          Invest in Your <span className="text-cine-textMuted">Future.</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-cine-textMuted max-w-2xl mx-auto text-lg"
        >
          Choose the plan that fits your goals. Cancel anytime. No hidden fees.
        </motion.p>
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
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-accent-lime text-cine-black text-xs font-bold uppercase tracking-wider rounded-full flex items-center gap-1">
                <Crown className="w-3 h-3" /> Most Popular
              </div>
            )}
            
            <div className="mb-8">
              <h3 className="font-display font-bold text-2xl mb-2">{plan.name}</h3>
              <p className="text-cine-textMuted text-sm h-10">{plan.desc}</p>
            </div>
            
            <div className="mb-8 flex items-baseline gap-1">
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
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              
              {plan.missing.length > 0 && (
                <>
                  <p className="text-xs font-bold uppercase tracking-wider text-cine-textMuted mb-4">Not included</p>
                  <ul className="space-y-4">
                    {plan.missing.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-cine-textMuted/50">
                        <X className="w-5 h-5 shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </>
              )}
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* FAQ Teaser */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-24 text-center"
      >
        <p className="text-cine-textMuted mb-4">Have questions about our plans?</p>
        <a href="#" className="inline-flex items-center gap-2 text-white font-bold hover:text-accent-lime transition-colors">
          Read our FAQ <ArrowRight className="w-4 h-4" />
        </a>
      </motion.div>
    </div>
  );
};
