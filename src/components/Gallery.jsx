import React, { useState, useEffect } from "react";
import { FaTimes, FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Gallery = () => {
  const [images, setImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [showLoadMore, setShowLoadMore] = useState(false);

  const api_key = import.meta.env.VITE_NASA_API_KEY;

  useEffect(() => {
    fetchRandomNASAImages();
  }, []);

  const fetchRandomNASAImages = async () => {
    try {
      setLoading(true);
      const dates = generateRandomDates(6); // Generate 6 random dates
      const fetchRequests = dates.map((date) =>
        fetch(
          `https://api.nasa.gov/planetary/apod?api_key=${api_key}&date=${date}`
        )
      );
      const responses = await Promise.all(fetchRequests);
      const data = await Promise.all(
        responses.map((response) => response.json())
      );
      setImages((prevImages) => [
        ...prevImages,
        ...data.filter((image) => !image.code),
      ]);
      setLoading(false);
      setShowLoadMore(true);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };

  const generateRandomDates = (count) => {
    const dates = [];
    for (let i = 0; i < count; i++) {
      const randomDate = getRandomDate();
      dates.push(randomDate);
    }
    return dates;
  };

  const getRandomDate = () => {
    const start = new Date(1995, 5, 16); // APOD started on June 16, 1995
    const end = new Date();
    const randomDate = new Date(
      start.getTime() + Math.random() * (end.getTime() - start.getTime())
    );
    return randomDate.toISOString().split("T")[0];
  };

  const handleImageClick = (index) => {
    setSelectedImage(images[index]);
    setCurrentIndex(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    const newIndex = (currentIndex + 1) % images.length;
    setSelectedImage(images[newIndex]);
    setCurrentIndex(newIndex);
  };

  const prevImage = () => {
    const newIndex = (currentIndex - 1 + images.length) % images.length;
    setSelectedImage(images[newIndex]);
    setCurrentIndex(newIndex);
  };

  const handleLoadMore = () => {
    fetchRandomNASAImages();
  };

  return (
    <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto my-8" id="gallery">
      <h2 className="text-4xl text-neutralDGrey font-semibold mb-8 items-center">
        Gallery
      </h2>

      {loading && <p className="text-center my-4">Loading...</p>}

      {error && <p className="text-center text-red-500">{error}</p>}

      {images.length === 0 && !loading && (
        <p className="text-center text-gray-500">
          No images fetched yet. Please try again later.
        </p>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
        {images.map((image, index) => (
          <div key={index} className="relative group">
            <img
              src={image.url}
              alt={`APOD Image ${index + 1}`}
              className="w-full h-full object-cover cursor-pointer transform transition duration-500 hover:scale-105"
              onClick={() => handleImageClick(index)}
              loading="lazy"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              {image.title}
            </div>
          </div>
        ))}
      </div>

      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 transition-opacity duration-500">
          <div className="relative bg-white p-4 rounded-lg flex flex-col md:flex-row max-w-4xl">
            <button
              className="absolute top-2 right-2 text-white text-2xl bg-brandPrimary rounded-full p-2"
              onClick={closeLightbox}
            >
              <FaTimes />
            </button>
            <div className="w-full md:w-1/2 p-4">
              <img
                src={selectedImage.url}
                alt="Selected"
                className="w-full h-auto rounded-lg"
              />
            </div>
            <div className="w-full md:w-1/2 p-4 text-black">
              <h3 className="text-xl font-semibold mb-2 text-brandPrimary">
                {selectedImage.title}
              </h3>
              <p className="text-sm">{selectedImage.explanation}</p>
              <p className="text-sm mt-2">Date: {selectedImage.date}</p>
            </div>
            <button
              className="absolute left-2 top-1/2 transform -translate-y-1/2 text-white text-2xl bg-brandPrimary rounded-full p-2"
              onClick={prevImage}
            >
              <FaChevronLeft />
            </button>
            <button
              className="absolute right-2 top-1/2 transform -translate-y-1/2 text-white text-2xl bg-brandPrimary rounded-full p-2"
              onClick={nextImage}
            >
              <FaChevronRight />
            </button>
          </div>
        </div>
      )}

      {showLoadMore && (
        <div className="flex justify-center my-4">
          <button
            onClick={handleLoadMore}
            className="px-4 py-2 bg-brandPrimary text-white rounded hover:bg-blue-700 focus:outline-none"
          >
            Load More
          </button>
        </div>
      )}
    </div>
  );
};

export default Gallery;
