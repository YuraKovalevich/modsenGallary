import styled, { keyframes } from 'styled-components';

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px 0;
`;

export const Spinner = styled.div`
  border: 3px solid rgba(241, 121, 0, 0.2);
  border-top: 3px solid #f17900;
  border-radius: 50%;
  animation: ${spin} 1s linear infinite;
  width: 32px;
  height: 32px;
`;
