import Button from "../button/button.component";

import "./cart-dropdown.styles.scss";

// Cart dropdown component
export default function CartDropdown() {
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items" />
      <Button>GO TO CHECKOUT</Button>
    </div>
  );
}