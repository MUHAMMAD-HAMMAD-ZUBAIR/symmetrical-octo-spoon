import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function Newsletter() {
  return (
    <section className="py-16 text-center">
      <h2 className="text-2xl font-bold mb-4">Or Subscribe To The Newsletter</h2>
      <div className="max-w-md mx-auto flex gap-2">
        <Input type="email" placeholder="Email Address..." className="flex-1" />
        <Button type="submit">SUBMIT</Button>
      </div>
    </section>
  )
}

