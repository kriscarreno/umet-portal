"use client";
import React from "react";
import Slider from "react-slick";
import { Box, Typography, Avatar, Card, Rating } from "@mui/material";
import { Testimonial } from "@/types/testimonials";

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

type Props = {
  testimonials: Testimonial[];
};

const TestimonialCarousel = ({ testimonials }: Props) => {
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
      {testimonials.length === 0 && (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            height: "300px",
            bgcolor: "#f5f5f5",
            borderRadius: "10px",
            p: 3,
          }}
        >
          <Typography variant="h6" color="text.secondary" gutterBottom>
            No hay testimonios disponibles
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Por favor chequea luego.
          </Typography>
        </Box>
      )}
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
                value={testimonial.stars}
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
                {testimonial.review}
              </Typography>
              <Box sx={{ display: "flex", alignItems: "center", mt: "auto" }}>
                <Avatar
                  src={"/images/img2.jpg"}
                  alt={testimonial.review}
                  sx={{ width: 40, height: 40, mr: 2 }}
                />
                <Typography variant="subtitle1" fontWeight="bold">
                  {testimonial.user_is}
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
