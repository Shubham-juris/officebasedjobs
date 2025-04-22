import React from "react";
import { Box, Typography, Button } from "@mui/material";
import image from "../../assets/Image/office.png";

export default function CareerEmpowerSection() {
  return (
    <Box
      sx={{
        maxWidth: "1440px",
        margin: "0 auto",
        px: { xs: 2, md: 4 },
        pt: { xs: 4, md: 8 },
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: { xs: "column", md: "row" },
      }}
    >
      <Box
        component="img"
        src={image}
        alt="Office Jobs"
        sx={{
          width: { xs: "100%", md: "50%" },
          height: "auto",
          objectFit: "cover",
        }}
      />

      <Box
        sx={{
          width: { xs: "100%", md: "50%" },
          textAlign: { xs: "center", md: "left" },
          px: { xs: 2, md: 5 },
          mt: { xs: 4, md: 0 },
        }}
      >
        <Typography
          variant="h4"
          sx={{
            fontWeight: "bold",
            mb: 2,
            fontSize: { xs: "1.5rem", md: "2rem" },
          }}
        >
          Empower Your Career with Office-Based Jobs
        </Typography>
        <Typography
          variant="body1"
          sx={{
            mb: 3,
            fontSize: { xs: "0.9rem", md: "1rem" },
          }}
        >
          For job seekers, Office-Based Jobs offers a gateway to a diverse array
          of exciting career opportunities within office settings. Whether
          you're an administrative assistant, a marketing professional, or an IT
          specialist, we have connections with top employers seeking your unique
          skills and talents.
        </Typography>
        <Button
          variant="outlined"
          sx={{
            borderRadius: "50px",
            px: 3,
            py: 1,
            fontSize: { xs: "0.8rem", md: "1rem" },
          }}
        >
          Find a Job
        </Button>
      </Box>
    </Box>
  );
}
