import axios from "axios";

export const getProducts = () => (dispath) => {
  return axios
    .get("https://fakestoreapi.com/products")
    .then((res) => {
      console.log(res.data);

      dispath({
        type: "GET_PRODUCTS",
        payload: res.data,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};
