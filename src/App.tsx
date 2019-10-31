import React, { Fragment, Suspense } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import CircularProgress from '@material-ui/core/CircularProgress';

import AppRouter from './components/AppRouter';
import './App.scss';

const App: React.FC = () => {
  return (
    <Fragment>
      <CssBaseline />
      <Suspense fallback={<CircularProgress />}>
        <AppRouter />
      </Suspense>
    </Fragment>
  );
}

export default App;
