import React from "react";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import { FaUsers, FaGraduationCap, FaClock, FaThumbsUp } from "react-icons/fa";

const statsData = [
  {
    id: 1,
    icon: <FaUsers className="text-5xl text-red-600" />,
    value: 32,
    label: "Certified Faculty",
  },
  {
    id: 2,
    icon: <FaGraduationCap className="text-5xl text-red-600" />,
    value: 86,
    label: "Certified Student",
  },
  {
    id: 3,
    icon: <FaClock className="text-5xl text-red-600" />,
    value: 1200,
    label: "Hours for Training",
  },
  {
    id: 4,
    icon: <FaThumbsUp className="text-5xl text-red-600" />,
    value: 92,
    label: "% Success Ratio",
  },
];

const Info = () => {
  return (
    <div id="info"
      className="w-full bg-black bg-cover flex flex-col justify-center items-center bg-center py-16"
      style={{ backgroundImage: "url('/your-background.jpg')" }}
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 text-center text-white">
        {statsData.map((stat, index) => (
          <motion.div
            key={stat.id}
            className="flex flex-col items-center space-y-2"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2, ease: "easeInOut" }}
            viewport={{ once: true }}
          >
            {stat.icon}
            <h2 className="text-3xl font-bold text-white">
              <CountUp start={0} end={stat.value} duration={2} />
            </h2>
            <p className="text-lg">{stat.label}</p>
          </motion.div>
        ))}
      </div>

      {/* Red underline */}
      <div className="w-10 bg-red-600 h-1 my-5"></div>
    </div>
  );
};

export default Info;
