import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import banner_1 from "../assets/image/banner_1.jpg"; // Replace with actual space images
import banner_2 from "../assets/image/banner_2.jpg"; // Replace with actual space images
import {
  FaRocket,
  FaSatellite,
  FaMeteor,
  FaSpaceShuttle,
  FaUserAstronaut,
  FaArrowLeft,
  FaArrowRight,
} from "react-icons/fa";
import "../Home.css";

const Home = () => {
  const slides = [
    {
      id: 1,
      title: "Explore the Cosmos",
      subtitle:
        "Discover stunning images and captivating stories with SpaceWonders. Explore the universe through NASA's Astronomy.",
      image: banner_1,
      textFirst: true,
    },
    {
      id: 2,
      title: "Capture the Cosmos",
      subtitle:
        "Immerse yourself in the universe's wonders with SpaceWonders and journey through galaxies, stars, and beyond.",
      image: banner_2,
      textFirst: false,
    },
  ];

  return (
    <div className="bg-[#f1eeee] min-h-screen  bg-home-bg bg-cover bg-center flex items-center justify-center text-white relative overflow-hidden">
      <div className=" px-4 lg:px-14 max-w-screen-2xl mx-auto h-100 relative">
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
              className="relative flex flex-col md:flex-row items-center justify-between gap-12 p-4" // Add padding here
            >
              {slide.textFirst ? (
                <>
                  {/* Hero section text */}
                  <div className="md:w-1/2 text-center md:text-left">
                    <h1 className="text-5xl font-extrabold mb-4 leading-tight animate-fade-in">
                      {slide.title}
                      <span className="text-brandPrimary block text-3xl mt-4">
                        {slide.subtitle}
                      </span>
                    </h1>
                    <p className="text-lg mb-6">
                      Dive into the wonders of the cosmos daily with
                      SpaceWonders and NASA's Astronomy Picture of the Day
                    </p>
                  </div>
                  {/* Floating icons */}
                  <div className="absolute top-0 left-0 right-0 bottom-0 pointer-events-none z-10">
                    <div className="floating-icons">
                      <FaRocket
                        className="floating-icon icon-rocket"
                        style={{
                          top: `${Math.random() * 100}vh`,
                          left: `${Math.random() * 100}vw`,
                        }}
                      />
                      <FaSatellite
                        className="floating-icon icon-satellite"
                        style={{
                          top: `${Math.random() * 100}vh`,
                          left: `${Math.random() * 100}vw`,
                        }}
                      />
                      <FaMeteor
                        className="floating-icon icon-meteor"
                        style={{
                          top: `${Math.random() * 100}vh`,
                          left: `${Math.random() * 100}vw`,
                        }}
                      />
                      <FaSpaceShuttle
                        className="floating-icon icon-shuttle"
                        style={{
                          top: `${Math.random() * 100}vh`,
                          left: `${Math.random() * 100}vw`,
                        }}
                      />
                      <FaUserAstronaut
                        className="floating-icon icon-astronaut"
                        style={{
                          top: `${Math.random() * 100}vh`,
                          left: `${Math.random() * 100}vw`,
                        }}
                      />
                    </div>
                  </div>
                  {/* Hero section image */}
                  <div className="relative hero-image md:w-1/2">
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
                  <div className="relative hero-image md:w-1/2">
                    <img
                      src={slide.image}
                      alt={slide.title}
                      className="rounded-lg shadow-lg w-full md:w-2/3"
                    />
                  </div>
                  {/* Floating icons */}
                  <div className="absolute top-0 left-0 right-0 bottom-0 pointer-events-none z-10">
                    <div className="floating-icons">
                      <FaRocket
                        className="floating-icon icon-rocket"
                        style={{
                          top: `${Math.random() * 100}vh`,
                          left: `${Math.random() * 100}vw`,
                        }}
                      />
                      <FaSatellite
                        className="floating-icon icon-satellite"
                        style={{
                          top: `${Math.random() * 100}vh`,
                          left: `${Math.random() * 100}vw`,
                        }}
                      />
                      <FaMeteor
                        className="floating-icon icon-meteor"
                        style={{
                          top: `${Math.random() * 100}vh`,
                          left: `${Math.random() * 100}vw`,
                        }}
                      />
                      <FaSpaceShuttle
                        className="floating-icon icon-shuttle"
                        style={{
                          top: `${Math.random() * 100}vh`,
                          left: `${Math.random() * 100}vw`,
                        }}
                      />
                      <FaUserAstronaut
                        className="floating-icon icon-astronaut"
                        style={{
                          top: `${Math.random() * 100}vh`,
                          left: `${Math.random() * 100}vw`,
                        }}
                      />
                    </div>
                  </div>
                  {/* Hero section text */}
                  <div className="md:w-1/2 text-center md:text-left">
                    <h1 className="text-5xl font-extrabold mb-4 leading-tight animate-fade-in">
                      {slide.title}
                      <span className="text-brandPrimary block text-3xl mt-4">
                        {slide.subtitle}
                      </span>
                    </h1>
                    <p className="text-lg mb-6">
                      Explore awe-inspiring images and stories from NASA's
                      Astronomy Picture of the Day with SpaceWonders.
                    </p>
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
