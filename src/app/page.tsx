"use client";

import Image from "next/image";
import Link from "next/link";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import { useCallback } from "react";
import type { Engine } from "tsparticles-engine";

export default function Home() {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <>
      {/* Global animated background and particles */}
      <div className="fixed inset-0 -z-10">
        <div className="w-full h-full bg-black animate-pulse opacity-50" />
        <Particles
          id="tsparticles"
          init={particlesInit}
          options={{
            fullScreen: { enable: false },
            background: { color: "transparent" },
            particles: {
              number: { value: 75 },
              color: { value: "#c1a01e" },
              shape: { type: "circle" },
              opacity: { value: 0.5 },
              size: { value: { min: 1, max: 3 } },
              move: {
                enable: true,
                speed: 0.3,
                direction: "none",
                outMode: "bounce",
              },
            },
          }}
          className="absolute inset-0"
        />
      </div>

      <main className="relative text-white font-serif z-10">
        {/* Hero Section */}
        <section className="relative h-screen flex flex-col items-center justify-center text-center px-6 z-10">
          <Image
            src="/fulllogo_transparent_nobuffer.png"
            alt="Tangent Group Logo"
            width={800}
            height={200}
            className="mx-auto"
            data-aos="fade-up"
          />
        </section>

        {/* Nav Links */}
        <nav className="sticky top-0 z-50 bg-[#1b1b4f] border-b border-[#c1a01e] text-sm flex justify-center gap-8 py-4" data-aos="fade-down">
          <a href="#companies" className="hover:text-[#c1a01e]">Our Companies</a>
          <a href="#about" className="hover:text-[#c1a01e]">About Us</a>
          <a href="#team" className="hover:text-[#c1a01e]">Team</a>
        </nav>

        {/* Companies Section */}
<section id="companies" className="relative px-6 py-20 space-y-20 z-10 text-white">
  <h2 className="text-4xl font-bold text-center mb-10" data-aos="fade-up">Current Companies</h2>

  <div className="flex flex-col md:flex-row items-center gap-8" data-aos="fade-right">
    <a href="https://verlexa.vercel.app/" target="_blank" rel="noopener noreferrer">
      <Image src="/VerlexaThumbnail.png" alt="Verlexa" width={1750} height={300} className="rounded cursor-pointer" />
    </a>
    <div>
      <h3 className="text-3xl font-semibold">Verlexa</h3>
      <p className="mt-4 text-gray-300">
        Verlexa is an advanced document management solution that streamlines the processing of digital evidence by enabling legal professionals to efficiently categorize, label, and Bates stamp large file collections. The platform provides comprehensive review capabilities with database-like querying functionality, allowing attorneys to consolidate, export, and analyze critical case materials with precision and ease.
      </p>
      <Link href="https://verlexa.vercel.app/" className="inline-block mt-4 text-[#c1a01e] underline">Visit Site</Link>
    </div>
  </div>

  <div className="flex flex-col-reverse md:flex-row items-center gap-8" data-aos="fade-left">
    <div>
      <h3 className="text-3xl font-semibold">Reverie Tech Solutions</h3>
      <p className="mt-4 text-gray-300">
        At Reverie Tech Solutions, we believe that technology should drive innovation, not hinder it. Our Innovate services provide advanced digital solutions that empower businesses to analyze data, streamline processes, and develop technology-driven strategies for long-term success.
      </p>
      <Link href="https://reverietech.com/" className="inline-block mt-4 text-[#c1a01e] underline">Visit Site</Link>
    </div>
    <a href="https://reverietech.com/" target="_blank" rel="noopener noreferrer">
      <Image src="/ReverieThumbnail.png" alt="Reverie" width={1000} height={300} className="rounded cursor-pointer" />
    </a>
  </div>

  <div className="flex flex-col md:flex-row items-center gap-8" data-aos="fade-right">
    <a href="https://clutchbowling.com/" target="_blank" rel="noopener noreferrer">
      <Image src="/ClutchThumbnail.png" alt="Clutch Bowling" width={1000} height={300} className="rounded cursor-pointer" />
    </a>
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
        <section id="about" className="relative bg-black px-6 py-20 text-center z-10 text-white" data-aos="fade-up">
          <h2 className="text-4xl font-bold mb-6">About Us</h2>
          <div className="max-w-4xl mx-auto text-gray-300 space-y-12 text-left">
            <p className="text-lg">
              Tangent is a strategic technology group focused on launching and scaling innovative companies in legal tech, immersive entertainment, and data infrastructure. We combine deep industry knowledge with operational expertise to build and support brands that push the boundaries of their fields.
            </p>
          </div>
        </section>

        {/* Team Section */}
        <section id="team" className="relative px-6 py-20 z-10 text-white">
          <h2 className="text-4xl font-bold text-center mb-10" data-aos="fade-up">Our Team</h2>

          <div className="space-y-20 max-w-5xl mx-auto">
            {/* Aaron Day */}
            <div className="flex flex-col md:flex-row items-start gap-6" data-aos="fade-up">
              <Image
                src="/AaronDay.jpeg"
                alt="Aaron Day"
                width={150}
                height={150}
                className="rounded-full object-cover"
              />
              <div>
                <h3 className="text-2xl font-semibold">
                  Aaron Day <span className="text-sm font-normal text-[#c1a01e]">— Managing Partner</span>
                </h3>
                <p className="mt-2 text-gray-300">
                Aaron is a seasoned technology executive and strategic consultant with a deep expertise in IT infrastructure, cybersecurity, and digital transformation. With a career spanning over two decades, he has successfully led technology initiatives for companies of all sizes, from startups to large enterprises. His experience encompasses cloud computing, network security, business intelligence, and IT governance, making him a critical asset in aligning technology with organizational objectives.
                As the former executive leader for operations and technology for multiple enterprises, Aaron has spearheaded complex projects, including cloud migrations, security overhauls, and enterprise-wide digital transformation strategies. His work has had a particular focus on highly regulated industries such as healthcare, finance, and government, ensuring compliance while optimizing efficiency. 
                Aaron is also a thought leader in operational and technological endeavors. He has spoken at multiple keynote panels and industry events, where he shares insights on emerging trends, best practices, and innovative solutions for modern business challenges. His ability to bridge the gap between technical complexities and business strategy enables organizations to harness the full potential of their technology investments. With a strong background in managed services and enterprise solutions, Aaron is passionate about leveraging technology to drive efficiency, security, and business growth.
                </p>
                <a
                  href="http://linkedin.com/in/aarday"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#c1a01e] underline mt-4 inline-block"
                >
                  LinkedIn Profile
                </a>
              </div>
            </div>

            {/* Andrew Zwicker */}
            <div className="flex flex-col md:flex-row items-start gap-6" data-aos="fade-up" data-aos-delay="100">
              <Image
                src="/AndrewZ.jpeg"
                alt="Andrew Zwicker"
                width={150}
                height={150}
                className="rounded-full object-cover"
              />
              <div>
                <h3 className="text-2xl font-semibold">
                  Andrew Zwicker <span className="text-sm font-normal text-[#c1a01e]">— Managing Partner</span>
                </h3>
                <p className="mt-2 text-gray-300">
                As a distinguished technology leader and infrastructure architect, Andrew Zwicker brings comprehensive expertise in enterprise-grade network security and high-availability system design to mission-critical environments. His track record as CTO of a tech-based equity fund and managing partner of an international bowling software company demonstrates his ability to architect and deploy secure, scalable solutions that operate across multiple countries and industries. Andrew&apos;s extensive work with globally recognized organizations like Fox Sports, BPAA, and the PBA Tour showcases his capacity to deliver robust, enterprise-level systems that maintain stringent security standards while ensuring continuous availability. His technical mastery encompasses advanced network security architecture, high-availability infrastructure design, database systems, blockchain development, inventory management, and specialized hardware integration, including LiDAR and infrared tracking systems. Andrew&apos;s proven expertise in rapid prototyping cutting-edge solutions, combined with his success in developing secure, scalable products across sixteen countries, positions him as an exceptional leader in designing and implementing enterprise infrastructure that provides businesses with both ironclad security and competitive advantage in their markets.
                </p>
                <a
                  href="http://linkedin.com/in/andrew-zwicker-41748559"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#c1a01e] underline mt-4 inline-block"
                >
                  LinkedIn Profile
                </a>
              </div>
            </div>

            {/* Lychelle Loveland Day */}
            <div className="flex flex-col md:flex-row items-start gap-6" data-aos="fade-up" data-aos-delay="200">
              <Image
                src="/LychelleL.jpeg"
                alt="Lychelle Loveland Day"
                width={150}
                height={150}
                className="rounded-full object-cover"
              />
              <div>
                <h3 className="text-2xl font-semibold">
                  Lychelle Loveland Day <span className="text-sm font-normal text-[#c1a01e]">— CFO</span>
                </h3>
                <p className="mt-2 text-gray-300">
                  Lychelle is a key leader in Tangent’s growth strategy and operations. Her background and insights drive strategic decisions across multiple ventures.
                </p>
                <a
                  href="http://linkedin.com/in/lychelle-loveland-day-5a0941256"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#c1a01e] underline mt-4 inline-block"
                >
                  LinkedIn Profile
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="relative bg-[#1b1b4f] text-gray-400 text-sm text-center py-6 border-t border-[#c1a01e] z-10">
          © {new Date().getFullYear()} Tangent Group. All rights reserved.
        </footer>
      </main>
    </>
  );
}
