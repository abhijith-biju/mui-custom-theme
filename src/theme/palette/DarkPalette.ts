import { colors } from '@mui/material';
import { createTheme, PaletteOptions } from '@mui/material/styles';

const { palette } = createTheme();

const DarkPalette: PaletteOptions = {
  mode: 'dark',
  primary: {
    main: colors.cyan[500],
  },
  accent: palette.augmentColor({
    color: {
      main: colors.yellow[600],
    },
  }),
};

export default DarkPalette;
