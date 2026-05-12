"use client"

import React from 'react'
import Head from 'next/head'

interface SpaceSection {
  id: number
  title: string
  description?: string
  subtitle: string
  videoUrl: string
  buttonText: string
}

const SpaceXHome: React.FC = () => {
  const sections: SpaceSection[] = [
    {
      id: 1,
      subtitle: "UPCOMING LAUNCH",
      title: "Test Like You Fly",
      description: "The next generation of Starship is here",
      videoUrl: "/space.mp4",
      buttonText: "WATCH NOW"
    },
    {
      id: 2,
      subtitle: "",
      title: "Making life multiplanetary",
      description: "SpaceX was founded under the belief that a future where humanity is out exploring the stars is fundamentally more exciting than one where we are not.",
      videoUrl: "/space2.mp4",
      buttonText: "EXLORE"
    },
    {
      id: 3,
      subtitle: "",
      title: "Revolutionizing space technology to enable the colonization of Mars",
      description: "SpaceX’s Starship spacecraft and Super Heavy rocket is a fully reusable transportation system designed to carry both crew and cargo to Earth orbit, the Moon, Mars, and beyond.",
      videoUrl: "/space3.mp4",
      buttonText: "LEARN MORE"
    },
    {
      id: 4,
      subtitle: "",
      title: "World’s leading launch service provider",
      description: "SpaceX leads the world in launches with its reliable, reusable rockets and is developing the fully and rapidly reusable rockets necessary to transform humanity’s ability to access space into something as routine as air travel.",
      videoUrl: "/space4.mp4",
      buttonText: "RESERVE YOUR RIDE"
    },
    {
      id: 5,
      subtitle: "",
      title: "Advancing human spaceflight",
      description: "Since returning human spaceflight capabilities to the United States in 2020, SpaceX is helping build a new era where not just hundreds of people, but thousands and ultimately millions will be able to explore space.",
      videoUrl: "/space5.mp4",
      buttonText: "JOIN A MISSION"
    },
    {
      id: 6,
      subtitle: "",
      title: "Delivering high-speed internet from space",
      description: "Starlink is the world’s most advanced satellite constellation in low-Earth orbit, delivering reliable broadband internet capable of supporting streaming, online gaming, video calls, and more.",
      videoUrl: "/space6.mp4",
      buttonText: "ORDER NOW"
    },
  ]

  return (
    <main className="bg-black text-white font-sans selection:bg-white selection:text-black">
      <Head>
        <title>SpaceX</title>
      </Head>


      <header className="absolute top-0 left-0 w-full z-50">
        <div className="flex items-center justify-between px-12 py-8">

          <div className="flex items-center gap-12">

            <div className="w-[210px] cursor-pointer">
              <img
                src="https://i.ytimg.com/vi/fpmZN_z_fZ8/hqdefault.jpg"
                alt="SpaceX"
                className="w-full object-contain mix-blend-screen brightness-200"
              />
            </div>


            <nav className="hidden xl:flex gap-7 text-[13px] font-bold tracking-widest items-center">
              {["VEHICLES", "HUMAN SPACEFLIGHT", "STARLINK", "STARSHIELD", "xAI", "TERAFAB", "COMPANY", "SHOP"].map((item) => (
                <a key={item} href="#" className="relative group hover:text-gray-300 transition-colors">
                  {item}
                  <span className="absolute bottom-[-4px] left-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
            </nav>
          </div>


          <div className="flex items-center gap-6">
            <div className="border border-white/40 px-5 py-2 flex items-center gap-6 group cursor-pointer hover:bg-white hover:text-black transition-all duration-300">
              <span className="text-[12px] font-bold tracking-[2px]">UPCOMING LAUNCHES</span>
              <span className="text-[12px] font-mono opacity-80 group-hover:opacity-100">T-04:36:45</span>
            </div>

            <div className="flex flex-col gap-1 cursor-pointer">
              <div className="w-5 h-[1px] bg-white"></div>
              <div className="w-5 h-[1px] bg-white"></div>
              <div className="w-5 h-[1px] bg-white"></div>
            </div>
          </div>
        </div>
      </header>


      {sections.map((section) => (
        <section key={section.id} className="relative h-screen w-full flex items-center px-12 overflow-hidden border-b border-white/5">

          <video
            className="absolute top-0 left-0 w-full h-full object-cover z-0"
            src={section.videoUrl}
            autoPlay
            muted
            loop
            playsInline
          />


          <div className="absolute inset-0 bg-black/40 z-10" />


          <div className="relative z-20 max-w-2xl mt-20 animate-content-up">
            <p className="uppercase tracking-[3px] text-[15px] font-medium mb-2 opacity-90">
              {section.subtitle}
            </p>

            <h2 className="text-[48px] md:text-[56px] font-bold leading-[1.1] mb-4 tracking-tight drop-shadow-md">
              {section.title}
            </h2>

            {section.description && (
              <p className="text-[18px] font-light mb-8 opacity-90 drop-shadow-md">
                {section.description}
              </p>
            )}

            <div className="flex items-center gap-4">

              <button className="relative group border-2 border-white px-10 py-3.5 text-[13px] font-bold tracking-[2px] overflow-hidden transition-all duration-500 hover:text-black flex items-center gap-3">
                <span className="absolute inset-0 w-0 bg-white transition-all duration-300 group-hover:w-full -z-10"></span>
                {section.buttonText}
                {section.buttonText.includes("WATCH") && (
                  <span className="text-[10px] transform group-hover:translate-x-1 transition-transform">▶</span>
                )}
              </button>


              <button className="w-[45px] h-[45px] rounded-full border border-white/30 flex items-center justify-center hover:bg-white hover:text-black transition-all">
                <span className="text-xs">X</span>
              </button>
            </div>
          </div>
        </section>
      ))}


      <footer className="py-10 bg-black text-center text-[11px] text-gray-500 tracking-widest uppercase">
        <div className="flex justify-center gap-6">
          <span>SpaceX © 2026</span>
          <a href="#" className="hover:text-white transition">Privacy Policy</a>
          <a href="#" className="hover:text-white transition">Suppliers</a>
        </div>
      </footer>

      <style jsx>{`
        @keyframes contentUp {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-content-up {
          animation: contentUp 1.2s cubic-bezier(0.19, 1, 0.22, 1) forwards;
        }
      `}</style>
    </main>
  )
}

export default SpaceXHome