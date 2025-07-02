import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Dialog, DialogContent, DialogOverlay, DialogTitle } from '@/components/ui/dialog';
import { CheckCircle, X, User, Mail, Phone, Building, DollarSign, MessageSquare } from 'lucide-react';

export type SubscriptionType = 'freemium' | 'premium' | 'enterprise' | 'general';

interface SubscriptionFormProps {
  isOpen: boolean;
  onClose: () => void;
  subscriptionType: SubscriptionType;
}

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  company: string;
  investmentExperience: string;
  currentPortfolioSize: string;
  primaryGoals: string;
  message: string;
}

const initialFormData: FormData = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  company: '',
  investmentExperience: '',
  currentPortfolioSize: '',
  primaryGoals: '',
  message: ''
};

export function SubscriptionForm({ isOpen, onClose, subscriptionType }: SubscriptionFormProps) {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const getFormConfig = () => {
    switch (subscriptionType) {
      case 'freemium':
        return {
          title: 'Start Your Free Journey',
          subtitle: 'Get started with Traidant\'s AI-powered insights at no cost',
          buttonText: 'Create Free Account',
          showCompany: false,
          showMessage: false,
          requiredFields: ['firstName', 'lastName', 'email', 'investmentExperience']
        };
      case 'premium':
        return {
          title: 'Start Your Premium Trial',
          subtitle: 'Unlock advanced AI features with a 14-day free trial',
          buttonText: 'Start Premium Trial',
          showCompany: false,
          showMessage: false,
          requiredFields: ['firstName', 'lastName', 'email', 'phone', 'investmentExperience', 'currentPortfolioSize']
        };
      case 'enterprise':
        return {
          title: 'Contact Our Sales Team',
          subtitle: 'Let\'s discuss how Traidant can meet your organization\'s needs',
          buttonText: 'Submit Inquiry',
          showCompany: true,
          showMessage: true,
          requiredFields: ['firstName', 'lastName', 'email', 'phone', 'company', 'message']
        };
      default:
        return {
          title: 'Get Started with Traidant',
          subtitle: 'Choose your plan and begin your AI-powered investment journey',
          buttonText: 'Get Started',
          showCompany: false,
          showMessage: false,
          requiredFields: ['firstName', 'lastName', 'email', 'investmentExperience']
        };
    }
  };

  const config = getFormConfig();

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setIsSubmitted(true);

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData(initialFormData);
      onClose();
    }, 3000);
  };

  const isFormValid = () => {
    return config.requiredFields.every(field => formData[field as keyof FormData].trim() !== '');
  };

  if (isSubmitted) {
    return (
      <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogOverlay className="bg-black/50 backdrop-blur-sm" />
        <DialogContent className="max-w-md mx-auto">
          <DialogTitle className="sr-only">Subscription Success</DialogTitle>
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="text-center p-8"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4"
            >
              <CheckCircle className="w-8 h-8 text-green-600" />
            </motion.div>
            
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Success!</h3>
            <p className="text-gray-600 mb-4">
              {subscriptionType === 'enterprise' 
                ? 'Thank you for your inquiry. Our sales team will contact you within 24 hours.'
                : subscriptionType === 'premium'
                ? 'Your premium trial has been activated. Check your email for login details.'
                : 'Your free account has been created. Welcome to Traidant!'
              }
            </p>
            
            <div className="text-sm text-gray-500">
              Redirecting you shortly...
            </div>
          </motion.div>
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogOverlay className="bg-black/50 backdrop-blur-sm" />
      <DialogContent className="max-w-2xl mx-auto max-h-[90vh] overflow-y-auto">
        <DialogTitle className="sr-only">{config.title}</DialogTitle>
        <Card className="border-0 shadow-none">
          <CardHeader className="text-center pb-6">
            <div className="flex justify-between items-start mb-4">
              <div className="flex-1">
                <CardTitle className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">
                  {config.title}
                </CardTitle>
                <p className="text-gray-600">{config.subtitle}</p>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={onClose}
                className="text-gray-400 hover:text-gray-600"
              >
                <X className="w-5 h-5" />
              </Button>
            </div>

            {/* Plan Badge */}
            {subscriptionType !== 'general' && (
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 rounded-full text-sm font-medium text-blue-700">
                {subscriptionType === 'freemium' && <User className="w-4 h-4" />}
                {subscriptionType === 'premium' && <DollarSign className="w-4 h-4" />}
                {subscriptionType === 'enterprise' && <Building className="w-4 h-4" />}
                {subscriptionType.charAt(0).toUpperCase() + subscriptionType.slice(1)} Plan
              </div>
            )}
          </CardHeader>

          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Personal Information */}
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
                  <User className="w-5 h-5" />
                  Personal Information
                </h4>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">
                      First Name <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="firstName"
                      value={formData.firstName}
                      onChange={(e) => handleInputChange('firstName', e.target.value)}
                      placeholder="John"
                      className="h-12"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">
                      Last Name <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="lastName"
                      value={formData.lastName}
                      onChange={(e) => handleInputChange('lastName', e.target.value)}
                      placeholder="Doe"
                      className="h-12"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">
                    Email Address <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    placeholder="john@example.com"
                    className="h-12"
                    required
                  />
                </div>

                {(subscriptionType === 'premium' || subscriptionType === 'enterprise') && (
                  <div className="space-y-2">
                    <Label htmlFor="phone">
                      Phone Number <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      placeholder="+1 (555) 123-4567"
                      className="h-12"
                      required
                    />
                  </div>
                )}

                {config.showCompany && (
                  <div className="space-y-2">
                    <Label htmlFor="company">
                      Company <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="company"
                      value={formData.company}
                      onChange={(e) => handleInputChange('company', e.target.value)}
                      placeholder="Your Company Name"
                      className="h-12"
                      required
                    />
                  </div>
                )}
              </div>

              {/* Investment Information */}
              {subscriptionType !== 'enterprise' && (
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
                    <DollarSign className="w-5 h-5" />
                    Investment Profile
                  </h4>

                  <div className="space-y-2">
                    <Label htmlFor="investmentExperience">
                      Investment Experience <span className="text-red-500">*</span>
                    </Label>
                    <Select value={formData.investmentExperience} onValueChange={(value) => handleInputChange('investmentExperience', value)}>
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

                  {subscriptionType === 'premium' && (
                    <>
                      <div className="space-y-2">
                        <Label htmlFor="currentPortfolioSize">
                          Current Portfolio Size <span className="text-red-500">*</span>
                        </Label>
                        <Select value={formData.currentPortfolioSize} onValueChange={(value) => handleInputChange('currentPortfolioSize', value)}>
                          <SelectTrigger className="h-12">
                            <SelectValue placeholder="Select portfolio size" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="under-10k">Under $10,000</SelectItem>
                            <SelectItem value="10k-50k">$10,000 - $50,000</SelectItem>
                            <SelectItem value="50k-100k">$50,000 - $100,000</SelectItem>
                            <SelectItem value="100k-500k">$100,000 - $500,000</SelectItem>
                            <SelectItem value="500k-1m">$500,000 - $1,000,000</SelectItem>
                            <SelectItem value="over-1m">Over $1,000,000</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="primaryGoals">Primary Investment Goals</Label>
                        <Select value={formData.primaryGoals} onValueChange={(value) => handleInputChange('primaryGoals', value)}>
                          <SelectTrigger className="h-12">
                            <SelectValue placeholder="Select your primary goal" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="growth">Long-term Growth</SelectItem>
                            <SelectItem value="income">Income Generation</SelectItem>
                            <SelectItem value="preservation">Capital Preservation</SelectItem>
                            <SelectItem value="speculation">Active Trading</SelectItem>
                            <SelectItem value="retirement">Retirement Planning</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </>
                  )}
                </div>
              )}

              {/* Message for Enterprise */}
              {config.showMessage && (
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
                    <MessageSquare className="w-5 h-5" />
                    Tell Us About Your Needs
                  </h4>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">
                      Message <span className="text-red-500">*</span>
                    </Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      placeholder="Tell us about your organization's investment needs, team size, and specific requirements..."
                      className="min-h-[120px] resize-none"
                      required
                    />
                  </div>
                </div>
              )}

              {/* Submit Button */}
              <div className="pt-6 border-t border-gray-200">
                <Button
                  type="submit"
                  disabled={!isFormValid() || isSubmitting}
                  className="w-full h-12 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold text-lg disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <div className="flex items-center gap-2">
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Processing...
                    </div>
                  ) : (
                    config.buttonText
                  )}
                </Button>

                {subscriptionType === 'premium' && (
                  <p className="text-center text-sm text-gray-500 mt-3">
                    14-day free trial • No credit card required • Cancel anytime
                  </p>
                )}

                {subscriptionType === 'freemium' && (
                  <p className="text-center text-sm text-gray-500 mt-3">
                    Free forever • No credit card required • Upgrade anytime
                  </p>
                )}
              </div>
            </form>

            {/* Trust Indicators */}
            <div className="mt-6 pt-6 border-t border-gray-200">
              <div className="flex items-center justify-center gap-6 text-sm text-gray-500">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  SEC Compliant
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-blue-500" />
                  FINRA Member
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-purple-500" />
                  SIPC Protected
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </DialogContent>
    </Dialog>
  );
}