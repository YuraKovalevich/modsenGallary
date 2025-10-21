import styled from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10000;
  background: rgba(0, 0, 0, 0.4);
`;

export const ModalImage = styled.img`
  width: 735px;
  height: 635px;
  border-radius: 8px;
  object-fit: cover;
`;

export const ArrowButton = styled.button<{ left?: boolean }>`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  ${(props) => (props.left ? 'left: -50px;' : 'right: -50px;')}
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  cursor: pointer;
  font-size: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(241, 121, 0, 1);
  color: #000;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: -30px;
  right: -30px;
  cursor: pointer;
  font-size: 18px;
  background: transparent;
`;
export const ModalContent = styled.div`
  position: relative;
  width: 735px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10001;
`;

export const ModalDescription = styled.div`
  background-color: rgba(240, 241, 241, 1);
  padding: 26px 39px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const ModalText = styled.p`
  font-family: 'Lexend Deca';
  font-weight: 500;
  font-size: 18px;
  line-height: 26px;
  color: rgba(57, 57, 57, 1);
`;
