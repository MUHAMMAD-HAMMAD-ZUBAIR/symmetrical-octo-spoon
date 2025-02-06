import Image from "next/image"

export function ContactHero() {
  return (
    <section className="relative h-[300px] md:h-[400px]">
      <Image
        src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80"
        alt="Contact Us"
        fill
        className="object-cover"
      />
      <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
        <h1 className="text-4xl md:text-5xl font-bold text-white">Contact Us</h1>
      </div>
    </section>
  )
}

