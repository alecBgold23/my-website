"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
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
    <header className="border-b bg-white">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex justify-between items-center">
          <Link href="/" className="flex items-center">
            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#3B82F6] to-[#8A4FFF] flex items-center justify-center mr-2">
              <span className="text-white font-bold text-lg">B</span>
            </div>
            <span className="text-2xl font-bold text-[#3B82F6]">BluBerry</span>
          </Link>

          {/* Mobile menu button */}
          <button className="md:hidden" onClick={toggleMenu} aria-label={isMenuOpen ? "Close menu" : "Open menu"}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Desktop navigation */}
          <div className="hidden md:flex gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`hover:text-[#8A4FFF] transition-colors ${
                  pathname === link.href ? "font-medium text-[#3B82F6]" : "text-gray-600"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </nav>

        {/* Mobile navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`hover:text-[#8A4FFF] transition-colors ${
                  pathname === link.href ? "font-medium text-[#3B82F6]" : "text-gray-600"
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
