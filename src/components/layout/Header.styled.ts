import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const HeaderWrapper = styled.header`
  max-width: ${({ theme }) => theme.layout.containerMaxWidth};
  margin: 0 auto;
  height: ${({ theme }) => theme.spacing.xxxl};
  display: grid;
  align-items: center;
  position: relative;
`;

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const NavbarMenu = styled.nav`
  display: flex;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    display: none;
  }
`;

export const MenuList = styled.ul`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xxl};
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const MenuItem = styled.li<{ $isActive?: boolean }>`
  .menu-link {
    display: flex;
    align-items: center;
    gap: ${({ theme }) => theme.spacing.sm};
    text-decoration: none;

    path {
      fill: none;
      stroke: ${({ $isActive, theme }) =>
        $isActive ? theme.colors.accent : theme.colors.textWhite};
      transition: stroke 0.3s ease;
    }

    span {
      color: ${({ $isActive, theme }) =>
        $isActive ? theme.colors.accent : theme.colors.textWhite};
      transition: color 0.3s ease;
    }

    &:hover span,
    &:hover path {
      color: ${({ theme }) => theme.colors.accent};
      stroke: ${({ theme }) => theme.colors.accent};
    }
  }
`;

export const MenuLink = styled.span<{ $isActive?: boolean }>`
  font-family: ${({ theme }) => theme.font.secondary};
  font-size: ${({ theme }) => theme.fontSize.xl};
  font-weight: 400;
  line-height: 100%;
  color: ${({ $isActive, theme }) =>
    $isActive ? theme.colors.accent : theme.colors.textWhite};
  transition: color 0.3s ease;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  display: flex;
  align-items: center;
`;

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    display: none;
  }
`;

export const BurgerButton = styled.div`
  width: ${({ theme }) => theme.spacing.xl};
  height: ${({ theme }) => theme.spacing.lg};
  display: none;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;
  z-index: ${({ theme }) => theme.zIndex.modalContent};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    display: flex;
  }
`;

export const BurgerLine = styled.span<{ $open?: boolean }>`
  height: 3px;
  width: 100%;
  background: ${({ theme }) => theme.colors.accent};
  border-radius: ${({ theme }) => theme.radius.sm};
  transition: all 0.3s ease;

  ${({ $open }) =>
    $open &&
    `
    &:nth-child(1) {
      transform: rotate(45deg) translate(4px, 4px);
    }

    &:nth-child(2) {
      opacity: 0;
    }

    &:nth-child(3) {
      transform: rotate(-45deg) translate(4px, -4px);
    }
  `}
`;

export const MobileMenu = styled.div<{ $open?: boolean }>`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  background: linear-gradient(
    90deg,
    ${({ theme }) => theme.colors.bgDark},
    #484848,
    #282828
  );

  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.lg};
  align-items: center;

  padding: ${({ $open, theme }) =>
    $open ? `${theme.spacing.lg} ${theme.spacing.xl}` : 0};

  height: ${({ $open }) => ($open ? 'auto' : 0)};
  overflow: hidden;
  transition: all 0.4s ease;

  z-index: ${({ theme }) => theme.zIndex.modal};

  a {
    color: ${({ theme }) => theme.colors.textWhite};
    font-family: ${({ theme }) => theme.font.secondary};
    font-size: ${({ theme }) => theme.fontSize.lg};
    text-decoration: none;

    &:hover {
      color: ${({ theme }) => theme.colors.accent};
    }
  }
`;

export const SocialIcons = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.lg};
  margin-top: ${({ theme }) => theme.spacing.xs};
  justify-content: center;
`;

export const SocialLink = styled.a`
  svg {
    width: ${({ theme }) => theme.spacing.xl};
    height: ${({ theme }) => theme.spacing.xl};
    transition:
      transform 0.2s ease,
      opacity 0.2s ease;
  }

  &:hover svg {
    fill: ${({ theme }) => theme.colors.accent};
  }
`;
