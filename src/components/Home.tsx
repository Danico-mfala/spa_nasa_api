import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import banner_1 from "../assets/image/banner_1.jpg";
import banner_2 from "../assets/image/banner_2.jpg";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

interface Slide {
  id: number;
  title: string;
  subtitle: string;
  image: string;
}

const Home: React.FC = () => {
  const slides: Slide[] = [
    {
      id: 1,
      title: "Explore the Cosmos",
      subtitle:
        "Discover stunning images and captivating stories with SpaceWonders. Explore the universe through NASA's Astronomy.",
      image: banner_1,
    },
    {
      id: 2,
      title: "Capture the Cosmos",
      subtitle:
        "Immerse yourself in the universe's wonders with SpaceWonders and journey through galaxies, stars, and beyond.",
      image: banner_2,
    },
  ];

  return (
    <div className="w-full mt-20 bg-home-bg bg-cover bg-center text-white relative overflow-hidden flex items-center">
      <div className="px-4 lg:px-14 w-full max-w-screen-2xl mx-auto relative">
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
                className="carousel-arrow left-arrow text-brandPrimary"
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
                className="carousel-arrow right-arrow text-brandPrimary"
              >
                <FaArrowRight />
              </button>
            )
          }
        >
          {slides.map((slide) => (
            <div
              key={slide.id}
              className="relative flex flex-col md:flex-row items-center justify-between p-4"
            >
              <div className="w-full md:w-1/2 text-center md:text-left mb-8 md:mb-0">
                <h1 className="text-3xl md:text-5xl text-neutralDGrey font-extrabold mb-4 leading-tight animate-fade-in">
                  {slide.title}
                  <span className="text-brandPrimary block text-lg md:text-3xl mt-4">
                    {slide.subtitle}
                  </span>
                </h1>
                <p className="text-base md:text-lg text-neutralGrey">
                  {slide.id === 1
                    ? "Dive into the wonders of the cosmos daily with SpaceWonders and NASA's Astronomy Picture of the Day."
                    : "Explore awe-inspiring images and stories from NASA's Astronomy Picture of the Day with SpaceWonders."}
                </p>
              </div>
              <div className="w-full md:w-1/2">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="rounded-lg shadow-lg w-full"
                />
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Home;
