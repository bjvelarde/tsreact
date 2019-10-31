import React, { Fragment, Suspense } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import CircularProgress from '@material-ui/core/CircularProgress';

import './App.scss';

const App: React.FC = () => {
  return (
    <Fragment>
      <CssBaseline />
      <Suspense fallback={<CircularProgress />}>
        <Container fixed>
          <Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '100vh' }}>
            <h1>Hello Material UI</h1>
          </Typography>
        </Container>
      </Suspense>
    </Fragment>
  );
}

export default App;
