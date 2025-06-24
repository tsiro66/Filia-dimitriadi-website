import { useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import { FaChildren } from "react-icons/fa6";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <div className="w-full">
      <nav className="px-4 sm:px-8 lg:px-12 py-4 bg-white/90 backdrop-blur-md shadow-lg border-b border-purple-100/20 w-full fixed top-0 z-50">
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo */}
          <ScrollLink
            to="home"
            smooth={true}
            duration={500}
            className="flex items-center space-x-2 sm:space-x-4 cursor-pointer"
            onClick={closeMenu}
          >
            <div className="group flex items-center space-x-2 sm:space-x-4">
              {/* Fixed image path and improved styling */}

              <img
                src="/filia-logo.png"
                alt="Dr. Filia Dimitriadou Logo"
                className="h-8 w-8 sm:h-10 sm:w-10 object-contain group-hover:scale-105 group-hover:rotate-90 transition-transform duration-300 ease-in-out"
              />

              <div>
                <div className="text-gray-800 text-sm sm:text-md font-semibold">
                  Φιλία Δημητριαδη MD. FAAP
                </div>
                <div className="text-purple-700 text-sm sm:text-md font-medium">
                  Παιδοενδοκρινολόγος
                </div>
              </div>
            </div>
          </ScrollLink>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex justify-between items-center space-x-8 text-lg font-semibold text-gray-700">
            <ScrollLink
              to="about"
              smooth={true}
              duration={500}
              offset={-60}
              className="relative hover:text-purple-700 transition-all duration-300 ease-in-out cursor-pointer group"
            >
              Ομαδα
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-600 to-blue-500 group-hover:w-full transition-all duration-300"></span>
            </ScrollLink>
            <ScrollLink
              to="services"
              smooth={true}
              duration={500}
              className="relative hover:text-purple-700 transition-all duration-300 ease-in-out cursor-pointer group"
            >
              Υπηρεσίες
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-600 to-blue-500 group-hover:w-full transition-all duration-300"></span>
            </ScrollLink>
            <ScrollLink
              to="conditions"
              smooth={true}
              duration={500}
              className="relative hover:text-purple-700 transition-all duration-300 ease-in-out cursor-pointer group"
            >
              Παθήσεις
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-600 to-blue-500 group-hover:w-full transition-all duration-300"></span>
            </ScrollLink>
            <ScrollLink
              to="blog"
              smooth={true}
              duration={500}
              className="relative hover:text-purple-700 transition-all duration-300 ease-in-out cursor-pointer group"
            >
              Blog
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-600 to-blue-500 group-hover:w-full transition-all duration-300"></span>
            </ScrollLink>
            <ScrollLink
              to="contact"
              smooth={true}
              duration={500}
              className="relative hover:text-purple-700 transition-all duration-300 ease-in-out cursor-pointer group"
            >
              Επικοινωνία
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-600 to-blue-500 group-hover:w-full transition-all duration-300"></span>
            </ScrollLink>
          </div>

          {/* Right side - Icon and Mobile Menu Button */}
          <div className="flex items-center space-x-4">
            {/* Enhanced Icon */}
            <div className="w-10 h-10 bg-gradient-to-br from-purple-100 to-blue-100 rounded-full flex items-center justify-center hover:from-purple-200 hover:to-blue-200 hover:scale-105 transition-all duration-300 cursor-pointer">
              <FaChildren className="text-purple-600 text-lg" />
            </div>

            {/* Improved Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="lg:hidden flex flex-col justify-center items-center w-10 h-10 transition-colors duration-300"
              aria-label="Toggle mobile menu"
            >
              <span
                className={`block w-5 h-0.5 bg-gray-700 transform transition duration-300 ease-in-out ${
                  isOpen ? "rotate-45 translate-y-1.5" : ""
                }`}
              ></span>
              <span
                className={`block w-5 h-0.5 bg-gray-700 transform transition duration-300 ease-in-out my-1 ${
                  isOpen ? "opacity-0" : ""
                }`}
              ></span>
              <span
                className={`block w-5 h-0.5 bg-gray-700 transform transition duration-300 ease-in-out ${
                  isOpen ? "-rotate-45 -translate-y-1.5" : ""
                }`}
              ></span>
            </button>
          </div>
        </div>

        {/* Enhanced Mobile Menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="px-4 pt-4 pb-2 space-y-2 bg-white/95 backdrop-blur-sm border-t border-purple-100 mt-4 rounded-b-lg">
            <ScrollLink
              to="about"
              smooth={true}
              duration={500}
              offset={-80}
              className="block py-3 px-4 text-lg font-medium text-gray-700 hover:text-purple-700 hover:bg-purple-50 rounded-lg transition-all duration-300 cursor-pointer"
              onClick={closeMenu}
            >
              Ομαδα
            </ScrollLink>
            <ScrollLink
              to="services"
              smooth={true}
              duration={500}
              offset={-80}
              className="block py-3 px-4 text-lg font-medium text-gray-700 hover:text-purple-700 hover:bg-purple-50 rounded-lg transition-all duration-300 cursor-pointer"
              onClick={closeMenu}
            >
              Υπηρεσίες
            </ScrollLink>
            <ScrollLink
              to="conditions"
              smooth={true}
              duration={500}
              offset={-80}
              className="block py-3 px-4 text-lg font-medium text-gray-700 hover:text-purple-700 hover:bg-purple-50 rounded-lg transition-all duration-300 cursor-pointer"
              onClick={closeMenu}
            >
              Παθήσεις
            </ScrollLink>
            <ScrollLink
              to="blog"
              smooth={true}
              duration={500}
              offset={-80}
              className="block py-3 px-4 text-lg font-medium text-gray-700 hover:text-purple-700 hover:bg-purple-50 rounded-lg transition-all duration-300 cursor-pointer"
              onClick={closeMenu}
            >
              Blog
            </ScrollLink>
            <ScrollLink
              to="contact"
              smooth={true}
              duration={500}
              offset={-80}
              className="block py-3 px-4 text-lg font-medium text-gray-700 hover:text-purple-700 hover:bg-purple-50 rounded-lg transition-all duration-300 cursor-pointer"
              onClick={closeMenu}
            >
              Επικοινωνία
            </ScrollLink>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
