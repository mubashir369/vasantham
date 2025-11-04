"use client";

export default function AboutPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-20 text-white">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-red-600 mb-4">
          About Us
        </h1>
        <p className="text-lg max-w-3xl mx-auto">
          Welcome to <span className="font-semibold text-red-500">Vasantham Group</span> — 
          Malabar’s largest textile and fashion network, where tradition meets modern elegance.
        </p>
      </div>

      {/* Main Content */}
      <div className="space-y-6 leading-relaxed text-lg">
        <p>
          For generations, <span className="font-medium text-red-500">Vasantham</span> has been a
          trusted name in the world of textiles. What began as a humble journey in Palakkad has
          now grown into one of Malabar’s most beloved destinations for premium fabrics, ethnic wear,
          and family fashion.
        </p>

        <p>
          At <span className="font-medium text-red-500">Vasantham Group</span>, we take pride in
          offering an exquisite range of silk sarees, cotton wear, and designer fabrics — each piece
          crafted to perfection, blending timeless craftsmanship with contemporary design.
        </p>

        <p>
          Our mission is simple — to make elegant, high-quality fashion affordable for every family.
          From festive attire to daily wear, we bring you collections that celebrate comfort,
          culture, and class.
        </p>

        <p>
          Beyond fabrics, we believe in experiences — a warm, welcoming shopping atmosphere where
          every customer feels valued. Whether you visit our stores or connect with us online, we
          promise authenticity, quality, and a touch of heritage in every interaction.
        </p>

        <p className="text-red-500 font-semibold mt-6">
          Vasantham Group — Where elegance is woven with tradition.
        </p>
      </div>
    </div>
  );
}
