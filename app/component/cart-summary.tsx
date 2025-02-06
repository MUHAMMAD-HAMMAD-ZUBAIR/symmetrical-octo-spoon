import { Button } from "@/components/ui/button"
<<<<<<< HEAD
import { useCart } from "@/hooks/useCart"

export function CartSummary() {
  const { cartItems } = useCart()

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const total = subtotal // Additional charges nahi hai

=======

export function CartSummary() {
>>>>>>> d3e7d84a9fa289fa04e0612a414b8cedde468aac
  return (
    <div className="rounded-lg bg-gray-50 px-4 py-6">
      <h2 className="text-lg font-medium">Summary</h2>
      <div className="mt-6 space-y-4">
        <div className="flex items-center justify-between">
          <p className="text-sm text-gray-600">Subtotal</p>
<<<<<<< HEAD
          <p className="text-sm font-medium">${subtotal.toFixed(2)}</p>
=======
          <p className="text-sm font-medium">$198.00</p>
>>>>>>> d3e7d84a9fa289fa04e0612a414b8cedde468aac
        </div>
        <div className="flex items-center justify-between">
          <p className="text-sm text-gray-600">Estimated Delivery & Handling</p>
          <p className="text-sm font-medium">Free</p>
        </div>
        <div className="border-t border-gray-200 pt-4">
          <div className="flex items-center justify-between">
            <p className="text-base font-medium">Total</p>
<<<<<<< HEAD
            <p className="text-base font-medium">${total.toFixed(2)}</p>
=======
            <p className="text-base font-medium">$198.00</p>
>>>>>>> d3e7d84a9fa289fa04e0612a414b8cedde468aac
          </div>
        </div>
        <Button className="w-full bg-[#006d77] hover:bg-[#005c66]">
          Member Checkout
        </Button>
      </div>
    </div>
  )
<<<<<<< HEAD
}
=======
}

>>>>>>> d3e7d84a9fa289fa04e0612a414b8cedde468aac
