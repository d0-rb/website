import React, { useEffect, useRef } from 'react'
import { useTheme } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import FolderIcon from '@mui/icons-material/Folder';
import ContactPageIcon from '@mui/icons-material/ContactPage';
import Tooltip from '@mui/material/Tooltip';
import Link from '@mui/material/Link';
import Intro from '../sections/Intro'
import About from '../sections/About'
import Projects from '../sections/Projects'
import Footer from '../sections/Footer'
import { useParallax } from 'react-scroll-parallax';
import '../styles/Main.scss';

window.onunload = function () {  // scroll user ot top when refresh
  window.scrollTo(0,0);
}


export default function Main({ setMenuOptions, setInteracted, interacted, setSpeech, children }) {
  const topRef = useRef()
  const aboutRef = useRef()
  const projectsRef = useRef()
  const contactRef = useRef()

  const menuOptions = [
    {
      tooltip: 'Home',
      ref: topRef,
      Icon: HomeIcon,
    },
    {
      tooltip: 'About Me',
      ref: aboutRef,
      Icon: PersonIcon,
    },
    {
      tooltip: 'Projects',
      ref: projectsRef,
      Icon: FolderIcon,
    },
    {
      tooltip: 'Contact Me',
      ref: contactRef,
      Icon: ContactPageIcon,
    },
  ]

  useEffect(() => {
    setMenuOptions(menuOptions.map(({ tooltip, ref, Icon }) => {
      return (
        <Tooltip title={tooltip} placement="left">
          <IconButton
            aria-label={`Navigate to ${tooltip}`}
            sx={{
              borderRadius: 0,
            }}
            onClick={() => {
              ref.current.scrollIntoView({ behavior: 'smooth' })
            }}
            key={tooltip}
          >
            <Icon style={{ fontSize: "4vh" }} />
          </IconButton>
        </Tooltip>
      )
    }))
  }, [])

  const theme = useTheme()

  return (
    <Stack
      direction="column"
      justifyContent="flex-start"
      alignItems="center"
    >
      <Box sx={{ height: '15vh' }} ref={topRef} />
      <Intro />
      <About ref={aboutRef} setInteracted={setInteracted} interacted={interacted} setSpeech={setSpeech} />
      <Projects ref={projectsRef} />
      <Footer ref={contactRef} />
    </Stack>
  )
}