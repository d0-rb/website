import React, { useEffect, useState } from 'react'
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import Tooltip from '@mui/material/Tooltip';
import '../styles/Menu.scss';

let startDB = true;
const OPEN_TO_CLASS = {
  closed: 'fade-out',
  half: 'fade-in',
  open: 'show-menu',
  closing: 'close-menu',  // special case for when the menu is being closed from being fully open
}
const OPPOSITE_MODE = {
  light: 'dark',
  dark: 'light',
}

export default function Menu({ options, open, setOpen, mode, setMode }) {
  const theme = useTheme();
  const [menuClass, setMenuClass] = useState('invisible')

  useEffect(() => {
    if (startDB) {
      startDB = false
      return
    }

    if (open === 'closed' && menuClass === OPEN_TO_CLASS.open) {
      setMenuClass(OPEN_TO_CLASS.closing)
    } else {
      setMenuClass(OPEN_TO_CLASS[open])
    }
  }, [open])

  return (
    <div  // this div is mainly to control the menu logic more easily
      key={menuClass}
      id="menu"
      className={menuClass}
    >
      <Box
        fixed
        sx={{
          border: 'thin solid ' + theme.palette.text.primary,
          backgroundColor: theme.palette.background.paper,
          maxHeight: 'inherit',
          minHeight: 'inherit',
          borderRadius: '100vh',
          overflow: 'hidden',
          paddingBottom: '3vh',
        }}
      >
        <Stack>
          <Box  // padding so that the icons dont start underneath the owl
            sx={{
              width: '100%',
              height: '14vh',
            }}
          />
          <Tooltip title={mode === 'dark' ? 'Light Mode' : 'Dark Mode'} placement="left">
            <IconButton
              aria-label={mode}
              size="large"
              onClick={() => {
                setMode(OPPOSITE_MODE[mode])
              }}
              sx={{
                borderRadius: 0,
              }}
            >
              {mode === 'dark' ? <LightModeIcon style={{ fontSize: "4vh" }} /> : <DarkModeIcon style={{ fontSize: "4vh" }} />}
            </IconButton>
          </Tooltip>
          {options}
        </Stack>
      </Box>
    </div>
  )
}
