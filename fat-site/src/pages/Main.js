import React, { useEffect, useState } from 'react'
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import Intro from '../sections/Intro'
import '../styles/Main.scss';


export default function Main({ children }) {

  return (
    <Box>
      <Intro />
    </Box>
  )
}