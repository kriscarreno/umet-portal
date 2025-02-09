"use client";
import UmetIcon from "@/assets/umet-icon";
import { Menu, PersonOutline } from "@mui/icons-material";
import {
  Box,
  Button,
  colors,
  SwipeableDrawer,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

function MenuDrawer() {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };
  return (
    <Box
      sx={{
        display: { xs: "flex", md: "none" },
        justifyContent: "end",
        alignItems: "center",
      }}
    >
      <Menu onClick={toggleDrawer(true)} sx={{ color: colors.yellow }} />
      <SwipeableDrawer
        anchor={"left"}
        open={open}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
      >
        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              backgroundColor: "darkblue",
              width: "100%",
              px: "62px",
              py: "14px",
              textAlign: "center",
            }}
          >
            <UmetIcon />
          </Box>

          <Box sx={{ marginTop: "40px", textAlign: "center" }}>
            <Typography
              variant="h6"
              sx={{
                fontWeight: "bold",
                marginBottom: "20px",
                cursor: "pointer",
              }}
            >
              Para estudiantes
            </Typography>
            <Typography
              variant="h6"
              sx={{
                fontWeight: "bold",
                marginBottom: "40px",
                cursor: "pointer",
              }}
            >
              Para profesores
            </Typography>
          </Box>
          <Box sx={{ width: "100%", p: 2 }}>
            <Button
              variant="contained"
              fullWidth
              startIcon={
                <PersonOutline sx={{ width: "24px", height: "24px" }} />
              }
              sx={{
                backgroundColor: "#FFC107",
                color: "black",
                textTransform: "none",
                padding: "10px 20px",
                borderRadius: "10px",
                "&:hover": {
                  backgroundColor: "#FFB300",
                },
              }}
            >
              Acceder
            </Button>
          </Box>
        </Box>
      </SwipeableDrawer>
    </Box>
  );
}

export default MenuDrawer;
