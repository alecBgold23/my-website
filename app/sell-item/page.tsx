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
  const formContainerRef = useRef(null)

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

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })

    // Alternative approach using the form container ref
    if (formContainerRef.current) {
      formContainerRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  }

  const handleContinueStep1 = () => {
    if (validateStep1()) {
      setFormStep(2)
      setFormErrors({})
      // Scroll to top after changing step
      scrollToTop()
    }
  }

  const handleContinueStep2 = () => {
    if (validateStep2()) {
      setFormStep(3)
      setFormErrors({})
      // Scroll to top after changing step
      scrollToTop()
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
          formData.append(`photo${index}`, photo.file)
        })

        console.log("Submitting form data:", Object.fromEntries(formData.entries()))

        // Send the form data to the server action
        const result = await sendItemSubmissionEmail(formData)
        console.log("Submission result:", result)

        setSubmitResult(result)
        if (result.success) {
          setFormSubmitted(true)
          // Scroll to top after submission is successful
          scrollToTop()
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

  // Update the return statement to use more vibrant colors and styling
  return (
    <div className="container mx-auto py-12 px-4" ref={formContainerRef}>
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-6">
          <span className="bg-gradient-to-r from-[#0066ff] via-[#6a5acd] to-[#8c52ff] bg-clip-text text-transparent">
            Sell Your Item
          </span>
        </h1>

        <p className="text-center text-gray-600 mb-12">
          Please provide information about the item you wish to sell. This process takes just a few minutes, and we'll
          respond with an offer within 24 hours.
        </p>

        {!formSubmitted ? (
          <>
            {submitResult && !submitResult.success && (
              <div className="bg-red-50 border-l-4 border-red-500 text-red-700 p-4 mb-6">{submitResult.message}</div>
            )}

            {/* Progress Steps */}
            <div className="flex justify-between items-center mb-12">
              <div className="flex flex-col items-center">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    formStep === 1
                      ? "bg-gradient-to-r from-[#0066ff] to-[#0066ff] text-white shadow-md"
                      : "bg-gray-200 text-gray-600"
                  }`}
                >
                  1
                </div>
                <span className="text-sm mt-2 font-medium">Item Details</span>
              </div>
              <div className="flex-1 h-1 mx-4 bg-gray-200">
                <div
                  className="h-1 bg-gradient-to-r from-[#0066ff] to-[#8c52ff]"
                  style={{ width: formStep >= 2 ? "100%" : "0%" }}
                ></div>
              </div>
              <div className="flex flex-col items-center">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    formStep === 2
                      ? "bg-gradient-to-r from-[#0066ff] to-[#8c52ff] text-white shadow-md"
                      : "bg-gray-200 text-gray-600"
                  }`}
                >
                  2
                </div>
                <span className="text-sm mt-2 font-medium">Condition</span>
              </div>
              <div className="flex-1 h-1 mx-4 bg-gray-200">
                <div
                  className="h-1 bg-gradient-to-r from-[#0066ff] to-[#8c52ff]"
                  style={{ width: formStep >= 3 ? "100%" : "0%" }}
                ></div>
              </div>
              <div className="flex flex-col items-center">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    formStep === 3
                      ? "bg-gradient-to-r from-[#8c52ff] to-[#8c52ff] text-white shadow-md"
                      : "bg-gray-200 text-gray-600"
                  }`}
                >
                  3
                </div>
                <span className="text-sm mt-2 font-medium">Contact Info</span>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-sm p-8 border border-gray-100">
              {formStep === 1 && (
                <div className="space-y-8">
                  <div>
                    <Label htmlFor="item-category" className="text-base font-medium mb-2 block">
                      Item Category <span className="text-[#ff6b6b]">*</span>
                    </Label>
                    <Select value={itemCategory} onValueChange={setItemCategory} required>
                      <SelectTrigger
                        id="item-category"
                        className={`w-full border ${formErrors.itemCategory ? "border-red-500" : "border-gray-300"} rounded-md focus:ring-[#0066ff] focus:border-[#0066ff]`}
                      >
                        <SelectValue placeholder="Select a category" />
                      </SelectTrigger>
                      <SelectContent className="bg-white border border-gray-200">
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
                    <Label htmlFor="item-name" className="text-base font-medium mb-2 block">
                      Item Name <span className="text-[#ff6b6b]">*</span>
                    </Label>
                    <Input
                      id="item-name"
                      value={itemName}
                      onChange={(e) => setItemName(e.target.value)}
                      placeholder="e.g., Leather Sofa, Samsung TV"
                      required
                      className={`w-full border ${formErrors.itemName ? "border-red-500" : "border-gray-300"} rounded-md focus:ring-[#0066ff] focus:border-[#0066ff]`}
                    />
                    {formErrors.itemName && <ErrorMessage message={formErrors.itemName} />}
                  </div>

                  <div>
                    <Label htmlFor="item-description" className="text-base font-medium mb-2 block">
                      Brief Description <span className="text-[#ff6b6b]">*</span>
                    </Label>
                    <Textarea
                      id="item-description"
                      value={itemDescription}
                      onChange={(e) => setItemDescription(e.target.value)}
                      placeholder="Please describe your item (brand, size, color, etc.)"
                      rows={4}
                      className={`w-full border ${formErrors.itemDescription ? "border-red-500" : "border-gray-300"} rounded-md focus:ring-[#0066ff] focus:border-[#0066ff]`}
                      required
                    />
                    {formErrors.itemDescription && <ErrorMessage message={formErrors.itemDescription} />}
                  </div>

                  <div>
                    <Label className="text-base font-medium mb-2 block">
                      Item Photos <span className="text-[#ff6b6b]">*</span>{" "}
                      <span className="text-sm font-normal">(at least 3)</span>
                    </Label>
                    <div
                      className={`p-6 border border-dashed rounded-md ${
                        formErrors.itemPhotos ? "border-red-500" : "border-gray-300"
                      } bg-[#f8faff]`}
                    >
                      <div className="flex flex-col items-center justify-center gap-4">
                        <div className="flex flex-wrap gap-4 w-full mb-4">
                          {itemPhotos.map((photo, index) => (
                            <div
                              key={index}
                              className="relative w-24 h-24 rounded-md overflow-hidden border border-gray-200 shadow-sm"
                            >
                              <img
                                src={photo.preview || "/placeholder.svg"}
                                alt={`Item photo ${index + 1}`}
                                className="w-full h-full object-cover"
                              />
                              <button
                                type="button"
                                onClick={() => removePhoto(index)}
                                className="absolute top-1 right-1 bg-[#ff6b6b] text-white rounded-full p-1 w-5 h-5 flex items-center justify-center shadow-sm"
                                aria-label="Remove photo"
                              >
                                <X className="w-3 h-3" />
                              </button>
                            </div>
                          ))}
                          {itemPhotos.length === 0 && (
                            <div className="w-full text-center text-gray-500 py-8">
                              <ImageIcon className="w-16 h-16 mx-auto mb-4 text-gray-300" />
                              <p>No photos uploaded yet</p>
                            </div>
                          )}
                        </div>

                        <div className="flex flex-wrap gap-4 justify-center">
                          <Button
                            type="button"
                            variant="outline"
                            onClick={() => fileInputRef.current?.click()}
                            className="flex items-center gap-2 border-[#0066ff] text-[#0066ff] hover:bg-blue-50 shadow-sm outline-button"
                          >
                            <Upload className="w-4 h-4" />
                            <span>Add file</span>
                          </Button>

                          <Button
                            type="button"
                            variant="outline"
                            onClick={() => cameraInputRef.current?.click()}
                            className="flex items-center gap-2 border-[#0066ff] text-[#0066ff] hover:bg-blue-50 shadow-sm outline-button"
                          >
                            <Camera className="w-4 h-4" />
                            <span>Take photo</span>
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

                  <div className="flex justify-end mt-8">
                    <Button
                      type="button"
                      onClick={handleContinueStep1}
                      disabled={!step1Valid}
                      className="bg-gradient-to-r from-[#0066ff] to-[#0066ff] hover:from-[#0055dd] hover:to-[#0055dd] text-white px-6 py-2 rounded-md disabled:opacity-50 disabled:cursor-not-allowed shadow-sm gradient-button"
                    >
                      Continue
                    </Button>
                  </div>
                </div>
              )}

              {formStep === 2 && (
                <div className="space-y-8">
                  <div>
                    <Label className="text-base font-medium mb-4 block">
                      Item Condition <span className="text-[#ff6b6b]">*</span>
                    </Label>
                    <RadioGroup
                      value={itemCondition}
                      onValueChange={setItemCondition}
                      className={`space-y-4 ${formErrors.itemCondition ? "border-red-500 border p-4 rounded-md" : ""}`}
                      required
                    >
                      <div className="flex items-start space-x-3">
                        <RadioGroupItem
                          value="like-new"
                          id="like-new"
                          className="mt-1 border-gray-400 text-[#0066ff] focus:ring-[#0066ff]"
                        />
                        <div>
                          <Label htmlFor="like-new" className="font-medium">
                            Like New
                          </Label>
                          <p className="text-sm text-gray-500">Appears new and functions perfectly</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <RadioGroupItem
                          value="excellent"
                          id="excellent"
                          className="mt-1 border-gray-400 text-[#0066ff] focus:ring-[#0066ff]"
                        />
                        <div>
                          <Label htmlFor="excellent" className="font-medium">
                            Excellent
                          </Label>
                          <p className="text-sm text-gray-500">Minimal signs of use, functions perfectly</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <RadioGroupItem
                          value="good"
                          id="good"
                          className="mt-1 border-gray-400 text-[#0066ff] focus:ring-[#0066ff]"
                        />
                        <div>
                          <Label htmlFor="good" className="font-medium">
                            Good
                          </Label>
                          <p className="text-sm text-gray-500">Some signs of use, functions well</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <RadioGroupItem
                          value="fair"
                          id="fair"
                          className="mt-1 border-gray-400 text-[#0066ff] focus:ring-[#0066ff]"
                        />
                        <div>
                          <Label htmlFor="fair" className="font-medium">
                            Fair
                          </Label>
                          <p className="text-sm text-gray-500">Visible wear, remains functional</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <RadioGroupItem
                          value="poor"
                          id="poor"
                          className="mt-1 border-gray-400 text-[#0066ff] focus:ring-[#0066ff]"
                        />
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
                    <Label htmlFor="item-issues" className="text-base font-medium mb-2 block">
                      Any issues or defects? <span className="text-[#ff6b6b]">*</span>
                    </Label>
                    <Textarea
                      id="item-issues"
                      value={itemIssues}
                      onChange={(e) => setItemIssues(e.target.value)}
                      placeholder="Please describe any scratches, dents, missing parts, or functional issues"
                      rows={4}
                      className={`w-full border ${formErrors.itemIssues ? "border-red-500" : "border-gray-300"} rounded-md focus:ring-[#0066ff] focus:border-[#0066ff]`}
                      required
                    />
                    {formErrors.itemIssues && <ErrorMessage message={formErrors.itemIssues} />}
                  </div>

                  <div className="flex justify-between mt-8">
                    <Button
                      type="button"
                      onClick={() => {
                        setFormStep(1)
                        scrollToTop()
                      }}
                      className="border border-[#0066ff] text-[#0066ff] hover:bg-blue-50 px-6 py-2 rounded-md shadow-sm outline-button"
                    >
                      Back
                    </Button>
                    <Button
                      type="button"
                      onClick={handleContinueStep2}
                      disabled={!step2Valid}
                      className="bg-gradient-to-r from-[#0066ff] to-[#8c52ff] hover:from-[#0055dd] hover:to-[#7b46e6] text-white px-6 py-2 rounded-md disabled:opacity-50 disabled:cursor-not-allowed shadow-sm gradient-button"
                    >
                      Continue
                    </Button>
                  </div>
                </div>
              )}

              {formStep === 3 && (
                <div className="space-y-8">
                  <div>
                    <Label htmlFor="full-name" className="text-base font-medium mb-2 block">
                      Full Name <span className="text-[#ff6b6b]">*</span>
                    </Label>
                    <Input
                      id="full-name"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="Your full name"
                      required
                      className={`w-full border ${formErrors.fullName ? "border-red-500" : "border-gray-300"} rounded-md focus:ring-[#0066ff] focus:border-[#0066ff]`}
                    />
                    {formErrors.fullName && <ErrorMessage message={formErrors.fullName} />}
                  </div>

                  <div>
                    <Label htmlFor="email" className="text-base font-medium mb-2 block">
                      Email Address <span className="text-[#ff6b6b]">*</span>
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="your.email@example.com"
                      required
                      className={`w-full border ${formErrors.email ? "border-red-500" : "border-gray-300"} rounded-md focus:ring-[#0066ff] focus:border-[#0066ff]`}
                    />
                    {formErrors.email && <ErrorMessage message={formErrors.email} />}
                  </div>

                  <div>
                    <Label htmlFor="phone" className="text-base font-medium mb-2 block">
                      Phone Number <span className="text-[#ff6b6b]">*</span>
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="(123) 456-7890"
                      required
                      className={`w-full border ${formErrors.phone ? "border-red-500" : "border-gray-300"} rounded-md focus:ring-[#0066ff] focus:border-[#0066ff]`}
                    />
                    {formErrors.phone && <ErrorMessage message={formErrors.phone} />}
                  </div>

                  <div>
                    <Label htmlFor="zip" className="text-base font-medium mb-2 block">
                      ZIP Code <span className="text-[#ff6b6b]">*</span>
                    </Label>
                    <Input
                      id="zip"
                      value={zipCode}
                      onChange={(e) => setZipCode(e.target.value)}
                      placeholder="12345"
                      required
                      className={`w-full border ${formErrors.zipCode ? "border-red-500" : "border-gray-300"} rounded-md focus:ring-[#0066ff] focus:border-[#0066ff]`}
                    />
                    {formErrors.zipCode && <ErrorMessage message={formErrors.zipCode} />}
                  </div>

                  <div className="mt-6">
                    <div className="flex items-start space-x-3">
                      <Checkbox
                        id="terms"
                        checked={termsAccepted}
                        onCheckedChange={setTermsAccepted}
                        required
                        className={`mt-1 border-gray-400 text-[#0066ff] focus:ring-[#0066ff] ${formErrors.terms ? "border-red-500" : ""}`}
                      />
                      <div>
                        <Label htmlFor="terms" className="font-medium">
                          I agree to the Privacy Policy <span className="text-[#ff6b6b]">*</span>
                        </Label>
                        <p className="text-sm text-gray-500">
                          By submitting this form, you agree to our{" "}
                          <Link href="/privacy-policy" className="text-[#0066ff] underline">
                            Privacy Policy
                          </Link>
                          .
                        </p>
                        {formErrors.terms && <ErrorMessage message={formErrors.terms} />}
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-between mt-8">
                    <Button
                      type="button"
                      onClick={() => {
                        setFormStep(2)
                        scrollToTop()
                      }}
                      className="border border-[#0066ff] text-[#0066ff] hover:bg-blue-50 px-6 py-2 rounded-md shadow-sm outline-button"
                    >
                      Back
                    </Button>
                    <Button
                      type="submit"
                      disabled={!step3Valid || isSubmitting}
                      className="bg-gradient-to-r from-[#8c52ff] to-[#8c52ff] hover:from-[#7b46e6] hover:to-[#7b46e6] text-white px-6 py-2 rounded-md disabled:opacity-50 disabled:cursor-not-allowed shadow-sm gradient-button"
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
          <div className="text-center bg-white p-8 rounded-xl shadow-sm border border-gray-100">
            <div className="w-20 h-20 bg-gradient-to-r from-[#e6f0ff] to-[#f0e6ff] rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 className="w-12 h-12 text-[#0066ff]" />
            </div>
            <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-[#0066ff] via-[#6a5acd] to-[#8c52ff] bg-clip-text text-transparent">
              Thank You
            </h2>
            <p className="text-lg mb-8 text-gray-600">
              We've received your submission and will review your item details. Your information has been sent to
              alecgold808@gmail.com. You can expect to hear from us within 24 hours with a price offer.
            </p>
            <div className="bg-[#f8faff] p-6 rounded-md inline-block text-left border border-gray-200">
              <h3 className="font-medium text-lg mb-2 text-[#0066ff]">Next Steps</h3>
              <ol className="list-decimal pl-5 space-y-2 text-gray-600">
                <li>Our team will evaluate your item details</li>
                <li>We'll email you a price offer within 24 hours</li>
                <li>If you accept, we'll schedule a convenient pickup time</li>
                <li>We'll arrive at the scheduled time and provide payment on the spot</li>
              </ol>
            </div>
            <div className="mt-8">
              <Button
                asChild
                className="bg-gradient-to-r from-[#0066ff] to-[#8c52ff] hover:from-[#0055dd] hover:to-[#7b46e6] text-white px-6 py-2 rounded-md shadow-sm gradient-button"
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
