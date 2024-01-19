import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

import { useFormik } from "formik";
import * as Yup from "yup";

const ResetPassword = () => {
  const params = useParams();
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      password: "",
      confirmPassword: "",
    },
    validationSchema: Yup.object({
      password: Yup.string().required("Required"),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref("password"), null], "Passwords must match")
        .required("Required"),
    }),
    onSubmit: async (values) => {
      try {
      } catch (error) {}
    },
  });

  return (
    <div className="m-0 p-0  user-body">
      <main className="container pb-5">
        {/* Outer Row */}
        <hgroup className="row justify-content-center">
          <section className="col-xl-10 col-lg-12 col-md-9">
            <div
              className="card o-hidden border-0 shadow-lg my-5"
              style={{ backgroundColor: "#ddd" }}
            >
              <section className="card-body p-0">
                {/* Nested Row within Card Body */}
                <div className="row">
                  <figure className="col-lg-6 d-none d-lg-block bg-password-image m-0"></figure>
                  <section className="col-lg-6 p-5">
                    <hgroup className="d-flex justify-content-center user-heading">
                      <h1 className="text-center h1">ADUDU</h1>
                    </hgroup>
                    <header className="text-center">
                      <h1 className="h4 text-gray-900 mb-2">
                        Reset Your Password
                      </h1>
                    </header>
                    <form className="user" onSubmit={formik.handleSubmit}>
                      {formik.errors.general && (
                        <section className="alert alert-danger" role="alert">
                          {formik.errors.general.message}
                        </section>
                      )}
                      <fieldset className="form-group">
                        <input
                          type="text"
                          className={`form-control form-control-user ${
                            formik.touched.password && formik.errors.password
                              ? "is-invalid"
                              : ""
                          }`}
                          id="exampleInputpassword"
                          aria-describedby="passwordHelp"
                          placeholder="Enter password"
                          name="password"
                          value={formik.values.password}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                        />
                        {formik.touched.password && formik.errors.password && (
                          <span className="d-block ms-3 text-danger small invalid-feedback">
                            {formik.errors.password}
                          </span>
                        )}
                      </fieldset>
                      <fieldset className="form-group">
                        <input
                          type="text"
                          className={`form-control form-control-user ${
                            formik.touched.confirmPassword &&
                            formik.errors.confirmPassword
                              ? "is-invalid"
                              : ""
                          }`}
                          id="confirmPassword"
                          aria-describedby="passwordHelp"
                          placeholder="Confirm Password"
                          name="confirmPassword"
                          value={formik.values.confirmPassword}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                        />
                        {formik.touched.confirmPassword &&
                          formik.errors.confirmPassword && (
                            <span className="d-block ms-3 text-danger small invalid-feedback">
                              {formik.errors.confirmPassword}
                            </span>
                          )}
                      </fieldset>
                      <div className="custom-control custom-checkbox small my-3">
                        <input
                          type="checkbox"
                          className="custom-control-input"
                          id="showPassword"
                          name="showPassword"
                        />
                        <label
                          className="custom-control-label"
                          htmlFor="showPassword"
                        >
                          show password
                        </label>
                      </div>
                      <button
                        type="submit"
                        className="btn btn-primary btn-user btn-block"
                      >
                        Reset Your Password
                      </button>
                    </form>
                    <div className="text-center">
                      <Link className="small" to={"/forgot-password"}>
                        Forgot Password?
                      </Link>
                    </div>
                    <div className="text-center">
                      <Link className="small" to={"/register"}>
                        Create an Account!
                      </Link>
                    </div>
                    <div className="text-center">
                      <Link className="small" to={"/reset-password"}>
                        reset-password
                      </Link>
                    </div>
                  </section>
                </div>
              </section>
            </div>
          </section>
        </hgroup>
      </main>
    </div>
  );
};

export default ResetPassword;
