import Image from "next/image"

export default function Contact() {
  const discordId = "1328072791487942788" // Your Discord user ID
  const discordUsername = "LokisDreamsYT" // Your Discord username
  const avatarUrl = `https://media.discordapp.net/attachments/1337573126934106164/1337658028932993054/dc4294f3-2edb-4972-bff5-66eefe16a7fe.jpg?ex=67a83e9e&is=67a6ed1e&hm=aedc5c8527b84af028fc4fb7e5cf94b4d11cfb90176a63275e0c95938cd1c94e&=&format=webp&width=614&height=614`

  return (
    <section id="contact" className="py-16 bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-blue-500">
          Connect with Me
        </h2>
        <div className="max-w-md mx-auto bg-gray-800 rounded-lg shadow-lg p-8">
          <div className="flex items-center justify-center mb-6">
            <Image
              src={avatarUrl || "/placeholder.svg"}
              alt="Discord Avatar"
              width={128}
              height={128}
              className="rounded-full border-4 border-blue-500"
              onError={(e) => {
                e.currentTarget.src = "/placeholder.svg?height=128&width=128"
              }}
            />
          </div>
          <h3 className="text-2xl font-bold text-center text-white mb-4">{discordUsername}</h3>
          <p className="text-center text-gray-300 mb-6">
            Feel free to reach out to me on Discord for any inquiries or collaboration opportunities!
          </p>
          <div className="flex justify-center">
            <a
              href={`https://discord.com/users/${discordId}`}
              target="_blank"
              rel="noopener noreferrer"
              className="roblox-button inline-block"
            >
              Message on Discord
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

