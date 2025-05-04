import Link from "next/link"

export default function Footer() {
  return (
    <footer className="apple-footer">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center text-center">
          <div className="mb-4 flex items-center justify-center">
            <div className="w-6 h-6 rounded-full bg-gradient-to-r from-[#3B82F6] to-[#8A4FFF] flex items-center justify-center mr-1.5">
              <span className="text-white font-bold text-xs">B</span>
            </div>
            <span className="text-sm font-medium text-gray-800">BluBerry</span>
          </div>

          <div className="space-y-1 mb-4">
            <p className="text-xs text-gray-500">847-510-3229</p>
            <p>
              <a
                href="mailto:alecgold808@gmail.com"
                className="text-xs text-gray-500 hover:text-[#3B82F6] transition-colors"
              >
                alecgold808@gmail.com
              </a>
            </p>
          </div>

          <div className="text-center text-xs text-gray-400">
            <p className="mb-1">Copyright © {new Date().getFullYear()} BluBerry. All rights reserved.</p>
            <Link href="/privacy-policy" className="text-gray-500 hover:text-[#3B82F6] transition-colors">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
