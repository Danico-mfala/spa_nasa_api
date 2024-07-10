import React, { useEffect, useState } from "react";
import logo from "../assets/image/logo.png";
import SearchResults from "./SearchResults";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

// react icons
import { FaTimes, FaBars } from "react-icons/fa";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [selectedDate, setSelectedDate] = useState(new Date());

  // Toggle menu
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

  // Navigation items array
  const navItems = [
    { link: "Home", path: "" },
    { link: "About", path: "about" },
    { link: "Planet", path: "planet" },
    { link: "Gallery", path: "gallery" },
    { link: "Faq", path: "faq" },
    { link: "Contact", path: "contact" },
  ];

  // Predefined search data
  const data = [
    "Astronomy Picture of the Day",
    "Mars Rover Photos",
    "NASA Missions",
    "International Space Station",
    "Hubble Telescope",
  ];

  // Handle search query change
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  // Handle search form submission
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery) {
      const results = data.filter((item) =>
        item.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setSearchResults(results);
    } else {
      setSearchResults([]);
    }
  };

  // Handle date change
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  // Fetch APOD data for selected date
  const fetchApodData = async () => {
    const formattedDate = selectedDate.toISOString().split("T")[0];
    const apiKey = "BRFVdbnVnXohe9akwu8LaIhsEZWhZnj7cFuGJb77";
    const apiUrl = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&date=${formattedDate}`;

    try {
      const response = await fetch(apiUrl);
      if (!response.ok) {
        throw new Error("Failed to fetch APOD data");
      }
      const data = await response.json();
      console.log(data); // Display fetched APOD data
      // Handle displaying the fetched data in your UI
    } catch (error) {
      console.error("Error fetching APOD data:", error);
      // Handle error state in UI
    }
  };

  return (
    <header
      className={`w-full ${
        isSticky ? "bg-white shadow-md" : "md:bg-transparent"
      } fixed top-0 left-0 right-0 z-50`}
    >
      <div className="flex justify-between items-center text-base gap-8">
        <nav className="container mx-auto flex justify-between items-center p-4">
          <a
            className="text-2xl font-semibold flex items-center space-x-3"
            href="#"
          >
            <img src={logo} alt="logo" className="w-10 inline-block" />
            <span className="text-[#263238]">SpaceWonders</span>
          </a>
          {/* Navigation items for large devices */}
          <ul className="md:flex space-x-12 hidden">
            {navItems.map(({ link, path }) => (
              <a
                href={`#${path}`}
                key={path}
                className="block text-base text-gray-900 hover:text-brandPrimary first:font-medium"
              >
                {link}
              </a>
            ))}
          </ul>
          {/* Menu button for small devices */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-neutralDGrey focus:outline-none focus:text-gray-500"
            >
              {isMenuOpen ? (
                <FaTimes className="h-6 w-6 text-neutralDGrey" />
              ) : (
                <FaBars className="h-6 w-6" />
              )}
            </button>
          </div>

          {/* Date picker or text input for selecting date */}
          <div className="hidden lg:flex items-center space-x-12">
            <DatePicker
              selected={selectedDate}
              onChange={handleDateChange}
              dateFormat="yyyy-MM-dd"
              className="py-2 pl-4 pr-10 rounded bg-gray-200 text-gray-900 focus:outline-none focus:bg-white focus:shadow-md transition-all duration-300"
            />
            <button
              onClick={fetchApodData}
              className="bg-gray-800 text-white py-2 px-4 rounded-lg transition duration-300 hover:bg-gray-900"
            >
              Fetch APOD
            </button>
          </div>
        </nav>
      </div>
      {/* Navigation items for small devices */}
      {isMenuOpen && (
        <ul className="md:hidden flex flex-col space-y-4 p-4">
          <div className={`space-y-4 px-4 mt-10 py-7 bg-brandPrimary`}>
            {navItems.map(({ link, path }) => (
              <a
                href={`#${path}`}
                key={path}
                className="block text-base text-white hover:text-brandPrimary first:font-medium"
                onClick={toggleMenu}
              >
                {link}
              </a>
            ))}
          </div>
        </ul>
      )}
      {/* Search results */}
      {searchResults.length > 0 && (
        <div className="container mx-auto mt-4">
          <SearchResults results={searchResults} />
        </div>
      )}
    </header>
  );
};

export default Navbar;
