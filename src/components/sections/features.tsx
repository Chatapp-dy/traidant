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
    <section className="w-screen py-20 sm:py-24 lg:py-32 xl:py-40 2xl:py-48 bg-white relative overflow-hidden">
      {/* Background Pattern - Full viewport width */}
      <div className="absolute inset-0 w-screen bg-[radial-gradient(circle_at_1px_1px,rgba(0,0,0,0.05)_1px,transparent_0)] bg-[size:40px_40px] opacity-30" />
      
      <div className="w-screen px-8 sm:px-12 lg:px-16 xl:px-20 2xl:px-32 relative z-10">
        <div className="w-full">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16 lg:mb-20 xl:mb-24 2xl:mb-32"
          >
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 rounded-full text-base lg:text-lg font-medium text-blue-700 mb-8 lg:mb-10">
              <Zap className="w-5 h-5 lg:w-6 lg:h-6" />
              Powered by Advanced AI
            </div>
            
            <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold text-gray-900 mb-8 lg:mb-10 leading-tight">
              Why Choose <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Traidant</span>
            </h2>
            
            <p className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl text-gray-600 leading-relaxed">
              Our cutting-edge AI technology gives you the competitive edge in today's fast-paced financial markets.
            </p>
          </motion.div>

          {/* Features Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 xl:gap-16 2xl:gap-20">
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
                  <CardContent className="p-8 lg:p-10 xl:p-12 2xl:p-16 h-full flex flex-col">
                    <div className="space-y-6 lg:space-y-8 xl:space-y-10 flex-1">
                      {/* Icon */}
                      <div className={`w-16 h-16 lg:w-18 lg:h-18 xl:w-20 xl:h-20 2xl:w-24 2xl:h-24 rounded-xl bg-gradient-to-r ${feature.gradient} p-4 group-hover:scale-110 transition-transform duration-300`}>
                        <feature.icon className="w-full h-full text-white" />
                      </div>

                      {/* Content */}
                      <div className="space-y-4 lg:space-y-5 xl:space-y-6 flex-1">
                        <h3 className="text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-bold text-gray-900 group-hover:text-gray-700 transition-colors">
                          {feature.title}
                        </h3>
                        <p className="text-gray-600 leading-relaxed text-base lg:text-lg xl:text-xl 2xl:text-2xl">
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
            className="text-center mt-16 lg:mt-20 xl:mt-24 2xl:mt-32"
          >
            <p className="text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl text-gray-600 mb-8 lg:mb-10">
              Ready to experience the future of investing?
            </p>
            <button
              onClick={openAIFeatures}
              className="inline-flex items-center gap-3 text-blue-600 font-semibold hover:text-blue-700 transition-colors cursor-pointer text-lg lg:text-xl xl:text-2xl 2xl:text-3xl"
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