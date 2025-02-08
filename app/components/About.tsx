import Image from "next/image"

export default function About() {
  return (
    <section id="about" className="py-16 bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-blue-500">
          Meet the Mastermind
        </h2>
        <div className="flex flex-col md:flex-row items-center justify-center">
          <div className="md:w-1/3 mb-8 md:mb-0">
            <div className="relative">
              <Image
                src="https://media.discordapp.net/attachments/1337573126934106164/1337658028932993054/dc4294f3-2edb-4972-bff5-66eefe16a7fe.jpg?ex=67a83e9e&is=67a6ed1e&hm=aedc5c8527b84af028fc4fb7e5cf94b4d11cfb90176a63275e0c95938cd1c94e&=&format=webp&width=614&height=614"
                alt="LokisDreams (JiyoDev)"
                width={300}
                height={300}
                className="rounded-full border-4 border-blue-500"
              />
              <div className="absolute -bottom-4 -right-4 bg-red-500 text-white text-xl font-bold rounded-full w-16 h-16 flex items-center justify-center transform rotate-12">
                CEO
              </div>
            </div>
          </div>
          <div className="md:w-2/3 md:pl-12">
            <h3 className="text-3xl font-bold mb-4 text-blue-400">LokisDreams (JiyoDev)</h3>
            <p className="text-gray-300 mb-4 text-lg">
              As the visionary CEO of Ninjagames Corp, LokisDreams brings a wealth of experience and passion to the
              world of Roblox game development. With a keen eye for innovative gameplay and immersive experiences,
              LokisDreams leads our team in creating cutting-edge Roblox games that captivate players worldwide.
            </p>
            <p className="text-gray-300 text-lg">
              LokisDreams' unique approach combines creative storytelling with advanced game mechanics, pushing the
              boundaries of what's possible on the Roblox platform. Under their leadership, Ninjagames Corp has become
              synonymous with quality, creativity, and player-centric game design.
            </p>
            <div className="mt-6">
              <a href="#contact" className="roblox-button inline-block">
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

