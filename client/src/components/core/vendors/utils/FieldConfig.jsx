import React from "react";

const FieldConfig = ({formik,field}) => {
  return (
    <div className="form-group p-0">
      <input
        type={field.type}
        className={`form-control form-control-user ${
          formik.touched[field.name] && formik.errors[field.name]
            ? "is-invalid"
            : ""
        }`}
        id={field.name}
        placeholder={field.placeholder}
        name={field.name}
        value={formik.values[field.name]}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      {formik.touched[field.name] && formik.errors[field.name] && (
        <span className="d-block ms-3 text-white small invalid-feedback">
          {formik.errors[field.name]}
        </span>
      )}
    </div>
  );
};

export default FieldConfig;
