import Header from "../header/Header";
import Cart from "../cart/Cart";
import Footer from "../footer/Footer";

const CartPage = ({menu, cartItems, addToCart, removeToCart, deleteToCart}) => {
  return (
    <>
      <Header/>
      <Cart
        menu={menu}
        cartItems={cartItems}
        addToCart={addToCart}
        removeToCart={removeToCart}
        deleteToCart={deleteToCart}/>
      <Footer/>
    </>
  )
}

export default CartPage;