import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react"
import { Link } from "react-router-dom"

export default function Footer() {
  return (
    <footer className="bg-secondary py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">VideoChat App</h3>
            <p className="text-muted-foreground">Connect. Communicate. Collaborate.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="#" className="text-muted-foreground hover:text-foreground">
                  Home
                </Link>
              </li>
              <li>
                <Link to="#" className="text-muted-foreground hover:text-foreground">
                  Features
                </Link>
              </li>
              <li>
                <Link to="#" className="text-muted-foreground hover:text-foreground">
                  Pricing
                </Link>
              </li>
              <li>
                <Link to="#" className="text-muted-foreground hover:text-foreground">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link to="#" className="text-muted-foreground hover:text-foreground">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="#" className="text-muted-foreground hover:text-foreground">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Stay Updated</h3>
            <form className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-background text-foreground px-4 py-2 rounded-l-md focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <button
                type="submit"
                className="bg-primary text-primary-foreground px-4 py-2 rounded-r-md hover:bg-primary/90 transition-colors duration-300"
              >
                Subscribe
              </button>
            </form>
            <div className="flex space-x-4 mt-4">
              <Link to="#" className="text-muted-foreground hover:text-foreground">
                <Facebook className="w-6 h-6" />
              </Link>
              <Link to="#" className="text-muted-foreground hover:text-foreground">
                <Twitter className="w-6 h-6" />
              </Link>
              <Link to="#" className="text-muted-foreground hover:text-foreground">
                <Instagram className="w-6 h-6" />
              </Link>
              <Link to="#" className="text-muted-foreground hover:text-foreground">
                <Linkedin className="w-6 h-6" />
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-muted-foreground/20 text-center text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} VideoChat App. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

