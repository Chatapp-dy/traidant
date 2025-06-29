"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, X } from "lucide-react";
import { useState } from "react";

interface PricingPlan {
  name: string;
  price: string;
  yearlyPrice: string;
  period: string;
  features: string[];
  description: string;
  buttonText: string;
  href: string;
  isPopular: boolean;
}

interface PricingProps {
  plans: PricingPlan[];
  title?: string;
  description?: string;
}

export function Pricing({ plans, title, description }: PricingProps) {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <div className="w-full">
      {/* Header */}
      {(title || description) && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 lg:mb-16"
        >
          {title && (
            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold text-gray-900 mb-6 lg:mb-8 leading-tight">
              {title}
            </h2>
          )}
          {description && (
            <p className="text-lg sm:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl text-gray-600 leading-relaxed max-w-4xl mx-auto">
              {description}
            </p>
          )}
        </motion.div>
      )}

      {/* Billing Toggle */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="flex items-center justify-center mb-12 lg:mb-16"
      >
        <div className="flex items-center gap-4 lg:gap-6 p-2 bg-gray-100 rounded-xl">
          <button
            onClick={() => setIsYearly(false)}
            className={`px-4 lg:px-6 py-2 lg:py-3 rounded-lg font-medium transition-all text-sm lg:text-base xl:text-lg ${
              !isYearly
                ? "bg-white text-gray-900 shadow-sm"
                : "text-gray-600 hover:text-gray-900"
            }`}
          >
            Monthly
          </button>
          <button
            onClick={() => setIsYearly(true)}
            className={`px-4 lg:px-6 py-2 lg:py-3 rounded-lg font-medium transition-all text-sm lg:text-base xl:text-lg ${
              isYearly
                ? "bg-white text-gray-900 shadow-sm"
                : "text-gray-600 hover:text-gray-900"
            }`}
          >
            Yearly
            <span className="ml-2 text-xs lg:text-sm text-green-600 font-semibold">Save 20%</span>
          </button>
        </div>
      </motion.div>

      {/* Pricing Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 xl:gap-12 2xl:gap-16">
        {plans.map((plan, index) => (
          <motion.div
            key={plan.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
            className="relative"
          >
            {plan.isPopular && (
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                <Badge className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 lg:px-6 py-1 lg:py-2 text-sm lg:text-base font-semibold shadow-lg">
                  Most Popular
                </Badge>
              </div>
            )}

            <Card
              className={`h-full transition-all duration-300 ${
                plan.isPopular
                  ? "border-2 border-blue-500 shadow-2xl scale-105 bg-gradient-to-br from-blue-50 to-purple-50"
                  : "border border-gray-200 shadow-lg hover:shadow-xl bg-white"
              }`}
            >
              <CardContent className="p-6 lg:p-8 xl:p-10 2xl:p-12 h-full flex flex-col">
                {/* Plan Header */}
                <div className="text-center mb-6 lg:mb-8">
                  <h3 className="text-lg lg:text-xl xl:text-2xl 2xl:text-3xl font-bold text-gray-900 mb-2 lg:mb-3">
                    {plan.name}
                  </h3>
                  <p className="text-gray-600 text-sm lg:text-base xl:text-lg mb-4 lg:mb-6">
                    {plan.description}
                  </p>

                  {/* Price */}
                  <div className="mb-4 lg:mb-6">
                    {plan.price === "Contact Sales" ? (
                      <div className="text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-bold text-gray-900">
                        Contact Sales
                      </div>
                    ) : (
                      <>
                        <div className="flex items-baseline justify-center gap-1">
                          <span className="text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold text-gray-900">
                            ${isYearly ? plan.yearlyPrice : plan.price}
                          </span>
                          {plan.period && (
                            <span className="text-gray-500 text-sm lg:text-base xl:text-lg">
                              /{plan.period}
                            </span>
                          )}
                        </div>
                        {isYearly && plan.price !== "0" && (
                          <div className="text-sm lg:text-base text-gray-500 mt-1">
                            Billed annually
                          </div>
                        )}
                      </>
                    )}
                  </div>
                </div>

                {/* Features */}
                <div className="flex-1 mb-6 lg:mb-8">
                  <ul className="space-y-3 lg:space-y-4">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-3">
                        <Check className="w-4 h-4 lg:w-5 lg:h-5 xl:w-6 xl:h-6 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700 text-sm lg:text-base xl:text-lg leading-relaxed">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Button */}
                <Button
                  className={`w-full py-3 lg:py-4 xl:py-5 text-base lg:text-lg xl:text-xl font-semibold ${
                    plan.isPopular
                      ? "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
                      : "bg-gray-900 hover:bg-gray-800 text-white"
                  }`}
                >
                  {plan.buttonText}
                </Button>

                {plan.name === "PREMIUM" && (
                  <p className="text-center text-xs lg:text-sm text-gray-500 mt-3 lg:mt-4">
                    14-day free trial • Cancel anytime
                  </p>
                )}
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}