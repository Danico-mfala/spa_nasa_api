import React, { useState, useEffect } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import axios from "axios";
import "../Planet.css";

const api_key = import.meta.env.VITE_NASA_API_KEY;

const Planet = () => {
  const [planets, setPlanets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchPlanets = async () => {
      try {
        const response = await axios.get(
          `https://api.nasa.gov/planetary/apod?api_key=${api_key}&count=6`
        );
        setPlanets(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching planets:", error);
        setError(true);
        setLoading(false);
      }
    };

    fetchPlanets();
  }, []);

  // State to track flipped state of each card
  const [flippedIndex, setFlippedIndex] = useState(null);

  // Toggle flip state
  const handleCardFlip = (index) => {
    setFlippedIndex(index === flippedIndex ? null : index);
  };

  return (
    <div className="md:px-14 px-4 py-16 max-w-screen-2xl mx-auto" id="planet">
      <div className="text-center my-8">
        <h2 className="text-4xl text-neutralDGrey font-semibold mb-2">
          Explore Planets
        </h2>
        <p className="text-neutralGrey">
          Discover the diverse worlds of our solar system, from the majestic gas
          giants to the rocky
        </p>
      </div>
      {loading && (
        <div className="text-center">
          <p>Loading...</p>
        </div>
      )}
      {error && (
        <div className="text-center">
          <p>Failed to load images. Please try again later.</p>
        </div>
      )}
      {!loading && !error && (
        <>
          {/* Planets carousel */}
          <div className="my-12">
            <Carousel
              showThumbs={false}
              showStatus={false}
              autoPlay
              infiniteLoop
              centerMode
              centerSlidePercentage={25}
              emulateTouch
              className="gap-12"
            >
              {planets.map((planet, index) => (
                <div
                  key={index}
                  className="logo-container flex items-center justify-center relative group"
                >
                  <img
                    src={planet.url}
                    alt={planet.title}
                    className="h-80 md:h-96 lg:h-108 xl:h-120 object-cover rounded-lg"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = "/src/assets/fallback_image.png";
                    }}
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-white text-lg font-semibold p-2 bg-black bg-opacity-75 rounded-md">
                      {planet.title}
                    </span>
                  </div>
                </div>
              ))}
            </Carousel>
          </div>
        </>
      )}
    </div>
  );
};

export default Planet;