"use client"

import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Menu, X, Search, ShoppingBag } from "lucide-react"
import { useState } from "react"

export default function Navbar() {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/how-it-works", label: "How It Works" },
    { href: "/sell-item", label: "Sell Your Item" },
    { href: "/contact", label: "Contact" },
  ]

  return (
    <header className="apple-nav sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <nav className="flex justify-between items-center h-12">
          <Link href="/" className="flex items-center">
            <div className="relative w-8 h-8 mr-2">
              <Image
                src="/images/blueberry-logo.png"
                alt="BluBerry Logo"
                width={32}
                height={32}
                className="object-contain"
              />
            </div>
            <span className="text-sm font-medium bg-gradient-to-r from-[#0066ff] via-[#6a5acd] to-[#8c52ff] bg-clip-text text-transparent">
              BluBerry
            </span>
          </Link>

          {/* Desktop navigation */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm hover:text-[#3B82F6] transition-colors ${
                  pathname === link.href ? "text-[#3B82F6]" : "text-gray-600"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center space-x-4">
            <button className="text-gray-600 hover:text-[#3B82F6]" aria-label="Search">
              <Search size={18} />
            </button>
            <button className="text-gray-600 hover:text-[#3B82F6]" aria-label="Cart">
              <ShoppingBag size={18} />
            </button>

            {/* Mobile menu button */}
            <button
              className="md:hidden text-gray-600"
              onClick={toggleMenu}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </nav>

        {/* Mobile navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 flex flex-col gap-6 items-center">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm hover:text-[#3B82F6] transition-colors ${
                  pathname === link.href ? "text-[#3B82F6]" : "text-gray-600"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </header>
  )
}
