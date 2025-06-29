"use client";

import { Pricing } from "@/components/ui/pricing";
import { motion } from "framer-motion";
import { Zap } from "lucide-react";

const traidantPlans = [
  {
    name: "FREEMIUM",
    price: "0",
    yearlyPrice: "0",
    period: "forever",
    features: [
      "Basic AI market analysis",
      "3 portfolio tracking slots",
      "Weekly market reports",
      "Community forum access",
      "Email support",
    ],
    description: "Perfect for getting started with AI-powered insights",
    buttonText: "Get Started Free",
    href: "/sign-up",
    isPopular: false,
  },
  {
    name: "PREMIUM",
    price: "9.99",
    yearlyPrice: "7.99",
    period: "month",
    features: [
      "Advanced AI models with 98.7% accuracy",
      "Unlimited portfolio tracking",
      "Real-time alerts & notifications",
      "Daily personalized insights",
      "Risk assessment & optimization",
      "Priority customer support",
      "API access for integrations",
      "Exclusive webinars & research",
    ],
    description: "Unlock the full power of AI-driven investment strategies",
    buttonText: "Start Premium Trial",
    href: "/sign-up",
    isPopular: true,
  },
  {
    name: "ENTERPRISE",
    price: "299",
    yearlyPrice: "239",
    period: "month",
    features: [
      "Everything in Premium",
      "Custom AI model training",
      "Dedicated account manager",
      "White-label solutions",
      "Advanced security & compliance",
      "Custom integrations",
      "SLA agreements",
      "24/7 phone support",
    ],
    description: "For large organizations with specific needs",
    buttonText: "Contact Sales",
    href: "/contact",
    isPopular: false,
  },
];

export function PricingAdvancedSection() {
  return (
    <section className="w-full py-16 sm:py-20 lg:py-24 xl:py-32 bg-gradient-to-br from-gray-50 via-white to-gray-50 relative overflow-hidden">
      {/* Background Elements - Full width */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-50" />
      <div className="absolute top-0 left-0 w-full h-72 bg-blue-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-full h-96 bg-purple-500/5 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-0 w-full h-64 bg-cyan-500/3 rounded-full blur-2xl" />
      
      <div className="w-full px-6 sm:px-8 lg:px-12 xl:px-16 relative z-10">
        <div className="w-full max-w-none">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-5xl mx-auto mb-8 lg:mb-12 xl:mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 rounded-full text-sm font-medium text-blue-700 mb-6">
              <Zap className="w-4 h-4" />
              Flexible Pricing Options
            </div>
          </motion.div>

          <Pricing 
            plans={traidantPlans}
            title="Choose Your Investment Journey"
            description="Start free and upgrade when you're ready to unlock the full potential of AI-powered investing.
All plans include access to our platform and dedicated support."
          />

          {/* Value Proposition */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-center mt-12 lg:mt-16 xl:mt-20 max-w-none"
          >
            <div className="grid sm:grid-cols-3 gap-6 lg:gap-8 xl:gap-12 max-w-6xl mx-auto">
              <div className="space-y-2 p-6 lg:p-8 xl:p-10 bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-200 shadow-sm">
                <div className="text-2xl lg:text-3xl xl:text-4xl font-bold text-gray-900">98.7%</div>
                <div className="text-sm lg:text-base xl:text-lg text-gray-600">AI Prediction Accuracy</div>
              </div>
              <div className="space-y-2 p-6 lg:p-8 xl:p-10 bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-200 shadow-sm">
                <div className="text-2xl lg:text-3xl xl:text-4xl font-bold text-gray-900">$2.4B+</div>
                <div className="text-sm lg:text-base xl:text-lg text-gray-600">Assets Under Management</div>
              </div>
              <div className="space-y-2 p-6 lg:p-8 xl:p-10 bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-200 shadow-sm">
                <div className="text-2xl lg:text-3xl xl:text-4xl font-bold text-gray-900">15K+</div>
                <div className="text-sm lg:text-base xl:text-lg text-gray-600">Active Investors</div>
              </div>
            </div>
            
            <p className="text-gray-600 mt-8 text-lg lg:text-xl xl:text-2xl max-w-4xl mx-auto leading-relaxed">
              Join thousands of successful investors who trust Traidant's AI to grow their wealth.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}