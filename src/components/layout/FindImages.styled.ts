import styled from 'styled-components';

import findImage from '../../assets/find.jpg';

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 500px;
  overflow: visible;
  background: url(${findImage}) center / cover no-repeat;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    height: 400px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    height: 300px;
  }
`;

export const Container = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: ${({ theme }) => theme.colors.textWhite};
  text-align: center;
  width: 90%;
  max-width: ${({ theme }) => theme.layout.heroMaxWidth};
`;

export const Title = styled.h1`
  font-family: ${({ theme }) => theme.font.secondary};
  font-weight: 700;
  max-width: 684px;
  font-size: ${({ theme }) => theme.fontSize.titleXl};
  margin: 0 auto ${({ theme }) => theme.spacing.xl};
  line-height: 1.2;
  color: ${({ theme }) => theme.colors.heroTitle};

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    font-size: ${({ theme }) => theme.fontSize.titleLg};
    max-width: 500px;
    margin-bottom: ${({ theme }) => theme.spacing.lg};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.fontSize.titleMd};
    max-width: 400px;
    margin-bottom: ${({ theme }) => theme.spacing.md};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: ${({ theme }) => theme.fontSize.titleSm};
    max-width: 300px;
    margin-bottom: ${({ theme }) => theme.spacing.md};
  }
`;

export const AccentText = styled.span`
  color: ${({ theme }) => theme.colors.primary};
`;

export const SearchContainer = styled.form`
  display: flex;
  align-items: center;
  max-width: 600px;
  margin: 0 auto;
  background: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.radius.md};
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.shadow.sm};
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.lg};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    max-width: 400px;
    padding: ${({ theme }) => theme.spacing.sm}
      ${({ theme }) => theme.spacing.md};
  }
`;

export const SearchIcon = styled.span`
  width: 20px;
  height: 20px;
  display: inline-block;
  margin-right: ${({ theme }) => theme.spacing.sm};
  opacity: 0.6;
  border: 2px solid ${({ theme }) => theme.colors.textSecondary};
  border-radius: 50%;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    width: 7px;
    height: 2px;
    background: ${({ theme }) => theme.colors.textSecondary};
    transform: rotate(45deg);
    right: -5px;
    bottom: 1px;
  }
`;

export const SearchInput = styled.input`
  flex: 1;
  border: none;
  outline: none;
  font-size: ${({ theme }) => theme.fontSize.md};
  font-family: ${({ theme }) => theme.font.secondary};
  color: ${({ theme }) => theme.colors.textPrimary};

  &::placeholder {
    color: ${({ theme }) => theme.colors.textSecondary};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.fontSize.sm};
  }
`;

export const SearchWrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  z-index: 10;
`;

export const SuggestionsList = styled.ul`
  position: absolute;
  top: calc(100% + 8px);
  left: 0;
  right: 0;
  max-height: 280px;
  overflow-y: auto;
  list-style: none;
  border-radius: ${({ theme }) => theme.radius.md};
  border: 1px solid ${({ theme }) => theme.colors.border};
  background: ${({ theme }) => theme.colors.white};
  box-shadow: ${({ theme }) => theme.shadow.sm};
  text-align: left;
  overflow: hidden;
  z-index: 5;
`;

export const SuggestionItem = styled.li`
  color: ${({ theme }) => theme.colors.textPrimary};
  font-family: ${({ theme }) => theme.font.secondary};
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
  cursor: pointer;

  &:hover {
    background: ${({ theme }) => theme.colors.bgLight};
  }
`;

export const NoResultsText = styled.div`
  max-width: 684px;
  margin: 0 auto;
  font-family: ${({ theme }) => theme.font.main};
  text-align: center;
  font-weight: 700;
  font-size: ${({ theme }) => theme.fontSize.titleLg};
  color: ${({ theme }) => theme.colors.textPrimary};
  padding: ${({ theme }) => theme.spacing.xxl} 0;

  span {
    color: ${({ theme }) => theme.colors.primary};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.fontSize.titleMd};
  }
`;
