import { AboutHero } from "../component/about-hero" 
import { BrandFeatures } from "../component/brand-hero" 
import { PopularProducts } from "../component/popular-products" 

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <AboutHero />
      <BrandFeatures />
      <PopularProducts />
    </div>
  )
}

