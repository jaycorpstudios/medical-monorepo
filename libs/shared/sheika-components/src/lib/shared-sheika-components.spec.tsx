import React from 'react';
import { render } from '@testing-library/react';

import SharedSheikaComponents from './shared-sheika-components';

describe(' SharedSheikaComponents', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SharedSheikaComponents />);
    expect(baseElement).toBeTruthy();
  });
});
