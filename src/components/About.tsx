import { Link as ScrollLink } from "react-scroll";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-purple-800 mb-4 tracking-tight">
            Η Ομάδα
          </h2>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image Section */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-blue-400 rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
            <div className="relative bg-white rounded-2xl shadow-xl">
              <img
                src="/filia-about.jpg"
                alt="Φιλία Δημητριάδου  "
                className="w-full h-80 object-cover rounded-xl"
              />
            </div>
          </div>

          {/* Text Section */}
          <div className="space-y-8">
            <div className="prose prose-lg">
              <p className="text-xl leading-relaxed text-gray-700 font-light">
                Καλωσορίσατε στην παιδιατρική ενδοκρινολογική μας ομάδα.
              </p>
              <p className="text-lg leading-relaxed text-gray-600">
                Η{" "}
                <span className="font-semibold text-purple-700">
                  Φιλία Δημητριάδου
                </span>{" "}
                και οι συνεργάτες της προσφέρουν εξειδικευμένη φροντίδα σε
                παιδιά και εφήβους με ορμονικές διαταραχές, με έμφαση στην
                κατανόηση, την ασφάλεια και τη συνεργασία με την οικογένεια.
              </p>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-center space-x-3 p-4 bg-white rounded-lg shadow-sm border border-purple-100">
                <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                  <svg
                    className="w-4 h-4 text-purple-600"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <span className="text-gray-700 font-medium">
                  Εξειδικευμένη Φροντίδα
                </span>
              </div>

              <div className="flex items-center space-x-3 p-4 bg-white rounded-lg shadow-sm border border-blue-100">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                  <svg
                    className="w-4 h-4 text-blue-600"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" />
                  </svg>
                </div>
                <span className="text-gray-700 font-medium">
                  Συνεργασία Οικογένειας
                </span>
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-6">
              <ScrollLink
                to="contact"
                smooth={true}
                duration={500}
                offset={-60}
                className="group bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 cursor-pointer inline-flex items-center focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
              >
                Επικοινωνήστε μαζί μας
                <svg
                  className="inline-block w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </ScrollLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
