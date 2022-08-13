import React, { useEffect, useRef, useState } from 'react'
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
import { Parallax, useParallax, useParallaxController } from 'react-scroll-parallax';
import '../styles/About.scss';


export default function About({ children }) {
  const containerRef = useRef()
  const theme = useTheme()
  const parallaxController = useParallaxController()
  const startYOffset = Math.max(0.85 * window.innerHeight - 520, 0)  // since css calc dont wanna work, i gotta do js calc
  const endYOffset = -51

  const { ref } = useParallax({
    opacity: [0, 1],
    startScroll: 0,
    endScroll: 400,
  })
  
  return (
    <>
      <Box
        bgcolor={theme.palette.background.about}
        ref={ref}
        sx={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          top: '0%',
          pointerEvents: 'none',
        }}
      >
      </Box>
      <Container ref={containerRef}>
        <Stack direction="column" spacing={2}>
          <Parallax
            translateY={[startYOffset + 'px', '0px']}
            startScroll={0}
            endScroll={400}
          >
            <Typography variant="h2">
              About Me
            </Typography>
          </Parallax>
          <Parallax
            scale={[1, 0]}
            translateY={[startYOffset + 'px', '0px']}
            startScroll={0}
            endScroll={400}
          >
            <IconButton aria-label="About Me" onClick={() => {
              containerRef.current.scrollIntoView({ behavior: 'smooth' })
            }}>
              <ExpandMoreIcon fontSize="large" />
            </IconButton>
          </Parallax>
          <Parallax
            translateY={[startYOffset + 'px', endYOffset + 'px']}
            startScroll={0}
            endScroll={400}
          >
            <Typography variant="h4" align="left">
              Introduction
            </Typography>
            <Typography align="left">
              I'm a second year student at UT Austin studying Computer Science and Mathematics.
            </Typography>
          </Parallax>
        </Stack>
        <Box sx={{ height: '3000px' }}></Box>
      </Container>
    </>
  )
}