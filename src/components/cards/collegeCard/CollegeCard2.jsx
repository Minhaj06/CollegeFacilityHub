import React from "react";
import { FaCalendarAlt, FaCalendarCheck, FaGraduationCap, FaRunning } from "react-icons/fa";
import { Link } from "react-router-dom";

const CollegeCard2 = ({ college }) => {
  return (
    <div className="bg-slate-100 dark:bg-gray-800 border shadow-lg rounded-lg overflow-hidden relative pb-12">
      <img
        className="w-full h-52 object-cover object-center"
        src={college?.image}
        alt={college?.name}
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{college?.name}</h3>
        <div className="mb-2">
          <span className="text-gray-500">
            <FaCalendarAlt className="inline mr-2" />
            Admission Dates:
          </span>{" "}
          {college?.admissionDate}
        </div>
        <div className="mb-2">
          <span className="text-gray-500">
            <FaGraduationCap className="inline mr-2" />
            Research History:
          </span>{" "}
          {college?.researchCount}
        </div>
        <div className="absolute right-4 bottom-4">
          <Link to={`/college/${college?._id}`} className="btn btn-primary btn-sm">
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CollegeCard2;
