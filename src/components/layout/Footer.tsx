import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Linkedin,
  Instagram,
  Check,
  Globe,
  X,
} from "lucide-react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";

// Denmark Flag Component
const DenmarkFlag = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className}>
    <rect width="24" height="24" rx="2" fill="#C60C30" />
    <rect x="8" y="4" width="2" height="16" fill="white" />
    <rect x="4" y="10" width="16" height="2" fill="white" />
  </svg>
);

// Sweden Flag Component
const SwedenFlag = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className}>
    <rect width="24" height="24" rx="2" fill="#006AA7" />
    <rect x="8" y="4" width="2" height="16" fill="#FECC00" />
    <rect x="4" y="10" width="16" height="2" fill="#FECC00" />
  </svg>
);

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-gray-50 to-white pt-20 pb-8">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        {/* Top Section with Info */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-light text-gray-900 mb-4">
            Our Doctor and Specialist Are Member of Norwegian{" "}
            <br className="lg:block hidden" /> Medical Association
          </h2>
          <div className="flex flex-wrap justify-center items-center gap-8 mt-8">
            <div className="flex items-center gap-2 text-gray-700">
              <div className="w-10 h-10 bg-teal-700 rounded-full flex items-center justify-center">
                <Check className="w-5 h-5 text-white" />
              </div>
              <span className="font-medium">DEN NORSKE LEGEFORENING</span>
            </div>
            <div className="flex items-center gap-2 text-gray-700">
              <Phone className="w-5 h-5 text-teal-700" />
              <span className="font-medium">Org No: 912 875 083</span>
            </div>
          </div>
        </div>

        {/* Middle Section with Logo, Flags, Tagline and Newsletter */}
        <div className="mb-2 border-t">
          {/* Top row: Logo and Flags in one line with flex justify-between */}
          <div className="flex justify-between items-center mb-6">
            <span className="flex items-center space-x-3">
              <DenmarkFlag className="w-12 h-8 rounded-lg flex-shrink-0" />
              Psykiatriker Sweden
            </span>

            <Link
              to="/"
              className="flex items-center space-x-3 group cursor-pointer"
            >
              <img
                src={logo}
                alt="Logo"
                className="w-96 h-72 object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </Link>
            <span className="flex items-center space-x-3">
              <SwedenFlag className="w-12 h-8 rounded-lg flex-shrink-0" />
              DEN NORSKE LEGEFORENING
            </span>
          </div>

          {/* Bottom row: Tagline and Newsletter */}
          <div className="text-center">
            <p
              className="text-gray-700 text-4xl font-Inria-Serif  mb-6"
            >
              Psykiater.no, doctor and specialist{" "}
              <br className="lg:block hidden" />
              in addiction medicine.
            </p>

            {/* Newsletter */}
            <div className="flex gap-2 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter Your Email Address"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-700 focus:border-transparent"
              />
              <button className="px-6 py-3 bg-teal-700 hover:bg-teal-800 text-white rounded-lg font-medium transition-colors whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-wrap justify-center gap-8 mb-12 text-sm">
          <Link
            to="/"
            className="text-gray-700 hover:text-teal-700 transition-colors font-medium"
          >
            Home
          </Link>
          <Link
            to="/services"
            className="text-gray-700 hover:text-teal-700 transition-colors font-medium"
          >
            Services
          </Link>
          <Link
            to="/about"
            className="text-gray-700 hover:text-teal-700 transition-colors font-medium"
          >
            About Us
          </Link>
          <Link
            to="/contact"
            className="text-gray-700 hover:text-teal-700 transition-colors font-medium"
          >
            Contact Us
          </Link>
          <a
            href="#privacy"
            className="text-gray-700 hover:text-teal-700 transition-colors font-medium"
          >
            Privacy Policies
          </a>
        </div>

        {/* Contact Info */}
        <div className="flex flex-wrap justify-center gap-8 mb-12 text-sm text-gray-600">
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-teal-700" />
            <span>Oksen Torgvet 1, 0580 Oslo</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-teal-700" />
            <span>Asserveien 1, 1400 Ski</span>
          </div>
          <div className="flex items-center gap-2">
            <Phone className="w-4 h-4 text-teal-700" />
            <span>98 04 44 44</span>
          </div>
          <div className="flex items-center gap-2">
            <Mail className="w-4 h-4 text-teal-700" />
            <span>hei@psykiater.no</span>
          </div>
        </div>

        {/* Social Media Icons */}
        <div className="flex justify-center gap-4 mb-12">
          <a
            href="#"
            className="w-12 h-12 rounded-full border-2 border-gray-300 flex items-center justify-center hover:border-teal-700 hover:bg-teal-50 transition-all group"
          >
            <Facebook className="w-5 h-5 text-gray-600 group-hover:text-teal-700" />
          </a>
          <a
            href="#"
            className="w-12 h-12 rounded-full border-2 border-gray-300 flex items-center justify-center hover:border-teal-700 hover:bg-teal-50 transition-all group"
          >
            <Linkedin className="w-5 h-5 text-gray-600 group-hover:text-teal-700" />
          </a>
          <a
            href="#"
            className="w-12 h-12 rounded-full border-2 border-gray-300 flex items-center justify-center hover:border-teal-700 hover:bg-teal-50 transition-all group"
          >
            <Instagram className="w-5 h-5 text-gray-600 group-hover:text-teal-700" />
          </a>
          <a
            href="#"
            className="w-12 h-12 rounded-full border-2 border-gray-300 flex items-center justify-center hover:border-teal-700 hover:bg-teal-50 transition-all group"
          >
            <X className="w-5 h-5 text-gray-600 group-hover:text-teal-700" />
          </a>
        </div>

        {/* Bottom Copyright Section */}
        <div className="border-t border-gray-200 pt-8">
          <div className="flex flex-wrap justify-between items-center text-sm text-gray-600 gap-4">
            <div className="flex items-center gap-2">
              <Globe className="w-4 h-4" />
              <span>2020 - 2026 Psykiater.no</span>
            </div>
            <div>
              <span>Designed & Developed By Systim</span>
            </div>
            <div className="flex gap-6">
              <a
                href="#sitemap"
                className="hover:text-teal-700 transition-colors"
              >
                Sitemap
              </a>
              <a
                href="#privacy"
                className="hover:text-teal-700 transition-colors"
              >
                Privacy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
