import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { CheckCircle, X, ArrowLeft, Crown, TrendingUp, Zap } from 'lucide-react';

export type SubscriptionType = 'freemium' | 'premium' | 'enterprise' | 'general';

interface SubscriptionFormProps {
  isOpen: boolean;
  onClose: () => void;
  subscriptionType: SubscriptionType;
}

export function SubscriptionForm({ isOpen, onClose, subscriptionType }: SubscriptionFormProps) {
  const [step, setStep] = useState<'selection' | 'form'>('selection');
  const [selectedPlan, setSelectedPlan] = useState<SubscriptionType>(subscriptionType);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    experience: '',
    company: ''
  });

  const plans = [
    {
      id: 'freemium' as const,
      name: 'Freemium',
      price: 'Free',
      period: 'forever',
      description: 'Perfect for getting started with AI-powered insights',
      features: [
        'Basic AI market analysis',
        '3 portfolio tracking slots',
        'Weekly market reports',
        'Community forum access',
        'Email support'
      ],
      icon: TrendingUp,
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      id: 'premium' as const,
      name: 'Premium',
      price: '$9.99',
      period: 'per month',
      description: 'Unlock the full power of AI-driven investment strategies',
      features: [
        'Advanced AI models with 98.7% accuracy',
        'Unlimited portfolio tracking',
        'Real-time alerts & notifications',
        'Daily personalized insights',
        'Risk assessment & optimization',
        'Priority customer support',
        'API access for integrations',
        'Exclusive webinars & research'
      ],
      icon: Crown,
      gradient: 'from-blue-500 to-purple-500',
      popular: true
    },
    {
      id: 'enterprise' as const,
      name: 'Enterprise',
      price: 'Custom',
      period: 'pricing',
      description: 'For large organizations with specific needs',
      features: [
        'Everything in Premium',
        'Custom AI model training',
        'Dedicated account manager',
        'White-label solutions',
        'Advanced security & compliance',
        'Custom integrations',
        'SLA agreements',
        '24/7 phone support'
      ],
      icon: Zap,
      gradient: 'from-purple-500 to-pink-500'
    }
  ];

  const handlePlanSelect = (planId: SubscriptionType) => {
    setSelectedPlan(planId);
    if (planId === 'enterprise') {
      // For enterprise, we might want to redirect to a contact form or sales page
      window.location.href = '/contact';
      onClose();
    } else {
      setStep('form');
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', { plan: selectedPlan, ...formData });
    onClose();
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const resetForm = () => {
    setStep('selection');
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      experience: '',
      company: ''
    });
  };

  const handleClose = () => {
    resetForm();
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto p-0 gap-0">
        <DialogTitle className="sr-only">
          {step === 'selection' ? 'Choose Your Subscription Plan' : 'Complete Your Registration'}
        </DialogTitle>
        
        <AnimatePresence mode="wait">
          {step === 'selection' ? (
            <motion.div
              key="selection"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="p-6"
            >
              {/* Header */}
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-2">Choose Your Plan</h2>
                <p className="text-gray-600">Select the perfect plan for your investment journey</p>
              </div>

              {/* Plans Grid */}
              <div className="grid md:grid-cols-3 gap-6">
                {plans.map((plan) => (
                  <Card 
                    key={plan.id}
                    className={`relative cursor-pointer transition-all duration-300 hover:shadow-lg ${
                      plan.popular ? 'border-2 border-blue-500 scale-105' : 'border border-gray-200'
                    }`}
                    onClick={() => handlePlanSelect(plan.id)}
                  >
                    {plan.popular && (
                      <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                        Most Popular
                      </div>
                    )}
                    
                    <CardContent className="p-6">
                      <div className="text-center mb-6">
                        <div className={`w-12 h-12 mx-auto mb-3 rounded-xl bg-gradient-to-r ${plan.gradient} flex items-center justify-center`}>
                          <plan.icon className="w-6 h-6 text-white" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                        <div className="mb-2">
                          <span className="text-2xl font-bold text-gray-900">{plan.price}</span>
                          {plan.period && <span className="text-gray-500 ml-1">/{plan.period}</span>}
                        </div>
                        <p className="text-sm text-gray-600">{plan.description}</p>
                      </div>

                      <div className="space-y-3 mb-6">
                        {plan.features.slice(0, 4).map((feature, index) => (
                          <div key={index} className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-gray-700">{feature}</span>
                          </div>
                        ))}
                        {plan.features.length > 4 && (
                          <div className="text-sm text-gray-500">
                            +{plan.features.length - 4} more features
                          </div>
                        )}
                      </div>

                      <Button 
                        className={`w-full ${
                          plan.popular 
                            ? 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white' 
                            : 'bg-gray-900 hover:bg-gray-800 text-white'
                        }`}
                      >
                        {plan.id === 'enterprise' ? 'Contact Sales' : 'Select Plan'}
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="form"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.3 }}
              className="p-6"
            >
              {/* Header */}
              <div className="flex items-center gap-4 mb-6">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setStep('selection')}
                  className="p-2"
                >
                  <ArrowLeft className="w-4 h-4" />
                </Button>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">Complete Your Registration</h2>
                  <p className="text-gray-600">
                    You've selected: <span className="font-semibold">{plans.find(p => p.id === selectedPlan)?.name}</span>
                  </p>
                </div>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name *</Label>
                    <Input 
                      id="firstName" 
                      placeholder="John" 
                      value={formData.firstName}
                      onChange={(e) => handleInputChange('firstName', e.target.value)}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name *</Label>
                    <Input 
                      id="lastName" 
                      placeholder="Doe" 
                      value={formData.lastName}
                      onChange={(e) => handleInputChange('lastName', e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email Address *</Label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="john@example.com" 
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="experience">Investment Experience</Label>
                  <Select value={formData.experience} onValueChange={(value) => handleInputChange('experience', value)}>
                    <SelectTrigger>
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

                {selectedPlan === 'enterprise' && (
                  <div className="space-y-2">
                    <Label htmlFor="company">Company Name</Label>
                    <Input 
                      id="company" 
                      placeholder="Your Company" 
                      value={formData.company}
                      onChange={(e) => handleInputChange('company', e.target.value)}
                    />
                  </div>
                )}

                <div className="flex gap-4 pt-4">
                  <Button 
                    type="button"
                    variant="outline"
                    onClick={() => setStep('selection')}
                    className="flex-1"
                  >
                    Back
                  </Button>
                  <Button 
                    type="submit"
                    className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                  >
                    {selectedPlan === 'freemium' ? 'Get Started Free' : 'Start Trial'}
                  </Button>
                </div>
              </form>

              {/* Benefits */}
              <div className="mt-8 pt-6 border-t border-gray-200">
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <CheckCircle className="w-5 h-5 text-green-500 mx-auto mb-1" />
                    <div className="text-sm text-gray-600">Free to start</div>
                  </div>
                  <div>
                    <CheckCircle className="w-5 h-5 text-green-500 mx-auto mb-1" />
                    <div className="text-sm text-gray-600">No setup fees</div>
                  </div>
                  <div>
                    <CheckCircle className="w-5 h-5 text-green-500 mx-auto mb-1" />
                    <div className="text-sm text-gray-600">Cancel anytime</div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Close Button */}
        <Button
          variant="ghost"
          size="sm"
          onClick={handleClose}
          className="absolute top-4 right-4 p-2"
        >
          <X className="w-4 h-4" />
        </Button>
      </DialogContent>
    </Dialog>
  );
}