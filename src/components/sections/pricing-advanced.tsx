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
    <section className="w-screen py-20 sm:py-24 lg:py-32 xl:py-40 2xl:py-48 bg-gradient-to-br from-gray-50 via-white to-gray-50 relative overflow-hidden">
      {/* Background Elements - Full viewport width */}
      <div className="absolute inset-0 w-screen bg-gradient-to-br from-gray-50 via-white to-gray-50" />
      <div className="absolute top-0 left-0 w-screen h-72 bg-blue-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-screen h-96 bg-purple-500/5 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-0 w-screen h-64 bg-cyan-500/3 rounded-full blur-2xl" />
      
      <div className="w-screen px-8 sm:px-12 lg:px-16 xl:px-20 2xl:px-32 relative z-10">
        <div className="w-full">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 lg:mb-16 xl:mb-20 2xl:mb-24"
          >
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 rounded-full text-base lg:text-lg font-medium text-blue-700 mb-8 lg:mb-10">
              <Zap className="w-5 h-5 lg:w-6 lg:h-6" />
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
            className="text-center mt-16 lg:mt-20 xl:mt-24 2xl:mt-32"
          >
            <div className="grid sm:grid-cols-3 gap-8 lg:gap-12 xl:gap-16 2xl:gap-20">
              <div className="space-y-3 lg:space-y-4 p-8 lg:p-10 xl:p-12 2xl:p-16 bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-200 shadow-sm">
                <div className="text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold text-gray-900">98.7%</div>
                <div className="text-base lg:text-lg xl:text-xl 2xl:text-2xl text-gray-600">AI Prediction Accuracy</div>
              </div>
              <div className="space-y-3 lg:space-y-4 p-8 lg:p-10 xl:p-12 2xl:p-16 bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-200 shadow-sm">
                <div className="text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold text-gray-900">$2.4B+</div>
                <div className="text-base lg:text-lg xl:text-xl 2xl:text-2xl text-gray-600">Assets Under Management</div>
              </div>
              <div className="space-y-3 lg:space-y-4 p-8 lg:p-10 xl:p-12 2xl:p-16 bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-200 shadow-sm">
                <div className="text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold text-gray-900">15K+</div>
                <div className="text-base lg:text-lg xl:text-xl 2xl:text-2xl text-gray-600">Active Investors</div>
              </div>
            </div>
            
            <p className="text-gray-600 mt-10 lg:mt-12 xl:mt-16 text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl leading-relaxed">
              Join thousands of successful investors who trust Traidant's AI to grow their wealth.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}