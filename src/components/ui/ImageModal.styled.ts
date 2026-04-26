import styled from 'styled-components';

const ArrowBase = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  border: none;
  border-radius: ${({ theme }) => theme.radius.round};
  width: ${({ theme }) => theme.modal.arrowSize};
  height: ${({ theme }) => theme.modal.arrowSize};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.colors.primary};
  z-index: ${({ theme }) => theme.zIndex.modalContent};

  &:hover {
    background: ${({ theme }) => theme.colors.primaryHover};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    display: none;
  }
`;

export const SideArrow = styled(ArrowBase)<{ $left?: boolean }>`
  ${({ $left }) => ($left ? 'left: -50px;' : 'right: -50px;')}
`;

export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: ${({ theme }) => theme.zIndex.modal};
  background: ${({ theme }) => theme.colors.overlay};
  padding: ${({ theme }) => theme.spacing.lg};

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    align-items: flex-start;
    padding-top: ${({ theme }) => theme.spacing.xl};
  }
`;

export const ModalContent = styled.div`
  position: relative;
  width: 100%;
  max-width: ${({ theme }) => theme.layout.modalMaxWidth};
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: ${({ theme }) => theme.zIndex.modalContent};
`;

export const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const ModalImage = styled.img`
  width: 100%;
  max-width: ${({ theme }) => theme.layout.modalMaxWidth};
  max-height: 70vh;
  object-fit: cover;
  border-radius: ${({ theme }) => theme.radius.md};
`;

export const ModalDescription = styled.div`
  background: ${({ theme }) => theme.colors.bgLight};
  padding: ${({ theme }) => theme.spacing.lg} ${({ theme }) => theme.spacing.xl};
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-top: ${({ theme }) => theme.spacing.md};
  border-radius: 0 0 ${({ theme }) => theme.radius.md}
    ${({ theme }) => theme.radius.md};
`;

export const ModalText = styled.p`
  font-family: ${({ theme }) => theme.font.main};
  font-weight: 500;
  font-size: ${({ theme }) => theme.fontSize.lg};
  color: ${({ theme }) => theme.colors.textPrimary};
  margin: 0;
  flex: 1;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    text-align: center;
  }
`;

export const ArrowsContainer = styled.div`
  display: none;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    display: flex;
    justify-content: center;
    gap: ${({ theme }) => theme.spacing.lg};
    margin-top: ${({ theme }) => theme.spacing.md};
  }
`;

export const ArrowButton = styled.button`
  border: none;
  border-radius: ${({ theme }) => theme.radius.round};
  width: ${({ theme }) => theme.modal.arrowSize};
  height: ${({ theme }) => theme.modal.arrowSize};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.colors.primary};

  &:hover {
    background: ${({ theme }) => theme.colors.primaryHover};
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: -30px;
  right: -30px;
  border: none;
  background: transparent;
  cursor: pointer;
  z-index: ${({ theme }) => theme.zIndex.modalContent + 1};
`;
