import React from 'react';
import styled from 'styled-components';
import Homepage from './pages/Homepage';
import { AzureResponseProvider } from './contexts/AzureResponseContext';
import { AwsResponseProvider } from './contexts/AwsResponseContext';

const Wrapper = styled.div`
  margin: 16px;
`;

const App: React.FC = () => {
  return (
    <Wrapper>
      <AzureResponseProvider>
        <AwsResponseProvider>
          <Homepage />
        </AwsResponseProvider>
      </AzureResponseProvider>
    </Wrapper>
  );
}

export default App;
