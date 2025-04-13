import { useState } from "react";
import { Link } from "react-router";
import companyLogo from '../assets/companylogo2.png'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 bg-white shadow-md w-full z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            {/* <Link to="/" className="text-2xl font-bold text-blue-600">
              nearMartX
            </Link> */}
            <Link to="/" className="text-2xl font-bold text-blue-600">
              <img className="h-10 w-20" src={companyLogo} alt="nearMartX"/>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            <Link to="/" className="text-gray-600 hover:text-blue-600">
              Home
            </Link>
            <Link to="/products" className="text-gray-600 hover:text-blue-600">
              Products
            </Link>
            <Link to="/about" className="text-gray-600 hover:text-blue-600">
              About
            </Link>
            <Link to="/contact" className="text-gray-600 hover:text-blue-600">
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              className="text-gray-600 hover:text-blue-600 focus:outline-none"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="flex flex-col space-y-2 pb-4 border-t border-gray-200">
              <Link to="/" className="text-gray-600 hover:text-blue-600 py-2">
                Home
              </Link>
              <Link to="/products" className="text-gray-600 hover:text-blue-600 py-2">
                Products
              </Link>
              <Link to="/about" className="text-gray-600 hover:text-blue-600 py-2">
                About
              </Link>
              <Link to="/contact" className="text-gray-600 hover:text-blue-600 py-2">
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
