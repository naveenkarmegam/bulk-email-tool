import { registerValidationSchema } from "./schema/validationSchema";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import axios from "axios";
import Loading from "../../utils/Loading";
import OAuth from "./firebase/OAuth";

const Register = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [showPassword,setShowPassword] = useState(true)
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      cpassword: "",
    },
    validationSchema: registerValidationSchema,
    onSubmit: async (values) => {
      try {
        setLoading(true);
        setError(false);
        const trimmedValues = Object.fromEntries(
          Object.entries(values).map(([key, value]) => [key, value.trim()])
        );
        const response = await axios.post(`/api/auth/register`, trimmedValues);
        setLoading(false);
        if (response.status === 201) {
          navigate("/login");
        }
      } catch (error) {
        setLoading(false);
        setError(error.response.data.message);
      }
    },
  });

  return (
    <div className="m-0 p-0  user-body">
      <article className="container ">
        <hgroup className="row justify-content-center">
          <div className="col-xl-10 col-lg-12 col-md-9">
            <div
              className="card o-hidden border-0 shadow-lg my-5"
              style={{ background: "  #ddd" }}
            >
              <div className="card-body p-0">
                <div className="row">
                  <div className="col-lg-6">
                    <div className="p-5">
                      <div className="d-flex justify-content-center user-heading">
                        <h1 className="text-center  h1">BULK MAILER</h1>
                      </div>
                      <div className="text-center">
                        <h1 className="h4 text-gray-900 mb-4">
                          Create an Account!
                        </h1>
                      </div>
                      <form className="user" onSubmit={formik.handleSubmit}>
                        {error && (
                          <div className="alert alert-danger" role="alert">
                            {
                              error || "something went wrong"
                            }
                          </div>
                        )}
                        <div className="form-group row">
                          <div className="col-sm-6 mb-3 mb-sm-0">
                            <input
                              type="text"
                              className={`form-control form-control-user ${
                                formik.touched.firstName &&
                                formik.errors.firstName
                                  ? "is-invalid"
                                  : ""
                              }`}
                              id="firstName"
                              placeholder="First Name"
                              name="firstName"
                              value={formik.values.firstName}
                              onChange={formik.handleChange}
                              onBlur={formik.handleBlur}
                            />
                            {formik.touched.firstName &&
                              formik.errors.firstName && (
                                <span className="d-block ms-3 text-danger small invalid-feedback">
                                  {formik.errors.firstName}
                                </span>
                              )}
                          </div>
                          <div className="col-sm-6 mb-3 mb-sm-0">
                            <input
                              type="text"
                              className={`form-control form-control-user ${
                                formik.touched.lastName &&
                                formik.errors.lastName
                                  ? "is-invalid"
                                  : ""
                              }`}
                              id="lastName"
                              placeholder="Last Name"
                              name="lastName"
                              value={formik.values.lastName}
                              onChange={formik.handleChange}
                              onBlur={formik.handleBlur}
                            />
                            {formik.touched.lastName &&
                              formik.errors.lastName && (
                                <span className="d-block ms-3 text-danger small invalid-feedback">
                                  {formik.errors.lastName}
                                </span>
                              )}
                          </div>
                        </div>
                        <div className="form-group">
                          <input
                            type="text"
                            className={`form-control form-control-user ${
                              formik.touched.email && formik.errors.email
                                ? "is-invalid"
                                : ""
                            }`}
                            id="email"
                            placeholder="E-mail"
                            name="email"
                            value={formik.values.email}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                          />
                          {formik.touched.email && formik.errors.email && (
                            <span className="d-block ms-3 text-danger small invalid-feedback">
                              {formik.errors.email}
                            </span>
                          )}
                        </div>
                        <div className="form-group row">
                          <div className="col-sm-6 mb-3 mb-sm-0">
                            <input
                              type={showPassword ? 'password' : 'text'}
                              className={`form-control form-control-user ${
                                formik.touched.password &&
                                formik.errors.password
                                  ? "is-invalid"
                                  : ""
                              }`}
                              id="password"
                              placeholder="password"
                              name="password"
                              value={formik.values.password}
                              onChange={formik.handleChange}
                              onBlur={formik.handleBlur}
                            />
                            {formik.touched.password &&
                              formik.errors.password && (
                                <span className="d-block ms-3 text-danger small invalid-feedback">
                                  {formik.errors.password}
                                </span>
                              )}
                          </div>
                          <div className="col-sm-6">
                            <input
                              type={showPassword ? 'password' : 'text'}
                              className={`form-control form-control-user ${
                                formik.touched.cpassword &&
                                formik.errors.cpassword
                                  ? "is-invalid"
                                  : ""
                              }`}
                              id="cpassword"
                              placeholder="password"
                              name="cpassword"
                              value={formik.values.cpassword}
                              onChange={formik.handleChange}
                              onBlur={formik.handleBlur}
                            />
                            {formik.touched.cpassword &&
                              formik.errors.cpassword && (
                                <span className="d-block ms-3 text-danger small invalid-feedback">
                                  {formik.errors.cpassword}
                                </span>
                              )}
                          </div>

                          <div className="custom-control custom-checkbox small text-center mt-3">
                            <input
                              type="checkbox"
                              className="custom-control-input"
                              id="showPassword"
                              name="showPassword"
                              onClick={()=>setShowPassword(!showPassword)}
                            />
                            <label
                              className="custom-control-label"
                              htmlFor="showPassword"
                            >
                              show password
                            </label>
                          </div>
                        </div>
                        <button
                          className="btn btn-primary btn-user btn-block"
                          type="submit"
                        >
                          {loading ? <Loading /> : "Register Account"}
                        </button>

                        <OAuth />
                      </form>
                      <hr />
                      <div className="text-center">
                        <Link className="small" to={"/forgot-password"}>
                          Forgot Password?
                        </Link>
                      </div>
                      <div className="text-center">
                        <Link className="small" to={"/login"}>
                          Already have an account? Login!
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 d-none d-lg-block bg-register-image" />
                </div>
              </div>
            </div>
          </div>
        </hgroup>
      </article>
    </div>
  );
};

export default Register;
