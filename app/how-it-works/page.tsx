import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function HowItWorksPage() {
  return (
    <div className="container mx-auto py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-[#3B82F6]">How BluBerry Works</h1>
        <p className="text-xl mb-12">
          Our streamlined process makes selling your items efficient and hassle-free. Here's our simple 4-step approach:
        </p>

        <div className="space-y-16 mb-12">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="bg-[#3B82F6] w-24 h-24 rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-4xl font-bold text-white">1</span>
            </div>
            <div>
              <h2 className="text-2xl font-semibold mb-3 text-[#3B82F6]">Submit Your Item</h2>
              <p className="text-lg">
                Complete our straightforward form with basic information about your item. We've simplified this step to
                eliminate the need for extensive photography or detailed descriptions.
              </p>
              <div className="mt-4 p-4 bg-[#EBF5FF] rounded-lg">
                <p className="italic">
                  "The submission process was remarkably efficient. I completed the form in minutes without needing to
                  take photos." — Mary S.
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="bg-[#8A4FFF] w-24 h-24 rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-4xl font-bold text-white">2</span>
            </div>
            <div>
              <h2 className="text-2xl font-semibold mb-3 text-[#8A4FFF]">Receive a Fair Offer</h2>
              <p className="text-lg">
                Within 24 hours, our team evaluates your submission and provides a competitive offer based on the item's
                condition and current market value, eliminating the need for negotiation.
              </p>
              <div className="mt-4 p-4 bg-[#F3EEFF] rounded-lg">
                <p className="italic">
                  "The offer for my dining set exceeded my expectations and reflected fair market value." — Robert T.
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="bg-[#3B82F6] w-24 h-24 rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-4xl font-bold text-white">3</span>
            </div>
            <div>
              <h2 className="text-2xl font-semibold mb-3 text-[#3B82F6]">Schedule a Pickup</h2>
              <p className="text-lg">
                Upon accepting our offer, we arrange a convenient pickup time. Our professional team comes to your
                location, eliminating transportation concerns on your part.
              </p>
              <div className="mt-4 p-4 bg-[#EBF5FF] rounded-lg">
                <p className="italic">
                  "The pickup team arrived precisely on schedule and handled the collection process with professionalism
                  and care." — Linda M.
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="bg-[#8A4FFF] w-24 h-24 rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-4xl font-bold text-white">4</span>
            </div>
            <div>
              <h2 className="text-2xl font-semibold mb-3 text-[#8A4FFF]">Immediate Payment</h2>
              <p className="text-lg">
                At the time of pickup, you receive immediate payment via your preferred method—cash, check, or digital
                transfer—eliminating waiting periods for funds to clear.
              </p>
              <div className="mt-4 p-4 bg-[#F3EEFF] rounded-lg">
                <p className="italic">
                  "I received payment immediately upon item collection, which was remarkably convenient." — James W.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-[#EBF5FF] to-[#F3EEFF] p-8 rounded-xl mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-center text-gray-800">Items We Accept</h2>
          <p className="text-lg mb-6">BluBerry accepts a variety of quality used items in good condition, including:</p>
          <div className="grid md:grid-cols-2 gap-4">
            <ul className="space-y-2">
              <li className="flex items-center">
                <div className="bg-[#3B82F6] w-6 h-6 rounded-full flex items-center justify-center mr-2 flex-shrink-0">
                  <span className="text-xs font-bold text-white">✓</span>
                </div>
                <span>Furniture (sofas, tables, chairs)</span>
              </li>
              <li className="flex items-center">
                <div className="bg-[#3B82F6] w-6 h-6 rounded-full flex items-center justify-center mr-2 flex-shrink-0">
                  <span className="text-xs font-bold text-white">✓</span>
                </div>
                <span>Electronics (TVs, computers, tablets)</span>
              </li>
              <li className="flex items-center">
                <div className="bg-[#3B82F6] w-6 h-6 rounded-full flex items-center justify-center mr-2 flex-shrink-0">
                  <span className="text-xs font-bold text-white">✓</span>
                </div>
                <span>Appliances (refrigerators, washers)</span>
              </li>
              <li className="flex items-center">
                <div className="bg-[#3B82F6] w-6 h-6 rounded-full flex items-center justify-center mr-2 flex-shrink-0">
                  <span className="text-xs font-bold text-white">✓</span>
                </div>
                <span>Sporting Equipment (bicycles, exercise machines)</span>
              </li>
            </ul>
            <ul className="space-y-2">
              <li className="flex items-center">
                <div className="bg-[#8A4FFF] w-6 h-6 rounded-full flex items-center justify-center mr-2 flex-shrink-0">
                  <span className="text-xs font-bold text-white">✓</span>
                </div>
                <span>Musical Instruments (guitars, pianos)</span>
              </li>
              <li className="flex items-center">
                <div className="bg-[#8A4FFF] w-6 h-6 rounded-full flex items-center justify-center mr-2 flex-shrink-0">
                  <span className="text-xs font-bold text-white">✓</span>
                </div>
                <span>Tools (power tools, lawn equipment)</span>
              </li>
              <li className="flex items-center">
                <div className="bg-[#8A4FFF] w-6 h-6 rounded-full flex items-center justify-center mr-2 flex-shrink-0">
                  <span className="text-xs font-bold text-white">✓</span>
                </div>
                <span>Collectibles (antiques, art pieces)</span>
              </li>
              <li className="flex items-center">
                <div className="bg-[#8A4FFF] w-6 h-6 rounded-full flex items-center justify-center mr-2 flex-shrink-0">
                  <span className="text-xs font-bold text-white">✓</span>
                </div>
                <span>Additional quality items (please inquire)</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="text-center bg-white p-8 rounded-xl shadow-md border border-gray-100">
          <h2 className="text-3xl font-bold mb-6 text-[#3B82F6]">Ready to Convert Items to Cash?</h2>
          <p className="text-xl mb-6">Begin our efficient process today and experience hassle-free selling.</p>
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
