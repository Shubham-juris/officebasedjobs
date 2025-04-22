import React from "react";
import { Box, Typography, Grid, Container } from "@mui/material";
import images from "../../assets/Image/jobseekers/elevateyourcareer.jpg";

export default function Discoversession() {
  return (
    <Box sx={{ width: "100%", pb: 9 }}>
      <Container>
        <Box
          sx={{
            py: { xs: 6, md: 8 },
            mt: { xs: 4, md: 6 },
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography
            variant="h5"
            md={{ variant: "h4" }}
            fontWeight="extrabold"
            fontFamily="serif"
            textAlign="center"
          >
            Discover Office jobs Tailored just for you with us.
          </Typography>
        </Box>

        <Grid container spacing={4} sx={{ py: { xs: 6, md: 8 },  }}>
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                gap: { xs: 3, md: 6 },
              }}
            >
              <Typography
                variant="subtitle1"
                fontWeight="extrabold"
                fontFamily="serif"
                sx={{ letterSpacing: 2 }}
              >
                Unlock the full potential of your team with office based jobs!
              </Typography>
              <Typography variant="body1" sx={{ fontWeight: 300 }}>
                At Office Based Jobs, we believe that every business has the
                potential to achieve great things with the right team in place.
                That's why we offer a range of services to help you attract,
                develop, and retain top talent. Whether you're seeking your next
                challenge or looking to take the next step in your career, we
                offer a range of services tailored to meet your needs.
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={12} md={6}>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <img
                src={images}
                alt="elevate your career"
                style={{ height: "20rem", maxHeight: "100%", width: "auto" }}
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
