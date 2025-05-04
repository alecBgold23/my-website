import Link from "next/link"

export default function HowItWorksPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="apple-section bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <h1 className="apple-heading">How BluBerry Works</h1>
          <p className="apple-subheading mb-8">
            Our streamlined process makes selling your items efficient and hassle-free.
          </p>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="space-y-24">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-[#3B82F6] flex items-center justify-center mb-6">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h2 className="text-2xl font-semibold mb-4 text-center">Submit Your Item</h2>
              <p className="text-gray-600 mb-4 max-w-lg text-center">
                Complete our straightforward form with basic information about your item. We've simplified this step to
                eliminate the need for extensive photography or detailed descriptions.
              </p>
              <div className="bg-gray-50 p-4 rounded-lg max-w-md">
                <p className="text-gray-500 italic text-center">
                  "The submission process was remarkably efficient. I completed the form in minutes without needing to
                  take photos." — Mary S.
                </p>
              </div>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-[#8A4FFF] flex items-center justify-center mb-6">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h2 className="text-2xl font-semibold mb-4 text-center">Receive a Fair Offer</h2>
              <p className="text-gray-600 mb-4 max-w-lg text-center">
                Within 24 hours, our team evaluates your submission and provides a competitive offer based on the item's
                condition and current market value, eliminating the need for negotiation.
              </p>
              <div className="bg-gray-50 p-4 rounded-lg max-w-md">
                <p className="text-gray-500 italic text-center">
                  "The offer for my dining set exceeded my expectations and reflected fair market value." — Robert T.
                </p>
              </div>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-[#3B82F6] flex items-center justify-center mb-6">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h2 className="text-2xl font-semibold mb-4 text-center">Schedule a Pickup</h2>
              <p className="text-gray-600 mb-4 max-w-lg text-center">
                Upon accepting our offer, we arrange a convenient pickup time. Our professional team comes to your
                location, eliminating transportation concerns on your part.
              </p>
              <div className="bg-gray-50 p-4 rounded-lg max-w-md">
                <p className="text-gray-500 italic text-center">
                  "The pickup team arrived precisely on schedule and handled the collection process with professionalism
                  and care." — Linda M.
                </p>
              </div>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-[#8A4FFF] flex items-center justify-center mb-6">
                <span className="text-2xl font-bold text-white">4</span>
              </div>
              <h2 className="text-2xl font-semibold mb-4 text-center">Immediate Payment</h2>
              <p className="text-gray-600 mb-4 max-w-lg text-center">
                At the time of pickup, you receive immediate payment via your preferred method—cash, check, or digital
                transfer—eliminating waiting periods for funds to clear.
              </p>
              <div className="bg-gray-50 p-4 rounded-lg max-w-md">
                <p className="text-gray-500 italic text-center">
                  "I received payment immediately upon item collection, which was remarkably convenient." — James W.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Items We Accept */}
      <section className="apple-section bg-black text-white">
        <div className="container mx-auto px-4">
          <h2 className="apple-heading mb-8">Items We Accept</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            <div className="flex flex-col items-center">
              <ul className="space-y-4">
                <li className="flex items-center">
                  <div className="w-6 h-6 rounded-full bg-[#3B82F6] flex items-center justify-center mr-3 flex-shrink-0">
                    <span className="text-xs font-bold text-white">✓</span>
                  </div>
                  <span className="text-gray-300">Furniture (sofas, tables, chairs)</span>
                </li>
                <li className="flex items-center">
                  <div className="w-6 h-6 rounded-full bg-[#3B82F6] flex items-center justify-center mr-3 flex-shrink-0">
                    <span className="text-xs font-bold text-white">✓</span>
                  </div>
                  <span className="text-gray-300">Electronics (TVs, computers, tablets)</span>
                </li>
                <li className="flex items-center">
                  <div className="w-6 h-6 rounded-full bg-[#3B82F6] flex items-center justify-center mr-3 flex-shrink-0">
                    <span className="text-xs font-bold text-white">✓</span>
                  </div>
                  <span className="text-gray-300">Appliances (refrigerators, washers)</span>
                </li>
                <li className="flex items-center">
                  <div className="w-6 h-6 rounded-full bg-[#3B82F6] flex items-center justify-center mr-3 flex-shrink-0">
                    <span className="text-xs font-bold text-white">✓</span>
                  </div>
                  <span className="text-gray-300">Sporting Equipment (bicycles, exercise machines)</span>
                </li>
              </ul>
            </div>
            <div className="flex flex-col items-center">
              <ul className="space-y-4">
                <li className="flex items-center">
                  <div className="w-6 h-6 rounded-full bg-[#8A4FFF] flex items-center justify-center mr-3 flex-shrink-0">
                    <span className="text-xs font-bold text-white">✓</span>
                  </div>
                  <span className="text-gray-300">Musical Instruments (guitars, pianos)</span>
                </li>
                <li className="flex items-center">
                  <div className="w-6 h-6 rounded-full bg-[#8A4FFF] flex items-center justify-center mr-3 flex-shrink-0">
                    <span className="text-xs font-bold text-white">✓</span>
                  </div>
                  <span className="text-gray-300">Tools (power tools, lawn equipment)</span>
                </li>
                <li className="flex items-center">
                  <div className="w-6 h-6 rounded-full bg-[#8A4FFF] flex items-center justify-center mr-3 flex-shrink-0">
                    <span className="text-xs font-bold text-white">✓</span>
                  </div>
                  <span className="text-gray-300">Collectibles (antiques, art pieces)</span>
                </li>
                <li className="flex items-center">
                  <div className="w-6 h-6 rounded-full bg-[#8A4FFF] flex items-center justify-center mr-3 flex-shrink-0">
                    <span className="text-xs font-bold text-white">✓</span>
                  </div>
                  <span className="text-gray-300">Additional quality items (please inquire)</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="apple-section bg-white">
        <div className="container mx-auto px-4">
          <h2 className="apple-heading mb-4">Ready to Convert Items to Cash?</h2>
          <p className="apple-subheading mb-8">Begin our efficient process today and experience hassle-free selling.</p>
          <Link href="/sell-item" className="apple-button apple-button-primary">
            Sell Your Item Now
          </Link>
        </div>
      </section>
    </div>
  )
}
