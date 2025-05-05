"use client"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Menu, X, Search } from "lucide-react"
import { useState } from "react"
import SearchModal from "./search"

export default function Navbar() {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen)
  }

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/faq", label: "FAQ" },
    { href: "/how-it-works", label: "How It Works" },
    { href: "/reviews", label: "Reviews" },
    { href: "/sell-item", label: "Sell Your Item" },
    { href: "/contact", label: "Contact" },
  ]

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "auto" })
  }

  return (
    <>
      <header className="apple-nav sticky top-0 z-50 backdrop-blur-lg bg-white/90">
        <div className="container mx-auto px-4">
          <nav className="flex justify-between items-center h-12">
            <Link href="/" className="flex items-center gap-2" onClick={scrollToTop}>
              <div className="relative w-8 h-8">
                <Image
                  src="/images/blueberry-logo.png"
                  alt="BluBerry Logo"
                  width={32}
                  height={32}
                  className="object-contain"
                />
              </div>
              <span className="text-sm font-medium sparkle-text">BluBerry</span>
            </Link>

            {/* Desktop navigation */}
            <div className="hidden md:flex space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm hover:text-[#3B82F6] transition-all duration-200 ${
                    pathname === link.href ? "text-[#3B82F6]" : "text-gray-600"
                  } hover:translate-y-[-1px]`}
                  onClick={scrollToTop}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <div className="flex items-center">
              <button
                className="text-gray-600 hover:text-[#3B82F6] transition-all duration-200 hover:scale-110"
                aria-label="Search"
                onClick={toggleSearch}
              >
                <Search size={18} />
              </button>

              {/* Mobile menu button */}
              <button
                className="md:hidden ml-4 text-gray-600 transition-all duration-200 hover:text-[#3B82F6] hover:scale-110"
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
                  className={`text-sm hover:text-[#3B82F6] transition-all duration-200 ${
                    pathname === link.href ? "text-[#3B82F6]" : "text-gray-600"
                  } hover:translate-y-[-1px]`}
                  onClick={() => {
                    setIsMenuOpen(false)
                    scrollToTop()
                  }}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          )}
        </div>
      </header>

      {/* Search Modal */}
      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </>
  )
}
