import AWS from 'aws-sdk';

// Cognito_OcrWebAppAuth_Role
// Cognito_OcrWebAppUnauth_Role

// Initialize the Amazon Cognito credentials provider
AWS.config.region = 'ap-southeast-1'; // Region
AWS.config.credentials = new AWS.CognitoIdentityCredentials({
  IdentityPoolId: 'ap-southeast-1:81e26be5-c441-4ee9-83c3-18cdfcc877f4',
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
