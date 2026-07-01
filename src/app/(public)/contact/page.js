import React from "react";
import {
  FaLocationArrow,
  FaMailBulk,
  FaMailchimp,
  FaPhone,
  FaSearchLocation,
  FaVoicemail,
} from "react-icons/fa";
import { FaLocationPin, FaMapLocation, FaMessage } from "react-icons/fa6";

const ContactPage = () => {
  return (
    <section className="mt-6 px-4 md:px-8">
      <div className="grid lg:grid-cols-2 gap-8 items-start max-w-7xl max-lg:max-w-3xl mx-auto">
        <div className="bg-gray-50 rounded-lg p-6 shadow-xs border border-slate-300">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            Get in touch
          </h2>
          <p className="text-slate-600 text-base leading-relaxed">
            Feel free to contact us and we will get back to you as soon as
            possible
          </p>
          <form className="mt-8 space-y-4">
            <div>
              <label
                htmlFor="name"
                className="mb-2 text-slate-900 font-medium text-sm inline-block"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter Your Name"
                className="px-3 py-2.5 text-sm text-slate-900 w-full rounded-md bg-white outline-1 -outline-offset-1 outline-slate-300 focus:outline-2 focus:-outline-offset-2 focus:outline-blue-600"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="mb-2 text-slate-900 font-medium text-sm inline-block"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Your Email"
                className="px-3 py-2.5 text-sm text-slate-900 w-full rounded-md bg-white outline-1 -outline-offset-1 outline-slate-300 focus:outline-2 focus:-outline-offset-2 focus:outline-blue-600"
              />
            </div>
            <div>
              <label
                htmlFor="phone"
                className="mb-2 text-slate-900 font-medium text-sm inline-block"
              >
                Phone number
              </label>
              <input
                type="number"
                id="phone"
                name="phone"
                placeholder="+977 1234567890"
                className="px-3 py-2.5 text-sm text-slate-900 w-full rounded-md bg-white outline-1 -outline-offset-1 outline-slate-300 focus:outline-2 focus:-outline-offset-2 focus:outline-blue-600"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="mb-2 text-slate-900 font-medium text-sm inline-block"
              >
                Message
              </label>
              <textarea
                placeholder="Write message"
                rows={5}
                type="text"
                id="message"
                name="message"
                className="px-3 py-2.5 text-sm text-slate-900 w-full rounded-md bg-white outline-1 -outline-offset-1 outline-slate-300 focus:outline-2 focus:-outline-offset-2 focus:outline-blue-600"
                defaultValue={""}
              />
            </div>
            <button
              type="submit"
              className="w-full mt-2 py-2.5 px-4 text-sm rounded-md font-semibold cursor-pointer text-white border border-blue-600 bg-blue-600 hover:bg-blue-700 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
            >
              Send message
            </button>
          </form>
        </div>
        <div className="space-y-8">
          <div className="bg-white rounded-lg p-6 shadow-xs border border-slate-300">
            <h3 className="text-lg font-semibold text-slate-900 mb-8">
              Contact Information
            </h3>
            <div className="space-y-6">
              <div className="flex items-start space-x-3">
                <FaLocationPin className="text-blue-700" />
                <div>
                  <h4 className="font-semibold text-blue-700 text-sm mb-2">
                    Our Location
                  </h4>
                  <p className="text-slate-600 text-sm">Prithvi Path</p>
                  <p className="text-slate-600 text-sm mt-0.5">
                    Dharan 56700, Nepal
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <FaPhone className="text-blue-700" />
                <div>
                  <h4 className="font-semibold text-blue-700 text-sm mb-2">
                    Phone Number
                  </h4>
                  <p className="text-slate-600 text-sm">+977 1234567890</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <FaMailBulk className="text-blue-700" />
                <div>
                  <h4 className="font-semibold text-blue-700 text-sm mb-2">
                    Email Address
                  </h4>
                  <p className="text-slate-600 text-sm">contact@business.com</p>
                </div>
              </div>
            </div>
          </div>
          <div className="z-10 relative h-64 rounded-md overflow-hidden mt-12">
            <iframe
              src="https://maps.google.com/maps?q=Code+IT,+Prithvi+Path,+Dharan+56700&t=&z=13&ie=UTF8&iwloc=&output=embed"
              className="left-0 top-0 h-full w-full "
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
