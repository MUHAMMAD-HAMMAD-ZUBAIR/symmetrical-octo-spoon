<<<<<<< HEAD
"use client"

import { CartItems } from "../component/cart-items" 
import { CartSummary } from "../component/cart-summary" 
import { useCart } from "@/hooks/useCart"

export default function CartPage() {
  const { cartItems, updateQuantity, updateSize, removeItem } = useCart()

=======
import { CartItems } from "../component/cart-items" 
import { CartSummary } from "../component/cart-summary"
export default function CartPage() {
>>>>>>> d3e7d84a9fa289fa04e0612a414b8cedde468aac
  return (
    <div className="min-h-screen">
      <div className="bg-[#1e1b4b] text-white text-center py-2 text-sm">
        <span>✓ Free Shipping On All Orders Over $50</span>
      </div>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-8">Bag</h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
<<<<<<< HEAD
            <CartItems
              cartItems={cartItems}
              onQuantityChange={updateQuantity}
              onSizeChange={updateSize}
              onRemoveItem={removeItem}
            />
=======
            <CartItems />
>>>>>>> d3e7d84a9fa289fa04e0612a414b8cedde468aac
          </div>
          <div>
            <CartSummary />
          </div>
        </div>
      </div>
    </div>
  )
<<<<<<< HEAD
}
=======
}

>>>>>>> d3e7d84a9fa289fa04e0612a414b8cedde468aac
