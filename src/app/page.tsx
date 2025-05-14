import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-[#1b1b4f] text-white font-serif">
      {/* Hero Section */}
      <section className="h-screen flex flex-col items-center justify-center text-center px-6">
        <h1 className="text-5xl md:text-7xl font-bold tracking-wide">Tangent Group</h1>
        <p className="mt-4 text-lg text-[#c1a01e]">Driving innovation across industries</p>
      </section>

      {/* Nav Links */}
      <nav className="sticky top-0 z-50 bg-[#1b1b4f] border-b border-[#c1a01e] text-sm flex justify-center gap-8 py-4">
        <a href="#companies" className="hover:text-[#c1a01e]">Current Companies</a>
        <a href="#about" className="hover:text-[#c1a01e]">About Us</a>
        <a href="#team" className="hover:text-[#c1a01e]">Team</a>
      </nav>

      {/* Companies Section */}
      <section id="companies" className="px-6 py-20 space-y-20">
        <h2 className="text-4xl font-bold text-center mb-10">Current Companies</h2>

        <div className="flex flex-col md:flex-row items-center gap-8">
          <Image src="/placeholder.jpg" alt="Verlexa" width={500} height={300} className="rounded" />
          <div>
            <h3 className="text-3xl font-semibold">Verlexa</h3>
            <p className="mt-4 text-gray-300">
              Verlexa is an advanced document management solution that streamlines the processing of digital evidence by enabling legal professionals to efficiently categorize, label, and Bates stamp large file collections. The platform provides comprehensive review capabilities with database-like querying functionality, allowing attorneys to consolidate, export, and analyze critical case materials with precision and ease.
            </p>
            <Link href="https://verlexa.vercel.app/" className="inline-block mt-4 text-[#c1a01e] underline">Visit Site</Link>
          </div>
        </div>

        <div className="flex flex-col-reverse md:flex-row items-center gap-8">
          <div>
            <h3 className="text-3xl font-semibold">Reverie Tech Solutions</h3>
            <p className="mt-4 text-gray-300">
              At Reverie Tech Solutions, we believe that technology should drive innovation, not hinder it. Our Innovate services provide advanced digital solutions that empower businesses to analyze data, streamline processes, and develop technology-driven strategies for long-term success.
            </p>
            <Link href="https://reverietech.com/" className="inline-block mt-4 text-[#c1a01e] underline">Visit Site</Link>
          </div>
          <Image src="/placeholder.jpg" alt="Reverie" width={500} height={300} className="rounded" />
        </div>

        <div className="flex flex-col md:flex-row items-center gap-8">
          <Image src="/placeholder.jpg" alt="Clutch Bowling" width={500} height={300} className="rounded" />
          <div>
            <h3 className="text-3xl font-semibold">Clutch Bowling</h3>
            <p className="mt-4 text-gray-300">
              Clutch Bowling projects games and effects which interact with objects on the lane. With custom-configured systems, anamorphic rendering, and Specto tracking integration, we ensure immersive and accurate experiences.
            </p>
            <Link href="https://clutchbowling.com/" className="inline-block mt-4 text-[#c1a01e] underline">Visit Site</Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-[#161638] px-6 py-20 text-center">
        <h2 className="text-4xl font-bold mb-6">About Us</h2>
        <p className="max-w-3xl mx-auto text-gray-300">
          Tangent Group is a strategic holding company focused on cultivating cutting-edge technology ventures. Our portfolio companies operate independently but are united by a common thread: innovation, scalability, and impact.
        </p>
      </section>

      {/* Team Section */}
      <section id="team" className="px-6 py-20">
        <h2 className="text-4xl font-bold text-center mb-10">Our Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          <div className="bg-[#292965] p-6 rounded text-center">
            <Image src="/placeholder.jpg" alt="Team Member" width={100} height={100} className="mx-auto rounded-full" />
            <h4 className="mt-4 font-semibold">Jane Doe</h4>
            <p className="text-sm text-gray-300">Managing Partner</p>
          </div>
          <div className="bg-[#292965] p-6 rounded text-center">
            <Image src="/placeholder.jpg" alt="Team Member" width={100} height={100} className="mx-auto rounded-full" />
            <h4 className="mt-4 font-semibold">John Smith</h4>
            <p className="text-sm text-gray-300">Head of Strategy</p>
          </div>
          <div className="bg-[#292965] p-6 rounded text-center">
            <Image src="/placeholder.jpg" alt="Team Member" width={100} height={100} className="mx-auto rounded-full" />
            <h4 className="mt-4 font-semibold">Alex Johnson</h4>
            <p className="text-sm text-gray-300">CTO</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1b1b4f] text-gray-400 text-sm text-center py-6 border-t border-[#c1a01e]">
        © {new Date().getFullYear()} Tangent Group. All rights reserved.
      </footer>
    </main>
  );
}
