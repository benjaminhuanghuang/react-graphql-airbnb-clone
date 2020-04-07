import * as yup from "yup";

// Register
export const emailNotLongEnough = "email must be at least 3 characters";
export const passwordNotLongEnough = "password must be at least 3 characters";
export const invalidEmail = "email must be a valid email";

export const registerPasswordValidation = yup.string().min(3, passwordNotLongEnough).max(255).required();

export const validUserSchema = yup.object().shape({
  email: yup.string().min(3, emailNotLongEnough).max(255).email(invalidEmail).required(),
  password: registerPasswordValidation,
});


// Login
const invalidLogin = "invalid login";

export const loginSchema = yup.object().shape({
  email: yup.string().min(3, invalidLogin).max(255, invalidLogin).email(invalidLogin).required(),
  password: yup.string().min(3, invalidLogin).max(255, invalidLogin).required(),
});

// Change Password
export const changePasswordSchema = yup.object().shape({
  newPassword: registerPasswordValidation,
});