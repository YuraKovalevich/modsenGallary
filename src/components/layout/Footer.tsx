import { memo } from 'react';

import Logo from '../../assets/Logo';
import * as S from './Footer.styled';
import { footerSections, socialLinks } from './layoutData';

const Footer = () => {
  return (
    <S.FooterWrapper>
      <S.FooterContainer>
        <S.FooterContent>
          <S.FooterGallery>
            <Logo />
            <S.GalleryText>
              We have images that capture every mood and inspire every vision.
              From breathtaking landscapes to vibrant portraits.
            </S.GalleryText>
            <S.GalleryShare>
              {socialLinks.map(({ key, Icon }) => (
                <S.SocialLink key={key} to="/">
                  <Icon />
                </S.SocialLink>
              ))}
            </S.GalleryShare>
          </S.FooterGallery>
          <S.SectionWrapper>
            {footerSections.map(({ title, links }) => (
              <S.Section key={title}>
                <S.SectionTitle>{title}</S.SectionTitle>
                <S.LinksList>
                  {links.map((label) => (
                    <S.StyledLink key={label} to="/">
                      {label}
                    </S.StyledLink>
                  ))}
                </S.LinksList>
              </S.Section>
            ))}
          </S.SectionWrapper>
        </S.FooterContent>

        <S.FooterRights>
          Modsen.gallery © 2000-2025, All Rights Reserved
        </S.FooterRights>
      </S.FooterContainer>
    </S.FooterWrapper>
  );
};

export default memo(Footer);
