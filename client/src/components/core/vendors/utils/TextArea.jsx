import React from "react";

const TextArea = ({ formik}) => {
  return (
    <div className="form-group p-0 ">
      <textarea
        className={`form-control ${
          formik.touched.content && formik.errors.content ? "is-invalid" : ""
        }`}
        id="content"
        cols={30}
        rows={5}
        placeholder="Enter the body of the mail"
        name="content"
        value={formik.values.content}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      ></textarea>
      {formik.touched.content && formik.errors.content && (
        <span className="d-block ms-3 text-white small invalid-feedback">
          {formik.errors.content}
        </span>
      )}
    </div>
  );
};

export default TextArea;
