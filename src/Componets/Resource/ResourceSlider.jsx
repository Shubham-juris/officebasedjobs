import React, { useState, useEffect } from "react";
import { Box, Typography, IconButton } from "@mui/material";
import { ArrowBack, ArrowForward } from "@mui/icons-material";
import SocialImage from "../../assets/Image/jobs.png";
import MarketingImage from "../../assets/Image/officejobs.png";
import SupportImage from "../../assets/Image/jobs.png";
import CRMImage from "../../assets//Image/officejobs.png";

const ResourceSlider = () => {
  const images = [SocialImage, MarketingImage, SupportImage, CRMImage];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 3000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  const getVisibleImages = () => {
    return [
      images[(currentIndex - 1 + images.length) % images.length],
      images[currentIndex % images.length],
      images[(currentIndex + 1) % images.length],
    ];
  };

  return (
    <>
      <div className="text-[2em] text-center mt-[6em]">
        <h1>
          <b>Behind the Scenes with Office Based Jobs</b>
        </h1>
      </div>

      <Box
        sx={{
          textAlign: "center",
          bgcolor: "#fff",
          p: 4,
          position: "relative",
        }}
      >
        {/* Image Container */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
            overflow: "hidden",
            width: "100%",
          }}
        >
          {/* Previous Button */}
          <IconButton
            onClick={handlePrev}
            sx={{ position: "absolute", left: 10, zIndex: 2 }}
          >
            <ArrowBack fontSize="large" />
          </IconButton>

          {/* Images */}
          <Box
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: { xs: 1, sm: 2 }, // Adjust gap for smaller screens
            }}
          >
            {getVisibleImages().map((img, index) => (
              <Box
                key={index}
                sx={{
                  width:
                    index === 1
                      ? { xs: "90%", sm: "80%" }
                      : { xs: "40%", sm: "30%" }, // Adjust width for smaller screens
                  opacity: index === 1 ? 1 : 0.6,
                  transform: index === 1 ? "scale(1.1)" : "scale(0.9)",
                  transition: "all 0.5s ease-in-out",
                }}
              >
                <img
                  src={img}
                  alt="Portfolio"
                  style={{
                    width: "100%",
                    height: "auto", // Maintain aspect ratio
                    maxHeight: "350px", // Limit height for larger screens
                    objectFit: "contain",
                  }}
                />
              </Box>
            ))}
          </Box>

          {/* Next Button */}
          <IconButton
            onClick={handleNext}
            sx={{ position: "absolute", right: 10, zIndex: 2 }}
          >
            <ArrowForward fontSize="large" />
          </IconButton>
        </Box>
      </Box>
    </>
  );
};

export default ResourceSlider;
