import * as Yup from "yup";


export const templateValidationSchema =Yup.object().shape({
    title: Yup.string().required('* Required'),
    subject: Yup.string().required('* Required'),
    content: Yup.string().required("* required")
})