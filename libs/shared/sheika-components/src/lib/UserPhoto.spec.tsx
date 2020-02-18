import React from 'react';
import { render } from '@testing-library/react';

import UserPhoto from './UserPhoto';

describe(' UserPhoto', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <UserPhoto name="Jay Benitez" gender="male" />
    );
    expect(baseElement).toBeTruthy();
  });
});
