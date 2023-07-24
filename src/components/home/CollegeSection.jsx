import React from "react";
import CollegeCard from "../cards/collegeCard/CollegeCard";
import SectionTitle from "../sectionTitle/SectionTitle";

const PopularClassesSection = () => {
  const collegeData = [
    {
      _id: 1,
      name: "Example College 1",
      image:
        "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1486&q=80",
      admissionDates: "August 2023",
      events: "Annual Fest, Sports Meet",
      researchHistory: "Established in 1950",
      sports: "Football, Basketball, Swimming",
    },
    {
      _id: 2,
      name: "Example College 2",
      image:
        "https://plus.unsplash.com/premium_photo-1661935732225-0db08b9f659c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      admissionDates: "September 2023",
      events: "Tech Symposium, Cultural Fest",
      researchHistory: "Pioneering Research in Science",
      sports: "Cricket, Volleyball, Table Tennis",
    },
    {
      _id: 3,
      name: "Example College 3",
      image:
        "https://plus.unsplash.com/premium_photo-1661930029003-0404b6e917f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80",
      admissionDates: "July 2023",
      events: "Literary Fest, Debate Competition",
      researchHistory: "Leading in Arts and Humanities",
      sports: "Tennis, Badminton, Athletics",
    },
  ];

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
