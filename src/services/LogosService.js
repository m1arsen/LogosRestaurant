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

  return {loading, error, getMenu, getPromotions, getFAQ}
}

export default useLogosService;