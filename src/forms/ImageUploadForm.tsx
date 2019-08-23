import React from 'react';
import { Formik, FormikActions, FormikProps, Form } from 'formik';
import Button from '@atlaskit/button';
import OcrImage, { OcrImageInterface, OcrImageInitialValue } from './fields/OcrImage';

type MyFormInterface =
  OcrImageInterface

const InitialValues = Object.assign(
  OcrImageInitialValue,
);

const ImageUploadForm: React.SFC<{}> = () => {
  return (
    <Formik
      initialValues={InitialValues}
      onSubmit={(values: MyFormInterface, actions: FormikActions<MyFormInterface>) => {
        console.log({ values, actions });
        alert(JSON.stringify(values, null, 2));
        actions.setSubmitting(false);
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
