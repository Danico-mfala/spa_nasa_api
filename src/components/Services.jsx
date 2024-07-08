import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import "../Services.css"; // Import the CSS file

const Services = () => {
  const services = [
    {
      id: 1,
      title: "Membership Organisations",
      description:
        "Our membership software provides full automation of membership renewals and PaymentResponse",
      image: "https://cdn-icons-png.freepik.com/512/6580/6580131.png",
    },
    {
      id: 2,
      title: "Membership Organisations",
      description:
        "Our membership software provides full automation of membership renewals and PaymentResponse",
      image: "https://cdn-icons-png.freepik.com/512/1146/1146276.png",
    },
    {
      id: 3,
      title: "Membership Organisations",
      description:
        "Our membership software provides full automation of membership renewals and PaymentResponse",
      image: "https://cdn-icons-png.freepik.com/512/6704/6704309.png",
    },
    {
      id: 4,
      title: "Membership Organisations",
      description:
        "Our membership software provides full automation of membership renewals and PaymentResponse",
      image: "https://cdn-icons-png.freepik.com/512/4111/4111882.png",
    },
  ];
  return (
    <div className="md:px-14 px-4 py-16 max-w-screen-2xl mx-auto">
      <div className="text-center my-8">
        <h2 className="text-4xl text-neutralDGrey font-semibold mb-2">
          Our Clients
        </h2>
        <p className="text-neutralGrey">
          We have been working with some Fortune Clients
        </p>
      </div>
      {/* Company logos carousel */}
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
          <div className="logo-container">
            <img
              src="/src/assets/logo/logo_1.png"
              alt="Client Logo 1"
              width={100}
            />
          </div>
          <div className="logo-container">
            <img
              src="/src/assets/logo/logo_2.png"
              alt="Client Logo 2"
              width={100}
            />
          </div>
          <div className="logo-container">
            <img
              src="/src/assets/logo/logo_3.png"
              alt="Client Logo 3"
              width={100}
            />
          </div>
          <div className="logo-container">
            <img
              src="/src/assets/logo/logo_4.png"
              alt="Client Logo 4"
              width={100}
            />
          </div>
        </Carousel>
      </div>
      <div className="mt-20 md:-1/2 mx-auto text-center">
        <h2 className="text-4xl mb-3 font-semilbold text-neutralGrey">
          Manage your entire community in a single system
        </h2>
        <p className="text-neutralGrey">who is Nextcent suitable for ?</p>
      </div>

      {/* cards */}
      <div className="mt-14 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:w-11/12 mx-auto gap-12">
        {services.map((service) => (
          <div
            key={service.id}
            className="px-4 py-8 text-center md:w-[300px] mx-auto md:h-80 rounded-md cursor-pointer hover:-translate-y-5 hover:border-b-4 hover:border-indigo-700 transition-all duration-300 flex items-center justify-center h-full"
          >
            <div>
              <div className="bg-[#E8F5E9] mb-4 h-14 w-14 mx-auto rounded-tl-3xl rounded-br-3xl">
                <img src={service.image} alt="" className="-ml-5" />
              </div>
              <h4 className="text-2xl font-bold text-neutralDGrey mb-2 px-3">
                {service.title}
              </h4>
              <p className="text-sm text-neutralGrey">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
