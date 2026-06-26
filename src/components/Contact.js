const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-10">
          Contact Us
        </h1>

        <div className="grid md:grid-cols-2 gap-10 bg-white rounded-2xl shadow-lg p-8">

          {/* Left Section */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">
              Get in Touch
            </h2>

            <p className="text-gray-600 mb-6">
              We'd love to hear from you! Whether you have a question,
              feedback, or need support, feel free to contact us.
            </p>

            <div className="space-y-4">
              <div>
                <h3 className="font-semibold">📧 Email</h3>
                <p className="text-gray-600">
                  support@foodyhub.com
                </p>
              </div>
            </div>
          </div>

          {/* Right Section */}
          <form className="space-y-5">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full border rounded-lg p-3 outline-none focus:ring-2 focus:ring-orange-500"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full border rounded-lg p-3 outline-none focus:ring-2 focus:ring-orange-500"
            />

            <input
              type="text"
              placeholder="Subject"
              className="w-full border rounded-lg p-3 outline-none focus:ring-2 focus:ring-orange-500"
            />

            <textarea
              rows="5"
              placeholder="Your Message"
              className="w-full border rounded-lg p-3 outline-none focus:ring-2 focus:ring-orange-500 resize-none"
            ></textarea>

            <button
              className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg font-semibold transition"
            >
              Send Message
            </button>
          </form>

        </div>
      </div>
    </div>
  );
};

export default Contact;