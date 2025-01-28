import Hero from "./Hero";
import Features from "./Features";
import Testimonials from "./Testimonials";
import HowItWorks from "./HowItWorks";
import CTA from "./CTA";
import Footer from "./Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700">
          <Hero />
      </section>
          <Features />
          <Testimonials />
          <HowItWorks />

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-700">
        <div className="container mx-auto px-6">
          <CTA />
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-gray-900 text-white">
        <div className="container mx-auto px-6 py-10">
          <Footer />
        </div>
      </footer>
    </main>
  );
}