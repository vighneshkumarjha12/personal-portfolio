"use client";

import Image from "next/image";
import React, { useState } from "react";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="w-full h-[50px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-5 md:px-8">
      <div className="w-full h-full flex items-center justify-between px-2">
        {/* Logo Section */}
        <a href="#about-me" className="flex items-center h-auto w-auto">
          <Image
            src="/plogo.png"
            alt="logo"
            width={40}
            height={40}
            className="cursor-pointer hover:animate-slowspin"
          />
          <span className="font-bold ml-2 hidden md:block text-gray-300">
            Welcome
          </span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center w-auto h-full justify-between">
          <div className="flex items-center border border-[#7042f861] bg-[#0300145e] px-3 py-1 rounded-lg text-gray-200">
            <a href="#about-me" className="mx-2 cursor-pointer hover:text-[#7042f8]">
              About me
            </a>
            <a href="#skills" className="mx-2 cursor-pointer hover:text-[#7042f8]">
              Skills
            </a>
            <a href="#projects" className="mx-2 cursor-pointer hover:text-[#7042f8]">
              Projects
            </a>
          </div>
        </div>

        {/* Social Links and Hamburger for Mobile */}
        <div className="flex items-center gap-4">
          <a href="https://github.com/vighneshkumarjha12" aria-label="GitHub Profile">
            <Image src="/git.png" alt="GitHub logo" width={25} height={25} className="hover:animate-slowspin" />
          </a>
          <a href="https://www.linkedin.com/in/vighnesh-kumar-jha-704949288" aria-label="LinkedIn Profile">
            <Image src="/in.png" alt="LinkedIn logo" width={25} height={25} className="hover:animate-slowspin" />
          </a>
          {/* Hamburger Icon */}
          <button onClick={toggleMobileMenu} className="md:hidden focus:outline-none">
            <svg className="w-6 h-6 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="absolute top-12 left-0 w-full bg-[#030014] shadow-lg text-gray-200 md:hidden">
            <a href="#about-me" className="block py-2 px-5 hover:bg-[#7042f8]">About me</a>
            <a href="#skills" className="block py-2 px-5 hover:bg-[#7042f8]">Skills</a>
            <a href="#projects" className="block py-2 px-5 hover:bg-[#7042f8]">Projects</a>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
