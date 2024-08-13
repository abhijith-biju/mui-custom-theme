import { Box, Button, Typography } from '@mui/material';
import ConsumerChild from './ConsumerChild';

const App = () => {
  console.log('app rerender');

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        m: '2rem',
      }}
    >
      <Typography variant="h3">MUI Theme Customization</Typography>
      <Typography variant="body1" mb={2}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
        consectetur iusto provident placeat possimus. Rerum enim iste fugit
        nesciunt? Aspernatur modi quasi iusto molestias totam? Ea, provident
        odit. Temporibus, asperiores.
      </Typography>

      <ConsumerChild />
      <Button color="accent" variant="contained">
        Accent Button
      </Button>
    </Box>
  );
};

export default App;
