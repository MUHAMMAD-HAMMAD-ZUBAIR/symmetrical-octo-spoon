import { Clock, Users, PiggyBank, Recycle } from 'lucide-react'

const features = [
  {
    icon: Clock,
    title: "Next day as standard",
    description: "Order before 3pm and get your order the next day as standard"
  },
  {
    icon: Users,
    title: "Made by true artisans",
    description: "Handmade crafted goods made with real passion and craftmanship"
  },
  {
    icon: PiggyBank,
    title: "Unbeatable prices",
    description: "For our materials and quality you won't find better prices anywhere"
  },
  {
    icon: Recycle,
    title: "Recycled packaging",
    description: "We use 100% recycled to ensure our footprint is more manageable"
  }
]

export function BrandFeatures() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
          What Makes Our Brand Different
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-white p-6 rounded-lg"
            >
              <feature.icon className="h-10 w-10 text-[#006d77] mb-4" />
              <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

