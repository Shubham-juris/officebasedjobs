import * as React from 'react';
import { Box, Typography, Button } from '@mui/material';
import image from '../../assets/Image/office.png';

function Maincontent() {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: { xs: 'column', md: 'row' },
        height: { xs: 'auto', md: '700px' },
        px: { xs: 2, md: 10 },
        py: { xs: 5, md: 0 },
      }}
    >
      <Box
        component="img"
        src={image}
        alt="Office Jobs"
        sx={{
          width: { xs: '100%', md: '50%' },
          height: 'auto',
          objectFit: 'cover',
        }}
      />
      <Box sx={{ width: { xs: '100%', md: '50%' }, textAlign: 'left', px: { xs: 2, md: 5 } }}>
        <Typography
          variant="h4"
          sx={{ fontWeight: 'bold', mb: 2 }}
        >
          Empower Your Career with Office-Based Jobs
        </Typography>
        <Typography
          variant="body1"
          sx={{ mb: 3 }}
        >
          For job seekers, Office-Based Jobs offers a gateway to a diverse array of exciting career opportunities within office settings. Whether you're an administrative assistant, a marketing professional, or an IT specialist, we have connections with top employers seeking your unique skills and talents.
        </Typography>
        <Button variant="outlined" sx={{ borderRadius: '50px', px: 3, py: 1 }}>
          Find a Job
        </Button>
      </Box>
    </Box>
  );
}

export default Maincontent;
