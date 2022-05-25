import { useContext } from "react";

import { CartContext } from "../../contexts/cart.context";

import {
  ShoppingIcon,
  CartIconContainer,
  ItemCount,
} from "./cart-icon.styles.jsx";

// Cart icon config
export default function CartIcon() {
  const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);

  // Toggles to open or close dropdown
  const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);

  return (
    <CartIconContainer onClick={toggleIsCartOpen}>
      <ShoppingIcon />
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  );
}
