import { MapPin, Phone, Clock } from 'lucide-react'

export function ContactInfo() {
  return (
    <div className="space-y-8">
      <div className="flex gap-4">
        <MapPin className="h-6 w-6 text-[#006d77] shrink-0" />
        <div>
          <h3 className="font-semibold mb-2">Address</h3>
          <p className="text-gray-600">
            236 5th SE Avenue, New York NY10000, United States
          </p>
        </div>
      </div>
      <div className="flex gap-4">
        <Phone className="h-6 w-6 text-[#006d77] shrink-0" />
        <div>
          <h3 className="font-semibold mb-2">Phone</h3>
          <p className="text-gray-600">Mobile: +(84) 546-6789</p>
          <p className="text-gray-600">Hotline: +(84) 456-6789</p>
        </div>
      </div>
      <div className="flex gap-4">
        <Clock className="h-6 w-6 text-[#006d77] shrink-0" />
        <div>
          <h3 className="font-semibold mb-2">Working Time</h3>
          <p className="text-gray-600">Monday-Friday: 9:00 - 22:00</p>
          <p className="text-gray-600">Saturday-Sunday: 9:00 - 21:00</p>
        </div>
      </div>
    </div>
  )
}

