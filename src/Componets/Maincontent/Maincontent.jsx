import * as React from 'react';
import { Box, Typography, Button } from '@mui/material';
import image from '../../assets/Image/office.png';

function Maincontent() {
  return (
    <>

<div className='w-full '>
<div className='  container  mx-auto flex items-center flex-col py-6 gap-4'> 
  <h1 className='text-4xl text-blue-900 py-6 font-bold font-serif'>About Office based Jobs</h1>
  <div className=' w-[450px] p-2 text-center  px-8 '><p className='font-serif font-normal text-lg'>
  At Office Based Jobs, we specialize in matching skilled professionals with fulfilling career opportunities in office-based environments. Our mission is to bridge the gap between talented job seekers and leading companies, ensuring the perfect fit for both parties. With a keen understanding of the evolving needs of the modern workforce.

    </p></div>
</div>
</div>


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



      {/* section 1 */}
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

 



    </>
  );
}

export default Maincontent;
