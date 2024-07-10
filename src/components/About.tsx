import React, { useRef, useEffect, useState } from "react";
import aboutImg from "../assets/image/about.jpg";
import "../About.css";

const api_key: string = import.meta.env.VITE_NASA_API_KEY as string;
const statsEndpoint: string = `https://api.nasa.gov/planetary/apod?api_key=${api_key}`;

interface ApodData {
  title: string;
  explanation: string;
  date: string;
  url: string;
}

const About: React.FC = () => {
  const imageRef = useRef<HTMLImageElement>(null);
  const [isImageVisible, setIsImageVisible] = useState(false);
  const [apodData, setApodData] = useState<ApodData | null>(null);
  const [loadingAPOD, setLoadingAPOD] = useState(true);
  const [errorAPOD, setErrorAPOD] = useState(false);

  useEffect(() => {
    const fetchAPODData = async () => {
      try {
        const response = await fetch(
          `https://api.nasa.gov/planetary/apod?api_key=${api_key}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch APOD data");
        }
        const data: ApodData = await response.json();
        setApodData(data);
        setLoadingAPOD(false);
      } catch (error) {
        console.error("Error fetching APOD data:", error);
        setErrorAPOD(true);
        setLoadingAPOD(false);
      }
    };

    fetchAPODData();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const element = imageRef.current;
      if (element) {
        const rect = element.getBoundingClientRect();
        const isVisible = rect.top <= window.innerHeight * 0.75;
        if (isVisible) {
          setIsImageVisible(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto my-8">
      {/* About text */}
      <div className="md:w-11/12 mx-auto flex flex-col md:flex-row justify-between items-center gap-12" id="about">
        <div className="md:w-2/5 relative mt-16">
          <img
            ref={imageRef}
            src={aboutImg}
            alt="About"
            className={`about-image rounded-lg shadow-md transition duration-300 transform ${isImageVisible ? "scale-105" : ""
              }`}
          />
        </div>
        <div className="md:w-3/5 mx-auto">
          <h2 className="text-4xl text-brandPrimary font-semibold mb-4 md:w-4/5">About</h2>
          <p className="text-sm text-gray-600 mb-8">
            Welcome to SpaceWonders, your portal to the cosmos through NASA's Astronomy Picture of the Day (APOD) API.
            We're dedicated to bringing you the latest and most breathtaking images, videos, and insights from the
            universe. Whether you're a space enthusiast, educator, or simply curious, SpaceWonders offers an easy-to-use
            platform to explore the wonders of space.
          </p>
          <p className="text-sm text-gray-600 mb-8">
            Join us on an extraordinary journey through the universe, where every day brings a new celestial marvel.
            Experience the beauty and mysteries of space with SpaceWonders and let your curiosity reach new heights.
          </p>
        </div>
      </div>

      {/* APOD Section */}
      {loadingAPOD && <p className="text-center">Loading APOD data...</p>}
      {errorAPOD && (
        <p className="text-center text-red-500 mt-10">Failed to load APOD data. Please try again later.</p>
      )}
      {apodData && (
        <div className="md:w-11/12 mx-auto flex flex-col md:flex-row justify-between items-center gap-12 mt-16">
          <div className="md:w-3/5 mx-auto">
            <h2 className="text-4xl text-brandPrimary font-semibold mb-4 md:w-4/5">Astronomy Picture of the Day</h2>
            <h4 className="mb-5 text-1xl font-semibold">{apodData.title}</h4>
            <p className="text-sm text-gray-600 mb-8">{apodData.explanation}</p>
            <p className="text-sm text-gray-600 mb-8">
              <strong>Date:</strong> {apodData.date}
            </p>
          </div>
          <div className="md:w-2/5 relative">
            <img
              src={apodData.url}
              alt={apodData.title}
              className="apod-image rounded-lg shadow-md transition duration-300 transform"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default About;
