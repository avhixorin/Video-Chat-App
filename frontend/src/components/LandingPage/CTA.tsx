import { Link } from "react-router-dom";

export default function CTA() {
  return (
    <section className="py-20 bg-primary">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary-foreground">
          Ready to transform your communication?
        </h2>
        <p className="text-xl mb-8 text-primary-foreground/80">
          Join thousands of satisfied users and experience the future of video chat.
        </p>
        <Link to="#" className="btn bg-white text-primary hover:bg-white/90">
          Sign Up Now
        </Link>
      </div>
    </section>
  )
}

