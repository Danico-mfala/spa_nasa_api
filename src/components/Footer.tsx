import React from "react";
import { IoMdSend } from "react-icons/io";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaGithub } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-10" id="contact">
      <div className="container mx-auto px-4">
        <div className="md:flex md:justify-between items-center md:px-12 sm:px-8 px-4">
          <h1 className="lg:text-4xl text-3xl md:mb-0 mb-6 lg:leading-normal font-semibold md:w-2/5">
            <span className="text-brandPrimary">Reach Out</span> until you're
            ready
          </h1>
          <div>
            <input
              type="text"
              placeholder="Enter your email"
              className="text-gray-800 sm:w-72 w-full sm:mr-5 mr-1 lg:mb-0 mb-4 py-2.5 rounded px-2 focus:outline-none"
            />
            <button className="bg-brandPrimary text-white py-2.5 px-5 rounded">
              <IoMdSend />
            </button>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center mt-10 border-t border-gray-700 pt-6">
          <p className="text-gray-400 mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Created by{" "}
            <a href="" className="hover:text-brandPrimary">
              Danico Mfala
            </a>
          </p>
          <div className="flex space-x-4">
            <a
              href="https://www.facebook.com/profile.php?id=100005735594141"
              className="text-gray-400 hover:text-white"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://x.com/mfaladan"
              className="text-gray-400 hover:text-white"
            >
              <FaTwitter />
            </a>
            <a
              href="https://www.linkedin.com/in/mfala-dan-19ab9917b/"
              className="text-gray-400 hover:text-white"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="https://github.com/Danico-mfala"
              className="text-gray-400 hover:text-white"
            >
              <FaGithub />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
