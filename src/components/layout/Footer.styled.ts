import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const FooterWrapper = styled.div`
  max-width: 1310px;
  margin: 0 auto;
`;

export const FooterContainer = styled.div`
  padding: 80px 0;
`;

export const FooterContent = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;

  @media (max-width: 900px) {
    flex-wrap: wrap;
    gap: 40px;
  }
`;

export const FooterGallery = styled.div`
  display: grid;
  gap: 25px;
`;

export const GalleryText = styled.p`
  max-width: 248px;
  font-family: 'Roboto';
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  color: rgba(255, 255, 255, 0.6);
`;

export const GalleryShare = styled.div`
  display: flex;
  gap: 12px;
`;

export const SocialLink = styled(Link)`
  display: flex;
  transition:
    stroke 0.3s ease,
    transform 0.3s ease;

  svg {
    stroke: rgba(255, 255, 255, 0.6);
    transition:
      stroke 0.3s ease,
      transform 0.3s ease;
  }

  &:hover path {
    fill: #fff;
  }
  &:hover svg {
    fill: rgba(224, 164, 73, 1);
  }
`;

export const Section = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SectionTitle = styled.p`
  font-family: 'Roboto';
  font-weight: 400;
  font-size: 20px;
  letter-spacing: 3px;
  color: rgba(224, 164, 73, 1);
`;

export const LinksList = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 26px;
  gap: 20px;
`;

export const StyledLink = styled(Link)`
  font-family: 'Roboto';
  font-weight: 400;
  font-size: 20px;
  line-height: 19px;
  color: rgba(255, 255, 255, 0.6);
  transition: color 0.3s ease;

  &:hover {
    color: rgba(224, 164, 73, 1);
  }
`;

export const FooterRights = styled.p`
  font-family: 'Roboto';
  font-weight: 400;
  font-size: 16px;
  color: rgba(255, 255, 255, 0.6);
`;
