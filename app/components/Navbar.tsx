"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-30 top-0 left-0 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <img
              src={isScrolled ? "/logo1.png" : "/logo.png"}
              alt="Vasantham Logo"
              className={`object-contain transition-all duration-300 ${
                isScrolled ? "w-20 h-20" : "w-28 h-28"
              }`}
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-10">
            {[
              { name: "Home", path: "/" },
              { name: "Collections", path: "/collections" },
              { name: "About", path: "/about" },
              { name: "Gallery", path: "/gallery" },
              { name: "Contact", path: "/contact" },
            ].map((item) => (
              <Link
                key={item.name}
                href={item.path}
                className={`font-medium transition-colors duration-300 relative group ${
                  isScrolled
                    ? "text-gray-800 hover:text-red-700"
                    : "text-white hover:text-red-400"
                }`}
              >
                {item.name}
                <span
                  className={`absolute left-0 -bottom-1 w-0 h-[2px] transition-all duration-300 group-hover:w-full ${
                    isScrolled ? "bg-red-700" : "bg-white"
                  }`}
                ></span>
              </Link>
            ))}
          </div>

          {/* Mobile Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden p-2 rounded-md transition-colors duration-300 ${
              isScrolled ? "text-gray-800" : "text-white"
            }`}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          isOpen
            ? isScrolled
              ? "max-h-80 opacity-100 bg-white"
              : "max-h-80 opacity-100 bg-black/80 backdrop-blur-md"
            : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-6 py-4 space-y-3">
          {[
            { name: "Home", path: "/" },
            { name: "Collections", path: "/collections" },
            { name: "About", path: "/about" },
            { name: "Gallery", path: "/gallery" },
            { name: "Contact", path: "/contact" },
          ].map((item) => (
            <Link
              key={item.name}
              href={item.path}
              onClick={() => setIsOpen(false)}
              className={`block font-medium transition-colors duration-300 ${
                isScrolled
                  ? "text-gray-800 hover:text-red-700"
                  : "text-white hover:text-red-400"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
