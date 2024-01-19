import React, { useEffect } from "react";
import Layout from "../layout/Layout";
import Loading from "../../../utils/Loading";
import TableInbox from "./TableInbox";
import { useDispatch, useSelector } from "react-redux";
import { selectMail } from "../../../redux/app/state";
import {
  clearMailMessages,
  deleteMailFailure,
  deleteMailStart,
  deleteMailSuccess,
  fetchMails,
} from "../../../redux/global/mailSlice";
import AutoDismissAlert from "../../../utils/AutoDismissAlert";
import axios from "axios";
const SentHistory = () => {
  const dispatch = useDispatch();
  const { mails, loading, error, success } = useSelector(selectMail);
  // console.log(mails)
  useEffect(() => {
    if (mails.length === 0) {
      dispatch(fetchMails());
    }
  }, [dispatch]);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      dispatch(clearMailMessages());
    }, 1500);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [error, success, loading]);

  const handleDeleteOrder = async (mailId) => {
    try {
      dispatch(deleteMailStart());
      const response = await axios.delete(
        `/api/mail/deleteInboxMail/${mailId}`
      );
      dispatch(deleteMailSuccess(response.data));
    } catch (error) {
      dispatch(deleteMailFailure(error.response.data));
    }
  };
  return (
    <Layout>
      <hgroup className="row justify-content-around mb-4">
        <div className="col-md-12">
          <h1 className="h3 mb-0 text-gray-800 text-center">Inbox</h1>
        </div>
      </hgroup>
      <div className="row justify-content-center">
        <div className="col-lg-10 col-xl-9 col-md-12">
          <div className="mx-3">
            {success && <AutoDismissAlert message={success} type={"success"} />}
            {error && (
              <AutoDismissAlert message={error.message} type={"danger"} />
            )}
          </div>
          {loading ? (
            <Loading color={"text-color"} />
          ) : (
            <TableInbox mails={mails} handleDeleteOrder={handleDeleteOrder} />
          )}
        </div>
      </div>
    </Layout>
  );
};

export default SentHistory;
