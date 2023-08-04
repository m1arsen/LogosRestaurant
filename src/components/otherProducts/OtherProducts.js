import { Container } from "../../styles/styles";
import { OtherProductsTitle } from "./otherProducts-style";

const OtherProducts = () => {
  return (
    <Container>
      <OtherProductsTitle>С этим товаром покупают</OtherProductsTitle>

      <div class="product__others_cards swiper">

          <div class="product__others_wrapper swiper-wrapper">

          </div>

      </div>

    </Container>
  )
}

export default OtherProducts;