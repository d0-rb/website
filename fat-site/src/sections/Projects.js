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
import { Parallax, useParallax, useParallaxController } from 'react-scroll-parallax';
import '../styles/Projects.scss';

const query = `
{
  projectCollection {
    items {
      sys {
        id,
        publishedAt,
      },
      title,
      blurb,
      image {
        url,
      },
      blog {
        json,
      },
    }
  }
}
`


export default function Projects({ children }) {
  const theme = useTheme()

  const [scrollLength, setScrollLength] = useState(1000)
  const [projects, setProjects] = useState([])

  useEffect(() => {
    axios.post(`https://graphql.contentful.com/content/v1/spaces/4ubly5b64zma/`,
      JSON.stringify({ query }),
      {
        headers: {
          "Content-Type": "application/json",
          // Authenticate the request
          Authorization: "Bearer Xkw8IR7BC5BIxCmOOe2GXYaUahjsg1KVTHzTXce1W3k",
        }
      },
      )
      .then(({ data, status, statusText }) => {
        if (status != 200) {
          console.error(statusText);
        }

        // rerender the entire component with new data
        setProjects(data.projectCollection.items);
      });
  }, []);
  
  return (
    <Container>
      <Stack direction="column" spacing={2}>
        <Parallax
          translateY={['60vh', '0vh']}
          startScroll={0}
          endScroll={scrollLength}
        >
          <Typography variant="h2">
            Projects
          </Typography>
          <Grid2 container spacing={{ xs: 2, sm: 3, md: 3 }} columns={{ xs: 4, sm: 9, md: 16 }}>
            <Grid2 xs={2} sm={3} md={4}>
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
            <Grid2 xs={2} sm={3} md={4}>
            </Grid2>
          </Grid2>
        </Parallax>
      </Stack>
    </Container>
  )
}