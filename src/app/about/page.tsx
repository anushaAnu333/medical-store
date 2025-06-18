import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Award, Users, Clock, Heart } from "lucide-react";

const stats = [
  { icon: Award, value: "15+", label: "Years of Experience" },
  { icon: Users, value: "50K+", label: "Happy Customers" },
  { icon: Clock, value: "24/7", label: "Customer Support" },
  { icon: Heart, value: "100%", label: "Quality Products" },
];

const team = [
  {
    name: "Dr. Sarah Johnson",
    role: "Chief Medical Officer",
    image:
      "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=300&h=300&fit=crop",
  },
  {
    name: "Dr. Michael Chen",
    role: "Head Pharmacist",
    image:
      "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=300&h=300&fit=crop",
  },
  {
    name: "Dr. Emily Davis",
    role: "Clinical Director",
    image:
      "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=300&h=300&fit=crop",
  },
  {
    name: "Dr. Robert Wilson",
    role: "Research Lead",
    image:
      "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=300&h=300&fit=crop",
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Page Header */}
      <section className="bg-[#F5F1EB] py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center">About Us</h1>
          <p className="text-center text-gray-600 mt-4">
            Your trusted healthcare partner since 2008
          </p>
        </div>
      </section>

      {/* About Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Welcome to Medifit</h2>
              <p className="text-gray-600 mb-4">
                At Medifit, we are dedicated to providing high-quality medical
                supplies and healthcare products to our community. With over 15
                years of experience in the healthcare industry, we have built a
                reputation for excellence and reliability.
              </p>
              <p className="text-gray-600 mb-4">
                Our mission is to make healthcare accessible and affordable for
                everyone. We carefully select our products from trusted
                manufacturers and ensure that every item meets the highest
                standards of quality and safety.
              </p>
              <p className="text-gray-600">
                Whether you're looking for prescription medications, medical
                devices, or wellness products, our knowledgeable team is here to
                help you find exactly what you need.
              </p>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1631549916768-4119b2e5f926?w=600&h=400&fit=crop"
                alt="Medifit Store"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-orange-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    {stat.value}
                  </h3>
                  <p className="text-gray-600">{stat.label}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Our Core Values
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-[#F5F1EB] rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-10 h-10 text-gray-700" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Quality First</h3>
              <p className="text-gray-600">
                We never compromise on quality. Every product is carefully
                vetted to ensure it meets our high standards.
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-[#F5F1EB] rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-10 h-10 text-gray-700" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Customer Care</h3>
              <p className="text-gray-600">
                Your health and satisfaction are our top priorities. We're here
                to support you every step of the way.
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-[#F5F1EB] rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-10 h-10 text-gray-700" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Expert Team</h3>
              <p className="text-gray-600">
                Our certified pharmacists and healthcare professionals are
                always ready to provide expert advice.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Meet Our Team
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="text-center">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="font-semibold text-gray-900">{member.name}</h3>
                <p className="text-sm text-gray-600">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
