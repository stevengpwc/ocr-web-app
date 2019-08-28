import AWS from 'aws-sdk';

// Ref: https://docs.aws.amazon.com/sdk-for-javascript/v2/developer-guide/getting-started-browser.html
// Initialize the Amazon Cognito credentials provider
AWS.config.region = 'ap-southeast-1'; // Region
AWS.config.credentials = new AWS.CognitoIdentityCredentials({
  IdentityPoolId: 'ap-southeast-1:509166f3-a16e-48d1-a102-d5bceb1d119e',
});
const rekognition = new AWS.Rekognition();

export async function detectText(file: File): Promise<AWS.Rekognition.DetectTextResponse> {
  const fileContent = await fileToArrayBuffer(file);
  const params = {
    Image: {
      Bytes: fileContent
    }
  };
  return new Promise((resolve, reject) => {
    // Ref: https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/Rekognition.html#detectText-property
    rekognition.detectText(params, (err, data) => {
      if (err) {
        console.log(err);
        reject(new Error(err.message));
      } else {
        console.log(data);
        resolve(data);
      }
    })
  });
}

async function fileToArrayBuffer(file: File): Promise<ArrayBuffer> {
  const reader = new FileReader();
  return new Promise((resolve, reject) => {
    reader.onerror = function() {
      this.abort();
      reject(new Error('Failed to read the file'));
    }
    reader.onload = function(e) {
      resolve(this.result as ArrayBuffer);
    }
    reader.readAsArrayBuffer(file);
  });
}
