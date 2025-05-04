import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function AboutPage() {
  return (
    <div className="container mx-auto py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-[#3B82F6]">About BluBerry</h1>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-[#8A4FFF]">Our Mission</h2>
          <p className="text-lg mb-4">
            At BluBerry, our mission is clear: <strong>Selling made simpler</strong>. We've created a service that
            combines professional efficiency with a personal touch, making the selling process straightforward and
            stress-free.
          </p>
          <p className="text-lg mb-4">
            We handle all aspects of the selling process—from valuation to collection—allowing you to declutter your
            space and receive fair compensation without the typical complications of second-hand sales.
          </p>
        </div>

        <div className="mb-8 bg-[#EBF5FF] p-8 rounded-xl">
          <h2 className="text-2xl font-semibold mb-4 text-[#3B82F6]">Our Approach</h2>
          <p className="text-lg mb-4">
            Unlike traditional online marketplaces that require significant time investment in creating listings,
            communicating with potential buyers, and arranging meetings, BluBerry offers a comprehensive service that
            manages these tasks for you.
          </p>
          <p className="text-lg mb-4">
            We eliminate common concerns such as price negotiations, appointment no-shows, and security considerations
            when meeting unknown buyers. Our process is designed to be efficient, secure, and straightforward.
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-[#8A4FFF]">Our Core Values</h2>
          <ul className="list-none pl-0 space-y-4 text-lg">
            <li className="flex items-center">
              <div className="bg-[#3B82F6] w-8 h-8 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                <span className="text-sm font-bold text-white">1</span>
              </div>
              <span>
                <strong>Efficiency</strong> - We streamline the selling process to save you time and effort.
              </span>
            </li>
            <li className="flex items-center">
              <div className="bg-[#8A4FFF] w-8 h-8 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                <span className="text-sm font-bold text-white">2</span>
              </div>
              <span>
                <strong>Integrity</strong> - We offer fair market value and maintain transparency throughout the
                process.
              </span>
            </li>
            <li className="flex items-center">
              <div className="bg-[#3B82F6] w-8 h-8 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                <span className="text-sm font-bold text-white">3</span>
              </div>
              <span>
                <strong>Reliability</strong> - We honor our commitments and arrive at scheduled times.
              </span>
            </li>
            <li className="flex items-center">
              <div className="bg-[#8A4FFF] w-8 h-8 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                <span className="text-sm font-bold text-white">4</span>
              </div>
              <span>
                <strong>Professionalism</strong> - We treat you and your items with respect and care.
              </span>
            </li>
            <li className="flex items-center">
              <div className="bg-gradient-to-r from-[#3B82F6] to-[#8A4FFF] w-8 h-8 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                <span className="text-sm font-bold text-white">5</span>
              </div>
              <span>
                <strong>Transparency</strong> - We maintain clear communication and avoid hidden fees or conditions.
              </span>
            </li>
          </ul>
        </div>

        <div className="mb-8 bg-[#F3EEFF] p-8 rounded-xl">
          <h2 className="text-2xl font-semibold mb-4 text-[#8A4FFF]">Who We Serve</h2>
          <p className="text-lg mb-4">
            BluBerry is designed for anyone seeking a convenient selling solution, with particular benefits for:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-lg">
            <li>Individuals who value efficiency and convenience</li>
            <li>Those who prefer personal service over digital marketplaces</li>
            <li>People seeking prompt payment for their items</li>
            <li>Anyone looking to simplify the decluttering process</li>
          </ul>
        </div>

        <div className="text-center mt-12 bg-white p-8 rounded-xl shadow-md border border-gray-100">
          <h2 className="text-3xl font-bold mb-4 text-[#3B82F6]">Begin Your Selling Experience</h2>
          <p className="text-xl mb-6">Let us help you convert unused items into value with our professional service.</p>
          <Button
            asChild
            size="lg"
            className="bg-gradient-to-r from-[#3B82F6] to-[#8A4FFF] hover:from-[#2563EB] hover:to-[#7B46E3] text-white text-lg px-8 py-6 rounded-lg"
          >
            <Link href="/sell-item">Start Selling Today</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
