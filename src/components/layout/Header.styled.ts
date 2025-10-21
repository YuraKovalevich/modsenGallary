import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderWrapper = styled.header`
  max-width: 1310px;
  margin: 0 auto;
  height: 109px;
  display: grid;
  align-items: center;
`;

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const NavbarMenu = styled.nav`
  display: flex;
  align-items: center;
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

    &:hover path {
      stroke: #e0a449;
    }

    &:hover span {
      color: #e0a449;
    }
  }
`;

export const MenuLink = styled.span<{ $isActive?: boolean }>`
  font-family: 'Roboto', sans-serif;
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
`;
