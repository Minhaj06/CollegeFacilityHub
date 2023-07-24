import React from "react";

const PageHeading = ({ heading, subheading }) => {
  return (
    <div className="mb-12">
      <h1 className="text-3xl font-semibold text-center mb-4">{heading}</h1>
      <p className="text-gray-600 dark:text-gray-400 text-center text-xl">{subheading}</p>
    </div>
  );
};

export default PageHeading;
