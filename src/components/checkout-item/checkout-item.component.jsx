import {
  CheckoutItemContainer,
  ImageContainer,
  ProductNameAndPrice,
  ProductQuantity,
  RemoveButton,
} from "./checkout-item.styles.jsx";

import { useContext } from "react";

import { CartContext } from "../../contexts/cart.context";

// Item card for the checkout container
export default function CheckoutItem({ cartItem }) {
  const { name, imageUrl, price, quantity } = cartItem;

  // Context to add and remove items from cart and auxiliar handlers for these functions
  const { clearItemFromCart, addItemToCart, removeItemFromCart } =
    useContext(CartContext);
  const clearItemHandler = () => clearItemFromCart(cartItem);
  const removeItemHandler = () => removeItemFromCart(cartItem);
  const addItemHandler = () => addItemToCart(cartItem);

  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt={`${name}`} />
      </ImageContainer>
      <ProductNameAndPrice>{name}</ProductNameAndPrice>
      <ProductQuantity>
        <div onClick={removeItemHandler}>&#10094;</div>
        <span>{quantity}</span>
        <div onClick={addItemHandler}>&#10095;</div>
      </ProductQuantity>
      <ProductNameAndPrice>{price}</ProductNameAndPrice>
      <RemoveButton onClick={clearItemHandler}>&#10005;</RemoveButton>
    </CheckoutItemContainer>
  );
}
