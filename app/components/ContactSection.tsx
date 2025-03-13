"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/components/ui/use-toast"

export default function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setIsSubmitting(true)

    const formData = new FormData(event.currentTarget)
    const body = Object.fromEntries(formData)

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      })

      if (response.ok) {
        const data = await response.json()
        toast({
          title: "Success!",
          description: data.message,
        })
        event.currentTarget.reset()
      } else {
        throw new Error("Failed to submit the form")
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "There was a problem submitting your message. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 gradient-bg text-white">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Get In Touch</h2>
          <div className="mt-4 mx-auto max-w-[700px]">
            <p className="text-zinc-100">
              Have a project in mind? Contact us today to discuss how we can help bring your ideas to life.
            </p>
          </div>
        </div>
        <div className="mx-auto max-w-lg space-y-6">
          <form className="space-y-4 bg-white p-6 rounded-lg shadow-lg" onSubmit={handleSubmit}>
            <Input name="name" placeholder="Your Name" required className="border-gray-300" />
            <Input name="email" type="email" placeholder="Your Email" required className="border-gray-300" />
            <Input name="subject" placeholder="Subject" required className="border-gray-300" />
            <Textarea name="message" placeholder="Your Message" required className="border-gray-300 min-h-[120px]" />
            <Button type="submit" className="w-full" disabled={isSubmitting}>
              {isSubmitting ? "Sending..." : "Send Message"}
            </Button>
          </form>
        </div>
      </div>
    </section>
  )
}

