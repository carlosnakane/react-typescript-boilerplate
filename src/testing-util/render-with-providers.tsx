import React, { ComponentType, ReactElement, ReactNode } from 'react';
import { render, RenderResult, RenderOptions } from '@testing-library/react';
import AppTheme from '../components/app-theme';

const renderWithProviders = (
  ui: ReactElement,
  options?: RenderOptions,
): RenderResult => {
  type AllProvidersProps = {
    children: ReactNode;
  };
  const AllProviders = (props: AllProvidersProps) => (
    <AppTheme>{props.children}</AppTheme>
  );

  return render(ui, {
    wrapper: AllProviders as ComponentType,
    ...options,
  });
};

export default renderWithProviders;
