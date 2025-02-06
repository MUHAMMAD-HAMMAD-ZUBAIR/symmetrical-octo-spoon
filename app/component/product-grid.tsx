"use client"

import {ProductCard} from "./product-card"

const products = [
  {
    id: 1,
    name: "Library Stool Chair",
    price: 20,
    image: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&w=500&q=80",
    badge: "new",
  },
  {
    id: 2,
    name: "Pink Armchair",
    price: 20,
    image: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?auto=format&fit=crop&w=500&q=80",
    badge: "sale",
  },
  {
    id: 3,
    name: "Orange Accent Chair",
    price: 20,
    image: "https://images.unsplash.com/photo-1592078615290-033ee584e267?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 4,
    name: "Classic White Chair",
    price: 20,
    image: "https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 5,
    name: "Wooden Bar Stool Set",
    price: 20,
    image: "https://images.unsplash.com/photo-1592078615290-033ee584e267?auto=format&fit=crop&w=500&q=80",
    badge: "new",
  },
  {
    id: 6,
    name: "Gray Dining Chair",
    price: 20,
    image: "https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=500&q=80",
    badge: "sale",
  },
  {
    id: 7,
    name: "Modern Office Chair",
    price: 20,
    image: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 8,
    name: "White Dining Chair",
    price: 20,
    image: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 9,
    name: "Swivel Chair",
    price: 20,
    image: "https://images.unsplash.com/photo-1592078615290-033ee584e267?auto=format&fit=crop&w=500&q=80",
    badge: "new",
  },
  {
    id: 10,
    name: "Pink Lounge Chair",
    price: 20,
    image: "https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 11,
    name: "Modern Desk Chair",
    price: 20,
    image: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&w=500&q=80",
    badge: "sale",
  },
  {
    id: 12,
    name: "Accent Chair",
    price: 20,
    image: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 13,
    name: "Orange Side Chair",
    price: 20,
    image: "https://images.unsplash.com/photo-1592078615290-033ee584e267?auto=format&fit=crop&w=500&q=80",
    badge: "new",
  },
  {
    id: 14,
    name: "Minimalist Chair",
    price: 20,
    image: "https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 15,
    name: "Designer Chair",
    price: 20,
    image: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&w=500&q=80",
    badge: "sale",
  },
  {
    id: 16,
    name: "Comfortable Armchair",
    price: 20,
    image: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 17,
    name: "Executive Chair",
    price: 20,
    image: "https://images.unsplash.com/photo-1592078615290-033ee584e267?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 18,
    name: "Classic Chair",
    price: 20,
    image: "https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=500&q=80",
    badge: "new",
  },
  {
    id: 19,
    name: "Modern Lounge Chair",
    price: 20,
    image: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 20,
    name: "Ergonomic Chair",
    price: 20,
    image: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?auto=format&fit=crop&w=500&q=80",
    badge: "sale",
  },
]

export function ProductGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-16">
      {products.map((product) => (
        <ProductCard key={product.id} {...product} />
      ))}
    </div>
  )
}

