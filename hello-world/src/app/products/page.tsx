import Link from "next/link";
import { Fragment } from "react";

const products: {
  id: number;
  title: string;
}[] = [
  {
    id: 1,
    title: "Product 1",
  },
  {
    id: 2,
    title: "Product 2",
  },
  {
    id: 3,
    title: "Product 3",
  },
];

const ProductsPage = () => {
  return (
    <>
      <h1>Products page</h1>
      {products.map((product) => (
        <Fragment key={`${product.id}, ${product.title}`}>
          <Link
            key={`${product.id}, ${product.title}`}
            href={{
              pathname: `products/${product.id}`,
            }}
          >
            {product.title}
          </Link>
          <br />
        </Fragment>
      ))}
    </>
  );
};

export default ProductsPage;
