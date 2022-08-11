import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import '../styles/Fadeout.scss';


export default function Main({ children }) {
  const theme = useTheme();

  return (
    <Box
      className={'cover-box'}
      sx={{
        position: 'absolute',
        width: '100vw',
        height: '100vh',
        left: '0vw',
        top: '0vh',
        backgroundColor: theme.palette.background.paper,
      }}
    >
    </Box>
    )
  }