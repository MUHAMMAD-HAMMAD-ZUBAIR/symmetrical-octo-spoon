import Link from "next/link"
import { ShoppingCart } from 'lucide-react'

export function Header() {
  return (
    <header className="border-b">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-2xl font-bold text-primary">Comforty</span>
          </Link>
          
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/" className="text-sm font-medium">
              Home
            </Link>
            <Link href="/shop" className="text-sm font-medium">
              Shop
            </Link>
            <Link href="/product" className="text-sm font-medium">
              Product
            </Link>
            <Link href="/pages" className="text-sm font-medium">
              Pages
            </Link>
            <Link href="/about" className="text-sm font-medium">
              About
            </Link>
          </nav>

          <div className="flex items-center gap-4">
            <span className="text-sm">Contact: (808) 555-0111</span>
            <Link href="/cart" className="relative">
              <ShoppingCart className="h-6 w-6" />
              <span className="absolute -top-2 -right-2 h-5 w-5 rounded-full bg-primary text-xs text-white flex items-center justify-center">
                0
              </span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}

