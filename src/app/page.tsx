"use client";

import { useState, useRef, useEffect } from "react";
import { Download, Mail, Github, Linkedin, Phone, FileText, Calendar, ExternalLink } from "lucide-react";
import { Component as Lightning } from "@/components/ui/lightning";
import PortfolioHero from "@/components/ui/portfolio-hero";
import CelestialOrbHero from "@/components/ui/quantum-grid-hero";

export default function Portfolio() {
  const name = "Samay";
  const tagline = "AI Product Engineer";

  const projects = [
    { title: "Cosmos.AI", desc: "Founder and CEO at Cosmos.AI - Building the future of AI-powered solutions.", link: "https://cosmos-ai-micro-saas-website.vercel.app/", icon: "🌌" },
  ];

  return (
    <div className="min-h-screen relative overflow-hidden text-white bg-black">
      {/* Lightning background - Purple theme */}
      <div className="fixed inset-0 w-full h-full" style={{ zIndex: 0 }}>
        <Lightning
          hue={270}
          xOffset={0.0}
          speed={0.7}
          intensity={1.2}
          size={1.5}
        />
      </div>

      {/* Gradient orbs overlay */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" style={{ zIndex: 1 }}>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob [animation-delay:2s]"></div>
        <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-pink-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob [animation-delay:4s]"></div>
      </div>

      {/* Header */}
      <header className="relative max-w-7xl mx-auto flex items-center justify-between p-6 border-b border-white/5" style={{ zIndex: 10 }}>
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500 to-blue-600 flex items-center justify-center font-bold text-lg">S</div>
          <span className="text-lg font-semibold">{name}</span>
        </div>
        <nav className="hidden md:flex gap-8 text-sm font-medium">
          <a href="#projects" className="transition-all hover:text-purple-400">Projects</a>
          <a href="#resume" className="transition-all hover:text-purple-400">Resume</a>
          <a href="#contact" className="transition-all hover:text-purple-400">Contact</a>
        </nav>
        <a href="tel:+919016707399" className="px-5 py-2 rounded-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-500 hover:to-emerald-500 text-sm font-medium transition-all flex items-center gap-2 shadow-lg shadow-green-500/30 animate-pulse">
          <Phone size={18}/> Call Now
        </a>
      </header>

      {/* Hero */}
      <section className="relative z-10 max-w-6xl mx-auto text-center py-32 px-6">
        <div className="animate-fadeInUp">
          <div className="inline-block mb-6">
            <span className="px-4 py-2 rounded-full bg-purple-500/10 border border-black/20 text-purple-300 text-sm font-medium">Available for opportunities</span>
          </div>
          
          <h1 className="text-6xl sm:text-7xl md:text-8xl font-bold tracking-tight mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-200 to-blue-200">
              {tagline}
            </span>
          </h1>
          
          <p className="text-xl sm:text-2xl text-gray-400 max-w-3xl mx-auto mb-8 leading-relaxed">
            Building production-ready ML apps & demoable projects with measurable impact
          </p>

          <div className="flex justify-center gap-4 flex-wrap mb-12">
            <a href="#projects" className="group px-8 py-4 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 font-semibold text-lg shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 transition-transform hover:scale-105">
              View Projects
              <span className="inline-block ml-2 transition-transform group-hover:translate-x-1">→</span>
            </a>
            <a href="/resume.pdf" download className="px-8 py-4 rounded-full border border-white/10 hover:border-white/20 hover:bg-white/5 font-semibold text-lg transition-all flex items-center gap-2">
              <Download size={20}/> Resume
            </a>
          </div>

          {/* Portfolio Hero Component - Replaces Profile Image Section */}
          <PortfolioHero
            firstName="SAMAY"
            lastName="R. M."
            imageUrl="https://files.catbox.moe/27cuu1.jpg"
            imageAlt="Samay Manchharamani"
            tagline="Designing human experiences in code."
          />
        </div>
      </section>

      {/* About Section */}
      <section className="relative z-10 max-w-7xl mx-auto py-24 px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <img 
              src="https://files.catbox.moe/0bxe6x.png" 
              alt="Samay Manchharamani - Leader & Innovator" 
              className="w-full rounded-3xl shadow-2xl border border-white/10 object-cover"
            />
          </div>
          
          <div className="order-1 lg:order-2">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-300 to-blue-300">
              Driving Innovation Through Persistence & Vision
            </h2>
            
            <div className="space-y-4 text-gray-300 text-lg leading-relaxed">
              <p>
                With more than <strong className="text-white">five years of experience in marketing, sales leadership, and AI-driven business innovation</strong>, <strong className="text-white">Samay Manchharamani</strong> has built a reputation for persistence, creativity, and the ability to turn ideas into real results.
              </p>
              
              <p>
                As the founder of <strong className="text-white">Leaders Group</strong>, Samay scaled a network marketing agency from the ground up, consistently driving <strong className="text-white">₹20–25 lakh turnover per month</strong> and leading a team of over <strong className="text-white">500 women entrepreneurs</strong>, helping them achieve both growth and financial independence.
              </p>
              
              <p>
                Samay&apos;s persistence and problem-solving mindset were evident when he designed and implemented an <strong className="text-white">AI-powered business planbook</strong> for Modicare Ltd. in Rajkot. This initiative didn&apos;t just modernize the approach—it directly boosted local sales to record highs.
              </p>
              
              <p>
                Currently, he is experimenting with <strong className="text-white">AI voice agents</strong>, aiming to push the boundaries of how intelligent automation can reshape sales, customer engagement, and business operations.
              </p>
              
              <p>
                What sets Samay apart is not only his interest in technology but his deep, hands-on experience in real-world sales and team management. He understands the ground realities of building businesses while staying ahead with <strong className="text-white">AI/ML innovations</strong>. In short, Samay is someone who blends persistence with vision—always looking to create impact where it matters most.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section with Celestial Orb Hero */}
      <section id="projects" className="relative z-10 w-full">
        {/* Celestial Orb Hero Background */}
        <div className="relative w-full">
          <CelestialOrbHero />
          
          {/* Projects Content Overlay */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="max-w-7xl mx-auto w-full py-24 px-6">
              <div className="text-center mb-16">
                <h2 className="text-5xl font-bold mb-4 text-white drop-shadow-lg">Featured Project</h2>
                <p className="text-xl text-gray-200 drop-shadow-md">Building the future of AI-powered solutions</p>
              </div>
              
              {/* Single Featured Project - Creative Display */}
              <div className="flex justify-center">
                <a 
                  href={projects[0].link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative max-w-2xl w-full p-12 rounded-3xl overflow-hidden transition-all hover:-translate-y-4"
                >
                  
                  <div className="relative z-10 text-center">
                    <div className="text-8xl mb-8 animate-pulse">{projects[0].icon}</div>
                    <h3 className="text-5xl font-black mb-6 text-white transition-colors group-hover:text-purple-200 bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-100 to-blue-100">
                      {projects[0].title}
                    </h3>
                    <p className="text-xl text-gray-100 mb-10 leading-relaxed max-w-xl mx-auto drop-shadow-md">
                      {projects[0].desc}
                    </p>
                    <div className="inline-flex items-center px-8 py-4 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold text-lg shadow-xl shadow-purple-500/40 group-hover:shadow-purple-500/60 transition-all group-hover:scale-110">
                      View Project <ExternalLink size={22} className="ml-3 transition-transform group-hover:translate-x-2"/>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Resume */}
      <section id="resume" className="relative z-10 max-w-6xl mx-auto py-24 px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4">Experience</h2>
          <p className="text-xl text-gray-400">Building impactful AI solutions</p>
        </div>
        
        <div className="space-y-6">
          <div className="p-8 rounded-3xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 backdrop-blur-sm transition-transform hover:scale-[1.02]">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-2xl font-bold mb-2">AI Product Engineer</h3>
                <p className="text-purple-400 font-medium">Freelance</p>
              </div>
              <span className="px-4 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-sm">Current</span>
            </div>
            <p className="text-gray-400 text-lg leading-relaxed">Built AI-driven tools with measurable impact: faster pipelines, production demos, and clear product metrics.</p>
          </div>
          
          <div className="p-8 rounded-3xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 backdrop-blur-sm transition-transform hover:scale-[1.02]">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-2xl font-bold mb-2">Frontend & ML Integrator</h3>
                <p className="text-blue-400 font-medium">Contract</p>
              </div>
            </div>
            <p className="text-gray-400 text-lg leading-relaxed">Redesigned ML dashboards, integrated real-time inference APIs, and shipped polished demos for stakeholders.</p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="relative z-10 max-w-4xl mx-auto py-24 px-6">
        <div className="text-center p-16 rounded-3xl bg-gradient-to-br from-purple-500/10 to-blue-500/10 border border-purple-500/20 backdrop-blur-sm">
          <h2 className="text-5xl font-bold mb-6">Let&apos;s Work Together</h2>
          <p className="text-xl text-gray-400 mb-10">Ready to bring your AI ideas to life</p>
          
          <div className="flex justify-center gap-4 flex-wrap mb-8">
            <a href="mailto:samay@example.com" className="group px-8 py-4 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 font-semibold shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 transition-transform hover:scale-105 flex items-center gap-3">
              <Mail size={20}/> Email Me
              <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
            </a>
          </div>
          
          <div className="mb-8">
            <p className="text-gray-400 text-sm mb-3">Or call me directly</p>
            <a href="tel:+919016707399" className="inline-flex items-center gap-3 px-10 py-5 rounded-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-500 hover:to-emerald-500 font-bold text-xl shadow-xl shadow-green-500/40 animate-pulse">
              <Phone size={28}/>
              <span className="[animation:flash_1.5s_ease-in-out_infinite]">+91 9016707399</span>
            </a>
          </div>
          
          <div className="mb-8">
            <p className="text-gray-400 text-sm mb-3">Schedule an instant interview</p>
            <a 
              href="https://calendly.com/samayr-m-1004/instant-interview-ai-with-samay" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-10 py-5 rounded-full bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-500 hover:to-red-500 font-bold text-xl shadow-xl shadow-orange-500/40 transition-transform hover:scale-105"
            >
              <Calendar size={28}/>
              CALENDLY to schedule instant interviews
            </a>
          </div>
          
          <div className="flex justify-center gap-6">
            <a href="#" className="p-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 hover:border-purple-500/30 transition-transform hover:scale-110">
              <Github size={24}/>
            </a>
            <a href="#" className="p-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 hover:border-purple-500/30 transition-transform hover:scale-110">
              <Linkedin size={24}/>
            </a>
            <a href="/resume.pdf" download className="p-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 hover:border-purple-500/30 transition-transform hover:scale-110">
              <FileText size={24}/>
            </a>
          </div>
        </div>
      </section>

      <footer className="relative z-10 max-w-7xl mx-auto p-8 text-center text-gray-500 border-t border-white/5 mt-16">
        <p className="text-sm">© 2025 {name}. Built with React & Tailwind.</p>
      </footer>
    </div>
  );
}