import React from 'react';
import { Box, Grommet } from 'grommet';
import theme from './configure/theme';

function App() {
  return (
    <Grommet theme={theme} full>
      <Box>Welcom to Search Image App</Box>
    </Grommet >
  );
}

export default App;
