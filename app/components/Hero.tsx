import { TurtleIcon as Ninja } from "lucide-react"

export default function Hero() {
  return (
    <section className="bg-gray-800 text-white py-20">
      <div className="container mx-auto px-6 text-center">
        {/* <h1 className="text-5xl md:text-7xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-blue-500">
          Welcome to Ninjagames Corp
        </h1>
        <p className="text-xl mb-8">Innovative Roblox experiences crafted by LokisDreams</p> */}
        <div className="relative w-full max-w-3xl mx-auto">
          {/* <Image
            src="/placeholder.svg?height=300&width=600"
            alt="Ninjagames Corp Banner"
            width={600}
            height={300}
            className="rounded-lg shadow-lg mx-auto"
          /> */}
          <div className="bg-gray-700 rounded-lg shadow-lg p-8 flex items-center justify-center">
            <Ninja size={120} className="text-red-500 mr-8" />
            <div className="text-left">
              <h2 className="text-3xl font-bold mb-2">Ninjagames Corp</h2>
              <p className="text-xl">Mastering the Art of Roblox Games</p>
            </div>
          </div>
          <div className="absolute -top-4 -left-4 w-20 h-20 bg-red-500 rounded-full float-animation"></div>
          <div
            className="absolute -bottom-4 -right-4 w-20 h-20 bg-blue-500 rounded-full float-animation"
            style={{ animationDelay: "1s" }}
          ></div>
        </div>
      </div>
    </section>
  )
}

