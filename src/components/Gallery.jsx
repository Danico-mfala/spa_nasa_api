import React, { useState } from "react";
import { FaTimes, FaChevronLeft, FaChevronRight } from "react-icons/fa";

const images = [
  {
    src: "https://cdn.britannica.com/57/111757-050-F3229E99/image-Magellanic-Cloud-nebula-Cerro-Tololo-Inter-American.jpg",
    caption: "Image 1",
    category: "nature",
    size: "large",
  },
  {
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTm_rZL8obSMf3yubEah_hi72hZqKIseRrJw&s",
    caption: "Image 2",
    category: "city",
    size: "small",
  },
  {
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTY52c5RLn8KVOB-JVorvpbESEDIXhe-TVNQ&s",
    caption: "Image 3",
    category: "nature",
    size: "medium",
  },
  {
    src: "https://cdn.britannica.com/57/111757-050-F3229E99/image-Magellanic-Cloud-nebula-Cerro-Tololo-Inter-American.jpg",
    caption: "Image 4",
    category: "city",
    size: "large",
  },
  {
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3VBVKCqiHUdP7rljhJM0zWJ03MA13b9MxGg&s",
    caption: "Image 5",
    category: "people",
    size: "medium",
  },
  {
    src: "https://via.placeholder.com/600/56a8c2",
    caption: "Image 6",
    category: "people",
    size: "small",
  },
  {
    src: "https://via.placeholder.com/600/b0f7cc",
    caption: "Image 7",
    category: "nature",
    size: "large",
  },
  {
    src: "https://via.placeholder.com/600/54176f",
    caption: "Image 8",
    category: "city",
    size: "medium",
  },
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState("all");

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
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
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
    </div>
  );
};

export default Gallery;
