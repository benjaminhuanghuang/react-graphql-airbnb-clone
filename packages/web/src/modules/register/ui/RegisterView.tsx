import React from "react";
import { withFormik, FormikProps, FormikErrors, Field, Form } from "formik";
//
import { Form as AntForm, Input, Button, Checkbox } from "antd";
import * as yup from "yup";

interface FormValues {
  email: string;
  password: string;
}

interface Props {
  // onFinish: () => void;
  submit: (values: FormValues) => Promise<FormikErrors<FormValues>>;
}

export class C extends React.PureComponent<FormikProps<FormValues> & Props> {
  render() {
    const { values, handleChange, handleBlur, touched, errors } = this.props; // from FormikProps

    const onFinish = (values: any) => {
      console.log("Received values of form: ", values);
    };

    return (
      <div style={{ display: "flex", justifyContent: "center" }}>
        <AntForm style={{ width: 400 }} onFinish={onFinish}>
          <AntForm.Item
            label="Email"
            name="email"
            help={touched.email && errors.email ? errors.email : ""}
            validateStatus={touched.email && errors.email ? "error" : undefined}
          >
            <Input onChange={handleChange} value={values.email} onBlur={handleBlur} />
          </AntForm.Item>

          <AntForm.Item
            label="Password"
            name="password"
            help={touched.password && errors.password ? errors.password : ""}
            validateStatus={touched.password && errors.password ? "error" : undefined}
          >
            <Input.Password onChange={handleChange} value={values.password} onBlur={handleBlur} />
          </AntForm.Item>

          <AntForm.Item name="remember" valuePropName="checked">
            <Checkbox>Remember me</Checkbox>
          </AntForm.Item>

          <AntForm.Item>
            <Button type="primary" htmlType="submit">
              Register
            </Button>
            or <a href="">Login now!</a>
          </AntForm.Item>
        </AntForm>
      </div>
    );
  }
}

const emailNotLongEnough = "email must be at least 3 characters";
const passwordNotLongEnough = "password must be at least 3 characters";
const invalidEmail = "email must be a valid email";

export const loginSchema = yup.object().shape({
  email: yup.string().min(3, emailNotLongEnough).max(255).email(invalidEmail).required(),
  password: yup.string().min(3, passwordNotLongEnough).max(255).required(),
});

export const RegisterView = withFormik<Props, FormValues>({
  validationSchema: loginSchema,
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
