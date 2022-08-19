import React, { useEffect, useState, forwardRef } from 'react'
import axios from 'axios';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import Grid2 from '@mui/material/Unstable_Grid2';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardActionArea from '@mui/material/CardActionArea';
import EmailIcon from '@mui/icons-material/Email';
import CallIcon from '@mui/icons-material/Call';
import Divider from '@mui/material/Divider';

import Tooltip from '@mui/material/Tooltip';
import { Parallax, useParallax, useParallaxController } from 'react-scroll-parallax';
import '../styles/Footer.scss';

const EMAIL = 'henryandrecastillo@gmail.com'
const PHONE = '4699714313'


const Footer = forwardRef(({ children }, ref) => {
  const theme = useTheme()
  
  return (
    <Box
      sx={{
        backgroundColor: theme.palette.background.projects,
        width: '100%',
        paddingTop: theme.spacing(4),
      }}
    >
      <Divider variant="middle" />
      <Container sx={{ paddingTop: theme.spacing(4), paddingBottom: theme.spacing(4) }} ref={ref}>
        <Typography variant="h4">
          Contact Me
        </Typography>
        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          justifyContent="center"
          alignItems="center"
          spacing={{ xs: 0, sm: 2 }}
        >
          <Stack
            direction="row"
            alignItems="center"
            spacing={1}
          >
            <Tooltip title="Email Me">
              <IconButton aria-label="Email" component={Link} href={`mailto:${EMAIL}`}>
                <EmailIcon fontSize="large" />
              </IconButton>
            </Tooltip>
            <Typography variant="body1">
              {EMAIL}
            </Typography>
          </Stack>
          <Stack
            direction="row"
            alignItems="center"
            spacing={1}
          >
            <Tooltip title="Call Me">
              <IconButton aria-label="Phone" component={Link} href={`tel:${PHONE}`}>
                <CallIcon fontSize="large" />
              </IconButton>
            </Tooltip>
            <Typography variant="body1">
              {PHONE}
            </Typography>
          </Stack>
        </Stack>
      </Container>
      <Typography variant="body2">
        Thanks for visiting my website! Was it too bloated and slow? Visit the slim, no-Javascript <Link href="/slim">version</Link>!
      </Typography>
    </Box>
  )
})

export default Footer