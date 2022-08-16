import React, { useEffect, useRef, useState } from 'react';
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


const OWL_SAYINGS = [
  'Hi!',
  'How are you?',
  'I\'m good, thanks for asking',
  '(✿◠‿◠) ',
  'Hi!',
  'How are you?',
  'I\'m good, thanks for asking',
  '(✿◠‿◠) ',
  'hey havent you clicked on that enough',
]
let OWL_SAYING_IDX = 0

export default function About({ setSpeech, interacted, setInteracted, children }) {
  const containerRef = useRef()
  const theme = useTheme()
  const parallaxController = useParallaxController()
  const startYOffset = Math.max(0.75 * window.innerHeight - 480, 0)  // since css calc dont wanna work, i gotta do js calc
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
            translateX={['0%', '-16.66666%']}
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
            translateX={['0%', '-16.66666%']}
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
                  <Parallax
                    translateY={['20vh', '0vh']}
                    startScroll={0}
                    endScroll={200}
                  >
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
                          <Link href="https://www.utexas.edu/" rel="noopener noreferrer" target="_blank" color="UT.main" >UT Austin</Link>
                        </Tooltip>
                        &nbsp;double majoring in <Typography color="primary" display="inline">Computer Science</Typography> and <Typography color="primary" display="inline">Mathematics</Typography> with a love for <Typography color="secondary" display="inline">deep learning</Typography>. I'm especially interested in computer vision and its applications.<br />
                      </Typography>
                    </Paper>
                  </Parallax>
                  <Parallax
                    translateY={['30vh', '0vh']}
                    startScroll={100}
                    endScroll={300}
                  >
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
                        I'm someone who likes to learn about and build <Typography color="secondary" display="inline">cool</Typography> things.
                        Whether it be understanding&nbsp;
                        <Link href="https://www.assemblyai.com/blog/diffusion-models-for-machine-learning-introduction/" rel="noopener noreferrer" target="_blank" color="tertiary.emph">diffusion models</Link>
                        , making a low poly 3D&nbsp;
                        <Link
                          variant="body1"
                          component="button"
                          sx={{ transform: 'translateY(-4%)' }}
                          color="tertiary.emph"
                          onClick={() => {
                            setSpeech(OWL_SAYINGS[OWL_SAYING_IDX])
                            OWL_SAYING_IDX += 1
                            OWL_SAYING_IDX %= OWL_SAYINGS.length

                            if (!interacted) {
                              setInteracted(true)
                            }
                          }}
                        >
                          owl
                        </Link>
                        &nbsp;that follows your cursor, or finding a really cool math&nbsp;
                        <Link href="https://timvieira.github.io/blog/post/2014/07/31/gumbel-max-trick/" rel="noopener noreferrer" target="_blank" color="tertiary.emph">concept</Link>
                        , I often find myself engrossed in one thing or another.
                      </Typography>
                      <Typography align="left">
                        In my free time, I
                      </Typography>
                    </Paper>
                  </Parallax>
                  <Parallax
                    translateY={['30vh', '0vh']}
                    startScroll={200}
                    endScroll={400}
                  >
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
                  </Parallax>
                </Stack>
              </Grid2>
              <Grid2 xs={0} sm={0} md={4}>
                <Parallax
                  translateY={['50%', '-30%']}
                  startScroll={0}
                  endScroll={600}
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