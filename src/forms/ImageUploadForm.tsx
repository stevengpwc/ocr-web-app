import React from 'react';
import { Formik, FormikActions, FormikProps, Form } from 'formik';
import Button from '@atlaskit/button';
import OcrImage, { OcrImageInterface, OcrImageInitialValue } from './fields/OcrImage';
import { AzureResponseContext } from '../contexts/AzureResponseContext';
import { ocrUsingAzure } from '../services/OCRService';

type MyFormInterface =
  OcrImageInterface

const InitialValues = Object.assign(
  OcrImageInitialValue,
);

const ImageUploadForm: React.SFC<{}> = () => {
  const { update } = React.useContext(AzureResponseContext);

  return (
    <Formik
      initialValues={InitialValues}
      onSubmit={(values: MyFormInterface, actions: FormikActions<MyFormInterface>) => {
        console.log({ values, actions });
        ocrUsingAzure(values.ocrImage)
          .then((data) => {
            update(data);
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
