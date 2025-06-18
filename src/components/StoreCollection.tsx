import React from "react";

const collections = [
  {
    id: 1,
    name: "Kid medicine",
    price: "$30.00",
    image:
      "https://images.unsplash.com/photo-1603398938378-e54eab446dde?w=150&h=150&fit=crop",
  },
  {
    id: 2,
    name: "Thermometer",
    price: "$45.00",
    image:
      "https://plus.unsplash.com/premium_photo-1722686484485-97bd7090ba42?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8VGhlcm1vbWV0ZXJ8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 3,
    name: "ECG cardiograph",
    price: "$200.00",
    image:
      "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=150&h=150&fit=crop",
  },
  {
    id: 4,
    name: "Blood glucose meter",
    price: "$75.00",
    image:
      "https://plus.unsplash.com/premium_photo-1702599120667-d86c2eb51ada?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Qmxvb2QlMjBnbHVjb3NlJTIwbWV0ZXJ8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 5,
    name: "Lab hand gloves",
    price: "$5.00",
    image:
      "https://images.unsplash.com/photo-1583521214690-73421a1829a9?w=150&h=150&fit=crop",
  },
  {
    id: 6,
    name: "Stethoscope",
    price: "$35.00",
    image:
      "https://images.unsplash.com/photo-1584982751601-97dcc096659c?w=150&h=150&fit=crop",
  },
  {
    id: 7,
    name: "Inhaler pressure drop",
    price: "$58.00",
    image:
      "https://images.unsplash.com/photo-1584555613497-9ecf9dd06f68?w=150&h=150&fit=crop",
  },
  {
    id: 8,
    name: "Multi vitamin",
    price: "$20.00",
    image:
      "https://images.unsplash.com/photo-1584438784894-089d6a62b8fa?w=150&h=150&fit=crop",
  },
];

const StoreCollection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Explore Our store Collection
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {collections.map((item) => (
            <div key={item.id} className="text-center group cursor-pointer">
              <div className="bg-gray-100 rounded-lg p-4 mb-4 group-hover:bg-gray-200 transition">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-32 object-contain"
                />
              </div>
              <h3 className="font-medium text-gray-900 mb-1">{item.name}</h3>
              <p className="text-gray-600">{item.price}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StoreCollection;
