import { Button } from "@/components/ui/button"
import { ShoppingCart } from 'lucide-react'
import Image from "next/image"

interface ProductCardProps {
  name: string
  price: number
  image: string
  tag?: "new" | "sale"
}

export function ProductCard({ name, price, image, tag }: ProductCardProps) {
  return (
    <div className="group relative">
      <div className="aspect-square overflow-hidden rounded-lg bg-gray-100 relative">
        <Image
          src={image}
          alt={name}
          layout="fill"
          objectFit="cover"
          className="group-hover:scale-105 transition-transform duration-300"
        />
        {tag && (
          <span className={`absolute top-2 left-2 px-2 py-1 text-xs font-medium text-white rounded ${
            tag === "new" ? "bg-green-500" : "bg-orange-500"
          }`}>
            {tag}
          </span>
        )}
      </div>
      <div className="mt-4 flex justify-between">
        <div>
          <h3 className="text-sm font-medium">{name}</h3>
          <p className="text-sm text-gray-500">${price}</p>
        </div>
        <Button size="icon" variant="outline">
          <ShoppingCart className="h-4 w-4" />
          <span className="sr-only">Add to cart</span>
        </Button>
      </div>
    </div>
  )
}

