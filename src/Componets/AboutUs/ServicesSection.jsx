import React from "react";
import { Box, Typography, Container, Card, CardContent, Avatar, Grid } from "@mui/material";
import {
  Group as GroupIcon,
  Search as SearchIcon,
  Support as SupportIcon,
} from "@mui/icons-material";

const serviceItems = [
  {
    icon: <GroupIcon sx={{ fontSize: 40 }} />,
    title: "Talent Acquisition",
    description: "Leveraging cutting-edge recruitment techniques and a vast network of candidates, we help businesses find top talent across a wide range of office-based roles. From entry-level positions to executive leadership."
  },
  {
    icon: <SearchIcon sx={{ fontSize: 40 }} />,
    title: "Candidate Screening",
    description: "Our rigorous screening process ensures that only the most qualified candidates are presented to our clients. We assess candidates on their skills, experience, and cultural fit."
  },
  {
    icon: <SupportIcon sx={{ fontSize: 40 }} />,
    title: "Continuous Support",
    description: "Our commitment to excellence doesn't end once a placement is made. We provide ongoing support to both clients and candidates to ensure their long-term success."
  }
];

const ServicesSection = () => (
  <Box
    sx={{
      backgroundColor: "#1E40AF",
      backgroundImage: "linear-gradient(135deg, #150AFF 0%, #3f51b5 100%)",
      color: "white",
      py: 8,
      mt: 5,
      boxShadow: "0 10px 30px rgba(21, 10, 255, 0.3)",
      overflow: "hidden",
      position: "relative",
      "&::before": {
        content: '""',
        position: "absolute",
        top: 0,
        right: 0,
        width: "300px",
        height: "300px",
        borderRadius: "50%",
        background: "rgba(255, 255, 255, 0.05)",
        transform: "translate(150px, -150px)",
      },
      "&::after": {
        content: '""',
        position: "absolute",
        bottom: 0,
        left: 0,
        width: "200px",
        height: "200px",
        borderRadius: "50%",
        background: "rgba(255, 255, 255, 0.05)",
        transform: "translate(-100px, 100px)",
      },
    }}
  >
    <Container maxWidth="lg">
      <Box sx={{ textAlign: "center", mb: 6, position: "relative", zIndex: 1 }}>
        <Typography 
          variant="h4" 
          fontWeight="bold" 
          sx={{ 
            mb: 2,
            textTransform: "uppercase",
            letterSpacing: 1,
            display: "inline-block",
            position: "relative",
            "&::after": {
              content: '""',
              position: "absolute",
              bottom: -10,
              left: "50%",
              transform: "translateX(-50%)",
              width: "80px",
              height: "4px",
              background: "white",
              borderRadius: "2px",
            }
          }}
        >
          Our Services
        </Typography>
        <Typography variant="subtitle1" sx={{ maxWidth: "600px", mx: "auto", opacity: 0.9 }}>
          Comprehensive recruitment solutions tailored to your unique business needs
        </Typography>
      </Box>

      <Grid container spacing={4} sx={{ position: "relative", zIndex: 1 }}>
        {serviceItems.map((service, index) => (
          <Grid item xs={12} md={4} key={index}>
            <Card
              sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                background: "rgba(255, 255, 255, 0.1)",
                backdropFilter: "blur(10px)",
                border: "1px solid rgba(255, 255, 255, 0.2)",
                borderRadius: 3,
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                "&:hover": {
                  transform: "translateY(-6px)",
                  boxShadow: "0 12px 20px rgba(0, 0, 0, 0.2)",
                }
              }}
            >
              <CardContent sx={{ p: 4, textAlign: "center" }}>
                <Avatar
                  sx={{
                    mx: "auto",
                    mb: 3,
                    width: 80,
                    height: 80,
                    backgroundColor: "rgba(255, 255, 255, 0.9)",
                    color: "#150AFF",
                    boxShadow: "0 8px 16px rgba(0, 0, 0, 0.1)",
                  }}
                >
                  {service.icon}
                </Avatar>
                <Typography 
                  variant="h5" 
                  fontWeight="bold" 
                  color= "white"
                  gutterBottom
                  sx={{ mb: 2 }}
                >
                  {service.title}
                </Typography>
                <Typography variant="body1" sx={{ opacity: 0.9, lineHeight: 1.7, color: "white" }}>
                  {service.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  </Box>
);

export default ServicesSection;