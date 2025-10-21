import React from 'react';
import Logo from '../../assets/Logo';
import Twitter from '../../assets/Twitter';
import Facebook from '../../assets/Facebook';
import Inst from '../../assets/Inst';
import Github from '../../assets/Github';
import {
  FooterWrapper,
  FooterContainer,
  FooterContent,
  FooterGallery,
  GalleryText,
  GalleryShare,
  FooterRights,
  Section,
  SectionTitle,
  LinksList,
  StyledLink,
  SocialLink,
  SectionWrapper,
} from './Footer.styled';

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterContainer>
        <FooterContent>
          <FooterGallery>
            <Logo />
            <GalleryText>
              We have images that capture every mood and inspire every vision.
              From breathtaking landscapes to vibrant portraits.
            </GalleryText>
            <GalleryShare>
              <SocialLink to={'/'}>
                <Twitter />
              </SocialLink>
              <SocialLink to={'/'}>
                <Facebook />
              </SocialLink>
              <SocialLink to={'/'}>
                <Inst />
              </SocialLink>
              <SocialLink to={'/'}>
                <Github />
              </SocialLink>
            </GalleryShare>
          </FooterGallery>
          <SectionWrapper>
            <Section>
              <SectionTitle>COMPANY</SectionTitle>
              <LinksList>
                <StyledLink to="/">About</StyledLink>
                <StyledLink to="/">Features</StyledLink>
                <StyledLink to="/">Works</StyledLink>
                <StyledLink to="/">Career</StyledLink>
              </LinksList>
            </Section>

            <Section>
              <SectionTitle>HELP</SectionTitle>
              <LinksList>
                <StyledLink to="/">Customer Support</StyledLink>
                <StyledLink to="/">Delivery Details</StyledLink>
                <StyledLink to="/">Terms & Conditions</StyledLink>
                <StyledLink to="/">Privacy Policy</StyledLink>
              </LinksList>
            </Section>

            <Section>
              <SectionTitle>FAQ</SectionTitle>
              <LinksList>
                <StyledLink to="/">Account</StyledLink>
                <StyledLink to="/">Manage Deliveries</StyledLink>
                <StyledLink to="/">Orders</StyledLink>
                <StyledLink to="/">Payments</StyledLink>
              </LinksList>
            </Section>

            <Section>
              <SectionTitle>RESOURCES</SectionTitle>
              <LinksList>
                <StyledLink to="/">Free eBooks</StyledLink>
                <StyledLink to="/">Development Tutorial</StyledLink>
                <StyledLink to="/">How to - Blog</StyledLink>
                <StyledLink to="/">Youtube Playlist</StyledLink>
              </LinksList>
            </Section>
          </SectionWrapper>
        </FooterContent>

        <FooterRights>
          Modsen.gallery © 2000-2025, All Rights Reserved
        </FooterRights>
      </FooterContainer>
    </FooterWrapper>
  );
};

export default Footer;
