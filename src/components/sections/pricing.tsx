import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle, X, Zap, Crown, TrendingUp } from 'lucide-react';

export function PricingSection() {
  const pricingTiers = [
    {
      name: "Freemium",
      price: "$0",
      period: "forever",
      description: "Perfect for getting started with AI-powered insights",
      features: [
        { text: "Basic AI market analysis", included: true },
        { text: "3 portfolio tracking slots", included: true },
        { text: "Weekly market reports", included: true },
        { text: "Community forum access", included: true },
        { text: "Real-time alerts", included: false },
        { text: "Advanced AI models", included: false },
        { text: "Unlimited portfolios", included: false },
        { text: "Priority support", included: false }
      ],
      cta: "Get Started Free",
      popular: false,
      icon: TrendingUp
    },
    {
      name: "Premium",
      price: "$9.99",
      period: "per month",
      description: "Unlock the full power of AI-driven investment strategies",
      features: [
        { text: "Advanced AI market analysis with 98.7% accuracy", included: true },
        { text: "Unlimited portfolio tracking", included: true },
        { text: "Real-time alerts & notifications", included: true },
        { text: "Daily personalized insights", included: true },
        { text: "Risk assessment & optimization", included: true },
        { text: "Priority customer support", included: true },
        { text: "API access for integrations", included: true },
        { text: "Exclusive webinars & research", included: true }
      ],
      cta: "Start Premium Trial",
      popular: true,
      icon: Crown
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 via-white to-gray-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 rounded-full text-sm font-medium text-blue-700 mb-6">
            <Zap className="w-4 h-4" />
            Simple, Transparent Pricing
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Choose Your <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Investment Journey</span>
          </h2>
          
          <p className="text-xl text-gray-600 leading-relaxed">
            Start free and upgrade when you're ready to unlock the full potential of AI-powered investing.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {pricingTiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative"
            >
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg">
                  Most Popular
                </div>
              )}
              
              <Card className={`h-full ${tier.popular ? 'border-2 border-blue-500 shadow-2xl scale-105' : 'border border-gray-200 shadow-lg'} bg-white`}>
                <CardContent className="p-8">
                  {/* Header */}
                  <div className="text-center mb-8">
                    <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl ${tier.popular ? 'bg-gradient-to-r from-blue-600 to-purple-600' : 'bg-gray-100'} flex items-center justify-center`}>
                      <tier.icon className={`w-8 h-8 ${tier.popular ? 'text-white' : 'text-gray-600'}`} />
                    </div>
                    
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{tier.name}</h3>
                    <p className="text-gray-600 text-sm mb-4">{tier.description}</p>
                    
                    <div className="mb-6">
                      <span className="text-5xl font-bold text-gray-900">{tier.price}</span>
                      <span className="text-gray-500 ml-2">/{tier.period}</span>
                    </div>
                  </div>

                  {/* Features List */}
                  <div className="space-y-4 mb-8">
                    {tier.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start gap-3">
                        {feature.included ? (
                          <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        ) : (
                          <X className="w-5 h-5 text-gray-300 mt-0.5 flex-shrink-0" />
                        )}
                        <span className={`text-sm ${feature.included ? 'text-gray-700' : 'text-gray-400'}`}>
                          {feature.text}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <Button 
                    className={`w-full py-3 text-lg font-semibold ${
                      tier.popular 
                        ? 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white' 
                        : 'bg-gray-900 hover:bg-gray-800 text-white'
                    }`}
                  >
                    {tier.cta}
                  </Button>

                  {tier.name === "Premium" && (
                    <p className="text-center text-sm text-gray-500 mt-3">
                      14-day free trial • Cancel anytime
                    </p>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Value Proposition */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-16 max-w-4xl mx-auto"
        >
          <div className="grid md:grid-cols-3 gap-8">
            <div className="space-y-2">
              <div className="text-2xl font-bold text-gray-900">98.7%</div>
              <div className="text-sm text-gray-600">AI Prediction Accuracy</div>
            </div>
            <div className="space-y-2">
              <div className="text-2xl font-bold text-gray-900">$2.4B+</div>
              <div className="text-sm text-gray-600">Assets Under Management</div>
            </div>
            <div className="space-y-2">
              <div className="text-2xl font-bold text-gray-900">15K+</div>
              <div className="text-sm text-gray-600">Active Investors</div>
            </div>
          </div>
          
          <p className="text-gray-600 mt-8 text-lg">
            Join thousands of successful investors who trust Traidant's AI to grow their wealth.
          </p>
        </motion.div>
      </div>
    </section>
  );
}