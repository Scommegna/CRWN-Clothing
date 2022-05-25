import { useContext } from "react";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";

import { CartContext } from "../../contexts/cart.context";

import {
  CheckoutContainer,
  CheckoutHeader,
  Total,
} from "./checkout.styles.jsx";

// Checkout Page
export default function Checkout() {
  const { cartItems, cartTotal } = useContext(CartContext);

  return (
    <CheckoutContainer>
      <CheckoutHeader>
        <div>
          <span>Product</span>
        </div>
        <div>
          <span>Description</span>
        </div>
        <div>
          <span>Quantity</span>
        </div>
        <div>
          <span>Price</span>
        </div>
        <div>
          <span>Remove</span>
        </div>
      </CheckoutHeader>
      {cartItems.map((cartItem) => {
        return <CheckoutItem key={cartItem.id} cartItem={cartItem} />;
      })}
      <Total>Total: ${cartTotal}</Total>
    </CheckoutContainer>
  );
}
