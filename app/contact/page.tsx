import { ContactForm } from "../component/contact-form" 
import { ContactInfo } from "../component/contact-info" 
import { Features } from "../component/features" 

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <section className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold mb-4">Get In Touch With Us</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            For More Information About Our Product & Services. Please Feel Free To Drop Us
            An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <ContactInfo />
          <ContactForm />
        </div>
      </section>
      <Features />
    </div>
  )
}

