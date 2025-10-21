import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const FooterWrapper = styled.div`
  max-width: 1310px;
  margin: 0 auto;
`;

export const FooterContainer = styled.div`
  padding: 80px 0;
  @media (max-width: 1080px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const FooterContent = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;

  @media (max-width: 1080px) {
    flex-direction: column-reverse;
    align-items: flex-start;
    gap: 24px;
  }
`;

export const FooterGallery = styled.div`
  display: grid;
  gap: 25px;

  @media (max-width: 1080px) {
    order: 2;
    margin: 0 auto;
  }
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

export const SectionWrapper = styled.div`
  margin-left: 85px;
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;

  @media (max-width: 1080px) {
    flex-direction: column;
    margin: 0;
  }
`;

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;

  @media (max-width: 1080px) {
    width: 100%;
    padding-top: 12px;
  }
`;

export const SectionTitle = styled.p`
  font-family: 'Roboto';
  font-weight: 400;
  font-size: 20px;
  letter-spacing: 3px;
  color: rgba(224, 164, 73, 1);

  @media (max-width: 1080px) {
    font-size: 18px;
    cursor: pointer;
  }
`;

export const LinksList = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 26px;
  gap: 20px;

  @media (max-width: 1080px) {
    display: none;
  }
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

  @media (max-width: 1080px) {
    margin-top: 30px;
    font-size: 13px;
    text-align: center;
  }
`;
