import React from "react";
import SectionTitle from "../sectionTitle/SectionTitle";

const CollegeGallerySection = () => {
  const collegeGraduateImages = [
    {
      _id: 1,
      image:
        "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      collegeName: "Harvard University",
    },
    {
      _id: 2,
      image:
        "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      collegeName: "Stanford University",
    },
    {
      _id: 3,
      image:
        "https://img.freepik.com/free-photo/group-colleagues-with-diploma_23-2148522297.jpg?w=996&t=st=1690181398~exp=1690181998~hmac=14cb249435e7ce59be240bab943b95adf52fd2ddbf08e9689b25f4bd3462430e",
      collegeName: "Massachusetts Institute of Technology (MIT)",
    },
    {
      _id: 4,
      image:
        "https://img.freepik.com/free-photo/portrait-group-students-celebrating-their-graduation_23-2148201864.jpg?w=996&t=st=1690181441~exp=1690182041~hmac=57dbc51401a514ad464fcca815160b6b62bafeb2e37e44a077c6e2554a1cc869",
      collegeName: "California Institute of Technology (Caltech)",
    },
    {
      _id: 5,
      image:
        "https://img.freepik.com/free-photo/diversity-students-graduation-success-celebration-concept_53876-26400.jpg?w=996&t=st=1690181476~exp=1690182076~hmac=57641ad733f4b40d8d268140cc85356fef4a7c386f94003232586c64d500d41b",
      collegeName: "Princeton University",
    },
    {
      _id: 6,
      image:
        "https://img.freepik.com/free-photo/high-angle-students-taking-selfie_23-2148522299.jpg?w=996&t=st=1690181516~exp=1690182116~hmac=bf7c31b2c7e3c01788568c503cbf92f7e1afd4ba99b63ce0da6c7376a6cecea8",
      collegeName: "Yale University",
    },
  ];

  return (
    <section className="py-20 bg-slate-100 dark:bg-gray-700">
      <div className="container">
        <SectionTitle
          heading="College Graduate's Group Pictures"
          subheading="Memories to Cherish: A Collection of Joyful Moments from Graduates"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {collegeGraduateImages.map((college) => (
            <div key={college?._id} className="relative rounded-lg overflow-hidden">
              <img
                className="w-full h-64 xl:h-72 object-cover object-center rounded"
                src={college?.image}
                alt={college?.collegeName}
              />
              <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-25 flex justify-center items-center text-white p-4">
                <h2 className="font-semibold text-2xl text-center">{college?.collegeName}</h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CollegeGallerySection;
