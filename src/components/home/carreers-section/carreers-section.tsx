"use client";
import React from "react";
import { Box } from "@mui/material";
import CategoryCarousel from "./category-carousel";
import CarreersCarousel from "./carreers-carousel";
import { Course } from "@/types/courses";

type Props = { courses: Course[] };

const CarreersSection = ({ courses }: Props) => {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 2,
      }}
    >
      <Box
        sx={{
          backgroundColor: "darkblue",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          pb: "220px",
          pt: 4,
        }}
      >
        <Box
          sx={{
            width: "100%",
            maxWidth: "1200px",
            borderRadius: "20px",
            overflow: "hidden",
          }}
        >
          <CategoryCarousel />
        </Box>
      </Box>

      <Box
        sx={{
          width: "100%",
          borderRadius: "0 0 20px 20px",
          mt: "-224px",
          zIndex: 2,
          position: "relative",
        }}
      >
        <CarreersCarousel courses={courses} />
      </Box>
    </Box>
  );
};

export default CarreersSection;
