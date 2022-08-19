import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import '../styles/Fadeout.scss';


export default function Fadeout({ children }) {
  const theme = useTheme();

  return (
    <Box
      className={'cover-box'}
      sx={{
        position: 'fixed',
        width: '100%',
        height: '100%',
        left: '0%',
        top: '0%',
        backgroundColor: theme.palette.background.paper,
      }}
    >
    </Box>
    )
  }