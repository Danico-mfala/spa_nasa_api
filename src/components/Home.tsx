import React, { useState, useEffect } from "react";
import banner_1 from "../assets/image/banner_1.jpg";
import "../assets/css/Home.css";
import Typewriter from "../components/Typewriter";
import { GiAtom, GiAtomicSlashes } from "react-icons/gi";

import { TfiBarChart, TfiBarChartAlt } from "react-icons/tfi";

const Home: React.FC = () => {
  // Static content for the slide
  const slide = {
    id: 1,
    title: "Explore the ",
    subtitle:
      "Discover stunning images and captivating stories with SpaceWonders. Explore the universe through NASA's Astronomy.",
    image: banner_1,
  };

  const typewriterTexts = [
    "Cosmos",
    "Universe",
    "New Galaxies",
  ];

  // State for number counting animation and stop conditions
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [stopCount1, setStopCount1] = useState(50);
  const [stopCount2, setStopCount2] = useState(100);

  useEffect(() => {
    // Function to handle counting animation with stopping condition
    const startCounting = (
      setter: React.Dispatch<React.SetStateAction<number>>,
      stopNumber: number,
      interval: number
    ) => {
      const intervalId = setInterval(() => {
        setter((prevCount) => {
          const newCount = prevCount + 4;
          if (newCount >= stopNumber) {
            clearInterval(intervalId); // Stop counting
            return stopNumber;
          }
          return newCount;
        });
      }, interval);
    };

    // Start counting animations with stop conditions
    startCounting(setCount1, stopCount1, 100);
    startCounting(setCount2, stopCount2, 150);
  }, [stopCount1, stopCount2]);

  return (
    <div className="w-full bg-gray-900 min-h-screen text-white relative flex items-center">
      <div className="px-4 lg:px-14 w-full max-w-screen-2xl mx-auto relative">
        <div className="relative flex flex-col md:flex-row items-center justify-between p-4">
          <div className="w-full md:w-1/2 text-center md:text-left mb-8 md:mb-0">
            <h1 className="text-3xl md:text-7xl text-white font-extrabold mb-4 gap-4 leading-tight animate-fade-in">
              {slide.title}
              <h3 className="w-full relative mt-5">
                <Typewriter text={typewriterTexts} />
              </h3>

              <span className="text-brandPrimary block text-lg md:text-3xl mt-4">
                {slide.subtitle}
              </span>
            </h1>
            <p className="text-base md:text-lg text-white">
              Dive into the wonders of the cosmos daily with SpaceWonders and
              NASA's Astronomy Picture of the Day.
            </p>
            <div className="flex justify-center lg:justify-start gap-10 mt-20">
              <div className="text-center mx-4">
                <GiAtomicSlashes className="text-4xl text-brandPrimary mb-2" size={50} />
                <p className="text-2xl text-brandPrimary font-bold">{count1}</p>
                <p className="text-base text-white">Cosmos</p>
              </div>
              <div className="text-center mx-4">
                <GiAtom className="text-4xl text-brandPrimary mb-2" size={50} />
                <p className="text-2xl text-brandPrimary font-bold">{count2}</p>
                <p className="text-base text-white">Galaxies</p>
              </div>
            </div>

          </div>

          <div className="w-full md:w-1/2 relative">
            <img
              src={slide.image}
              alt={slide.title}
              className="rounded-lg shadow-lg w-full h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
