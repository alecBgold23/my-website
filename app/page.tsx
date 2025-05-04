import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="container mx-auto py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[#3B82F6]">Selling Made Simpler</h1>
          <p className="text-xl mb-8">
            BluBerry streamlines the process of selling your second-hand items by managing everything for you — from
            pricing to pickup — so you can receive payment efficiently and with minimal effort.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button
              asChild
              size="lg"
              className="bg-[#3B82F6] hover:bg-[#2563EB] text-white text-lg px-8 py-6 rounded-lg"
            >
              <Link href="/sell-item">Sell Your Item</Link>
            </Button>
            <Button
              asChild
              size="lg"
              className="bg-[#8A4FFF] hover:bg-[#7B46E3] text-white text-lg px-8 py-6 rounded-lg"
            >
              <Link href="/how-it-works">Learn How It Works</Link>
            </Button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-8 rounded-xl shadow-md text-center border border-gray-100">
            <div className="bg-[#3B82F6] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-white">1</span>
            </div>
            <h3 className="text-xl font-semibold mb-2 text-[#3B82F6]">Submit Your Item</h3>
            <p>
              Complete our straightforward form with your item details. No complex listings or photography required.
            </p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-md text-center border border-gray-100">
            <div className="bg-[#8A4FFF] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-white">2</span>
            </div>
            <h3 className="text-xl font-semibold mb-2 text-[#8A4FFF]">We Pick It Up</h3>
            <p>Schedule a convenient time, and our professional team will come to your location to collect the item.</p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-md text-center border border-gray-100">
            <div className="bg-gradient-to-r from-[#3B82F6] to-[#8A4FFF] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-white">3</span>
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Get Paid Instantly</h3>
            <p>Receive your payment immediately upon pickup. No waiting periods, negotiations, or complications.</p>
          </div>
        </div>

        <div className="bg-[#EBF5FF] p-8 rounded-xl mb-16">
          <h2 className="text-3xl font-bold mb-6 text-center text-[#3B82F6]">Why Choose BluBerry</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex items-start">
              <div className="bg-[#3B82F6] w-10 h-10 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                <span className="text-lg font-bold text-white">✓</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-[#3B82F6]">Simplified Process</h3>
                <p>
                  Our streamlined form takes minutes to complete, eliminating the need for detailed descriptions or
                  photos.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-[#8A4FFF] w-10 h-10 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                <span className="text-lg font-bold text-white">✓</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-[#8A4FFF]">Professional Service</h3>
                <p>Our vetted team handles pickup, ensuring security and peace of mind throughout the process.</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-[#3B82F6] w-10 h-10 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                <span className="text-lg font-bold text-white">✓</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-[#3B82F6]">Market-Based Pricing</h3>
                <p>We offer competitive rates based on current market value and item condition.</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-[#8A4FFF] w-10 h-10 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                <span className="text-lg font-bold text-white">✓</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-[#8A4FFF]">Immediate Payment</h3>
                <p>Receive payment at the time of pickup, eliminating waiting periods for transactions to process.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center bg-[#F3EEFF] p-8 rounded-xl">
          <h2 className="text-3xl font-bold mb-6 text-[#8A4FFF]">Ready to Declutter and Get Paid?</h2>
          <p className="text-xl mb-8">Start the simple process today and turn your unused items into cash.</p>
          <Button
            asChild
            size="lg"
            className="bg-gradient-to-r from-[#3B82F6] to-[#8A4FFF] hover:from-[#2563EB] hover:to-[#7B46E3] text-white text-lg px-8 py-6 rounded-lg"
          >
            <Link href="/sell-item">Sell Your Item Now</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
