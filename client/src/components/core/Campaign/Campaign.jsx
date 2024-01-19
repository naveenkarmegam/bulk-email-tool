import React, { useState } from "react";
import Layout from "../layout/Layout";
import { useFormik } from "formik";
import axios from "axios";

import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  selectRecipient,
  selectTemplate,
} from "../../../redux/app/state";
import FieldConfig from "../vendors/utils/FieldConfig";
import TextArea from "../vendors/utils/TextArea";

import AutoDismissAlert from "../../../utils/AutoDismissAlert";
import Loading from "../../../utils/Loading";
import { emailValidationSchema } from "./validation/emailValidationSchema";
import { increaseMailCount } from "../../../redux/global/userSlice";
import { fetchMails } from "../../../redux/global/mailSlice";

const Campaign = () => {

  const dispatch = useDispatch();
  const { recipientsEmail } = useSelector(selectRecipient);
  const { setTemplate } = useSelector(selectTemplate);
  const [loading,setLoading] = useState(false)
  const [failure, setFailure] = useState(false);
  const [success, setSuccess] = useState(false);

  const initialRecipients = recipientsEmail.join(",") || "";
  const initialSubject = setTemplate.subject || "";
  const initialContent = setTemplate.content || "";

  const fieldConfig = [
    { name: "recipients", placeholder: "recipients", type: "text" },
    { name: "subject", placeholder: "subject", type: "text" },
  ];

  const formik = useFormik({
    initialValues: {
      content: initialContent,
      recipients: initialRecipients,
      subject: initialSubject,
    },
    validationSchema: emailValidationSchema,
    onSubmit: async (values) => {
      try {
        setFailure(false)
        setLoading(true)
        values = { ...values, recipients: values.recipients.trim().split(",") };
        const response = await axios.post("/api/mail/sendBulkMail", values);
        formik.resetForm()
        setSuccess(response.data.message)
        setLoading(false)
        dispatch(increaseMailCount());
        dispatch(fetchMails())

      } catch (error) {
        setFailure(error.response.data.message)
        setLoading(false)
      }
    },
  });
  return (
    <Layout>
      <hgroup className="row justify-content-center">
        <div className="col-lg-8 col-xl-6">
          <div className="card o-hidden bg-color border-0 shadow-lg my-5">
            <main className="card-body p-0">
              <div className="row">
                <div className="p-5">
                  <header className="text-center">
                    <h1 className="h4 text-white mb-4">
                      Happy recipients Mailing
                    </h1>
                  </header>
                  <div className="mx-3">
                    {failure && (
                      <AutoDismissAlert message={failure} type={"danger"} />
                    )}
                    {success && (
                      <AutoDismissAlert message={success} type={"success"} />
                    )}
                  </div>
                  <form className="user" onSubmit={formik.handleSubmit}>
                    {fieldConfig.map((field, index) => (
                      <FieldConfig field={field} formik={formik} key={index} />
                    ))}
                    <TextArea formik={formik} />
                    <div className="text-center">
                      <div>
                        {/* Button trigger modal */}
                        <button
                          type="submit"
                          className="btn btn-primary btn-user btn-block col-sm-5 col-md-6"
                        >
                          {loading ? <Loading /> : "Send"}
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </main>
          </div>
        </div>
      </hgroup>
    </Layout>
  );
};

export default Campaign;
