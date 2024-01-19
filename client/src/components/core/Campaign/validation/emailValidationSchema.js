import * as Yup from "yup";

export const emailValidationSchema =Yup.object().shape({
    recipients: Yup.string().required('* Required'),
    subject: Yup.string().required('* Required'),
    content: Yup.string()
    .required("* required")
})