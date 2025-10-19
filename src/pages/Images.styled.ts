import styled from 'styled-components';

export const GalleryWrapper = styled.div`
  background: #fff;
  padding: 40px 0;
`;

export const GalleryContainer = styled.div`
  max-width: 1310px;
  margin: 0 auto;
  padding: 0 15px;
`;

export const ImageGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 24px;
  margin-bottom: 40px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 16px;
  }
`;

export const ImageCard = styled.div`
  background: #f0f1f1;
  border-radius: 1px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 240px;
  object-fit: cover;
  display: block;
`;

export const ImageInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 18px 10px 10px 10px;
  min-height: 60px;
`;

export const ImageTitle = styled.h3`
  font-family: 'Lexend Deca';
  font-size: 18px;
  font-weight: 500;
  color: #333;
  margin: 0;
  line-height: 1.4;
  max-width: 219px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

export const FavoriteIconWrapper = styled.div`
  align-self: self-start;
`;

export const Pagination = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  gap: 8px;
  margin-top: 40px;
`;

export const PageButton = styled.button<{ $active?: boolean }>`
  font-family: 'Lexend Deca';
  font-weight: 600;
  padding: 8px 12px;
  border: 1px solid ${(props) => (props.$active ? '#F17900' : '#ddd')};
  background: ${(props) => (props.$active ? '#F17900' : '#fff')};
  color: ${(props) => (props.$active ? '#fff' : '#000')};
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 18px;
  min-width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover:not(:disabled) {
    background: #f17900;
    color: #fff;
    border-color: #f17900;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export const ArrowButton = styled.button`
  width: 30px;
  height: 30px;
  border: 1px solid #ddd;
  background: #fff;
  border-radius: 4px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  transition: all 0.3s ease;

  &::before {
    content: '';
    width: 8px;
    height: 8px;
    border-top: 2px solid #000;
    border-right: 2px solid #000;
    transform: rotate(45deg);
    transition: border-color 0.3s ease;
  }

  &:hover:not(:disabled) {
    background: #f17900;
    border-color: #f17900;

    &::before {
      border-color: #fff;
    }
  }

  &:disabled {
    opacity: 0.4;
    cursor: not-allowed;

    &::before {
      border-color: #999;
    }
  }
`;

export const LoadingText = styled.p`
  text-align: center;
  font-size: 18px;
  color: #666;
  padding: 60px 0;
`;
