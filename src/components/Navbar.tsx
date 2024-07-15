import React, { useEffect, useState } from "react";
import logo from "../assets/image/logo.png";
import SearchResults from "./SearchResults";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FaTimes, FaBars } from "react-icons/fa";
import { MdOutlineSearch } from "react-icons/md";

interface NavItem {
  link: string;
  path: string;
}

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isSticky, setIsSticky] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navItems: NavItem[] = [
    { link: "Home", path: "" },
    { link: "About", path: "about" },
    { link: "Planet", path: "planet" },
    { link: "Gallery", path: "gallery" },
    { link: "Faq", path: "faq" },
    { link: "Contact", path: "contact" },
  ];

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formattedDate = selectedDate
      ? selectedDate.toISOString().split("T")[0]
      : null;

    const api_key = import.meta.env.VITE_NASA_API_KEY as string;
    let apiUrl = `https://api.nasa.gov/planetary/apod?api_key=${api_key}`;

    if (formattedDate) {
      apiUrl += `&date=${formattedDate}`;
    } else if (!searchQuery) {
      setError("Please enter a search query or select a date.");
      return;
    }

    try {
      const response = await fetch(apiUrl);
      if (!response.ok) {
        throw new Error("Failed to fetch APOD data");
      }
      const data = await response.json();
      if (data.length === 0) {
        setError("No results found.");
        setSearchResults([]);
      } else {
        setSearchResults([data]);
        setError(null);
        setIsModalOpen(true);
      }
    } catch (error) {
      console.error("Error fetching APOD data:", error);
      setSearchResults([]);
      setError("Failed to fetch data. Please try again later.");
    }
  };

  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  // Function to handle smooth scroll
  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    toggleMenu(); // Close menu if open (for mobile view)
  };

  return (
    <header
      className={`w-full ${isSticky ? "bg-white shadow-md text-black" : "bg-gray-900 text-white"
        } fixed top-0 left-0 right-0 z-50`}
    >
      <div className="flex justify-between items-center text-base gap-8">
        <nav className="container mx-auto flex justify-between items-center p-4">
          <a
            href="#"
            className={`text-2xl font-semibold flex items-center space-x-3 ${isSticky ? "text-black" : "text-white"
              }`}
          >
            <img src={logo} alt="logo" className="w-10 inline-block" />
            <span>Spa</span>
          </a>
          <ul className="md:flex space-x-12 hidden">
            {navItems.map(({ link, path }) => (
              <a
                href={`#${path}`}
                key={path}
                onClick={(e) => handleSmoothScroll(e, path)}
                className={`block text-base ${isSticky ? "text-black" : "text-white"
                  } hover:text-brandPrimary`}
              >
                {link}
              </a>
            ))}
          </ul>
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className={`text-brandPrimary focus:outline-none ${isSticky ? "text-black" : "text-white"
                }`}
            >
              {isMenuOpen ? (
                <FaTimes className="h-6 w-6" />
              ) : (
                <FaBars className="h-6 w-6" />
              )}
            </button>
          </div>

          <div className="hidden lg:flex items-center space-x-4">
            <form
              onSubmit={handleSearchSubmit}
              className="flex items-center space-x-2"
            >
              <DatePicker
                selected={selectedDate}
                onChange={handleDateChange}
                dateFormat="yyyy-MM-dd"
                placeholderText="Select Date"
                className="py-2 px-4 rounded bg-gray-200 text-gray-900 focus:outline-none focus:bg-white focus:shadow-md transition-all duration-300"
              />
              <button
                type="submit"
                className="bg-brandPrimary flex gap-1 text-white py-2 px-4 rounded-lg transition duration-300 hover:bg-gray-900"
              >
                Search <MdOutlineSearch size={18} />
              </button>
            </form>
          </div>
        </nav>
      </div>
      {isMenuOpen && (
        <ul className="md:hidden bg-brandPrimary flex flex-col space-y-4 p-4">
          {navItems.map(({ link, path }) => (
            <a
              href={`#${path}`}
              key={path}
              onClick={(e) => handleSmoothScroll(e, path)}
              className="block text-base text-white hover:text-brandPrimary"
            >
              {link}
            </a>
          ))}
          <form
            onSubmit={handleSearchSubmit}
            className="flex flex-col space-y-2"
          >
            <DatePicker
              selected={selectedDate}
              onChange={handleDateChange}
              dateFormat="yyyy-MM-dd"
              placeholderText="Select Date"
              className="py-2 px-4 h-full w-full rounded bg-gray-200 text-gray-900 focus:outline-none focus:bg-white focus:shadow-md transition-all duration-300"
            />
            <button
              type="submit"
              className="bg-neutralDGrey gap-1 flex items-center justify-center  text-white py-2 px-4 rounded-lg transition duration-300 hover:bg-gray-900"
            >
              Search <MdOutlineSearch size={18} />
            </button>
          </form>
        </ul>
      )}
      {error && <p className="text-red-500 text-center mt-4">{error}</p>}
      {searchResults.length > 0 && (
        <SearchResults
          results={searchResults}
          isOpen={isModalOpen}
          onClose={closeModal}
        />
      )}
    </header>
  );
};

export default Navbar;
