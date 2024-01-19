import React, { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  deleteTemplateFailure,
  deleteTemplateStart,
  deleteTemplateSuccess,
  setSelectedTemplate,
} from "../../../redux/global/templateSlice";
import axios from "axios";
import { useDispatch } from "react-redux";
const TemplateCard = ({ templates, isCustom }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleUseTemplate = (template) => {
    dispatch(setSelectedTemplate(template));
    navigate('/campaign')
  };


  const handleDeleteOrder = async (templateId) => {
    try {
      dispatch(deleteTemplateStart());
      const response = await axios.delete(
        `/api/template/delete-template/${templateId}`
      );
      dispatch(deleteTemplateSuccess(response.data));
    } catch (error) {
      console.log(error)
      dispatch(deleteTemplateFailure(error.response.data));
    }
  };

  return (
    <article className="row px-2">
      {templates.map((template, index) => {
        return (
          <main className="col-lg-6 col-xl-4 col-md-6 mb-4" key={index}>
            <div className="card shadow h-100">
              <header className="card-header bg-color text-white text-center py-3">
                <h6 className="m-0 font-weight-bold">{template.title}</h6>
              </header>
              <div className="card-body ddd">
                <div className="border-bottom py-2 px-1">
                  <strong>Subject:</strong>
                  <span >&nbsp; {template.subject}</span>
                </div>
                <div >
                  <strong>Content:</strong> &nbsp;
                  <span > {template.content}</span>
                </div>
              </div>
              <div className="card-footer d-flex justify-content-around  bg-gray-200 px-0">
                <button  className={`btn btn-primary`} onClick={()=>handleUseTemplate(template)} >
                  use
                </button>
                <Link
                  className={`btn btn-info ${isCustom ? "disabled" : ""}`}
                  disabled={isCustom}
                >
                  copy
                </Link>
                <Link
                  to={`/update-template/${template._id}`}
                  className={`btn btn-warning ${isCustom ? "disabled" : ""}`}
                  disabled={isCustom}
                >
                  edit
                </Link>
                <button
                  className={`btn btn-danger ${isCustom ? "disabled" : ""}`}
                  disabled={isCustom}
                  onClick={() => handleDeleteOrder(template._id)}
                >
                  delete
                </button>
              </div>
            </div>
          </main>
        );
      })}
    </article>
  );
};

export default TemplateCard;
