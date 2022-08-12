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
  console.log(theme.palette)
  
  return (
    <Container>
      <Box  // padding, a top margin if you will
        sx={{
          maxWidth: '100%',
          height: '15vh',
        }}
      />
      <Typography variant="h5" align="left" className="pre-text">
        Hey! Nice to meet you, I'm
      </Typography>
      <Typography variant="h1" align="left" className="title" sx={{
        borderRight: '0.15em solid ' + theme.palette.primary.main,
        color: theme.palette.primary.main,
      }}>
        Henry Castillo
      </Typography>
    </Container>
    )
  }