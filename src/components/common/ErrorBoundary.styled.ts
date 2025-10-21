import styled from 'styled-components';

export const ErrorWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: #fef2f2;
  color: #b91c1c;
  text-align: center;
  padding: 0 20px;
`;

export const ErrorTitle = styled.h1`
  font-family: 'Lexend Deca', sans-serif;
  font-weight: 600;
  font-size: 28px;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    font-size: 22px;
  }
`;

export const ErrorText = styled.p`
  font-family: 'Lexend Deca', sans-serif;
  font-size: 18px;
  color: rgba(57, 57, 57, 0.8);
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

export const ReloadButton = styled.button`
  padding: 10px 24px;
  border-radius: 8px;
  border: none;
  background: #f17900;
  color: #fff;
  font-family: 'Lexend Deca', sans-serif;
  font-weight: 500;
  font-size: 16px;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background: rgba(241, 121, 0, 0.85);
  }

  @media (max-width: 768px) {
    padding: 8px 18px;
    font-size: 14px;
  }
`;
