import React, { useState } from "react";
import Layout from "../layout/Layout";
import { useFormik } from "formik";
import FieldConfig from "../vendors/utils/FieldConfig";
import TextArea from "../vendors/utils/TextArea";
import { templateValidationSchema } from "./validations/templateValidationSchema";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  addTemplateFailure,
  addTemplateStart,
  addTemplateSuccess,
} from "../../../redux/global/templateSlice";
import axios from "axios";
import { selectTemplate } from "../../../redux/app/state";
import Loading from "../../../utils/Loading";
import AutoDismissAlert from "../../../utils/AutoDismissAlert";

const AddTemplate = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loading } = useSelector(selectTemplate);
  const [failure, setFailure] = useState(false);
  const fieldConfig = [
    { name: "title", placeholder: "Template Title", type: "text" },
    { name: "subject", placeholder: "Subject", type: "text" },
  ];
  const formik = useFormik({
    initialValues: {
      title: "",
      subject: "",
      content: "",
    },
    validationSchema: templateValidationSchema,
    onSubmit: async (values) => {
      try {
        setFailure(false);
        dispatch(addTemplateStart());
        const trimmedValues = Object.fromEntries(
          Object.entries(values).map(([key, value]) => [key, value.trim()])
        );
        const response = await axios.post(
          "/api/template/add-template",
          trimmedValues
        );
        dispatch(addTemplateSuccess(response.data));
        navigate("/template");
      } catch (error) {
        dispatch(addTemplateFailure(false));
        setFailure(error.response.data.message);
      }
    },
  });
  return (
    <Layout>
      <hgroup className="row justify-content-center">
        <div className="col-lg-6">
          <div className="card o-hidden border-0 bg-color shadow-lg my-5">
            <main className="card-body p-0">
              <div className="row">
                <div className="p-5">
                  <hgroup className="d-flex justify-content-center user-heading">
                    <h1 className="text-center text-white h3">ADD TEMPLATE</h1>
                  </hgroup>

                  <header className="text-center">
                    <h1 className="h4 text-white mb-4">Happy to Mailing</h1>
                  </header>
                  <div className="mx-3">
                    {failure && (
                      <AutoDismissAlert message={failure} type={"danger"} />
                    )}
                  </div>
                  <form className="user" onSubmit={formik.handleSubmit}>
                    {fieldConfig.map((field, index) => (
                      <FieldConfig field={field} formik={formik} key={index} />
                    ))}
                    <TextArea formik={formik} />
                    <div className="text-center">
                      <button
                        className="btn btn-primary btn-user btn-block col-sm-5 col-md-6"
                        type="submit"
                      >
                        {loading ? <Loading /> : "ADD"}
                      </button>
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

export default AddTemplate;
