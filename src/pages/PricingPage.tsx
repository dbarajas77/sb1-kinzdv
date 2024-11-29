import React from 'react';
import { motion } from 'framer-motion';
import { Check, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';

const plans = [
  {
    name: 'Basic',
    price: 49,
    description: 'Perfect for small HOAs',
    features: [
      'Up to 5 reserve studies',
      'Basic AI analysis',
      'PDF report generation',
      'Email support',
    ],
  },
  {
    name: 'Professional',
    price: 99,
    description: 'Ideal for medium-sized HOAs',
    features: [
      'Up to 15 reserve studies',
      'Advanced AI analysis',
      'Custom report templates',
      'Priority email support',
      'Financial scenario planning',
      'Unlimited AI chat assistance',
    ],
    popular: true,
  },
  {
    name: 'Enterprise',
    price: 199,
    description: 'For large HOA management companies',
    features: [
      'Unlimited reserve studies',
      'Advanced AI analysis',
      'Custom report templates',
      '24/7 priority support',
      'Advanced financial modeling',
      'API access',
      'Dedicated account manager',
    ],
  },
];

const PricingPage = () => {
  return (
    <div className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
            Simple, transparent pricing
          </h1>
          <p className="mt-5 text-xl text-gray-500">
            Choose the plan that's right for your HOA
          </p>
        </div>

        <div className="mt-24 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-8">
          {plans.map((plan) => (
            <motion.div
              key={plan.name}
              whileHover={{ y: -10 }}
              className={`relative p-8 bg-white border rounded-2xl shadow-sm flex flex-col ${
                plan.popular ? 'ring-2 ring-blue-600' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-6 -mt-4">
                  <div className="inline-flex rounded-full bg-blue-600 px-4 py-1 text-sm font-semibold text-white">
                    Most Popular
                  </div>
                </div>
              )}

              <div className="mb-5">
                <h3 className="text-2xl font-bold text-gray-900">{plan.name}</h3>
                <p className="mt-2 text-gray-500">{plan.description}</p>
              </div>

              <div className="mb-5">
                <span className="text-4xl font-bold text-gray-900">${plan.price}</span>
                <span className="text-gray-500">/month</span>
              </div>

              <ul className="mb-8 space-y-4 flex-grow">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start">
                    <div className="flex-shrink-0">
                      <Check className="h-6 w-6 text-blue-600" />
                    </div>
                    <p className="ml-3 text-gray-700">{feature}</p>
                  </li>
                ))}
              </ul>

              <Link
                to="/auth/register"
                className={`w-full inline-flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white ${
                  plan.popular
                    ? 'bg-blue-600 hover:bg-blue-700'
                    : 'bg-gray-800 hover:bg-gray-900'
                } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500`}
              >
                Get started
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold text-gray-900">Need a custom plan?</h2>
          <p className="mt-4 text-lg text-gray-500">
            Contact us for custom pricing and features tailored to your needs.
          </p>
          <Link
            to="/contact"
            className="mt-8 inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-blue-50 hover:bg-blue-100"
          >
            Contact Sales
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PricingPage;