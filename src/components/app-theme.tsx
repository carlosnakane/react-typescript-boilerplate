import React, { ReactNode } from 'react';
import { ThemeProvider } from 'styled-components';
import theme from '../theme';

interface Props {
  children: ReactNode;
}

const AppTheme = (props: Props) => {
  const { children } = props;
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
export default AppTheme;
