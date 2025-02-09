"use client";
import React from "react";
import { Box, Typography, Button } from "@mui/material";
import Image from "next/image";

const InfoBanner = () => {
  return (
    <Box
      sx={{
        p: { xs: 2, md: 0 },
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row-reverse" },
          alignItems: "center",
          justifyContent: "space-between",
          backgroundColor: "#FFE5C2",
          borderRadius: "20px",
          pt: 6,
          pl: 6,
          pr: 6,
          pb: 3,
          maxWidth: "1200px",
          margin: "auto",
          position: "relative",
        }}
      >
        <Box
          sx={{
            flex: 1,
            width: { xs: "100%", md: "auto" },
            maxWidth: { xs: "100%", md: "410px" },
            maxHeight: "400px",
            position: "relative",
            mb: { xs: 4, md: 0 },
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Image
            src="/images/banner-mom.png"
            alt="info-banner"
            layout="responsive"
            width={410}
            height={400}
            style={{
              borderRadius: "10px",
              maxWidth: "100%",
              height: "auto",
            }}
          />
        </Box>

        <Box
          sx={{
            flex: 1,
            textAlign: { xs: "center", md: "left" },
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
            ¡APRENDE CON NOSOTROS!
          </Typography>
          <Box
            sx={{
              width: "50px",
              height: "4px",
              backgroundColor: "#FFC107",
              mb: 2,
              margin: { xs: "0 auto", md: "inherit" },
            }}
          />
          <Typography
            sx={{
              mb: 3,
              fontFamily: '"Montserrat", sans-serif',
              fontSize: "18px",
              fontWeight: "500",
              lineHeight: "1.5",
            }}
            component="p"
            color="#646e73"
          >
            Conviértete en instructor y transforma vidas, incluida la tuya. La
            enseñanza es el camino hacia un futuro lleno de posibilidades.
          </Typography>
          <Button
            variant="contained"
            fullWidth
            sx={{
              backgroundColor: "#FFC107",
              color: "white",
              fontWeight: "bold",
              padding: "10px 20px",
              borderRadius: "10px",
              "&:hover": {
                backgroundColor: "#E0A800",
              },
              width: { xs: "100%", md: "auto" },
            }}
          >
            Empieza ya
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default InfoBanner;
