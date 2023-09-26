import { useState, useEffect } from "react"
import { useParams } from "react-router";
import { ProductSection, ProductContainer, ProductLink, ProductLine } from "./product-style";

import ProductCard from "../productCard/ProductCard";

import backIcon from '../../resources/product/back-icon.svg';

import { useNavigate } from "react-router-dom";

// import { getProductInfo } from "../Functions";

import useLogosService from "../../services/LogosService";
import Spinner from "../spinner/Spinner";

const Product = ({cartItems, addToCart, removeToCart}) => {
  const {id} = useParams();
  const [cardData, setCardData] = useState([]);

  // const {getMenu} = useLogosService();
  const navigate = useNavigate()

  const {loading, error, getProductInfo} = useLogosService();

  useEffect(() => {
    getProductInfo(id).then(setCardData);
  }, [id])

  const spinner = loading ? <Spinner/> : null;
  const errorMessage = error ? <h1>Error</h1> : null;

  const handleClick = () => {
    navigate(-1);
    window.scrollTo(0, 0);
  };

  return (
    <ProductSection>
      <ProductContainer>

        <ProductLink onClick={handleClick}>
          <img src={backIcon} alt="back"/>
          <p>Вернуться назад</p>
        </ProductLink>

        {spinner}
        {errorMessage}
        {!(loading && error) ? <ProductCard
          cardData={cardData}
          cartItems={cartItems}
          addToCart={addToCart}
          removeToCart={removeToCart}/> : null}

      </ProductContainer>
    </ProductSection>
  )
}

export default Product;