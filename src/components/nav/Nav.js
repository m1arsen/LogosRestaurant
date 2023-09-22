import { Navigation } from "./nav-style";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <Navigation>
      <a href="#!">О ресторане</a>
      <Link to={'/delivery'}>Условия доставки</Link>
      <a href="#!">Возврат товара</a>
      <Link to={'/promotions'}>Акции</Link>
    </Navigation>
  )
}

export default Nav;