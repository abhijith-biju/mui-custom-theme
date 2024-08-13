import { colors } from '@mui/material';
import { createTheme, PaletteOptions } from '@mui/material/styles';

const { palette } = createTheme();

const LightPalette: PaletteOptions = {
  mode: 'light',
  primary: {
    main: colors.deepPurple[500],
  },
  accent: palette.augmentColor({
    color: {
      main: colors.pink[600],
    },
  }),
};

export default LightPalette;
