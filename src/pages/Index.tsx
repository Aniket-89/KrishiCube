import Newsletter from "@/components/Newsletter"
import Hero from "@/components/Hero"
import Header from "@/components/Header"
import Vision from "@/components/Vision"
import Team from "@/components/Team"
import Problems from "@/components/Problems"
import Footer from "@/components/Footer"
import Contact from "@/components/Contact"

export default function Index() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-green-50 to-yellow-50">
      <Header />
      <main className="flex-1">
        <Hero />
        <Problems />
        <Vision />
        <Team />
        <Newsletter />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}