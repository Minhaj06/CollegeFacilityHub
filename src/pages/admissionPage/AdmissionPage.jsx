import React, { useContext, useState } from "react";
import PageHeading from "../../components/pageHeading/PageHeading";
import Modal from "../../components/modal/Modal";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../context/auth";
import axios from "axios";
import { toast } from "react-hot-toast";

const AdmissionPage = () => {
  // Context
  const { user } = useContext(AuthContext);

  const [selectedCollege, setSelectedCollege] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    subject: "",
    email: "",
    phone: "",
    dob: "",
    address: "",
    image: null,
  });

  const collegesData = useLoaderData();

  const handleCollegeClick = (college) => {
    setSelectedCollege(college);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  //  const handleImageChange = (event) => {
  //    const imageFile = event.target.files[0];
  //    setFormData((prevFormData) => ({
  //      ...prevFormData,
  //      image: imageFile,
  //    }));
  //  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      // Prepare the form data to send
      const admissionData = {
        collegeId: selectedCollege._id,
        candidateName: user.displayName,
        subject: formData.subject,
        email: user.email,
        phone: formData.phone,
        dob: formData.dob,
        address: formData.address,
        image: user.photoURL,
      };

      // Make the HTTP POST request to the server
      const { data } = await axios.post("/admission", admissionData);

      // const response = await fetch("/admission", {
      //   method: "POST",
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      //   body: JSON.stringify(admissionData),
      // });

      // if (!response.ok) {
      //   throw new Error("Failed to submit admission form");
      // }

      // Admission form successfully submitted, reset the form and close the modal
      setFormData({
        name: "",
        subject: "",
        email: "",
        phone: "",
        dob: "",
        address: "",
        image: null,
      });
      setSelectedCollege(null);
      toast.success("Admission Successfull");
    } catch (error) {
      console.error("Error submitting admission form:", error);
      // Handle any error or show a notification to the user
    }
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
              key={college?._id}
              className="bg-gray-100 border dark:bg-gray-800 p-4 shadow-md rounded-lg"
            >
              <h3 className="text-xl font-semibold mb-2">{college?.name}</h3>
              <p className="text-gray-600 dark:text-gray-400">Rating: {college?.rating}</p>
              <p className="text-gray-600 dark:text-gray-400">
                Admission Date: {college?.admissionDate}
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
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    name="name"
                    required
                    onChange={handleChange}
                    type="text"
                    readOnly
                    defaultValue={user?.displayName}
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
                    name="subject"
                    required
                    onChange={handleChange}
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
                    name="email"
                    required
                    onChange={handleChange}
                    readOnly
                    type="email"
                    defaultValue={user?.email}
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
                    name="phone"
                    required
                    onChange={handleChange}
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
                  <input
                    name="dob"
                    required
                    onChange={handleChange}
                    type="date"
                    className="input input-bordered w-full max-w-xs"
                  />
                </div>
              </div>

              <div className="col-span-1">
                <div className="form-control w-full max-w-xs">
                  <label className="label">
                    <span className="label-text">Image</span>
                  </label>
                  <input
                    name="image"
                    required
                    onChange={handleChange}
                    type="text"
                    className="input input-bordered w-full max-w-xs"
                    defaultValue={user?.photoURL}
                  />
                </div>
              </div>

              <div className="col-span-3">
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text">Address</span>
                  </label>
                  <textarea
                    name="address"
                    required
                    onChange={handleChange}
                    className="textarea textarea-bordered w-full"
                    placeholder="Type here"
                  ></textarea>
                </div>
              </div>

              <div className="col-span-3 text-end">
                <button
                  onClose={closeModal}
                  type="submit"
                  className="btn btn-primary btn-sm h-10 px-6"
                >
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
