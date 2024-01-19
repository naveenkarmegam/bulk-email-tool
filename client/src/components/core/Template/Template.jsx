import React, { useEffect, useRef } from "react";
import Layout from "../layout/Layout";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectTemplate } from "../../../redux/app/state";
import { clearTemplateMessages, fetchTemplates } from "../../../redux/global/templateSlice";
import TemplateCard from "./TemplateCard";
import AutoDismissAlert from "../../../utils/AutoDismissAlert";
import Loading from "../../../utils/Loading";
import { emailTemplates } from "./js/exampleTemplates";

const Template = () => {
  const dispatch = useDispatch();
  const { templates, loading, error, success } = useSelector(selectTemplate);
  useEffect(() => {
    if (templates.length === 0) {
      dispatch(fetchTemplates());
    }
  }, [dispatch]);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      dispatch(clearTemplateMessages());
    }, 1500);
  
    return () => {
      clearTimeout(timeoutId); 
    };
  }, [error, success, loading]);

  return (
    <Layout>
      <article className="d-sm-flex align-items-center justify-content-between my-4">
        <div className="col-md-4">
          <h1 className="h3 mb-0 text-gray-800">Templates</h1>
        </div>
        <div className="col-md-4">
          <input
            type="search"
            className="form-control flex-fill"
            placeholder="Search here"
          />
        </div>
        <div className="col-md-4 text-end">
          <Link
            to={"/add-template"}
            className="p-0 px-2 py-1 m-0  btn bg-blue text-white shadow-sm"
          >
            <i className="bi bi-bi-plus p-0 m-0" />
            Add Template
          </Link>
        </div>
      </article>
      <div className="row justify-content-center">
        <div className="col-md-6 mx-3">
          {success && <AutoDismissAlert message={success} type={"success"} />}
          {error && (
            <AutoDismissAlert message={error.message} type={"danger"} />
          )}
        </div>
      </div>
      <article className="row px-2 justify-content-center">
        {loading ? (
          <Loading color={"text-color"} />
        ) : (
          <TemplateCard templates={templates} isCustom={false} />
        )}
        <TemplateCard templates={emailTemplates} isCustom={true} />
      </article>
    </Layout>
  );
};

export default Template;
