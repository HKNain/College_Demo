import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react"; 
import faqsData from "../../data/faqsData.json"; // JSON import

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div id="faq" className="w-full flex bg-blue-50 flex-col justify-center items-center">
      <h1 className="text-3xl font-semibold text-blue-950 mt-10">
        F.A.Q
      </h1>

      <div className="w-10 bg-red-600 h-1 my-5"></div>

      {/* FAQ Section */}
      <div className="w-3/4 max-w-2xl my-10">
        {faqsData.map((faq, index) => (
          <div
            key={index}
            className="border-b border-gray-300 py-4 cursor-pointer"
            onClick={() => toggleFAQ(index)}
          >
            <div className="flex justify-between items-center">
              <h2 className="text-lg font-medium text-blue-950">
                {faq.question}
              </h2>
              {openIndex === index ? (
                <ChevronUp className="text-blue-950" />
              ) : (
                <ChevronDown className="text-blue-950" />
              )}
            </div>

            {/* Animated Answer */}
            <div
              className={`overflow-hidden transition-all duration-500 ease-in-out ${
                openIndex === index ? "max-h-40 mt-3" : "max-h-0"
              }`}
            >
              <p className="text-gray-700">{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
