import React, { forwardRef } from 'react'
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import Grid2 from '@mui/material/Unstable_Grid2';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import DescriptionIcon from '@mui/icons-material/Description';
import Tooltip from '@mui/material/Tooltip';
import { Parallax, useParallax, useParallaxController } from 'react-scroll-parallax';
import '../styles/Intro.scss';


function calculateAge(birthday) { // birthday is a date
  var ageDifMs = Date.now() - birthday;
  var ageDate = new Date(ageDifMs); // miliseconds from epoch
  return Math.abs(ageDate.getUTCFullYear() - 1970);
}


const Intro = forwardRef(({ children }, ref) => {
  const theme = useTheme()
  
  return (
    <>
      {
        ['distant', 'far', 'mid', 'near', 'close'].map((distance, idx, _) => {
          const relativeIdx = idx - 2
          return (
            <Parallax
              translateX={['-50vw', '-50vw']}
              translateY={['0vh', -relativeIdx * 10 + 'vh']}
              startScroll={0}
              endScroll={500}
              style={{
                zIndex: idx - 5,
              }}
              key={distance}
            >
              <Box
                component={'img'}
                sx={{
                  width: '100vw',
                  position: 'absolute',
                  top: 45 + relativeIdx * 5 + 'vh',
                  userSelect: 'none',
                  imageRendering: 'crisp-edges',
                }}
                key={distance}
                alt={distance}
                src={theme.parallax[distance]}
              />
            </Parallax>
          )
        })
      }
      <Container ref={ref}>
        <Grid2 container spacing={{ xs: 2, sm: 3, md: 3 }} columns={{ xs: 4, sm: 4, md: 12 }}>
          <Grid2 xs={4} sm={4} md={8}>
            <Typography variant="h4" align="left" className="pre-text">
              Hey! Nice to meet you, I'm
            </Typography>
            <Typography variant="h1" align="left" className="title" sx={{
              borderRight: '0.15em solid ' + theme.palette.primary.main,
              color: theme.palette.primary.main,
            }}>
              Henry Castillo
            </Typography>
            <Typography variant="h5" align="left" className="short-desc">
              Computer Science/Mathematics Student<br />
              Machine Learning Enthusiast<br />
              Full Stack Developer
            </Typography>
            <Stack direction="row" spacing={2}>
              <Tooltip title="GitHub">
                <IconButton aria-label="GitHub" component={Link} rel="noopener noreferrer" target="_blank" href="https://github.com/d0-rb">
                  <GitHubIcon fontSize="large" />
                </IconButton>
              </Tooltip>
              <Tooltip title="LinkedIn">
                <IconButton aria-label="LinkedIn" component={Link} rel="noopener noreferrer" target="_blank" href="https://www.linkedin.com/in/henryandrecastillo/">
                  <LinkedInIcon fontSize="large" />
                </IconButton>
              </Tooltip>
              <Tooltip title="Résumé">
                <IconButton aria-label="Résumé" component={Link} rel="noopener noreferrer" target="_blank" href="https://docs.google.com/document/d/1bndnOZ0dvo3-yB8GAzAtFhGznkCvNNAylhcI6O9XX2M/edit?usp=sharing">
                  <DescriptionIcon fontSize="large" />
                </IconButton>
              </Tooltip>
            </Stack>
          </Grid2>
          <Grid2 xs={4} sm={4} md={4}>
            <Box
              component={'img'}
              sx={{
                maxWidth: '100%',
                aspectRatio: 1,
                userSelect: 'none',
              }}
              alt={'Henry Castillo Headshot'}
              src={'/assets/headshot.png'}
            />
          </Grid2>
        </Grid2>
      </Container>
    </>
  )
})

export default Intro
