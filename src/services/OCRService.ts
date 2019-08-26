import { recognizeText, getReadOperationResult } from '../apis/AzureComputerVision';

export async function ocrUsingAzure(file: File): Promise<any> {
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