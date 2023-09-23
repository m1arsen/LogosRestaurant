import Header from "../header/Header";
import Main from "../main/Main";
import Menu from "../menu/Menu";
import OurCafe from "../ourCafe/OurCafe";
import Location from "../location/Location";
import Footer from "../footer/Footer";

const MainPage = ({menu, loading, error, cartItems, addToCart, removeToCart}) => {
  return (
    <>
      <Header/>
      <Main/>
      <Menu menu={menu} loading={loading} error={error} cartItems={cartItems} addToCart={addToCart} removeToCart={removeToCart}/>
      <OurCafe/>
      <Location/>
      <Footer/>
    </>
  )
}

export default MainPage;