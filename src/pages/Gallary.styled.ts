import styled from 'styled-components';

export const GalleryContainer = styled.div`
  max-width: 1310px;
  margin: 0 auto;
  padding: 40px 15px;
`;

export const CategoryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }

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
  border-radius: 10px;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);

  &:hover {
    transform: translateY(-8px);
  }

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(to top, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0));
    z-index: 1;
  }
`;

export const CategoryImage = styled.img`
  width: 100%;
  height: 220px;
  object-fit: cover;
  display: block;

  @media (max-width: 600px) {
    height: 180px;
  }
`;

export const CategoryName = styled.p`
  position: absolute;
  bottom: 12px;
  left: 16px;
  right: 16px;
  font-family: 'Roboto', sans-serif;
  font-weight: 600;
  font-size: 20px;
  color: #ffffff;
  text-shadow: 0 2px 6px rgba(0, 0, 0, 0.6);
  margin: 0;
  z-index: 2;

  @media (max-width: 600px) {
    font-size: 18px;
    bottom: 10px;
  }
`;

export const LoadingText = styled.p`
  text-align: center;
  font-size: 18px;
  color: #666;
  padding: 60px 0;
`;
