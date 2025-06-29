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
    <section className="w-screen min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-white via-gray-50 to-white pt-16 relative">
      {/* Background Grid - Full viewport width */}
      <div className="absolute inset-0 w-screen bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem] opacity-30" />
      
      {/* Floating Elements - Distributed across full viewport */}
      <div className="absolute top-20 left-10 w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
      <div className="absolute top-40 right-20 w-1 h-1 bg-purple-500 rounded-full animate-ping" />
      <div className="absolute bottom-40 left-20 w-1.5 h-1.5 bg-cyan-500 rounded-full animate-bounce" />
      <div className="absolute top-60 right-40 w-1 h-1 bg-pink-500 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
      <div className="absolute bottom-60 left-40 w-1.5 h-1.5 bg-yellow-500 rounded-full animate-ping" style={{ animationDelay: '0.5s' }} />
      <div className="absolute top-32 left-1/2 w-1 h-1 bg-green-500 rounded-full animate-bounce" style={{ animationDelay: '1.5s' }} />

      <div className="w-screen px-8 sm:px-12 lg:px-16 xl:px-20 2xl:px-32 relative z-10">
        <div className="w-full">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 xl:gap-32 2xl:gap-48 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8 lg:space-y-12 xl:space-y-16 text-center lg:text-left order-2 lg:order-1"
            >
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 rounded-full text-base lg:text-lg font-medium text-blue-700"
              >
                <Zap className="w-5 h-5 lg:w-6 lg:h-6" />
                AI-Powered Investment Platform
              </motion.div>

              {/* Main Heading */}
              <div className="space-y-6 lg:space-y-8">
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-bold leading-tight"
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
                  className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl text-gray-600 leading-relaxed"
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
                className="grid grid-cols-3 gap-8 sm:gap-12 lg:gap-16 xl:gap-20 2xl:gap-24"
              >
                <div className="text-center lg:text-left">
                  <div className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold text-gray-900">98.7%</div>
                  <div className="text-base lg:text-lg xl:text-xl 2xl:text-2xl text-gray-500">Accuracy Rate</div>
                </div>
                <div className="text-center lg:text-left">
                  <div className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold text-gray-900">$2.4B+</div>
                  <div className="text-base lg:text-lg xl:text-xl 2xl:text-2xl text-gray-500">Assets Managed</div>
                </div>
                <div className="text-center lg:text-left">
                  <div className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold text-gray-900">15K+</div>
                  <div className="text-base lg:text-lg xl:text-xl 2xl:text-2xl text-gray-500">Active Users</div>
                </div>
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="flex flex-col sm:flex-row gap-6 lg:gap-8 xl:gap-12 justify-center lg:justify-start"
              >
                <Button 
                  size="lg" 
                  onClick={scrollToPricing}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-10 sm:px-12 lg:px-16 xl:px-20 py-5 sm:py-6 lg:py-7 xl:py-8 text-lg sm:text-xl lg:text-2xl xl:text-3xl font-semibold group w-full sm:w-auto"
                >
                  Explore Subscriptions
                  <ArrowRight className="ml-3 w-6 sm:w-7 lg:w-8 xl:w-9 h-6 sm:h-7 lg:h-8 xl:h-9 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  onClick={openDemo}
                  className="border-2 border-gray-300 hover:border-gray-400 px-10 sm:px-12 lg:px-16 xl:px-20 py-5 sm:py-6 lg:py-7 xl:py-8 text-lg sm:text-xl lg:text-2xl xl:text-3xl font-semibold w-full sm:w-auto"
                >
                  Watch Demo
                </Button>
              </motion.div>

              {/* Trust Indicators */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="flex items-center justify-center lg:justify-start gap-8 lg:gap-12 xl:gap-16 pt-6"
              >
                <div className="flex items-center gap-3 text-base lg:text-lg xl:text-xl text-gray-500">
                  <TrendingUp className="w-6 h-6 lg:w-7 lg:h-7 xl:w-8 xl:h-8 text-green-500" />
                  SEC Compliant
                </div>
                <div className="flex items-center gap-3 text-base lg:text-lg xl:text-xl text-gray-500">
                  <Brain className="w-6 h-6 lg:w-7 lg:h-7 xl:w-8 xl:h-8 text-blue-500" />
                  AI-Verified
                </div>
              </motion.div>
            </motion.div>

            {/* Right Content - 3D Scene */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative order-1 lg:order-2"
            >
              <div className="relative h-[500px] sm:h-[600px] lg:h-[700px] xl:h-[800px] 2xl:h-[900px] rounded-3xl overflow-hidden bg-gradient-to-br from-gray-50 to-white border border-gray-200 shadow-2xl">
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-cyan-500/10 rounded-3xl" />
                
                {/* 3D Scene */}
                <SplineScene 
                  scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                  className="w-full h-full"
                />

                {/* Overlay Elements */}
                <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm rounded-xl px-4 py-3 shadow-lg">
                  <div className="text-sm lg:text-base font-semibold text-gray-900">Live AI Analysis</div>
                  <div className="text-xs lg:text-sm text-gray-500">Processing market data...</div>
                </div>

                <div className="absolute bottom-6 right-6 bg-white/90 backdrop-blur-sm rounded-xl px-4 py-3 shadow-lg">
                  <div className="text-sm lg:text-base font-semibold text-green-600">+24.7%</div>
                  <div className="text-xs lg:text-sm text-gray-500">Portfolio Growth</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}