import React from 'react';
import { AzureResponseContext } from '../contexts/AzureResponseContext';

function AzureResponseDisplayForm () {
  const { state } = React.useContext(AzureResponseContext);
  return (
    <div>From Azure:<ul>{ state.map(line => <li key={line}>{line}</li>) }</ul></div>
  )
}

export default AzureResponseDisplayForm;