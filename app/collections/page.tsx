"use client";
import { motion } from "framer-motion";

export default function CollectionsPage() {
  const collections = [
    {
      title: "Lehenga",
      description:
        "Experience royal elegance with our handcrafted lehengas, designed for unforgettable celebrations.",
      image: "/collection-1.jpg",
    },
    {
      title: "Girls & Boys Outfit",
      description:
        "Adorable ethnic and modern outfits for kids — perfect for every festive moment.",
      image: "/collection-2.jpg",
    },
    {
      title: "Wedding Collection",
      description:
        "Celebrate love and tradition with our luxurious wedding ensembles, crafted with precision and grace.",
      image: "/collection-3.jpg",
    },
    {
      title: "Kids Collection",
      description:
        "Charming, colorful, and comfortable — a collection your little ones will adore.",
      image: "/collection-4.jpg",
    },
    {
      title: "Lehenga Choli",
      description:
        "A timeless expression of tradition and beauty — explore our exquisite lehenga choli collection.",
      image: "/collection-5.jpg",
    },
  ];


  return (
    <section className="bg-black text-white py-20">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Title Section */}
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-red-600 mb-6"
        >
          Our Collections
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
          viewport={{ once: true }}
          className="text-gray-300 max-w-3xl mx-auto mb-12"
        >
          Explore our exclusive range of textiles — a perfect blend of tradition, craftsmanship,
          and modern style designed to suit every occasion.
        </motion.p>

        {/* Collection Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {collections.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2, duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-zinc-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-red-800/40 transition-all duration-500 transform hover:-translate-y-2"
            >
              <div className="overflow-hidden">
               <motion.img
  src={item.image}
  alt={item.title}
  className="w-full h-auto max-h-[600px] object-contain bg-black rounded-t-2xl"
  whileHover={{ scale: 1.03 }}
  transition={{ duration: 0.6 }}
/>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-red-500 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
