"use client";
import { Box, Typography } from "@mui/material";
import React from "react";
import CarreersCarousel from "../carreers-section/carreers-carousel";
import { Program } from "@/types/programs";

type Props = { programs: Program[] };

function TopProgramsContainer({ programs }: Props) {
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
          backgroundColor: "#ffcc00",
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
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              textAlign: "center",
            }}
          >
            <Typography
              variant="h3"
              fontWeight="bold"
              color="#1e2022"
              sx={{
                mb: 2,
                fontSize: { xs: "2rem", md: "3rem" },
                fontWeight: "800",
                fontFamily: '"Montserrat", sans-serif',
              }}
            >
              Programas más populares
            </Typography>
            <Box
              sx={{
                width: "50px",
                height: "4px",
                backgroundColor: "darkblue",
                mb: 2,
              }}
            />
          </Box>
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
        <CarreersCarousel programs={programs} />
      </Box>
    </Box>
  );
}

export default TopProgramsContainer;
