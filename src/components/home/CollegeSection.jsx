import React from "react";
import { BsClock, BsCalendar, BsFileText, BsTrophy } from "react-icons/bs";

const CollegeSection = () => {
  const colleges = [
    {
      name: "ABC University",
      image: "college1.jpg",
      admissionDates: "July 25 - August 15",
      events: 15,
      researchHistory: "Established in 1965",
      sports: "Football, Basketball, Tennis",
    },
    {
      name: "XYZ College",
      image: "college2.jpg",
      admissionDates: "August 1 - August 30",
      events: 10,
      researchHistory: "Founded in 1978",
      sports: "Soccer, Volleyball, Swimming",
    },
    {
      name: "PQR Institute",
      image: "college3.jpg",
      admissionDates: "September 1 - September 20",
      events: 8,
      researchHistory: "Founded in 1990",
      sports: "Cricket, Badminton, Athletics",
    },
  ];

  return (
    <section className="py-12 bg-base-100 dark:bg-base-700">
      <div className="container mx-auto">
        <h2 className="text-3xl font-semibold text-gray-800 dark:text-white mb-6">
          Explore Colleges
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {colleges.map((college, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
              <img
                src={`/images/${college.image}`}
                alt={college.name}
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                {college.name}
              </h3>
              <div className="flex items-center text-gray-600 dark:text-gray-400 mb-2">
                <BsCalendar className="mr-2" />
                <span>{college.admissionDates}</span>
              </div>
              <div className="flex items-center text-gray-600 dark:text-gray-400 mb-2">
                <BsClock className="mr-2" />
                <span>{college.events} Events</span>
              </div>
              <div className="flex items-center text-gray-600 dark:text-gray-400 mb-2">
                <BsFileText className="mr-2" />
                <span>{college.researchHistory}</span>
              </div>
              <div className="flex items-center text-gray-600 dark:text-gray-400">
                <BsTrophy className="mr-2" />
                <span>{college.sports}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CollegeSection;
