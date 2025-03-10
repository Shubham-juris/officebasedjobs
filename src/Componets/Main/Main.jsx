import React from 'react';
import { Box, Typography } from '@mui/material';
import jobsImage from '../../assets/Image/jobs.png'; // Imported image

const Main = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' }, // Stack on small screens, row on medium+
        height: '600px',
        overflow: 'hidden',
      }}
    >
      {/* Left Section: Text on Blue Background */}
      <Box
        sx={{
          flex: { xs: '1 1 100%', md: '1 1 50%' }, // Full width on small, 50% on medium+
          backgroundColor: '#1976d2', // MUI primary blue color
          color: '#fff',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: { xs: 3, md: 6 },
        }}
      >
        <Typography
          variant="h2"
          component="h1"
          gutterBottom
          sx={{ fontWeight: 'bold', fontSize: { xs: '2rem', md: '3rem' } }}
        >
          Unlock Your Office Potential
        </Typography>
        <Typography
          variant="h5"
          component="h2"
          gutterBottom
          sx={{ fontWeight: 'bold', fontSize: { xs: '1.25rem', md: '1.5rem' } }}
        >
          FIND YOUR DREAM JOB WITH OFFICE BASED JOBS
        </Typography>
        <Typography
          variant="body1"
          sx={{ mb: 2, fontSize: { xs: '1rem', md: '1.1rem' }, lineHeight: 1.6 }}
        >
          At Office Based Jobs, we specialize in connecting job seekers with a wide range of office-based positions across various industries. Whether you’re an administrative professional, a marketing guru, a finance expert, or an IT wizard, we have opportunities tailored to your skills and aspirations.
        </Typography>
        <Typography
          variant="body1"
          sx={{ fontSize: { xs: '1rem', md: '1.1rem' }, lineHeight: 1.6 }}
        >
          From entry-level positions to senior roles, our platform features a diverse selection of office jobs to suit every career path. Whether you prefer a fast-paced startup environment or a corporate setting...
        </Typography>
      </Box>

      {/* Right Section: Image */}
      <Box
        sx={{
          flex: { xs: '1 1 100%', md: '1 1 50%' }, // Full width on small, 50% on medium+
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100%',
          overflow: 'hidden',
        }}
      >
        <Box
          component="img"
          src={jobsImage}
          alt="Office workers collaborating"
          sx={{
            width: '100%',
            height: '600px',
            objectFit: 'cover', // Ensures the image scales properly
          }}
        />
      </Box>
    </Box>
  );
};

export default Main;