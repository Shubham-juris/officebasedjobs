import React, { useState } from "react";
import { Container, Typography, Link, Box, Collapse, IconButton, Grid } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Group as GroupIcon, Search as SearchIcon, Support as SupportIcon } from "@mui/icons-material";
import TopImg from "../../assets/Image/AboutUsMain.jpg";
import Img from "../../assets/Image/AboutUs.jpg";

const AboutUs = () => {
  const [open, setOpen] = useState(false);

  return (
    <Box sx={{ py: 5 }}>
      <Container>
        {/* Hero Section */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: "center",
            backgroundColor: "primary.main",
            color: "white",
            p: 5,
            borderRadius: 2,
          }}
        >
          <Box sx={{ flex: 1 }}>
            <img
              src={TopImg}
              alt="Office"
              style={{ width: "100%", borderRadius: "8px" }}
            />
          </Box>
          <Box sx={{ flex: 1, textAlign: "left", px: 3 }}>
            <Typography variant="h3" fontWeight="bold" gutterBottom>
              ABOUT US
            </Typography>
            <Typography variant="body1">
              At Office Based Jobs, we're more than just a recruitment agency;
              we're your strategic partner in talent acquisition. With years of
              industry expertise and a passion for connecting top talent with
              leading companies.
            </Typography>
          </Box>
        </Box>

        {/* About Section */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: "center",
            gap: 4,
            mt: 5,
          }}
        >
          {/* Left Text Section */}
          <Box sx={{ flex: 1 }}>
            <Typography variant="h4" fontWeight="bold" gutterBottom>
              About Office Based Jobs
            </Typography>
            <Typography variant="h6" fontWeight="bold" sx={{ mt: 2 }}>
              OUR MISSION
            </Typography>
            <Typography variant="body1" sx={{ mt: 1, lineHeight: 1.6 }}>
              Our mission at Office Based Jobs is to empower individuals to achieve their career aspirations while assisting businesses in finding the perfect talent to drive growth and innovation.
            </Typography>

            <Typography variant="h6" fontWeight="bold" sx={{ mt: 3 }}>
              OUR VISION
            </Typography>
            <Typography variant="body1" sx={{ mt: 1, lineHeight: 1.6 }}>
              Our vision is to become the leading provider of office-based recruitment solutions, recognized for our commitment to excellence, innovation, and integrity.
            </Typography>

            <Typography variant="h6" fontWeight="bold" sx={{ mt: 3 }}>
              OUR SERVICES
            </Typography>
            <Typography variant="body1" sx={{ mt: 1, lineHeight: 1.6 }}>
              We provide personalized guidance and strategic advice to help businesses navigate the recruitment process effectively.
            </Typography>
          </Box>

          {/* Right Image Section */}
          <Box sx={{ flex: 1, display: "flex", justifyContent: "center" }}>
            <img
              src={Img}
              alt="Office Team Working"
              style={{ width: "100%", maxWidth: "500px", borderRadius: "8px" }}
              loading="lazy"
            />
          </Box>
        </Box>

        {/* Our Services Section */}
        <Box
          sx={{
            backgroundColor: "primary.main",
            color: "white",
            py: 5,
            mt: 5,
            borderRadius: 2,
          }}
        >
          <Typography variant="h4" fontWeight="bold" align="center" gutterBottom>
            OUR SERVICES
          </Typography>

          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              justifyContent: "space-around",
              textAlign: "center",
              gap: 4,
              mt: 3,
            }}
          >
            {/* Service 1 */}
            <Box sx={{ maxWidth: 300 }}>
              <GroupIcon sx={{ fontSize: 80 }} />
              <Typography variant="h6" fontWeight="bold" sx={{ mt: 2 }}>
                Talent Acquisition
              </Typography>
              <Typography variant="body2" sx={{ mt: 1 }}>
                Leveraging cutting-edge recruitment techniques, we help businesses find top talent across a wide range of office-based roles.
              </Typography>
            </Box>

            {/* Service 2 */}
            <Box sx={{ maxWidth: 300 }}>
              <SearchIcon sx={{ fontSize: 80 }} />
              <Typography variant="h6" fontWeight="bold" sx={{ mt: 2 }}>
                Candidate Screening
              </Typography>
              <Typography variant="body2" sx={{ mt: 1 }}>
                Our rigorous screening process ensures that only the most qualified candidates are presented to our clients.
              </Typography>
            </Box>

            {/* Service 3 */}
            <Box sx={{ maxWidth: 300 }}>
              <SupportIcon sx={{ fontSize: 80 }} />
              <Typography variant="h6" fontWeight="bold" sx={{ mt: 2 }}>
                Continuous Support
              </Typography>
              <Typography variant="body2" sx={{ mt: 1 }}>
                Our commitment to excellence doesn’t end once a placement is made. We provide ongoing support to both clients and candidates.
              </Typography>
            </Box>
          </Box>
        </Box>

        {/* Why Choose Us Section */}
        <Typography
          variant="h4"
          fontWeight="bold"
          align="center"
          gutterBottom
          sx={{
            textTransform: "uppercase",
            letterSpacing: "2px",
            textShadow: "1px 1px 3px rgba(0,0,0,0.2)",
            mt: 5,
          }}
        >
          Why Choose Us?
        </Typography>

        {/* Grid Layout */}
        <Grid container spacing={4} mt={3}>
          {/* Welcome Section */}
          <Grid item xs={12} md={6}>
            <Box>
              <Typography
                variant="h6"
                fontWeight="bold"
                sx={{ textTransform: "uppercase", color: "primary.main" }}
              >
                Welcome to Office Based Jobs!
              </Typography>
              <Typography variant="body1" mt={1} color="text.secondary" width="750px">
              Choose us for our unmatched expertise in office-based recruitment, where personalized service meets innovative solutions. With a wealth of industry experience, we offer tailored strategies to meet your unique hiring needs, backed by an extensive network of top-tier talent. Our commitment to transparent communication ensures you're always in the loop, while our results-driven approach ensures tangible outcomes that drive growth and success for your organization.
              </Typography>
            </Box>
          </Grid>

          {/* Our Approach Section */}
          <Grid item xs={12} md={6}>
            <Box>
              <Typography
                variant="h6"
                fontWeight="bold"
                paddingLeft="200px"
                sx={{ textTransform: "uppercase", color: "primary.main" }}
              >
                Our Approach
              </Typography>
              <Typography variant="body1" mt={1} color="text.secondary" paddingLeft="200px">
              We leverage the latest technologies and recruitment strategies to stay ahead of the curve. From advanced candidate screening techniques to cutting-edge sourcing methods.
              </Typography>
            </Box>
          </Grid>
        </Grid>

        {/* Contact Us Section */}
        <Container maxWidth="sm" sx={{ textAlign: "center", py: 4 }}>
          <Typography variant="h4" fontWeight="bold" gutterBottom>
            Contact Us
          </Typography>
          <Typography variant="subtitle1" fontWeight="bold" color="text.secondary">
            BETTER YET, SEE US IN PERSON!
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mt: 1 }}>
            We love our customers, so feel free to visit during normal business hours.
          </Typography>
          <Box sx={{ mt: 3 }}>
            <Typography variant="subtitle1" fontWeight="bold" color="text.secondary">
              OFFICE BASED JOBS
            </Typography>
            <Link href="mailto:monashah44271@gmail.com" color="primary">
              monashah44271@gmail.com
            </Link>
          </Box>
          <Box sx={{ mt: 3 }}>
            <Typography variant="subtitle1" fontWeight="bold" color="text.secondary">
              HOURS
            </Typography>
            <Typography 
              variant="body1" 
              color="primary" 
              sx={{ cursor: "pointer", display: "inline-flex", alignItems: "center" }}
              onClick={() => setOpen(!open)}
            >
              Open today <strong>09:00 a.m. – 05:00 p.m.</strong>
              <IconButton size="small">
                <ExpandMoreIcon />
              </IconButton>
            </Typography>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <Box sx={{ mt: 1, textAlign: "left", display: "inline-block" }}>
                <Typography><strong>Monday:</strong> <span style={{ color: "blue" }}>09:00 a.m. – 05:00 p.m.</span></Typography>
                <Typography><strong>Tuesday:</strong> <span style={{ color: "blue" }}>09:00 a.m. – 05:00 p.m.</span></Typography>
                <Typography><strong>Wednesday:</strong> <span style={{ color: "blue" }}>09:00 a.m. – 05:00 p.m.</span></Typography>
                <Typography><strong>Thursday:</strong> <span style={{ color: "blue" }}>09:00 a.m. – 05:00 p.m.</span></Typography>
                <Typography><strong>Friday:</strong> <span style={{ color: "blue" }}>09:00 a.m. – 05:00 p.m.</span></Typography>
                <Typography><strong>Saturday:</strong> <span style={{ color: "black" }}>Closed</span></Typography>
                <Typography><strong>Sunday:</strong> <span style={{ color: "black" }}>Closed</span></Typography>
              </Box>
            </Collapse>
          </Box>
        </Container>
      </Container>
    </Box>
  );
};

export default AboutUs;