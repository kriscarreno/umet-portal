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
import { getProfessors } from "@/services/professor";
import { getPrograms } from "@/services/programs";
import { getTestimonials } from "@/services/testimonials";
import { getPromos } from "@/services/promos";

async function HomeContainer() {
  const programs = await getPrograms();
  const professors = await getProfessors();
  const testimonials = await getTestimonials();
  const promos = await getPromos();
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 6,
        mt: { xs: 4, md: 6 },
      }}
    >
      {Boolean(promos.data?.length) && (
        <PromoSection promos={promos.data || []} />
      )}
      <InfoBanner />
      <Brands />
      <CarreersSection programs={programs.data || []} />
      <InfoBanner2 />
      <TopProgramsContainer programs={programs.data || []} />
      <ProfessorCarousel professors={professors.data || []} />
      <TestimonialCarousel testimonials={testimonials.data || []} />
    </Box>
  );
}

export default HomeContainer;
