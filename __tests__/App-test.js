import React from 'react';
import App from '../App';

import {render} from '@testing-library/react-native';

describe('checking formState.isValid', () => {
  it('should initialize with an invalid state', () => {
    const {getByText} = render(<App />);
    getByText('formState: "Invalid"');
  });

  it('should have a disabled submit button', () => {
    const {getByA11yLabel} = render(<App />);
    const submitButton = getByA11yLabel('Submit Button');
    expect(submitButton).toBeDisabled();
  });
});
