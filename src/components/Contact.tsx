import { useRef, useState } from "react"
import { Phone, Mail, MapPin } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import emailjs from 'emailjs-com'

const Contact = () => {
    const contactRef = useRef<HTMLElement>(null)
    const [formData, setFormData] = useState({ name: '', email: '', message: '' })
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null)

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target
        setFormData(prev => ({ ...prev, [name]: value }))
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setIsSubmitting(true)
        setSubmitStatus(null)

        try {
            await emailjs.send(
                'YOUR_SERVICE_ID',
                'YOUR_TEMPLATE_ID',
                formData,
                'YOUR_USER_ID'
            )
            setSubmitStatus('success')
            setFormData({ name: '', email: '', message: '' })
        } catch (error) {
            console.error('Error sending email:', error)
            setSubmitStatus('error')
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <section ref={contactRef} id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-green-100 to-yellow-50">
            <div className="container px-4 md:px-6">
                <div className="grid gap-6 lg:grid-cols-2">
                    <div className="space-y-4">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-green-700">Get in Touch</h2>
                        <p className="text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                            Have questions about our innovative farming solutions? We'd love to hear from you!
                        </p>
                        <div className="space-y-2">
                            <div className="flex items-center space-x-2">
                                <Phone className="w-5 h-5 text-green-600" />
                                <a href="tel:+919507207645" className="text-gray-600 hover:text-green-700 hover:underline">+91 9507207645</a>
                            </div>
                            <div className="flex items-center space-x-2">
                                <Mail className="w-5 h-5 text-green-600" />
                                <a href="mailto:info@krishicube.com" className="text-gray-600 hover:text-green-700 hover:underline">info@krishicube.com</a>
                            </div>
                            <div className="flex items-center space-x-2">
                                <MapPin className="w-5 h-5 text-green-600" />
                                <a href="https://maps.app.goo.gl/9X9X9X9X9X9X9X9X" className="text-gray-600 hover:text-green-700 hover:underline">123 Farm Lane, Agriville, AG 12345</a>
                            </div>
                        </div>
                    </div>
                    <Card>
                        <CardContent className="p-6">
                            <form className="space-y-4" onSubmit={handleSubmit}>
                                <div className="space-y-2">
                                    <label htmlFor="name" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Name</label>
                                    <Input id="name" name="name" value={formData.name} onChange={handleInputChange} placeholder="Enter your name" required />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Email</label>
                                    <Input id="email" name="email" value={formData.email} onChange={handleInputChange} placeholder="Enter your email" type="email" required />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="message" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Message</label>
                                    <Textarea id="message" name="message" value={formData.message} onChange={handleInputChange} placeholder="Enter your message" required />
                                </div>
                                <Button type="submit" className="w-full bg-green-600 text-white hover:bg-green-700" disabled={isSubmitting}>
                                    {isSubmitting ? 'Sending...' : 'Send Message'}
                                </Button>
                                {submitStatus === 'success' && <p className="text-green-600">Message sent successfully!</p>}
                                {submitStatus === 'error' && <p className="text-red-600">Error sending message. Please try again.</p>}
                            </form>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    )
}

export default Contact
