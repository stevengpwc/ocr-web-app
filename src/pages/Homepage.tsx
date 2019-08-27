import React from 'react';
import ImageUploadForm from '../forms/ImageUploadForm';
import AzureResponseDisplayForm from '../forms/AzureResponseDisplayForm';
import AwsResponseDisplayForm from '../forms/AwsResponseDisplayForm';
import { AzureResponseContext } from '../contexts/AzureResponseContext';
import { AwsResponseContext } from '../contexts/AwsResponseContext';

function Homepage() {
  const azureResponse = React.useContext(AzureResponseContext).state;
  const awsResponse = React.useContext(AwsResponseContext).state;
  return (
    <div>
      {azureResponse.length > 0 || awsResponse.length > 0
        ? <Result />
        : <ImageUploadForm />
      }
    </div>
  );
}

function Result() {
  return (
    <div>
      <AzureResponseDisplayForm />
      <AwsResponseDisplayForm />
    </div>
  )
}

export default Homepage;
