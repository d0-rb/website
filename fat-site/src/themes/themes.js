import { createTheme } from '@mui/material/styles';


const themeDefault = createTheme()  // default theme for reference

const themeDifferences = {  // dict of palettes that have different values
  dark: {
    palette: {
      mode: 'dark',
      primary: {
        main: '#62C4FF',
      },
      secondary: {
        main: '#ff6fff',
      },
      tertiary: {
        main: '#ffc96b',
        emph: '#fffc9b',
      },
      background: {
        // default: '#121212',
        // paper: '#121212',
        about: '#1E1E1E',
      },
      UT: {
        main: '#f8971f',
      },
    },
  },
  light: {
    palette: {
      mode: 'light',
      primary: {
        main: '#4982C9',
      },
      secondary: {
        main: '#D439B5',
      },
      tertiary: {
        main: '#114717',
        emph: '#114717',
      },
      background: {
        // default: '#121212',
        // paper: '#121212',
        about: '#DEDEE8',
      },
      UT: {
        main: '#bf5700',
      },
    }
  },
}

const themeShared = {  // this is only shallow copied, so if a root level key is reused from themeDifferences it will get overwritten
  typography: {
    body1: {
      fontSize: '1rem',
      [themeDefault.breakpoints.up('sm')]: {
        fontSize: '1.2rem',
      },
      [themeDefault.breakpoints.up('md')]: {
        fontSize: '1.4rem',
      },
    },
  },
}

const themesCompiled = {}  // will have the themes compiled together based on the defaults, shared values, and different values


Object.entries(themeDifferences).forEach((entry) => {
  const [themeName, theme] = entry
  themesCompiled[themeName] = {
    ...themeShared,
    ...theme,
  }
})

function themes(mode) {
  return themesCompiled[mode]
}

export default themes
