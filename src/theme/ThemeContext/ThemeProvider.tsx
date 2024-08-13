import React, {
  createContext,
  PropsWithChildren,
  useEffect,
  useState,
} from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { PaletteMode, useMediaQuery } from '@mui/material';
import { getTheme } from '../AppTheme';

const getColorModeFromLocalStorage = () => {
  const colorMode = localStorage.getItem('colorMode');
  if (colorMode === 'light' || colorMode === 'dark') {
    return colorMode;
  }
  return null;
};

interface IColorModeContext {
  mode: string;
  setMode: () => void;
}

export const ColorModeContext = createContext<IColorModeContext | undefined>(
  undefined
);

export const ColorModeContextProvider: React.FC<PropsWithChildren> = ({
  children,
}) => {
  const colorModeFromLocalStorage = getColorModeFromLocalStorage();
  const isSystemPreferenceDark = useMediaQuery('(prefers-color-scheme: dark)');

  const systemPreference = isSystemPreferenceDark ? 'dark' : 'light';

  //set initial mode as value from local storage else use the system preference
  const [mode, setMode] = useState<PaletteMode>(
    colorModeFromLocalStorage || systemPreference
  );

  useEffect(() => {
    window.localStorage.setItem('colorMode', mode);
  }, [mode]);

  const setColorMode = () => {
    if (mode === 'light') {
      setMode('dark');
    } else {
      setMode('light');
    }
  };

  return (
    <ColorModeContext.Provider
      value={{
        setMode: setColorMode,
        mode,
      }}
    >
      <ThemeProvider theme={getTheme(mode)}>{children}</ThemeProvider>
    </ColorModeContext.Provider>
  );
};
