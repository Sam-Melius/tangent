"use client";

import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-white text-[#111827] font-sans">
      {/* Nav */}
      <nav className="sticky top-0 z-50 bg-white border-b border-gray-300 shadow-sm">
        <div className="max-w-6xl mx-auto px-6 py-3 flex justify-end items-center">
          <div className="space-x-8 text-sm font-semibold uppercase tracking-wider">
            <a href="#companies" className="hover:text-[#d4af37] transition-colors">Our Companies</a>
            <a href="#about" className="hover:text-[#d4af37] transition-colors">About Us</a>
            <a href="#team" className="hover:text-[#d4af37] transition-colors">Team</a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section
        className="relative h-screen flex flex-col items-center justify-center text-center px-6 z-10 bg-cover bg-center"
        style={{ backgroundImage: "url('/TangentBackground.png')" }}
        data-aos="fade-up"
      >
        <div className="absolute inset-0 bg-black opacity-30 z-0" />
        <div className="relative z-10">
          <Image
            src="/fulllogo_transparent_nobuffer.png"
            alt="Tangent Group Logo"
            width={800}
            height={200}
            className="mx-auto mb-4"
          />
          <p className="text-lg tracking-wider text-[#d4af37] uppercase">
            Strategic Technology Group
          </p>
        </div>
      </section>


      {/* Companies */}
      <section id="companies" className="py-20 bg-[#f9fafb] text-[#111827]">
  <div className="max-w-5xl mx-auto px-6">
    <h2 className="text-3xl font-bold mb-12 uppercase tracking-wide text-center" data-aos="fade-up">
      Our Companies
    </h2>

    {/* Verlexa */}
    <div className="flex flex-col md:flex-row  gap-10 md:gap-10 mb-16 md:min-h-[300px]" data-aos="fade-up">
      <div className="w-full md:w-1/2">
        <a href="https://verlexa.vercel.app/" target="_blank" rel="noopener noreferrer">
          <Image src="/VerlexaThumbnail.png" alt="Verlexa" width={800} height={400} className="w-full shadow-md" />
        </a>
      </div>
      <div className="border-l border-[#d4af37] h-auto " />
      <div className="w-full md:w-1/2">
        <h3 className="text-2xl font-semibold mb-2">Verlexa</h3>
        <p className="text-gray-700">
          Verlexa is an advanced document management solution for legal professionals, offering streamlined
          evidence processing, intelligent labeling, and robust case file export tools.
        </p>
        <Link href="https://verlexa.vercel.app/" className="text-[#d4af37] underline mt-3 inline-block">Visit Site</Link>
      </div>
    </div>

    {/* Reverie */}
    <div className="flex flex-col md:flex-row-reverse gap-10 md:gap-10 mb-16 md:min-h-[300px]" data-aos="fade-up" data-aos-delay="100">
      <div className="w-full md:w-1/2">
        <a href="https://reverietech.com/" target="_blank" rel="noopener noreferrer">
          <Image src="/ReverieThumbnail.png" alt="Reverie" width={800} height={400} className="w-full shadow-md" />
        </a>
      </div>
      <div className="border-l border-[#d4af37] h-auto " />
      <div className="w-full md:w-1/2">
        <h3 className="text-2xl font-semibold mb-2">Reverie Tech Solutions</h3>
        <p className="text-gray-700">
          Reverie delivers innovative IT and analytics consulting, enabling businesses to scale through digital transformation,
          custom applications, and enterprise strategy development.
        </p>
        <Link href="https://reverietech.com/" className="text-[#d4af37] underline mt-3 inline-block">Visit Site</Link>
      </div>
    </div>

    {/* Clutch */}
    <div className="flex flex-col md:flex-row  gap-10 md:gap-10 md:min-h-[300px]" data-aos="fade-up" data-aos-delay="200">
      <div className="w-full md:w-1/2">
        <a href="https://clutchbowling.com/" target="_blank" rel="noopener noreferrer">
          <Image src="/ClutchThumbnail.png" alt="Clutch Bowling" width={800} height={400} className="w-full shadow-md" />
        </a>
      </div>
      <div className="border-l border-[#d4af37] h-auto " />
      <div className="w-full md:w-1/2">
        <h3 className="text-2xl font-semibold mb-2">Clutch Bowling</h3>
        <p className="text-gray-700">
          Clutch Bowling merges interactive projection, physics tracking, and real-time graphics to transform bowling
          lanes into immersive digital experiences.
        </p>
        <Link href="https://clutchbowling.com/" className="text-[#d4af37] underline mt-3 inline-block">Visit Site</Link>
      </div>
    </div>
  </div>
</section>







      <div className="w-full border-t border-gray-200" />

      {/* About */}
      <section id="about" className="py-20 bg-white text-[#111827]" data-aos="fade-up">
        <div className="max-w-4xl mx-auto px-6 text-left">
          <h2 className="text-3xl font-bold mb-6 uppercase tracking-wide">About Us</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Tangent is a strategic technology group focused on launching and scaling innovative companies in legal tech,
            immersive entertainment, and digital infrastructure. We combine deep industry knowledge with operational
            expertise to build and support brands that push the boundaries of their fields.
          </p>
        </div>
      </section>

      <div className="w-full border-t border-gray-200" />

      {/* Team */}
      <section id="team" className="py-20 bg-[#f9fafb] text-[#111827]">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16 uppercase tracking-wide" data-aos="fade-up">Our Team</h2>

          <div className="space-y-24">
            {[{
              name: "Aaron Day",
              title: "Managing Partner",
              image: "/AaronDay.jpeg",
              linkedin: "http://linkedin.com/in/aarday",
              bio: `Aaron is a seasoned technology executive with deep expertise in IT infrastructure, cybersecurity, and
              digital transformation. He has led initiatives across healthcare, finance, and government sectors.`
            }, {
              name: "Andrew Zwicker",
              title: "Managing Partner",
              image: "/AndrewZ.jpeg",
              linkedin: "http://linkedin.com/in/andrew-zwicker-41748559",
              bio: `Andrew is an enterprise infrastructure architect and CTO-level strategist with experience across
              global broadcast, sports, and immersive entertainment systems.`
            }, {
              name: "Lychelle Loveland Day",
              title: "CFO",
              image: "/LychelleL.jpeg",
              linkedin: "http://linkedin.com/in/lychelle-loveland-day-5a0941256",
              bio: `Lychelle leads strategic operations and financial oversight across Tangent’s portfolio, guiding growth
              and alignment across verticals.`
            }].map((member, index) => (
              <div
                key={index}
                className="grid md:grid-cols-[1fr_1px_200px] items-start gap-20"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="pr-4">
                  <h3 className="text-2xl font-semibold">
                    {member.name} <span className="text-sm font-normal text-[#d4af37]">— {member.title}</span>
                  </h3>
                  <p className="mt-2 text-gray-700">{member.bio}</p>
                  <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="text-[#d4af37] underline mt-3 inline-block">LinkedIn</a>
                </div>
                <div className="hidden md:block h-full border-l-2 border-[#d4af37] opacity-50"></div>
                <div className="pl-4">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={200}
                    height={200}
                    className="object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="w-full border-t border-gray-200" />

      {/* Footer */}
      <footer className="bg-[#0f172a] text-gray-300 text-sm text-center py-6 border-t border-[#d4af37]">
        © {new Date().getFullYear()} Tangent Group. All rights reserved.
      </footer>
    </main>
  );
}
