import React from "react";

const testimonials = [
  {
    id: 1,
    name: "James Wilson",
    rating: 5,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id eleifend velit.",
    date: "2 days ago",
    avatar:
      "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=80&h=80&fit=crop",
  },
  {
    id: 2,
    name: "Henry Adams",
    rating: 5,
    text: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    date: "1 week ago",
    avatar:
      "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=80&h=80&fit=crop",
  },
  {
    id: 3,
    name: "Ellen Lee",
    rating: 5,
    text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
    date: "2 weeks ago",
    avatar:
      "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=80&h=80&fit=crop",
  },
  {
    id: 4,
    name: "Lily Smith",
    rating: 5,
    text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.",
    date: "3 weeks ago",
    avatar:
      "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=80&h=80&fit=crop",
  },
];

const Testimonials = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Our happy clients
        </h2>
        <div className="flex items-center justify-center mb-8">
          <div className="flex space-x-1 text-yellow-400">
            {"★★★★★".split("").map((star, i) => (
              <span key={i} className="text-2xl">
                {star}
              </span>
            ))}
          </div>
        </div>
        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac odio
          tempor orci dapibus ultrices in. Diam sit amet nisl suscipit
          adipiscing bibendum est ultricies integer quis. Metus aliquam eleifend
          mi in nulla posuere sollicitudin aliquam ultrices sagittis orci a
          scelerisque purus semper.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="text-center">
              <img
                src={testimonial.avatar}
                alt={testimonial.name}
                className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
              />
              <h4 className="font-semibold text-gray-900">
                {testimonial.name}
              </h4>
              <p className="text-sm text-gray-500">{testimonial.date}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
