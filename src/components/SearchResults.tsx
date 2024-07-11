import React from "react";
import Modal from "react-modal";
import { IoCloseCircleOutline } from "react-icons/io5";

// Define props interface
interface SearchResultsProps {
  results: {
    title: string,
    url: string,
    explanation: string,
  }[];
  isOpen: boolean;
  onClose: () => void;
}


// Ensure the modal is attached to the app element
Modal.setAppElement("#root");

const SearchResults: React.FC<SearchResultsProps> = ({
  results,
  isOpen,
  onClose,
}) => {
  if (!results.length) return null;

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Search Results"
      className="modal-content"
      overlayClassName="modal-overlay"
    >
      <div className="p-6 bg-white rounded-lg shadow-lg max-w-screen-md mx-auto">
        <button
          onClick={onClose}
          className="text-brandPrimary hover:text-neutralDGrey float-right focus:outline-none"
        >
          <IoCloseCircleOutline size={28} />
        </button>
        <div className="search-results mt-4 max-h-96 overflow-y-auto">
          {results.map((result, index) => (
            <div key={index} className="result mb-6">
              <h2 className="text-xl font-bold mb-2">{result.title}</h2>
              <img
                src={result.url}
                alt={result.title}
                className="w-full rounded-lg mb-4"
              />
              <p className="text-gray-700">{result.explanation}</p>
            </div>
          ))}
        </div>
      </div>
    </Modal>
  );
};

export default SearchResults;
