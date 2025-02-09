"use client";
import React from "react";
import Slider from "react-slick";
import { Box, Typography, Avatar, Card, Rating } from "@mui/material";

const testimonials = [
  {
    name: "Luis Fernández",
    feedback:
      "El sistema de seguimiento del progreso es muy útil. Me ayuda a mantenerme motivado y enfocado en mis metas.",
    rating: 4,
    image: "/images/img2.jpg",
  },
  {
    name: "Laura Hernández",
    feedback:
      "La plataforma es muy intuitiva y fácil de usar. La experiencia de aprendizaje es muy satisfactoria.",
    rating: 5,
    image: "/images/img2.jpg",
  },
  {
    name: "Elena Vargas",
    feedback:
      "El soporte técnico es muy eficiente. Siempre responden rápido y resuelven cualquier inconveniente.",
    rating: 5,
    image: "/images/img2.jpg",
  },
];

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: false,
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
        centerMode: true,
        centerPadding: "0px",
      },
    },
  ],
};

const TestimonialCarousel = () => {
  return (
    <Box
      sx={{
        maxWidth: "1200px",
        margin: "auto",
        textAlign: "center",
        padding: "40px 20px",
        width: "100%",
      }}
    >
      <Typography variant="h4" fontWeight="bold" mb={2}>
        Testimonios
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
        {testimonials.map((testimonial, index) => (
          <Box
            key={index}
            sx={{
              padding: { xs: "8px", md: "16px" },
              boxSizing: "border-box",
              transition: "transform 300ms",
              "&:hover": {
                transform: "translateY(-10px)",
              },
            }}
          >
            <Card
              sx={{
                backgroundColor: "darkblue",
                color: "white",
                borderRadius: "20px",
                padding: "20px",
                minHeight: "220px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                height: "100%",
              }}
            >
              <Rating
                value={testimonial.rating}
                readOnly
                size="small"
                sx={{ mb: 2, color: "gold" }}
              />
              <Typography
                variant="body2"
                sx={{
                  mb: 2,
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  display: "-webkit-box",
                  WebkitLineClamp: 3,
                  WebkitBoxOrient: "vertical",
                }}
              >
                {testimonial.feedback}
              </Typography>
              <Box sx={{ display: "flex", alignItems: "center", mt: "auto" }}>
                <Avatar
                  src={testimonial.image}
                  alt={testimonial.name}
                  sx={{ width: 40, height: 40, mr: 2 }}
                />
                <Typography variant="subtitle1" fontWeight="bold">
                  {testimonial.name}
                </Typography>
              </Box>
            </Card>
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default TestimonialCarousel;
