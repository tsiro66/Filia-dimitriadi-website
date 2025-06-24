const Services = () => {
  const services = [
    {
      title: "ΙΔΙΩΤΙΚΟ ΙΑΤΡΕΙΟ",
      description:
        "Τακτική παρακολούθηση παιδιών με ενδοκρινολογικές παθήσεις, σακχαρώδη διαβήτη, παχυσαρκία και διαταραχές μεταβολισμού.",
      schedule: "Δευτέρα, Τρίτη, Πέμπτη και Παρασκευή κατόπιν ραντεβού",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path
            fillRule="evenodd"
            d="M5.05 3.636a1 1 0 010 1.414 7 7 0 000 9.9 1 1 0 11-1.414 1.414 9 9 0 010-12.728 1 1 0 011.414 0zm9.9 0a1 1 0 011.414 0 9 9 0 010 12.728 1 1 0 11-1.414-1.414 7 7 0 000-9.9 1 1 0 010-1.414zM7.879 6.464a1 1 0 010 1.414 3 3 0 000 4.243 1 1 0 11-1.415 1.414 5 5 0 010-7.07 1 1 0 011.415 0zm4.242 0a1 1 0 011.415 0 5 5 0 010 7.072 1 1 0 01-1.415-1.415 3 3 0 000-4.242 1 1 0 010-1.415zM10 9a1 1 0 011 1v.01a1 1 0 11-2 0V10a1 1 0 011-1z"
            clipRule="evenodd"
          />
        </svg>
      ),
      gradient: "from-purple-500 to-purple-700",
    },
    {
      title: "ΤΑΚΤΙΚΟ ΕΞΩΤΕΡΙΚΟ ΙΑΤΡΕΙΟ",
      description:
        "Τακτική παρακολούθηση στο Νοσοκομείο Παίδων ΜΗΤΕΡΑ με δυνατότητα εργαστηριακού και απεικονιστικού ελέγχου.",
      schedule: "Κάθε Δευτέρα και Τετάρτη κατόπιν ραντεβού",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
        </svg>
      ),
      gradient: "from-blue-500 to-blue-700",
    },
    {
      title: "ΗΜΕΡΗΣΙΑ ΝΟΣΗΛΕΙΑ",
      description:
        "Προγραμματισμένος εργαστηριακός και απεικονιστικός έλεγχος με εξειδικευμένες δοκιμασίες διέγερσης.",
      schedule: "Κατόπιν συνεννόησης στο Νοσοκομείο Παίδων ΜΗΤΕΡΑ",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path
            fillRule="evenodd"
            d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
            clipRule="evenodd"
          />
        </svg>
      ),
      gradient: "from-green-500 to-green-700",
    },
    {
      title: "ΠΟΛΥΔΥΝΑΜΗ ΟΜΑΔΑ PE&D",
      description:
        "Ολοκληρωμένη προσέγγιση με ομάδα ειδικών για ενδοκρινική υγεία, διατροφική ισορροπία και ευεξία.",
      schedule: "Ενδοκρινολόγος, διατροφολόγος, νοσηλεύτρια & παιδοψυχολόγος",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
        </svg>
      ),
      gradient: "from-indigo-500 to-indigo-700",
    },
    {
      title: "ΔΙΑΒΗΤΗΣ - ΕΞΑΤΟΜΙΚΕΥΜΕΝΗ ΘΕΡΑΠΕΙΑ",
      description:
        "24ωρη κάλυψη και πολύπλευρη προσέγγιση με ομάδα ειδικών εκπαιδευτών, διατροφολόγου και παιδοψυχολόγου.",
      schedule: "Διεθνώς αναγνωρισμένες πρακτικές",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path
            fillRule="evenodd"
            d="M7 2a1 1 0 00-.707 1.707L7 4.414v3.758a1 1 0 01-.293.707l-4 4C.817 14.769 2.156 18 4.828 18h10.343c2.673 0 4.012-3.231 2.122-5.121l-4-4A1 1 0 0113 8.172V4.414l.707-.707A1 1 0 0013 2H7zm2 6.172V4h2v4.172a3 3 0 00.879 2.12l1.027 1.028a4 4 0 00-2.171.102l-.47.156a4 4 0 01-2.53 0l-.563-.187a1.993 1.993 0 00-.114-.035l1.063-1.063A3 3 0 009 8.172z"
            clipRule="evenodd"
          />
        </svg>
      ),
      gradient: "from-red-500 to-red-700",
    },
    {
      title: "ΤΗΛΕΪΑΤΡΙΚΗ",
      description:
        "Παρέχεται συμβουλή εξ αποστάσεως για ασθενείς εκτός Αθηνών σχετικά με ενδοκρινολογικές παθήσεις.",
      schedule: "Κατόπιν συνεννόησης - Για διευκόλυνση οικογενειών",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z" />
        </svg>
      ),
      gradient: "from-teal-500 to-teal-700",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-purple-800 mb-4 tracking-tight">
            Οι Υπηρεσίες μας
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Προσφέρουμε ολοκληρωμένες υπηρεσίες παιδιατρικής ενδοκρινολογίας με
            εξατομικευμένη προσέγγιση και σύγχρονες θεραπευτικές μεθόδους.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 hover:-translate-y-2"
            >
              {/* Gradient Background Accent */}
              <div
                className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${service.gradient}`}
              ></div>

              {/* Content */}
              <div className="p-8">
                {/* Icon */}
                <div
                  className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  {service.icon}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-800 mb-4 group-hover:text-purple-700 transition-colors duration-300">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed mb-6 line-clamp-4">
                  {service.description}
                </p>

                {/* Schedule */}
                <div className="flex items-start space-x-3 p-4 bg-gradient-to-r from-gray-50 to-purple-50/30 rounded-lg border border-purple-100/50">
                  <svg
                    className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <p className="text-sm text-gray-700 font-medium">
                    {service.schedule}
                  </p>
                </div>
              </div>

              {/* Hover Effect Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 max-w-4xl mx-auto border border-purple-100">
            <h3 className="text-3xl font-bold text-purple-800 mb-4">
              Θέλετε να κλείσετε ραντεβού;
            </h3>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Επικοινωνήστε μαζί μας για να προγραμματίσουμε μια συνάντηση που
              ταιριάζει στις ανάγκες του παιδιού σας.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="group bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2">
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

              <button className="group border-2 border-purple-200 text-purple-700 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-purple-50 hover:border-purple-300 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2">
                Περισσότερες Πληροφορίες
                <svg
                  className="inline-block w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
