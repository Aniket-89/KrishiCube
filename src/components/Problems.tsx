import { Tractor, DollarSign, ThumbsUp } from "lucide-react"

const Problems = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12 text-green-700">The Problem We're Solving</h2>
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <p className="text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Small-scale farmers face numerous challenges:
                </p>
                <ul className="grid gap-2 py-4">
                  <li className="flex items-center gap-2 text-gray-600">
                    <Tractor className="h-5 w-5 text-yellow-500" /> Limited access to affordable machinery
                  </li>
                  <li className="flex items-center gap-2 text-gray-600">
                    <DollarSign className="h-5 w-5 text-yellow-500" /> High costs of traditional farming equipment
                  </li>
                  <li className="flex items-center gap-2 text-gray-600">
                    <ThumbsUp className="h-5 w-5 text-yellow-500" /> Need for easy-to-use and maintain tools
                  </li>
                </ul>
                <p className="text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our innovative tractor concept aims to address these issues, making efficient farming accessible to all.
                </p>
              </div>
              <div className="flex justify-center">
                <div className="relative w-full aspect-video rounded-xl overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-green-200 to-yellow-100" />
                  <img
                    alt="Concept Illustration"
                    className="absolute inset-0 w-full h-full object-cover mix-blend-overlay"
                    height="310"
                    src="/placeholder.svg?height=310&width=550"
                    width="550"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
  )
}

export default Problems
