import * as React from 'react';
import { Box, Typography } from '@mui/material';
import officejobs from '../../assets/Image/officejobs.png';

function Hero() {
  return (
    <Box
      sx={{
        height: '100vh',
        backgroundImage: `linear-gradient(rgba(185, 185, 190, 0.5), rgba(23, 23, 252, 0.5)), url(${officejobs})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        color: 'white',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        position: 'relative',
        px: { xs: 2, md: 4 },
      }}
    >
      <Box sx={{ width: { xs: '90%', sm: '80%', md: '60%' }, maxWidth: '100%' }}>
        <Typography
          variant="h1"
          sx={{
            fontSize: { xs: '2rem', sm: '3rem', md: '4rem' },
            fontWeight: 'bold',
            marginBottom: '1rem',
            textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
          }}
        >
          Professional Tech For Your Business
        </Typography>
        <Typography
          variant="h6"
          sx={{
            fontSize: { xs: '1rem', sm: '1.25rem', md: '1.5rem' },
            textShadow: '1px 1px 3px rgba(0,0,0,0.5)',
          }}
        >
          Technology is the most effective way to change the world.
        </Typography>
      </Box>
    </Box>
  );
}

export default Hero;
