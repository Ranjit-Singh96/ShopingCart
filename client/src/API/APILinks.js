import{baseUrl} from './APIBaseUrl';


export const API ={
    FetchAllProduct: async () => {
        try{
          const response=await fetch(baseUrl + "all-product", {
            method: "get",
          });
          const data= await response.json();
          // console.log(data.result);
          return data;
        } catch(error){
          return error;
        }   
      },

      FetchProductById: async (id) => {
        try{
          const response=await fetch(baseUrl + "product/"+id, {
            method: "get",
          });
          const data= await response.json();
          // console.log(data.result[0]);
          return data;
        } catch(error){
          return error;
        }   
      },

      increaseQuantityById: async (id) => {
        try{
          const response=await fetch(baseUrl + "increase-quantity/"+id, {
            method: "put",
          });
          const data= await response.json();
          // console.log(data.result[0]);
          return data;
        } catch(error){
          return error;
        }   
      },

      decreaseQuantityById: async (id) => {
        try{
          const response=await fetch(baseUrl + "decrease-quantity/"+id, {
            method: "put",
          });
          const data= await response.json();
          // console.log(data.result[0]);
          return data;
        } catch(error){
          return error;
        }   
      },

      FetchCartProductById: async (id) => {
        try{
          const response=await fetch(baseUrl + "cart_product/"+id, {
            method: "get",
          });
          const data= await response.json();
          // console.log(data.result[0]);
          return data;
        } catch(error){
          return error;
        }   
      },

      addCart: async (jsonbody) => {
        try{
          const response = await fetch(baseUrl + "add-cart", {
            method: "post",
            body: JSON.stringify(jsonbody),
            headers: {
              "Content-Type": "application/json",
            },
          });
          const data = await response.json();
          // console.log(data.status);
          return data;
        } catch(error){
          return error;
        }
      },

      FetchCartById: async (id) => {
        try{
          const response=await fetch(baseUrl + "cart/"+id, {
            method: "get",
          });
          const data= await response.json();
          // console.log(data.result[0]);
          return data;
        } catch(error){
          return error;
        }   
      },

      FetchCartProduct: async () => {
        try{
          const response=await fetch(baseUrl + "cart-product", {
            method: "get",
          });
          const data= await response.json();
          // console.log(data.result);
          return data;
        } catch(error){
          return error;
        }   
      },

      FetchProductByCategory: async (category) => {
        try{
          const response=await fetch(baseUrl + "search-product/"+category, {
            method: "get",
          });
          const data= await response.json();
          // console.log(data.result[0]);
          return data;
        } catch(error){
          return error;
        }   
      },

      RemoveCartProduct: async (id) => {
        try{
          const response= await fetch(baseUrl + "delete-cart/" + id, {
            method: "delete",
          });
          if(response.status===true){
            return response.message
          }
        } catch(error){
          return error;
        }
      }
}