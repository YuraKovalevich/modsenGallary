import styled from 'styled-components';

export const GalleryContainer = styled.div`
  max-width: ${({ theme }) => theme.layout.containerMaxWidth};
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing.xxl}
    ${({ theme }) => theme.spacing.sm};
`;

export const CategoryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${({ theme }) => theme.spacing.xl};
  justify-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    grid-template-columns: 1fr;
    gap: ${({ theme }) => theme.spacing.lg};
  }
`;

export const CategoryCard = styled.div`
  position: relative;
  width: 100%;
  max-width: ${({ theme }) => theme.layout.categoryCardMaxWidth};
  aspect-ratio: 1 / 0.8;
  border-radius: ${({ theme }) => theme.radius.none};
  overflow: hidden;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: ${({ theme }) => theme.shadow.card};

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(
      to top,
      rgba(0, 0, 0, 0.7) 0%,
      rgba(0, 0, 0, 0.4) 40%,
      rgba(0, 0, 0, 0) 70%
    );
    z-index: 1;
  }
`;

export const CategoryImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`;

export const CategoryName = styled.p`
  position: absolute;
  bottom: ${({ theme }) => theme.spacing.sm};
  left: ${({ theme }) => theme.spacing.lg};
  right: ${({ theme }) => theme.spacing.lg};

  font-family: ${({ theme }) => theme.font.category};
  font-weight: 600;
  font-size: ${({ theme }) => theme.fontSize.categoryLg};
  color: #ffffff;

  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.8);
  margin: 0;
  z-index: 2;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: ${({ theme }) => theme.fontSize.categoryMd};
    bottom: ${({ theme }) => theme.spacing.xs};
    left: ${({ theme }) => theme.spacing.sm};
  }
`;
