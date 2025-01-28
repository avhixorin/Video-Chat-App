import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden text-white">
      <div className="container mx-auto px-4 z-10">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in-up ">Connect. Communicate. Collaborate.</h1>
          <p className="text-xl md:text-2xl mb-8 animate-fade-in-up animation-delay-200">
            Experience seamless video calls with integrated chat for personal and professional use.
          </p>
          <div className="flex justify-center space-x-4 animate-fade-in-up animation-delay-400">
            <Link to="/login" className=" bg-white text-gray-800 flex justify-center items-center px-6 py-3 rounded-lg font-semibold">
              Get Started
            </Link>
            <Link to="#" className="flex justify-center items-center px-6 py-3 rounded-lg font-semibold">
              Learn More
            </Link>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 z-0">
        <img
          src="/placeholder.svg"
          alt="Video chat interface"
          className="opacity-20 object-cover"
        />
      </div>
    </section>
  )
}

