import React from "react";
import SectionTitle from "../sectionTitle/SectionTitle";

const ResearchPapersSection = () => {
  const researchPapers = [
    {
      _id: 1,
      title: "The Impact of Climate Change on Biodiversity",
      description:
        "This research paper explores the effects of climate change on various species and ecosystems.",
      url: "https://example.com/research_paper_1.pdf",
    },
    {
      _id: 2,
      title: "Artificial Intelligence in Healthcare",
      description:
        "A study on the applications of artificial intelligence in improving healthcare services and diagnostics.",
      url: "https://example.com/research_paper_2.pdf",
    },
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto">
        <SectionTitle
          heading="Research Papers"
          subheading="Explore Our Recommended Research Papers"
        />

        <div className="mt-8">
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {researchPapers.map((paper) => (
              <li
                key={paper._id}
                className="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-md shadow-md p-6 text-center"
              >
                <a
                  href={paper.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link link-primary text-lg font-semibold"
                >
                  {paper.title}
                </a>
                <p className="text-gray-700 dark:text-gray-300 mt-2">{paper.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ResearchPapersSection;
