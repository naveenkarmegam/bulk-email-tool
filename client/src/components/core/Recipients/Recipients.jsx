import React, { useEffect, useMemo, useState } from "react";
import Layout from "../layout/Layout";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  clearRecipientMessages,
  deleteRecipientFailure,
  deleteRecipientStart,
  deleteRecipientSuccess,
  fetchRecipient,
  setSelectedRecipientEmail,
} from "../../../redux/global/recipientsSlice";

import axios from "axios";
import { selectRecipient } from "../../../redux/app/state";
import AutoDismissAlert from "../../../utils/AutoDismissAlert";
import Loading from "../../../utils/Loading";
import RecipientTable from "./RecipientTable";
import { decreaseRecipientCount } from "../../../redux/global/userSlice";

const Recipients = () => {
  const dispatch = useDispatch();
  const { recipients, error, success, loading } = useSelector(selectRecipient);
  useEffect(() => {
    if (recipients.length === 0) {
      dispatch(fetchRecipient());
    }
  }, [dispatch]);

useEffect(() => {
  const timeoutId = setTimeout(() => {
    dispatch(clearRecipientMessages());
  }, 1500);

  return () => {
    clearTimeout(timeoutId); 
  };
}, [error, success, loading]);

  const handleDeleteOrder = async (recipientId) => {
    try {
      dispatch(deleteRecipientStart());
      const response = await axios.delete(
        `/api/recipient/delete-recipient/${recipientId}`
      );
      dispatch(deleteRecipientSuccess(response.data));
      dispatch(decreaseRecipientCount())
    } catch (error) {
      dispatch(deleteRecipientFailure(error.response.data));
    }
  };

  const handleGetTotalEmails = () => {
    const allEmails = recipients.map((row) => row.email);
    dispatch(setSelectedRecipientEmail(allEmails));
  };

  return (
    <Layout>
      <hgroup className="row justify-content-around mb-4">
        <div className="col-md-12">
          <h1 className="h3 mb-0 text-gray-800 text-center">Recipients</h1>
        </div>
        <div className="col-md-6 mt-3 text-center">
          <Link
            to={"/add-recipient"}
            className="m-2 btn bg-gradient-primary text-white shadow-sm "
          >
            <i className="bi bi-plus text-white"></i>
            Add recipients
          </Link>
          <Link
            to={"/campaign"}
            className="btn bg-gradient-warning text-white shadow-sm "
            onClick={handleGetTotalEmails}
            disabled={recipients.length === 0}
          >
            <i className="bi bi-mailbox text-white px-2"></i>
            Send Mail
          </Link>
        </div>
      </hgroup>
      <div className="row justify-content-center">
        <div className="col-lg-10 col-xl-9 col-md-12">
          <div className="mx-3">
            {success && (<AutoDismissAlert message={success} type={"success"} />)}
            {error && (
              <AutoDismissAlert message={error.message} type={"danger"} />
            )}
          </div>
          {loading ? (
            <Loading color={"text-color"} />
          ) : (
            <RecipientTable
              recipients={recipients}
              handleDeleteOrder={handleDeleteOrder}
            />
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Recipients;
