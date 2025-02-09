"use client";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { Box, Button, CircularProgress } from "@mui/material";
import { Science } from "@mui/icons-material";
import { colors } from "@/utils/theme";
import { Category } from "@/types/categories";
import { getCategories } from "@/services/categories";
import useUrlParams from "@/utils/use-url-params";

const CategoryCarousel = () => {
  const [selectedCategory, setSelectedCategory] = useState("Ciencias");
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  const { updateSearchParams } = useUrlParams();

  const settings = {
    dots: true,
    infinite: false,
    centerMode: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    arrows: false,
  };

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await getCategories();
        setCategories(response.data || []);
      } catch (error) {
        console.error("Error fetching categories:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  const onClickCategory = (category: Category) => {
    setSelectedCategory(category.name);
    updateSearchParams({
      categoryId: {
        action: "add",
        value: category.id.toString(),
      },
    });
  };

  return (
    <Box
      sx={{
        backgroundColor: "white",
        pl: 4,
        py: 4,
        pr: 3,
        borderRadius: "10px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
        width: "100%",
      }}
    >
      <Box sx={{ width: "100%", maxWidth: "1200px", margin: "auto" }}>
        {loading ? (
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <CircularProgress />
          </Box>
        ) : (
          <Slider {...settings}>
            {categories.map((category) => (
              <Box key={category.name} sx={{ padding: "0 8px" }}>
                <Button
                  variant="contained"
                  onClick={() => onClickCategory(category)}
                  startIcon={<Science sx={{ width: "24px", height: "24px" }} />}
                  sx={{
                    padding: "10px 24px",
                    mb: 1,
                    backgroundColor:
                      selectedCategory === category.name
                        ? "#D0C8FF"
                        : "#F5F5F5",
                    color:
                      selectedCategory === category.name ? "darkblue" : "#333",
                    borderRadius: "10px",
                    whiteSpace: "nowrap",
                    boxShadow:
                      selectedCategory === category.name
                        ? "0px 4px 8px rgba(0, 0, 0, 0.1)"
                        : "none",
                    "&:hover": {
                      backgroundColor: "#E0D6FF",
                    },
                    fontFamily: "Montserrat, sans-serif",
                    fontSize: "15px",
                    textAlign: "center",
                    ".MuiButton-startIcon": {
                      mx: "0 !important",
                    },
                  }}
                >
                  <Box
                    sx={{
                      display: { xs: "none", md: "block" },
                    }}
                  >
                    {category.name.toUpperCase()}
                  </Box>
                </Button>
                {selectedCategory === category.name && (
                  <Box
                    sx={{
                      width: "45px",
                      height: "4px",
                      backgroundColor: colors.blue,
                      borderRadius: "200px",
                    }}
                  />
                )}
              </Box>
            ))}
          </Slider>
        )}
      </Box>
    </Box>
  );
};

export default CategoryCarousel;
