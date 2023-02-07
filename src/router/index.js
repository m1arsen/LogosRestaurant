import appConstants from "../common/constants";
import Route from "route-parser";

import MainPage from '../pages/main.template';
import CartPage from '../pages/cart.template';
import DeliveryPage from '../pages/delivery.template';
import PromotionsPage from '../pages/promotions.template';
import ProductPage from '../pages/product.template';
import OrderPage from '../pages/order.template';

export const routes = {
  Main: new Route(appConstants.routes.index),
  Cart: new Route(appConstants.routes.cart),
  Delivery: new Route(appConstants.routes.delivery),
  Promotios: new Route(appConstants.routes.promotions),
  Product: new Route(appConstants.routes.product),
  Order: new Route(appConstants.routes.order),
};

export const render = (path) => {
  let result = '<h1>404</h1>';

  if(routes.Main.match(path)){
    result = MainPage();
  } else if(routes.Cart.match(path)){
    result = CartPage();
  } else if(routes.Delivery.match(path)){
    result = DeliveryPage();
  } else if(routes.Promotios.match(path)){
    result = PromotionsPage();
  } else if(routes.Product.match(path)){
    result = ProductPage();
  } else if(routes.Order.match(path)){
    result = OrderPage();
  }

  document.querySelector('.content').innerHTML = result;
};

export const goTo = (path) => {
  window.history.pushState({path}, path, path);
  render(path);
};

const initRouter = () => {
  window.addEventListener('popstate', e => {
    render(new URL(window.location.href).pathname);
  });
  document.querySelectorAll('[href^="/"]').forEach(el => {
    el.addEventListener('click', (env) => {
      env.preventDefault();
      const {pathname: path} = new URL(env.target.href);
      goTo(path);
    });
  });
  render(new URL(window.location.href).pathname);
}

export default initRouter;