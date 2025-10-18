import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  HeaderWrapper,
  HeaderContainer,
  NavbarMenu,
  MenuList,
  MenuItem,
  MenuLink,
  StyledLink,
  IconWrapper,
} from './Header.styled';
import Category from '../../assets/CategoryLogo';
import Images from '../../assets/ImagesLogo';
import Logo from '../../assets/Logo';
import Favourites from '../../assets/FavoutitesLogo';
import {
  CATEGORY_ROUTE,
  FAVOURITES_ROUTE,
  GALLERY_ROUTE,
  IMAGES_ROUTE,
} from '../../constants/linkRoutes';

const Header = () => {
  const location = useLocation();

  return (
    <HeaderWrapper>
      <HeaderContainer>
        <StyledLink to={GALLERY_ROUTE}>
          <Logo />
        </StyledLink>
        <NavbarMenu>
          <MenuList>
            <MenuItem $isActive={location.pathname === GALLERY_ROUTE}>
              <Link to={CATEGORY_ROUTE} className="menu-link">
                <IconWrapper>
                  <Category />
                </IconWrapper>
                <MenuLink $isActive={location.pathname === CATEGORY_ROUTE}>
                  Category
                </MenuLink>
              </Link>
            </MenuItem>
            <MenuItem $isActive={location.pathname === IMAGES_ROUTE}>
              <Link to={IMAGES_ROUTE} className="menu-link">
                <IconWrapper>
                  <Images />
                </IconWrapper>
                <MenuLink $isActive={location.pathname === IMAGES_ROUTE}>
                  Images
                </MenuLink>
              </Link>
            </MenuItem>
            <MenuItem $isActive={location.pathname === FAVOURITES_ROUTE}>
              <Link to={FAVOURITES_ROUTE} className="menu-link">
                <IconWrapper>
                  <Favourites />
                </IconWrapper>
                <MenuLink $isActive={location.pathname === FAVOURITES_ROUTE}>
                  Favourites
                </MenuLink>
              </Link>
            </MenuItem>
          </MenuList>
        </NavbarMenu>
      </HeaderContainer>
    </HeaderWrapper>
  );
};

export default Header;
