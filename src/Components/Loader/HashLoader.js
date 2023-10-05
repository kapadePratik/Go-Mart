// HashLoader.js

import React from 'react';
import { HashLoader as Loader } from 'react-spinners';
import styled from 'styled-components';

// Create a styled-component for the loader
const LoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 15vh; /* You can adjust the height as needed */
`;

const HashLoader = () => {
  return (
    <LoaderWrapper>
      <Loader color={'#23AA49'} loading={true} size={50} />
    </LoaderWrapper>
  );
};

export default HashLoader;
