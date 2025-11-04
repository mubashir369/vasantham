"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function AboutPreview() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-10 items-center">
      {/* Image Section */}
      <motion.div
        initial={{ x: -80, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="flex justify-center"
      >
        <img
          src="/textile-showcase.jpg"
          alt="Vasantham Textiles Kids Collection"
          className="rounded-3xl shadow-2xl w-full max-w-lg object-cover"
        />
      </motion.div>

      {/* Text Section */}
      <motion.div
        initial={{ x: 80, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-bold text-red-700 mb-5">
          Woven Elegance for Every Generation
        </h2>
        <p className="text-gray-700 leading-relaxed text-lg">
          Discover timeless traditions reimagined for today’s world. Our kids’
          collection blends comfort and royal design — perfect for weddings,
          celebrations, and cherished family moments.
        </p>
        <Link
          href="/about"
          className="mt-8 inline-block px-8 py-3 bg-red-700 text-white rounded-full hover:bg-red-800 transition-all duration-300"
        >
          Learn More
        </Link>
      </motion.div>
    </section>
  );
}
