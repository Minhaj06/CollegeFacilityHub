import React, { useEffect, useState } from "react";
import axios from "axios";
import CollegeCard from "../cards/collegeCard/CollegeCard";
import SectionTitle from "../sectionTitle/SectionTitle";

const PopularClassesSection = () => {
  const [collegeData, setCollegeData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get("/colleges");
        setCollegeData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <section className="py-20">
      <div className="container">
        <SectionTitle
          heading="Our Colleges"
          subheading="Explore Our Top Colleges and Universities"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {collegeData.map((college) => (
            <CollegeCard key={college?._id} college={college} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularClassesSection;
