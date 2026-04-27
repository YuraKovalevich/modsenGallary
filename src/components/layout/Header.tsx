import {
  CATEGORY_ROUTE,
  FAVOURITES_ROUTE,
  GALLERY_ROUTE,
  IMAGES_ROUTE,
} from '@constants/linkRoutes.ts';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import Category from '../../assets/CategoryLogo';
import Facebook from '../../assets/Facebook';
import Favourites from '../../assets/FavoutitesLogo';
import Github from '../../assets/Github';
import Images from '../../assets/ImagesLogo';
import Inst from '../../assets/Inst';
import Logo from '../../assets/Logo';
import Twitter from '../../assets/Twitter';
import ThemeSwitcher from '../ui/ThemeSwitcher';
import {
  BurgerButton,
  BurgerLine,
  HeaderContainer,
  HeaderWrapper,
  IconWrapper,
  MenuItem,
  MenuLink,
  MenuList,
  MobileMenu,
  NavbarMenu,
  SocialIcons,
  SocialLink,
  StyledLink,
} from './Header.styled';

const menuItems = [
  { label: 'Category', path: CATEGORY_ROUTE, Icon: Category },
  { label: 'Images', path: IMAGES_ROUTE, Icon: Images },
  { label: 'Favourites', path: FAVOURITES_ROUTE, Icon: Favourites },
];

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
            {menuItems.map(({ label, path, Icon }) => (
              <MenuItem key={path} $isActive={location.pathname === path}>
                <Link to={path} className="menu-link">
                  <IconWrapper>
                    <Icon />
                  </IconWrapper>
                  <MenuLink $isActive={location.pathname === path}>
                    {label}
                  </MenuLink>
                </Link>
              </MenuItem>
            ))}
          </MenuList>
        </NavbarMenu>
        <ThemeSwitcher />
      </HeaderContainer>

      <MobileMenu $open={menuOpen}>
        {menuItems.map(({ label, path }) => (
          <MenuItem key={path} onClick={closeMenu}>
            <Link to={path} className="menu-link">
              <span>{label}</span>
            </Link>
          </MenuItem>
        ))}

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
