import Header from "../header/Header";
import Product from "../product/Product";
import OtherProducts from "../otherProducts/OtherProducts";
import Footer from "../footer/Footer";

import { ProductLine } from "../product/product-style";

const ProductPage = () => {
  return (
    <>
      <Header/>
      <Product/>
      <ProductLine/>
      <OtherProducts/>
      <Footer/>
    </>
  )
}

export default ProductPage;