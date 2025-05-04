import Link from "next/link"

export default function Footer() {
  return (
    <footer className="border-t py-8 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[#3B82F6] to-[#8A4FFF] flex items-center justify-center mr-2">
                <span className="text-white font-bold text-sm">B</span>
              </div>
              <span className="text-xl font-bold text-[#3B82F6]">BluBerry</span>
            </div>
            <p className="text-gray-600">
              Selling made simpler. We handle everything from pricing to pickup, so you can receive payment efficiently
              and with minimal effort.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4 text-[#8A4FFF]">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-600 hover:text-[#3B82F6] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-600 hover:text-[#3B82F6] transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/how-it-works" className="text-gray-600 hover:text-[#3B82F6] transition-colors">
                  How It Works
                </Link>
              </li>
              <li>
                <Link href="/sell-item" className="text-gray-600 hover:text-[#3B82F6] transition-colors">
                  Sell Your Item
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-600 hover:text-[#3B82F6] transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4 text-[#3B82F6]">Contact Information</h3>
            <address className="not-italic text-gray-600">
              <p>123 Main Street</p>
              <p>Suite 456</p>
              <p>Anytown, USA 12345</p>
              <p className="mt-2">Email: support@bluberry.com</p>
              <p>Phone: (555) 123-4567</p>
            </address>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center text-gray-600">
          <p>© {new Date().getFullYear()} BluBerry. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
