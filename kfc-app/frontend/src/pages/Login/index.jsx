import React from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";

const Login = () => {
  const { handleSubmit, handleChange, handleBlur, values, touched, errors } =
    useFormik({
      initialValues: {
        email: "",
        password: "",
      },
      validationSchema: Yup.object({
        email: Yup.string()
          .email("Please provide a valid email")
          .required("Email is Required"),
        password: Yup.string()
          .min(6, "Must be 6 characters or more")
          .required("Password is Required"),
      }),
      onSubmit: (values) => {
        console.log(values);
      },
    });

  return (
    <>
      <Header />
      <div className="login-wrapper">
        <div className="row">
          <div className="col-md-6">
            <div className="lead-text">
              <h3>LOGIN WITH SOCIAL LINKS</h3>
            </div>
            <p>
              Don't have Account?<Link to="/register">Register</Link>
            </p>
            <hr />
            <button className="btn btn-danger d-block w-100 mb-2">
              Login with Gmail
            </button>
            <button className="btn btn-primary d-block w-100">
              Login with Facebook
            </button>
            <hr />
            <form className="row g-3" onSubmit={handleSubmit}>
              <div className="col-md-12">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  onChange={handleChange}
                  value={values.email}
                  onBlur={handleBlur}
                  name="email"
                  className="form-control"
                  id="email"
                />
                <p className="error">
                  {touched.email && errors.email ? errors.email : null}
                </p>
              </div>
              <div className="col-md-12">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  className="form-control"
                  id="password"
                  onChange={handleChange}
                  value={values.password}
                  onBlur={handleBlur}
                />
                <p className="error">
                  {touched.password && errors.password ? errors.password : null}
                </p>
              </div>
              <div className="col-12">
                <button type="submit" className="btn btn-primary">
                  Login Now
                </button>
              </div>
            </form>
          </div>
          <div className="col-md-6">
            <div className="lead-text">
              <h3>NEW CUSTOMER</h3>
            </div>
            <p>Register please to enjoy our services.</p>
            <Link to="/register" class="btn btn-outline-danger">
              NEW CUSTOMER
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Login;
