import Link from "next/link"
import Image from "next/image"

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
          <div className="relative w-full max-w-3xl mx-auto aspect-[16/9] rounded-2xl overflow-hidden">
            <Image
              src="/placeholder.svg?height=800&width=1200&query=infographic showing 4 steps of selling process: submit, quote, pickup, payment, clean minimal style with icons"
              alt="BluBerry Process Overview"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="space-y-24">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/2">
                <div className="relative w-full aspect-square rounded-2xl overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=600&width=600&query=person submitting item details on laptop, clean minimal style, white background"
                    alt="Submit Your Item"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="md:w-1/2 text-center md:text-left">
                <div className="w-16 h-16 rounded-full bg-[#3B82F6] flex items-center justify-center mb-6 mx-auto md:mx-0">
                  <span className="text-2xl font-bold text-white">1</span>
                </div>
                <h2 className="text-2xl font-semibold mb-4">Submit Your Item</h2>
                <p className="text-gray-600 mb-4">
                  Complete our straightforward form with basic information about your item. We've simplified this step
                  to eliminate the need for extensive photography or detailed descriptions.
                </p>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-gray-500 italic text-center">
                    "The submission process was remarkably efficient. I completed the form in minutes without needing to
                    take photos." — Mary S.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col md:flex-row-reverse items-center gap-8">
              <div className="md:w-1/2">
                <div className="relative w-full aspect-square rounded-2xl overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=600&width=600&query=person receiving offer notification on smartphone, clean minimal style"
                    alt="Receive a Fair Offer"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="md:w-1/2 text-center md:text-left">
                <div className="w-16 h-16 rounded-full bg-[#8A4FFF] flex items-center justify-center mb-6 mx-auto md:mx-0">
                  <span className="text-2xl font-bold text-white">2</span>
                </div>
                <h2 className="text-2xl font-semibold mb-4">Receive a Fair Offer</h2>
                <p className="text-gray-600 mb-4">
                  Within 24 hours, our team evaluates your submission and provides a competitive offer based on the
                  item's condition and current market value, eliminating the need for negotiation.
                </p>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-gray-500 italic text-center">
                    "The offer for my dining set exceeded my expectations and reflected fair market value." — Robert T.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/2">
                <div className="relative w-full aspect-square rounded-2xl overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=600&width=600&query=professional in blue shirt picking up package at doorstep, natural daylight"
                    alt="Schedule a Pickup"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="md:w-1/2 text-center md:text-left">
                <div className="w-16 h-16 rounded-full bg-[#3B82F6] flex items-center justify-center mb-6 mx-auto md:mx-0">
                  <span className="text-2xl font-bold text-white">3</span>
                </div>
                <h2 className="text-2xl font-semibold mb-4">Schedule a Pickup</h2>
                <p className="text-gray-600 mb-4">
                  Upon accepting our offer, we arrange a convenient pickup time. Our professional team comes to your
                  location, eliminating transportation concerns on your part.
                </p>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-gray-500 italic text-center">
                    "The pickup team arrived precisely on schedule and handled the collection process with
                    professionalism and care." — Linda M.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col md:flex-row-reverse items-center gap-8">
              <div className="md:w-1/2">
                <div className="relative w-full aspect-square rounded-2xl overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=600&width=600&query=person receiving cash payment, clean minimal style"
                    alt="Immediate Payment"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="md:w-1/2 text-center md:text-left">
                <div className="w-16 h-16 rounded-full bg-[#8A4FFF] flex items-center justify-center mb-6 mx-auto md:mx-0">
                  <span className="text-2xl font-bold text-white">4</span>
                </div>
                <h2 className="text-2xl font-semibold mb-4">Immediate Payment</h2>
                <p className="text-gray-600 mb-4">
                  At the time of pickup, you receive immediate payment via your preferred method—cash, check, or digital
                  transfer—eliminating waiting periods for funds to clear.
                </p>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-gray-500 italic text-center">
                    "I received payment immediately upon item collection, which was remarkably convenient." — James W.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Items We Accept */}
      <section className="apple-section bg-black text-white">
        <div className="container mx-auto px-4">
          <h2 className="apple-heading mb-8 text-white">Items We Accept</h2>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="relative w-full aspect-square rounded-xl overflow-hidden mb-6">
                <Image
                  src="/placeholder.svg?height=400&width=400&query=modern furniture on white background, minimal style"
                  alt="Furniture"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">Furniture</h3>
              <p className="text-gray-300">Sofas, tables, chairs, and more</p>
            </div>

            <div className="text-center">
              <div className="relative w-full aspect-square rounded-xl overflow-hidden mb-6">
                <Image
                  src="/placeholder.svg?height=400&width=400&query=electronics devices on white background, minimal style"
                  alt="Electronics"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">Electronics</h3>
              <p className="text-gray-300">TVs, computers, tablets, and phones</p>
            </div>

            <div className="text-center">
              <div className="relative w-full aspect-square rounded-xl overflow-hidden mb-6">
                <Image
                  src="/placeholder.svg?height=400&width=400&query=home appliances on white background, minimal style"
                  alt="Appliances"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">Appliances</h3>
              <p className="text-gray-300">Refrigerators, washers, and more</p>
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
