import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MedicineSearch from "@/components/MedicineSearch";

export default function MedicineSearchPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <section className="bg-[#F5F1EB] py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center">Medicine Database</h1>
          <p className="text-center text-gray-600 mt-4">
            Search comprehensive medicine information from trusted sources
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <MedicineSearch />
        </div>
      </section>

      <Footer />
    </div>
  );
}
