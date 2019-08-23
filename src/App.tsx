import React from 'react';
import Homepage from './pages/Homepage';
import { AzureResponseProvider } from './contexts/AzureResponseContext';

const App: React.FC = () => {
  return (
    <div>
      <AzureResponseProvider>
        <Homepage />
      </AzureResponseProvider>
    </div>
  );
}

export default App;
