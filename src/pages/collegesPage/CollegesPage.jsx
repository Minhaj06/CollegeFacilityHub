import React from "react";
import CollegeCard2 from "../../components/cards/collegeCard/CollegeCard2";
import PageHeading from "../../components/pageHeading/PageHeading";
import { useLoaderData } from "react-router-dom";

const CollegesPage = () => {
  // const collegesData = [
  //   {
  //     _id: 1,
  //     name: "Example University",
  //     rating: 4.8,
  //     admissionDate: "September 2023",
  //     researchCount: 300,
  //     image:
  //       "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1486&q=80",
  //   },
  //   {
  //     _id: 2,
  //     name: "Acme College",
  //     rating: 4.2,
  //     admissionDate: "August 2023",
  //     researchCount: 150,
  //     image:
  //       "https://plus.unsplash.com/premium_photo-1661935732225-0db08b9f659c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
  //   },
  //   {
  //     _id: 3,
  //     name: "Northwind Institute",
  //     rating: 4.5,
  //     admissionDate: "October 2023",
  //     researchCount: 250,
  //     image:
  //       "https://plus.unsplash.com/premium_photo-1661930029003-0404b6e917f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80",
  //   },
  //   {
  //     _id: 4,
  //     name: "Greenwood University",
  //     rating: 4.1,
  //     admissionDate: "July 2023",
  //     researchCount: 180,
  //     image:
  //       "https://plus.unsplash.com/premium_photo-1661930029003-0404b6e917f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80",
  //   },
  //   {
  //     _id: 5,
  //     name: "Pinecrest College",
  //     rating: 4.3,
  //     admissionDate: "November 2023",
  //     researchCount: 200,
  //     image:
  //       "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1486&q=80",
  //   },
  //   {
  //     _id: 6,
  //     name: "Example University",
  //     rating: 4.8,
  //     admissionDate: "September 2023",
  //     researchCount: 300,
  //     image:
  //       "https://plus.unsplash.com/premium_photo-1661935732225-0db08b9f659c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
  //   },
  //   {
  //     _id: 7,
  //     name: "Northwind Institute",
  //     rating: 4.5,
  //     admissionDate: "October 2023",
  //     researchCount: 250,
  //     image:
  //       "https://plus.unsplash.com/premium_photo-1661930029003-0404b6e917f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80",
  //   },
  //   {
  //     _id: 8,
  //     name: "Example University",
  //     rating: 4.8,
  //     admissionDate: "September 2023",
  //     researchCount: 300,
  //     image:
  //       "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1486&q=80",
  //   },
  // ];

  const collegesData = useLoaderData();

  return (
    <section className="py-20">
      <div className="container">
        <PageHeading
          heading="Colleges List"
          subheading="Explore the top colleges with detailed information and facilities."
        />

        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
          {collegesData.map((college) => (
            <CollegeCard2 key={college?._id} college={college} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CollegesPage;
