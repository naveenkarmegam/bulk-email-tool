import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";

const ForgotPassword = () => {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email address").required("Required"),
    }),
    onSubmit: async (values) => {
      try {
        
      } catch (error) {

      }
    },
  });
  return (
    <div className="m-0 p-0  user-body">
      <main className="container pb-5">
        <hgroup className="row justify-content-center">
          <section className="col-xl-10 col-lg-12 col-md-9">
            <div
              className="card o-hidden border-0 shadow-lg my-5"
              style={{ background: "  #ddd" }}
            >
              <section className="card-body p-0">
                {/* Nested Row within Card Body */}
                <div className="row">
                  <figure className="col-lg-6 d-none d-lg-block bg-password-image m-0"></figure>
                  <section className="col-lg-6 p-5">
                    <hgroup className="d-flex justify-content-center user-heading">
                      <h1 className="text-center  h1">BULK MAILER</h1>
                    </hgroup>
                    <header className="text-center">
                      <h1 className="h4 text-gray-900 mb-2">
                        Forgot Your Password?
                      </h1>
                      <p className="mb-4">
                        We get it, stuff happens. Just enter your email address
                        below and we'll send you a link to reset your password!
                      </p>
                    </header>
                    <form className="user" onSubmit={formik.handleSubmit}>
                      {formik.errors.general && (
                        <section className="alert alert-danger" role="alert">
                          {formik.errors.general}
                        </section>
                      )}
                      <fieldset className="form-group">
                        <input
                          type="text"
                          className={`form-control form-control-user ${
                            formik.touched.email && formik.errors.email
                              ? "is-invalid"
                              : ""
                          }`}
                          id="exampleInputEmail"
                          aria-describedby="emailHelp"
                          placeholder="Enter Email Address..."
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
                      </fieldset>
                      <button
                        type="submit"
                        className="btn btn-primary btn-user btn-block"
                      >
                        Reset Password
                      </button>
                    </form>
                    <hr />
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

export default ForgotPassword;
