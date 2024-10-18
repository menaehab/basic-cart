import { Button, Container } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart, clearCart } from "../rtk/slices/cart-slice";

function Cart() {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleRemove = (cartItem) => {
    dispatch(removeFromCart(cartItem));
  };
  const total = cart.reduce((acc, product) => {
    acc += product.price * product.quantity;
    return acc;
  }, 0);
  return (
    <>
      <h1>Shopping Cart</h1>
      <Button onClick={() => dispatch(clearCart())} className="my-3">
        Remove all
      </Button>
      <Container>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Title</th>
              <th>Image</th>
              <th>Price</th>
              <th>quantity</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((cartItem) => (
              <tr key={cartItem.id}>
                <td>{cartItem.id}</td>
                <td>{cartItem.title}</td>
                <td>
                  <img
                    src={cartItem.image}
                    style={{ width: "20px" }}
                    alt={cartItem.title}
                  />
                </td>
                <td>${cartItem.price}</td>
                <td>{cartItem.quantity}</td>
                <td>
                  <Button
                    variant="danger"
                    onClick={() => handleRemove(cartItem)}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
        <h4>Total: ${total.toFixed(2)}</h4>
      </Container>
    </>
  );
}

export default Cart;
