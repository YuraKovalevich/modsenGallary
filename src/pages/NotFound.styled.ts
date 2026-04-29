import styled from 'styled-components';

export const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const NotFoundNumbers = styled.h3`
  font-family: ${({ theme }) => theme.font.accent};
  font-size: ${({ theme }) => theme.fontSize.giant};
  color: ${({ theme }) => theme.colors.primary};
`;

export const NotFoundSubstr = styled.p`
  font-family: ${({ theme }) => theme.font.accent};
  font-size: ${({ theme }) => theme.fontSize.xl};
  color: ${({ theme }) => theme.colors.primary};
`;

export const NotFoundText = styled.p`
  max-width: 684px;
  text-align: center;

  font-family: ${({ theme }) => theme.font.main};
  font-size: ${({ theme }) => theme.fontSize.huge};

  span {
    color: ${({ theme }) => theme.colors.primary};
  }
`;
