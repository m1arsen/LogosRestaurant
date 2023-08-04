import { useState, useEffect } from "react"
import { ProductSection, ProductContainer, ProductLink, ProductCard, ProductCardImg, ProductCardInfo, ProductCardBtns, ProductCardBtnsPrice, ProductCardBtnsContainer, ProductCardBtnsAdd, ProductCardBtnsRemove, ProductCardTable, ProductLine } from "./product-style";

import backIcon from '../../resources/product/back-icon.svg';
import removeIcon from '../../resources/product/remove-icon.svg';
import addIcon from '../../resources/product/add-icon.svg';

// Заглушки
import productImage from '../../resources/product/product-img.jpg'

const Product = () => {
  const [openedCard, setOpenedCard] = useState();


  return (
    <ProductSection>
      <ProductContainer>

        <ProductLink href="/">
          <img src={backIcon} alt="back"/>
          <p>Вернуться назад</p>
        </ProductLink>

        <ProductCard>

          <ProductCardImg>
            <img src={productImage} alt="product image"/>
          </ProductCardImg>

          <ProductCardInfo>

            <h1>Ягненок</h1>

            <p>помидор, сыр фета, масло подсолнечное, капуста пекинская, перец сладкий красный, огурцы, оливки без косточек</p>

            <ProductCardBtns>

              <ProductCardBtnsPrice><span>250</span> ₽</ProductCardBtnsPrice>

              <ProductCardBtnsContainer>
                <ProductCardBtnsRemove>
                  <img src={removeIcon} alt="remove"/>
                </ProductCardBtnsRemove>

                <ProductCardBtnsAdd>
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
                <td>17.23</td>
                <td>7.63</td>
                <td>22.35</td>
                <td>234</td>
                <td>210 г</td>
              </tr>
            </ProductCardTable>

          </ProductCardInfo>

        </ProductCard>

      </ProductContainer>
    </ProductSection>
  )
}

export default Product;