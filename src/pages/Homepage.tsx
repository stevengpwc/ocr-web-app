import React from 'react';
import ImageUploadForm from '../forms/ImageUploadForm';
import AzureResponseDisplayForm from '../forms/AzureResponseDisplayForm';
import { AzureResponseContext } from '../contexts/AzureResponseContext';

function Homepage() {
  const { state } = React.useContext(AzureResponseContext);
  return (
    <div>
      {state
        ? <AzureResponseDisplayForm />
        : <ImageUploadForm />
      }
    </div>
  );
}

export default Homepage;
