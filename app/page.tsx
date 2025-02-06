

import { Categories } from "./component/categories";
import { FeaturedProducts } from "./component/featured-products";
import { Hero } from "./component/hero";

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedProducts />
      <Categories />
      
    </>
  );
}

