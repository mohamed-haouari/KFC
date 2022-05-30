import React from 'react'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import { Link } from "react-router-dom";
import { useFormik } from 'formik';
import * as Yup from 'yup';

const Register = () => {

  const {handleSubmit, handleChange, handleReset , handleBlur, values, touched, errors} = useFormik({
    initialValues:{
       firstName: '',
       lastName: '',
       email: '',
       password: '',
       adress: '',
       city: '',
       state: '',
       zip : ''       
    },
    validationSchema:Yup.object({
      firstName: Yup.string().max(15, 'Must be 15 characters or less').required('First Name Required'),
      lastName:  Yup.string().max(15, 'Must be 15 characters or less').required('Last Name Required'),
      email: Yup.string().email('Invalid Email Adress').required('Email is Required'),
      password : Yup.string().min(6, 'Must be 6 characters or more').required('Password Required'),
      adress : Yup.string().required('Adress is Required'),
      city: Yup.string().required('City is Required'),
      state: Yup.string().required('State is Required'),
      zip : Yup.string().required('Zip is Required')
    }),
    onSubmit:(values)=>{
        console.log(values)
    }
  })

  return (
<>
<Header/>
<div className="lead-text">
            <h3>NEW CUSTOMER</h3>
        </div>
<div className="register-wrapper">
    <p>Already registered <Link to="/login">Login</Link></p>
    <hr />
    <button className="btn btn-danger d-block w-100 mb-2">Login with Gmail</button>
    <button className="btn btn-primary d-block w-100">Login with Facebook</button>
    <hr />
        <form className="row g-3" onSubmit={handleSubmit}>
  <div className="col-md-6">
    <label htmlFor="firstName" className="form-label">First Name</label>
    <input type="text" onChange={handleChange} value={values.firstName} onBlur={handleBlur} name="firstName" className="form-control" id="firstName"/>
    <p className='error'>{errors.firstName}</p>
  </div>
  <div className="col-md-6">
    <label htmlFor="lastName" className="form-label">Last Name</label>
    <input type="text" onChange={handleChange} value={values.lastName} onBlur={handleBlur} name="lastName" className="form-control" id="lastName"/>
    <p className='error'>{errors.lastName}</p>
  </div>
  <div className="col-12">
    <label htmlFor="email" className="form-label">Email</label>
    <input type="email" onChange={handleChange} value={values.email} onBlur={handleBlur} name="email" className="form-control" id="email"/>
    <p className='error'>{errors.email}</p>
  </div>
  <div className="col-12">
    <label htmlFor="password" className="form-label">Password</label>
    <input type="password" onChange={handleChange} value={values.password} onBlur={handleBlur} name="password" className="form-control" id="password"/>
    <p className='error'>{errors.password}</p>
  </div>
  <div className="col-md-6">
    <label htmlFor="adress" className="form-label">Adress</label>
    <input type="text" name="adress" onChange={handleChange} value={values.adress} onBlur={handleBlur} className="form-control" id="adress"/>
    <p className='error'>{errors.adress}</p>
  </div>
  <div className="col-md-6">
    <label htmlFor="city" className="form-label">City</label>
    <input type="text" onChange={handleChange} value={values.city} onBlur={handleBlur} name="city" className="form-control" id="city"/>
    <p className='error'>{errors.adress}</p>
  </div>
  <div className="col-md-4">
    <label htmlFor="state" className="form-label">State</label>
    <select id="state" onChange={handleChange} value={values.state} onBlur={handleBlur} name="state" className="form-select">
      <option>Choose</option>
      <option>New York</option>
      <option>Boston</option>
      <option>Chicago</option>
      <option>California</option>
    </select>
    <p className='error'>{errors.state}</p>
  </div>
  <div className="col-md-2">
    <label htmlFor="zip" className="form-label">Zip</label>
    <input type="text" onChange={handleChange} value={values.zip} onBlur={handleBlur} name="zip" className="form-control" id="zip"/>
    <p className='error'>{errors.zip}</p>
  </div>
  <div className="col-12">
    <button type="submit" className="btn btn-primary">Register Now</button>
  </div>
</form>
    </div>
<Footer/>
</>
  )
}

export default Register