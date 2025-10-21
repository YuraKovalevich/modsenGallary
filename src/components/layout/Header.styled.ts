import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderWrapper = styled.header`
  max-width: 1310px;
  margin: 0 auto;
  height: 109px;
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

  @media (max-width: 768px) {
    display: none;
  }
`;

export const MenuList = styled.ul`
  display: flex;
  align-items: center;
  gap: 44px;
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const MenuItem = styled.li<{ $isActive?: boolean }>`
  .menu-link {
    display: flex;
    align-items: center;
    gap: 9px;
    text-decoration: none;

    path {
      fill: none;
      stroke: ${(props) => (props.$isActive ? '#e0a449' : '#fffdfa')};
      transition: stroke 0.3s ease;
    }

    span {
      color: ${(props) => (props.$isActive ? '#e0a449' : '#fffdfa')};
      transition: color 0.3s ease;
    }

    &:hover span {
      color: #e0a449;
    }
    &:hover path {
      stroke: #e0a449;
    }
  }
`;

export const MenuLink = styled.span<{ $isActive?: boolean }>`
  font-family: 'Roboto';
  font-size: 24px;
  font-weight: 400;
  line-height: 100%;
  color: ${(props) => (props.$isActive ? '#e0a449' : '#fffdfa')};
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

  @media (max-width: 768px) {
    display: none;
  }
`;

export const BurgerButton = styled.div<{ $open?: boolean }>`
  width: 30px;
  height: 19px;
  display: none;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;
  z-index: 1001;

  @media (max-width: 768px) {
    display: flex;
  }
`;

export const BurgerLine = styled.span<{ $open?: boolean }>`
  height: 3px;
  width: 100%;
  background: #e0a449;
  border-radius: 2px;
  transition: all 0.3s ease;

  ${({ $open }) =>
    $open &&
    `
    &:nth-child(1) {
      transform: rotate(45deg) translate(5px, 5px);
    }
    &:nth-child(2) {
      opacity: 0;
    }
    &:nth-child(3) {
      transform: rotate(-45deg) translate(6px, -6px);
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
    #343333 38.05%,
    #484848 69.22%,
    #282828 98.98%
  );
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  padding: ${({ $open }) => ($open ? '20px 30px' : '0')};
  height: ${({ $open }) => ($open ? 'auto' : '0')};
  overflow: hidden;
  transition: all 0.4s ease;
  z-index: 1000;

  a {
    display: block;
    color: #fffdfa;
    font-family: 'Roboto';
    font-size: 22px;
    text-decoration: none;
    transition: color 0.3s ease;

    &:hover {
      color: #e0a449;
    }
  }
`;
export const SocialIcons = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 5px;
  justify-content: center;
`;

export const SocialLink = styled.a`
  svg {
    width: 24px;
    height: 24px;
    transition:
      transform 0.2s ease,
      opacity 0.2s ease;
  }
  &:hover svg {
    fill: rgba(224, 164, 73, 1);
  }
`;
