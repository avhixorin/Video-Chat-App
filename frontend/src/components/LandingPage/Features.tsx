import { Video, MessageSquare, Shield, Smile } from "lucide-react"

const features = [
  {
    icon: Video,
    title: "High-quality video and audio",
    description: "Crystal clear communication for all your calls.",
  },
  {
    icon: MessageSquare,
    title: "Integrated chat",
    description: "Real-time collaboration with built-in messaging.",
  },
  {
    icon: Shield,
    title: "Secure and reliable",
    description: "Your conversations are protected and always available.",
  },
  {
    icon: Smile,
    title: "Easy-to-use interface",
    description: "No steep learning curve, just intuitive design.",
  },
]

export default function Features() {
  return (
    <section className="py-20 bg-gray-300">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-card p-6 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
            >
              <feature.icon className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

