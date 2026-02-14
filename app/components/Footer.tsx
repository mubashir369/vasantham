"use client";
import { Facebook, InstagramIcon, Mail, Phone, MapPin, MessageCircle } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-red-900 text-white pt-12 pb-6 mt-20">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-10">
        {/* Left Section - Brand & Address */}
        <div>
          <h2 className="text-2xl font-bold mb-3 tracking-wide">VASANTHAM WEDDING CASTLE</h2>
          <p className="text-red-200 flex items-start gap-2 mb-2">
            <MapPin size={18} className="mt-1" />
            OPPOSITE  MY G Future, KOZHIKODE ROAD, PALAKKAD , MANNARKKAD
          </p>
          <p className="text-red-200 flex items-center gap-2 mb-1">
            <Phone size={18} /> Ph: 8606360066
          </p>
          <p className="text-red-200 flex items-center gap-2">
            <Mail size={18} /> vasanthammkd@gmail.com
          </p>

          {/* Social Links */}
          <div className="flex gap-4 mt-4">
            <Link
              href="https://www.facebook.com/vasanthamweddingcastle/"
              target="_blank"
              className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition"
            >
              <Facebook size={20} />
            </Link>
            <Link
              href="https://www.instagram.com/vasanthamweddingcastle?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
              target="_blank"
              className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition"
            >
              <InstagramIcon size={20} />
            </Link>
            <Link
              href="https://wa.me/918606360066"
              target="_blank"
              className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition"
            >
              <MessageCircle size={20} />
            </Link>
          </div>
        </div>

        {/* Middle Section - Quick Links */}
        <div className="text-red-100">
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2">
            {[
              { name: "Home", path: "/" },
              { name: "Collections", path: "/collections" },
              { name: "About", path: "/about" },
              { name: "Gallery", path: "/gallery" },
              { name: "Contact", path: "/contact" },
            ].map((link) => (
              <li key={link.name}>
                <Link
                  href={link.path}
                  className="hover:text-white transition-colors"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Section - Contact Form */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Get in Touch</h3>
          <form className="space-y-3">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-2 rounded bg-white/10 text-white placeholder-red-200 focus:outline-none focus:ring-2 focus:ring-white/30"
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-2 rounded bg-white/10 text-white placeholder-red-200 focus:outline-none focus:ring-2 focus:ring-white/30"
              required
            />
            <textarea
              placeholder="Your Message"
              rows={3}
              className="w-full px-4 py-2 rounded bg-white/10 text-white placeholder-red-200 focus:outline-none focus:ring-2 focus:ring-white/30"
              required
            />
            <button
              type="submit"
              className="w-full bg-white text-red-900 font-semibold py-2 rounded hover:bg-red-100 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-red-800 mt-10 pt-4 text-center text-sm text-red-200">
        © {new Date().getFullYear()} Vasantham Wedding Castle. All rights reserved.
      </div>
    </footer>
  );
}
