import React, { useState } from 'react';
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
  BurgerButton,
  BurgerLine,
  MobileMenu,
  SocialIcons,
  SocialLink,
} from './Header.styled';
import Category from '../../assets/CategoryLogo';
import Images from '../../assets/ImagesLogo';
import Logo from '../../assets/Logo';
import Favourites from '../../assets/FavoutitesLogo';
import Twitter from '../../assets/Twitter';
import Facebook from '../../assets/Facebook';
import Inst from '../../assets/Inst';
import Github from '../../assets/Github';
import {
  CATEGORY_ROUTE,
  FAVOURITES_ROUTE,
  GALLERY_ROUTE,
  IMAGES_ROUTE,
} from '../../constants/linkRoutes';

const Header = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const closeMenu = () => setMenuOpen(false);

  return (
    <HeaderWrapper>
      <HeaderContainer>
        <StyledLink to={GALLERY_ROUTE}>
          <Logo />
        </StyledLink>

        <BurgerButton onClick={toggleMenu} $open={menuOpen}>
          <BurgerLine $open={menuOpen} />
          <BurgerLine $open={menuOpen} />
          <BurgerLine $open={menuOpen} />
        </BurgerButton>

        <NavbarMenu>
          <MenuList>
            <MenuItem $isActive={location.pathname === CATEGORY_ROUTE}>
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

      <MobileMenu $open={menuOpen}>
        <MenuItem onClick={closeMenu}>
          <Link to={CATEGORY_ROUTE} className="menu-link">
            <span>Category</span>
          </Link>
        </MenuItem>
        <MenuItem onClick={closeMenu}>
          <Link to={IMAGES_ROUTE} className="menu-link">
            <span>Images</span>
          </Link>
        </MenuItem>
        <MenuItem onClick={closeMenu}>
          <Link to={FAVOURITES_ROUTE} className="menu-link">
            <span>Favourites</span>
          </Link>
        </MenuItem>

        <SocialIcons>
          <SocialLink href="#">
            <Twitter />
          </SocialLink>
          <SocialLink href="#">
            <Facebook />
          </SocialLink>
          <SocialLink href="#">
            <Inst />
          </SocialLink>
          <SocialLink href="#">
            <Github />
          </SocialLink>
        </SocialIcons>
      </MobileMenu>
    </HeaderWrapper>
  );
};

export default Header;
