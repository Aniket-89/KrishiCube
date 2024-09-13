
const Team = () => {
  return (
    <section id="team" className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-green-700">Meet Our Team</h2>
                <p className="mx-auto max-w-[600px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our diverse team of engineers, designers, and agricultural experts is working tirelessly to bring this revolutionary product to life.
                </p>
              </div>
              <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
                {['Suman Pal', 'Aniket Gupta'].map((name, index) => (
                  <div key={index} className="flex flex-col items-center space-y-2">
                    <div className="h-24 w-24 rounded-full bg-gradient-to-br from-green-200 to-yellow-100" />
                    <h3 className="text-xl font-bold text-green-700">{name}</h3>
                    <p className="text-sm text-gray-600">Co-Founder</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
  )
}

export default Team
