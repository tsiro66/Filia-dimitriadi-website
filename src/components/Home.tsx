const Home = () => {
  return (
    <div className="min-h-screen flex items-center relative bg-gradient-to-br from-purple-50 via-white to-blue-50 pt-20">
      <div
        className="hidden lg:block absolute right-0 top-0 h-full w-1/2 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/homephoto.png')",
          backgroundPosition: "left center",
        }}
      >
        {/* Subtle overlay for better text contrast */}
      </div>

      <div className="w-full max-w-6xl relative z-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          {/* Added accent line */}

          <h1 className="text-left text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 text-gray-900 tracking-tight">
            Κλεισε ραντεβου με
          </h1>
          <h1 className="text-left text-4xl sm:text-5xl lg:text-6xl font-bold text-purple-800 mb-6 tracking-tight">
            Φιλία Δημητριαδη
          </h1>

          <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 max-w-2xl leading-relaxed font-light mb-8">
            Εδώ μπορείτε να βρείτε πληροφορίες για τις υπηρεσίες μας, τις
            παθήσεις που καλύπτουμε.
          </p>

          {/* Enhanced button with gradient and better styling */}
          <button className="group bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 ease-out">
            Κλείστε Ραντεβού
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
          </button>

          {/* Optional: Add some feature highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-12 pt-8 border-t border-gray-200">
            <div className="flex items-center justify-center space-x-3">
              <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                <svg
                  className="w-4 h-4 text-purple-600"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <span className="text-gray-700 font-medium">
                Εξειδικευμένη Φροντίδα
              </span>
            </div>

            <div className="flex items-center justify-center space-x-3">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                <svg
                  className="w-4 h-4 text-blue-600"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M12 2l3.09 6.26L22 9l-5 4.87L18.18 21 12 17.77 5.82 21 7 13.87 2 9l6.91-.74L12 2z" />
                </svg>
              </div>
              <span className="text-gray-700 font-medium">Έμπειρη Ομάδα</span>
            </div>

            <div className="flex items-center justify-center space-x-3">
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                <svg
                  className="w-4 h-4 text-green-600"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <span className="text-gray-700 font-medium">24/7 Υποστήριξη</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
