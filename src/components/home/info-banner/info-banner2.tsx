"use client";
import React from "react";
import { Box, Typography, Stack } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";
import Image from "next/image";

const features = [
  {
    title: "Educación de calidad",
    description:
      "Los programas de CEC están diseñados por expertos en la materia, asegurando que recibas una formación de alta calidad y actualizada.",
  },
  {
    title: "Desarrollo Profesional",
    description:
      "No solo adquirirás conocimientos teóricos, sino también habilidades prácticas que te prepararán para el mundo laboral.",
  },
  {
    title: "Flexibilidad",
    description:
      "Los programas de CEC ofrecen modalidades de estudio flexibles, incluyendo opciones en línea y presenciales, para que puedas adaptar tu educación a tu estilo de vida.",
  },
  {
    title: "Red de Contactos",
    description:
      "Tendrás la oportunidad de conectar con profesionales y compañeros de diversas áreas, ampliando tu red de contactos y abriendo puertas a futuras oportunidades laborales.",
  },
  {
    title: "Apoyo Integral",
    description:
      "Desde el primer día, contarás con el apoyo de tutores y asesores que te guiarán en tu camino académico y profesional.",
  },
  {
    title: "Certificación Reconocida",
    description:
      "Al finalizar tu programa, obtendrás una certificación reconocida que potenciará tu currículum y te hará destacar en el mercado laboral.",
  },
];

const Banner = () => {
  return (
    <Box
      sx={{
        p: { xs: 2, md: 0 },
      }}
    >
      <Stack
        gap={6}
        sx={{
          backgroundColor: "#FFE5C2",
          borderRadius: "20px",
          p: 4,
          fontFamily: "Montserrat, sans-serif",
          maxWidth: "1200px",
          margin: "auto",
          width: "100%",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row-reverse" },
            justifyContent: "space-between",
            alignItems: "center",
            gap: 4,
          }}
        >
          <Box
            sx={{
              maxWidth: "507px",
              width: { xs: "100%", md: "50%" },
              position: "relative",
              height: { xs: "250px", md: "360px" },
            }}
          >
            <Image
              src="/images/student.png"
              alt="infobanner2"
              fill
              style={{
                borderRadius: "10px",
                objectFit: "cover",
              }}
            />
          </Box>

          <Box sx={{ width: { xs: "100%", md: "50%" } }}>
            <Typography
              variant="h3"
              fontWeight="bold"
              color="#1e2022"
              sx={{
                mb: 2,
                fontWeight: "800",
                fontSize: { xs: "1.8rem", md: "2rem" },
                fontFamily: '"Montserrat", sans-serif',
                textAlign: { xs: "center", md: "left" },
              }}
            >
              ¿Qué puedes esperar al estudiar en un programa de CEC?
            </Typography>
            <Box
              sx={{
                width: "50px",
                height: "4px",
                backgroundColor: "#FFC107",
                mb: 2,
                mx: { xs: "auto", md: 0 },
              }}
            />
            <Typography
              sx={{
                mb: 3,
                fontFamily: '"Montserrat", sans-serif',
                fontSize: "1rem",
                fontWeight: "500",
                lineHeight: "1.5",
                textAlign: { xs: "center", md: "left" },
              }}
              component="p"
              color="#646e73"
            >
              Estudiar en un programa de CEC es una experiencia transformadora.
              Aquí obtendrás:
            </Typography>

            <Stack direction={{ xs: "column", md: "row" }} gap={6}>
              {features.slice(0, 2).map((feature, index) => (
                <Box
                  key={index}
                  sx={{ display: "flex", flexDirection: "column", gap: 1 }}
                >
                  <Stack direction="row" gap="6px" alignItems="center">
                    <CheckCircle sx={{ color: "#FFC107" }} />
                    <Typography
                      sx={{
                        fontFamily: '"Montserrat", sans-serif',
                        fontSize: "1rem",
                        fontWeight: "700",
                        lineHeight: "1.5",
                      }}
                    >
                      {feature.title}
                    </Typography>
                  </Stack>
                  <Typography
                    sx={{
                      fontFamily: '"Montserrat", sans-serif',
                      fontSize: "0.875rem",
                      fontWeight: "300",
                      lineHeight: "1.5",
                    }}
                  >
                    {feature.description}
                  </Typography>
                </Box>
              ))}
            </Stack>
          </Box>
        </Box>

        <Stack direction={{ xs: "column", md: "row" }} gap={6}>
          {features.slice(2).map((feature, index) => (
            <Box
              key={index}
              sx={{ display: "flex", flexDirection: "column", gap: 1 }}
            >
              <Stack direction="row" gap="6px" alignItems="center">
                <CheckCircle sx={{ color: "#FFC107" }} />
                <Typography
                  sx={{
                    fontFamily: '"Montserrat", sans-serif',
                    fontSize: "1rem",
                    fontWeight: "700",
                    lineHeight: "1.5",
                  }}
                >
                  {feature.title}
                </Typography>
              </Stack>
              <Typography
                sx={{
                  fontFamily: '"Montserrat", sans-serif',
                  fontSize: "0.875rem",
                  fontWeight: "300",
                  lineHeight: "1.5",
                }}
              >
                {feature.description}
              </Typography>
            </Box>
          ))}
        </Stack>
      </Stack>
    </Box>
  );
};

export default Banner;
