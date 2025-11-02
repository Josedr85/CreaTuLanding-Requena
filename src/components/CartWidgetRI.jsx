import { Badge } from "react-bootstrap";
import { MdShoppingCart } from "react-icons/md";

const CartWidgetRI = ({ counter }) => {
  return (
    <div>
      <MdShoppingCart fontSize={"1.6rem"} color="white" />

      <Badge pill bg="danger">
        {counter}
      </Badge>
    </div>
  );
};

export default CartWidgetRI;
