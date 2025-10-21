import styled from 'styled-components';

export const FavouritesContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  background-color: #fff;
`;

export const FavouritesText = styled.p`
  max-width: 310px;
  text-align: center;
  font-family: 'Roboto';
  font-weight: 400;
  font-size: 40px;
  margin: 65px auto;
  span {
    font-family: 'Roboto';
    font-weight: 400;
    font-size: 32px;
    color: rgba(224, 164, 73, 1);
  }
`;

export const FavouriteInfo = styled.div`
  text-align: center;
  margin-bottom: 40px;

  h1 {
    font-size: 32px;
    color: #333;
    margin-bottom: 8px;
  }

  p {
    font-size: 16px;
    color: #666;
  }
`;

export const FavouritesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 24px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 16px;
  }
`;

export const FavouriteCard = styled.div`
  background: #fff;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-4px);
  }
`;

export const FavouriteImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

export const FavouriteTitle = styled.h3`
  padding: 16px;
  font-size: 16px;
  font-weight: 500;
  color: #333;
  margin: 0;
  line-height: 1.4;
`;

export const RemoveButton = styled.button`
  width: calc(100% - 32px);
  margin: 0 16px 16px;
  padding: 10px 16px;
  background: #ff4757;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
  transition: background-color 0.3s ease;
`;

export const EmptyState = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 80px 20px;
  text-align: center;
`;

export const EmptyStateTitle = styled.h2`
  max-width: 684px;
  font-family: 'Lexend Deca';
  font-weight: 700;
  font-size: 64px;
  color: rgba(57, 57, 57, 1);

  span {
    color: #f17900;
  }
`;
