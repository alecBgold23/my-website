import Link from "next/link"

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="apple-section bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <h1 className="apple-heading text-[#3B82F6]">BluBerry</h1>
          <p className="apple-subheading mb-6">Selling made simpler.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
            <Link href="/sell-item" className="apple-button apple-button-primary">
              Sell Your Item
            </Link>
            <Link href="/how-it-works" className="apple-button apple-button-secondary">
              Learn How It Works
            </Link>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="apple-section bg-white">
        <div className="container mx-auto px-4">
          <h2 className="apple-heading mb-16">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-16">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-[#3B82F6] flex items-center justify-center mb-6">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-center">Submit Your Item</h3>
              <p className="text-gray-600 text-center">
                Complete our simple form with your item details. No complex listings required.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-[#8A4FFF] flex items-center justify-center mb-6">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-center">We Pick It Up</h3>
              <p className="text-gray-600 text-center">
                Schedule a convenient time, and our team will collect the item from your location.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-[#3B82F6] to-[#8A4FFF] flex items-center justify-center mb-6">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-center">Get Paid Instantly</h3>
              <p className="text-gray-600 text-center">
                Receive your payment immediately upon pickup. No waiting, no complications.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="apple-section bg-black text-white">
        <div className="container mx-auto px-4">
          <h2 className="apple-heading mb-4">Why Choose BluBerry</h2>
          <p className="apple-subheading text-gray-300 mb-16">The simplest way to sell your unused items</p>

          <div className="grid md:grid-cols-2 gap-16 max-w-4xl mx-auto">
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-3 text-[#3B82F6]">Simplified Process</h3>
              <p className="text-gray-300">
                Our streamlined form takes minutes to complete, eliminating the need for detailed descriptions or
                photos.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-3 text-[#8A4FFF]">Professional Service</h3>
              <p className="text-gray-300">
                Our vetted team handles pickup, ensuring security and peace of mind throughout the process.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-3 text-[#3B82F6]">Market-Based Pricing</h3>
              <p className="text-gray-300">
                We offer competitive rates based on current market value and item condition.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-3 text-[#8A4FFF]">Immediate Payment</h3>
              <p className="text-gray-300">
                Receive payment at the time of pickup, eliminating waiting periods for transactions to process.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="apple-section bg-white">
        <div className="container mx-auto px-4">
          <h2 className="apple-heading mb-4">Ready to Declutter and Get Paid?</h2>
          <p className="apple-subheading mb-8">Start the simple process today and turn your unused items into cash.</p>
          <Link href="/sell-item" className="apple-button apple-button-primary">
            Sell Your Item Now
          </Link>
        </div>
      </section>
    </div>
  )
}
