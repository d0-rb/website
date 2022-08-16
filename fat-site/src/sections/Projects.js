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
import DescriptionIcon from '@mui/icons-material/Description';
import Tooltip from '@mui/material/Tooltip';
import '../styles/Projects.scss';


export default function Projects({ children }) {
  const theme = useTheme()
  
  return (
    <Container>
      <Grid2 container spacing={{ xs: 2, sm: 3, md: 3 }} columns={{ xs: 4, sm: 4, md: 12 }}>
        <Grid2 xs={4} sm={4} md={12}>
          <Typography variant="h2">
            Projects
          </Typography>
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
            src={'/headshot.png'}
          />
        </Grid2>
      </Grid2>
    </Container>
  )
}