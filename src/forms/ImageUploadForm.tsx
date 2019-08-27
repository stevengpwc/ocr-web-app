import React from 'react';
import { Formik, FormikActions, FormikProps, Form } from 'formik';
import Button from '@atlaskit/button';
import OcrImage, { OcrImageInterface, OcrImageInitialValue } from './fields/OcrImage';
import { AzureResponseContext } from '../contexts/AzureResponseContext';
import { AwsResponseContext } from '../contexts/AwsResponseContext';
import { ocrUsingAzure, ocrUsingAws } from '../services/OCRService';

type MyFormInterface =
  OcrImageInterface

const InitialValues = Object.assign(
  OcrImageInitialValue,
);

const ImageUploadForm: React.SFC<{}> = () => {
  const updateAzureResponse = React.useContext(AzureResponseContext).update;
  const updateAwsResponse = React.useContext(AwsResponseContext).update;

  return (
    <Formik
      initialValues={InitialValues}
      onSubmit={(values: MyFormInterface, actions: FormikActions<MyFormInterface>) => {
        console.log({ values, actions })
        ocrUsingAws(values.ocrImage)
          .then((data) => {
            updateAwsResponse(data);
            actions.setSubmitting(false);
          })
        ocrUsingAzure(values.ocrImage)
          .then((data) => {
            updateAzureResponse(data);
            actions.setSubmitting(false);
          })
      }}
      render={(formikProps: FormikProps<MyFormInterface>) => (
        <Form>
          <OcrImage />
          <Button type="submit" appearance="primary" isLoading={formikProps.isSubmitting}>Submit</Button>
        </Form>
      )}
    />
  );
}

export default ImageUploadForm;
