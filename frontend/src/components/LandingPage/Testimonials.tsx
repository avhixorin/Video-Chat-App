
const testimonials = [
  {
    name: "John Doe",
    role: "CEO, TechCorp",
    image: "/placeholder.svg",
    quote: "VideoChat App has revolutionized our remote team communication. It's a game-changer!",
  },
  {
    name: "Jane Smith",
    role: "Freelance Designer",
    image: "/placeholder.svg",
    quote: "The integrated chat feature is perfect for sharing ideas during client calls. Love it!",
  },
  {
    name: "Mike Johnson",
    role: "Team Lead, StartupX",
    image: "/placeholder.svg",
    quote: "Secure, reliable, and easy to use. VideoChat App is now an essential part of our workflow.",
  },
]

export default function Testimonials() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">What Our Users Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-card p-6 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.image || "/placeholder.svg"}
                  alt={testimonial.name}
                  width={50}
                  height={50}
                  className="rounded-full mr-4"
                />
                <div>
                  <h3 className="font-semibold">{testimonial.name}</h3>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
              <p className="italic">&ldquo;{testimonial.quote}&rdquo;</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

