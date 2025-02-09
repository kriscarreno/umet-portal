"use client";
import React from "react";
import Slider from "react-slick";
import { Box, Typography, Card, CardContent, CardMedia } from "@mui/material";
import { Professor } from "@/types/professors";

const settings = {
  dots: true,
  infinite: true,
  arrows: false,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        centerMode: true, // Centrar el slide en mobile
        centerPadding: "0px", // Elimina padding lateral
      },
    },
  ],
};

type Props = {
  professors: Professor[];
};

const ProfessorCarousel = ({ professors }: Props) => {
  return (
    <Box
      sx={{
        backgroundColor: "#E6E6FA",
        borderRadius: "20px",
        padding: "40px 20px",
        fontFamily: "Montserrat, sans-serif",
        maxWidth: "1200px",
        width: "100%",
        margin: "auto",
        textAlign: "center",
      }}
    >
      <Typography variant="h4" fontWeight="bold" mb={2}>
        Nuestros profesores
      </Typography>
      <Box
        sx={{
          width: "50px",
          height: "4px",
          backgroundColor: "#5A5AA6",
          margin: "0 auto 30px",
        }}
      />
      <Slider {...settings}>
        {professors.map((professor, index) => (
          <Box
            key={index}
            sx={{
              padding: "10px",
              boxSizing: "border-box",
              width: "100%",
              transition: "transform 300ms",
              "&:hover": {
                transform: "translateY(-10px)",
              },
            }}
          >
            <Card
              sx={{
                borderRadius: "20px",
                overflow: "hidden",
                minHeight: "280px",
                display: "flex",
                flexDirection: "column",
                height: "100%",
              }}
            >
              <CardMedia
                component="img"
                height="160"
                image={professor.image}
                alt={professor.first_name}
              />
              <CardContent
                sx={{
                  flex: 1,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <Typography variant="h6" fontWeight="bold" noWrap>
                  {professor.first_name} {professor.last_name}
                </Typography>
                <Typography
                  variant="subtitle2"
                  color="text.secondary"
                  sx={{ mb: 1 }}
                  noWrap
                >
                  {professor.department}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    display: "-webkit-box",
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: "vertical",
                  }}
                >
                  {professor.description}
                </Typography>
              </CardContent>
            </Card>
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default ProfessorCarousel;
