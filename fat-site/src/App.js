import './App.css';
import React, { useState, useMemo, useRef } from 'react';
import { CssBaseline } from "@mui/material";
import useMediaQuery from '@mui/material/useMediaQuery';
import { themes } from "./themes/themes";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import useMouse from '@react-hook/mouse-position'
import Looker from './components/3dLooker';
import Menu from './components/Menu';
import Fadeout from './components/Fadeout';
import Main from './pages/Main';
import {
  Routes,
  Route,
} from "react-router-dom";
import { ParallaxProvider } from 'react-scroll-parallax';


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
    <ParallaxProvider>
      <div className="App" ref={mouseRef}>
        <ThemeProvider theme={theme}>
          <CssBaseline enableColorScheme />
          <Routes>
            <Route exact path="/" element={<Main />} />
          </Routes>
          <Menu
            open={menuOpen}
            setOpen={setMenu}
            mode={mode}
            setMode={setMode}
          />
          <Fadeout />
          <Looker
            camera={{
              fov: 60,
              near: 0.1,
              far: 1000,
              position: [0, 0, 2]
            }}
            mouse={mouse}
            fadeTime={0.5}
            setOpen={setMenu}
            open={menuOpen}
          />
        </ThemeProvider>
      </div>
    </ParallaxProvider>
  );
}

export default App;
