import React, { useEffect, useState } from 'react'
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
import EmailIcon from '@mui/icons-material/Email';
import CallIcon from '@mui/icons-material/Call';
import Tooltip from '@mui/material/Tooltip';
import '../styles/Intro.scss';


function calculateAge(birthday) { // birthday is a date
  var ageDifMs = Date.now() - birthday;
  var ageDate = new Date(ageDifMs); // miliseconds from epoch
  return Math.abs(ageDate.getUTCFullYear() - 1970);
}


export default function Intro({ children }) {
  const theme = useTheme()
  
  return (
    <Container>
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
            <IconButton aria-label="GitHub" component={Link} href="https://github.com/d0-rb">
              <GitHubIcon fontSize="large" />
            </IconButton>
            <IconButton aria-label="LinkedIn" component={Link} href="https://www.linkedin.com/in/henryandrecastillo/">
              <LinkedInIcon fontSize="large" />
            </IconButton>
          </Stack>
        </Grid2>
        <Grid2 xs={0} sm={0} md={1}>
        </Grid2>
        <Grid2 xs={4} sm={4} md={3}>
          <Box
            component={'img'}
            sx={{
              maxWidth: '100%',
              aspectRatio: 1,
              userSelect: 'none',
            }}
            alt={'Henry Castillo Headshot'}
            src={'/headshot.png'}
          />
        </Grid2>
      </Grid2>
    </Container>
  )
}