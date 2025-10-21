import styled from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10000;
  background: rgba(0, 0, 0, 0.6);
  padding: 20px;

  @media (max-width: 768px) {
    align-items: flex-start;
    padding-top: 40px;
  }
`;

export const ModalContent = styled.div`
  position: relative;
  width: 100%;
  max-width: 735px;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 10001;

  @media (max-width: 1080px) {
    max-width: 600px;
  }

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

export const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalImage = styled.img`
  width: 100%;
  max-width: 735px;
  height: auto;
  max-height: 70vh;
  border-radius: 8px;
  object-fit: cover;

  @media (max-width: 1080px) {
    max-width: 600px;
  }

  @media (max-width: 768px) {
    max-width: 100%;
    max-height: 280px;
  }

  @media (max-width: 480px) {
    max-height: 260px;
  }
`;

export const ModalDescription = styled.div`
  background-color: rgba(240, 241, 241, 1);
  padding: 20px 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-top: 15px;
  border-radius: 0 0 8px 8px;

  @media (max-width: 768px) {
    flex-direction: row;
    gap: 10px;
    padding: 15px 20px;
  }

  @media (max-width: 480px) {
    flex-direction: row;
    padding: 12px 16px;
  }
`;

export const ModalText = styled.p`
  font-family: 'Lexend Deca';
  font-weight: 500;
  font-size: 18px;
  line-height: 26px;
  color: rgba(57, 57, 57, 1);
  margin: 0;
  flex: 1;
  word-wrap: break-word;

  @media (max-width: 1080px) {
    font-size: 16px;
    line-height: 24px;
  }

  @media (max-width: 768px) {
    font-size: 16px;
    line-height: 22px;
    text-align: center;
  }

  @media (max-width: 480px) {
    font-size: 14px;
    line-height: 20px;
  }

  @media (max-width: 390px) {
    font-size: 13px;
    line-height: 18px;
  }
`;

export const SideArrow = styled.button<{ left?: boolean }>`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  ${(props) => (props.left ? 'left: -50px;' : 'right: -50px;')}
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(241, 121, 0, 1);
  color: #000;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(241, 121, 0, 0.8);
  }

  @media (max-width: 1080px) {
    display: none;
  }
`;

export const ArrowsContainer = styled.div`
  display: none;

  @media (max-width: 1080px) {
    display: flex;
    justify-content: center;
    gap: 20px;
    margin-top: 15px;
  }
`;

export const ArrowButton = styled.button`
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(241, 121, 0, 1);
  color: #000;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(241, 121, 0, 0.8);
  }

  @media (max-width: 1080px) {
    width: 35px;
    height: 35px;
  }

  @media (max-width: 480px) {
    width: 32px;
    height: 32px;
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: -30px;
  right: -30px;
  cursor: pointer;
  font-size: 18px;
  background: transparent;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 1080px) {
    top: -25px;
    right: -25px;
  }

  @media (max-width: 768px) {
    top: 15px;
    right: 15px;
    width: 35px;
    height: 35px;
  }

  @media (max-width: 480px) {
    top: 10px;
    right: 10px;
    width: 32px;
    height: 32px;
  }
`;
