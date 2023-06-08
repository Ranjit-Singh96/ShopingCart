import React from "react";
import { CurrencyRupee } from "react-bootstrap-icons";
import { Link } from "react-router-dom";

export default function ProductDetails(props) {
  return (
    <div className="container product-container">
      <div className="row">
        <div className="col-md-3" key={props.singleProduct.product_id}>
          <div className="card border-0">
            <img
              src={props.singleProduct.image}
              className="card-img-top"
              style={{ height: "18rem" }}
              alt="product"
            />
          </div>
        </div>
        <div className="col-md-9">
          <div className="card border-0">
            <div className="card-body">
              <h5 className="card-title">{props.singleProduct.product_name}</h5>
              <h5 className="card-title">{props.singleProduct.category}</h5>
              <p className="card-text fw-bold fs-3">
                <CurrencyRupee />
                {props.singleProduct.price}
              </p>
            </div>
          </div>
        </div>
      </div>
      <Link to='/payment'>
      <button className="btn btn-warning btn-lg" onClick={()=>props.paymentDetails(props.singleProduct.product_id)}>Buy</button>
      </Link>
      {props.cartMessage==="Go to cart"?
      <Link to='/cart'>
      <button
        className="btn btn-warning btn-lg mx-5"
        onClick={() => props.addCart(props.singleProduct)}
      >
      {props.cartMessage}
      </button>
      </Link>:
      <Link to='/product'>
        <button
        className="btn btn-warning btn-lg mx-5"
        onClick={() => props.addCart(props.singleProduct)}
      >
      {props.cartMessage}
      </button>
      </Link>
      }
    </div>
  );
}
