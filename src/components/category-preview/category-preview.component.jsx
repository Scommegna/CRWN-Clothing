import { Link } from "react-router-dom";
import ProductCard from "../product-card/product-card.component";

import {
  CategoryPreviewContainer,
  Preview,
} from "./category-preview.styles.jsx";

// Preview component for 4 products of each category to be used on shop page
export default function CategoryPreview({ title, products }) {
  return (
    <CategoryPreviewContainer>
      <h2>
        <Link to={title}>{title.toUpperCase()}</Link>
      </h2>
      <Preview>
        {products
          .filter((_, index) => index < 4)
          .map((product) => {
            return <ProductCard key={product.id} product={product} />;
          })}
      </Preview>
    </CategoryPreviewContainer>
  );
}
