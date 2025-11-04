"use client";
import { Mail, Phone, MapPin, Facebook, InstagramIcon, MessageCircle } from "lucide-react";
import Link from "next/link";

export default function ContactPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-20">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-red-800 mb-3">
          Contact Us
        </h1>
        <p className="text-gray-200 text-base md:text-lg bg-red-800 inline-block px-4 py-2 rounded-lg">
          We'd love to hear from you! Get in touch for inquiries, custom orders, or appointments.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        {/* Left - Contact Info */}
        <div className="space-y-6 text-gray-900">
          <h2 className="text-2xl font-semibold text-red-700 uppercase">
            Vasantham Wedding Castle
          </h2>

          <div className="space-y-4">
            <p className="flex items-start gap-3">
              <MapPin size={22} className="text-red-600 mt-1" />
              <span className="leading-relaxed text-white">
                Opposite KTM High School, Kozhikode Road, Palakkad, Kerala
              </span>
            </p>

            <p className="flex items-center gap-3">
              <Phone size={22} className="text-red-600" />
              <span className="text-white">+91 8606360066</span>
            </p>

            <p className="flex items-center gap-3">
              <Mail size={22} className="text-red-600" />
              <span className="text-white">vasanthammkd@gmail.com</span>
            </p>
          </div>

          {/* Social Links */}
          <div className="pt-6">
            <h3 className="text-lg font-medium text-red-700 mb-3">Follow us</h3>
            <div className="flex gap-4">
              <Link
                href="https://www.facebook.com/vasanthamweddingcastle/"
                target="_blank"
                className="p-2 bg-gray-100 hover:bg-red-100 text-red-700 rounded-full transition"
              >
                <Facebook size={22} />
              </Link>
              <Link
                href="https://www.instagram.com/vasanthamweddingcastle?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                target="_blank"
                className="p-2 bg-gray-100 hover:bg-red-100 text-red-700 rounded-full transition"
              >
                <InstagramIcon size={22} />
              </Link>
              <Link
                href="https://wa.me/918606360066"
                target="_blank"
                className="p-2 bg-gray-100 hover:bg-red-100 text-red-700 rounded-full transition"
              >
                <MessageCircle size={22} />
              </Link>
            </div>
          </div>
        </div>

        {/* Right - Contact Form */}
        <div className="bg-white shadow-lg rounded-2xl p-8 border border-red-100">
          <h3 className="text-2xl font-semibold text-red-700 mb-6">Send Us a Message</h3>
          <form className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-gray-800 mb-1">
                Name
              </label>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-2 rounded-lg border border-gray-300 text-gray-800 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-red-400"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-800 mb-1">
                Email
              </label>
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-2 rounded-lg border border-gray-300 text-gray-800 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-red-400"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-800 mb-1">
                Message
              </label>
              <textarea
                placeholder="Your Message"
                rows={4}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 text-gray-800 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-red-400"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-red-700 hover:bg-red-800 text-white font-semibold py-3 rounded-lg transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
