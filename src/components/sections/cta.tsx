import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Shield, Users, TrendingUp, Star, CheckCircle } from 'lucide-react';

export function CTASection() {
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
    <section className="w-screen py-20 sm:py-24 lg:py-32 xl:py-40 2xl:py-48 bg-gradient-to-br from-blue-50 via-white to-purple-50 relative overflow-hidden">
      {/* Background Elements - Full viewport width */}
      <div className="absolute inset-0 w-screen bg-gradient-to-br from-blue-50 via-white to-purple-50" />
      <div className="absolute top-0 left-0 w-screen h-72 bg-blue-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-screen h-96 bg-purple-500/10 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-0 w-screen h-64 bg-cyan-500/5 rounded-full blur-2xl" />
      
      {/* Floating Particles */}
      <div className="absolute top-20 left-10 w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
      <div className="absolute top-40 right-20 w-1 h-1 bg-purple-500 rounded-full animate-ping" />
      <div className="absolute bottom-40 left-20 w-1.5 h-1.5 bg-cyan-500 rounded-full animate-bounce" />
      
      <div className="w-screen px-8 sm:px-12 lg:px-16 xl:px-20 2xl:px-32 relative z-10">
        <div className="w-full">
          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-blue-100 to-purple-100 border border-blue-300 rounded-full text-base lg:text-lg font-medium text-blue-700 mb-10 lg:mb-12">
              <Star className="w-5 h-5 lg:w-6 lg:h-6" />
              Join 15,000+ Successful Investors
            </div>

            {/* Main Heading */}
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-bold text-gray-900 mb-8 lg:mb-10 leading-tight">
              Start Your AI-Powered
              <br />
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent">
                Investment Journey Today
              </span>
            </h2>

            <p className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl text-gray-600 mb-16 lg:mb-20 leading-relaxed">
              Experience the future of investing with our advanced AI technology. 
              Start free and see the difference intelligent automation can make.
            </p>

            {/* Trust Indicators Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 xl:gap-16 2xl:gap-20 mb-16 lg:mb-20">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 lg:p-10 xl:p-12 2xl:p-16 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center justify-center gap-4 lg:gap-5 mb-6 lg:mb-8">
                  <Shield className="w-10 h-10 lg:w-12 lg:h-12 xl:w-14 xl:h-14 text-green-500" />
                  <span className="text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold text-gray-900">SEC</span>
                </div>
                <div className="text-gray-700 font-medium mb-3 text-lg lg:text-xl xl:text-2xl">Registered & Compliant</div>
                <div className="text-base lg:text-lg xl:text-xl text-gray-500">Fully regulated investment advisor</div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 lg:p-10 xl:p-12 2xl:p-16 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center justify-center gap-4 lg:gap-5 mb-6 lg:mb-8">
                  <Users className="w-10 h-10 lg:w-12 lg:h-12 xl:w-14 xl:h-14 text-blue-500" />
                  <span className="text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold text-gray-900">15K+</span>
                </div>
                <div className="text-gray-700 font-medium mb-3 text-lg lg:text-xl xl:text-2xl">Active Investors</div>
                <div className="text-base lg:text-lg xl:text-xl text-gray-500">Growing community of success</div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 lg:p-10 xl:p-12 2xl:p-16 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center justify-center gap-4 lg:gap-5 mb-6 lg:mb-8">
                  <TrendingUp className="w-10 h-10 lg:w-12 lg:h-12 xl:w-14 xl:h-14 text-purple-500" />
                  <span className="text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold text-gray-900">98.7%</span>
                </div>
                <div className="text-gray-700 font-medium mb-3 text-lg lg:text-xl xl:text-2xl">AI Accuracy Rate</div>
                <div className="text-base lg:text-lg xl:text-xl text-gray-500">Industry-leading precision</div>
              </motion.div>
            </div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-8 lg:gap-10 xl:gap-12 justify-center items-center mb-10 lg:mb-12"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  size="lg"
                  onClick={scrollToPricing}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-12 sm:px-16 lg:px-20 xl:px-24 py-6 sm:py-8 lg:py-10 xl:py-12 text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group w-full sm:w-auto"
                >
                  Get Started Free
                  <ArrowRight className="ml-4 w-6 sm:w-7 lg:w-8 xl:w-10 h-6 sm:h-7 lg:h-8 xl:h-10 group-hover:translate-x-1 transition-transform" />
                </Button>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button 
                  variant="outline"
                  size="lg"
                  onClick={openDemo}
                  className="border-2 border-gray-300 hover:border-gray-400 text-gray-700 hover:bg-gray-50 px-12 sm:px-16 lg:px-20 xl:px-24 py-6 sm:py-8 lg:py-10 xl:py-12 text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-semibold rounded-xl transition-all duration-300 w-full sm:w-auto"
                >
                  View Demo
                </Button>
              </motion.div>
            </motion.div>

            {/* Benefits List */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="flex flex-wrap justify-center gap-8 lg:gap-10 xl:gap-12 text-base lg:text-lg xl:text-xl text-gray-600 mb-10 lg:mb-12"
            >
              <div className="flex items-center gap-3">
                <CheckCircle className="w-6 h-6 lg:w-7 lg:h-7 xl:w-8 xl:h-8 text-green-500" />
                <span>Free to start</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-6 h-6 lg:w-7 lg:h-7 xl:w-8 xl:h-8 text-green-500" />
                <span>No credit card required</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-6 h-6 lg:w-7 lg:h-7 xl:w-8 xl:h-8 text-green-500" />
                <span>Cancel anytime</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-6 h-6 lg:w-7 lg:h-7 xl:w-8 xl:h-8 text-green-500" />
                <span>14-day premium trial</span>
              </div>
            </motion.div>

            {/* Final Trust Line */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="pt-8 lg:pt-10 border-t border-gray-200"
            >
              <p className="text-gray-500 text-base lg:text-lg xl:text-xl">
                Trusted by investors worldwide • FINRA Member • SIPC Protected
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}