import { Link as ScrollLink } from "react-scroll";
import { FaChildren } from "react-icons/fa6";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Αρχική", target: "home" },
    { name: "Ομάδα", target: "about" },
    { name: "Υπηρεσίες", target: "services" },
    { name: "Παθήσεις", target: "conditions" },
    { name: "Blog", target: "blog" },
    { name: "Επικοινωνία", target: "contact" },
  ];

  const services = [
    "Ιδιωτικό Ιατρείο",
    "Εξωτερικό Ιατρείο ΜΗΤΕΡΑ",
    "Ημερήσια Νοσηλεία",
    "Πολυδύναμη Ομάδα PE&D",
    "Διαβητική Φροντίδα",
    "Τηλεϊατρική",
  ];

  const contactInfo = [
    {
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
          <path
            fillRule="evenodd"
            d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
            clipRule="evenodd"
          />
        </svg>
      ),
      text: "Λεωφ. Κηφισίας 123, Μαρούσι",
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
          <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
        </svg>
      ),
      text: "+30 210 123 4567",
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
          <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
          <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
        </svg>
      ),
      text: "info@filia-dimitriadou.gr",
    },
  ];

  const socialLinks = [
    {
      name: "Facebook",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      ),
      href: "#",
    },
    {
      name: "Instagram",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        </svg>
      ),
      href: "#",
    },
    {
      name: "LinkedIn",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
      href: "#",
    },
  ];

  return (
    <footer className="bg-gradient-to-br from-purple-50 via-white to-blue-50 border-t border-purple-100">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-100 to-blue-100 rounded-full flex items-center justify-center">
                <FaChildren className="text-purple-600 text-xl" />
              </div>
              <div>
                <div className="text-gray-800 text-lg font-bold">
                  Φιλία Δημητριάδου
                </div>
                <div className="text-purple-700 text-sm font-medium">
                  MD. FAAP
                </div>
              </div>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              Εξειδικευμένη φροντίδα σε παιδιά και εφήβους με ορμονικές
              διαταραχές. Προσφέρουμε ολοκληρωμένες υπηρεσίες παιδιατρικής
              ενδοκρινολογίας με σύγχρονες θεραπευτικές μεθόδους.
            </p>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 bg-white rounded-lg border border-purple-100 flex items-center justify-center text-purple-600 hover:bg-purple-50 hover:border-purple-200 transition-all duration-300 hover:scale-110"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold text-gray-800 mb-6">
              Γρήγορη Πλοήγηση
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <ScrollLink
                    to={link.target}
                    smooth={true}
                    duration={500}
                    offset={-100}
                    className="text-gray-600 hover:text-purple-700 transition-colors duration-300 cursor-pointer text-sm flex items-center group"
                  >
                    <svg
                      className="w-3 h-3 mr-2 text-purple-400 group-hover:text-purple-600 transition-colors"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {link.name}
                  </ScrollLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold text-gray-800 mb-6">Υπηρεσίες</h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li
                  key={index}
                  className="text-gray-600 text-sm flex items-start"
                >
                  <svg
                    className="w-3 h-3 mr-2 mt-1 text-purple-400 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-bold text-gray-800 mb-6">
              Επικοινωνία
            </h3>
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center text-purple-600 flex-shrink-0 mt-0.5">
                    {info.icon}
                  </div>
                  <span className="text-gray-600 text-sm leading-relaxed">
                    {info.text}
                  </span>
                </div>
              ))}

              {/* Office Hours */}
              <div className="flex items-start space-x-3 mt-6">
                <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 flex-shrink-0">
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div className="text-gray-600 text-sm">
                  <div className="font-medium text-gray-700 mb-1">
                    Ώρες Λειτουργίας
                  </div>
                  <div>Δευ, Τρι, Πεμ, Παρ: 9:00-17:00</div>
                  <div>Τετ: Μόνο ΜΗΤΕΡΑ</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-purple-100 bg-white/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-gray-600">
              © {currentYear} Φιλία Δημητριάδου - Παιδοενδοκρινολόγος. Όλα τα
              δικαιώματα διατηρούνται.
            </div>

            <div className="flex items-center space-x-6 text-sm">
              <a
                href="#"
                className="text-gray-600 hover:text-purple-700 transition-colors duration-300"
              >
                Πολιτική Απορρήτου
              </a>
              <span className="text-gray-400">|</span>
              <a
                href="#"
                className="text-gray-600 hover:text-purple-700 transition-colors duration-300"
              >
                Όροι Χρήσης
              </a>
              <span className="text-gray-400">|</span>
              <a
                href="#"
                className="text-gray-600 hover:text-purple-700 transition-colors duration-300"
              >
                GDPR
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
