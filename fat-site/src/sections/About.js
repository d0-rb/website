import React, { useEffect, useState } from 'react'
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import Grid2 from '@mui/material/Unstable_Grid2';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import CallIcon from '@mui/icons-material/Call';
import Tooltip from '@mui/material/Tooltip';
import '../styles/About.scss';


export default function About({ children }) {
  const theme = useTheme()
  
  return (
    <Container>
      <Grid2 container spacing={{ xs: 2, sm: 3, md: 3 }} columns={{ xs: 4, sm: 4, md: 12 }}>
        <Grid2 xs={4} sm={4} md={12}>
          <Typography variant="h2" sx={{
            position: 'sticky',
          }}>
            About Me
          </Typography>
        </Grid2>
      </Grid2>
    </Container>
  )
}