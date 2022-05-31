import React from "react";
import "./modal.css";

const Modal = ({closeModal}) => {
  return (
      <>
    <div className="bucket-modal-wrapper" onClick={closeModal}>
      
    </div>
    <div className="bucket-modal-inner">
        <div className="bucket-modal-head">
          <div className="bucket-title bkt-head-content">
            <h5>YOUR BUCKET</h5>
          </div>
          <div className="bucket-counter bkt-head-content">
            <button className="btn btn-danger btn-cart-counter" type="submit">
              0
            </button>
          </div>
          <div className="bucket-total bkt-head-content">
            <span>ITEMS 0</span>
          </div>
        </div>
        <div className="bucket-modal-body">
          <h4 className="mb-5 mt-5 text-center ">Select Delivery Area</h4>
          <form className="delivery-form">
            <div class="form-floating mb-4">
              <div class="form-floating">
                <select
                  class="form-select"
                  id="floatingSelect"
                  aria-label="Floating label select example"
                >
                  <option selected>Select City</option>
                  <option value="1">New York</option>
                  <option value="2">Boston</option>
                  <option value="3">California</option>
                  <option value="4">Detroit</option>
                </select>
                <label for="floatingSelect">City</label>
              </div>
              <div class="form-floating mb-4">
                <textarea
                  class="form-control"
                  placeholder="Leave a comment here"
                  id="floatingTextarea"
                ></textarea>
                <label for="floatingTextarea">Select Area</label>
              </div>
            </div>
            <button className="btn btn-danger w-100">NEXT</button>
          </form>
          <div className="bucket-summary">
            <div className="item-detail">
              <h5>Some Name</h5>
              <p>1 x 15$</p>
              <p>Select Drink : Pepsi</p>
              <button className="btn btn-outline-danger">+</button>
              <button className="btn btn-outline-danger">-</button>
            </div>
            <div className="price-detail">
              <h5>50$</h5>
            </div>
          </div>
          <div className="grand-total">
            <h5>Your Total</h5>
            <h5>100$</h5>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
