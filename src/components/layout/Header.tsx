import { GALLERY_ROUTE } from '@constants/linkRoutes.ts';
import { memo, useCallback, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import Logo from '../../assets/Logo';
import ThemeSwitcher from '../ui/ThemeSwitcher';
import {
  BurgerButton,
  BurgerLine,
  DesktopThemeSwitcher,
  HeaderContainer,
  HeaderWrapper,
  IconWrapper,
  MenuItem,
  MenuLink,
  MenuList,
  MobileMenu,
  MobileThemeSwitcher,
  NavbarMenu,
  SocialIcons,
  SocialLink,
  StyledLink,
} from './Header.styled';
import { menuItems, socialLinks } from './layoutData';

const Header = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = useCallback(() => setMenuOpen((prev) => !prev), []);
  const closeMenu = useCallback(() => setMenuOpen(false), []);

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
        <DesktopThemeSwitcher>
          <ThemeSwitcher />
        </DesktopThemeSwitcher>
      </HeaderContainer>

      <MobileMenu $open={menuOpen}>
        <MobileThemeSwitcher>
          <ThemeSwitcher />
        </MobileThemeSwitcher>

        {menuItems.map(({ label, path }) => (
          <MenuItem key={path} onClick={closeMenu}>
            <Link to={path} className="menu-link">
              <span>{label}</span>
            </Link>
          </MenuItem>
        ))}

        <SocialIcons>
          {socialLinks.map(({ key, Icon }) => (
            <SocialLink key={key} href="#">
              <Icon />
            </SocialLink>
          ))}
        </SocialIcons>
      </MobileMenu>
    </HeaderWrapper>
  );
};

export default memo(Header);
