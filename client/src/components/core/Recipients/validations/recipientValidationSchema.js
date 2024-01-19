import * as Yup from "yup";

export const recipientValidationSchema =Yup.object().shape({
    firstName: Yup.string().required('* Required'),
    lastName: Yup.string().required('* Required'),
    email: Yup.string()
    .required("* required")
    .matches(
      /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,3}$/,
      "Invalid email format"
    ),
})