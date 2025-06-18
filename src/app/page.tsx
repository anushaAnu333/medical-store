import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ShopByCategory from "@/components/ShopByCategory";
import ProductCards from "@/components/ProductCards";
import LatestProducts from "@/components/LatestProducts";
import ServiceFeatures from "@/components/ServiceFeatures";
import StoreCollection from "@/components/StoreCollection";
import Newsletter from "@/components/Newsletter";
import Testimonials from "@/components/Testimonials";
import InstagramFeed from "@/components/InstagramFeed";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-cream">
      <Header />
      <HeroSection />
      <ShopByCategory />
      <ProductCards />
      <LatestProducts />
      <ServiceFeatures />
      <StoreCollection />
      <Newsletter />
      <Testimonials />
      <Footer />
    </div>
  );
}
