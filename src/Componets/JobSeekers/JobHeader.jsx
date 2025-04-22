import React from "react";
import { Box, Typography, Container, Grid } from "@mui/material";
import aboutheaderimg from "../../assets/Image/jobs.png";

export default function JobHeader() {
  return (
    <Box sx={{ width: "100%", }}>
      <Box
        sx={{
          bgcolor: "#1E40AF", 
          py: 4,
          
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            <Grid
              item
              xs={12}
              md={6}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Box
                component="img"
                src={aboutheaderimg}
                alt="Office jobs illustration"
                sx={{
                  height: { xs: "15rem", md: "20rem" }, 
                  maxWidth: "100%",
                }}
              />
            </Grid>

            <Grid
              item
              xs={12}
              md={6}
              sx={{
                p: 4,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                gap: { xs: 4, md: 8 },
                color: "white",
              }}
            >
              <Typography
                variant="h3"
                component="h1"
                sx={{
                  fontWeight: 800,
                  fontFamily: "serif",
                  fontSize: { xs: "1.5rem", md: "2.25rem" },
                }}
              >
                Elevate Your Career
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  fontWeight: "normal",
                  textAlign: "center",
                  fontSize: { xs: "0.875rem", md: "1rem" },
                }}
              >
                Expand your career Possibilities with office Based Jobs
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
}