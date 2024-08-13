import { useContext } from 'react';
import { ColorModeContext } from './ThemeProvider';

export const useColorModeContext = () => {
  const context = useContext(ColorModeContext);
  if (context === undefined) {
    throw new Error(
      'Use color mode context within color mode context provider'
    );
  }
  return context;
};
