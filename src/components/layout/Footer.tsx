import Facebook from '../../assets/Facebook';
import Github from '../../assets/Github';
import Inst from '../../assets/Inst';
import Logo from '../../assets/Logo';
import Twitter from '../../assets/Twitter';
import * as S from './Footer.styled';

const socialLinks = [
  { key: 'twitter', Icon: Twitter },
  { key: 'facebook', Icon: Facebook },
  { key: 'instagram', Icon: Inst },
  { key: 'github', Icon: Github },
];

const footerSections = [
  {
    title: 'COMPANY',
    links: ['About', 'Features', 'Works', 'Career'],
  },
  {
    title: 'HELP',
    links: [
      'Customer Support',
      'Delivery Details',
      'Terms & Conditions',
      'Privacy Policy',
    ],
  },
  {
    title: 'FAQ',
    links: ['Account', 'Manage Deliveries', 'Orders', 'Payments'],
  },
  {
    title: 'RESOURCES',
    links: [
      'Free eBooks',
      'Development Tutorial',
      'How to - Blog',
      'Youtube Playlist',
    ],
  },
];

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

export default Footer;
