import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    appointmentType: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
      appointmentType: "",
    });
  };

  const contactInfo = [
    {
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
          <path
            fillRule="evenodd"
            d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
            clipRule="evenodd"
          />
        </svg>
      ),
      title: "Διεύθυνση",
      details: ["Λεωφ. Κηφισίας 123", "15123 Μαρούσι, Αθήνα"],
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
          <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
        </svg>
      ),
      title: "Τηλέφωνο",
      details: ["+30 210 123 4567", "+30 694 123 4567"],
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
          <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
          <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
        </svg>
      ),
      title: "Email",
      details: [
        "info@filia-dimitriadou.gr",
        "appointments@filia-dimitriadou.gr",
      ],
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
            clipRule="evenodd"
          />
        </svg>
      ),
      title: "Ώρες Λειτουργίας",
      details: [
        "Δευ, Τρι, Πεμ, Παρ: 9:00-17:00",
        "Τετ: Μόνο νοσοκομείο ΜΗΤΕΡΑ",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-purple-800 mb-4 tracking-tight">
            Επικοινωνία
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Επικοινωνήστε μαζί μας για ραντεβού ή για οποιαδήποτε ερώτηση
            σχετικά με την υγεία του παιδιού σας.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-purple-100">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                Στείλτε μας μήνυμα
              </h3>

              <div className="space-y-6">
                {/* Name and Email Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Ονοματεπώνυμο *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 bg-gray-50 focus:bg-white"
                      placeholder="Το όνομά σας"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 bg-gray-50 focus:bg-white"
                      placeholder="email@example.com"
                    />
                  </div>
                </div>

                {/* Phone and Appointment Type */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Τηλέφωνο
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 bg-gray-50 focus:bg-white"
                      placeholder="+30 210 123 4567"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Τύπος Ραντεβού
                    </label>
                    <select
                      name="appointmentType"
                      value={formData.appointmentType}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 bg-gray-50 focus:bg-white"
                    >
                      <option value="">Επιλέξτε τύπο</option>
                      <option value="private">Ιδιωτικό Ιατρείο</option>
                      <option value="hospital">Νοσοκομείο ΜΗΤΕΡΑ</option>
                      <option value="telemedicine">Τηλεϊατρική</option>
                      <option value="emergency">Επείγον</option>
                    </select>
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Θέμα *
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 bg-gray-50 focus:bg-white"
                    placeholder="Συνοπτικά το θέμα του μηνύματος"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Μήνυμα *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 bg-gray-50 focus:bg-white resize-none"
                    placeholder="Περιγράψτε λεπτομερώς την ερώτηση ή το αίτημά σας..."
                  />
                </div>

                {/* Submit Button */}
                <button
                  onClick={handleSubmit}
                  className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold py-4 px-8 rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 text-md md:text-lg"
                >
                  Αποστολή Μηνύματος
                  <svg
                    className="inline-block w-5 h-5 ml-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                  </svg>
                </button>

                {/* Privacy Notice */}
                <p className="text-sm text-gray-500 text-center">
                  Τα προσωπικά σας δεδομένα προστατεύονται σύμφωνα με τον GDPR
                </p>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {contactInfo.map((info, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-lg p-6 border border-purple-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg flex items-center justify-center text-white flex-shrink-0">
                      {info.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800 mb-2">
                        {info.title}
                      </h4>
                      {info.details.map((detail, idx) => (
                        <p key={idx} className="text-gray-600 text-sm">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Map Placeholder */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-purple-100">
              <div className="h-64 bg-gradient-to-br from-purple-100 to-blue-100 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <svg
                      className="w-8 h-8 text-purple-600"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <h4 className="text-lg font-semibold text-gray-700 mb-2">
                    Χάρτης Τοποθεσίας
                  </h4>
                  <p className="text-gray-500">Λεωφ. Κηφισίας 123, Μαρούσι</p>
                </div>
              </div>
            </div>

            {/* Emergency Contact */}
            <div className="bg-gradient-to-r from-red-500 to-red-600 rounded-2xl p-6 text-white shadow-xl">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">
                    Επείγοντα Περιστατικά
                  </h4>
                  <p className="text-red-100 mb-2">
                    Για επείγουσες καταστάσεις καλέστε:
                  </p>
                  <p className="text-xl font-bold">+30 210 123 4567</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Contact;
