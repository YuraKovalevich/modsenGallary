import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const FooterWrapper = styled.div`
  width: 100%;
  background: ${({ theme }) => theme.colors.headerFooterBg};
  border-top: 1px solid ${({ theme }) => theme.colors.headerFooterBorder};
`;

export const FooterContainer = styled.div`
  max-width: ${({ theme }) => theme.layout.containerMaxWidth};
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing.xxl}
    ${({ theme }) => theme.spacing.md};

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const FooterContent = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: ${({ theme }) => theme.spacing.xl};

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    flex-direction: column-reverse;
    align-items: flex-start;
    gap: ${({ theme }) => theme.spacing.lg};
  }
`;

export const FooterGallery = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing.lg};

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    order: 2;
    margin: 0 auto;
  }
`;

export const GalleryText = styled.p`
  max-width: 248px;
  font-family: ${({ theme }) => theme.font.secondary};
  font-weight: 400;
  font-size: ${({ theme }) => theme.fontSize.sm};
  line-height: 22px;
  color: ${({ theme }) => theme.colors.textLight};
`;

export const GalleryShare = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.sm};
`;

export const SocialLink = styled(Link)`
  display: flex;

  transition: all 0.3s ease;

  svg {
    stroke: ${({ theme }) => theme.colors.textLight};
    transition: all 0.3s ease;
  }

  &:hover svg {
    fill: ${({ theme }) => theme.colors.accent};
    stroke: ${({ theme }) => theme.colors.white};
  }
  &:hover path {
    fill: ${({ theme }) => theme.colors.white};
  }
`;

export const SectionWrapper = styled.div`
  margin-left: 85px;
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    flex-direction: column;
    margin-left: 0;
  }
`;

export const Section = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    width: 100%;
    padding-top: ${({ theme }) => theme.spacing.sm};
  }
`;

export const SectionTitle = styled.p`
  font-family: ${({ theme }) => theme.font.secondary};
  font-weight: 400;
  font-size: ${({ theme }) => theme.fontSize.lg};
  letter-spacing: 3px;
  color: ${({ theme }) => theme.colors.accent};

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    font-size: ${({ theme }) => theme.fontSize.md};
    cursor: pointer;
  }
`;

export const LinksList = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: ${({ theme }) => theme.spacing.lg};
  gap: ${({ theme }) => theme.spacing.md};

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    display: none;
  }
`;

export const StyledLink = styled(Link)`
  font-family: ${({ theme }) => theme.font.secondary};
  font-weight: 400;
  font-size: ${({ theme }) => theme.fontSize.lg};
  color: ${({ theme }) => theme.colors.textLight};
  transition: color 0.3s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.accent};
  }
`;

export const FooterRights = styled.p`
  font-family: ${({ theme }) => theme.font.secondary};
  font-weight: 400;
  font-size: ${({ theme }) => theme.fontSize.md};
  color: ${({ theme }) => theme.colors.textLight};

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    margin-top: ${({ theme }) => theme.spacing.xl};
    font-size: ${({ theme }) => theme.fontSize.sm};
    text-align: center;
  }
`;
