import Link from "next/link"
import Image from "next/image"

interface CategoryCardProps {
  title: string
  productCount: number
  image: string
  href: string
}

export function CategoryCard({ title, productCount, image, href }: CategoryCardProps) {
  return (
    <Link href={href} className="group relative overflow-hidden rounded-lg">
      <div className="aspect-[4/3] relative">
        <Image
          src={image}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/40 p-4 flex flex-col justify-end">
          <h3 className="text-xl font-bold text-white">{title}</h3>
          <p className="text-sm text-white/80">{productCount} Products</p>
        </div>
      </div>
    </Link>
  )
}

