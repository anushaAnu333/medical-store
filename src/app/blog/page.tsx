import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Calendar, User, ChevronRight } from "lucide-react";

const blogPosts = [
  {
    id: 1,
    title: "10 Essential Vitamins Your Body Needs Daily",
    excerpt:
      "Discover the most important vitamins for maintaining optimal health and where to find them naturally.",
    author: "Dr. Sarah Johnson",
    date: "March 15, 2024",
    category: "Nutrition",
    image:
      "https://images.unsplash.com/photo-1584438784894-089d6a62b8fa?w=400&h=250&fit=crop",
    readTime: "5 min read",
  },
  {
    id: 2,
    title: "Understanding Blood Pressure: A Complete Guide",
    excerpt:
      "Learn everything you need to know about blood pressure, how to measure it, and tips for maintaining healthy levels.",
    author: "Dr. Michael Chen",
    date: "March 12, 2024",
    category: "Health Tips",
    image:
      "https://images.unsplash.com/photo-1615486511262-c7b5c7f42b19?w=400&h=250&fit=crop",
    readTime: "7 min read",
  },
  {
    id: 3,
    title: "The Importance of Regular Health Check-ups",
    excerpt:
      "Regular health screenings can catch problems early. Find out which tests you should get and when.",
    author: "Dr. Emily Davis",
    date: "March 10, 2024",
    category: "Prevention",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=400&h=250&fit=crop",
    readTime: "4 min read",
  },
  {
    id: 4,
    title: "Managing Diabetes: Tips for a Healthy Lifestyle",
    excerpt:
      "Practical advice for managing diabetes through diet, exercise, and proper medication adherence.",
    author: "Dr. Robert Wilson",
    date: "March 8, 2024",
    category: "Chronic Care",
    image:
      "https://images.unsplash.com/photo-1579165466949-467180ae7752?w=400&h=250&fit=crop",
    readTime: "6 min read",
  },
  {
    id: 5,
    title: "Natural Remedies for Common Cold and Flu",
    excerpt:
      "Explore effective natural remedies that can help alleviate cold and flu symptoms and boost your immune system.",
    author: "Dr. Sarah Johnson",
    date: "March 5, 2024",
    category: "Natural Health",
    image:
      "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&h=250&fit=crop",
    readTime: "5 min read",
  },
  {
    id: 6,
    title: "First Aid Essentials Every Home Should Have",
    excerpt:
      "Build the perfect first aid kit for your home with our comprehensive guide to essential medical supplies.",
    author: "Dr. Michael Chen",
    date: "March 3, 2024",
    category: "Emergency Care",
    image:
      "https://images.unsplash.com/photo-1603398938378-e54eab446dde?w=400&h=250&fit=crop",
    readTime: "4 min read",
  },
];

const categories = [
  "All",
  "Nutrition",
  "Health Tips",
  "Prevention",
  "Chronic Care",
  "Natural Health",
  "Emergency Care",
];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Page Header */}
      <section className="bg-[#F5F1EB] py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center">Health Blog</h1>
          <p className="text-center text-gray-600 mt-4">
            Expert advice and health tips from our medical professionals
          </p>
        </div>
      </section>

      {/* Blog Categories */}
      <section className="py-8 border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                className="px-4 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded transition">
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article key={post.id} className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-lg mb-4">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-56 object-cover group-hover:scale-110 transition duration-300"
                  />
                  <span className="absolute top-4 left-4 bg-white px-3 py-1 rounded text-sm font-medium">
                    {post.category}
                  </span>
                </div>

                <div>
                  <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <User className="w-4 h-4" />
                      {post.author}
                    </span>
                  </div>

                  <h2 className="text-xl font-bold mb-2 group-hover:text-gray-700 transition">
                    {post.title}
                  </h2>

                  <p className="text-gray-600 mb-4">{post.excerpt}</p>

                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">
                      {post.readTime}
                    </span>
                    <button className="text-gray-900 font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                      Read More
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center gap-2 mt-12">
            <button className="px-4 py-2 border border-gray-300 rounded hover:bg-gray-50">
              Previous
            </button>
            <button className="px-4 py-2 bg-gray-900 text-white rounded">
              1
            </button>
            <button className="px-4 py-2 border border-gray-300 rounded hover:bg-gray-50">
              2
            </button>
            <button className="px-4 py-2 border border-gray-300 rounded hover:bg-gray-50">
              3
            </button>
            <button className="px-4 py-2 border border-gray-300 rounded hover:bg-gray-50">
              Next
            </button>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Stay Updated with Health Tips
          </h2>
          <p className="text-gray-600 mb-8">
            Subscribe to our newsletter and never miss our latest health
            articles
          </p>
          <form className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded border border-gray-300 focus:outline-none focus:border-gray-500"
            />
            <button className="bg-gray-900 text-white px-6 py-3 rounded hover:bg-gray-800 transition">
              Subscribe
            </button>
          </form>
        </div>
      </section>

      <Footer />
    </div>
  );
}
