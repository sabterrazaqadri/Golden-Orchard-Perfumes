"use client"

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import Container from '@/app/components/ui/Container'
import { MailIcon } from 'lucide-react'


type FormData = {
  name: string
  email: string
  message: string
}

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>()

  const whatsappNumber = "+923129200797" // Replace with your WhatsApp number
  const emailAddress = "contact@goldenorchard.com" // Replace with your email

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true)
    try {
      // Here you can add your form submission logic
      // For now, we'll just simulate a successful submission
      await new Promise(resolve => setTimeout(resolve, 1000))
      toast.success("Message sent successfully!")
      reset()
    } catch (error) {
      toast.error("Failed to send message. Please try again.")
    }
    setIsSubmitting(false)
  }

  const handleWhatsAppClick = () => {
    const url = `https://wa.me/${whatsappNumber}?text=Hi,%20I%20want%20to%20know%20more%20about%20your%20products`
    window.open(url, '_blank')
  }

  const handleEmailClick = () => {
    window.location.href = `mailto:${emailAddress}?subject=Inquiry%20about%20your%20products`
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#111827] to-[#0f172a] text-cream pt-24 pb-12">
      <Container>
        <div className="max-w-3xl mx-auto">
          <h1 className="heading-1 mb-6">Contact Us</h1>
          <p className="text-lg text-cream/80 mb-12">
            Have a question or want to know more about our products? Reach out to us through any of these channels.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* WhatsApp Button */}
            <button
              onClick={handleWhatsAppClick}
              className="flex items-center justify-center gap-3 p-4 rounded-lg bg-green-600 hover:bg-green-700 transition-colors"
            >
              
              <span>Chat on WhatsApp</span>
            </button>

            {/* Email Button */}
            <button
              onClick={handleEmailClick}
              className="flex items-center justify-center gap-3 p-4 rounded-lg bg-gold hover:bg-gold/90 transition-colors"
            >
              <MailIcon className="w-6 h-6" />
              <span>Send an Email</span>
            </button>
          </div>

          <div className="bg-white/5 rounded-xl p-6 backdrop-blur-sm">
            <h2 className="text-2xl font-semibold mb-6">Send us a Message</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  {...register("name", { required: "Name is required" })}
                  className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 focus:border-gold outline-none transition-colors"
                  placeholder="Your name"
                />
                {errors.name && (
                  <p className="mt-1 text-red-400 text-sm">{errors.name.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Invalid email address"
                    }
                  })}
                  className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 focus:border-gold outline-none transition-colors"
                  placeholder="your@email.com"
                />
                {errors.email && (
                  <p className="mt-1 text-red-400 text-sm">{errors.email.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  {...register("message", { required: "Message is required" })}
                  rows={4}
                  className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 focus:border-gold outline-none transition-colors"
                  placeholder="Your message..."
                />
                {errors.message && (
                  <p className="mt-1 text-red-400 text-sm">{errors.message.message}</p>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 px-4 bg-gold hover:bg-gold/90 transition-colors rounded-lg font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </Container>
    </main>
  )
}
