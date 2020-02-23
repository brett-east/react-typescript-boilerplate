import { render } from '@testing-library/react';
import React from 'react';
import { Hello } from '.';

test('<Hello />', () => {
  const { getByText } = render(<Hello firstName="first" lastName="last" />);
  expect(getByText('Hello from first last!')).toBeInTheDocument();
});
