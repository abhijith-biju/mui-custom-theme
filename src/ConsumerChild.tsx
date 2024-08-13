import { Button, Typography } from '@mui/material';
import { useColorModeContext } from './theme/ThemeContext/hooks';

const ConsumerChild = () => {
  const { setMode, mode } = useColorModeContext();

  console.log('consumer child rerender');

  return (
    <>
      <Typography variant="body1" mb={2}>
        {`Current Color Mode : ${mode}`}
      </Typography>
      <Button variant="contained" onClick={setMode} sx={{ mb: 1 }}>
        Toggle Color Mode
      </Button>
    </>
  );
};
export default ConsumerChild;
