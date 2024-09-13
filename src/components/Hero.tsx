import { Button } from "@/components/ui/button"

const Hero = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-br from-green-600 via-green-500 to-yellow-400">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-white">
                  The Future of Small-Scale Farming
                </h1>
                <p className="mx-auto max-w-[700px] text-green-100 md:text-xl">
                  We're developing affordable handheld and walk-behind tractors to revolutionize small-scale agriculture. Join us on this exciting journey.
                </p>
              </div>
              <div className="space-x-4">
                <Button className="bg-yellow-400 text-green-800 hover:bg-yellow-300 text-xl"
                onClick={() => {
                  const contactSection = document.getElementById('contact');
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                >Learn More</Button>
                <Button 
                  variant="outline" 
                  className="text-white border-yellow-400 bg-transparent hover:border-white hover:bg-white hover:text-green-700 text-xl font-medium"
                  onClick={() => {
                    const newsletterSection = document.getElementById('newsletter-section');
                    if (newsletterSection) {
                      newsletterSection.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                >
                  Stay Updated
                </Button>
              </div>
            </div>
          </div>
        </section>
  )
}

export default Hero
