import React from 'react';
import { Box, Typography } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';

function Footer() {
  return (
    <Box sx={{
      textAlign: 'center', bgcolor: 'black', color: 'white', p: 1,
    }}
    >
      <Box sx={{
        my: 1,
        '& svg': { fontSize: '2rem', cursor: 'pointer', mr: 2 },
        '& svg:hover': { color: '#ced970', transform: 'translateX(3px)', transition: 'all 0.4s' },
      }}
      >
        <InstagramIcon />
        <FacebookIcon />
        <TwitterIcon />
      </Box>
      <Typography
        variant="subtitle1"
        sx={{
          '@media (max-width:600px)': {
            fontSize: '1rem',
          },
        }}
      >
        All Rights Reserved &copy;
      </Typography>
    </Box>
  );
}

export default Footer;
