import { createTheme, PaletteMode, responsiveFontSizes } from '@mui/material';
import LightPalette from './palette/LightPalette';
import DarkPalette from './palette/DarkPalette';

export const getTheme = (mode: PaletteMode) => {
  const palette = mode === 'dark' ? DarkPalette : LightPalette;

  const appTheme = createTheme({
    palette,
    typography: {
      fontFamily: ['Open Sans', 'Roboto'].join(','),
    },
  });

  return responsiveFontSizes(appTheme);
};
