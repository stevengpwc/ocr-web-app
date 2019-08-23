import React from 'react';
import { AzureResponseContext } from '../contexts/AzureResponseContext';

function AzureResponseDisplayForm () {
  const { state } = React.useContext(AzureResponseContext);
  return (
    <div>{state}</div>
  )
}

export default AzureResponseDisplayForm;