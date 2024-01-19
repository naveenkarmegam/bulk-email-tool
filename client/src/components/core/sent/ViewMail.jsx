import React, { useEffect, useState } from "react";
import Layout from "../layout/Layout";
import LeftArrow from "../vendors/Icons/LeftArrow";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  viewMailFailure,
  viewMailStart,
  viewMailSuccess,
} from "../../../redux/global/mailSlice";
import axios from "axios";
import { selectMail } from "../../../redux/app/state";
import Loading from "../../../utils/Loading";

const ViewMail = () => {
  const { mailId } = useParams();
  const dispatch = useDispatch();
  const { selectEmail, loading } = useSelector(selectMail);
  console.log(selectEmail)
  const [failure, setFailure] = useState(false);

  const getMailById = async () => {
    try {
      setFailure(false);
      dispatch(viewMailStart());
      const response = await axios.get(`/api/mail/getMailById/${mailId}`);
      dispatch(viewMailSuccess(response.data));
    } catch (error) {
      dispatch(viewMailFailure(false));
      setFailure(error.response.data.message);
    }
  };

  useEffect(() => {
    getMailById()
  }, [dispatch, mailId]);

  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    const formattedDate = new Date(dateString).toLocaleDateString(undefined, options);
    return formattedDate;
  };
  return (
    <Layout>
      <Link to={"/settings"}>
        <LeftArrow width={29} />
      </Link>
      <article className="row justify-content-center">
        <div className="col-lg-10 col-xl-8 col-md-10">
          <div className="card shadow mb-4 " >
            {
                loading ? (
                    <Loading color={"text-color"} />

                ) :
            
            <main className="card-body">
              <div className="d-flex">
                <div>
                  <img
                    src="https://img.freepik.com/premium-vector/man-avatar-profile-picture-vector-illustration_268834-538.jpg"
                    alt="img"
                    width={100}
                  />
                </div>
                <div className="flex-grow-1 mt-3">
                  <h3>{selectEmail?.subject}</h3>
                  <small>{formatDate(selectEmail?.createdAt)}</small>
                </div>
              </div>
              <div className="view-message-content">
                <p>{selectEmail?.content}</p>
              </div>
            </main>
}
          </div>
        </div>
      </article>
    </Layout>
  );
};

export default ViewMail;
