"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Collections() {
  const items = [
    { title: "New Arrival", image: "/collection-1.jpg" },
    { title: "Kids Fashion", image: "/collection-2.jpg" },
    { title: "Bridal Elegance", image: "/collection-3.jpg" },
  ];

  return (
    <section className="bg-red-50 py-20">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-gray-800 mb-12"
        >
          Our Featured Collections
        </motion.h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">
          {items.map((item, i) => (
            <Link href="/collections" key={i}>
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2, duration: 0.8 }}
                viewport={{ once: true }}
                className="relative group rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-[500px] object-cover object-top transform group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-500 flex flex-col justify-end p-6">
                  <h3 className="text-2xl font-semibold text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-200 text-sm">
                    Discover our finest range of luxurious and traditional styles.
                  </p>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
