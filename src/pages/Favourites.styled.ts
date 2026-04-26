import styled from 'styled-components';

export const FavouritesContainer = styled.div`
  max-width: ${({ theme }) => theme.layout.containerMaxWidth};
  margin: 0 auto;
  background-color: ${({ theme }) => theme.colors.white};
`;

export const FavouritesText = styled.p`
  max-width: 320px;
  text-align: center;
  font-family: ${({ theme }) => theme.font.secondary};
  font-weight: 400;
  font-size: ${({ theme }) => theme.fontSize.titleSm};
  margin: ${({ theme }) => theme.spacing.xxxl} auto;

  span {
    font-family: ${({ theme }) => theme.font.secondary};
    font-weight: 400;
    font-size: ${({ theme }) => theme.fontSize.xxl};
    color: ${({ theme }) => theme.colors.accent};
  }
`;

export const EmptyState = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: ${({ theme }) => theme.spacing.xxxl}
    ${({ theme }) => theme.spacing.lg};
  text-align: center;
`;

export const EmptyStateTitle = styled.h2`
  max-width: 684px;
  font-family: ${({ theme }) => theme.font.main};
  font-weight: 700;
  font-size: ${({ theme }) => theme.fontSize.titleLg};
  color: ${({ theme }) => theme.colors.textPrimary};

  span {
    color: ${({ theme }) => theme.colors.primary};
  }
`;
