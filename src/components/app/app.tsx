import React, { Fragment } from 'react';
import Hello from '../hello';
import AppTheme from '../app-theme';
import GlobalStyles from '../global-styles';

const App = () => {
  return (
    <Fragment>
      <AppTheme>
        <GlobalStyles />
        <Hello />
      </AppTheme>
    </Fragment>
  );
};

export default App;
