## Install

```
  yarn add formik     # with ts type
  yarn add yup        # for validation
  yarn add -D @types/yup
```



## Formik + Yup validation
```
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
  },
})(C);
```