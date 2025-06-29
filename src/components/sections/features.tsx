import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Brain, TrendingUp, Shield, Zap, BarChart3, Target } from 'lucide-react';

const features = [
  {
    icon: Brain,
    title: "Advanced AI Models",
    description: "Proprietary machine learning algorithms trained on decades of market data for superior prediction accuracy.",
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    icon: TrendingUp,
    title: "Real-Time Analytics",
    description: "Live market analysis with instant insights and automated trading recommendations powered by AI.",
    gradient: "from-purple-500 to-pink-500"
  },
  {
    icon: Shield,
    title: "Risk Management",
    description: "Intelligent risk assessment and portfolio protection with automated stop-loss and diversification strategies.",
    gradient: "from-green-500 to-emerald-500"
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Execute trades in milliseconds with our high-frequency trading infrastructure and real-time data feeds.",
    gradient: "from-yellow-500 to-orange-500"
  },
  {
    icon: BarChart3,
    title: "Portfolio Optimization",
    description: "AI-driven portfolio rebalancing and asset allocation for maximum returns with minimal risk exposure.",
    gradient: "from-indigo-500 to-purple-500"
  },
  {
    icon: Target,
    title: "Precision Trading",
    description: "Pinpoint market entry and exit points with 98.7% accuracy using advanced pattern recognition.",
    gradient: "from-red-500 to-pink-500"
  }
];

export function FeaturesSection() {
  const openAIFeatures = () => {
    window.location.href = '/ai-features.html';
  };

  return (
    <section className="w-full py-16 sm:py-20 lg:py-24 xl:py-32 bg-white relative overflow-hidden">
      {/* Background Pattern - Full width */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(0,0,0,0.05)_1px,transparent_0)] bg-[size:40px_40px] opacity-30" />
      
      <div className="w-full px-6 sm:px-8 lg:px-12 xl:px-16 relative z-10">
        <div className="w-full max-w-none">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-5xl mx-auto mb-12 lg:mb-16 xl:mb-20"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 rounded-full text-sm font-medium text-blue-700 mb-6">
              <Zap className="w-4 h-4" />
              Powered by Advanced AI
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              Why Choose <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Traidant</span>
            </h2>
            
            <p className="text-lg sm:text-xl lg:text-2xl xl:text-3xl text-gray-600 leading-relaxed max-w-4xl mx-auto">
              Our cutting-edge AI technology gives you the competitive edge in today's fast-paced financial markets.
            </p>
          </motion.div>

          {/* Features Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 xl:gap-12 max-w-none">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="group h-full"
              >
                <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-white to-gray-50 group-hover:from-gray-50 group-hover:to-white">
                  <CardContent className="p-6 lg:p-8 xl:p-10 h-full flex flex-col">
                    <div className="space-y-4 lg:space-y-6 flex-1">
                      {/* Icon */}
                      <div className={`w-12 h-12 lg:w-14 lg:h-14 xl:w-16 xl:h-16 rounded-xl bg-gradient-to-r ${feature.gradient} p-3 group-hover:scale-110 transition-transform duration-300`}>
                        <feature.icon className="w-full h-full text-white" />
                      </div>

                      {/* Content */}
                      <div className="space-y-3 lg:space-y-4 flex-1">
                        <h3 className="text-xl lg:text-2xl xl:text-3xl font-bold text-gray-900 group-hover:text-gray-700 transition-colors">
                          {feature.title}
                        </h3>
                        <p className="text-gray-600 leading-relaxed text-sm lg:text-base xl:text-lg">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-center mt-12 lg:mt-16 xl:mt-20"
          >
            <p className="text-lg lg:text-xl xl:text-2xl text-gray-600 mb-6">
              Ready to experience the future of investing?
            </p>
            <button
              onClick={openAIFeatures}
              className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700 transition-colors cursor-pointer text-base lg:text-lg xl:text-xl"
            >
              Learn more about our AI technology
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
              >
                →
              </motion.div>
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}