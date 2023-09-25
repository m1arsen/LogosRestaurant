import { ProductCardStyles, ProductCardImg, ProductCardInfo, ProductCardBtns, ProductCardBtnsPrice, ProductCardBtnsContainer, ProductCardBtnsAdd, ProductCardBtnsRemove, ProductCardTable } from "./produuctCard-style"

import removeIcon from '../../resources/product/remove-icon.svg';
import addIcon from '../../resources/product/add-icon.svg';

const ProductCard = ({cardData, cartItems, addToCart, removeToCart}) => {

  const {id, name, description, weight, proteins, fats, carbohydrates, calorie, price, src, alt} = cardData;

  // console.log(cardData);

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
                onClick={(e) => removeToCart(e.target.attributes['data-id'].value)}>
                <img src={removeIcon} alt="remove"/>
              </ProductCardBtnsRemove>

              <ProductCardBtnsAdd
                data-id={id}
                onClick={(e) => addToCart(e.target.attributes['data-id'].value)}>
                <img src={addIcon} alt="add"/>
              </ProductCardBtnsAdd>
            </ProductCardBtnsContainer>

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