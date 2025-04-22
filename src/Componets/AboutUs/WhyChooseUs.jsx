import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";

const WhyChooseUs = () => (
  <Box sx={{ py: 10, fontFamily: "cursive" }}>
    <Container>
      <Typography
        variant="h4"
        fontWeight="bold"
        fontFamily="cursive"
        textAlign="center"
        gutterBottom
      >
        WHY CHOOSE US?
      </Typography>

      <Grid container spacing={4}>
        <Grid item xs={12} md={7}>
          <Typography
            padding={4}
            variant="h6"
            fontFamily="cursive"
            fontWeight="bold"
            textAlign="left"
          >
            WELCOME TO OFFICE BASED JOBS!
          </Typography>
          <Typography px={4} variant="body1" sx={{ mt: 1 }}>
            Choose us for our unmatched expertise in office-based recruitment, where personalized service meets innovative solutions. With a wealth of industry experience, we offer tailored strategies to meet your unique hiring needs, backed by an extensive network of top-tier talent. Our commitment to transparent communication ensures you’re always in the loop, while our results-driven approach ensures tangible outcomes that drive growth and success for your organization.
          </Typography>
        </Grid>

        <Grid item xs={12} md={5}>
          <Typography
            padding={4}
            variant="h6"
            fontFamily="cursive"
            fontWeight="bold"
          >
            OUR APPROACH
          </Typography>
          <Typography px={4} variant="body1" sx={{ mt: 1 }}>
            We leverage the latest technologies and recruitment strategies to stay ahead of the curve. From advanced candidate screening techniques to cutting-edge sourcing methods.
          </Typography>
        </Grid>
      </Grid>
    </Container>
  </Box>
);

export default WhyChooseUs;
