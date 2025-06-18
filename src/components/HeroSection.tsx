"use client";
import React from "react";
import { useRouter } from "next/navigation";

const HeroSection = () => {
  const router = useRouter();
  return (
    <section className="bg-[#F5F1EB] py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Your trusted
              <br />
              care now
              <br />
              and always
            </h1>
            <p className="text-gray-600 mb-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing
              <br />
              elit, sed do eiusmod tempor
            </p>
            <button
              onClick={() => router.push("/shop")}
              className="bg-gray-900 text-white px-8 py-3 rounded hover:bg-gray-800 transition">
              Shop Now
            </button>
          </div>
          <div className="lg:w-1/2 relative">
            <div className="relative group">
              {/* Floating elements around image */}
              <div className="absolute -top-6 -left-6 w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full animate-bounce delay-100"></div>
              <div className="absolute -bottom-4 -right-4 w-8 h-8 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full animate-bounce delay-300"></div>
              <div className="absolute top-1/4 -right-8 w-6 h-6 bg-gradient-to-r from-emerald-400 to-orange-400 rounded-full animate-bounce delay-500"></div>

              {/* Main image container with glass effect */}
              <div className="relative p-4 rounded-3xl bg-white/10 backdrop-blur-md border border-white/20 shadow-2xl group-hover:scale-105 transition-transform duration-500">
                <img
                  src="https://images.unsplash.com/photo-1631549916768-4119b2e5f926?w=600&h=400&fit=crop"
                  alt="Medifit products"
                  className="w-full h-auto rounded-2xl shadow-xl"
                />

                {/* Overlay gradient */}
                <div className="absolute inset-4 rounded-2xl bg-gradient-to-t from-emerald-900/30 via-transparent to-transparent"></div>
              </div>

              {/* Floating stats cards */}
              <div className="absolute top-8 -left-12 bg-white/90 backdrop-blur-sm p-4 rounded-2xl shadow-xl animate-float">
                <div className="text-2xl font-bold text-gray-900">99%</div>
                <div className="text-sm text-gray-600">Satisfaction</div>
              </div>

              <div className="absolute bottom-12 -right-12 bg-white/90 backdrop-blur-sm p-4 rounded-2xl shadow-xl animate-float delay-1000">
                <div className="text-2xl font-bold text-gray-900">24/7</div>
                <div className="text-sm text-gray-600">Support</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
