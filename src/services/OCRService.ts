import _ from 'lodash';
import { recognizeText, getReadOperationResult } from '../apis/AzureComputerVision';
import { detectText } from '../apis/AwsRekognition';

export async function ocrUsingAzure(file: File): Promise<string[]> {
  const operationResponse = await recognizeText(file);
  const operationLocationId = operationResponse.headers['operation-location'].match(/(\w+-){4}\w+$/)[0];
  console.log(operationLocationId);
  
  // Get the operation result by polling
  let response, runAgain = true;
  while (runAgain) {
    response = await getReadOperationResult(operationLocationId);
    runAgain = (response && response.data && response.data.status && response.data.status === 'Running') ? true : false;
  }

  // Extract result from the api response
  const result: string[] = [];
  response.data.recognitionResult.lines.forEach(line => {
    result.push(line.text);
  });

  return result;
}

export async function ocrUsingAws(file: File): Promise<string[]> {
  const awsResponse = await detectText(file);
  const sorted = _.orderBy(awsResponse.TextDetections, ['Confidence'], ['desc']);
  const result = sorted.map((textDetection) => {
    if (typeof textDetection.DetectedText !== 'string') {
      return '';
    }
    return textDetection.DetectedText;
  });
  return _.uniq(result);
}