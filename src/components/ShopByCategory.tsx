import React from 'react';
import { Heart, Zap, Dumbbell, Pill, Droplet, Shield } from 'lucide-react';

const categories = [
  { name: 'Medicine', subtext: '12 items', icon: Pill },
  { name: 'Vitamins', subtext: '8 items', icon: Zap },
  { name: 'Supplements', subtext: '15 items', icon: Dumbbell },
  { name: 'Fitness', subtext: '7 items', icon: Dumbbell },
  { name: 'Self treatment', subtext: '23 items', icon: Heart },
  { name: 'Healthy', subtext: '13 items', icon: Shield },
];

const ShopByCategory = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Shop by Category</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {categories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div key={index} className="text-center group cursor-pointer">
                <div className="w-20 h-20 mx-auto mb-4 bg-[#F5F1EB] rounded-full flex items-center justify-center group-hover:bg-orange-100 transition">
                  <Icon className="w-8 h-8 text-gray-700" />
                </div>
                <h3 className="font-semibold text-gray-900">{category.name}</h3>
                <p className="text-sm text-gray-500">{category.subtext}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ShopByCategory;