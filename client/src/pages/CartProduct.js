import React from "react";
import { CurrencyRupee } from "react-bootstrap-icons";

export default function CartProduct(props) {
  return (
    <div className=" container product-container">
      <div className="row">
        {props.cartProduct.length > 0 ? (
          props.cartProduct.map((item) => {
            return (
              <>
                <div className="col-md-4">
                  <div className="card product-style mb-5 border-0">
                    <img
                      src={item.image}
                      className="card-img-top"
                      style={{ height: "20rem", width: "17rem" }}
                      alt="product"
                    />
                  </div>
                </div>
                <div className="col-md-8 mt-5">
                  <div className="card product-style mb-5 border-0 ">
                    <div className="card-body ">
                      <h5 className="card-title">{item.product_name}</h5>
                      <p className="card-text fw-bold fs-3">
                        <CurrencyRupee />
                        {item.price}
                      </p>
                    </div>
                  </div>
                  <p className="fw-bold">Quantity:{item.quantity}</p>
                  <p className="fw-bold">
                    Total amount:
                    <CurrencyRupee />
                    {item.quantity * item.price}
                  </p>
                  <button
                    className="btn btn-warning"
                    onClick={() => props.increaseQuantity(item.product_id)}
                  >
                    +
                  </button>
                  <button
                    className="btn btn-warning mx-1"
                    onClick={() => props.decreaseQuantity(item.product_id)}
                  >
                    -
                  </button>
                  <button
                    className="btn btn-danger mx-1"
                    onClick={() => props.RemoveCartProduct(item.product_id)}
                  >
                    Remove item
                  </button>
                </div>
              </>
            );
          })
        ) : (
          <h4 className="fs-4 fw-bold">No Product available in cart</h4>
        )}
      </div>
    </div>
  );
}
