import Image from "next/image"
import { ShoppingCart } from 'lucide-react'
import { Button } from "@/components/ui/button"

interface ProductCardProps {
  id: number
  name: string
  price: number
  image: string
  badge?: "new" | "sale"
}

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
        </Button>
      </div>
    </div>
  )
}

