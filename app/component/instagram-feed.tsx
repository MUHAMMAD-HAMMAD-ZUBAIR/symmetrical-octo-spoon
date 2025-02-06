import Image from "next/image"
import Link from "next/link"

const instagramPosts = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&w=300&q=80",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?auto=format&fit=crop&w=300&q=80",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1592078615290-033ee584e267?auto=format&fit=crop&w=300&q=80",
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=300&q=80",
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1592078615290-033ee584e267?auto=format&fit=crop&w=300&q=80",
  },
  {
    id: 6,
    image: "https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=300&q=80",
  },
]

export function InstagramFeed() {
  return (
    <section className="py-16">
      <h2 className="text-2xl font-bold text-center mb-8">
        Follow Products And Discounts On Instagram
      </h2>
      <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
        {instagramPosts.map((post) => (
          <Link
            key={post.id}
            href="#"
            className="aspect-square relative overflow-hidden rounded-lg"
          >
            <Image
              src={post.image || "/placeholder.svg"}
              alt="Instagram post"
              fill
              className="object-cover transition-transform duration-300 hover:scale-110"
            />
          </Link>
        ))}
      </div>
    </section>
  )
}

