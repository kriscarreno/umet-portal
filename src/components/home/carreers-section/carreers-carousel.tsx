import { Program } from "@/types/programs";
import { colors } from "@/utils/theme";
import { AccountCircleOutlined, Verified } from "@mui/icons-material";
import {
  Box,
  Card,
  CardMedia,
  CardContent,
  Chip,
  Typography,
} from "@mui/material";
import React from "react";
import Slider from "react-slick";

type Props = {
  programs: Program[];
};

function ProgramsCarousel({ programs }: Props) {
  const settings = {
    dots: true,
    arrows: true,
    infinite: false,
    speed: 500,
    slidesToScroll: 4,
    slidesToShow: 4,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: "1200px",
        margin: "auto",
        borderRadius: "20px",
        overflow: "hidden",
      }}
    >
      {programs.length === 0 && (
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
            No hay cursos disponibles
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Por favor chequea luego.
          </Typography>
        </Box>
      )}
      <Slider {...settings}>
        {programs.map((program, index) => (
          <Box
            key={index}
            sx={{
              padding: 2,
              pt: 6,
              transition: "transform 300ms",
              "&:hover": {
                transform: "translateY(-10px)",
              },
            }}
          >
            <Card sx={{ width: "100%", borderRadius: "8px" }}>
              <Box sx={{ position: "relative" }}>
                <CardMedia
                  component="img"
                  height="160"
                  image={"/images/program1.png"}
                  alt={program.name}
                />
                <Chip
                  variant="outlined"
                  label="UMET"
                  icon={
                    <Verified color="primary" sx={{ color: colors.blue }} />
                  }
                  sx={{
                    position: "absolute",
                    top: "0",
                    right: "0",
                    m: 1,
                    bgcolor: "white",
                    borderRadius: "10px",
                    color: colors.blue,
                    border: "none",
                  }}
                />
              </Box>
              <CardContent sx={{ pb: "8px !important" }}>
                <Typography
                  variant="h6"
                  fontWeight="bold"
                  sx={{
                    display: "-webkit-box",
                    WebkitBoxOrient: "vertical",
                    WebkitLineClamp: 2,
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    minHeight: "68px",
                  }}
                >
                  {program.name}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{
                    mb: 2,
                    display: "-webkit-box",
                    WebkitBoxOrient: "vertical",
                    WebkitLineClamp: 2,
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}
                >
                  {program.description}
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    mt: 2,
                  }}
                >
                  <Typography
                    variant="body2"
                    color="primary"
                    sx={{
                      fontWeight: "bold",
                      cursor: "pointer",
                    }}
                  >
                    {program.program_type.name}
                  </Typography>

                  <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    <Typography variant="body2" sx={{ fontWeight: "bold" }}>
                      {program.avg_stars}
                    </Typography>
                    <Box component="span" sx={{ color: "gold" }}>
                      ★
                    </Box>
                    <Typography variant="body2" sx={{ fontWeight: "bold" }}>
                      {program.total_enrollments}
                    </Typography>
                    <Box
                      component="span"
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        width: "16px",
                        height: "16px",
                        borderRadius: "50%",
                        backgroundColor: "#F5F5F5",
                        color: "#333",
                        fontSize: "12px",
                      }}
                    >
                      <AccountCircleOutlined />
                    </Box>
                  </Box>
                </Box>
              </CardContent>
            </Card>
          </Box>
        ))}
      </Slider>
    </Box>
  );
}

export default ProgramsCarousel;
