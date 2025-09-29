import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Home() {
  return (
    <div className="font-sans text-gray-800">
      {/* Header */}
      <header className="bg-gradient-to-r from-indigo-600 to-blue-500 shadow-lg sticky top-0 z-50 rounded-b-xl">
        <div className="container mx-auto flex items-center justify-between py-4 px-6">
          <div className="text-white font-bold text-2xl tracking-wide">
            Shield Insurance
          </div>
          <nav className="flex space-x-6 text-white font-medium">
            <a href="#" className="hover:text-yellow-300 transition">Home</a>
            <a href="#about" className="hover:text-yellow-300 transition">About</a>
            <a href="#services" className="hover:text-yellow-300 transition">Services</a>
            <Link to="/login" className="hover:text-yellow-300 transition">Login</Link>
            <Link to="/register" className="hover:text-yellow-300 transition">Register</Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gray-50">
        <div className="container mx-auto px-6 py-20 flex flex-col items-center text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-indigo-700 mb-6">
            Protect What Matters Most
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl">
            Your future, our priority. Reliable insurance for life, health, and property.
          </p>
          <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-xl text-lg font-semibold shadow-lg transition">
            Get a Quote
          </button>
        </div>
      </section>

      {/* Insurance Covers Section */}
      <section id="services" className="bg-white py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Our Insurance Covers
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {icon: "🏠", title: "Home Insurance", desc: "Comprehensive protection for your home and belongings.", points: ["Building & contents coverage", "Alternative accommodation", "Liability protection"]},
              {icon: "🚗", title: "Auto Insurance", desc: "Complete coverage for your vehicles with flexible plans.", points: ["Collision & comprehensive", "Roadside assistance", "Rental car coverage"]},
              {icon: "👨‍👩‍👧‍👦", title: "Life Insurance", desc: "Financial security for your loved ones.", points: ["Term & whole life options", "Critical illness coverage", "Tax-free payouts"]},
              {icon: "🏥", title: "Health Insurance", desc: "Quality healthcare coverage for you & your family.", points: ["Hospitalization coverage", "Preventive care", "Prescription benefits"]}
            ].map((cover, idx) => (
              <div key={idx} className="bg-gray-50 rounded-2xl shadow-md p-6 hover:shadow-xl transition">
                <div className="text-4xl mb-4">{cover.icon}</div>
                <h3 className="text-xl font-semibold text-indigo-700 mb-2">{cover.title}</h3>
                <p className="text-gray-600 mb-4">{cover.desc}</p>
                <ul className="text-sm text-gray-500 space-y-1 list-disc list-inside">
                  {cover.points.map((p, i) => <li key={i}>{p}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Why Trust Shield Insurance
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {title: "Affordable Plans", desc: "Tailored insurance for every budget.", points: ["Customizable coverage", "Bundling discounts", "No hidden fees"]},
              {title: "24/7 Support", desc: "Always available when you need us.", points: ["Multilingual team", "Online chat & phone", "Emergency claims"]},
              {title: "Fast Claims", desc: "Quick processing to get you back on track.", points: ["Mobile submission", "48h processing", "Direct deposit"]}
            ].map((feature, idx) => (
              <div key={idx} className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition">
                <h3 className="text-xl font-semibold text-indigo-700 mb-2">{feature.title}</h3>
                <p className="text-gray-600 mb-4">{feature.desc}</p>
                <ul className="text-sm text-gray-500 space-y-1 list-disc list-inside">
                  {feature.points.map((p, i) => <li key={i}>{p}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-indigo-600 to-blue-500 py-16 text-center text-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Start protecting your future today</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers who trust Shield Insurance for their protection needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-yellow-400 text-gray-900 px-6 py-3 rounded-xl font-semibold shadow-lg hover:bg-yellow-300 transition">
              Get a Free Quote
            </button>
            <button className="bg-white text-indigo-700 px-6 py-3 rounded-xl font-semibold shadow-lg hover:bg-gray-100 transition">
              Speak to an Agent
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative bg-gray-900 text-gray-300 pt-20">
        <video className="absolute inset-0 w-full h-full object-cover opacity-20" autoPlay muted loop playsInline>
          <source src="/foot.mp4" type="video/mp4" />
        </video>
        <div className="relative container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-10 mb-10">
            <div>
              <h3 className="text-white font-bold text-xl mb-3">Shield Insurance</h3>
              <p>Trusted coverage for your life, health, and property. We've got you covered.</p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-3">Quick Links</h4>
              <ul className="space-y-2">
                {['Home', 'About', 'Services', 'Login', 'Register', 'FAQs'].map((l, i) => (
                  <li key={i}><a href="#" className="hover:text-yellow-400 transition">{l}</a></li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-3">Contact Us</h4>
              <p>Email: support@shieldinsurance.com</p>
              <p>Phone: +254 799 169720</p>
              <p>Address: 123 Nairobi Ave, Kenya</p>
              <div className="flex space-x-4 mt-3">
                <a href="#" className="hover:text-yellow-400"><FaFacebook /></a>
                <a href="#" className="hover:text-yellow-400"><FaTwitter /></a>
                <a href="#" className="hover:text-yellow-400"><FaInstagram /></a>
                <a href="#" className="hover:text-yellow-400"><FaLinkedin /></a>
              </div>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-3">Stay Updated</h4>
              <p className="mb-3">Subscribe to our newsletter for tips & offers.</p>
              <form className="flex">
                <input type="email" placeholder="Enter your email" className="flex-grow p-2 rounded-l-lg focus:outline-none text-white-900" />
                <button type="submit" className="bg-yellow-400 hover:bg-yellow-300 text-gray-900 px-4 rounded-r-lg">Subscribe</button>
              </form>
            </div>
          </div>
          <div className="border-t border-gray-700 py-6 flex flex-col md:flex-row justify-between items-center text-sm">
            <p>&copy; {new Date().getFullYear()} Shield Insurance Co. All rights reserved.</p>
            <div className="flex space-x-4 mt-2 md:mt-0">
              <a href="#privacy" className="hover:text-yellow-400">Privacy Policy</a>
              <a href="#terms" className="hover:text-yellow-400">Terms of Service</a>
              <a href="#accessibility" className="hover:text-yellow-400">Accessibility</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
