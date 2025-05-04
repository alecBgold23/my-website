import Link from "next/link"

export default function AboutPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="apple-section bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <h1 className="apple-heading text-[#3B82F6]">About BluBerry</h1>
          <p className="apple-subheading mb-8">
            Our mission is to make selling your unused items simple and efficient.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="space-y-12 text-center">
            <div>
              <h2 className="text-2xl font-semibold mb-4 text-[#8A4FFF]">Our Mission</h2>
              <p className="text-gray-600">
                At BluBerry, our mission is clear: <strong>Selling made simpler</strong>. We've created a service that
                combines professional efficiency with a personal touch, making the selling process straightforward and
                stress-free.
              </p>
              <p className="text-gray-600 mt-4">
                We handle all aspects of the selling process—from valuation to collection—allowing you to declutter your
                space and receive fair compensation without the typical complications of second-hand sales.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-xl">
              <h2 className="text-2xl font-semibold mb-4 text-[#3B82F6]">Our Approach</h2>
              <p className="text-gray-600">
                Unlike traditional online marketplaces that require significant time investment in creating listings,
                communicating with potential buyers, and arranging meetings, BluBerry offers a comprehensive service
                that manages these tasks for you.
              </p>
              <p className="text-gray-600 mt-4">
                We eliminate common concerns such as price negotiations, appointment no-shows, and security
                considerations when meeting unknown buyers. Our process is designed to be efficient, secure, and
                straightforward.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-6 text-[#8A4FFF]">Our Core Values</h2>
              <div className="flex flex-col items-center space-y-6">
                <div className="flex flex-col items-center">
                  <div className="bg-[#3B82F6] w-8 h-8 rounded-full flex items-center justify-center mb-3">
                    <span className="text-sm font-bold text-white">1</span>
                  </div>
                  <p className="text-gray-600">
                    <strong>Efficiency</strong> - We streamline the selling process to save you time and effort.
                  </p>
                </div>
                <div className="flex flex-col items-center">
                  <div className="bg-[#8A4FFF] w-8 h-8 rounded-full flex items-center justify-center mb-3">
                    <span className="text-sm font-bold text-white">2</span>
                  </div>
                  <p className="text-gray-600">
                    <strong>Integrity</strong> - We offer fair market value and maintain transparency throughout the
                    process.
                  </p>
                </div>
                <div className="flex flex-col items-center">
                  <div className="bg-[#3B82F6] w-8 h-8 rounded-full flex items-center justify-center mb-3">
                    <span className="text-sm font-bold text-white">3</span>
                  </div>
                  <p className="text-gray-600">
                    <strong>Reliability</strong> - We honor our commitments and arrive at scheduled times.
                  </p>
                </div>
                <div className="flex flex-col items-center">
                  <div className="bg-[#8A4FFF] w-8 h-8 rounded-full flex items-center justify-center mb-3">
                    <span className="text-sm font-bold text-white">4</span>
                  </div>
                  <p className="text-gray-600">
                    <strong>Professionalism</strong> - We treat you and your items with respect and care.
                  </p>
                </div>
                <div className="flex flex-col items-center">
                  <div className="bg-gradient-to-r from-[#3B82F6] to-[#8A4FFF] w-8 h-8 rounded-full flex items-center justify-center mb-3">
                    <span className="text-sm font-bold text-white">5</span>
                  </div>
                  <p className="text-gray-600">
                    <strong>Transparency</strong> - We maintain clear communication and avoid hidden fees or conditions.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-8 rounded-xl">
              <h2 className="text-2xl font-semibold mb-4 text-[#8A4FFF]">Who We Serve</h2>
              <p className="text-gray-600 mb-4">
                BluBerry is designed for anyone seeking a convenient selling solution, with particular benefits for:
              </p>
              <ul className="space-y-2 text-gray-600 max-w-md mx-auto text-center">
                <li>Individuals who value efficiency and convenience</li>
                <li>Those who prefer personal service over digital marketplaces</li>
                <li>People seeking prompt payment for their items</li>
                <li>Anyone looking to simplify the decluttering process</li>
              </ul>
            </div>
          </div>

          <div className="text-center mt-12">
            <h2 className="text-2xl font-bold mb-4 text-[#3B82F6]">Begin Your Selling Experience</h2>
            <p className="text-xl mb-6">
              Let us help you convert unused items into value with our professional service.
            </p>
            <Link href="/sell-item" className="apple-button apple-button-primary">
              Start Selling Today
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
