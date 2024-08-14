import { Button, Container, Paper, Stack, Typography } from '@mui/material';
import ConsumerChild from './ConsumerChild';
import { useState } from 'react';

const App = () => {
  console.log('app rerender');

  const [paperElevation, setPaperElevation] = useState<number>(1);

  const accentButtonClickHandler = () => {
    if (paperElevation === 24) {
      setPaperElevation(0);
    } else {
      setPaperElevation((prev) => prev + 1);
    }
  };

  return (
    <Container maxWidth="sm" sx={{ py: 3 }}>
      <Paper elevation={paperElevation} sx={{ p: 2, mb: 2 }}>
        <Typography variant="h3" mb={2}>
          MUI Theme Customization
        </Typography>
        <Typography variant="body1">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
          consectetur iusto provident placeat possimus. Rerum enim iste fugit
          nesciunt? Aspernatur modi quasi iusto molestias totam? Ea, provident
          odit. Temporibus, asperiores.
        </Typography>
      </Paper>

      <Stack direction="column" gap={1}>
        <ConsumerChild />
        <Button
          color="accent"
          variant="contained"
          onClick={accentButtonClickHandler}
        >
          {`Elevation : ${paperElevation}`}
        </Button>
      </Stack>
    </Container>
  );
};

export default App;
