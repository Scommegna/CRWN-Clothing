import { useDispatch, useSelector } from "react-redux";

import { selectCartItems } from "../../store/cart/cart.selector";

import { addItemToCart } from "../../store/cart/cart.action";

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

  const dispatch = useDispatch();

  const cartItems = useSelector(selectCartItems);

  // Adds a new product to cart whenever the add to cart button is clicked
  const addProductToCart = () => dispatch(addItemToCart(cartItems, product));

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
