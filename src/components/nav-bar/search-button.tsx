"use client";
import React from "react";
import { Button, Menu, MenuItem } from "@mui/material";
import { Search, ArrowDropDown } from "@mui/icons-material";
import { colors } from "@/utils/theme";

const SearchButton = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Button
        variant="contained"
        onClick={handleClick}
        sx={{
          backgroundColor: "gold",
          color: colors.blue,
          borderRadius: "10px",
          padding: "8px 16px",
          fontWeight: "thin",
          textTransform: "none",
          "&:hover": {
            backgroundColor: "#e6b800",
          },
        }}
        startIcon={<Search />}
        endIcon={<ArrowDropDown />}
      >
        Explora
      </Button>
      <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
        <MenuItem onClick={handleClose}>Opción 1</MenuItem>
        <MenuItem onClick={handleClose}>Opción 2</MenuItem>
        <MenuItem onClick={handleClose}>Opción 3</MenuItem>
      </Menu>
    </>
  );
};

export default SearchButton;
