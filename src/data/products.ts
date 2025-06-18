import { Product } from "@/types";

export const products: Product[] = [
  {
    id: 1,
    name: "Paracetamol 500mg",
    price: "$12.99",
    originalPrice: "$15.99",
    image:
      "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=300&h=300&fit=crop",
    category: "Pain Relief",
    tag: "Sale",
    description:
      "Paracetamol is a common painkiller used to treat aches and pain. It can also be used to reduce a high temperature. It's available combined with other painkillers and anti-sickness medicines.",
    inStock: true,
  },
  {
    id: 2,
    name: "Vitamin C 1000mg",
    price: "$24.99",
    image:
      "https://images.unsplash.com/photo-1550572017-edd951b55104?w=300&h=300&fit=crop",
    category: "Vitamins",
    tag: "New",
    description:
      "High-strength Vitamin C supplement to support your immune system. Each tablet contains 1000mg of Vitamin C for maximum effectiveness.",
    inStock: true,
  },
  {
    id: 3,
    name: "Digital Thermometer",
    price: "$45.00",
    image:
      "https://images.unsplash.com/photo-1685660477695-73713eaf512a?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8RGlnaXRhbCUyMFRoZXJtb21ldGVyfGVufDB8fDB8fHww",
    category: "Medical Devices",
    description:
      "Fast and accurate digital thermometer with LCD display. Features include fever alarm, memory recall, and auto shut-off.",
    inStock: true,
  },
  {
    id: 4,
    name: "Blood Pressure Monitor",
    price: "$89.99",
    originalPrice: "$120.00",
    image:
      "https://images.unsplash.com/photo-1700832082152-0416a3ee5e60?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Qmxvb2QlMjBQcmVzc3VyZSUyME1vbml0b3J8ZW58MHx8MHx8fDA%3D",
    category: "Medical Devices",
    tag: "Sale",
    description:
      "Automatic blood pressure monitor with large LCD display. Clinically validated for accuracy with irregular heartbeat detection.",
    inStock: true,
  },
  {
    id: 5,
    name: "First Aid Kit",
    price: "$35.99",
    image:
      "https://images.unsplash.com/photo-1603398938378-e54eab446dde?w=300&h=300&fit=crop",
    category: "Emergency",
    description:
      "Complete first aid kit with bandages, antiseptic wipes, gauze, tape, scissors, and emergency supplies for home or travel.",
    inStock: true,
  },
  {
    id: 6,
    name: "Hand Sanitizer 500ml",
    price: "$8.99",
    image:
      "https://images.unsplash.com/photo-1584483766114-2cea6facdf57?w=300&h=300&fit=crop",
    category: "Hygiene",
    description:
      "Antibacterial hand sanitizer with 70% alcohol content. Kills 99.9% of germs without water. Non-sticky formula.",
    inStock: true,
  },
  {
    id: 7,
    name: "Face Masks (50 pack)",
    price: "$19.99",
    image:
      "https://images.unsplash.com/photo-1584634731339-252c581abfc5?w=300&h=300&fit=crop",
    category: "Protective Gear",
    description:
      "3-layer disposable face masks with elastic ear loops. Comfortable, breathable, and effective protection.",
    inStock: true,
  },
  {
    id: 8,
    name: "Multivitamin Complex",
    price: "$29.99",
    image:
      "https://images.unsplash.com/photo-1701201632697-7ec41bfee65f?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8TXVsdGl2aXRhbWluJTIwQ29tcGxleHxlbnwwfHwwfHx8MA%3D%3D",
    category: "Vitamins",
    description:
      "Complete daily multivitamin with essential vitamins and minerals for overall health and wellness.",
    inStock: true,
  },
  {
    id: 9,
    name: "Microscope",
    price: "$30.00",
    originalPrice: "$40.00",
    image:
      "https://images.unsplash.com/photo-1526930382372-67bf22c0fce2?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8TWljcm9zY29wZXxlbnwwfHwwfHx8MA%3D%3D",
    category: "Medical Equipment",
    tag: "New",
    description:
      "Professional microscope for medical and educational use. High-quality optics with multiple magnification levels.",
    inStock: true,
  },
  {
    id: 10,
    name: "Pulse Oximeter",
    price: "$58.00",
    originalPrice: "$68.00",
    image:
      "https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?w=250&h=250&fit=crop",
    category: "Medical Devices",
    tag: "Hot",
    description:
      "Fingertip pulse oximeter for measuring blood oxygen saturation and pulse rate. FDA approved.",
    inStock: true,
  },
  {
    id: 11,
    name: "Vitamin Serum",
    price: "$45.00",
    originalPrice: "$50.00",
    image:
      "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=250&h=250&fit=crop",
    category: "Vitamins",
    tag: "New",
    description:
      "Advanced vitamin serum for skin health. Contains Vitamin C, E, and hyaluronic acid for anti-aging benefits.",
    inStock: true,
  },
  {
    id: 12,
    name: "High Protein Powder",
    price: "$25.00",
    originalPrice: "$35.00",
    image:
      "https://images.unsplash.com/photo-1550572017-edd951b55104?w=250&h=250&fit=crop",
    category: "Supplements",
    tag: "Sale",
    description:
      "Premium whey protein powder for muscle recovery and growth. 25g protein per serving.",
    inStock: true,
  },
  {
    id: 13,
    name: "Hand Sanitizer Collection",
    price: "$25.00",
    originalPrice: "$30.00",
    image:
      "https://images.unsplash.com/photo-1633521249723-8aec8acea34b?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8SGFuZCUyMFNhbml0aXplciUyMENvbGxlY3Rpb258ZW58MHx8MHx8fDA%3D",
    category: "Hygiene",
    tag: "Sale",
    description:
      "All-type skin care hand sanitizer collection. Includes moisturizing formula.",
    inStock: true,
  },
  {
    id: 14,
    name: "Vitamin C",
    price: "$45.00",
    originalPrice: "$55.00",
    image:
      "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=200&h=200&fit=crop",
    category: "Beauty",
    tag: "New",
    description:
      "All-type skin care face wash collection. Gentle cleansing for all skin types.",
    inStock: true,
  },
  {
    id: 15,
    name: "Travel Medicine Kit",
    price: "$35.00",
    originalPrice: "$40.00",
    image:
      "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=200&h=200&fit=crop",
    category: "Travel",
    tag: "Sale",
    description:
      "Travel more deals save up to 65%. Complete travel health care kit.",
    inStock: true,
  },
];

export const getProductById = (id: number): Product | undefined => {
  return products.find((product) => product.id === id);
};

export const getProductsByCategory = (category: string): Product[] => {
  return products.filter((product) => product.category === category);
};

export const getLatestProducts = (count: number = 4): Product[] => {
  // Return products with 'New' tag first, then others
  const newProducts = products.filter(
    (p) => p.tag === "New" || p.tag === "Hot"
  );
  const otherProducts = products.filter(
    (p) => !p.tag || (p.tag !== "New" && p.tag !== "Hot")
  );
  return [...newProducts, ...otherProducts].slice(0, count);
};
