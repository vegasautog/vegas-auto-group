export default function Home() {
  return (
    <main className="bg-black text-white min-h-screen">
      
      {/* NAVBAR */}
      <nav className="flex items-center justify-between px-8 py-6 border-b border-zinc-800">
        <div className="flex items-center gap-4">
          <img
            src="/logo.png"
            alt="Vegas Auto Group"
            className="w-14 h-14 object-contain"
          />

          <div>
            <h1 className="text-2xl font-bold tracking-wide">
              VEGAS AUTO GROUP
            </h1>

            <p className="text-sm text-yellow-500 tracking-[0.3em]">
              PREMIUM DEALERSHIP
            </p>
          </div>
        </div>

        <div className="hidden md:flex gap-8 text-sm uppercase tracking-wider">
          <a href="#inventory" className="hover:text-yellow-500 transition">
            Inventory
          </a>

          <a href="#contact" className="hover:text-yellow-500 transition">
            Contact
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section className="flex flex-col items-center justify-center text-center px-6 py-28">
        <img
          src="/logo.png"
          alt="Vegas Auto Group"
          className="w-52 mb-10"
        />

        <h2 className="text-5xl md:text-7xl font-bold mb-6">
          DRIVEN BY VISION
        </h2>

        <p className="text-zinc-400 max-w-2xl text-lg mb-10">
          Premium quality vehicles with trusted customer service.
          Browse our upcoming inventory and discover your next ride.
        </p>

        <button className="bg-yellow-500 text-black px-8 py-4 rounded-xl font-semibold hover:scale-105 transition">
          View Inventory
        </button>
      </section>

      {/* INVENTORY */}
      <section
        id="inventory"
        className="px-6 md:px-20 py-20 border-t border-zinc-800"
      >
        <h3 className="text-4xl font-bold mb-4">
          Featured Inventory
        </h3>

        <p className="text-zinc-400 mb-12">
          Inventory system coming soon.
        </p>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-800">
            <div className="h-56 bg-zinc-800"></div>

            <div className="p-6">
              <h4 className="text-2xl font-semibold mb-2">
                BMW M4
              </h4>

              <p className="text-yellow-500 text-xl mb-4">
                $48,999
              </p>

              <p className="text-zinc-400">
                Performance luxury coupe with premium features.
              </p>
            </div>
          </div>

          <div className="bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-800">
            <div className="h-56 bg-zinc-800"></div>

            <div className="p-6">
              <h4 className="text-2xl font-semibold mb-2">
                Dodge Charger
              </h4>

              <p className="text-yellow-500 text-xl mb-4">
                $39,500
              </p>

              <p className="text-zinc-400">
                Muscle performance with aggressive styling.
              </p>
            </div>
          </div>

          <div className="bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-800">
            <div className="h-56 bg-zinc-800"></div>

            <div className="p-6">
              <h4 className="text-2xl font-semibold mb-2">
                Mercedes C63
              </h4>

              <p className="text-yellow-500 text-xl mb-4">
                $57,200
              </p>

              <p className="text-zinc-400">
                AMG luxury sedan with premium interior.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="px-6 md:px-20 py-20 border-t border-zinc-800"
      >
        <h3 className="text-4xl font-bold mb-8">
          Contact Us
        </h3>

        <div className="grid md:grid-cols-2 gap-12">

          <div>
            <p className="text-zinc-400 mb-4">
              Phone
            </p>

            <p className="text-2xl font-semibold mb-8">
              (555) 555-5555
            </p>

            <p className="text-zinc-400 mb-4">
              Email
            </p>

            <p className="text-2xl font-semibold">
              vegasautog@gmail.com
            </p>
          </div>

          <form className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Your Name"
              className="bg-zinc-900 border border-zinc-700 rounded-xl p-4"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="bg-zinc-900 border border-zinc-700 rounded-xl p-4"
            />

            <textarea
              placeholder="Message"
              rows={5}
              className="bg-zinc-900 border border-zinc-700 rounded-xl p-4"
            />

            <button
              className="bg-yellow-500 text-black py-4 rounded-xl font-semibold"
            >
              Send Message
            </button>
          </form>

        </div>
      </section>

    </main>
  );
}