"use client";
import UmetIcon from "@/assets/umet-icon";
import { colors } from "@/utils/theme";
import { AppBar, Box, Button, Typography } from "@mui/material";
import React from "react";
import SearchButton from "./search-button";
import Link from "next/link";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import MenuDrawer from "./menu-drawer";

function NavBarContainer() {
  return (
    <Box sx={{ width: "100%", height: "100%" }}>
      <AppBar
        position="static"
        sx={{ height: "100%", px: 2, bgcolor: colors.blue }}
      >
        <Box
          sx={{
            py: "14px",
            width: "100%",
            maxWidth: "1200px",
            mx: "auto",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-start",
              width: { xs: "100%", md: "auto" },
              gap: 3,
            }}
          >
            <UmetIcon />
            <SearchButton />
          </Box>
          <MenuDrawer />
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              alignItems: "center",
              gap: 3,
            }}
          >
            <Link href={"/login"}>Para alumnos</Link>
            <Link href={"/register"}>Para profesores</Link>
            <Button
              sx={{ bgcolor: "gold", color: colors.blue, borderRadius: "10px" }}
              variant="contained"
              startIcon={
                <PersonOutlineOutlinedIcon
                  sx={{ color: colors.blue, width: "24px", height: "24px" }}
                />
              }
            >
              <Typography fontSize={"14px"} fontWeight={"thin"}>
                Acceder
              </Typography>
            </Button>
          </Box>
        </Box>
      </AppBar>
    </Box>
  );
}

export default NavBarContainer;
