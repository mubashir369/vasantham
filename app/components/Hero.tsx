"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Link from "next/link";

const slides = [
  {
    desktopImage: "/slider-1.jpg",
    mobileImage: "/mob1.jpg",
    title: "Grace Meets Tradition",
    subtitle:
      "Explore our handcrafted ethnic collections for every celebration.",
    button: "Shop Now",
    position: "bottom-left",
  },
  {
    desktopImage: "/slider-2.jpg",
    mobileImage: "/mob2.jpg",
    title: "Timeless Elegance",
    subtitle: "Where every fabric tells a story of heritage and beauty.",
    button: "Discover",
    position: "bottom-left",
  },
  {
    desktopImage: "/slider-3.jpg",
    mobileImage: "/mob3.jpg",
    title: "Modern Touch to Classic Designs",
    subtitle: "A perfect blend of luxury and comfort for the modern you.",
    button: "View Collection",
    position: "bottom-left",
  },
];

export default function Hero() {
  const [index, setIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Auto slide every 6s
    const interval = setInterval(
      () => setIndex((prev) => (prev + 1) % slides.length),
      6000
    );
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize(); // check once on load
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const current = slides[index];
  const currentImage = isMobile ? current.mobileImage : current.desktopImage;

  const positionClass =
    current.position === "center"
      ? "justify-center items-center text-center"
      : current.position === "bottom-left"
      ? "justify-end items-start text-left px-4 sm:px-10 pb-10"
      : "justify-end items-end text-right";

  const getInitial = (pos: string) => {
    if (pos === "center") return { opacity: 0, y: 40, scale: 0.98 };
    if (pos === "bottom-left") return { opacity: 0, x: -80, y: 40 };
    return { opacity: 0, x: 80, y: 40 };
  };

  return (
    <section className="relative w-full h-[70vh] sm:h-[85vh] md:h-[90vh] overflow-hidden flex">
      {/* Background Image */}
      <AnimatePresence mode="wait">
        <motion.img
          key={currentImage}
          src={currentImage}
          alt={current.title}
          className="absolute inset-0 w-full h-full object-cover object-center"
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
        />
      </AnimatePresence>

      {/* Overlay for text visibility */}
      <div className="absolute inset-0 bg-black/40 sm:bg-black/30" />

      {/* Text */}
      <div
        className={`relative z-10 w-full flex flex-col h-full ${positionClass}`}
      >
        <motion.div
          key={current.title}
          initial={getInitial(current.position)}
          animate={{ opacity: 1, x: 0, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -30 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="max-w-md sm:max-w-2xl"
        >
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold text-white drop-shadow-lg leading-tight">
            {current.title}
          </h1>
          <p className="mt-3 text-sm sm:text-base md:text-lg text-gray-200 max-w-lg">
            {current.subtitle}
          </p>
          <div className="mt-5">
            <Link
              href="/collections"
              className="inline-block bg-red-600 hover:bg-red-700 text-white px-5 py-2.5 sm:px-6 sm:py-3 rounded-full text-sm sm:text-base font-medium transition-all shadow-lg hover:shadow-xl"
            >
              {current.button}
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Indicators */}
      <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 flex gap-2 sm:gap-3 z-20">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-transform duration-300 ${
              i === index
                ? "bg-white scale-125"
                : "bg-gray-400 hover:bg-white/70"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
