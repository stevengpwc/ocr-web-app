import React from 'react';
import ImageUploadForm from '../forms/ImageUploadForm';
import AzureResponseDisplayForm from '../forms/AzureResponseDisplayForm';
import { AzureResponseContext } from '../contexts/AzureResponseContext';

function Homepage() {
  const { state } = React.useContext(AzureResponseContext);
  return (
    <div>
      {state.length > 0
        ? <AzureResponseDisplayForm />
        : <ImageUploadForm />
      }
    </div>
  );
}

export default Homepage;
