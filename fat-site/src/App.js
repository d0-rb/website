import './App.css';
import React, { useState, useMemo, useRef } from 'react';
import Box from '@mui/material/Box';
import { Button, CssBaseline } from "@mui/material";
import useMediaQuery from '@mui/material/useMediaQuery';
import { themes } from "./themes/themes";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import useMouse from '@react-hook/mouse-position'
import Looker from './components/3dLooker';
import Menu from './components/Menu';


function App() {
  const [mode, setMode] = useState(useMediaQuery('(prefers-color-scheme: dark)') ? 'dark' : 'light');
  const [menuOpen, setMenu] = useState('closed');
  const mouseRef = useRef(null)

  const mouse = useMouse(mouseRef, {
    fps: 60,
  })

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          ...themes[mode],
        },
      }),
    [mode],
  );

  return (
    <div className="App" ref={mouseRef}>
      <ThemeProvider theme={theme}>
        <CssBaseline enableColorScheme />
        <Button color="primary" variant="contained">
          Primary
        </Button>
        <Button color="secondary" variant="contained">
          Secondary
        </Button>
        <Menu
          open={menuOpen}
          setOpen={setMenu}
        />
        <Looker
          camera={{
            fov: 60,
            near: 0.1,
            far: 1000,
            position: [0, 0, 2]
          }}
          mouse={mouse}
          fadeTime={2}
          setOpen={setMenu}
          open={menuOpen}
        />
      </ThemeProvider>
    </div>
  );
}

export default App;
