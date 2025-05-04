"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import { Mail, Phone, MapPin, Clock, AlertCircle, CheckCircle, Loader2 } from "lucide-react"
import { sendContactFormEmail } from "@/app/actions/email-actions"

export default function ContactPage() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [inquiryType, setInquiryType] = useState("")
  const [message, setMessage] = useState("")
  const [formErrors, setFormErrors] = useState({})
  const [isFormValid, setIsFormValid] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitResult, setSubmitResult] = useState(null)

  useEffect(() => {
    setIsFormValid(name.trim() !== "" && email.trim() !== "" && inquiryType !== "" && message.trim() !== "")
  }, [name, email, inquiryType, message])

  const validateForm = () => {
    const errors = {}

    if (!name.trim()) errors.name = "Please enter your name"
    if (!email.trim()) errors.email = "Please enter your email address"
    if (!inquiryType) errors.inquiryType = "Please select an inquiry type"
    if (!message.trim()) errors.message = "Please enter your message"

    setFormErrors(errors)
    return Object.keys(errors).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (validateForm()) {
      setIsSubmitting(true)

      try {
        // Create FormData object
        const formData = new FormData()
        formData.append("name", name)
        formData.append("email", email)
        formData.append("inquiryType", inquiryType)
        formData.append("message", message)

        // Send the form data to the server action
        const result = await sendContactFormEmail(formData)

        setSubmitResult(result)
        if (result.success) {
          setIsSubmitted(true)
          // Reset form
          setName("")
          setEmail("")
          setInquiryType("")
          setMessage("")
        }
      } catch (error) {
        console.error("Error submitting form:", error)
        setSubmitResult({
          success: false,
          message: "An unexpected error occurred. Please try again later.",
        })
      } finally {
        setIsSubmitting(false)
      }
    }
  }

  const ErrorMessage = ({ message }) => (
    <div className="flex items-center gap-1 text-red-500 text-sm mt-1">
      <AlertCircle className="h-4 w-4" />
      <span>{message}</span>
    </div>
  )

  return (
    <div className="container mx-auto py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-[#3B82F6]">Contact Us</h1>
        <p className="text-lg mb-12">
          Have questions about our services? Our team is available to assist you with any inquiries regarding the
          selling process.
        </p>

        <div className="grid md:grid-cols-2 gap-12 mb-12">
          <div>
            <h2 className="text-2xl font-semibold mb-6 text-[#8A4FFF]">Contact Information</h2>
            <div className="space-y-6">
              <div className="flex items-start">
                <Phone className="w-5 h-5 mr-3 text-[#3B82F6] mt-1" />
                <div>
                  <h3 className="font-medium">Phone</h3>
                  <p>(555) 123-4567</p>
                  <p className="text-sm text-gray-500 mt-1">Monday-Friday, 9am-5pm EST</p>
                </div>
              </div>

              <div className="flex items-start">
                <Mail className="w-5 h-5 mr-3 text-[#8A4FFF] mt-1" />
                <div>
                  <h3 className="font-medium">Email</h3>
                  <p>alecgold808@gmail.com</p>
                  <p className="text-sm text-gray-500 mt-1">Response within 24 hours</p>
                </div>
              </div>

              <div className="flex items-start">
                <MapPin className="w-5 h-5 mr-3 text-[#3B82F6] mt-1" />
                <div>
                  <h3 className="font-medium">Office</h3>
                  <p>123 Main Street</p>
                  <p>Suite 456</p>
                  <p>Anytown, USA 12345</p>
                </div>
              </div>

              <div className="flex items-start">
                <Clock className="w-5 h-5 mr-3 text-[#8A4FFF] mt-1" />
                <div>
                  <h3 className="font-medium">Hours</h3>
                  <p>Monday-Friday: 9am-5pm EST</p>
                  <p>Saturday: 10am-2pm EST</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            {!isSubmitted ? (
              <>
                <h2 className="text-2xl font-semibold mb-6 text-[#3B82F6]">Send a Message</h2>
                {submitResult && !submitResult.success && (
                  <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded mb-4">
                    {submitResult.message}
                  </div>
                )}
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Label htmlFor="name">
                      Name <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="name"
                      placeholder="Your name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className={formErrors.name ? "border-red-500" : ""}
                      required
                    />
                    {formErrors.name && <ErrorMessage message={formErrors.name} />}
                  </div>

                  <div>
                    <Label htmlFor="email">
                      Email <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your.email@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className={formErrors.email ? "border-red-500" : ""}
                      required
                    />
                    {formErrors.email && <ErrorMessage message={formErrors.email} />}
                  </div>

                  <div>
                    <Label htmlFor="inquiry-type">
                      Type of Inquiry <span className="text-red-500">*</span>
                    </Label>
                    <Select value={inquiryType} onValueChange={setInquiryType} required>
                      <SelectTrigger id="inquiry-type" className={formErrors.inquiryType ? "border-red-500" : ""}>
                        <SelectValue placeholder="Select an option" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="selling">Question about selling</SelectItem>
                        <SelectItem value="pickup">Question about pickup</SelectItem>
                        <SelectItem value="payment">Question about payment</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                    {formErrors.inquiryType && <ErrorMessage message={formErrors.inquiryType} />}
                  </div>

                  <div>
                    <Label htmlFor="message">
                      Message <span className="text-red-500">*</span>
                    </Label>
                    <Textarea
                      id="message"
                      placeholder="How can we help you?"
                      rows={5}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className={formErrors.message ? "border-red-500" : ""}
                      required
                    />
                    {formErrors.message && <ErrorMessage message={formErrors.message} />}
                  </div>

                  <Button
                    type="submit"
                    disabled={!isFormValid || isSubmitting}
                    className={`w-full ${
                      isFormValid && !isSubmitting
                        ? "bg-gradient-to-r from-[#3B82F6] to-[#8A4FFF] hover:from-[#2563EB] hover:to-[#7B46E3]"
                        : "bg-gray-300 cursor-not-allowed"
                    } text-white rounded-lg`}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      "Send Message"
                    )}
                  </Button>
                  {!isFormValid && (
                    <p className="text-center text-amber-600 text-sm">Please complete all required fields to submit</p>
                  )}
                </form>
              </>
            ) : (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-gradient-to-r from-[#EBF5FF] to-[#F3EEFF] rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-8 h-8 text-[#3B82F6]" />
                </div>
                <h2 className="text-2xl font-bold mb-4 text-[#3B82F6]">Message Sent</h2>
                <p className="text-lg mb-6">
                  Thank you for contacting us. Your message has been sent to alecgold808@gmail.com. We'll respond within
                  24 hours.
                </p>
                <Button
                  onClick={() => setIsSubmitted(false)}
                  className="bg-gradient-to-r from-[#3B82F6] to-[#8A4FFF] hover:from-[#2563EB] hover:to-[#7B46E3] text-white rounded-lg"
                >
                  Send Another Message
                </Button>
              </div>
            )}
          </div>
        </div>

        <div className="bg-gradient-to-r from-[#EBF5FF] to-[#F3EEFF] p-8 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4 text-center text-gray-800">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-lg text-[#3B82F6]">What types of items do you accept?</h3>
              <p className="mt-2">
                We accept a wide variety of quality used items in good condition, including furniture, electronics,
                appliances, sporting equipment, musical instruments, tools, and collectibles.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg text-[#8A4FFF]">How do you determine the price for my item?</h3>
              <p className="mt-2">
                We evaluate factors such as the item's condition, age, brand, current market value, and demand to offer
                you a competitive price.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg text-[#3B82F6]">How soon can you pick up my item?</h3>
              <p className="mt-2">
                Upon acceptance of our offer, we typically schedule pickup within 2-3 business days, depending on your
                location and availability.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg text-[#8A4FFF]">What payment methods do you offer?</h3>
              <p className="mt-2">
                We provide payment via cash, check, or digital payment methods such as Venmo or PayPal, according to
                your preference.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
