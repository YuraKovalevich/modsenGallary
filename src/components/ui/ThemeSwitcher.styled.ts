import styled from 'styled-components';

export const ThemeSwitcherContainer = styled.div`
  position: relative;
  z-index: 30;
`;

export const ThemeTriggerButton = styled.button`
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radius.md};
  background: rgba(255, 255, 255, 0.08);
  color: ${({ theme }) => theme.colors.textWhite};
  min-width: 120px;
  height: 40px;
  padding: 0 ${({ theme }) => theme.spacing.md};
  font-family: ${({ theme }) => theme.font.secondary};
  font-size: ${({ theme }) => theme.fontSize.sm};
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing.sm};
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    border-color: ${({ theme }) => theme.colors.accent};
    transform: translateY(-1px);
  }
`;

export const ThemeTriggerLabel = styled.span`
  white-space: nowrap;
`;

export const ThemeTriggerDot = styled.span<{ $color: string }>`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: ${({ $color }) => $color};
  box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.16);
`;

export const ThemePopover = styled.div`
  position: absolute;
  right: 0;
  top: calc(100% + 10px);
  min-width: 240px;
  background: ${({ theme }) => theme.colors.bgDark};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radius.md};
  box-shadow: ${({ theme }) => theme.shadow.md};
  padding: ${({ theme }) => theme.spacing.md};
`;

export const ModeButtons = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: ${({ theme }) => theme.spacing.sm};
`;

export const ModeButton = styled.button<{ $isActive: boolean }>`
  border: 1px solid
    ${({ $isActive, theme }) =>
      $isActive ? theme.colors.accent : theme.colors.border};
  background: ${({ $isActive, theme }) =>
    $isActive ? theme.colors.accent : 'transparent'};
  color: ${({ $isActive, theme }) =>
    $isActive ? theme.colors.black : theme.colors.textWhite};
  border-radius: ${({ theme }) => theme.radius.sm};
  padding: ${({ theme }) => `${theme.spacing.xs} ${theme.spacing.sm}`};
  font-size: ${({ theme }) => theme.fontSize.sm};
  cursor: pointer;
`;

export const PaletteTitle = styled.p`
  margin: ${({ theme }) => theme.spacing.md} 0
    ${({ theme }) => theme.spacing.sm};
  font-size: ${({ theme }) => theme.fontSize.sm};
  color: ${({ theme }) => theme.colors.textLight};
`;

export const PaletteGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: ${({ theme }) => theme.spacing.sm};
`;

export const PaletteButton = styled.button<{
  $isActive: boolean;
  $swatch: string;
}>`
  height: 34px;
  border-radius: ${({ theme }) => theme.radius.sm};
  border: 2px solid
    ${({ $isActive, theme }) =>
      $isActive ? theme.colors.white : 'transparent'};
  background: ${({ $swatch }) => $swatch};
  cursor: pointer;
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.04);
  }
`;
