import React, { useContext, useEffect, useState } from "react";
import PageHeading from "../../components/pageHeading/PageHeading";
import { AuthContext } from "../../context/auth";
import axios from "axios";
import {
  FaSchool,
  FaStar,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaFlask,
  FaTrophy,
  FaUsers,
} from "react-icons/fa";

const MyCollege = () => {
  const { user } = useContext(AuthContext);

  const [admissionCollegeId, setAdmissionCollegeId] = useState();
  const [college, setCollege] = useState(null);

  const loadAdmissionData = async () => {
    const { data } = await axios.get(`/admission/${user.email}`);
    setAdmissionCollegeId(data.collegeId);
  };

  const loadCollege = async () => {
    const { data } = await axios.get(`/college/${admissionCollegeId}`);
    setCollege(data);
  };

  useEffect(() => {
    if (user.email) loadAdmissionData();
  }, [user.email]);

  useEffect(() => {
    if (admissionCollegeId) loadCollege();
  }, [admissionCollegeId]);

  return (
    <section className="py-20 bg-slate-200 dark:bg-gray-800">
      <div className="container">
        <PageHeading heading={college?.name} subheading={`Rating: ${college?.rating}`} />

        {college ? (
          <div className="my-college-container">
            <div className="flex justify-center">
              <img
                className="w-96 h-64 object-cover object-center rounded-lg shadow-lg mb-4"
                src={college?.image}
                alt={college?.name}
              />
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <FaStar className="text-xl mr-2" />
                <p className="text-gray-600 dark:text-gray-300 text-lg">
                  Rating: {college?.rating}
                </p>
              </div>
              <div className="flex items-center justify-center mb-2">
                <FaCalendarAlt className="text-xl mr-2" />
                <p className="text-gray-600 dark:text-gray-300 text-lg">
                  Admission Date: {college?.admissionDates}
                </p>
              </div>
              <div className="flex items-center justify-center mb-2">
                <FaMapMarkerAlt className="text-xl mr-2" />
                <p className="text-gray-600 dark:text-gray-300 text-lg">
                  Address: {college?.address}
                </p>
              </div>
              <div className="flex items-center justify-center mb-2">
                <FaFlask className="text-xl mr-2" />
                <p className="text-gray-600 dark:text-gray-300 text-lg">
                  Research History: {college?.researchHistory}
                </p>
              </div>
              <div className="flex items-center justify-center mb-2">
                <FaUsers className="text-xl mr-2" />
                <p className="text-gray-600 dark:text-gray-300 text-lg">
                  Sports: {college?.sports}
                </p>
              </div>
              <div className="flex items-center justify-center mb-2">
                <FaTrophy className="text-xl mr-2" />
                <p className="text-gray-600 dark:text-gray-300 text-lg">
                  Research Count: {college?.researchCount}
                </p>
              </div>
              <div className="flex items-center justify-center mb-2">
                <FaFlask className="text-xl mr-2" />
                <p className="text-gray-600 dark:text-gray-300 text-lg">
                  Events: {college?.events}
                </p>
              </div>
            </div>
          </div>
        ) : (
          <div className="my-college-not-admitted">
            <h1 className="my-college-not-admitted-title">You are not admitted yet</h1>
          </div>
        )}
      </div>
    </section>
  );
};

export default MyCollege;
