import React from 'react'
import Card from '../../components/Card';
import Footer from '../../components/Footer';
import Header from '../../components/Header';

const Product = () => {
  return (
    <div className="product-wrapper pt-5">
        <Header/>
        <div className="lead-text">
            <h3>SIGNATURE BOXES</h3>
        </div>
        <div className="product-iner pt-5">
        <div className="row">
            <div className="col-md-4 mb-5">
                <Card/>
            </div>
            <div className="col-md-4 mb-5">
                <Card/>
            </div>
            <div className="col-md-4 mb-5">
                <Card/>
            </div>
            <div className="col-md-4 mb-5">
                <Card/>
            </div>
            <div className="col-md-4 mb-5">
                <Card/>
            </div>
            <div className="col-md-4 mb-5">
                <Card/>
            </div>
            <div className="col-md-4 mb-5">
                <Card/>
            </div>
            <div className="col-md-4 mb-5">
                <Card/>
            </div>
            <div className="col-md-4 mb-5">
                <Card/>
            </div>
        </div>
        </div>
        <Footer/>
    </div>
  )
}

export default Product