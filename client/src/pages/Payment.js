import React from 'react'
import { CurrencyRupee } from "react-bootstrap-icons";

export default function Payment(props) {
  return (
    <div className="container product-container text-start">
        <div className="row">
            <div className="col-md-12">
                <h3>Deliver to:</h3>
                <h5>Name:Ranjit Singh</h5>
                <p>149K,Kachhawa road,pure,Near kacchawa road sabji mandi,Varanasi,221313</p>
                <p>9119818913</p>
            </div>
        </div>
        <div className="row mt-5">
        <div className="col-md-3" key={props.paymentProduct.product_id}>
          <div className="card border-0">
            <img
              src={props.paymentProduct.image}
              className="card-img-top"
              style={{ height: "18rem" }}
              alt="product"
            />
            <p className='mx-4 mt-4'>Delivery by---</p>
          </div>
        </div>
        <div className="col-md-9">
          <div className="card border-0">
            <div className="card-body">
              <h5 className="card-title">{props.paymentProduct.product_name}</h5>
              <h5 className="card-title">{props.paymentProduct.category}</h5>
              <p className="card-text fw-bold fs-3">
                <CurrencyRupee />
                {props.paymentProduct.price}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6">
            <h4>Price Details</h4>
            <p>Price(1 item)-- <CurrencyRupee />{props.paymentProduct.price}</p>
            <p>Delivery Charges-- Free Delivery</p>
            <p>Total Amount-- <CurrencyRupee />{props.paymentProduct.price}</p>
            <button type='button' className='btn bg-warning mx-auto d-block mb-4'>Continue</button>
        </div>
      </div>
    </div>
  )
}
