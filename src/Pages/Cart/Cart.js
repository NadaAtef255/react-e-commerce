import { useDispatch, useSelector } from "react-redux";
import MyCard from "../../Component/Cart/MyCard";
import MyTitle from "../../Component/MyTitle";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

function Cartlist() {
  const carts = useSelector((state) => state.myCart.cart);
  console.log(carts);

  const dispatch = useDispatch();
  return (
    <>
      <div>
        <br></br>
        <MyTitle head="Cart List" myColor="red" />
        <br></br>
        <div className="container">
          <div className="row">
            {carts.map((cart, index) => {
              return (
                <div className="col-lg-3 col-md-4 col-sm-6" key={index}>
                  <MyCard
                    width="18rem"
                    image={cart.image}
                    name={cart.title}
                    price={cart.price}
                    btnName="View Details"
                    product={cart}
                    // movie={cart}
                    />
                    <Link to="/home">Back To Home</Link>
                </div>
              );
            })}
          </div>
          </div>
    </div>
    </>
  );
}
export default Cartlist;
