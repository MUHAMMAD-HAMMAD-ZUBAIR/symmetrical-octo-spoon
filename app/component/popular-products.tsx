import Image from "next/image"
import { ProductCard } from "./product-card"

const products = [
  {
    name: "The Poplar suede sofa",
    price: 99,
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1000&q=80",
  },
  {
    name: "The Dandy chair",
    price: 99,
    image: "https://images.unsplash.com/photo-1592078615290-033ee584e267?auto=format&fit=crop&w=500&q=60",
  },
  {
    name: "The Dandy chair",
    price: 99,
    image: "https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=500&q=60",
  },
]

export function PopularProducts() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold mb-8">
          Our Popular Products
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div key={index} className="group">
              <div className="aspect-[4/3] relative overflow-hidden rounded-lg bg-gray-100 mb-4">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <h3 className="font-medium">{product.name}</h3>
              <p className="text-gray-600">${product.price.toFixed(2)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

