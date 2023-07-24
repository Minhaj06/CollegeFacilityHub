import React, { useState } from "react";
import PageHeading from "../../components/pageHeading/PageHeading";
import Modal from "../../components/modal/Modal";

const AdmissionPage = () => {
  const [selectedCollege, setSelectedCollege] = useState(null);

  const collegesData = [
    {
      _id: 1,
      name: "Example University",
      rating: 4.8,
      admissionDate: "September 2023",
      researchCount: 300,
      image:
        "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1486&q=80",
      events: "Annual Fest, Guest Lectures, Workshops",
      researchHistory: "Founded in 1920, 1000+ research projects completed",
      sports: "Football, Basketball, Volleyball, Swimming",
    },
    {
      _id: 2,
      name: "Acme College",
      rating: 4.2,
      admissionDate: "August 2023",
      researchCount: 150,
      image:
        "https://plus.unsplash.com/premium_photo-1661935732225-0db08b9f659c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      events: "Annual Fest, Workshops",
      researchHistory: "Founded in 1950, 500+ research projects completed",
      sports: "Football, Tennis, Athletics",
    },
    {
      _id: 3,
      name: "Northwind Institute",
      rating: 4.5,
      admissionDate: "October 2023",
      researchCount: 250,
      image:
        "https://plus.unsplash.com/premium_photo-1661930029003-0404b6e917f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80",
      events: "Tech Fest, Seminars",
      researchHistory: "Founded in 1980, 800+ research projects completed",
      sports: "Cricket, Badminton, Table Tennis",
    },
    {
      _id: 4,
      name: "Greenwood University",
      rating: 4.1,
      admissionDate: "July 2023",
      researchCount: 180,
      image:
        "https://plus.unsplash.com/premium_photo-1661930029003-0404b6e917f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80",
      events: "Cultural Fest, Conferences",
      researchHistory: "Founded in 1995, 300+ research projects completed",
      sports: "Volleyball, Basketball, Swimming",
    },
    {
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
    },
  ];

  const handleCollegeClick = (college) => {
    setSelectedCollege(college);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission here (e.g., send data to backend)
    // Reset the selected college state after successful form submission
    setSelectedCollege(null);
  };

  const closeModal = () => {
    setSelectedCollege(null);
  };

  return (
    <section className="py-20">
      <div className="container">
        <PageHeading
          heading="Colleges List"
          subheading="Explore the top colleges and apply for admission."
        />

        {/* Display the list of colleges */}
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
          {collegesData.map((college) => (
            <div
              key={college._id}
              className="bg-gray-100 border dark:bg-gray-800 p-4 shadow-md rounded-lg"
            >
              <h3 className="text-xl font-semibold mb-2">{college.name}</h3>
              <p className="text-gray-600 dark:text-gray-400">Rating: {college.rating}</p>
              <p className="text-gray-600 dark:text-gray-400">
                Admission Date: {college.admissionDate}
              </p>

              <div className="text-end mt-4">
                <button
                  onClick={() => handleCollegeClick(college)}
                  className="btn btn-warning btn-sm"
                >
                  Admit
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Render admission form if a college is selected */}
        {selectedCollege && (
          <Modal isOpen={true} onClose={closeModal}>
            <h2 className="text-2xl font-semibold mb-4">Admission Form</h2>
            <form
              onSubmit={handleSubmit}
              className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
            >
              <div className="col-span-1">
                <div className="form-control w-full max-w-xs">
                  <label className="label">
                    <span className="label-text">What is your name?</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Type here"
                    className="input input-bordered w-full max-w-xs"
                  />
                </div>
              </div>

              <div className="col-span-1">
                <div className="form-control w-full max-w-xs">
                  <label className="label">
                    <span className="label-text">Subject</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Type here"
                    className="input input-bordered w-full max-w-xs"
                  />
                </div>
              </div>

              <div className="col-span-1">
                <div className="form-control w-full max-w-xs">
                  <label className="label">
                    <span className="label-text">Candidate Email</span>
                  </label>
                  <input
                    type="email"
                    placeholder="Type here"
                    className="input input-bordered w-full max-w-xs"
                  />
                </div>
              </div>

              <div className="col-span-1">
                <div className="form-control w-full max-w-xs">
                  <label className="label">
                    <span className="label-text">Candidate Phone number</span>
                  </label>
                  <input
                    type="tel"
                    placeholder="Type here"
                    className="input input-bordered w-full max-w-xs"
                  />
                </div>
              </div>

              <div className="col-span-1">
                <div className="form-control w-full max-w-xs">
                  <label className="label">
                    <span className="label-text">Date of Birth</span>
                  </label>
                  <input type="date" className="input input-bordered w-full max-w-xs" />
                </div>
              </div>

              <div className="col-span-1">
                <div className="form-control w-full max-w-xs">
                  <label className="label">
                    <span className="label-text">Image</span>
                  </label>
                  <input type="file" className="input input-bordered w-full max-w-xs" />
                </div>
              </div>

              <div className="col-span-3">
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text">Address</span>
                  </label>
                  <textarea
                    className="textarea textarea-bordered w-full"
                    placeholder="Type here"
                  ></textarea>
                </div>
              </div>

              <div className="col-span-3 text-end">
                <button type="submit" className="btn btn-primary btn-sm h-10 px-6">
                  Submit
                </button>
              </div>
            </form>
          </Modal>
        )}
      </div>
    </section>
  );
};

export default AdmissionPage;
