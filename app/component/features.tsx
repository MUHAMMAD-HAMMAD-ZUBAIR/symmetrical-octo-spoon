import { Trophy, Shield, HeadphonesIcon } from 'lucide-react'

export function Features() {
  const features = [
    {
      icon: Trophy,
      title: "High Quality",
      description: "Crafted from top materials",
    },
    {
      icon: Shield,
      title: "Warranty Protection",
      description: "Over 2 years",
    },
    {
      icon: HeadphonesIcon,
      title: "24 / 7 Support",
      description: "Dedicated support",
    },
  ]

  return (
    <section className="bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="flex flex-col items-center text-center"
            >
              <feature.icon className="h-12 w-12 text-[#006d77] mb-4" />
              <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

