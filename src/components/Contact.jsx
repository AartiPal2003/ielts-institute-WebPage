import React from "react";

const Contact = () => {
  return (
    <section className="bg-purple-50 py-12" id="contact">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-purple-900 text-center mb-6">
          Contact Us
        </h2>
        <p className="text-center text-gray-600 mb-10">
          Have questions or need more information? Fill out the form below or reach us at <a href="mailto:info@example.com" className="text-purple-600 underline">info@example.com</a>
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div className="flex flex-col space-y-4">
            <div>
              <h3 className="font-semibold text-purple-700">Business Hours</h3>
              <p>Monday - Friday: 9:00 AM - 6:00 PM (IST)

                <br></br>Saturday: 10:00 AM - 4:00 PM (IST)</p>
            </div>
            <div>
              <h3 className="font-semibold text-purple-700">Phone</h3>
              <p>+91 9030870876</p>
            </div>
            <div>
              <h3 className="font-semibold text-purple-700">Email</h3>
              <p>babycodeielts@gmail.com</p>
            </div>
          </div>

          {/* Contact Form */}
          <form className="bg-white shadow-lg rounded-lg p-6">
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-1">
                Name
              </label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="Your Name"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-1">
                Email
              </label>
              <input
                type="email"
                className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="Your Email"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-1">
                Message
              </label>
              <textarea
                className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="Write your message here"
                rows="4"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-purple-800 text-white px-6 py-2 rounded-lg hover:bg-purple-900 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
