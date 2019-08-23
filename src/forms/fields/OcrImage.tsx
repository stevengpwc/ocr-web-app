import React from 'react';
import { Field, FieldProps } from 'formik';
import { ErrorMessage, HelperMessage } from '@atlaskit/form';
import { Label, RequiredIndicator } from '@atlaskit/form/styled/Field'
import * as Yup from 'yup';
import styled from 'styled-components';

export type OcrImageInterface = {
  ocrImage: any;
}

export const OcrImageInitialValue: OcrImageInterface = {
  ocrImage: {}
}

// Labels definition
const fieldName = 'ocrImage';
const label_fieldLabel = 'OCR Image';
const label_helperMessage = 'Click here to upload';

// Field validation
const validate = (value: OcrImageInterface['ocrImage']) => {
  const schema = Yup.mixed().test(
    'is-ocrimage-required',
    'This is Required',
    value => value && value.name,
  );
  return schema.validate(value)
    .then((value) => null)
    .catch((err) => {
      if (err && err.errors && err.errors.length) {
        throw err.errors[0];
      }
    });
}

const FileInputBlock = styled.input`
  display: block;
`

const OcrImage: React.SFC<{}> = () => {
  return (
    <Field
      name={fieldName}
      validate={validate}
      render={({ field, form }: FieldProps<OcrImageInterface>) => (
        <div>
          <Label htmlFor={fieldName}>{label_fieldLabel}<RequiredIndicator>*</RequiredIndicator></Label>
          <FileInputBlock name={fieldName} type='file'
            onChange={(e) => {
              e.target.files && form.setFieldValue(fieldName, e.target.files[0]);
              form.setFieldTouched(fieldName, true);
            }}
          />
          {!(form.touched[fieldName] &&
            form.errors[fieldName]) &&
            <HelperMessage>
              {label_helperMessage}
            </HelperMessage>
          }
          {form.touched[fieldName] &&
            form.errors[fieldName] &&
            <ErrorMessage>
              {form.errors[fieldName]}
            </ErrorMessage>
          }
        </div>
      )}
    />
  )
}

export default OcrImage;
