import { useHttp } from "../hooks/http.hook"

const useLogosService = () => {

  const {loading, error, request} = useHttp();

  const getMenu = async () => {
    return await request('http://localhost:3000/menu');
  }

  const getPromotions = async () => {
    return await request('http://localhost:3000/promotions');
  }

  const getFAQ = async () => {
    return await request('http://localhost:3000/FAQ');
  }

  const getProductById = async (id) => {
    return await getMenu().then((menu) => {
      let cardData;
      for(let position in menu) {

        let positionData = menu[position].items;

        positionData.forEach(item => {
          if(item.id == id) {
            cardData = item;
          }
        })
      }

      return cardData;
    })
  }

  return {loading, error, getMenu, getPromotions, getFAQ, getProductById}
}

export default useLogosService;