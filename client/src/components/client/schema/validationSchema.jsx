import * as Yup from "yup";

export const registerValidationSchema = Yup.object().shape({
  firstName: Yup.string()
    .transform((value) => (value ? value.trim() : value))
    .required("First name cannot be empty")
    .matches(/^[A-Za-z]+$/, "A first name must be in letters"),

  lastName: Yup.string()
    .transform((value) => (value ? value.trim() : value))
    .required("Last name cannot be empty")
    .matches(/^[A-Za-z]+$/, "A last name must be in letters"),
  email: Yup.string()
    .transform((value) => (value ? value.trim() : value))
    .email()
    .required("Email cannot be empty")
    .matches(
      /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,3}$/,
      "Invalid email format"
    ),
  password: Yup.string()
    .transform((value) => (value ? value.trim() : value))
    .min(3, "Password should be at least 3 characters")
    .max(12, "Password should be at most 8 characters")
    .matches(
      /^[a-zA-Z0-9!@#$%^&*]{6,16}$/,
      "Password must contain at least one special character"
    )
    .required("Password cannot be empty"),
  cpassword: Yup.string()
    .transform((value) => (value ? value.trim() : value))
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Password cannot be empty"),
});

export const loginValidationSchema = Yup.object().shape({
  email: Yup.string()
    .transform((value) => (value ? value.trim() : value))
    .email()
    .required("First name cannot be empty")
    .matches(
      /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,3}$/,
      "Invalid email format, e.g., example@email.co"
    ),
  password: Yup.string()
    .transform((value) => (value ? value.trim() : value))
    .min(3, "Password should be at least 3 characters")
    .max(12, "Password should be at most 8 characters")
    .matches(
      /^[a-zA-Z0-9!@#$%^&*]{6,16}$/,
      "Password must contain at least one special character"
    )
    .required("Password cannot be empty"),
});
