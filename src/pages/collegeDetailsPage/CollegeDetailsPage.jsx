import React from "react";
import PageHeading from "../../components/pageHeading/PageHeading";
import { useLoaderData } from "react-router-dom";

const CollegeDetailsPage = () => {
  const college = useLoaderData();

  return (
    <section className="py-20 bg-slate-200 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <PageHeading heading={college?.name} subheading={`Rating: ${college?.rating}`} />
        <div className="flex justify-center">
          <img
            className="w-96 h-64 object-cover object-center rounded-lg shadow-lg mb-4"
            src={college?.image}
            alt={college?.name}
          />
        </div>
        <div className="text-center">
          <p className="text-gray-600 dark:text-gray-300 text-lg mb-2">
            Admission Date: {college?.admissionDate}
          </p>
          <p className="text-gray-600 dark:text-gray-300 text-lg mb-2">
            Research Count: {college?.researchCount}
          </p>
          <p className="text-gray-600 dark:text-gray-300 text-lg mb-2">
            Events: {college?.events}
          </p>
          <p className="text-gray-600 dark:text-gray-300 text-lg mb-2">
            Research History: {college?.researchHistory}
          </p>
          <p className="text-gray-600 dark:text-gray-300 text-lg mb-2">
            Sports: {college?.sports}
          </p>
        </div>
      </div>
    </section>
  );
};

export default CollegeDetailsPage;
