import { Container } from "../../styles/styles";
import { OtherProductsTitle } from "./otherProducts-style";

const OtherProducts = () => {
  return (
    <Container>
      <OtherProductsTitle>С этим товаром покупают</OtherProductsTitle>

      <div className="product__others_cards swiper">

          <div className="product__others_wrapper swiper-wrapper">

          </div>

      </div>

    </Container>
  )
}

export default OtherProducts;