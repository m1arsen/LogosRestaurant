import { ProductCardStyles, ProductCardImg, ProductCardInfo, ProductCardBtns, ProductCardBtnsPrice, ProductCardBtnsContainer, ProductCardBtnsAdd, ProductCardBtnsRemove, ProductCardTable, ProductCardCounter } from "./produuctCard-style"

import removeIcon from '../../resources/product/remove-icon.svg';
import addIcon from '../../resources/product/add-icon.svg';

import { useState, useEffect } from "react";

const ProductCard = ({cardData, cartItems, addToCart, removeToCart}) => {

  const [count, setCount] = useState(0);

  useEffect(() => {
    setCount(cartItems[cardData.id]);
  }, [cartItems])

  const {id, name, description, weight, proteins, fats, carbohydrates, calorie, price, src, alt} = cardData;

  return (
    <ProductCardStyles>

      <ProductCardImg>
        <img src={'.' + src} alt={alt}/>
      </ProductCardImg>

      <ProductCardInfo>

        <div>
          <h1>{name}</h1>
          <p>{description}</p>
        </div>

        <div>
          <ProductCardBtns>

            <ProductCardBtnsPrice><span>{price}</span> ₽</ProductCardBtnsPrice>

            <ProductCardBtnsContainer>
              <ProductCardBtnsRemove
                data-id={id}
                data-deleteBtn={'DeleteBtn'}
                onClick={(e) => removeToCart(e.target.attributes['data-id'].value, e.target.attributes['data-deleteBtn'].value)}>
                <img
                  data-id={id}
                  data-deleteBtn={'DeleteBtn'}
                  src={removeIcon}
                  alt="remove"/>
              </ProductCardBtnsRemove>

              <ProductCardBtnsAdd
                data-id={id}
                onClick={(e) => addToCart(e.target.attributes['data-id'].value)}>
                <img
                  data-id={id}
                  src={addIcon}
                  alt="add"/>
              </ProductCardBtnsAdd>
            </ProductCardBtnsContainer>

            {count ? <ProductCardCounter>В корзине: <span>{count} шт.</span></ProductCardCounter> : null}

          </ProductCardBtns>

          <ProductCardTable>

          <tr>
            <td>Белки</td>
            <td>Жиры</td>
            <td>Углеводы</td>
            <td>Ккал</td>
            <td>Вес</td>
          </tr>

          <tr>
            <td>{proteins}</td>
            <td>{fats}</td>
            <td>{carbohydrates}</td>
            <td>{calorie}</td>
            <td>{weight} г</td>
          </tr>
          </ProductCardTable>
        </div>

      </ProductCardInfo>

    </ProductCardStyles>
  )
}

export default ProductCard;