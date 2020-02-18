import React from 'react';

import styled from 'styled-components';

/* eslint-disable-next-line */
export interface SharedSheikaComponentsProps {}

const StyledSharedSheikaComponents = styled.div`
  color: pink;
`;

export const SharedSheikaComponents = (props: SharedSheikaComponentsProps) => {
  return (
    <StyledSharedSheikaComponents>
      <h1>Welcome to shared-sheika-components component!</h1>
    </StyledSharedSheikaComponents>
  );
};

export default SharedSheikaComponents;
