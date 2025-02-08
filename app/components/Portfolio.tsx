"use client"

import Image from "next/image"
import { useState } from "react"

const projects = [
  {
    id: 1,
    title: "Low Poly Builds",
    image: "https://media.discordapp.net/attachments/1337573126934106164/1337658544950083674/Screenshot_2025-02-08_025212.png?ex=67a83f19&is=67a6ed99&hm=ef3b2ed968acabc61d4de10a8824c5816c384d7a1959a65bbb19421366d67161&=&format=webp&quality=lossless&width=492&height=296",
    description: "Custom Made Models and Builds",
  },
  {
    id: 2,
    title: "Fully Build Maps",
    image: "https://media.discordapp.net/attachments/1337573126934106164/1337659820236345374/Screenshot_2025-02-07_234145.png?ex=67a84049&is=67a6eec9&hm=0a1c5cc191663845e28f9d017177040160d829245573b4731ce346e1a792e528&=&format=webp&quality=lossless&width=1145&height=614",
    description: "Building Maps like you need them",
  },
  {
    id: 3,
    title: "Fully Made Systems",
    image: "https://media.discordapp.net/attachments/1337573126934106164/1337660269161349171/Screenshot_2025-02-07_234135.png?ex=67a840b4&is=67a6ef34&hm=9081177b2bafb58d9c189031ffaff223bd980f3508d2bbff8ba2f0ab5b7991e9&=&format=webp&quality=lossless&width=1128&height=605",
    description: "A Pet Hatching System with Shops Custom Modeled",
  },
]

export default function Portfolio() {
  const [activeProject, setActiveProject] = useState(null)

  return (
    <section id="portfolio" className="py-16 bg-gray-800">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-blue-500">
          My Past Work
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="roblox-card cursor-pointer"
              onMouseEnter={() => setActiveProject(project.id)}
              onMouseLeave={() => setActiveProject(null)}
            >
              <div className="relative">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  width={300}
                  height={200}
                  className="w-full object-cover h-48"
                />
                {activeProject === project.id && (
                  <div className="absolute inset-0 bg-black bg-opacity-75 flex items-center justify-center">
                    <p className="text-white text-center px-4">{project.description}</p>
                  </div>
                )}
              </div>
              <div className="p-4">
                <h3 className="font-bold text-xl mb-2 text-blue-400">{project.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

