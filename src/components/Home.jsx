import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import banner_1 from "../assets/image/banner_1.jpg";
import banner_2 from "../assets/image/banner_2.jpg"; // Add more images as needed
import {
  FaRocket,
  FaSatellite,
  FaMeteor,
  FaSpaceShuttle,
  FaUserAstronaut,
  FaArrowLeft,
  FaArrowRight,
} from "react-icons/fa";
import "../assets/styles/Home.css"; // Import the CSS file for additional styling

const Home = () => {
  const slides = [
    {
      id: 1,
      title: "Discover the Galaxy",
      subtitle: "From 9 years of exploration",
      image: banner_1,
      textFirst: true,
    },
    {
      id: 2,
      title: "Explore the Universe",
      subtitle: "Unveiling the mysteries of space",
      image: banner_2,
      textFirst: false,
    },
    // Add more slides as needed
  ];

  return (
    <div className="bg-neutralSilver min-h-screen flex items-center justify-center text-white relative overflow-hidden">
      <div className="floating-icons">
        <FaRocket className="floating-icon icon-rocket" />
        <FaSatellite className="floating-icon icon-satellite" />
        <FaMeteor className="floating-icon icon-meteor" />
        <FaSpaceShuttle className="floating-icon icon-shuttle" />
        <FaUserAstronaut className="floating-icon icon-astronaut" />
      </div>
      <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto w-full">
        <Carousel
          showThumbs={false}
          showStatus={false}
          autoPlay
          infiniteLoop
          emulateTouch
          className="carousel-container"
          renderArrowPrev={(onClickHandler, hasPrev, label) =>
            hasPrev && (
              <button
                type="button"
                onClick={onClickHandler}
                title={label}
                className="carousel-arrow left-arrow"
              >
                <FaArrowLeft />
              </button>
            )
          }
          renderArrowNext={(onClickHandler, hasNext, label) =>
            hasNext && (
              <button
                type="button"
                onClick={onClickHandler}
                title={label}
                className="carousel-arrow right-arrow"
              >
                <FaArrowRight />
              </button>
            )
          }
        >
          {slides.map((slide) => (
            <div
              key={slide.id}
              className="flex flex-col md:flex-row items-center justify-between gap-12"
            >
              {slide.textFirst ? (
                <>
                  {/* Hero section text */}
                  <div className="md:w-1/2 text-center md:text-left">
                    <h1 className="text-5xl font-semibold mb-4 leading-snug animate-fade-in">
                      {slide.title}
                      <span className="text-brandPrimary block">
                        {slide.subtitle}
                      </span>
                    </h1>
                    <p className="text-lg mb-6">
                      Join us on a journey through the vastness of space and
                      uncover the secrets of the universe.
                    </p>
                    <a
                      href="#explore"
                      className="bg-brandPrimary text-white py-2 px-4 rounded-lg inline-block hover:bg-brandPrimaryDark transition duration-300"
                    >
                      Explore Now
                    </a>
                  </div>
                  {/* Hero section image */}
                  <div className="md:w-1/2">
                    <img
                      src={slide.image}
                      alt={slide.title}
                      className="rounded-lg shadow-lg w-full md:w-2/3"
                    />
                  </div>
                </>
              ) : (
                <>
                  {/* Hero section image */}
                  <div className="md:w-1/2">
                    <img
                      src={slide.image}
                      alt={slide.title}
                      className="rounded-lg shadow-lg w-full md:w-2/3"
                    />
                  </div>
                  {/* Hero section text */}
                  <div className="md:w-1/2 text-center md:text-left">
                    <h1 className="text-5xl font-semibold mb-4 leading-snug animate-fade-in">
                      {slide.title}
                      <span className="text-brandPrimary block">
                        {slide.subtitle}
                      </span>
                    </h1>
                    <p className="text-lg mb-6">
                      Join us on a journey through the vastness of space and
                      uncover the secrets of the universe.
                    </p>
                    <a
                      href="#explore"
                      className="bg-brandPrimary text-white py-2 px-4 rounded-lg inline-block hover:bg-brandPrimaryDark transition duration-300"
                    >
                      Explore Now
                    </a>
                  </div>
                </>
              )}
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Home;
