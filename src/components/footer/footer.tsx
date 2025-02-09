import React from "react";
import { Box, Grid2, Typography, Button } from "@mui/material";
import { colors } from "@/utils/theme";
import UmetIcon from "@/assets/umet-icon";

const Footer = () => {
  return (
    <Box
      sx={{
        padding: "40px 20px",
        fontFamily: "Montserrat, sans-serif",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Box sx={{ maxWidth: "1200px" }}>
        <Grid2 container spacing={4}>
          <Grid2 size={{ xs: 12, md: 3 }} sx={{ p: 2 }}>
            <UmetIcon dark />
            <Typography variant="body2" color="text.secondary" mb={2}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore.
            </Typography>
            <Button
              variant="outlined"
              sx={{
                textTransform: "none",
                color: colors.blue,
                borderColor: colors.blue,
                borderRadius: "10px",
              }}
            >
              Inscribirse
            </Button>
          </Grid2>

          {["EXPLORA", "ACERCA DE", "CONTÁCTANOS"].map((section, index) => (
            <Grid2 size={{ xs: 12, md: 3 }} key={index} sx={{ p: 2 }}>
              <Typography variant="h6" color={colors.blue} mb={2}>
                {section}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore.
              </Typography>
            </Grid2>
          ))}
        </Grid2>

        <Box
          sx={{
            borderTop: "1px solid #DDD",
            margin: "20px 0",
            width: "100vw !important",
          }}
        />

        <Box textAlign="center" sx={{ p: 2 }}>
          <Typography variant="body2" color="text.secondary" mb={1}>
            © CEC, 2024. Maccarian. Todos los derechos reservados
          </Typography>
          <Typography variant="caption" color="text.secondary">
            Cuando visita o interactúa con nuestros sitios, servicios o
            herramientas, nosotros o nuestros proveedores de servicios
            autorizados podemos utilizar cookies para almacenar información que
            le ayude a brindarle una experiencia mejor, más rápida y segura y
            con fines de marketing.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
