"use client"

import Link from "next/link"
import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Checkbox } from "@/components/ui/checkbox"
import { CheckCircle2, AlertCircle, Camera, Upload, X, ImageIcon, Loader2 } from "lucide-react"
import { sendItemSubmissionEmail } from "@/app/actions/email-actions"

export default function SellItemPage() {
  const [formStep, setFormStep] = useState(1)
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [formErrors, setFormErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitResult, setSubmitResult] = useState(null)

  // Form field states
  const [itemCategory, setItemCategory] = useState("")
  const [itemName, setItemName] = useState("")
  const [itemDescription, setItemDescription] = useState("")
  const [itemPhotos, setItemPhotos] = useState([])
  const [itemCondition, setItemCondition] = useState("good")
  const [itemIssues, setItemIssues] = useState("")
  const [fullName, setFullName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [zipCode, setZipCode] = useState("")
  const [termsAccepted, setTermsAccepted] = useState(false)

  // Validation states
  const [step1Valid, setStep1Valid] = useState(false)
  const [step2Valid, setStep2Valid] = useState(false)
  const [step3Valid, setStep3Valid] = useState(false)

  // Refs
  const fileInputRef = useRef(null)
  const cameraInputRef = useRef(null)

  // Validate step 1
  useEffect(() => {
    setStep1Valid(
      itemCategory !== "" && itemName.trim() !== "" && itemDescription.trim() !== "" && itemPhotos.length >= 3,
    )
  }, [itemCategory, itemName, itemDescription, itemPhotos])

  // Validate step 2
  useEffect(() => {
    setStep2Valid(itemCondition !== "" && itemIssues.trim() !== "")
  }, [itemCondition, itemIssues])

  // Validate step 3
  useEffect(() => {
    setStep3Valid(
      fullName.trim() !== "" && email.trim() !== "" && phone.trim() !== "" && zipCode.trim() !== "" && termsAccepted,
    )
  }, [fullName, email, phone, zipCode, termsAccepted])

  const validateStep1 = () => {
    const errors = {}

    if (!itemCategory) errors.itemCategory = "Please select a category"
    if (!itemName.trim()) errors.itemName = "Please enter the item name"
    if (!itemDescription.trim()) errors.itemDescription = "Please provide a description"
    if (itemPhotos.length < 3) errors.itemPhotos = "Please upload at least 3 photos"

    setFormErrors(errors)
    return Object.keys(errors).length === 0
  }

  const validateStep2 = () => {
    const errors = {}

    if (!itemCondition) errors.itemCondition = "Please select the item condition"
    if (!itemIssues.trim()) errors.itemIssues = "Please describe any issues or defects"

    setFormErrors(errors)
    return Object.keys(errors).length === 0
  }

  const validateStep3 = () => {
    const errors = {}

    if (!fullName.trim()) errors.fullName = "Please enter your full name"
    if (!email.trim()) errors.email = "Please enter your email address"
    if (!phone.trim()) errors.phone = "Please enter your phone number"
    if (!zipCode.trim()) errors.zipCode = "Please enter your ZIP code"
    if (!termsAccepted) errors.terms = "You must accept the terms and conditions"

    setFormErrors(errors)
    return Object.keys(errors).length === 0
  }

  const handleContinueStep1 = () => {
    if (validateStep1()) {
      setFormStep(2)
      setFormErrors({})
    }
  }

  const handleContinueStep2 = () => {
    if (validateStep2()) {
      setFormStep(3)
      setFormErrors({})
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (validateStep3()) {
      setIsSubmitting(true)

      try {
        // Create FormData object
        const formData = new FormData()
        formData.append("itemCategory", itemCategory)
        formData.append("itemName", itemName)
        formData.append("itemDescription", itemDescription)
        formData.append("itemCondition", itemCondition)
        formData.append("itemIssues", itemIssues)
        formData.append("fullName", fullName)
        formData.append("email", email)
        formData.append("phone", phone)
        formData.append("zipCode", zipCode)

        // Add photos to FormData
        itemPhotos.forEach((photo, index) => {
          formData.append("photos", photo.file)
        })

        // Send the form data to the server action
        const result = await sendItemSubmissionEmail(formData)

        setSubmitResult(result)
        if (result.success) {
          setFormSubmitted(true)
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

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files)
    if (files.length > 0) {
      const newPhotos = files.map((file) => ({
        file,
        preview: URL.createObjectURL(file),
        name: file.name,
      }))
      setItemPhotos((prev) => [...prev, ...newPhotos])
    }
  }

  const handleCameraCapture = (e) => {
    const files = Array.from(e.target.files)
    if (files.length > 0) {
      const newPhotos = files.map((file) => ({
        file,
        preview: URL.createObjectURL(file),
        name: `Camera_${new Date().toISOString()}.jpg`,
      }))
      setItemPhotos((prev) => [...prev, ...newPhotos])
    }
  }

  const removePhoto = (index) => {
    const newPhotos = [...itemPhotos]
    // Revoke the object URL to avoid memory leaks
    URL.revokeObjectURL(newPhotos[index].preview)
    newPhotos.splice(index, 1)
    setItemPhotos(newPhotos)
  }

  const ErrorMessage = ({ message }) => (
    <div className="flex items-center gap-1 text-red-500 text-sm mt-1">
      <AlertCircle className="h-4 w-4" />
      <span>{message}</span>
    </div>
  )

  return (
    <div className="container mx-auto py-12 px-4">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-[#3B82F6]">Sell Your Item</h1>

        {!formSubmitted ? (
          <>
            <p className="text-lg mb-8">
              Please provide information about the item you wish to sell. This process takes just a few minutes, and
              we'll respond with an offer within 24 hours.
            </p>

            <div className="mb-8">
              <div className="flex justify-between mb-2">
                {[1, 2, 3].map((step) => (
                  <div
                    key={step}
                    className={`flex flex-col items-center ${
                      formStep >= step ? (step % 2 === 0 ? "text-[#8A4FFF]" : "text-[#3B82F6]") : "text-gray-400"
                    }`}
                  >
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center mb-2 ${
                        formStep >= step ? (step % 2 === 0 ? "bg-[#8A4FFF]" : "bg-[#3B82F6]") : "bg-gray-200"
                      }`}
                    >
                      {step}
                    </div>
                    <span className="text-sm">
                      {step === 1 ? "Item Details" : step === 2 ? "Condition" : "Contact Info"}
                    </span>
                  </div>
                ))}
              </div>
              <div className="w-full bg-gray-200 h-2 rounded-full">
                <div
                  className={`${
                    formStep === 1
                      ? "bg-[#3B82F6]"
                      : formStep === 2
                        ? "bg-gradient-to-r from-[#3B82F6] to-[#8A4FFF]"
                        : "bg-[#8A4FFF]"
                  } h-2 rounded-full transition-all duration-300`}
                  style={{ width: `${((formStep - 1) / 2) * 100}%` }}
                ></div>
              </div>
            </div>

            {submitResult && !submitResult.success && (
              <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded mb-4">
                {submitResult.message}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              {formStep === 1 && (
                <div className="space-y-6">
                  <div>
                    <Label htmlFor="item-category" className="text-lg">
                      Item Category <span className="text-red-500">*</span>
                    </Label>
                    <Select value={itemCategory} onValueChange={setItemCategory} required>
                      <SelectTrigger
                        id="item-category"
                        className={`mt-2 ${formErrors.itemCategory ? "border-red-500" : ""}`}
                      >
                        <SelectValue placeholder="Select a category" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="furniture">Furniture</SelectItem>
                        <SelectItem value="electronics">Electronics</SelectItem>
                        <SelectItem value="appliances">Appliances</SelectItem>
                        <SelectItem value="sporting">Sporting Equipment</SelectItem>
                        <SelectItem value="musical">Musical Instruments</SelectItem>
                        <SelectItem value="tools">Tools</SelectItem>
                        <SelectItem value="collectibles">Collectibles</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                    {formErrors.itemCategory && <ErrorMessage message={formErrors.itemCategory} />}
                  </div>

                  <div>
                    <Label htmlFor="item-name" className="text-lg">
                      Item Name <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="item-name"
                      value={itemName}
                      onChange={(e) => setItemName(e.target.value)}
                      placeholder="e.g., Leather Sofa, Samsung TV"
                      required
                      className={`mt-2 ${formErrors.itemName ? "border-red-500" : ""}`}
                    />
                    {formErrors.itemName && <ErrorMessage message={formErrors.itemName} />}
                  </div>

                  <div>
                    <Label htmlFor="item-description" className="text-lg">
                      Brief Description <span className="text-red-500">*</span>
                    </Label>
                    <Textarea
                      id="item-description"
                      value={itemDescription}
                      onChange={(e) => setItemDescription(e.target.value)}
                      placeholder="Please describe your item (brand, size, color, etc.)"
                      rows={4}
                      className={`mt-2 ${formErrors.itemDescription ? "border-red-500" : ""}`}
                      required
                    />
                    {formErrors.itemDescription && <ErrorMessage message={formErrors.itemDescription} />}
                  </div>

                  <div>
                    <Label className="text-lg">
                      Item Photos <span className="text-red-500">*</span>{" "}
                      <span className="text-sm font-normal">(at least 3)</span>
                    </Label>
                    <div
                      className={`mt-2 p-4 border-2 border-dashed rounded-lg ${formErrors.itemPhotos ? "border-red-500" : "border-gray-300"}`}
                    >
                      <div className="flex flex-col items-center justify-center gap-3">
                        <div className="flex flex-wrap gap-2 w-full mb-4">
                          {itemPhotos.map((photo, index) => (
                            <div
                              key={index}
                              className="relative w-24 h-24 rounded-md overflow-hidden border border-gray-200"
                            >
                              <img
                                src={photo.preview || "/placeholder.svg"}
                                alt={`Item photo ${index + 1}`}
                                className="w-full h-full object-cover"
                              />
                              <button
                                type="button"
                                onClick={() => removePhoto(index)}
                                className="absolute top-1 right-1 bg-red-500 text-white rounded-full p-1 w-5 h-5 flex items-center justify-center"
                                aria-label="Remove photo"
                              >
                                <X className="w-3 h-3" />
                              </button>
                            </div>
                          ))}
                          {itemPhotos.length === 0 && (
                            <div className="w-full text-center text-gray-500 py-4">
                              <ImageIcon className="w-12 h-12 mx-auto mb-2 text-gray-400" />
                              <p>No photos uploaded yet</p>
                            </div>
                          )}
                        </div>

                        <div className="flex flex-wrap gap-3 justify-center">
                          <Button
                            type="button"
                            variant="outline"
                            onClick={() => fileInputRef.current?.click()}
                            className="flex items-center gap-2"
                          >
                            <Upload className="w-4 h-4" />
                            <span>Upload Photos</span>
                          </Button>

                          <Button
                            type="button"
                            variant="outline"
                            onClick={() => cameraInputRef.current?.click()}
                            className="flex items-center gap-2"
                          >
                            <Camera className="w-4 h-4" />
                            <span>Take Photo</span>
                          </Button>

                          <input
                            ref={fileInputRef}
                            type="file"
                            accept="image/*"
                            multiple
                            onChange={handleFileChange}
                            className="hidden"
                          />

                          <input
                            ref={cameraInputRef}
                            type="file"
                            accept="image/*"
                            capture="environment"
                            onChange={handleCameraCapture}
                            className="hidden"
                          />
                        </div>

                        <p className={`text-sm ${itemPhotos.length >= 3 ? "text-green-600" : "text-gray-500"}`}>
                          {itemPhotos.length} of 3 required photos uploaded
                          {itemPhotos.length >= 3 && " ✓"}
                        </p>
                      </div>
                    </div>
                    {formErrors.itemPhotos && <ErrorMessage message={formErrors.itemPhotos} />}
                  </div>

                  <Button
                    type="button"
                    onClick={handleContinueStep1}
                    disabled={!step1Valid}
                    className="w-full bg-[#3B82F6] hover:bg-[#2563EB] text-white rounded-lg disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    Continue
                  </Button>
                </div>
              )}

              {formStep === 2 && (
                <div className="space-y-6">
                  <div>
                    <Label className="text-lg">
                      Item Condition <span className="text-red-500">*</span>
                    </Label>
                    <RadioGroup
                      value={itemCondition}
                      onValueChange={setItemCondition}
                      className={`mt-3 ${formErrors.itemCondition ? "border-red-500 border p-3 rounded-md" : ""}`}
                      required
                    >
                      <div className="flex items-start space-x-2 mb-3">
                        <RadioGroupItem value="like-new" id="like-new" className="mt-1" />
                        <div>
                          <Label htmlFor="like-new" className="font-medium">
                            Like New
                          </Label>
                          <p className="text-sm text-gray-500">Appears new and functions perfectly</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-2 mb-3">
                        <RadioGroupItem value="excellent" id="excellent" className="mt-1" />
                        <div>
                          <Label htmlFor="excellent" className="font-medium">
                            Excellent
                          </Label>
                          <p className="text-sm text-gray-500">Minimal signs of use, functions perfectly</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-2 mb-3">
                        <RadioGroupItem value="good" id="good" className="mt-1" />
                        <div>
                          <Label htmlFor="good" className="font-medium">
                            Good
                          </Label>
                          <p className="text-sm text-gray-500">Some signs of use, functions well</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-2 mb-3">
                        <RadioGroupItem value="fair" id="fair" className="mt-1" />
                        <div>
                          <Label htmlFor="fair" className="font-medium">
                            Fair
                          </Label>
                          <p className="text-sm text-gray-500">Visible wear, remains functional</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-2">
                        <RadioGroupItem value="poor" id="poor" className="mt-1" />
                        <div>
                          <Label htmlFor="poor" className="font-medium">
                            Poor
                          </Label>
                          <p className="text-sm text-gray-500">Significant wear, may require repair</p>
                        </div>
                      </div>
                    </RadioGroup>
                    {formErrors.itemCondition && <ErrorMessage message={formErrors.itemCondition} />}
                  </div>

                  <div>
                    <Label htmlFor="item-issues" className="text-lg">
                      Any issues or defects? <span className="text-red-500">*</span>
                    </Label>
                    <Textarea
                      id="item-issues"
                      value={itemIssues}
                      onChange={(e) => setItemIssues(e.target.value)}
                      placeholder="Please describe any scratches, dents, missing parts, or functional issues"
                      rows={3}
                      className={`mt-2 ${formErrors.itemIssues ? "border-red-500" : ""}`}
                      required
                    />
                    {formErrors.itemIssues && <ErrorMessage message={formErrors.itemIssues} />}
                  </div>

                  <div className="flex justify-between">
                    <Button type="button" onClick={() => setFormStep(1)} variant="outline">
                      Back
                    </Button>
                    <Button
                      type="button"
                      onClick={handleContinueStep2}
                      disabled={!step2Valid}
                      className="bg-[#8A4FFF] hover:bg-[#7B46E3] text-white rounded-lg disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      Continue
                    </Button>
                  </div>
                </div>
              )}

              {formStep === 3 && (
                <div className="space-y-6">
                  <div>
                    <Label htmlFor="full-name" className="text-lg">
                      Full Name <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="full-name"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      required
                      className={`mt-2 ${formErrors.fullName ? "border-red-500" : ""}`}
                    />
                    {formErrors.fullName && <ErrorMessage message={formErrors.fullName} />}
                  </div>

                  <div>
                    <Label htmlFor="email" className="text-lg">
                      Email Address <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className={`mt-2 ${formErrors.email ? "border-red-500" : ""}`}
                    />
                    {formErrors.email && <ErrorMessage message={formErrors.email} />}
                  </div>

                  <div>
                    <Label htmlFor="phone" className="text-lg">
                      Phone Number <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      required
                      className={`mt-2 ${formErrors.phone ? "border-red-500" : ""}`}
                    />
                    {formErrors.phone && <ErrorMessage message={formErrors.phone} />}
                  </div>

                  <div>
                    <Label htmlFor="zip" className="text-lg">
                      ZIP Code <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="zip"
                      value={zipCode}
                      onChange={(e) => setZipCode(e.target.value)}
                      required
                      className={`mt-2 ${formErrors.zipCode ? "border-red-500" : ""}`}
                    />
                    {formErrors.zipCode && <ErrorMessage message={formErrors.zipCode} />}
                  </div>

                  <div className="flex items-start space-x-2">
                    <Checkbox
                      id="terms"
                      checked={termsAccepted}
                      onCheckedChange={setTermsAccepted}
                      required
                      className={`mt-1 ${formErrors.terms ? "border-red-500" : ""}`}
                    />
                    <div>
                      <Label htmlFor="terms" className="font-medium">
                        I agree to the terms and conditions <span className="text-red-500">*</span>
                      </Label>
                      <p className="text-sm text-gray-500">
                        By submitting this form, you agree to our{" "}
                        <a href="#" className="text-[#3B82F6] underline">
                          Terms of Service
                        </a>{" "}
                        and{" "}
                        <a href="#" className="text-[#8A4FFF] underline">
                          Privacy Policy
                        </a>
                        .
                      </p>
                      {formErrors.terms && <ErrorMessage message={formErrors.terms} />}
                    </div>
                  </div>

                  <div className="flex justify-between">
                    <Button type="button" onClick={() => setFormStep(2)} variant="outline">
                      Back
                    </Button>
                    <Button
                      type="submit"
                      disabled={!step3Valid || isSubmitting}
                      className="bg-gradient-to-r from-[#3B82F6] to-[#8A4FFF] hover:from-[#2563EB] hover:to-[#7B46E3] text-white rounded-lg disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Submitting...
                        </>
                      ) : (
                        "Submit"
                      )}
                    </Button>
                  </div>
                </div>
              )}
            </form>
          </>
        ) : (
          <div className="text-center py-12">
            <div className="w-20 h-20 bg-gradient-to-r from-[#EBF5FF] to-[#F3EEFF] rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 className="w-12 h-12 text-[#3B82F6]" />
            </div>
            <h2 className="text-3xl font-bold mb-4 text-[#3B82F6]">Thank You</h2>
            <p className="text-xl mb-8">
              We've received your submission and will review your item details. Your information has been sent to
              alecgold808@gmail.com. You can expect to hear from us within 24 hours with a price offer.
            </p>
            <div className="bg-[#EBF5FF] p-6 rounded-lg inline-block text-left">
              <h3 className="font-semibold text-lg mb-2 text-[#3B82F6]">Next Steps</h3>
              <ol className="list-decimal pl-5 space-y-2">
                <li>Our team will evaluate your item details</li>
                <li>We'll email you a price offer within 24 hours</li>
                <li>If you accept, we'll schedule a convenient pickup time</li>
                <li>We'll arrive at the scheduled time and provide payment on the spot</li>
              </ol>
            </div>
            <div className="mt-8">
              <Button
                asChild
                className="bg-gradient-to-r from-[#3B82F6] to-[#8A4FFF] hover:from-[#2563EB] hover:to-[#7B46E3] text-white rounded-lg"
              >
                <Link href="/">Return to Home</Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
