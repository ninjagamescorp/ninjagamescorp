import Image from "next/image"

const teamMembers = [
  { id: 1, name: "Alex Ninja", role: "Lead Developer", image: "/placeholder.svg?height=150&width=150" },
  { id: 2, name: "Sam Shinobi", role: "Game Designer", image: "/placeholder.svg?height=150&width=150" },
  { id: 3, name: "Max Kunoichi", role: "3D Artist", image: "/placeholder.svg?height=150&width=150" },
]

export default function Team() {
  return (
    <section id="team" className="py-16 bg-gray-100">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8">Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <div key={member.id} className="bg-white rounded-lg overflow-hidden shadow-md text-center">
              <Image
                src={member.image || "/placeholder.svg"}
                alt={member.name}
                width={150}
                height={150}
                className="w-32 h-32 rounded-full mx-auto mt-8"
              />
              <div className="p-4">
                <h3 className="font-bold text-xl mb-2">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

