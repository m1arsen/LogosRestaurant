import Header from "../header/Header";
import Product from "../product/Product";
import OtherProducts from "../otherProducts/OtherProducts";
import Footer from "../footer/Footer";

import { ProductLine } from "../product/product-style";

const ProductPage = ({cartItems, addToCart, removeToCart}) => {
  return (
    <>
      <Header cartItems={cartItems}/>
      <Product  cartItems={cartItems}
                addToCart={addToCart}
                removeToCart={removeToCart}/>
      <ProductLine/>
      <OtherProducts  cartItems={cartItems}
                      addToCart={addToCart}
                      removeToCart={removeToCart}/>
      <Footer/>
    </>
  )
}

export default ProductPage;