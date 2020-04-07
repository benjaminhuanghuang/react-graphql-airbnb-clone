import React from "react";
import { FieldProps } from "formik";
import { Form, Input, InputNumber } from "antd";

const FormItem = Form.Item;

interface InputFieldProps {
  prefix: React.ReactNode;
  label?: string;
  useNumberComponent?: boolean;
}

export const InputField: React.FC<FieldProps<any> & InputFieldProps> = ({
  field: { onChange, ...field },
  form: { touched, errors, setFieldValue }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
  label,
  useNumberComponent = false,
  ...props
}) => {
  const errorMsg = touched[field.name] && errors[field.name];
  return (
    <FormItem label={label} help={errorMsg} validateStatus={errorMsg ? "error" : undefined}>
      <Input {...field} {...props} />
    </FormItem>
  );
};
