import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 500px;
  overflow: hidden;

  @media (max-width: 768px) {
    height: 400px;
  }

  @media (max-width: 480px) {
    height: 300px;
  }
`;

export const BackgroundImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const Container = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #fff;
  text-align: center;
  width: 90%;
  max-width: 1200px;
`;

export const Title = styled.h1`
  font-family: 'Roboto', sans-serif;
  font-weight: 700;
  max-width: 684px;
  font-size: 96px;
  margin: 0 auto 40px;
  line-height: 1.2;

  @media (max-width: 1024px) {
    font-size: 72px;
    max-width: 500px;
    margin-bottom: 30px;
  }

  @media (max-width: 768px) {
    font-size: 48px;
    max-width: 400px;
    margin-bottom: 20px;
  }

  @media (max-width: 480px) {
    font-size: 36px;
    max-width: 300px;
    margin-bottom: 20px;
  }
`;

export const AccentText = styled.span`
  color: #f17900;
`;

export const SearchContainer = styled.form`
  display: flex;
  align-items: center;
  max-width: 600px;
  margin: 0 auto;
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  padding: 10px 20px;

  @media (max-width: 768px) {
    max-width: 400px;
    padding: 8px 16px;
  }
`;

export const SearchIcon = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 12px;
  opacity: 0.6;
`;

export const SearchInput = styled.input`
  flex: 1;
  border: none;
  outline: none;
  font-size: 16px;
  font-family: 'Roboto', sans-serif;
  color: #333;

  &::placeholder {
    color: #999;
  }

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

export const NoResultsText = styled.div`
  text-align: center;
  font-size: 18px;
  color: #666;
  padding: 60px 0;
  font-family: 'Roboto', sans-serif;
`;

export const SortContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 20px;
  gap: 10px;
`;

export const SortButton = styled.button<{ $active?: boolean }>`
  padding: 8px 16px;
  border: 1px solid ${(props) => (props.$active ? '#007bff' : '#ddd')};
  background: ${(props) => (props.$active ? '#007bff' : 'transparent')};
  color: ${(props) => (props.$active ? 'white' : '#333')};
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    border-color: #007bff;
    background: ${(props) => (props.$active ? '#0056b3' : '#f8f9fa')};
  }
`;
