import appConstants from "../common/constants";
import Route from "route-parser";

import MainPage from '../pages/main.template';
import CartPage from '../pages/cart.template';

export const routes = {
  Main: new Route(appConstants.routes.index),
  Cart: new Route(appConstants.routes.cart),
};

export const render = (path) => {
  let result = '<h1>404</h1>';

  if(routes.Main.match(path)){
    result = MainPage();
  } else if(routes.Cart.match(path)){
    result = CartPage();
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