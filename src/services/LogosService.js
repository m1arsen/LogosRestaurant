import { useHttp } from "../hooks/http.hook"

const useLogosService = () => {

  const {loading, error, request} = useHttp();

  const getMenu = async () => {
    return await request('http://localhost:3000/menu');
    // return res;
  }

  // const _transformMenuToNames

  // const getTabs = async () => {
  //   const res = await request('http://localhost:3000/menu');

  // }

  // const getTabsPos = async () => {
  //   const res = await request('http://localhost:3000/menu');
  //   return res;
  // }

  // const _transformTabSection = (item) => {
  //   priceConvert() {
  //     let price = item.price.toString();
  //     if(price.length > 3) {
  //       price = price.slice(0, -3) + " " + price.slice(-3);
  //     }
  //     return price;
  //   }

  //   return {
  //     name,
  //     weight,
  //     description,
  //     price,
  //     src,
  //     alt
  //   }
  // }


  return {loading, error, getMenu}
}

export default useLogosService;