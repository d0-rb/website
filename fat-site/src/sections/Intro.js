import React, { useEffect, useState } from 'react'
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import '../styles/Intro.scss';


export default function Intro({ children }) {
  const theme = useTheme()
  
  return (
    <Box>
      <Typography variant="h5" align="left" className="pre-text">
        Hey! Nice to meet you, I'm
      </Typography>
      <Typography variant="h1" align="left" className="title">
        Henry Castillo
      </Typography>
      <Button color="primary" variant="contained">
        Primary
      </Button>
      <Button color="secondary" variant="contained">
        Secondary
      </Button>
    </Box>
    )
  }