import styled from 'styled-components';

export const GalleryContainer = styled.div`
  max-width: 1310px;
  margin: 0 auto;
  padding: 40px 15px;
`;

export const CategoryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 26px;
  justify-items: center;

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    gap: 20px;
  }
`;

export const CategoryCard = styled.div`
  position: relative;
  width: 100%;
  max-width: 400px;
  aspect-ratio: 1 / 0.8;
  border-radius: 1px;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);

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
  bottom: 16px;
  left: 20px;
  right: 20px;
  font-family: 'Roboto', sans-serif;
  font-weight: 600;
  font-size: 22px;
  color: #ffffff;
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.8);
  margin: 0;
  z-index: 2;

  @media (max-width: 600px) {
    font-size: 20px;
    bottom: 14px;
    left: 16px;
  }
`;

export const LoadingText = styled.p`
  text-align: center;
  font-size: 18px;
  color: #666;
  padding: 60px 0;
`;

export const GalleryWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;
