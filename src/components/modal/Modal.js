import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

// Стилизация
import {  ModalStyles,
          ModalContent,
          ModalCloseBtn,
          ModalEmptyCartPic,
          ModalTitle,
          ModalOverlay } from './modal-style';

// Изображения
import closeIcon from '../../resources/close-icon.svg';
import emptyCartIcon from '../../resources/cart-is-empty-icon.svg';

// Компоненты
import { Button } from '../../styles/styles';

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

          <Button onClick={handleMenuClick}>
            Посмотреть меню
          </Button>

        </ModalContent>
      </ModalStyles>
    </>

  )
}

export default Modal;