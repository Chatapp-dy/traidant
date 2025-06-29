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
    <section className="w-full py-16 sm:py-20 lg:py-24 xl:py-32 2xl:py-40 bg-gradient-to-br from-blue-50 via-white to-purple-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50" />
      <div className="absolute top-0 left-0 w-full h-72 bg-blue-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-full h-96 bg-purple-500/10 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-0 w-full h-64 bg-cyan-500/5 rounded-full blur-2xl" />
      
      {/* Floating Particles */}
      <div className="absolute top-20 left-10 w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
      <div className="absolute top-40 right-20 w-1 h-1 bg-purple-500 rounded-full animate-ping" />
      <div className="absolute bottom-40 left-20 w-1.5 h-1.5 bg-cyan-500 rounded-full animate-bounce" />
      
      <div className="w-full px-6 sm:px-8 lg:px-12 xl:px-16 2xl:px-24 relative z-10">
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
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 border border-blue-300 rounded-full text-sm lg:text-base font-medium text-blue-700 mb-8 lg:mb-10">
              <Star className="w-4 h-4 lg:w-5 lg:h-5" />
              Join 15,000+ Successful Investors
            </div>

            {/* Main Heading */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold text-gray-900 mb-6 lg:mb-8 leading-tight">
              Start Your AI-Powered
              <br />
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent">
                Investment Journey Today
              </span>
            </h2>

            <p className="text-lg sm:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl text-gray-600 mb-12 lg:mb-16 leading-relaxed">
              Experience the future of investing with our advanced AI technology. 
              Start free and see the difference intelligent automation can make.
            </p>

            {/* Trust Indicators Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 xl:gap-12 2xl:gap-16 mb-12 lg:mb-16">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 lg:p-8 xl:p-10 2xl:p-12 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center justify-center gap-3 lg:gap-4 mb-4 lg:mb-6">
                  <Shield className="w-8 h-8 lg:w-10 lg:h-10 xl:w-12 xl:h-12 text-green-500" />
                  <span className="text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-bold text-gray-900">SEC</span>
                </div>
                <div className="text-gray-700 font-medium mb-2 text-base lg:text-lg xl:text-xl">Registered & Compliant</div>
                <div className="text-sm lg:text-base xl:text-lg text-gray-500">Fully regulated investment advisor</div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 lg:p-8 xl:p-10 2xl:p-12 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center justify-center gap-3 lg:gap-4 mb-4 lg:mb-6">
                  <Users className="w-8 h-8 lg:w-10 lg:h-10 xl:w-12 xl:h-12 text-blue-500" />
                  <span className="text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-bold text-gray-900">15K+</span>
                </div>
                <div className="text-gray-700 font-medium mb-2 text-base lg:text-lg xl:text-xl">Active Investors</div>
                <div className="text-sm lg:text-base xl:text-lg text-gray-500">Growing community of success</div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 lg:p-8 xl:p-10 2xl:p-12 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center justify-center gap-3 lg:gap-4 mb-4 lg:mb-6">
                  <TrendingUp className="w-8 h-8 lg:w-10 lg:h-10 xl:w-12 xl:h-12 text-purple-500" />
                  <span className="text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-bold text-gray-900">98.7%</span>
                </div>
                <div className="text-gray-700 font-medium mb-2 text-base lg:text-lg xl:text-xl">AI Accuracy Rate</div>
                <div className="text-sm lg:text-base xl:text-lg text-gray-500">Industry-leading precision</div>
              </motion.div>
            </div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-6 lg:gap-8 xl:gap-10 justify-center items-center mb-8 lg:mb-10"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  size="lg"
                  onClick={scrollToPricing}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 sm:px-12 lg:px-16 xl:px-20 py-4 sm:py-6 lg:py-8 xl:py-10 text-lg sm:text-xl lg:text-2xl xl:text-3xl font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group w-full sm:w-auto"
                >
                  Get Started Free
                  <ArrowRight className="ml-3 w-5 sm:w-6 lg:w-7 xl:w-8 h-5 sm:h-6 lg:h-7 xl:h-8 group-hover:translate-x-1 transition-transform" />
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
                  className="border-2 border-gray-300 hover:border-gray-400 text-gray-700 hover:bg-gray-50 px-8 sm:px-12 lg:px-16 xl:px-20 py-4 sm:py-6 lg:py-8 xl:py-10 text-lg sm:text-xl lg:text-2xl xl:text-3xl font-semibold rounded-xl transition-all duration-300 w-full sm:w-auto"
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
              className="flex flex-wrap justify-center gap-6 lg:gap-8 xl:gap-10 text-sm lg:text-base xl:text-lg text-gray-600 mb-8 lg:mb-10"
            >
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 lg:w-5 lg:h-5 xl:w-6 xl:h-6 text-green-500" />
                <span>Free to start</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 lg:w-5 lg:h-5 xl:w-6 xl:h-6 text-green-500" />
                <span>No credit card required</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 lg:w-5 lg:h-5 xl:w-6 xl:h-6 text-green-500" />
                <span>Cancel anytime</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 lg:w-5 lg:h-5 xl:w-6 xl:h-6 text-green-500" />
                <span>14-day premium trial</span>
              </div>
            </motion.div>

            {/* Final Trust Line */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="pt-6 lg:pt-8 border-t border-gray-200"
            >
              <p className="text-gray-500 text-sm lg:text-base xl:text-lg">
                Trusted by investors worldwide • FINRA Member • SIPC Protected
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}