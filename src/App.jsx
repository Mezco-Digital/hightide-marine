import React from 'react';
import { trackConversion } from './analytics';

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
          <a 
            href="tel:07990625026" 
            onClick={() => trackConversion('call_now')}
            className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-6 rounded shadow-lg transition duration-200 uppercase tracking-wide text-sm"
          >
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
          <button 
            onClick={() => trackConversion('free_estimate')}
            className="bg-orange-500 hover:bg-orange-600 text-white font-extrabold py-4 px-10 rounded text-lg shadow-xl transition duration-200 uppercase tracking-widest border-2 border-orange-500 hover:border-orange-400"
          >
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

      {/* HTM-Showcase-01: Results Showcase (CRO Trust Signal) */}
      <section className="py-20 bg-white overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-blue-950 uppercase tracking-wider">Repair Excellence</h2>
            <p className="text-slate-500 font-bold mt-2">Proven results in Gelcoat, GRP, and Renovations</p>
            <div className="w-24 h-1 bg-orange-500 mx-auto mt-6"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-4">
              <div className="relative rounded-xl overflow-hidden shadow-lg border-4 border-slate-100">
                <img src="/assets/boat-repairs.png" alt="Before and After Gelcoat Repair" className="w-full h-64 object-cover" />
                <div className="absolute bottom-4 right-4 bg-orange-500 text-white px-4 py-1 font-black uppercase text-xs rounded-full">Recent Project</div>
              </div>
              <h3 className="text-xl font-bold text-blue-950">Gelcoat & Paint Restoration</h3>
              <p className="text-slate-600">Complete restoration of weathered hulls to a factory-fresh finish. We use premium marine compounds and sealants for long-lasting protection.</p>
            </div>
            <div className="space-y-4">
              <div className="relative rounded-xl overflow-hidden shadow-lg border-4 border-slate-100">
                <div className="w-full h-64 bg-slate-200 flex items-center justify-center">
                   <img src="/assets/boat-repairs.png" alt="Wood Renovation" className="w-full h-64 object-cover opacity-50 grayscale" />
                   <div className="absolute inset-0 flex items-center justify-center">
                     <span className="bg-blue-950/80 text-white px-6 py-3 font-bold rounded-lg border border-teal-500">Wood Renovation Expert</span>
                   </div>
                </div>
              </div>
              <h3 className="text-xl font-bold text-blue-950">Precision Wood & GRP Repair</h3>
              <p className="text-slate-600">From structural GRP work to delicate wood renovations, we ensure every detail matches the original craftsmanship of your vessel.</p>
            </div>
          </div>
        </div>
      </section>

      {/* HTM-Testimonials-01: Customer Testimonials (CRO Trust Signal) */}
      <section className="py-20 bg-blue-950 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-black text-center mb-16 uppercase tracking-widest">What Boat Owners Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Robert M.",
                text: "Fantastic gelcoat repair on my yacht. You can't even see where the damage was. Professional and timely service.",
                tag: "Gelcoat Repair"
              },
              {
                name: "Sarah L.",
                text: "Highly recommend for annual maintenance. They've kept our boat in peak condition for three seasons now. Rugged and reliable.",
                tag: "General Maintenance"
              },
              {
                name: "James T.",
                text: "Expert bow thruster installation. The attention to detail was exceptional. Hightide is my go-to for anything marine.",
                tag: "Installations"
              }
            ].map((t, i) => (
              <div key={i} className="bg-blue-900/50 p-8 rounded-lg border border-blue-800 relative">
                <div className="text-teal-400 text-4xl mb-4 font-serif">"</div>
                <p className="text-slate-300 italic mb-6 leading-relaxed">{t.text}</p>
                <div className="flex items-center justify-between">
                  <span className="font-bold text-teal-400">— {t.name}</span>
                  <span className="text-[10px] uppercase tracking-tighter bg-blue-800 px-2 py-1 rounded text-slate-400 font-black">{t.tag}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HTM-LeadCapture-01: Frictionless Lead Capture Form */}
      <section id="estimate-form" className="py-24 bg-slate-50 border-t border-slate-200">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-slate-200 flex flex-col md:flex-row">
            <div className="bg-orange-500 md:w-1/3 p-10 text-white flex flex-col justify-center">
              <h2 className="text-3xl font-black uppercase leading-tight mb-4">Get a Free Estimate</h2>
              <p className="text-orange-100 font-medium">Quick response times. Expert advice. No obligation.</p>
              <div className="mt-8 space-y-4 text-sm">
                <div className="flex items-center">
                  <span className="bg-orange-600 p-2 rounded mr-3">⚓</span> Professional GRP & Gelcoat
                </div>
                <div className="flex items-center">
                  <span className="bg-orange-600 p-2 rounded mr-3">⚓</span> Fully Insured Work
                </div>
                <div className="flex items-center">
                  <span className="bg-orange-600 p-2 rounded mr-3">⚓</span> Local Marine Experts
                </div>
              </div>
            </div>
            <div className="md:w-2/3 p-10">
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-black uppercase text-slate-400 mb-1">Full Name</label>
                    <input type="text" className="w-full bg-slate-50 border border-slate-200 rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-500 transition" placeholder="John Doe" />
                  </div>
                  <div>
                    <label className="block text-xs font-black uppercase text-slate-400 mb-1">Phone or Email</label>
                    <input type="text" className="w-full bg-slate-50 border border-slate-200 rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-500 transition" placeholder="07123 456789" />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-black uppercase text-slate-400 mb-1">Boat Type / Model</label>
                  <input type="text" className="w-full bg-slate-50 border border-slate-200 rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-500 transition" placeholder="e.g. Beneteau Oceanis 38" />
                </div>
                <div>
                  <label className="block text-xs font-black uppercase text-slate-400 mb-1">Service Needed</label>
                  <select className="w-full bg-slate-50 border border-slate-200 rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-500 transition appearance-none">
                    <option>Select a service...</option>
                    <option>Gelcoat & Paint Repairs</option>
                    <option>GRP repairs and renovations</option>
                    <option>Compounding and waxing</option>
                    <option>Bow thruster installations</option>
                    <option>General maintenance</option>
                    <option>Other</option>
                  </select>
                </div>
                <button type="submit" className="w-full bg-orange-500 hover:bg-orange-600 text-white font-black py-4 rounded shadow-lg transition duration-200 uppercase tracking-widest mt-4">
                  Request My Estimate
                </button>
              </form>
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
                <a 
                  href="tel:07990625026" 
                  onClick={() => trackConversion('footer_call')}
                  className="hover:text-white transition"
                >
                  07990 625026
                </a>
              </li>
              <li className="flex items-center">
                <span className="text-teal-400 mr-3">✉️</span> 
                <a 
                  href="mailto:jon@hightidemarine.co.uk" 
                  onClick={() => trackConversion('footer_email')}
                  className="hover:text-white transition"
                >
                  jon@hightidemarine.co.uk
                </a>
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
