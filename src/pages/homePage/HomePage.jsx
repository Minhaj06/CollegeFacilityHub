import React from "react";
import Title from "../../components/title/Title";
import HomeBannerSlider from "../../components/home/HomeBannerSlider";
// import PopularClassesSection from "../../components/home/PopularClassesSection";
// import PopularInstructorsSection from "../../components/home/PopularInstructorsSection";
// import TestimonialsSection from "../../components/home/TestimonialsSection";
import CollegeSection from "../../components/home/CollegeSection";

const HomePage = () => {
  return (
    <>
      <Title />
      <HomeBannerSlider />
      <CollegeSection />

      {/* <PopularClassesSection />
      <PopularInstructorsSection />
      <TestimonialsSection /> */}
    </>
  );
};

export default HomePage;
