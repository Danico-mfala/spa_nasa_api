import React, { useState, useEffect } from "react";
import { FaTimes, FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [apodImage, setApodImage] = useState(null); // State to store APOD data
  const [error, setError] = useState(null); // State to handle errors

  useEffect(() => {
    const fetchAPOD = async () => {
      const API_KEY = process.env.REACT_APP_NASA_API_KEY;
      const today = new Date().toISOString().slice(0, 10); // Get today's date

      try {
        const response = await fetch(
          `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&date=${today}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch APOD data");
        }
        const data = await response.json();
        setApodImage(data);
      } catch (error) {
        console.error("Error fetching APOD data:", error);
        setError(error.message);
      }
    };

    fetchAPOD();
  }, []);

  const handleImageClick = (index) => {
    setSelectedImage(filteredImages[index]);
    setCurrentIndex(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    const newIndex = (currentIndex + 1) % filteredImages.length;
    setSelectedImage(filteredImages[newIndex]);
    setCurrentIndex(newIndex);
  };

  const prevImage = () => {
    const newIndex =
      (currentIndex - 1 + filteredImages.length) % filteredImages.length;
    setSelectedImage(filteredImages[newIndex]);
    setCurrentIndex(newIndex);
  };

  const filterImages = (category) => {
    setSelectedCategory(category);
  };

  const filteredImages =
    selectedCategory === "all"
      ? images
      : images.filter((image) => image.category === selectedCategory);

  return (
    <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto my-8">
      <h2 className="text-4xl text-neutralDGrey font-semibold mb-8">Gallery</h2>
      <div className="flex justify-center mb-8">
        {["all", "nature", "city", "people"].map((category) => (
          <button
            key={category}
            onClick={() => filterImages(category)}
            className={`px-4 py-2 mx-2 rounded ${
              selectedCategory === category
                ? "bg-brandPrimary text-white"
                : "bg-gray-200 text-gray-700"
            }`}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {/* Display APOD Image if available */}
        {apodImage && (
          <div className="relative group col-span-2 row-span-2">
            <img
              src={apodImage.hdurl || apodImage.url}
              alt={`APOD - ${apodImage.title}`}
              className="w-full h-full object-cover cursor-pointer transform transition duration-500 hover:scale-105"
              onClick={() => setSelectedImage(apodImage)}
              loading="lazy"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              {apodImage.title}
            </div>
          </div>
        )}

        {/* Display other gallery images */}
        {filteredImages.map((image, index) => (
          <div
            key={index}
            className={`relative group ${
              image.size === "large"
                ? "col-span-2 row-span-2"
                : image.size === "medium"
                ? "col-span-1 row-span-2"
                : "col-span-1 row-span-1"
            }`}
          >
            <img
              src={image.src}
              alt={`Gallery Image ${index + 1}`}
              className="w-full h-full object-cover cursor-pointer transform transition duration-500 hover:scale-105"
              onClick={() => handleImageClick(index)}
              loading="lazy"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              {image.caption}
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox for selected image */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 transition-opacity duration-500">
          <div className="relative">
            <button
              className="absolute top-2 right-2 text-white text-2xl"
              onClick={closeLightbox}
            >
              <FaTimes />
            </button>
            <img
              src={selectedImage.src}
              alt="Selected"
              className="max-w-full max-h-screen"
            />
            <div className="text-center text-white mt-4">
              {selectedImage.caption}
            </div>
            <button
              className="absolute left-2 top-1/2 transform -translate-y-1/2 text-white text-2xl"
              onClick={prevImage}
            >
              <FaChevronLeft />
            </button>
            <button
              className="absolute right-2 top-1/2 transform -translate-y-1/2 text-white text-2xl"
              onClick={nextImage}
            >
              <FaChevronRight />
            </button>
          </div>
        </div>
      )}

      {/* Error message display */}
      {error && (
        <div className="text-red-500 text-center mt-4">
          Failed to fetch APOD data: {error}
        </div>
      )}
    </div>
  );
};

export default Gallery;
