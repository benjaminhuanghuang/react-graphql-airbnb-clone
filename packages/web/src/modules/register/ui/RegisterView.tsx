import React from "react";
import { withFormik, FormikProps, FormikErrors, Field, Form } from "formik";
//
import { Form as AntForm, Button, Checkbox } from "antd";
import { validUserSchema } from "@airbnb-clone/common";
import { InputField } from "../../shared/InputField";

interface FormValues {
  email: string;
  password: string;
}

interface Props {
  // onFinish: () => void;
  submit: (values: FormValues) => Promise<FormikErrors<FormValues> | null>;
}

export class C extends React.PureComponent<FormikProps<FormValues> & Props> {
  render() {
    return (
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Form style={{ width: 400 }}>
          <Field name="email" placeholder="Email" component={InputField} />
          <Field name="password" type="password" placeholder="Password" component={InputField} />
          <AntForm.Item name="remember" valuePropName="checked">
            <Checkbox>Remember me</Checkbox>
          </AntForm.Item>

          <AntForm.Item>
            <Button type="primary" htmlType="submit">
              Register
            </Button>
            or <a href="">Login now!</a>
          </AntForm.Item>
        </Form>
      </div>
    );
  }
}

export const RegisterView = withFormik<Props, FormValues>({
  validationSchema: validUserSchema,
  mapPropsToValues: () => ({ email: "", password: "" }),
  handleSubmit: async (values, { props, setErrors }) => {
    const errors = await props.submit(values);
    if (errors) {
      setErrors(errors);
    }
    // else {
    //   props.onFinish();
    // }
  },
})(C);
