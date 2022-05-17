import "./cart-item.styles.scss";

// Generic item for cart dropdown
export default function CartItem({ cartItem }) {
  const { name, quantity } = cartItem;

  return (
    <div>
      <h2>{name}</h2>
      <span>{quantity}</span>
    </div>
  );
}
