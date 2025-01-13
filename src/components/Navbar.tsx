// Add this line at the very top of the file
"use client";

import React, { useState } from "react";
import Logo from "./Logo";
import Link from "next/link";
import { FiMenu } from "react-icons/fi";
import { FiX } from "react-icons/fi"; // Close icon for the mobile menu

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to toggle mobile menu

  const navigation = [
    { title: "Home", href: "/" },
    { title: "Features", href: "/features" },
    { title: "About me", href: "/about" },
    { title: "Studio", href: "/studio" },
  ];

  return (
    <div className="w-full bg-white/70 h-20 shadow-md sticky top-0 backdrop-blur-2xl transition-colors z-50">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between px-4 lg:px-0 h-full">
        <Logo title="Bloggers" className="text-black" />
        {/* Desktop Navigation */}
        <div className="hidden md:inline-flex items-center gap-7 text-gray-900 hover:text-black duration-200">
          {navigation.map((item) => (
            <Link
              key={item?.title}
              href={item?.href}
              className="text-sm uppercase font-semibold relative group overflow-hidden"
            >
              {item?.title}
              <span className="w-full h-[1px] bg-blue-700 absolute inline-block left-0 bottom-0 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-200" />
            </Link>
          ))}
        </div>
        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <FiMenu
            className="text-2xl cursor-pointer"
            onClick={() => setIsMenuOpen(!isMenuOpen)} // Toggle menu visibility
          />
        </div>
      </div>

      {/* Mobile Menu - Hidden by default, shown when isMenuOpen is true */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-0 left-0 w-full bg-white shadow-md py-4 px-6 flex flex-col items-center space-y-4 z-40">
          <div className="flex justify-between w-full">
            <Logo title="Bloggers" className="text-black" />
            <FiX
              className="text-2xl cursor-pointer"
              onClick={() => setIsMenuOpen(false)} // Close the menu
            />
          </div>
          {navigation.map((item) => (
            <Link
              key={item?.title}
              href={item?.href}
              className="text-sm uppercase font-semibold text-gray-900 hover:text-black duration-200"
              onClick={() => setIsMenuOpen(false)} // Close the menu when a link is clicked
            >
              {item?.title}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Navbar;
