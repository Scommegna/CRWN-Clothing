import { useContext } from "react";

import { CartContext } from "../../contexts/cart.context";

import Button, { BUTTON_TYPES_CLASSES } from "../button/button.component";

import {
  ProductCardContainer,
  Footer,
  ProductName,
  ProductPrice,
} from "./product-card.styles.jsx";

// Card component for all the products
export default function ProductCard({ product }) {
  const { name, price, imageUrl } = product;
  const { addItemToCart } = useContext(CartContext);

  // Adds a new product to cart whenever the add to cart button is clicked
  const addProductToCart = () => addItemToCart(product);

  return (
    <ProductCardContainer>
      <img src={imageUrl} alt={`${name}`} />
      <Footer>
        <ProductName>{name}</ProductName>
        <ProductPrice>{price}</ProductPrice>
      </Footer>
      <Button
        buttonType={BUTTON_TYPES_CLASSES.inverted}
        onClick={addProductToCart}
      >
        Add to cart
      </Button>
    </ProductCardContainer>
  );
}
