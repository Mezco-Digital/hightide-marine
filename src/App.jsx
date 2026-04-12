import React from 'react';

const HightideMarinePage = () => {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800">
      {/* HTM-Nav-01: Header / Navbar */}
      <header className="bg-blue-950 text-white shadow-md sticky top-0 z-50 border-b-4 border-teal-500">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <img src="/assets/logo.png" alt="Hightide Marine Logo" className="h-14 w-auto mr-4" />
          </div>
          <div className="hidden md:flex items-center space-x-6 text-sm font-medium">
            <span className="flex items-center"><span className="text-teal-400 mr-2">📞</span> 07990 625026</span>
            <span className="flex items-center"><span className="text-teal-400 mr-2">✉️</span> jon@hightidemarine.co.uk</span>
          </div>
          <a href="tel:07990625026" className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-6 rounded shadow-lg transition duration-200 uppercase tracking-wide text-sm">
            Call Now
          </a>
        </div>
      </header>

      {/* HTM-Hero-01: Hero Section */}
      <section className="bg-blue-950 text-white py-24 lg:py-36 relative overflow-hidden">
        {/* Subtle background overlay using the requested asset to give a rugged, textured feel */}
        <div className="absolute inset-0 opacity-10 bg-cover bg-center" style={{ backgroundImage: "url('/assets/boat-repairs.png')" }}></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tight mb-6 uppercase drop-shadow-md">
            Expert Boat Repairs <br className="hidden md:block" />
            <span className="text-teal-400">& General Maintenance</span>
          </h1>
          <p className="text-xl lg:text-2xl font-light mb-10 max-w-2xl mx-auto text-slate-200 drop-shadow">
            Keeping your vessel seaworthy and in peak condition.
          </p>
          <button className="bg-orange-500 hover:bg-orange-600 text-white font-extrabold py-4 px-10 rounded text-lg shadow-xl transition duration-200 uppercase tracking-widest border-2 border-orange-500 hover:border-orange-400">
            Get a Free Estimate
          </button>
        </div>
      </section>

      {/* HTM-ServicesGrid-01: Services Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-black text-center text-blue-950 mb-16 uppercase tracking-wider relative">
            Our Expertise
            <div className="w-24 h-1 bg-teal-500 mx-auto mt-4"></div>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "Carbon fibre repairs",
              "Gelcoat and paint repairs",
              "Bow thruster installations",
              "Coppercoat application",
              "Valeting and sealing",
              "Wood renovation",
              "Compounding and waxing",
              "GRP repairs and renovations",
              "General maintenance"
            ].map((service, index) => (
              <div key={index} className="bg-slate-50 border-l-4 border-teal-500 p-6 shadow-sm hover:shadow-lg transition duration-300">
                <h3 className="text-xl font-bold text-blue-950 flex items-center">
                  <span className="text-orange-500 mr-3 text-2xl">⚓</span> {service}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HTM-Trust-01: About / Trust Section */}
      <section className="py-20 bg-slate-100 border-t border-b border-slate-200">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-black text-blue-950 mb-8 uppercase tracking-wide">
              Quality Workmanship. <br/><span className="text-teal-500">Local Expertise.</span>
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-6 font-medium">
              At Hightide Marine, we pride ourselves on delivering rugged, reliable, and professional marine maintenance. Whether you need a full bow thruster installation or precision GRP repairs, our commitment to excellence ensures your vessel remains secure and seaworthy. 
            </p>
            <p className="text-blue-950 text-xl leading-relaxed font-bold border-l-4 border-orange-500 pl-4 py-2 bg-white shadow-sm">
              Trusted by local boat owners. Let us take the helm on your next repair.
            </p>
          </div>
          <div className="relative">
            {/* Decorative maritime accent behind the image */}
            <div className="absolute -inset-4 bg-teal-500 rounded-lg transform rotate-2 opacity-20"></div>
            <div className="rounded-lg overflow-hidden shadow-2xl relative z-10 border-8 border-white">
              <img src="/assets/boat-repairs.png" alt="Boat repairs and renovations in progress" className="w-full h-auto object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* HTM-Footer-01: Footer */}
      <section className="bg-blue-950 text-slate-300 py-16 border-t-8 border-teal-500">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <img src="/assets/logo.png" alt="Hightide Marine Logo" className="h-12 w-auto mb-6 grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition duration-300" />
            <p className="text-sm font-medium max-w-xs leading-relaxed">
              Professional, rugged, and maritime-focused marine repairs and maintenance services.
            </p>
          </div>
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-center">
                <span className="text-teal-400 mr-3">📞</span> 
                <a href="tel:07990625026" className="hover:text-white transition">07990 625026</a>
              </li>
              <li className="flex items-center">
                <span className="text-teal-400 mr-3">✉️</span> 
                <a href="mailto:jon@hightidemarine.co.uk" className="hover:text-white transition">jon@hightidemarine.co.uk</a>
              </li>
              <li className="flex items-center">
                <span className="text-teal-400 mr-3">🌐</span> 
                <a href="http://www.hightidemarine.co.uk" className="hover:text-white transition">www.hightidemarine.co.uk</a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider">Follow Us</h4>
            <ul className="space-y-4">
              <li className="flex items-center">
                <span className="text-teal-400 mr-3">📘</span> 
                <a href="#" className="hover:text-white transition">Facebook: Hightide marine</a>
              </li>
              <li className="flex items-center">
                <span className="text-teal-400 mr-3">📸</span> 
                <a href="#" className="hover:text-white transition">Instagram: @hightide.marine</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="container mx-auto px-4 mt-12 pt-8 border-t border-blue-900/50 text-sm text-center opacity-70">
          &copy; {new Date().getFullYear()} Hightide Marine. All rights reserved.
        </div>
      </section>
    </div>
  );
};

export default HightideMarinePage;
