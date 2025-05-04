import Link from "next/link"

export default function Footer() {
  return (
    <footer className="border-t py-6 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center text-center">
          <div className="mb-4 flex items-center justify-center">
            <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[#3B82F6] to-[#8A4FFF] flex items-center justify-center mr-2">
              <span className="text-white font-bold text-sm">B</span>
            </div>
            <span className="text-xl font-bold text-[#3B82F6]">BluBerry</span>
          </div>

          <div className="space-y-1 mb-4">
            <p className="text-gray-700">847-510-3229</p>
            <p>
              <a href="mailto:alecgold808@gmail.com" className="text-gray-700 hover:text-[#3B82F6] transition-colors">
                alecgold808@gmail.com
              </a>
            </p>
          </div>

          <div className="text-center text-gray-600 text-sm">
            <p className="mb-1">© {new Date().getFullYear()} BluBerry. All rights reserved.</p>
            <Link href="/privacy-policy" className="text-[#8A4FFF] hover:text-[#3B82F6] transition-colors">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
