import React from 'react';
import { Truck, DollarSign, CreditCard } from 'lucide-react';

const features = [
  {
    icon: Truck,
    title: '10 Days warranty',
    description: 'Return product within 10 days'
  },
  {
    icon: DollarSign,
    title: 'Exchange policy',
    description: 'Money back guarantee on new item'
  },
  {
    icon: CreditCard,
    title: 'Secure payment',
    description: 'We ensure secure payment'
  }
];

const ServiceFeatures = () => {
  return (
    <section className="py-8 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="flex items-center space-x-4 bg-white p-6 rounded-lg">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                  <Icon className="w-6 h-6 text-orange-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">{feature.title}</h3>
                  <p className="text-sm text-gray-500">{feature.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServiceFeatures;