import { UserPlus, Video, MessageCircle } from "lucide-react"

const steps = [
  {
    icon: UserPlus,
    title: "Sign Up for Free",
    description: "Create your account in seconds",
  },
  {
    icon: Video,
    title: "Start or Join a Call",
    description: "Connect with others instantly",
  },
  {
    icon: MessageCircle,
    title: "Chat and Collaborate",
    description: "Communicate effortlessly",
  },
]

export default function HowItWorks() {
  return (
    <section className="py-20 bg-gray-600 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">How It Works</h2>
        <div className="flex flex-col md:flex-row justify-center items-center md:space-x-8">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center mb-8 md:mb-0">
              <div className="bg-primary rounded-full p-4 mb-4">
                <step.icon className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-center text-muted-foreground">{step.description}</p>
              {index < steps.length - 1 && (
                <div className="hidden md:block text-primary text-4xl font-bold mt-4">→</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

