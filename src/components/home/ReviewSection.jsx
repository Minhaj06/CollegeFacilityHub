import React from "react";
import SectionTitle from "../sectionTitle/SectionTitle";
import { FaStar } from "react-icons/fa";

const ReviewSection = () => {
  const collegeReviews = [
    {
      _id: 1,
      user: "John Doe",
      rating: 4,
      comment: "Great college with excellent facilities and helpful professors.",
    },
    {
      _id: 2,
      user: "Jane Smith",
      rating: 5,
      comment: "I had an amazing experience at this college. Highly recommended!",
    },
    {
      _id: 3,
      user: "Michael Johnson",
      rating: 4,
      comment: "The college is good, but the campus could use some improvements.",
    },
    {
      _id: 4,
      user: "Emily Brown",
      rating: 5,
      comment: "I absolutely loved my time at this college. The staff is wonderful!",
    },
    {
      _id: 5,
      user: "Daniel Lee",
      rating: 3,
      comment: "The college lacks proper resources for research.",
    },
    {
      _id: 6,
      user: "Jane Smith",
      rating: 5,
      comment: "I had an amazing experience at this college. Highly recommended!",
    },
  ];

  return (
    <section className="py-20 bg-slate-100 dark:bg-gray-700">
      <div className="container mx-auto">
        <SectionTitle
          heading="College Reviews"
          subheading="See What Our Users Say About Our Colleges"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          {collegeReviews.map((review) => (
            <div
              key={review._id}
              className="bg-white border border-gray-300 rounded-lg shadow-md p-6"
            >
              <div className="flex items-center mb-4">
                <span className="text-blue-500 text-lg font-semibold mr-2">{review.user}</span>
                <div className="flex space-x-1">
                  {Array.from({ length: 5 }, (_, index) => (
                    <FaStar
                      key={index}
                      className={`h-5 w-5 ${
                        index < review.rating ? "text-yellow-500" : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
              </div>
              <p className="text-gray-700">{review.comment}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewSection;
