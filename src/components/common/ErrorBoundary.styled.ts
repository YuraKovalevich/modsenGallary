import styled from 'styled-components';

export const ErrorWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;

  background: ${({ theme }) => theme.colors.bgError};
  color: ${({ theme }) => theme.colors.error};

  text-align: center;
  padding: ${({ theme }) => theme.spacing.md};
`;

export const ErrorTitle = styled.h1`
  font-family: ${({ theme }) => theme.font.main};
  font-weight: 600;
  font-size: ${({ theme }) => theme.fontSize.xxl};
  margin-bottom: ${({ theme }) => theme.spacing.sm};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.fontSize.lg};
  }
`;

export const ErrorText = styled.p`
  font-family: ${({ theme }) => theme.font.main};
  font-size: ${({ theme }) => theme.fontSize.md};
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

export const ReloadButton = styled.button`
  padding: ${({ theme }) => `${theme.spacing.sm} ${theme.spacing.lg}`};
  border-radius: ${({ theme }) => theme.radius.sm};
  border: none;

  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};

  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background: ${({ theme }) => theme.colors.primaryHover};
  }
`;
