import Link from "next/link"
import Image from "next/image"

export default function Home() {
  return (
    <div>
      {/* Hero Section with Apple-style layout */}
      <section className="apple-section bg-gradient-to-b from-white to-gray-50 relative overflow-hidden pt-12 pb-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center text-center mb-12">
            <h1 className="apple-heading mb-2">
              <span className="bg-gradient-to-r from-[#0066ff] via-[#6a5acd] to-[#8c52ff] bg-clip-text text-transparent">
                BluBerry
              </span>
            </h1>
            <p className="apple-subheading mb-8">Selling made simpler.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/sell-item" className="apple-button apple-button-primary">
                Sell Your Item
              </Link>
              <Link href="/how-it-works" className="apple-button apple-button-secondary">
                Learn How It Works
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="apple-section bg-black text-white">
        <div className="container mx-auto px-4">
          <h2 className="apple-heading mb-16 text-white">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-16">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-[#3B82F6] flex items-center justify-center mb-6">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <div className="relative w-full h-48 mb-6 rounded-xl overflow-hidden">
                <Image src="/placeholder.svg?key=2e143" alt="Submit your item" fill className="object-cover" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-center">Submit Your Item</h3>
              <p className="text-gray-300 text-center">
                Complete our simple form with your item details. No complex listings required.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-[#8A4FFF] flex items-center justify-center mb-6">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <div className="relative w-full h-48 mb-6 rounded-xl overflow-hidden">
                <Image src="/placeholder.svg?key=fghw3" alt="We pick it up" fill className="object-cover" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-center">We Pick It Up</h3>
              <p className="text-gray-300 text-center">
                Schedule a convenient time, and our team will collect the item from your location.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-[#3B82F6] to-[#8A4FFF] flex items-center justify-center mb-6">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <div className="relative w-full h-48 mb-6 rounded-xl overflow-hidden">
                <Image src="/placeholder.svg?key=efy0w" alt="Get paid instantly" fill className="object-cover" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-center">Get Paid Instantly</h3>
              <p className="text-gray-300 text-center">
                Receive your payment immediately upon pickup. No waiting, no complications.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="apple-section bg-white">
        <div className="container mx-auto px-4">
          <h2 className="apple-heading mb-4 text-[#3B82F6]">Why Choose BluBerry</h2>
          <p className="apple-subheading text-gray-600 mb-16">The simplest way to sell your unused items</p>

          <div className="grid md:grid-cols-2 gap-16 max-w-4xl mx-auto">
            <div className="text-center flex flex-col items-center">
              <div className="relative w-full h-48 mb-6 rounded-xl overflow-hidden">
                <Image src="/placeholder.svg?key=6ot0q" alt="Simplified Process" fill className="object-cover" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-[#3B82F6]">Simplified Process</h3>
              <p className="text-gray-600">
                Our streamlined form takes minutes to complete, eliminating the need for detailed descriptions or
                photos.
              </p>
            </div>
            <div className="text-center flex flex-col items-center">
              <div className="relative w-full h-48 mb-6 rounded-xl overflow-hidden">
                <Image src="/placeholder.svg?key=p10r0" alt="Professional Service" fill className="object-cover" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-[#8A4FFF]">Professional Service</h3>
              <p className="text-gray-600">
                Our vetted team handles pickup, ensuring security and peace of mind throughout the process.
              </p>
            </div>
            <div className="text-center flex flex-col items-center">
              <div className="relative w-full h-48 mb-6 rounded-xl overflow-hidden">
                <Image src="/placeholder.svg?key=8toch" alt="Market-Based Pricing" fill className="object-cover" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-[#3B82F6]">Market-Based Pricing</h3>
              <p className="text-gray-600">
                We offer competitive rates based on current market value and item condition.
              </p>
            </div>
            <div className="text-center flex flex-col items-center">
              <div className="relative w-full h-48 mb-6 rounded-xl overflow-hidden">
                <Image src="/placeholder.svg?key=y08aa" alt="Immediate Payment" fill className="object-cover" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-[#8A4FFF]">Immediate Payment</h3>
              <p className="text-gray-600">
                Receive payment at the time of pickup, eliminating waiting periods for transactions to process.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="apple-section bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="apple-heading mb-12">What Our Customers Say</h2>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-6 rounded-2xl shadow-sm flex flex-col items-center text-center">
              <div className="relative w-24 h-24 rounded-full overflow-hidden mb-4">
                <Image src="/placeholder.svg?key=tzifh" alt="Sarah T." fill className="object-cover" />
              </div>
              <p className="text-gray-600 mb-4">
                "I sold 5 items in minutes! The pickup was scheduled for the next day and payment was instant."
              </p>
              <p className="font-medium">Sarah T.</p>
              <p className="text-sm text-gray-500">Chicago, IL</p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm flex flex-col items-center text-center">
              <div className="relative w-24 h-24 rounded-full overflow-hidden mb-4">
                <Image src="/placeholder.svg?key=td4qz" alt="Michael R." fill className="object-cover" />
              </div>
              <p className="text-gray-600 mb-4">
                "BluBerry made selling my old electronics so easy. No haggling, no meetups with strangers. Just simple
                and efficient."
              </p>
              <p className="font-medium">Michael R.</p>
              <p className="text-sm text-gray-500">Boston, MA</p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm flex flex-col items-center text-center">
              <div className="relative w-24 h-24 rounded-full overflow-hidden mb-4">
                <Image src="/placeholder.svg?key=p0c26" alt="Patricia L." fill className="object-cover" />
              </div>
              <p className="text-gray-600 mb-4">
                "As a senior, I appreciated how easy the whole process was. The team was respectful and professional."
              </p>
              <p className="font-medium">Patricia L.</p>
              <p className="text-sm text-gray-500">Denver, CO</p>
            </div>
          </div>
        </div>
      </section>

      {/* Environmental Mission Section */}
      <section className="apple-section bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <div className="relative w-full aspect-square max-w-md mx-auto rounded-2xl overflow-hidden">
                <Image src="/placeholder.svg?key=255yw" alt="Environmental Impact" fill className="object-cover" />
              </div>
            </div>
            <div className="md:w-1/2 text-center md:text-left">
              <h2 className="apple-heading mb-4 text-[#3B82F6]">Reducing Waste, Creating Value</h2>
              <p className="text-gray-600 mb-4">
                At BluBerry, we're committed to extending the lifecycle of quality items. By facilitating the resale of
                used goods, we help reduce waste and environmental impact.
              </p>
              <p className="text-gray-600">
                Every item we help sell is one less item in a landfill and one more opportunity to create value for both
                sellers and future owners.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="apple-section bg-gradient-to-b from-white to-gray-50">
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
