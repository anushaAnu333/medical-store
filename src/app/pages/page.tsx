import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  ChevronRight,
  FileText,
  Shield,
  Clock,
  UserCheck,
  HelpCircle,
  Award,
} from "lucide-react";
import Link from "next/link";

const pages = [
  {
    title: "Customer Service",
    items: [
      {
        name: "FAQ",
        href: "/faq",
        icon: HelpCircle,
        description: "Frequently asked questions",
      },
      {
        name: "Shipping & Returns",
        href: "/shipping",
        icon: Clock,
        description: "Delivery and return policies",
      },
      {
        name: "Terms of Service",
        href: "/terms",
        icon: FileText,
        description: "Our terms and conditions",
      },
      {
        name: "Privacy Policy",
        href: "/privacy",
        icon: Shield,
        description: "How we protect your data",
      },
    ],
  },
  {
    title: "About Medifit",
    items: [
      {
        name: "Our Story",
        href: "/about",
        icon: Award,
        description: "Learn about our journey",
      },
      {
        name: "Meet the Team",
        href: "/about#team",
        icon: UserCheck,
        description: "Our healthcare professionals",
      },
      {
        name: "Careers",
        href: "/careers",
        icon: UserCheck,
        description: "Join our growing team",
      },
      {
        name: "Press & Media",
        href: "/press",
        icon: FileText,
        description: "Media resources and news",
      },
    ],
  },
  {
    title: "Resources",
    items: [
      {
        name: "Medicine Database",
        href: "/medicine-search",
        icon: HelpCircle,
        description: "Search medicine information",
      },
      {
        name: "Health Blog",
        href: "/blog",
        icon: FileText,
        description: "Expert health advice",
      },
      {
        name: "Product Guides",
        href: "/guides",
        icon: FileText,
        description: "How to use our products",
      },
      {
        name: "Health Calculator",
        href: "/calculator",
        icon: HelpCircle,
        description: "BMI, dosage calculators",
      },
      {
        name: "Newsletter",
        href: "/newsletter",
        icon: FileText,
        description: "Subscribe for updates",
      },
    ],
  },
];

export default function PagesPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Page Header */}
      <section className="bg-[#F5F1EB] py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center">All Pages</h1>
          <p className="text-center text-gray-600 mt-4">
            Find everything you need to know about Medifit
          </p>
        </div>
      </section>

      {/* Pages Directory */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {pages.map((section, index) => (
              <div key={index}>
                <h2 className="text-2xl font-bold mb-6">{section.title}</h2>
                <div className="space-y-4">
                  {section.items.map((item, itemIndex) => {
                    const Icon = item.icon;
                    return (
                      <Link
                        key={itemIndex}
                        href={item.href}
                        className="block p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition group">
                        <div className="flex items-start">
                          <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center mr-4 group-hover:bg-orange-200 transition">
                            <Icon className="w-5 h-5 text-orange-600" />
                          </div>
                          <div className="flex-1">
                            <h3 className="font-semibold text-gray-900 mb-1 flex items-center">
                              {item.name}
                              <ChevronRight className="w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 transition" />
                            </h3>
                            <p className="text-sm text-gray-600">
                              {item.description}
                            </p>
                          </div>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          {/* Quick Links */}
          <div className="mt-16 p-8 bg-gray-50 rounded-lg">
            <h2 className="text-2xl font-bold mb-6 text-center">Quick Links</h2>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/"
                className="px-6 py-2 bg-white rounded hover:bg-gray-100 transition">
                Home
              </Link>
              <Link
                href="/shop"
                className="px-6 py-2 bg-white rounded hover:bg-gray-100 transition">
                Shop All Products
              </Link>
              <Link
                href="/medicine-search"
                className="px-6 py-2 bg-white rounded hover:bg-gray-100 transition">
                Medicine Database
              </Link>
              <Link
                href="/contact"
                className="px-6 py-2 bg-white rounded hover:bg-gray-100 transition">
                Contact Us
              </Link>
              <Link
                href="/about"
                className="px-6 py-2 bg-white rounded hover:bg-gray-100 transition">
                About Us
              </Link>
              <Link
                href="/blog"
                className="px-6 py-2 bg-white rounded hover:bg-gray-100 transition">
                Health Blog
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
