import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const DUMMY_PRODUCTS = [
  {
    id: "p1",
    price: 800,
    title: "Nvidia RTX 3090ti",
    description: "Graphics card unit by nvidia corporation",
  },
  {
    id: "p2",
    price: 200,
    title: "AMD Ryzen 2700x",
    description: "2nd gen Processor by AMD",
  },
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map((product) => {
          return (
            <ProductItem
              key={product.id}
              id={product.id}
              title={product.title}
              price={product.price}
              description={product.description}
            />
          );
        })}
      </ul>
    </section>
  );
};

export default Products;
