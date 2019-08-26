import axios, { AxiosError, AxiosResponse } from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://southeastasia.api.cognitive.microsoft.com/vision/v2.0',
  timeout: 5000,
  headers: {
    'Ocp-Apim-Subscription-Key': 'ad4f930f6f6542009d22649e02aab7b6'
  }
});

async function request(axiosRequest): Promise<AxiosResponse> {
  return axiosRequest()
    .then((response: AxiosResponse) => {
      console.log(response);
      return response;
    })
    .catch(function (error: AxiosError) {
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      } else if (error.request) {
        // The request was made but no response was received
        // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
        // http.ClientRequest in node.js
        console.log(error.request);
      } else {
        // Something happened in setting up the request that triggered an Error
        console.log('Error', error.message);
      }
      console.log(error.config);
      throw error;
    });
}

export async function recognizeText(file: File): Promise<any> {
  // Ref: https://southeastasia.dev.cognitive.microsoft.com/docs/services/5adf991815e1060e6355ad44/operations/587f2c6a154055056008f200
  return request(
    () => axiosInstance.request({
      url: '/recognizeText?mode=Printed',
      method: 'POST',
      headers: {
        'Content-Type': 'application/octet-stream'
      },
      data: file
    })
  );
}

export function getReadOperationResult(operationId: string) {
  // Ref: https://southeastasia.dev.cognitive.microsoft.com/docs/services/5adf991815e1060e6355ad44/operations/5be108e7498a4f9ed20bf96d
  return request(
    () => axiosInstance.request({
      url: `/read/operations/${operationId}`,
      method: 'GET'
    })
  );
}
