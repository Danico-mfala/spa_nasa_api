import React from "react";
import { IoMdSend } from "react-icons/io";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaGithub } from "react-icons/fa";

const Footer: React.FC = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <footer className="bg-gray-900 text-white py-10" id="contact">
      <div className="container mx-auto px-4">
        <div className="md:flex md:justify-between items-center md:px-12 sm:px-8 px-4">
          <h1 className="lg:text-4xl text-3xl md:mb-0 mb-6 lg:leading-normal font-semibold md:w-2/5">
            <span className="text-brandPrimary">Subscribe to Our</span> Newsletter
          </h1>

          <div className="flex items-center bg-gray-200 rounded-full p-2 transition duration-300 focus-within:bg-white focus-within:shadow-md">
            <input
              type="text"
              placeholder="Enter your email"
              className="bg-gray-200  outline-none text-gray-900 border-none focus:ring-0 focus:ring-offset-0"
            />
            <button className="bg-brandPrimary text-white rounded-full p-2 ml-2 transition duration-300 hover:bg-gray-900">
              <IoMdSend size={18} />
            </button>



          </div>
        </div>

        <div className="mt-10 border-t border-gray-700 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0 text-center md:text-left">
              <p className="text-gray-400">
                &copy; {new Date().getFullYear()} Created by{" "}
                <a href="https://yourportfolio.com" className="hover:text-brandPrimary">
                  Danico Mfala
                </a>
              </p>
              <p className="text-gray-400">All rights reserved.</p>
            </div>

            <div className="flex space-x-4 mb-4 md:mb-0">
              <a
                href="https://www.facebook.com/profile.php?id=100005735594141"
                className="text-gray-400 hover:text-brandPrimary transition duration-200"
                aria-label="Facebook"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://x.com/mfaladan"
                className="text-gray-400 hover:text-brandPrimary transition duration-200"
                aria-label="Twitter"
              >
                <FaTwitter />
              </a>
              <a
                href="https://www.linkedin.com/in/mfala-dan-19ab9917b/"
                className="text-gray-400 hover:text-brandPrimary transition duration-200"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn />
              </a>
              <a
                href="https://github.com/Danico-mfala"
                className="text-gray-400 hover:text-brandPrimary transition duration-200"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>
            </div>

            <nav className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4">
              <button
                onClick={() => scrollToSection("about")}
                className="text-gray-400 hover:text-brandPrimary transition duration-200"
              >
                About Us
              </button>
              <button
                onClick={() => scrollToSection("gallery")}
                className="text-gray-400 hover:text-brandPrimary transition duration-200"
              >
                Gallery
              </button>
              <button
                onClick={() => scrollToSection("planet")}
                className="text-gray-400 hover:text-brandPrimary transition duration-200"
              >
                Planet
              </button>
              <button
                onClick={() => scrollToSection("faq")}
                className="text-gray-400 hover:text-brandPrimary transition duration-200"
              >
                Faq
              </button>
              <button
                onClick={() => scrollToSection("home")}
                className="text-gray-400 hover:text-brandPrimary transition duration-200"
              >
                Home
              </button>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
