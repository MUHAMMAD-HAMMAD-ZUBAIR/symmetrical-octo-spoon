import { ProductCard } from "./product-card"

export function FeaturedProducts() {
  const products = [
    {
      name: "Modern White Chair",
      price: 120,
      image: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&w=500&q=60",
      tag: "new" as const,
    },
    {
      name: "Comfortable Armchair",
      price: 180,
      image: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?auto=format&fit=crop&w=500&q=60",
      tag: "sale" as const,
    },
    {
      name: "Wooden Dining Chair",
      price: 90,
      image: "https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=500&q=60",
    },
    {
      name: "Elegant Office Chair",
      price: 150,
      image: "https://images.unsplash.com/photo-1592078615290-033ee584e267?auto=format&fit=crop&w=500&q=60",
    },
  ]

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-8">Featured Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>
      </div>
    </section>
  )
}

