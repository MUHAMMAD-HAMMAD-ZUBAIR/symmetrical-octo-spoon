<<<<<<< HEAD
"use client"

import { Button } from "@/components/ui/button"
import { useCart } from "@/hooks/useCart"
=======
import Image from "next/image"
import { ShoppingCart } from 'lucide-react'
import { Button } from "@/components/ui/button"
>>>>>>> d3e7d84a9fa289fa04e0612a414b8cedde468aac

interface ProductCardProps {
  id: number
  name: string
  price: number
  image: string
  badge?: "new" | "sale"
}

<<<<<<< HEAD
export function ProductCard({ name, price, image, tag }: ProductCardProps) {
  const { addToCart } = useCart()

  const handleAddToCart = () => {
    addToCart({
      name,
      price,
      image,
      quantity: 1, // Default quantity
      size: "M", // Default size
      color: "Default", // Default color
    })
    alert(`${name} added to cart!`) // Notification show karega
  }

  return (
    <div className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      <div className="relative h-48">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover"
        />
        {tag && (
          <span className="absolute top-2 right-2 bg-[#006d77] text-white text-xs px-2 py-1 rounded">
            {tag.toUpperCase()}
          </span>
        )}
      </div>
      <div className="p-4">
        <h3 className="font-medium text-lg">{name}</h3>
        <p className="text-gray-600">${price}</p>
        <Button
          className="w-full mt-4 bg-[#006d77] hover:bg-[#005c66]"
          onClick={handleAddToCart}
        >
          Add to Cart
=======
export function ProductCard({ name, price, image, badge }: ProductCardProps) {
  return (
    <div className="group relative">
      <div className="aspect-square overflow-hidden rounded-lg bg-gray-100 relative">
        <Image
          src={image || "/placeholder.svg"}
          alt={name}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        {badge && (
          <span
            className={`absolute top-2 left-2 px-2 py-1 text-xs font-medium text-white rounded ${
              badge === "new" ? "bg-green-500" : "bg-orange-500"
            }`}
          >
            {badge.toUpperCase()}
          </span>
        )}
      </div>
      <div className="mt-4 flex justify-between items-center">
        <div>
          <h3 className="text-sm font-medium">{name}</h3>
          <p className="text-sm text-gray-500">${price}</p>
        </div>
        <Button size="icon" variant="outline" className="opacity-0 group-hover:opacity-100 transition-opacity">
          <ShoppingCart className="h-4 w-4" />
          <span className="sr-only">Add to cart</span>
>>>>>>> d3e7d84a9fa289fa04e0612a414b8cedde468aac
        </Button>
      </div>
    </div>
  )
}