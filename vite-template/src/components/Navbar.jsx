import { Menu } from "lucide-react";
import { useState } from "react";
import { X } from "lucide-react";
import { Link } from "react-scroll";

export default function Navbar() {
  const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 transition-all duration-300 bg-slate-950/20 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14 sm:h-16 md-h-20 ">
          <div className="flex items-center space-x-1 group cursor-pointer">
            <div className="">
              <img
                src="/vite.svg"
                alt="CodeFlow"
                className="w-6 h-6 sm:w-8 sm:h-8"
              />
            </div>
            <Link to="hero" smooth={true} duration={500}>
                <span className="text-lg sm:text-xl md:text-2xl font-medium">
                    
                <span className="text-white">Dev</span>
                <span className="text-blue-600">Hades</span>
                </span>
            </Link>
          </div>

          {/*Nav Links */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8 cursor-pointer">
            <Link
              to="features"
              smooth={true}
              duration={500}
              className="text-gray-300 hover:text-white text-sm lg:text-base "
            >
              Features
            </Link>
            <Link
              to="pricing"
              smooth={true}
              duration={500}
              className="text-gray-300 hover:text-white text-sm lg:text-base"
            >
              Pricing
            </Link>
            <Link
              to="testimonials"
              smooth={true}
              duration={500}
              className="text-gray-300 hover:text-white text-sm lg:text-base"
            >
              Testimonials
            </Link>
          </div>

          <button
            className="md:hidden p-2 text-gray-300 hover:text-white"
            onClick={() => setMobileMenuIsOpen((prev) => !prev)}
          >
            {mobileMenuIsOpen ? (
              <X className="w-5 h-5 sm:w-6 sm:h-6" />
            ) : (
              <Menu className="w-5 h-5 sm:w-6 sm:h-6" />
            )}
          </button>
        </div>
      </div>

      {mobileMenuIsOpen && (
        <div className="md:hidden bg-slate-900/95 backdrop-blur-lg border-t border-slate-800 animate-in slide-in-from-top duration-300">
          <div className="px-4 py-4 sm:py-6 space-y-3 sm:space-y-4 ">
            <Link
              to="features"
              smooth={true}
              duration={500}
              onClick={() => setMobileMenuIsOpen(false)}
              className="block text-gray-300 hover:text-white text-sm lg:text-base"
            >
              Features
            </Link>
            <Link
              to="pricing"
              smooth={true}
              duration={500}
              onClick={() => setMobileMenuIsOpen(false)}
              className="block text-gray-300 hover:text-white text-sm lg:text-base"
            >
              Pricing
            </Link>
            <Link
              to="testimonials"
              smooth={true}
              duration={500}
              onClick={() => setMobileMenuIsOpen(false)}
              className="block text-gray-300 hover:text-white text-sm lg:text-base"
            >
              Testimonials
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
