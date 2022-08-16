import React, { useEffect, useState } from 'react'
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import Intro from '../sections/Intro'
import About from '../sections/About'
import { useParallax } from 'react-scroll-parallax';
import '../styles/Main.scss';


export default function Main({ setInteracted, interacted, setSpeech, children }) {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0 });
  }, [])
  const theme = useTheme()

  return (
    <Stack
      sx={{
        paddingTop: '15vh',
      }}
      direction="column"
      justifyContent="flex-start"
      alignItems="center"
      spacing={4}
    >
      <Intro />
      <About setInteracted={setInteracted} interacted={interacted} setSpeech={setSpeech} />
    </Stack>
  )
}