"use client";

import Image from "next/image";
import { ArrowDownIcon } from "@heroicons/react/24/outline";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 relative overflow-hidden">
      {/* Geometric Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-5">
          <svg width="100%" height="100%" className="absolute inset-0">
            <defs>
              <pattern id="grid-pattern" width="60" height="60" patternUnits="userSpaceOnUse">
                <path d="M 60 0 L 0 0 0 60" fill="none" stroke="white" strokeWidth="1"/>
                <circle cx="30" cy="30" r="1" fill="white"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid-pattern)" />
          </svg>
        </div>
        
        {/* Subtle Geometric Shapes */}
        <div className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-br from-blue-500/20 to-indigo-600/20 transform rotate-45 animate-float"></div>
        <div className="absolute bottom-32 left-16 w-24 h-24 bg-gradient-to-br from-gray-500/15 to-slate-600/15 rounded-full animate-float delay-1000"></div>
        <div className="absolute top-1/3 left-1/4 w-16 h-16 bg-gradient-to-br from-blue-400/20 to-gray-500/20 transform rotate-12 animate-float delay-2000"></div>
        <div className="absolute bottom-1/4 right-1/3 w-20 h-20 bg-gradient-to-br from-slate-500/15 to-gray-600/15 rounded-lg transform -rotate-12 animate-float delay-3000"></div>
        
        {/* Large Background Shape */}
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-gradient-to-br from-blue-600/10 to-indigo-700/10 rounded-full animate-pulse"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            {/* Large Title */}
            <div className="mb-10">
              <h1 className="font-black mb-6">
                <span className="block text-white leading-none text-4xl md:text-6xl lg:text-7xl">Pavanta M</span>
                <span className="block bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent leading-none text-2xl md:text-4xl lg:text-5xl">
                  Data Engineer
                </span>
              </h1>
              <div className="w-24 h-2 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full mb-8"></div>
            </div>

            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-gray-300 mb-10 leading-relaxed max-w-2xl font-light">
              I craft scalable and efficient data solutions with 
              great performance and reliability.
            </p>

            {/* Skills Highlight */}
            <div className="grid grid-cols-2 gap-6 mb-12 max-w-lg">
              <div className="text-left">
                <h3 className="text-gray-400 text-sm font-semibold mb-2 uppercase tracking-wider">Highly skilled at</h3>
                <p className="text-gray-200 font-medium">Progressive enhancement, design systems & cloud architecture</p>
              </div>
              <div className="text-left">
                <h3 className="text-gray-400 text-sm font-semibold mb-2 uppercase tracking-wider">Over 1.5+ years of experience</h3>
                <p className="text-gray-200 font-medium">Building scalable data pipelines and ETL solutions</p>
              </div>
            </div>

            {/* Contact Actions */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
              <a
                href="mailto:pavanta1806@gmail.com"
                className="group inline-flex items-center px-8 py-4 bg-white text-gray-900 font-bold rounded-2xl hover:bg-gray-100 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                <svg className="w-5 h-5 mr-3 group-hover:animate-pulse" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                Get In Touch
              </a>
              <a
                href="https://www.linkedin.com/in/pavanta-m-9665aa208/"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center px-8 py-4 border-2 border-gray-400 text-gray-200 font-bold rounded-2xl hover:bg-white/5 hover:border-gray-300 transform hover:scale-105 transition-all duration-200 backdrop-blur-sm"
              >
                <svg className="w-5 h-5 mr-3 group-hover:animate-pulse" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" />
                </svg>
                LinkedIn
              </a>
            </div>

            {/* Education & Location */}
            <div className="flex flex-col md:flex-row justify-center lg:justify-start items-center gap-8 mb-12">
              <div className="flex items-center gap-3 text-gray-300">
                <div className="w-8 h-8 bg-gray-700/50 backdrop-blur-sm rounded-lg flex items-center justify-center">
                  <svg className="w-4 h-4 text-gray-300" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="font-medium">B.Tech ISE, UVCE Bangalore</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <div className="w-8 h-8 bg-gray-700/50 backdrop-blur-sm rounded-lg flex items-center justify-center">
                  <svg className="w-4 h-4 text-gray-300" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="font-medium">Bangalore, India</span>
              </div>
            </div>

            {/* Scroll down indicator */}
            <button
              onClick={() => scrollToSection("about")}
              className="group animate-bounce inline-flex items-center text-gray-400 hover:text-gray-200 transition-colors"
            >
              <span className="mr-2 font-medium text-sm uppercase tracking-wider">Scroll to explore</span>
              <ArrowDownIcon className="w-5 h-5 group-hover:text-blue-400" />
            </button>
          </div>

          {/* Profile Photo */}
          <div className="flex justify-center lg:justify-end order-1 lg:order-2">
            <div className="relative">
              {/* Main photo container */}
              <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-3xl overflow-hidden border-4 border-gray-600/30 shadow-2xl backdrop-blur-sm bg-gray-800/20 transform hover:scale-105 transition-transform duration-300">
                <Image
                  src="/instasquare.photoeditor.effect.cutout_202483085852823.png"
                  alt="Pavanta M - Data Engineer"
                  width={384}
                  height={384}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
              
              {/* Subtle decorative elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-blue-500/30 to-indigo-600/30 rounded-2xl transform rotate-12 animate-float"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-br from-gray-500/20 to-slate-600/20 rounded-full animate-float delay-1000"></div>
              
              {/* Professional indicator dots */}
              <div className="absolute top-10 right-4 flex flex-col gap-2">
                <div className="w-3 h-3 bg-blue-400/60 rounded-full animate-pulse"></div>
                <div className="w-3 h-3 bg-indigo-400/60 rounded-full animate-pulse delay-500"></div>
                <div className="w-3 h-3 bg-gray-400/60 rounded-full animate-pulse delay-1000"></div>
                <div className="w-3 h-3 bg-slate-400/60 rounded-full animate-pulse delay-1500"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
