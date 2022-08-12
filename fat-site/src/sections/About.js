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
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
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
        <Grid2 xs={4} sm={4} md={12}>
          <IconButton aria-label="About Me">
            <ExpandMoreIcon fontSize="large" />
          </IconButton>
        </Grid2>
        <Grid2 xs={4} sm={4} md={12}>
          <Typography variant="h4" align="left">
            Introduction
          </Typography>
          <Typography align="left">
            I'm a second year student at UT Austin studying Computer Science and Mathematics.
          </Typography>
        </Grid2>
      </Grid2>
    </Container>
  )
}