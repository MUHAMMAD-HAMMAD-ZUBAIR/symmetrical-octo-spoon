"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log(formData)
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <Input
          placeholder="Your name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <Input
          type="email"
          placeholder="Email address"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <Input
          placeholder="Subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
        />
      </div>
      <div>
        <Textarea
          placeholder="Message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          className="min-h-[150px]"
        />
      </div>
      <Button type="submit" className="w-full bg-[#006d77] hover:bg-[#005c66]">
        Submit
      </Button>
    </form>
  )
}

