import React, { useEffect, useRef, useState } from 'react'
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import Grid2 from '@mui/material/Unstable_Grid2';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Tooltip from '@mui/material/Tooltip';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
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
          height: '200%',
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
            <Grid2 container spacing={{ xs: 2, sm: 3, md: 3 }} columns={{ xs: 4, sm: 4, md: 12 }}>
              <Grid2 xs={4} sm={4} md={8}>
                <Stack spacing={4}>
                  <Paper elevation={8}
                    sx={{
                      padding: theme.spacing(2),
                    }}
                  >
                    <Typography variant="h4" align="left">
                      Who I Am
                    </Typography>
                    <Typography align="left">
                      I'm a second year student at&nbsp;
                      <Tooltip title="The University of Texas at Austin">
                        <Link href="https://www.utexas.edu/" color={theme.palette.UT.main}>UT Austin</Link>
                      </Tooltip>
                      &nbsp;double majoring in <Typography color="tertiary.emph" display="inline">Computer Science and Mathematics</Typography> with a love for <Typography color="secondary" display="inline">deep learning</Typography>. I'm especially interested in computer vision and its applications.<br />
                    </Typography>
                  </Paper>
                  <Paper
                    elevation={8}
                    sx={{
                      padding: theme.spacing(2),
                    }}
                  >
                    <Typography variant="h4" align="left">
                      Interests and Motivations
                    </Typography>
                    <Typography align="left">
                      I'm someone who likes to learn about and build <Typography color="secondary" display="inline">cool</Typography> things. Whether it be
                    </Typography>
                  </Paper>
                  <Paper
                    elevation={8}
                    sx={{
                      padding: theme.spacing(2),
                    }}
                  >
                    <Typography variant="h4" align="left">
                      Some Things I've Done
                    </Typography>
                    <Typography align="left">
                      achievements, research, etc.
                    </Typography>
                  </Paper>
                </Stack>
              </Grid2>
              <Grid2 xs={0} sm={0} md={4}>
                <Parallax
                  translateY={['50%', '-20%']}
                >
                  <ImageList variant="masonry" cols={2}>
                    <ImageListItem>
                      <img
                        src="/headshot.png"
                        loading="lazy"
                      />
                    </ImageListItem>
                    <ImageListItem>
                      <img
                        src="/headshot.png"
                        loading="lazy"
                      />
                    </ImageListItem>
                    <ImageListItem>
                      <img
                        src="/headshot.png"
                        loading="lazy"
                      />
                    </ImageListItem>
                    <ImageListItem>
                      <img
                        src="/headshot.png"
                        loading="lazy"
                      />
                    </ImageListItem>
                    <ImageListItem>
                      <img
                        src="/headshot.png"
                        loading="lazy"
                      />
                    </ImageListItem>
                  </ImageList>
                </Parallax>
              </Grid2>
            </Grid2>
          </Parallax>
        </Stack>
      </Container>
    </>
  )
}