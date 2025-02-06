import { Button } from "@/components/ui/button"
import { useCart } from "@/hooks/useCart"

export function CartSummary() {
  const { cartItems } = useCart()

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const total = subtotal // Additional charges nahi hai

  return (
    <div className="rounded-lg bg-gray-50 px-4 py-6">
      <h2 className="text-lg font-medium">Summary</h2>
      <div className="mt-6 space-y-4">
        <div className="flex items-center justify-between">
          <p className="text-sm text-gray-600">Subtotal</p>
          <p className="text-sm font-medium">${subtotal.toFixed(2)}</p>
        </div>
        <div className="flex items-center justify-between">
          <p className="text-sm text-gray-600">Estimated Delivery & Handling</p>
          <p className="text-sm font-medium">Free</p>
        </div>
        <div className="border-t border-gray-200 pt-4">
          <div className="flex items-center justify-between">
            <p className="text-base font-medium">Total</p>
            <p className="text-base font-medium">${total.toFixed(2)}</p>
          </div>
        </div>
        <Button className="w-full bg-[#006d77] hover:bg-[#005c66]">
          Member Checkout
        </Button>
      </div>
    </div>
  )
}