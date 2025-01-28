import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-r from-blue-500 to-purple-600">
      <div className="container mx-auto px-6 z-10">
        <div className="text-center text-white">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 animate-fade-in-up drop-shadow-lg">
            Connect. Communicate. Collaborate.
          </h1>
          <p className="text-lg md:text-2xl mb-10 animate-fade-in-up animation-delay-200 drop-shadow-md">
            Experience seamless video calls with integrated chat for personal and professional use.
          </p>
          <div className="flex justify-center space-x-6 animate-fade-in-up animation-delay-400">
            <Link
              to="#"
              className="px-6 py-3 text-lg font-semibold bg-white text-blue-600 rounded-lg shadow-lg hover:bg-blue-100 transition ease-in-out duration-300"
            >
              Get Started
            </Link>
            <Link
              to="#"
              className="px-6 py-3 text-lg font-semibold bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700 transition ease-in-out duration-300"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 z-0">
        <img
          src="/placeholder.svg"
          alt="Video chat interface"
          className="opacity-25 object-cover w-full h-full"
        />
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black to-transparent z-0"></div>
    </section>
  );
}