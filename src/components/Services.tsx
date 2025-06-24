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
            d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm0 4a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1z"
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
          <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
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
            d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V8z"
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
            d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
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
          <path
            fillRule="evenodd"
            d="M9.504 1.132a1 1 0 01.992 0l1.75 1a1 1 0 11-.992 1.736L10 3.152l-1.254.716a1 1 0 11-.992-1.736l1.75-1zM5.618 4.504a1 1 0 01-.372 1.364L5.016 6l.23.132a1 1 0 11-.992 1.736L4 7.723V8a1 1 0 01-2 0V6a.996.996 0 01.52-.878l1.734-.99a1 1 0 011.364.372zm8.764 0a1 1 0 011.364-.372l1.734.99A.996.996 0 0118 6v2a1 1 0 11-2 0v-.277l-.254.145a1 1 0 11-.992-1.736l.23-.132-.23-.132a1 1 0 01-.372-1.364zm-7 4a1 1 0 011.364-.372L10 8.848l1.254-.716a1 1 0 11.992 1.736L11 10.5v1.25a1 1 0 11-2 0V10.5l-1.246-.632a1 1 0 01-.372-1.364zM3 11a1 1 0 011 1v1.5a1 1 0 11-2 0V12a1 1 0 011-1zm14 0a1 1 0 011 1v1.5a1 1 0 11-2 0V12a1 1 0 011-1zm-9.5 4a1 1 0 01.992.132L10 15.848l1.508-.716a1 1 0 11.984 1.736L10 17.848l-2.492-1.98a1 1 0 01-.008-1.736z"
            clipRule="evenodd"
          />
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
              <button className="group bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
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

              <button className="group border-2 border-purple-200 text-purple-700 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-purple-50 hover:border-purple-300 transition-all duration-300">
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
