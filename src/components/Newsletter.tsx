"use client";

import React, { useState } from "react";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState<{
    type: "success" | "error";
    text: string;
  } | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !email.includes("@")) {
      setMessage({ type: "error", text: "Please enter a valid email address" });
      return;
    }

    setIsSubmitting(true);
    setMessage(null);

    // Simulate API call
    setTimeout(() => {
      // Save to localStorage for demo
      const subscribers = JSON.parse(
        localStorage.getItem("medifit-subscribers") || "[]"
      );
      if (!subscribers.includes(email)) {
        subscribers.push(email);
        localStorage.setItem(
          "medifit-subscribers",
          JSON.stringify(subscribers)
        );
        setMessage({
          type: "success",
          text: "Thank you for subscribing! Check your email for the 15% discount code.",
        });
        setEmail("");
      } else {
        setMessage({
          type: "error",
          text: "This email is already subscribed.",
        });
      }
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section className="py-16 bg-[#F5F1EB]">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <img
              src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=400&h=300&fit=crop"
              alt="Newsletter"
              className="w-full max-w-sm mx-auto rounded-lg"
            />
          </div>
          <div className="md:w-1/2 md:pl-12">
            <p className="text-sm text-gray-600 mb-2">Join our newsletter</p>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Sign Up for an instant
              <br />
              15% Discount
            </h2>
            <form onSubmit={handleSubmit} className="max-w-md">
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 px-4 py-3 rounded border border-gray-300 focus:outline-none focus:border-gray-500"
                  disabled={isSubmitting}
                />
                <button
                  type="submit"
                  className="bg-gray-900 text-white px-6 py-3 rounded hover:bg-gray-800 transition disabled:opacity-50"
                  disabled={isSubmitting}>
                  {isSubmitting ? "Signing up..." : "Sign up"}
                </button>
              </div>
              {message && (
                <p
                  className={`mt-3 text-sm ${
                    message.type === "success"
                      ? "text-green-600"
                      : "text-red-600"
                  }`}>
                  {message.text}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
