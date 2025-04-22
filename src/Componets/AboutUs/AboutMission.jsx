import React from "react";
import { Box, Typography, Container,  Paper } from "@mui/material";
import Img from "../../assets/Image/AboutUs.jpg";

const AboutMission = () => (
  <Container maxWidth="lg" sx={{ my: 8 }}>
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        alignItems: "center",
        gap: { xs: 6, md: 8 },
        px: { xs: 2,  },
      }}
    >
      <Box 
        sx={{ 
          flex: 1, 
          order: { xs: 2, md: 1 },
          px: { xs: 0, md: 2 }
        }}
      >
        <Typography 
          variant="h4" 
          fontWeight="bold" 
          sx={{ 
            mb: 4,
            position: "relative",
            display: "inline-block",
            "&:after": {
              content: '""',
              position: "absolute",
              width: "60px",
              height: "4px",
              bottom: "-10px",
              left: 0,
              backgroundColor: "primary.main",
              borderRadius: "2px"
            }
          }}
        >
          About Office Based Jobs
        </Typography>

        <Paper elevation={0} sx={{ p: 3, bgcolor: "background.paper", borderRadius: 2, mb: 4 }}>
          <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
            <Box sx={{ width: 4, height: 24, bgcolor: "primary.main", mr: 2, borderRadius: 1 }} />
            <Typography variant="h6" fontWeight="bold" color="primary.main">
              OUR MISSION
            </Typography>
          </Box>
          <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
            Our mission at Office Based Jobs is to empower individuals to achieve their career aspirations while assisting businesses in finding the perfect talent to drive growth and innovation.
          </Typography>
        </Paper>

        <Paper elevation={0} sx={{ p: 3, bgcolor: "background.paper", borderRadius: 2, mb: 4 }}>
          <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
            <Box sx={{ width: 4, height: 24, bgcolor: "primary.main", mr: 2, borderRadius: 1 }} />
            <Typography variant="h6" fontWeight="bold" color="primary.main">
              OUR VISION
            </Typography>
          </Box>
          <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
            Our vision is to become the leading provider of office-based recruitment solutions, recognized for our commitment to excellence, innovation, and integrity. We aim to revolutionize the recruitment industry by leveraging technology and personalized service to deliver unparalleled results for our clients and candidates alike.
          </Typography>
        </Paper>

        <Paper elevation={0} sx={{ p: 3, bgcolor: "background.paper", borderRadius: 2 }}>
          <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
            <Box sx={{ width: 4, height: 24, bgcolor: "primary.main", mr: 2, borderRadius: 1 }} />
            <Typography variant="h6" fontWeight="bold" color="primary.main">
              OUR SERVICES
            </Typography>
          </Box>
          <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
            We provide personalized guidance and strategic advice to help businesses navigate the recruitment process effectively. Our team works closely with clients to understand their unique needs and develop customized solutions that align with their goals and objectives.
          </Typography>
        </Paper>
      </Box>

      <Box 
        sx={{ 
          flex: 1, 
          order: { xs: 1, md: 2 },
          display: "flex", 
          justifyContent: "center" 
        }}
      >
        <Box
          component="img"
          src={Img}
          alt="Office Team Working"
          sx={{
            width: "100%",
            maxWidth: { xs: "350px", md: "450px" },
            height: "700px",
            borderRadius: "6px",
            boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
            transition: "transform 0.3s ease-in-out",
            "&:hover": {
              transform: "scale(1.02)"
            }
          }}
          loading="lazy"
        />
      </Box>
    </Box>
  </Container>
);

export default AboutMission;