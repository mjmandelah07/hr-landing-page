import { Box, Typography, IconButton } from '@mui/material';
import { Facebook, Twitter, LinkedIn } from '@mui/icons-material';

const Footer = () => {
  return (
    <Box sx={{ padding: '2rem', backgroundColor: '#1976d2', color: 'white', textAlign: 'center' }}>
      <Typography variant="body1">Follow Us</Typography>
      <Box>
        <IconButton color="inherit">
          <Facebook />
        </IconButton>
        <IconButton color="inherit">
          <Twitter />
        </IconButton>
        <IconButton color="inherit">
          <LinkedIn />
        </IconButton>
      </Box>
      <Typography variant="body2" sx={{ marginTop: '1rem' }}>
        &copy; 2024 HR Company. All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
