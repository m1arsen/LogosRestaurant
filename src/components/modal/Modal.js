import { ModalStyles, ModalContent, ModalCloseBtn, ModalEmptyCartPic, ModalTitle, ModalMenuBtn, ModalOverlay } from './modal-style';
import closeIcon from '../../resources/close-icon.svg';
import emptyCartIcon from '../../resources/cart-is-empty-icon.svg';
import { useEffect } from 'react';

import { useNavigate } from 'react-router-dom';

const Modal = ({modalVisible, setModalVisible}) => {

  const navigate = useNavigate();

  useEffect(() => {
    if (modalVisible) {
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [modalVisible])

  const handleMenuClick = () => {
    setModalVisible(false);
    navigate('/');
  }

  if (!modalVisible) {
    return null;
  }

  return (
    <>
      <ModalOverlay onClick={() => setModalVisible(false)}/>
      <ModalStyles>
        <ModalContent>

          <ModalCloseBtn onClick={() => setModalVisible(false)}>
            <img src={closeIcon} alt="close button" />
          </ModalCloseBtn>

          <ModalEmptyCartPic>
            <img src={emptyCartIcon} alt="Корзина пустая"/>
          </ModalEmptyCartPic>

          <ModalTitle>Корзина пустая</ModalTitle>

          <ModalMenuBtn onClick={handleMenuClick}>
            Посмотреть меню
          </ModalMenuBtn>

        </ModalContent>
      </ModalStyles>
    </>

  )
}

export default Modal;