"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { CheckCircle, Zap } from "lucide-react";
import { cn } from "@/lib/utils";
import { SubscriptionForm } from '@/components/ui/subscription-form';
import { useSubscriptionForm } from '@/hooks/use-subscription-form';

interface PricingPlan {
  name: string;
  price: string;
  yearlyPrice: string;
  period: string;
  features: string[];
  description: string;
  buttonText: string;
  href: string;
  isPopular?: boolean;
}

interface PricingProps {
  plans: PricingPlan[];
  title?: string;
  description?: string;
}

export function Pricing({ plans, title, description }: PricingProps) {
  const [isYearly, setIsYearly] = useState(false);
  const { isOpen, subscriptionType, openForm, closeForm } = useSubscriptionForm();

  const handlePlanSelect = (planName: string) => {
    const planType = planName.toLowerCase() as 'freemium' | 'premium' | 'enterprise';
    if (planType === 'enterprise') {
      openForm('enterprise');
    } else if (planType === 'premium') {
      openForm('premium');
    } else {
      openForm('freemium');
    }
  };

  return (
    <>
      <div className="w-full">
        {/* Header */}
        {(title || description) && (
          <div className="text-center mb-8 lg:mb-12 xl:mb-16">
            {title && (
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-4 lg:mb-6"
              >
                {title}
              </motion.h2>
            )}
            {description && (
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-lg sm:text-xl lg:text-2xl xl:text-3xl text-gray-600 leading-relaxed max-w-4xl mx-auto"
              >
                {description}
              </motion.p>
            )}
          </div>
        )}

        {/* Billing Toggle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex items-center justify-center gap-4 mb-8 lg:mb-12 xl:mb-16"
        >
          <span className={cn("text-sm lg:text-base font-medium", !isYearly ? "text-gray-900" : "text-gray-500")}>
            Monthly
          </span>
          <Switch
            checked={isYearly}
            onCheckedChange={setIsYearly}
            className="data-[state=checked]:bg-gradient-to-r data-[state=checked]:from-blue-600 data-[state=checked]:to-purple-600"
          />
          <span className={cn("text-sm lg:text-base font-medium", isYearly ? "text-gray-900" : "text-gray-500")}>
            Yearly
          </span>
          {isYearly && (
            <Badge variant="secondary" className="bg-green-100 text-green-700 hover:bg-green-100">
              Save 20%
            </Badge>
          )}
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-3 gap-6 lg:gap-8 xl:gap-12 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              className={cn(
                "relative",
                plan.isPopular && "lg:scale-105"
              )}
            >
              {plan.isPopular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                  <Badge className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-1 text-sm font-semibold shadow-lg">
                    <Zap className="w-3 h-3 mr-1" />
                    Most Popular
                  </Badge>
                </div>
              )}

              <Card
                className={cn(
                  "h-full transition-all duration-300 hover:shadow-xl",
                  plan.isPopular
                    ? "border-2 border-blue-500 shadow-xl bg-gradient-to-br from-white to-blue-50/30"
                    : "border border-gray-200 shadow-lg hover:border-gray-300 bg-white"
                )}
              >
                <CardHeader className="text-center pb-6 lg:pb-8">
                  <div className="space-y-2 lg:space-y-3">
                    <h3 className="text-xl lg:text-2xl xl:text-3xl font-bold text-gray-900">
                      {plan.name}
                    </h3>
                    <p className="text-sm lg:text-base text-gray-600 leading-relaxed">
                      {plan.description}
                    </p>
                  </div>

                  <div className="pt-4 lg:pt-6">
                    {plan.price === "Contact Sales" ? (
                      <div className="text-2xl lg:text-3xl xl:text-4xl font-bold text-gray-900">
                        Contact Sales
                      </div>
                    ) : (
                      <div className="space-y-1">
                        <div className="text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900">
                          ${isYearly ? plan.yearlyPrice : plan.price}
                          {plan.period && (
                            <span className="text-lg lg:text-xl xl:text-2xl text-gray-500 font-normal">
                              /{isYearly ? "month" : plan.period}
                            </span>
                          )}
                        </div>
                        {isYearly && plan.price !== "0" && (
                          <div className="text-sm text-gray-500">
                            Billed annually (${(parseFloat(plan.yearlyPrice) * 12).toFixed(2)}/year)
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </CardHeader>

                <CardContent className="space-y-6 lg:space-y-8">
                  {/* Features */}
                  <ul className="space-y-3 lg:space-y-4">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm lg:text-base text-gray-700 leading-relaxed">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <Button
                    onClick={() => handlePlanSelect(plan.name)}
                    className={cn(
                      "w-full py-3 lg:py-4 text-base lg:text-lg font-semibold transition-all duration-300",
                      plan.isPopular
                        ? "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl"
                        : "bg-gray-900 hover:bg-gray-800 text-white"
                    )}
                  >
                    {plan.buttonText}
                  </Button>

                  {/* Additional Info */}
                  {plan.name === "PREMIUM" && (
                    <p className="text-center text-xs lg:text-sm text-gray-500">
                      14-day free trial • Cancel anytime
                    </p>
                  )}
                  {plan.name === "FREEMIUM" && (
                    <p className="text-center text-xs lg:text-sm text-gray-500">
                      No credit card required
                    </p>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      <SubscriptionForm 
        isOpen={isOpen}
        onClose={closeForm}
        subscriptionType={subscriptionType}
      />
    </>
  );
}