import React from "react";
import PageHeading from "../../components/pageHeading/PageHeading";

const CollegeDetailsPage = () => {
  const selectedCollege = {
    _id: 5,
    name: "Pinecrest College",
    rating: 4.3,
    admissionDate: "November 2023",
    researchCount: 200,
    image:
      "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1486&q=80",
    events: "Literary Fest, Debates",
    researchHistory: "Founded in 2000, 400+ research projects completed",
    sports: "Football, Cricket, Athletics",
  };

  return (
    <section className="py-20 bg-slate-200 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <PageHeading
          heading={selectedCollege.name}
          subheading={`Rating: ${selectedCollege.rating}`}
        />
        <div className="flex justify-center">
          <img
            className="w-96 h-64 object-cover object-center rounded-lg shadow-lg mb-4"
            src={selectedCollege.image}
            alt={selectedCollege.name}
          />
        </div>
        <div className="text-center">
          <p className="text-gray-600 dark:text-gray-300 text-lg mb-2">
            Admission Date: {selectedCollege.admissionDate}
          </p>
          <p className="text-gray-600 dark:text-gray-300 text-lg mb-2">
            Research Count: {selectedCollege.researchCount}
          </p>
          <p className="text-gray-600 dark:text-gray-300 text-lg mb-2">
            Events: {selectedCollege.events}
          </p>
          <p className="text-gray-600 dark:text-gray-300 text-lg mb-2">
            Research History: {selectedCollege.researchHistory}
          </p>
          <p className="text-gray-600 dark:text-gray-300 text-lg mb-2">
            Sports: {selectedCollege.sports}
          </p>
        </div>
      </div>
    </section>
  );
};

export default CollegeDetailsPage;
