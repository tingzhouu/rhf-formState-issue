import React from 'react';
import App from '../App';

import {render, waitFor} from 'react-native-testing-library';

describe('checking formState.isValid', () => {
  it('should initialize with an invalid state', async () => {
    const {getByText} = render(<App />);
    await waitFor(() => getByText('formState: "Invalid"'));
  });
});
