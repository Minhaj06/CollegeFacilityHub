import React from "react";
import Title from "../../components/title/Title";
import HomeBannerSlider from "../../components/home/HomeBannerSlider";
import CollegeSection from "../../components/home/CollegeSection";
import CollegeGallerySection from "../../components/home/CollegeGallerySection";
import ResearchPapersSection from "../../components/home/ResearchPapersSection";
import ReviewSection from "../../components/home/ReviewSection";

const HomePage = () => {
  return (
    <>
      <Title />
      <HomeBannerSlider />
      <CollegeSection />
      <CollegeGallerySection />
      <ResearchPapersSection />
      <ReviewSection />
    </>
  );
};

export default HomePage;
