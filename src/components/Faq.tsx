import React, { useState, useEffect } from "react";
import { SlArrowDown, SlArrowUp } from "react-icons/sl";

const apiKey = import.meta.env.VITE_NASA_API_KEY;

const FAQ = () => {
  const [faqData, setFaqData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchFAQ = async () => {
      try {
        const response = await fetch(
          `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&count=4`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch FAQ");
        }
        const data = await response.json();
        const faqItems = data.map((item: { date: any; explanation: any; }) => ({
          id: item.date,
          question: `What is the Astronomy Picture of the Day on ${item.date}?`,
          answer: item.explanation,
          open: false, // Initialize open state for accordion
        }));
        setFaqData(faqItems);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching FAQ:", error);
        setError(true);
        setLoading(false);
      }
    };

    fetchFAQ();
  }, []);

  const handleToggle = (id: any) => {
    setFaqData((prevData) =>
      prevData.map((item) =>
        item.id === id
          ? { ...item, open: !item.open }
          : { ...item, open: false }
      )
    );
  };

  return (
    <div className="flex flex-col items-center justify-center m-[100px]">
      <h2 className="text-3xl font-semibold text-gray-800 mb-6" id="faq">
        Frequently Asked Questions
      </h2>
      <div className="w-full max-w-4xl p-8 rounded-lg">
        {loading && <p className="text-center">Loading...</p>}
        {error && (
          <p className="text-center text-red-500">
            Failed to load FAQ. Please try again later.
          </p>
        )}
        {!loading && !error && (
          <div className="space-y-4">
            {faqData.map((item) => (
              <div key={item.id} className="faq-item ">
                <button
                  onClick={() => handleToggle(item.id)}
                  className="flex justify-between w-full h-[50px] px-4 py-2 text-left bg-gray-200 rounded-lg hover:bg-gray-300 focus:outline-none"
                >
                  <span className="text-lg font-semibold text-gray-700">
                    {item.question}
                  </span>
                  <span className="text-brandPrimary">{item.open ? <SlArrowUp size={23} /> : <SlArrowDown size={23} />}</span>
                </button>
                {item.open && (
                  <div className="p-4 mt-5 rounded-lg bg-gray-100">
                    <p className="text-gray-600">{item.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default FAQ;
