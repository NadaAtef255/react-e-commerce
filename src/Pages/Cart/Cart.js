import { useSelector } from "react-redux";
import MyCard from "../../Component/Cart/MyCard";
import MyTitle from "../../Component/MyTitle";
import './Cart.css'
function Cartlist() {
  const carts = useSelector((state) => state.myCart.cart);

  const cartTotal = carts.reduce((total, cart) => {
    const price = parseFloat(cart.price) || 0; 
    return total + price;
  }, 0);
  const taxRate = 0.15;
  const taxes = cartTotal * taxRate;
  const finalTotal = cartTotal + taxes;

  return (
    <>
      <div>
        <br />
        <MyTitle head="Cart List" myColor="red" />
        <br />
        <div className="container">
          <div className="row">
            {carts.map((cart, index) => (
              <div className="col-lg-3 col-md-4 col-sm-6" key={index}>
                <MyCard
                  width="18rem"
                  image={cart.image}
                  name={cart.title}
                  price={cart.price}
                  btnName="View Details"
                  product={cart}
                />
              </div>
            ))}
          </div>
          <br />
          <div className="cart-summary">
            <h4>Cart Summary</h4>
            <p>Total Price: ${cartTotal.toFixed(2)}</p>
            <p>Taxes (15%): ${taxes.toFixed(2)}</p>
            <h5>Final Total: ${finalTotal.toFixed(2)}</h5>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cartlist;
