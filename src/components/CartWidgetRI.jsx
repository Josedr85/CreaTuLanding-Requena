import { Badge } from "react-bootstrap";
import { MdShoppingCart } from "react-icons/md";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const CartWidgetRI = () => {
  const { cartQuantity, cart } = useContext(CartContext);
  return (
    <div>
      <MdShoppingCart fontSize={"1.6rem"} color="white" />
      {cart.length > 0 && (
        <Badge pill bg="danger">
          {cartQuantity()}
        </Badge>
      )}
    </div>
  );
};

export default CartWidgetRI;
