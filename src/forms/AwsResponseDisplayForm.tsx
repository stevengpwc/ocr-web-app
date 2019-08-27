import React from 'react';
import { AwsResponseContext } from '../contexts/AwsResponseContext';

function AwsResponseDisplayForm () {
  const { state } = React.useContext(AwsResponseContext);
  return (
    <div>From Aws:<ul>{ state.map(line => <li key={line}>{line}</li>) }</ul></div>
  )
}

export default AwsResponseDisplayForm;