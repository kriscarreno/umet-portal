import React from "react";
import { Box, Typography } from "@mui/material";

const companies = [
  { name: "Airbnb", logo: "/Vector.svg" },
  { name: "Amazon", logo: "/Group 38.svg" },
  { name: "Fitbit", logo: "/Group 40.svg" },
  { name: "Google", logo: "/Group 37.svg" },
  { name: "Netflix", logo: "/netflix-original 1.svg" },
  { name: "PayPal", logo: "/paypal-original 1.svg" },
];

const Brands = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        padding: "40px 20px",
      }}
    >
      <Box>
        <Typography
          sx={{
            fontFamily: '"Montserrat", sans-serif',
          }}
          variant="h5"
          fontWeight="bold"
        >
          Nuestros estudiantes se gradúan y trabajan con
        </Typography>
        <Box
          sx={{
            width: "50px",
            height: "4px",
            backgroundColor: "#FFC107",
            mr: "auto",
            mb: "20px",
          }}
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "32px",
        }}
      >
        {companies.map((company, index) => (
          <Box
            key={index}
            component="img"
            src={company.logo}
            alt={company.name}
            sx={{
              height: "56px",
              width: { lg: "150px", xs: "100px" },
              objectFit: "contain",
              transition: "transform 0.3s",
              "&:hover": {
                transform: "scale(1.1)",
              },
            }}
          />
        ))}
      </Box>
    </Box>
  );
};

export default Brands;
