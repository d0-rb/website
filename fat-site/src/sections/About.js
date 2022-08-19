import React, { forwardRef, useRef, useState } from 'react';
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
  'Hi!',
  'How are you?',
  'I\'m good, thanks for asking',
  '(✿◠‿◠) ',
  'hey havent you clicked on that enough',
]
let OWL_SAYING_IDX = 0

const About = forwardRef(({ setSpeech, interacted, setInteracted, children }, ref) => {
  const theme = useTheme()
  const parallaxController = useParallaxController()
  const startYOffset = Math.max(0.75 * window.innerHeight - 480, 0)  // since css calc dont wanna work, i gotta do js calc
  const endYOffset = -51

  const [scrollLength, setScrollLength] = useState(500)
  
  return (
    <div style={{ position: 'relative', width: '100%' }}>
      <Parallax
        opacity={[0, 1]}
        startScroll={0}
        endScroll={scrollLength}
        style={{
          position: 'absolute',
          width: '100%',
          height: '300%',
          left: '0%',
          bottom: '0%',
          pointerEvents: 'none',
        }}
      >
        <Box
          bgcolor={theme.palette.background.about}
          sx={{
            width: '100%',
            height: '100%',
          }}
        />
      </Parallax>
      <Container ref={ref}>
        <Stack direction="column" spacing={2} sx={{ paddingTop: '5vh' }}>
          <Parallax
            translateY={[startYOffset + 'px', '0px']}
            translateX={['0%', '-16.66666%']}
            startScroll={0}
            endScroll={scrollLength * 0.8}
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
            endScroll={scrollLength * 0.8}
          >
            <IconButton aria-label="About Me" onClick={() => {
              ref.current.scrollIntoView({ behavior: 'smooth' })
            }}>
              <ExpandMoreIcon fontSize="large" />
            </IconButton>
          </Parallax>
          <Parallax
            translateY={[startYOffset + 'px', endYOffset + 'px']}
            startScroll={0}
            endScroll={scrollLength * 0.8}
          >
            <Grid2 container spacing={{ xs: 2, sm: 3, md: 3 }} columns={{ xs: 4, sm: 4, md: 12 }}>
              <Grid2 xs={4} sm={4} md={8}>
                <Stack spacing={4}>
                  <Parallax
                    translateY={['20vh', '0vh']}
                    startScroll={0}
                    endScroll={scrollLength/2}
                  >
                    <Paper elevation={8}
                      sx={{
                        padding: theme.spacing(2),
                      }}
                    >
                      <Typography variant="h4" align="left" color="tertiary.emph">
                        Who I Am
                      </Typography>
                      <Typography align="left">
                        I'm a second year student at&nbsp;
                        <Tooltip title="The University of Texas at Austin">
                          <Link href="https://www.utexas.edu/" rel="noopener noreferrer" target="_blank" color="UT.main" >UT Austin</Link>
                        </Tooltip>
                        &nbsp;double majoring in <Typography color="primary" display="inline">Computer Science</Typography> and <Typography color="primary" display="inline">Mathematics</Typography> with a love for <Typography color="secondary" display="inline">deep learning</Typography>.
                        I'm especially interested in computer vision and its applications.<br />
                        I'm also an officer for the&nbsp;
                        <Tooltip title="Machine Learning and Data Science">
                          <Link href="https://www.mlds-ut.club/" rel="noopener noreferrer" target="_blank" color="primary">MLDS</Link>
                        </Tooltip>
                        &nbsp;club and&nbsp;
                        <Tooltip title="Engineering and Computational Learning of Artificial Intelligence in Robotics">
                          <Link href="https://eclair-robotics.github.io/" rel="noopener noreferrer" target="_blank" color="secondary">ECLAIR</Link>
                        </Tooltip>
                        &nbsp;at&nbsp;
                        <Tooltip title="The University of Texas at Austin">
                          <Typography color="UT.main" display="inline">UT Austin</Typography>
                        </Tooltip>
                        .
                      </Typography>
                    </Paper>
                  </Parallax>
                  <Parallax
                    translateY={['30vh', '0vh']}
                    startScroll={scrollLength * 0.3}
                    endScroll={scrollLength * 0.8}
                  >
                    <Paper
                      elevation={8}
                      sx={{
                        padding: theme.spacing(2),
                      }}
                    >
                      <Typography variant="h4" align="left" color="tertiary.emph">
                        Interests and Motivations
                      </Typography>
                      <Typography align="left">
                        I'm someone who likes to learn about and build&nbsp;
                        <Tooltip title="😎">
                          <Typography color="secondary" display="inline">cool</Typography>
                        </Tooltip>
                        &nbsp;things.
                        Whether it be understanding&nbsp;
                        <Link href="https://www.assemblyai.com/blog/diffusion-models-for-machine-learning-introduction/" rel="noopener noreferrer" target="_blank" color="secondary">diffusion models</Link>
                        , making a low poly 3D&nbsp;
                        <Link
                          variant="body1"
                          component="button"
                          sx={{ transform: 'translateY(-4%)' }}
                          color="secondary"
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
                        <Link href="https://timvieira.github.io/blog/post/2014/07/31/gumbel-max-trick/" rel="noopener noreferrer" target="_blank" color="secondary">concept</Link>
                        , I often find myself engrossed in one thing or another.
                      </Typography>
                      <Typography align="left">
                        In my free time, I
                      </Typography>
                    </Paper>
                  </Parallax>
                  <Parallax
                    translateY={['30vh', '0vh']}
                    startScroll={scrollLength * 0.6}
                    endScroll={scrollLength * 1.1}
                  >
                    <Paper
                      elevation={8}
                      sx={{
                        padding: theme.spacing(2),
                      }}
                    >
                      <Typography variant="h4" align="left" color="tertiary.emph">
                        Some Things I've Done
                      </Typography>
                      <Typography align="left">
                        achievements
                      </Typography>
                    </Paper>
                  </Parallax>
                </Stack>
              </Grid2>
              <Grid2 xs={0} sm={0} md={4}>
                <Parallax
                  translateY={['50%', '-30%']}
                  startScroll={0}
                  endScroll={scrollLength * 1.5}
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
    </div>
  )
})

export default About