import styled from 'styled-components';

export const SortContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
  gap: 16px;
  margin-bottom: 30px;
  padding: 0 15px;
  max-width: 1310px;
  margin-left: auto;
  margin-right: auto;
`;

export const SortLabel = styled.span`
  font-family: 'Lexend Deca';
  font-size: 16px;
  color: #666;
  font-weight: 400;
`;

export const SortDropdown = styled.div`
  position: relative;
  display: inline-block;
  color: #c4c4c4;
`;

export const DropdownHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  background: #ffffff;
  border: 1px solid #c4c4c4;
  border-radius: 6px;
  cursor: pointer;
  font-family: 'Lexend Deca';
  font-size: 14px;
  color: #c4c4c4;
  min-width: 120px;
  justify-content: space-between;
  transition: all 0.2s ease;
`;

export const DropdownArrow = styled.span<{ $isOpen: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.2s ease;
  transform: ${(props) => (props.$isOpen ? 'rotate(180deg)' : 'rotate(0deg)')};
`;

export const DropdownList = styled.ul`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background: #fff;
  border: 1px solid #c4c4c4;
  border-radius: 1px;
  margin-top: 4px;
  padding: 4px;
  list-style: none;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  z-index: 1000;
`;

export const DropdownItem = styled.li<{ $active?: boolean }>`
  padding: 8px 12px;
  font-family: 'Lexend Deca';
  font-size: 14px;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.2s ease;
  font-weight: ${(props) => (props.$active ? '500' : '400')};
`;
