import { Box } from "@mui/material";
import React from "react";
import PromoSection from "./promo/promo-section";
import InfoBanner from "./info-banner/info-banner";
import Brands from "./brands/brands";
import CarreersSection from "./carreers-section/carreers-section";
import InfoBanner2 from "./info-banner/info-banner2";
import ProfessorCarousel from "./teachers/professor-carousel";
import TestimonialCarousel from "./testimonials/testimonials";
import TopProgramsContainer from "./top-programs/top-programs-container";
import { getCourses } from "@/services/courses";
import { getProfessors } from "@/services/professor";
import { programs } from "@/mock/mock";

async function HomeContainer() {
  const courses = await getCourses();
  const professors = await getProfessors();
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 6,
      }}
    >
      <PromoSection />
      <InfoBanner />
      <Brands />
      <CarreersSection courses={courses.data || programs} />
      <InfoBanner2 />
      <TopProgramsContainer courses={courses.data || programs} />
      <ProfessorCarousel professors={professors.data || []} />
      <TestimonialCarousel />
    </Box>
  );
}

export default HomeContainer;
