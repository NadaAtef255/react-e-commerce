import { useDispatch, useSelector } from "react-redux";
import MyCard from "../../Component/MyCard";
import MyTitle from "../../Component/MyTitle";

function Cartlist() {
  const carts = useSelector((state) => state.myCart.cart);
  const dispatch = useDispatch();
  return (
    <>
      <div>
        <br></br>
        <MyTitle head="Cart List" myColor="red" />
        <br></br>
        <div className="container">
          <div className="row gap-3">
            {carts.map((cart, index) => {
              return (
                <div className=" col-md-4 " key={index}>
                  <MyCard
                    width="18rem"
                    image={cart.image}
                    name={cart.title}
                    price={cart.price}
                    btnName="View Details"
                    product={cart}
                    // movie={cart}
                  />
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
