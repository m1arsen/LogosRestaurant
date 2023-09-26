import Header from "../header/Header";
import Product from "../product/Product";
import OtherProducts from "../otherProducts/OtherProducts";
import Footer from "../footer/Footer";

import { ProductLine } from "../product/product-style";

const ProductPage = ({menu, cartItems, addToCart, removeToCart}) => {
  return (
    <>
      <Header cartItems={cartItems}/>
      <Product
        menu={menu}
        cartItems={cartItems}
        addToCart={addToCart}
        removeToCart={removeToCart}/>
      <ProductLine/>
      <OtherProducts/>
      <Footer/>
    </>
  )
}

export default ProductPage;