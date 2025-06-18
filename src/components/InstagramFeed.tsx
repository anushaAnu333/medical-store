import React from "react";

const InstagramFeed = () => {
  const instagramImages = [
    "https://images.unsplash.com/photo-1585435557343-3b092031a831?w=300&h=300&fit=crop",
    "https://images.unsplash.com/photo-1586015555751-63bb77f4322a?w=300&h=300&fit=crop",
    "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=300&h=300&fit=crop",
    "https://images.unsplash.com/photo-1583947215259-38e31be8751f?w=300&h=300&fit=crop",
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Follow us @medifit
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {instagramImages.map((image, index) => (
            <div
              key={index + 1}
              className="relative group cursor-pointer overflow-hidden rounded-lg">
              <img
                src={image}
                alt={`Instagram post ${index + 1}`}
                className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InstagramFeed;
