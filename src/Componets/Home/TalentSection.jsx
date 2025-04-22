import React from "react";
import { Box, Typography, Button, Container } from "@mui/material";
import officeman from "../../assets/Image/officeman.png";

export default function TalentSection() {
  return (
    <Box sx={{ backgroundColor: "#fff",  pt: { xs: 4, md: 8 }, }}>
      <Container
        maxWidth="lg"
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Box
          component="img"
          src={officeman}
          alt="Business Man"
          sx={{
            height: { xs: 300, md: 600 },
            objectFit: "cover",
            width: "100%",
            maxWidth: { md: "50%" },
          }}
        />

        <Box
          sx={{
            width: "100%",
            maxWidth: { md: "50%" },
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            gap: 3,
            textAlign: { xs: "center", md: "left" },
            mt: { xs: 4, md: 0 },
            px: { xs: 2, md: 4 },
          }}
        >
          <Typography variant="h3" fontWeight="bold" gutterBottom>
            Discover Top Talent for Your Business Needs
          </Typography>
          <Typography variant="h5" color="text.secondary">
            At Office Based Jobs, we understand that the success of any business relies on its people. That’s why we’re dedicated to helping companies like yours find the perfect candidates to drive growth and innovation. With our extensive network and personalized approach to recruitment, we connect you with professionals
          </Typography>
          <Button
            variant="outlined"
            sx={{
              borderRadius: 9999,
              alignSelf: { xs: "center", md: "flex-start" },
              mt: 2,
            }}
          >
            CONTACT TALENTS
          </Button>
        </Box>
      </Container>
    </Box>
  );
}
