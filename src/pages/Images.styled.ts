import styled from 'styled-components';

export const ImageGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: ${({ theme }) => theme.spacing.lg};
  margin-bottom: ${({ theme }) => theme.spacing.xxl};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: ${({ theme }) => theme.spacing.md};
  }
`;

export const ImageCard = styled.div`
  background: ${({ theme }) => theme.colors.bgLight};
  border-radius: ${({ theme }) => theme.radius.none};
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.shadow.sm};
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-4px);
    box-shadow: ${({ theme }) => theme.shadow.lg};
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 240px;
  object-fit: cover;
  display: block;
`;

export const ImageInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${({ theme }) => theme.spacing.lg} ${({ theme }) => theme.spacing.sm}
    ${({ theme }) => theme.spacing.sm};
  min-height: 60px;
`;

export const StyledImage = styled.img`
  width: 100%;
  height: 240px;
  object-fit: cover;
  display: block;
`;

export const ImageTitle = styled.h3`
  font-family: ${({ theme }) => theme.font.main};
  font-size: ${({ theme }) => theme.fontSize.lg};
  font-weight: 500;
  color: ${({ theme }) => theme.colors.textPrimary};
  margin: 0;
  line-height: 1.4;
  max-width: 219px;

  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

export const Pagination = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  margin-top: ${({ theme }) => theme.spacing.xxl};
`;

export const PageButton = styled.button<{ $active?: boolean }>`
  font-family: ${({ theme }) => theme.font.main};
  font-weight: 600;
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};

  border: 1px solid
    ${({ $active, theme }) =>
      $active ? theme.colors.primary : theme.colors.border};

  background: ${({ $active, theme }) =>
    $active ? theme.colors.primary : theme.colors.white};

  color: ${({ $active, theme }) =>
    $active ? theme.colors.white : theme.colors.black};

  border-radius: ${({ theme }) => theme.radius.sm};
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: ${({ theme }) => theme.fontSize.lg};

  min-width: 30px;
  height: 30px;

  display: flex;
  align-items: center;
  justify-content: center;

  &:hover:not(:disabled) {
    background: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.white};
    border-color: ${({ theme }) => theme.colors.primary};
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export const GalleryWrapper = styled.div`
  background: ${({ theme }) => theme.colors.white};
  padding: ${({ theme }) => theme.spacing.xl} 0;
`;

export const GalleryContainer = styled.div<{ $blur?: boolean }>`
  max-width: ${({ theme }) => theme.layout.containerMaxWidth};
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.spacing.sm};
  transition: filter 0.3s ease;

  ${({ $blur }) =>
    $blur &&
    `
    filter: blur(8px);
  `}
`;

export const ArrowButton = styled.button`
  width: 30px;
  height: 30px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  background: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.radius.sm};
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;

  position: relative;
  transition: all 0.3s ease;

  &::before {
    content: '';
    width: 8px;
    height: 8px;
    border-top: 2px solid ${({ theme }) => theme.colors.black};
    border-right: 2px solid ${({ theme }) => theme.colors.black};
    transform: rotate(45deg);
  }

  &:hover:not(:disabled) {
    background: ${({ theme }) => theme.colors.primary};
    border-color: ${({ theme }) => theme.colors.primary};

    &::before {
      border-color: ${({ theme }) => theme.colors.white};
    }
  }

  &:disabled {
    opacity: 0.4;
  }
`;

export const LoadingText = styled.p`
  text-align: center;
  font-size: ${({ theme }) => theme.fontSize.lg};
  color: ${({ theme }) => theme.colors.textSecondary};
  padding: ${({ theme }) => theme.spacing.xxxl} 0;
`;

export const SortContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
  gap: ${({ theme }) => theme.spacing.lg};
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  padding: 0 ${({ theme }) => theme.spacing.sm};
  max-width: ${({ theme }) => theme.layout.containerMaxWidth};
  margin-left: auto;
  margin-right: auto;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    justify-content: center;
  }
`;

export const SortLabel = styled.span`
  font-family: ${({ theme }) => theme.font.main};
  font-size: ${({ theme }) => theme.fontSize.md};
  color: ${({ theme }) => theme.colors.textSecondary};
`;

export const SortDropdown = styled.div`
  position: relative;
  display: inline-block;
`;

export const DropdownHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};

  background: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radius.sm};

  cursor: pointer;
  min-width: 120px;

  font-family: ${({ theme }) => theme.font.main};
  font-size: ${({ theme }) => theme.fontSize.sm};
  color: ${({ theme }) => theme.colors.textSecondary};
`;

export const DropdownArrow = styled.span<{ $isOpen: boolean }>`
  display: flex;
  transform: ${({ $isOpen }) => ($isOpen ? 'rotate(180deg)' : 'rotate(0deg)')};
  transition: transform 0.2s ease;
`;

export const DropdownList = styled.ul`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;

  margin-top: ${({ theme }) => theme.spacing.xs};
  padding: ${({ theme }) => theme.spacing.xs};

  list-style: none;

  background: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radius.sm};

  box-shadow: ${({ theme }) => theme.shadow.sm};
  z-index: 1000;
`;

export const DropdownItem = styled.li<{ $active?: boolean }>`
  padding: ${({ theme }) => theme.spacing.sm};
  font-family: ${({ theme }) => theme.font.main};
  font-size: ${({ theme }) => theme.fontSize.sm};

  border-radius: ${({ theme }) => theme.radius.sm};
  cursor: pointer;

  font-weight: ${({ $active }) => ($active ? 500 : 400)};
`;

export const ArrowIcon = styled.div`
  width: 12px;
  height: 12px;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 6px;
    height: 6px;
    border-bottom: 2px solid ${({ theme }) => theme.colors.textPrimary};
    border-right: 2px solid ${({ theme }) => theme.colors.textPrimary};
    transform: translate(-50%, -50%) rotate(45deg);
  }
`;

export const FavoriteIconWrapper = styled.div<{ $isFavorite?: boolean }>`
  cursor: pointer;
  padding: ${({ theme }) => theme.spacing.sm};
  border-radius: 50%;

  display: flex;
  align-items: center;
  justify-content: center;

  transition: all 0.3s ease;

  background: ${({ $isFavorite, theme }) =>
    $isFavorite ? theme.colors.white : 'transparent'};

  svg {
    fill: ${({ $isFavorite, theme }) =>
      $isFavorite ? theme.colors.primary : 'transparent'};
  }

  &:hover {
    transform: scale(1.1);
    background: ${({ theme }) => theme.colors.white};
  }
`;

export const FavoriteButton = styled.div<{ $isFavorite?: boolean }>`
  cursor: pointer;
  padding: ${({ theme }) => theme.spacing.sm};
  border-radius: 50%;

  display: flex;
  align-items: center;
  justify-content: center;

  transition: all 0.3s ease;

  svg {
    fill: ${({ $isFavorite, theme }) =>
      $isFavorite ? theme.colors.primary : theme.colors.white};
  }

  &:hover {
    transform: scale(1.1);
    background: ${({ theme }) => theme.colors.white};
  }

  &:active {
    transform: scale(0.95);
  }
`;
