import { motion } from 'framer-motion';
import { SplineScene } from '@/components/ui/splite';
import { Button } from '@/components/ui/button';
import { ArrowRight, TrendingUp, Brain, Zap } from 'lucide-react';

export function HeroSection() {
  const scrollToPricing = () => {
    const pricingSection = document.querySelector('[data-section="pricing"]');
    if (pricingSection) {
      pricingSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const openDemo = () => {
    window.open('/demo.html', '_blank');
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-white via-gray-50 to-white pt-16">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem] opacity-30" />
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
      <div className="absolute top-40 right-20 w-1 h-1 bg-purple-500 rounded-full animate-ping" />
      <div className="absolute bottom-40 left-20 w-1.5 h-1.5 bg-cyan-500 rounded-full animate-bounce" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8 text-center lg:text-left"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 rounded-full text-sm font-medium text-blue-700"
            >
              <Zap className="w-4 h-4" />
              AI-Powered Investment Platform
            </motion.div>

            {/* Main Heading */}
            <div className="space-y-4">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight"
              >
                <span className="text-gray-900">Invest</span>
                <br />
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent">
                  Smarter
                </span>
                <br />
                <span className="text-gray-900">with AI</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-lg sm:text-xl text-gray-600 max-w-lg mx-auto lg:mx-0 leading-relaxed"
              >
                Transform your investment strategy with Traidant's cutting-edge AI models. 
                Get intelligent insights, automated analysis, and superior returns.
              </motion.p>
            </div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap justify-center lg:justify-start gap-6 sm:gap-8"
            >
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-gray-900">98.7%</div>
                <div className="text-sm text-gray-500">Accuracy Rate</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-gray-900">$2.4B+</div>
                <div className="text-sm text-gray-500">Assets Managed</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-gray-900">15K+</div>
                <div className="text-sm text-gray-500">Active Users</div>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Button 
                size="lg" 
                onClick={scrollToPricing}
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg font-semibold group w-full sm:w-auto"
              >
                Explore Subscriptions
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={openDemo}
                className="border-2 border-gray-300 hover:border-gray-400 px-8 py-4 text-lg font-semibold w-full sm:w-auto"
              >
                Watch Demo
              </Button>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="flex items-center justify-center lg:justify-start gap-6 pt-4"
            >
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <TrendingUp className="w-4 h-4 text-green-500" />
                SEC Compliant
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <Brain className="w-4 h-4 text-blue-500" />
                AI-Verified
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - 3D Scene */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative order-first lg:order-last"
          >
            <div className="relative h-[400px] sm:h-[500px] lg:h-[600px] rounded-3xl overflow-hidden bg-gradient-to-br from-gray-50 to-white border border-gray-200 shadow-2xl mx-auto max-w-md lg:max-w-none">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-cyan-500/10 rounded-3xl" />
              
              {/* 3D Scene */}
              <SplineScene 
                scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                className="w-full h-full"
              />

              {/* Overlay Elements */}
              <div className="absolute top-4 sm:top-6 left-4 sm:left-6 bg-white/90 backdrop-blur-sm rounded-xl px-3 sm:px-4 py-2 shadow-lg">
                <div className="text-xs sm:text-sm font-semibold text-gray-900">Live AI Analysis</div>
                <div className="text-xs text-gray-500">Processing market data...</div>
              </div>

              <div className="absolute bottom-4 sm:bottom-6 right-4 sm:right-6 bg-white/90 backdrop-blur-sm rounded-xl px-3 sm:px-4 py-2 shadow-lg">
                <div className="text-xs sm:text-sm font-semibold text-green-600">+24.7%</div>
                <div className="text-xs text-gray-500">Portfolio Growth</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}