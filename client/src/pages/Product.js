import React from 'react'
import{CurrencyRupee} from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';

export default function Product(props) {
    return (
        <div className=' container product-container'>
            <div className="row">
                {props.allProduct.map((product) => {
                    return (
                        <div className="col-md-3 " key={product.product_id}>
                            <Link to='/product' className='border-0 content' onClick={()=>props.productDetails(product.product_id)}>
                            <div className="card product-style mb-5 border-0" >
                                <img src={product.image} className="card-img-top" style={{height:"18rem"}} alt="product"/>
                                    <div className="card-body">
                                        <h5 className="card-title">{product.product_name}</h5>
                                        <h5 className="card-title">{product.category}</h5>
                                        <p className='card-text fw-bold fs-3'><CurrencyRupee/>{product.price}</p>
                                    </div>
                            </div>
                            </Link>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
