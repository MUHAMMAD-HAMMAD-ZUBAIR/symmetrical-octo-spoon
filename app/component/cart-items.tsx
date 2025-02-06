"use client"

import Image from "next/image"
import { Heart, Trash2 } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
<<<<<<< HEAD
import { useState } from "react"

const initialCartItems = [
=======

const cartItems = [
>>>>>>> d3e7d84a9fa289fa04e0612a414b8cedde468aac
  {
    id: 1,
    name: "Library Stool Chair",
    color: "Ashen Slate/Cobalt Bliss",
    size: "L",
    quantity: 1,
    price: 99,
    image: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&w=200&q=80",
  },
  {
    id: 2,
    name: "Library Stool Chair",
    color: "Ashen Slate/Cobalt Bliss",
    size: "L",
    quantity: 1,
    price: 99,
    image: "https://images.unsplash.com/photo-1592078615290-033ee584e267?auto=format&fit=crop&w=200&q=80",
  },
]

export function CartItems() {
<<<<<<< HEAD
  const [cartItems, setCartItems] = useState(initialCartItems)

  const handleQuantityChange = (id: number, quantity: string) => {
    setCartItems(cartItems.map(item => 
      item.id === id ? { ...item, quantity: parseInt(quantity) } : item
    ))
  }

  const handleSizeChange = (id: number, size: string) => {
    setCartItems(cartItems.map(item => 
      item.id === id ? { ...item, size } : item
    ))
  }

  const handleRemoveItem = (id: number) => {
    setCartItems(cartItems.filter(item => item.id !== id))
  }

=======
>>>>>>> d3e7d84a9fa289fa04e0612a414b8cedde468aac
  return (
    <div className="space-y-6">
      {cartItems.map((item) => (
        <div key={item.id} className="flex gap-4 border-b pb-6">
          <div className="relative h-24 w-24 flex-shrink-0 overflow-hidden rounded-lg">
            <Image
              src={item.image || "/placeholder.svg"}
              alt={item.name}
              fill
              className="object-cover"
            />
          </div>
          <div className="flex flex-1 flex-col">
            <div className="flex justify-between">
              <div>
                <h3 className="text-base font-medium">{item.name}</h3>
                <p className="mt-1 text-sm text-gray-500">{item.color}</p>
              </div>
              <p className="text-sm font-medium">MRP: ${item.price}</p>
            </div>
            <div className="mt-4 flex items-center justify-between">
              <div className="flex gap-4">
                <div className="flex items-center gap-2">
                  <span className="text-sm">Size</span>
<<<<<<< HEAD
                  <Select defaultValue={item.size} onValueChange={(value) => handleSizeChange(item.id, value)}>
=======
                  <Select defaultValue={item.size}>
>>>>>>> d3e7d84a9fa289fa04e0612a414b8cedde468aac
                    <SelectTrigger className="w-20">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="S">S</SelectItem>
                      <SelectItem value="M">M</SelectItem>
                      <SelectItem value="L">L</SelectItem>
                      <SelectItem value="XL">XL</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm">Quantity</span>
<<<<<<< HEAD
                  <Select defaultValue={item.quantity.toString()} onValueChange={(value) => handleQuantityChange(item.id, value)}>
=======
                  <Select defaultValue={item.quantity.toString()}>
>>>>>>> d3e7d84a9fa289fa04e0612a414b8cedde468aac
                    <SelectTrigger className="w-20">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {[1, 2, 3, 4, 5].map((num) => (
                        <SelectItem key={num} value={num.toString()}>
                          {num}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="flex gap-2">
                <Button variant="ghost" size="icon">
                  <Heart className="h-5 w-5" />
                </Button>
<<<<<<< HEAD
                <Button variant="ghost" size="icon" onClick={() => handleRemoveItem(item.id)}>
=======
                <Button variant="ghost" size="icon">
>>>>>>> d3e7d84a9fa289fa04e0612a414b8cedde468aac
                  <Trash2 className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
<<<<<<< HEAD
}
=======
}

>>>>>>> d3e7d84a9fa289fa04e0612a414b8cedde468aac
