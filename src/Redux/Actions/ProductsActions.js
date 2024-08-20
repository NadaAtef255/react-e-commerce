import axios from "axios";
import{BASE_URL}from'../../Servises/api'
export const getProducts = () => (dispath) => {

  dispath({
    type: "LOADING_PRODUCTS",
    payload: true,
  });
  return axios
    .get(`${BASE_URL}/products`)
    .then((res) => {
      dispath({
        type: "GET_PRODUCTS",
        payload: res.data,
      });
    })
    .catch((err) => {
      console.log(err);
    }).finally(()=>{ dispath({
      type: "LOADING_PRODUCTS",
      payload: false,
    });})
    
};
