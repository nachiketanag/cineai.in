import React from 'react';
import { motion } from 'framer-motion';
import { FileText } from 'lucide-react';

export const TermsOfServicePage = () => {
  return (
    <div className="pt-24 pb-24 px-6 max-w-4xl mx-auto">
      <div className="mb-16 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-xs font-bold uppercase tracking-wider text-white mb-6"
        >
          <FileText className="w-3 h-3" /> Legal
        </motion.div>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-display font-bold text-4xl md:text-5xl mb-6 leading-tight"
        >
          Terms of <span className="text-cine-textMuted">Service.</span>
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
          Welcome to CineAI.in. These Terms of Service ("Terms") govern your use of our website, courses, community, and any related services provided by CineAI Inc. ("we," "us," or "our"). By accessing or using our services, you agree to be bound by these Terms. If you disagree with any part of the terms, then you may not access the service.
        </p>

        <h2 className="text-white font-display font-bold mt-12 mb-6">1. Accounts and Registration</h2>
        <p>
          When you create an account with us, you must provide us information that is accurate, complete, and current at all times. Failure to do so constitutes a breach of the Terms, which may result in immediate termination of your account on our Service.
        </p>
        <ul className="list-disc pl-6 space-y-2 mt-4">
          <li>You are responsible for safeguarding the password that you use to access the Service and for any activities or actions under your password.</li>
          <li>You agree not to disclose your password to any third party. You must notify us immediately upon becoming aware of any breach of security or unauthorized use of your account.</li>
          <li>You may not use as a username the name of another person or entity or that is not lawfully available for use, a name or trademark that is subject to any rights of another person or entity other than you without appropriate authorization, or a name that is otherwise offensive, vulgar or obscene.</li>
        </ul>

        <h2 className="text-white font-display font-bold mt-12 mb-6">2. Intellectual Property</h2>
        <p>
          The Service and its original content (excluding Content provided by users), features and functionality are and will remain the exclusive property of CineAI Inc. and its licensors. The Service is protected by copyright, trademark, and other laws of both the United States and foreign countries. Our trademarks and trade dress may not be used in connection with any product or service without the prior written consent of CineAI Inc.
        </p>
        <p className="mt-4">
          <strong>Course Materials:</strong> All course materials, videos, templates, and resources provided are for your personal, non-commercial use only. You may not distribute, modify, transmit, reuse, download, repost, copy, or use said Content, whether in whole or in part, for commercial purposes or for personal gain, without express advance written permission from us.
        </p>

        <h2 className="text-white font-display font-bold mt-12 mb-6">3. User Content</h2>
        <p>
          Our Service allows you to post, link, store, share and otherwise make available certain information, text, graphics, videos, or other material ("Content"). You are responsible for the Content that you post to the Service, including its legality, reliability, and appropriateness.
        </p>
        <p className="mt-4">
          By posting Content to the Service, you grant us the right and license to use, modify, publicly perform, publicly display, reproduce, and distribute such Content on and through the Service. You retain any and all of your rights to any Content you submit, post or display on or through the Service and you are responsible for protecting those rights.
        </p>

        <h2 className="text-white font-display font-bold mt-12 mb-6">4. Subscriptions and Billing</h2>
        <p>
          Some parts of the Service are billed on a subscription basis ("Subscription(s)"). You will be billed in advance on a recurring and periodic basis ("Billing Cycle"). Billing cycles are set either on a monthly or annual basis, depending on the type of subscription plan you select when purchasing a Subscription.
        </p>
        <p className="mt-4">
          At the end of each Billing Cycle, your Subscription will automatically renew under the exact same conditions unless you cancel it or CineAI Inc. cancels it. You may cancel your Subscription renewal either through your online account management page or by contacting CineAI Inc. customer support team.
        </p>

        <h2 className="text-white font-display font-bold mt-12 mb-6">5. Termination</h2>
        <p>
          We may terminate or suspend your account immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms. Upon termination, your right to use the Service will immediately cease. If you wish to terminate your account, you may simply discontinue using the Service.
        </p>

        <h2 className="text-white font-display font-bold mt-12 mb-6">6. Limitation of Liability</h2>
        <p>
          In no event shall CineAI Inc., nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from (i) your access to or use of or inability to access or use the Service; (ii) any conduct or content of any third party on the Service; (iii) any content obtained from the Service; and (iv) unauthorized access, use or alteration of your transmissions or content, whether based on warranty, contract, tort (including negligence) or any other legal theory, whether or not we have been informed of the possibility of such damage, and even if a remedy set forth herein is found to have failed of its essential purpose.
        </p>

        <h2 className="text-white font-display font-bold mt-12 mb-6">7. Changes</h2>
        <p>
          We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material we will try to provide at least 30 days notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.
        </p>

        <h2 className="text-white font-display font-bold mt-12 mb-6">8. Contact Us</h2>
        <p>
          If you have any questions about these Terms, please contact us at:
        </p>
        <p className="mt-4">
          CineAI Inc.<br />
          123 AI Boulevard, Suite 400<br />
          San Francisco, CA 94107<br />
          Email: legal@cineai.in
        </p>
      </motion.div>
    </div>
  );
};
