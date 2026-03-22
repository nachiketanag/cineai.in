import React from 'react';
import { motion } from 'framer-motion';
import { Shield } from 'lucide-react';

export const PrivacyPolicyPage = () => {
  return (
    <div className="pt-24 pb-24 px-6 max-w-4xl mx-auto">
      <div className="mb-16 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-xs font-bold uppercase tracking-wider text-white mb-6"
        >
          <Shield className="w-3 h-3" /> Legal
        </motion.div>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-display font-bold text-4xl md:text-5xl mb-6 leading-tight"
        >
          Privacy <span className="text-cine-textMuted">Policy.</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-cine-textMuted text-sm"
        >
          Last updated: March 18, 2026
        </motion.p>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="prose prose-invert prose-lg max-w-none text-cine-textMuted"
      >
        <p>
          At CineAI, I take your privacy seriously. This Privacy Policy explains how I collect, use, disclose, and safeguard your information when you visit my website or use my services. Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site.
        </p>

        <h2 className="text-white font-display font-bold mt-12 mb-6">1. Information I Collect</h2>
        <p>
          I may collect information about you in a variety of ways. The information I may collect on the Site includes:
        </p>
        <ul className="list-disc pl-6 space-y-2 mt-4">
          <li><strong>Personal Data:</strong> Personally identifiable information, such as your name, shipping address, email address, and telephone number, and demographic information, such as your age, gender, hometown, and interests, that you voluntarily give to me when you register with the Site or when you choose to participate in various activities related to the Site.</li>
          <li><strong>Derivative Data:</strong> Information my servers automatically collect when you access the Site, such as your IP address, your browser type, your operating system, your access times, and the pages you have viewed directly before and after accessing the Site.</li>
          <li><strong>Financial Data:</strong> Financial information, such as data related to your payment method (e.g. valid credit card number, card brand, expiration date) that I may collect when you purchase, order, return, exchange, or request information about my services from the Site.</li>
        </ul>

        <h2 className="text-white font-display font-bold mt-12 mb-6">2. Use of Your Information</h2>
        <p>
          Having accurate information about you permits me to provide you with a smooth, efficient, and customized experience. Specifically, I may use information collected about you via the Site to:
        </p>
        <ul className="list-disc pl-6 space-y-2 mt-4">
          <li>Create and manage your account.</li>
          <li>Process your transactions and send you related information, including purchase confirmations and invoices.</li>
          <li>Send you technical notices, updates, security alerts, and support and administrative messages.</li>
          <li>Respond to your comments, questions, and requests and provide customer service.</li>
          <li>Communicate with you about products, services, offers, promotions, rewards, and events offered by CineAI and others, and provide news and information I think will be of interest to you.</li>
        </ul>

        <h2 className="text-white font-display font-bold mt-12 mb-6">3. Disclosure of Your Information</h2>
        <p>
          I may share information I have collected about you in certain situations. Your information may be disclosed as follows:
        </p>
        <ul className="list-disc pl-6 space-y-2 mt-4">
          <li><strong>By Law or to Protect Rights:</strong> If I believe the release of information about you is necessary to respond to legal process, to investigate or remedy potential violations of my policies, or to protect the rights, property, and safety of others, I may share your information as permitted or required by any applicable law, rule, or regulation.</li>
          <li><strong>Third-Party Service Providers:</strong> I may share your information with third parties that perform services for me or on my behalf, including payment processing, data analysis, email delivery, hosting services, customer service, and marketing assistance.</li>
        </ul>

        <h2 className="text-white font-display font-bold mt-12 mb-6">4. Security of Your Information</h2>
        <p>
          I use administrative, technical, and physical security measures to help protect your personal information. While I have taken reasonable steps to secure the personal information you provide to me, please be aware that despite my efforts, no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against any interception or other type of misuse.
        </p>

        <h2 className="text-white font-display font-bold mt-12 mb-6">5. Contact Me</h2>
        <p>
          If you have questions or comments about this Privacy Policy, please contact me at:
        </p>
        <p className="mt-4">
          CineAI<br />
          Email: privacy@cineai.in
        </p>
      </motion.div>
    </div>
  );
};
