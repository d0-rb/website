import './App.css';
import React, { useState, useMemo, useRef } from 'react';
import Box from '@mui/material/Box';
import { Button, CssBaseline } from "@mui/material";
import useMediaQuery from '@mui/material/useMediaQuery';
import { themes } from "./themes/themes";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import useMouse from '@react-hook/mouse-position'
import Looker from './components/3dLooker';


function App() {
  const [mode, setMode] = useState(useMediaQuery('(prefers-color-scheme: dark)') ? 'dark' : 'light');
  const mouseRef = useRef(null)

  const mouse = useMouse(mouseRef, {
    enterDelay: 100,
    leaveDelay: 100,
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
        <div>
          <Button color="primary" variant="contained">
            Primary
          </Button>
          <Button color="secondary" variant="contained">
            Secondary
          </Button>
          <Looker
            camera={{
              fov: 60,
              near: 0.1,
              far: 1000,
              position: [0, 0, 2]
            }}
            mouse={mouse}
          />
        </div>
      </ThemeProvider>
    </div>
  );
}

export default App;
