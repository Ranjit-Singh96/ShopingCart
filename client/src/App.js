import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Product from "./pages/Product";
import CartProduct from "./pages/CartProduct";
import ProductDetails from "./pages/ProductDetails";
import ProductByCategory from "./pages/ProductByCategory";
import { Route, Routes } from "react-router-dom";
import { API } from "./API/APILinks";
import { useEffect, useState } from "react";
import Payment from "./pages/Payment";
import { useNavigate } from 'react-router-dom';

function App() {
  const [allProduct, setAllProduct] = useState([]);
  const [singleProduct, setSingleProduct] = useState({});
  const [cartCount, setCartCount] = useState(0);
  const [cartProduct, setCartProduct] = useState([]);
  const [cartMessage, setCartMessage] = useState("");
  const [searchProduct, setSearchProduct] = useState("");
  const [productCategoryData, setProductCategoryData] = useState([]);
  const[paymentProduct,setPaymentProduct]=useState({});
  const navigate=useNavigate();

  useEffect(() => {
    fetchData();
    fetchCartData();
  }, []);

  // API for fetch all products

  const fetchData = () => {
    API.FetchAllProduct().then((response) => {
      if (response.result.length > 0) {
        setAllProduct(response.result);
      }
    });
  };
  // API for fetch single product details

  const productDetails = (id) => {
    API.FetchProductById(id).then((response) => {
      setSingleProduct(response.result[0]);
    });

    API.FetchCartById(id).then((response) => {
      // console.log(response.status);
      if (response.status === "true") {
        setCartMessage("Go to cart");
      } else {
        setCartMessage("Add to cart");
      }
    });
  };
  // API for add product in cart

  const addCart = (data) => {
    API.addCart(data).then((response) => {
      console.log(response.status);
      if (response.status === "true") {
        setCartCount(cartCount + 1);
      }
    });
  };
  // API for fetch product added in cart

  const fetchCartData = () => {
    API.FetchCartProduct().then((response) => {
      if (response.result.length > 0) {
        // console.log(response.result)
        setCartProduct(response.result);
        setCartCount(response.result.length);
      }
    });
    setCartMessage("Add to cart");
  };

  const searchHandleChange = (e) => {
    // console.log(e.target.value);
    setSearchProduct(e.target.value);
  };
  const getProductCategory = () => {
    if(searchProduct!==""){
      API.FetchProductByCategory(searchProduct).then((response) => {
        //  console.log(response.result);
        setProductCategoryData(response.result);
      });
      navigate('/categoryProduct');
    }
    else{
      navigate('/');
    }
  };
  const paymentDetails=(id)=>{
    API.FetchProductById(id).then((response) => {
      setPaymentProduct(response.result[0]);
    });
  }

  const increaseQuantity=(id)=>{
    // console.log(id);
    API.increaseQuantityById(id);
    fetchCartData();
  }

  const decreaseQuantity=(id)=>{
    // console.log(id);
    API.FetchCartById(id).then((response) => {
      // console.log(response.Data[0].quantity);
      if(response.Data[0].quantity>1){
        API.decreaseQuantityById(id);
        fetchCartData();
      }
    });
  }

  const RemoveCartProduct=(id)=>{
    API.RemoveCartProduct(id).then((response)=>{
      fetchCartData();
    }) 
  }

  return (
    <div className="App">
        <Navbar
          fetchData={fetchData}
          fetchCartData={fetchCartData}
          cartCount={cartCount}
          searchProduct={searchProduct}
          setSearchProduct={setSearchProduct}
          getProductCategory={getProductCategory}
          searchHandleChange={searchHandleChange}
        />
        <Routes>
          <Route
            path="/"
            element={
              <Product
                allProduct={allProduct}
                productDetails={productDetails}
              />
            }
          />
          <Route
            path="/cart"
            element={
              <CartProduct
                cartProduct={cartProduct}
                increaseQuantity={increaseQuantity}
                decreaseQuantity={decreaseQuantity}
                RemoveCartProduct={RemoveCartProduct}
                paymentDetails={paymentDetails}
              />
            }
          />
          <Route
            path="/product"
            element={
              <ProductDetails
              paymentDetails={paymentDetails}
                singleProduct={singleProduct}
                addCart={addCart}
                cartMessage={cartMessage}
              />
            }
          />
          <Route
            path="/categoryProduct"
            element={
              <ProductByCategory
                productCategoryData={productCategoryData}
                productDetails={productDetails}
                allProduct={allProduct}
                searchProduct={searchProduct}
              />
            }
          />
          <Route
            path="/payment"
            element={
              <Payment
              paymentDetails={paymentDetails}
              paymentProduct={paymentProduct}
              />
            }
          />
        </Routes>
    </div>
  );
}

export default App;
