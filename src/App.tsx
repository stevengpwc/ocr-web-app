import React from 'react';
import Homepage from './pages/Homepage';
import { AzureResponseProvider } from './contexts/AzureResponseContext';
import { AwsResponseProvider } from './contexts/AwsResponseContext';

const App: React.FC = () => {
  return (
    <div>
      <AzureResponseProvider>
        <AwsResponseProvider>
          <Homepage />
        </AwsResponseProvider>
      </AzureResponseProvider>
    </div>
  );
}

export default App;
