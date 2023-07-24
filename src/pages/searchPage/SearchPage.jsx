import React from "react";
import CollegeCard2 from "../../components/cards/collegeCard/CollegeCard2";
import PageHeading from "../../components/pageHeading/PageHeading";
import { useLoaderData, useParams } from "react-router-dom";

const SearchPage = () => {
  const collegesData = useLoaderData();

  const { keyword } = useParams();

  return (
    <section className="py-20">
      <div className="container">
        <PageHeading subheading={`Search results for: ${keyword}`} />

        {collegesData.length ? (
          <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
            {collegesData.map((college) => (
              <CollegeCard2 key={college?._id} college={college} />
            ))}
          </div>
        ) : (
          <div>
            <h1 className="text-center text-3xl">No result found!</h1>
          </div>
        )}
      </div>
    </section>
  );
};

export default SearchPage;
