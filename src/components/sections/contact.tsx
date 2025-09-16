
"use client";
/* eslint-disable react/no-unescaped-entities */
import { EnvelopeIcon } from "@heroicons/react/24/solid";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Link from "next/link";

const ContactUs = () => {
  return (
    <section id="contact" className="relative w-full">
      <div className="absolute inset-0 w-full h-full bg-no-repeat bg-cover bg-center z-0"></div>
      <div className="relative flex flex-col space-y-12 mx-auto p-6 lg:px-[5%] lg:container bg-white/20">
        <div className="flex flex-col items-center justify-center relative z-10 px-4 pt-12">
          <h1 className="md:text-4xl text-2xl text-center font-bold text-blue-950 mt-2">
            CONNECT WITH US
          </h1>
          <p className="text-sm text-blue-900 text-center mt-4 max-w-xl">
            We'd love to hear from you! Whether you have questions, feedback, or
            want to collaborate, you can easily reach us through email, GitHub,
            or LinkedIn. Let's build something amazing together.
          </p>
        </div>

        <div className="flex md:flex-row flex-col items-center justify-center relative z-10 gap-12">
          <div className="hidden lg:flex flex-col items-start justify-start w-full md:w-1/2 space-y-6">
            {/* Email */}
            <div className="flex items-center">
              <EnvelopeIcon className="h-6 w-6 text-blue-950 mr-3" />
              <span className="text-sm text-blue-950">support@objectdetector.app</span>
            </div>

            {/* GitHub */}
            <div className="flex items-center">
              <FaGithub className="h-6 w-6 text-blue-950 mr-3" />
              <Link
                href="https://github.com/Blard-omu"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-black hover:underline"
              >
                github.com
              </Link>
            </div>

            {/* LinkedIn */}
            <div className="flex items-center">
              <FaLinkedin className="h-6 w-6 text-blue-950 mr-3" />
              <Link
                href="https://linkedin.com/in/peteromu5239"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-black hover:underline"
              >
                linkedin.com
              </Link>
            </div>
          </div>

          <div className="w-full md:w-1/2 bg-gray-50 p-6 rounded-lg shadow-lg">
            <form className="flex flex-col space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="p-3 border border-gray-300 rounded-md"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="p-3 border border-gray-300 rounded-md"
              />
              <textarea
                rows={5}
                placeholder="Your Message"
                className="p-3 border border-gray-300 rounded-md min-h-[100px] max-h-[250px]"
              ></textarea>

              <Link
                href="/coming-soon"
                className="bg-blue-950 text-white px-6 py-3 rounded-md hover:bg-blue-900 transition-all text-center"
              >
                Send Message
              </Link>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;

