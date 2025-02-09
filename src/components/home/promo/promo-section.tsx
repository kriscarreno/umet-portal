"use client";

import React from "react";
import Slider from "react-slick";
import { Box, Typography } from "@mui/material";
import Image from "next/image";

const slides = [
  {
    title: "Descuento de Verano",
    text: "Aprovecha nuestro descuento especial de verano y obtén hasta un 50% de descuento en productos seleccionados.",
    imageLeft: "/images/laptop.png",
    imageRight: "/images/accessory.png",
  },
  {
    title: "Oferta Especial",
    text: "Consigue productos electrónicos con hasta un 40% de descuento por tiempo limitado.",
    imageLeft: "/images/laptop.png",
    imageRight: "/images/accessory.png",
  },
];

function PromoSection() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
  };

  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: "1200px",
        margin: "auto",
        overflow: "hidden",
        mt: { xs: 4, md: 6 },
        p: { xs: 2, md: 0 },
      }}
    >
      <Box
        sx={{
          backgroundColor: "darkblue",
          borderRadius: "20px",
        }}
      >
        <Slider {...settings}>
          {slides.map((slide, index) => (
            <Box
              key={index}
              sx={{
                display: "flex !important",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "20px",
                borderRadius: "20px",
                color: "white",
              }}
            >
              <Box
                sx={{
                  width: {
                    xs: "100%",
                    md: "50%",
                  },
                  maxWidth: "195px",
                  maxHeight: "150px",
                }}
              >
                <Image
                  src={slide.imageLeft}
                  alt={slide.title}
                  style={{
                    maxWidth: "195px",
                    maxHeight: "150px",
                    width: "100%",
                    height: "auto",
                  }}
                  width={195}
                  height={150}
                />
              </Box>
              <Box textAlign="center" sx={{ flex: 1 }}>
                <Typography variant="h4" fontWeight="bold">
                  {slide.title}
                </Typography>
                <Typography variant="body1">{slide.text}</Typography>
              </Box>
              <Box
                sx={{
                  display: { xs: "none", md: "flex" },
                  justifyContent: "flex-end",
                }}
              >
                <Image src={slide.imageRight} alt="" width={300} height={85} />
              </Box>
            </Box>
          ))}
        </Slider>
      </Box>
    </Box>
  );
}

export default PromoSection;
