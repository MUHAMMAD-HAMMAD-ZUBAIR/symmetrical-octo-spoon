import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export function AboutHero() {
  return (
    <section className="container mx-auto px-4 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-[#006d77] text-white p-8 md:p-12 rounded-lg flex flex-col justify-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">About Us - Comforty</h1>
          <p className="text-lg mb-8 text-white/90">
            At Comforty, we believe that the right chair can transform your space and elevate your comfort. Specializing in
            ergonomic design, premium materials, and modern aesthetics, we craft chairs that seamlessly blend style with
            functionality.
          </p>
          <Button 
            variant="secondary" 
            className="w-fit"
            asChild
          >
            <Link href="/collection">View collection</Link>
          </Button>
        </div>
        <div className="relative h-[400px] md:h-full min-h-[400px] bg-gray-100 rounded-lg overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&w=1000&q=80"
            alt="Modern Chair"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  )
}

