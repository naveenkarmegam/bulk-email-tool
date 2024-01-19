import React, { useEffect, useState } from "react";
import Layout from "../layout/Layout";
import { useFormik } from "formik";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectRecipient } from "../../../redux/app/state";
import axios from "axios";
import {
  updateRecipientFailure,
  updateRecipientStart,
  updateRecipientSuccess,
} from "../../../redux/global/recipientsSlice";
import Loading from "../../../utils/Loading";

import FieldConfig from "../vendors/utils/FieldConfig";
import AutoDismissAlert from "../../../utils/AutoDismissAlert";
import { recipientValidationSchema } from "./validations/recipientValidationSchema";

const EditRecipient = () => {
  const { recipientId } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, recipients } = useSelector(selectRecipient);
  const [failure, setFailure] = useState(false);
  const formik = useFormik({
    initialValues: {
      email: "",
      firstName: "",
      lastName: "",
    },
    enableReinitialize: true,
    validationSchema: recipientValidationSchema,
    onSubmit: async (values) => {
      try {
        setFailure(false);
        dispatch(updateRecipientStart());
        const response = await axios.patch(
          `/api/recipient/update-recipient/${recipientId}`,
          values
        );
        dispatch(updateRecipientSuccess(response.data));
        navigate("/recipients");
      } catch (error) {
        dispatch(updateRecipientFailure(false));
        setFailure(error.response.data.message);
      }
    },
  });

  const fieldConfig = [
    { name: "firstName", placeholder: "First Name", type: "text" },
    { name: "lastName", placeholder: "Last Name", type: "text" },
    { name: "email", placeholder: "Email Address", type: "email" },
  ];
  const getRecipientById = async () => {
    try {
      setFailure(false);
      const response = await axios.get(
        `/api/recipient/get-recipient/${recipientId}`
      );
      formik.setValues(response.data);
    } catch (error) {
      setFailure(error.response.data.message);
    }
  };
  useEffect(() => {
    getRecipientById();
  }, [dispatch, recipientId]);
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
                      EDIT RECIPIENTS
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
                        disabled={!formik.dirty}
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

export default EditRecipient;
