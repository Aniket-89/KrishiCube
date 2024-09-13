import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Mail } from "lucide-react"
import { db } from "@/lib/firebase"
import { collection, addDoc } from "firebase/firestore"

const Newsletter = () => {
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [message, setMessage] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setMessage("")

    try {
      await addDoc(collection(db, "newsletter"), { email, timestamp: new Date() })
      setMessage("Thank you for subscribing!")
      setEmail("")
    } catch (error) {
      console.error("Error adding document: ", error)
      setMessage("An error occurred. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="newsletter-section" className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-green-500 to-yellow-400">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">Stay Informed</h2>
            <p className="mx-auto max-w-[600px] text-green-50 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Join our newsletter to receive updates on our progress and be the first to know when our product launches.
            </p>
          </div>
          <div className="w-full max-w-sm space-y-2">
            <form onSubmit={handleSubmit} className="flex space-x-2">
              <Input
                className="max-w-lg flex-1 bg-white/90 placeholder:text-gray-500"
                placeholder="Enter your email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <Button type="submit" className="bg-yellow-400 text-green-800 hover:bg-yellow-300" disabled={isSubmitting}>
                <Mail className="mr-2 h-4 w-4" />
                {isSubmitting ? "Subscribing..." : "Subscribe"}
              </Button>
            </form>
            {message && <p className="text-white">{message}</p>}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Newsletter