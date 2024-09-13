import { Card, CardContent } from "@/components/ui/card"
import { Tractor, ThumbsUp, DollarSign } from "lucide-react"

const Vision = () => {
  return (
    <section id="vision" className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-green-50 to-brown-50">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12 text-green-700">Our Vision</h2>
            <div className="grid gap-6 lg:grid-cols-3 lg:gap-12">
              <Card className="bg-green-600">
                <CardContent className="flex flex-col items-center space-y-4 p-6">
                  <Tractor className="h-12 w-12 text-yellow-400" />
                  <h3 className="text-2xl font-bold text-center text-white">Compact & Powerful</h3>
                  <p className="text-green-100 text-center">
                    We're designing our tractors to be compact yet powerful, perfect for small to medium-sized farms.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-yellow-400">
                <CardContent className="flex flex-col items-center space-y-4 p-6">
                  <DollarSign className="h-12 w-12 text-green-600" />
                  <h3 className="text-2xl font-bold text-center text-green-800">Affordable</h3>
                  <p className="text-gray-700 text-center">
                    Our goal is to offer high-quality tractors at a fraction of the cost of traditional farming equipment.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-green-700">
                <CardContent className="flex flex-col items-center space-y-4 p-6">
                  <ThumbsUp className="h-12 w-12 text-yellow-400" />
                  <h3 className="text-2xl font-bold text-center text-white">Easy to Use</h3>
                  <p className="text-green-100 text-center">
                    We're focusing on user-friendly design to ensure that farmers of all skill levels can operate our tractors with ease.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
  )
}

export default Vision
