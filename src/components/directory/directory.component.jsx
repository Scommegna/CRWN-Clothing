import CategoryItem from "../category-item/category-item.component";

import "./directory.styles.scss";

export function Directory({ categories }) {
  return (
    <div className="directory-container">
      {categories.map((category) => {
        const { id } = category;
        return <CategoryItem key={id} category={category} />;
      })}
    </div>
  );
}
