import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { ArrowRight, CheckCircle, Star, Users, TrendingUp, Shield } from 'lucide-react';
import { useState } from 'react';

export function CTASection() {
  const [showForm, setShowForm] = useState(false);

  return (
    <section className="py-24 bg-gradient-to-br from-gray-900 via-black to-gray-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-cyan-500/5 rounded-full blur-2xl" />
      <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-purple-500/5 rounded-full blur-xl" />
      
      {/* Floating Particles */}
      <div className="absolute top-20 left-10 w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
      <div className="absolute top-40 right-20 w-1 h-1 bg-purple-500 rounded-full animate-ping" />
      <div className="absolute bottom-40 left-20 w-1.5 h-1.5 bg-cyan-500 rounded-full animate-bounce" />
      <div className="absolute top-60 right-40 w-1 h-1 bg-pink-500 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
      <div className="absolute bottom-60 left-40 w-1.5 h-1.5 bg-yellow-500 rounded-full animate-ping" style={{ animationDelay: '0.5s' }} />
      
      <div className="w-full px-6 relative z-10">
        {!showForm ? (
          /* Main CTA */
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-7xl mx-auto text-center"
          >
            {/* Social Proof */}
            <div className="flex justify-center items-center gap-8 mb-12">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 border-2 border-gray-800" />
                  ))}
                </div>
                <span className="text-sm text-gray-400">15,000+ investors</span>
              </div>
              
              <div className="flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
                <span className="text-sm text-gray-400 ml-1">4.9/5 rating</span>
              </div>
            </div>

            {/* Main Heading */}
            <h2 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-8 leading-tight">
              Ready to Transform
              <br />
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Your Investment Strategy?
              </span>
            </h2>

            <p className="text-xl lg:text-2xl text-gray-300 mb-16 max-w-4xl mx-auto leading-relaxed">
              Join thousands of successful investors who trust Traidant's AI to grow their wealth. 
              Start with our free plan or unlock premium features with industry-leading accuracy.
            </p>

            {/* Enhanced Stats Grid */}
            <div className="grid md:grid-cols-3 gap-8 lg:gap-16 mb-16 max-w-5xl mx-auto">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10"
              >
                <div className="flex items-center justify-center gap-3 mb-4">
                  <Shield className="w-8 h-8 text-green-400" />
                  <span className="text-2xl font-bold text-white">98.7%</span>
                </div>
                <div className="text-gray-300 font-medium">AI Prediction Accuracy</div>
                <div className="text-sm text-gray-400 mt-2">SEC Registered & Compliant</div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10"
              >
                <div className="flex items-center justify-center gap-3 mb-4">
                  <Users className="w-8 h-8 text-blue-400" />
                  <span className="text-2xl font-bold text-white">$2.4B+</span>
                </div>
                <div className="text-gray-300 font-medium">Assets Under Management</div>
                <div className="text-sm text-gray-400 mt-2">FINRA Member Protection</div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10"
              >
                <div className="flex items-center justify-center gap-3 mb-4">
                  <TrendingUp className="w-8 h-8 text-purple-400" />
                  <span className="text-2xl font-bold text-white">15K+</span>
                </div>
                <div className="text-gray-300 font-medium">Active Investors</div>
                <div className="text-sm text-gray-400 mt-2">SIPC Protected Accounts</div>
              </motion.div>
            </div>

            {/* Enhanced CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  size="lg"
                  onClick={() => setShowForm(true)}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-12 py-6 text-xl font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group"
                >
                  Start Your Journey
                  <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform" />
                </Button>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button 
                  variant="outline"
                  size="lg"
                  onClick={() => window.open('/demo.html', '_blank')}
                  className="border-2 border-white/30 hover:border-white/50 text-white hover:bg-white/10 px-12 py-6 text-xl font-semibold rounded-xl backdrop-blur-sm transition-all duration-300"
                >
                  Watch Demo
                </Button>
              </motion.div>
            </motion.div>

            <p className="text-sm text-gray-400">
              Start free • No credit card required • Upgrade anytime • 14-day premium trial
            </p>

            {/* Additional Trust Indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="mt-16 pt-8 border-t border-white/10"
            >
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
                <div className="text-center">
                  <div className="text-lg font-bold text-white mb-1">0.003s</div>
                  <div className="text-xs text-gray-400">Response Time</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-bold text-white mb-1">24/7</div>
                  <div className="text-xs text-gray-400">Market Monitoring</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-bold text-white mb-1">256-bit</div>
                  <div className="text-xs text-gray-400">Encryption</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-bold text-white mb-1">99.9%</div>
                  <div className="text-xs text-gray-400">Uptime SLA</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        ) : (
          /* Subscription Form */
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl mx-auto"
          >
            <Card className="shadow-2xl border-0 bg-white">
              <CardContent className="p-8">
                <div className="text-center mb-8">
                  <h3 className="text-3xl font-bold text-gray-900 mb-2">Get Started with Traidant</h3>
                  <p className="text-gray-600">Choose your plan and start your AI-powered investment journey</p>
                </div>

                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" placeholder="John" className="h-12" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" placeholder="Doe" className="h-12" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input id="email" type="email" placeholder="john@example.com" className="h-12" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="plan">Choose Your Plan</Label>
                    <Select>
                      <SelectTrigger className="h-12">
                        <SelectValue placeholder="Select a plan" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="freemium">Freemium - Free Forever</SelectItem>
                        <SelectItem value="premium">Premium - $9.99/month</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="investment">Investment Experience</Label>
                    <Select>
                      <SelectTrigger className="h-12">
                        <SelectValue placeholder="Select your experience level" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="beginner">Beginner (0-2 years)</SelectItem>
                        <SelectItem value="intermediate">Intermediate (2-5 years)</SelectItem>
                        <SelectItem value="advanced">Advanced (5+ years)</SelectItem>
                        <SelectItem value="professional">Professional Trader</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="flex gap-4 pt-4">
                    <Button 
                      type="button"
                      variant="outline"
                      onClick={() => setShowForm(false)}
                      className="flex-1 h-12"
                    >
                      Back
                    </Button>
                    <Button 
                      type="submit"
                      className="flex-1 h-12 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                    >
                      Get Started
                    </Button>
                  </div>
                </form>

                <div className="mt-6 pt-6 border-t border-gray-200">
                  <div className="flex items-center justify-center gap-6 text-sm text-gray-500">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      Free to start
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      No setup fees
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      Cancel anytime
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        )}
      </div>
    </section>
  );
}