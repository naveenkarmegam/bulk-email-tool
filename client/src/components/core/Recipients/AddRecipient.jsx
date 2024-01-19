import React, { useState } from "react";
import Layout from "../layout/Layout";
import { useFormik } from "formik";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  addRecipientFailure,
  addRecipientStart,
  addRecipientSuccess,
} from "../../../redux/global/recipientsSlice";
import Loading from "../../../utils/Loading";
import { selectRecipient } from "../../../redux/app/state";
import FieldConfig from "../vendors/utils/FieldConfig";
import AutoDismissAlert from "../../../utils/AutoDismissAlert";
import { recipientValidationSchema } from "./validations/recipientValidationSchema";
import { fetchDashboard, increaseRecipientCount } from "../../../redux/global/userSlice";

const AddRecipient = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loading } = useSelector(selectRecipient);
  const [failure, setFailure] = useState(false);

  const formik = useFormik({
    initialValues: {
      email: "",
      firstName: "",
      lastName: "",
    },
    validationSchema: recipientValidationSchema,
    onSubmit: async (values) => {
      try {
        setFailure(false)
        dispatch(addRecipientStart());
        const trimmedValues = Object.fromEntries(
          Object.entries(values).map(([key, value]) => [key, value.trim()])
        );
        const response = await axios.post(
          "/api/recipient/add-recipient",
          trimmedValues
        );
        dispatch(addRecipientSuccess(response.data));
        dispatch(increaseRecipientCount());
        // dispatch(fetchDashboard());
        navigate("/recipients");
      } catch (error) {
        dispatch(addRecipientFailure(false));
        setFailure(error.response.data.message);
      }
    },
  });
  const fieldConfig = [
    { name: "firstName", placeholder: "First Name", type: "text" },
    { name: "lastName", placeholder: "Last Name", type: "text" },
    { name: "email", placeholder: "Email Address", type: "email" },
  ];
  return (
    <Layout>
      <hgroup className="row justify-content-center">
        <div className="col-lg-8 col-xl-6 col-md-10">
          <div className="card o-hidden border-0 bg-color shadow-lg my-5">
            <main className="card-body p-0">
              <div className="row">
                <div className="p-5">
                  <hgroup className="d-flex justify-content-center user-heading">
                    <h1 className="text-center text-white h3">
                      ADD RECIPIENTS
                    </h1>
                  </hgroup>
                  <header className="text-center">
                    <h1 className="h4 text-white mb-4">Happy Mailing</h1>
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
                    <div className="text-center">
                      <button
                        className="btn btn-google btn-user btn-block text-light col-sm-5 col-md-6"
                        type="submit"
                      >
                        {loading ? <Loading isLoading={loading} /> : "ADD"}
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

export default AddRecipient;
