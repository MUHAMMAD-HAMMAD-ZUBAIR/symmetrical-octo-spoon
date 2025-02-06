import { ProductGrid } from "../component/product-grid" 
import { Newsletter } from "../component/newsletter" 
import { InstagramFeed } from "../component/instagram-feed" 

export default function ProductPage() {
  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-8">All Products</h1>
        <ProductGrid />
        <Newsletter />
        <InstagramFeed />
      </div>
    </div>
  )
}

