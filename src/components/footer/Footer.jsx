import React from 'react';
import { Box, Link, Typography } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';

function Footer() {
  return (
    <Box sx={{
      textAlign: 'center', bgcolor: 'black', color: 'white', p: 5,
    }}
    >
      <Box sx={{
        my: 10,
        '& svg': {
          color: 'white', fontSize: '2rem', cursor: 'pointer', mr: 15,
        },
        '& svg:hover': { color: '#cddc39', transform: 'translateX(3px)', transition: 'all 0.4s' },
      }}
      >
        <Link href="https://www.instagram.com/" underline="none" target="_blank" rel="noopener">
          <InstagramIcon />
        </Link>
        <Link href="https://uk-ua.facebook.com/" underline="none" target="_blank" rel="noopener">
          <FacebookIcon />
        </Link>
        <Link href="https://twitter.com/" underline="none" target="_blank" rel="noopener">
          <TwitterIcon />
        </Link>
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
