import React from "react";
import { Box, Typography, Container } from "@mui/material";
import jobsImage from "../../assets/Image/jobs.png";

export default function MainSection() {
  return (
    <Box sx={{ backgroundColor: "#1976d2", py: { xs: 4, md: 8 } }}>
      <Container
        maxWidth="lg"
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          justifyContent: "center",
          height: { md: "600px" },
        }}
      >
        <Box
          sx={{
            flex: 1,
            color: "#fff",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: { xs: 2, md: 6 },
          }}
        >
          <Typography
            variant="h2"
            component="h1"
            gutterBottom
            sx={{ fontWeight: "bold", fontSize: { xs: "1.5rem", md: "3rem" } }}
          >
            Unlock Your Office Potential
          </Typography>
          <Typography
            variant="h5"
            component="h2"
            gutterBottom
            sx={{
              fontWeight: "bold",
              fontSize: { xs: "1rem", md: "1.5rem" },
            }}
          >
            FIND YOUR DREAM JOB WITH OFFICE BASED JOBS
          </Typography>
          <Typography
            variant="body1"
            sx={{ mb: 2, fontSize: { xs: "0.9rem", md: "1.1rem" }, lineHeight: 1.6 }}
          >
            At Office Based Jobs, we specialize in connecting job seekers with a
            wide range of office-based positions across various industries...
          </Typography>
          <Typography
            variant="body1"
            sx={{ fontSize: { xs: "0.9rem", md: "1.1rem" }, lineHeight: 1.6 }}
          >
            From entry-level positions to senior roles, our platform features a
            diverse selection of office jobs to suit every career path...
          </Typography>
        </Box>

        <Box
          sx={{
            flex: 1,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: { xs: 300, md: "100%" },
            overflow: "hidden",
            mt: { xs: 3, md: 0 },
          }}
        >
          <Box
            component="img"
            src={jobsImage}
            alt="Office workers collaborating"
            sx={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </Box>
      </Container>
    </Box>
  );
}
