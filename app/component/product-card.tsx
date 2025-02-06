"use client"

import { Button } from "@/components/ui/button"
import { useCart } from "@/hooks/useCart"

interface ProductCardProps {
  name: string
  price: number
  image: string
  tag?: "new" | "sale"
}

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
        </Button>
      </div>
    </div>
  )
}