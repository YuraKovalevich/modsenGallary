import styled, { keyframes } from 'styled-components';

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${({ theme }) => theme.spacing?.xl || '40px'} 0;
`;

export const Spinner = styled.div`
  width: ${({ theme }) => theme.components?.iconButtonSize || '32px'};
  height: ${({ theme }) => theme.components?.iconButtonSize || '32px'};

  border: ${({ theme }) => theme.components?.borderSize || '3px'} solid
    ${({ theme }) => theme.colors?.overlayDark || 'rgba(0,0,0,0.2)'};

  border-top: ${({ theme }) => theme.components?.borderSize || '3px'} solid
    ${({ theme }) => theme.colors?.primary || '#F17900'};

  border-radius: ${({ theme }) => theme.radius?.round || '50%'};

  animation: ${spin} ${({ theme }) => theme.loader?.duration || '1s'} linear
    infinite;
`;
