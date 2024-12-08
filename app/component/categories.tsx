import { CategoryCard } from "./category-card"

export function Categories() {
  const categories = [
    {
      title: "Wing Chair",
      productCount: 3544,
      image: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?auto=format&fit=crop&w=500&q=60",
      href: "/category/wing-chair",
    },
    {
      title: "Wooden Chair",
      productCount: 157,
      image: "https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=500&q=60",
      href: "/category/wooden-chair",
    },
    {
      title: "Desk Chair",
      productCount: 124,
      image: "https://images.unsplash.com/photo-1592078615290-033ee584e267?auto=format&fit=crop&w=500&q=60",
      href: "/category/desk-chair",
    },
  ]

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-8">Top Categories</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map((category) => (
            <CategoryCard key={category.title} {...category} />
          ))}
        </div>
      </div>
    </section>
  )
}

