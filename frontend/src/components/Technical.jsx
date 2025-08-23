import React from "react";

const Technical = () => {
  return (
    <div id="technical" className="w-full flex bg-blue-50 flex-col justify-center items-center py-12">
      {/* Heading */}
      <h1 className="text-3xl font-bold text-blue-950 text-center">
        TECHNICAL ASSOCIATE
      </h1>
      <div className="w-10 bg-red-600 h-1 my-5"></div>

      {/* Content Box */}
      <div className="max-w-5xl bg-blue-50 mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 rounded-lg p-8">
        {/* Left - Logo */}
        <div className="flex justify-center items-center">
          <img
            src="https://rha.socet.edu.in/img/supporters/1.png" // replace with actual logo path
            alt="Electromech Logo"
            className="w-60 h-auto object-contain"
          />
        </div>

        {/* Right - Text */}
        <div className="flex bg-blue-50 flex-col justify-center text-gray-700 text-md leading-relaxed">
          <p>
            We are one of the leading and innovative Cloud and open source
            companies, since <span className="font-semibold">1996</span>.
            Extending our support and solution starting from large enterprises
            to small companies, with the most experienced and certified staff.
          </p>
          <p className="mt-4">
            Our primary goal is{" "}
            <span className="font-bold text-gray-900">
              “To provide optimized solutions based on Cloud and open source
              products”
            </span>{" "}
            to large Corporate, small enterprise, and individual users, and let
            organizations feel{" "}
            <span className="font-bold text-gray-900">
              “Be free and stable”.
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Technical;
