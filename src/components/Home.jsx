import React from "react";

import "flowbite/dist/flowbite.min.css";
import { Carousel } from "flowbite-react";
import banner_1 from "../assets/image/banner_1.jpg";

const Home = () => {
  return (
    <div className="bg-neutralSilver">
      <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto min-h-screen h-screen">
        <Carousel className="w-full mx-auto">
          <div className="my-28 md:my-8 py-12  flex flex-col md:flex-row-reverse items-center justify-between gap-12">
            {/* hero section image */}
            <div>
              <img src={banner_1} alt="" />
            </div>
            {/* hero section text */}
            <div className="md:w-1/2">
              <h1 className="text-5xl font-semibold mb-4 text-neutralDGrey md:w-3/4 leading-snug">
                Discovery the galaxi
                <span className="text-brandPrimary leading-snug">
                  from 9 year
                </span>
              </h1>
            </div>
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default Home;
