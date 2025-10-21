import React, { useState } from 'react';
import {
  ArrowIcon,
  DropdownArrow,
  DropdownHeader,
  DropdownItem,
  DropdownList,
  SortContainer,
  SortDropdown,
  SortLabel,
} from '../../pages/Images.styled';

interface Props {
  sortBy: 'relevant' | 'latest';
  onSortChange: (sort: 'relevant' | 'latest') => void;
}

const SortDropdownComponent: React.FC<Props> = ({ sortBy, onSortChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const getLabel = () => (sortBy === 'relevant' ? 'Relevant' : 'Latest');

  return (
    <SortContainer>
      <SortLabel>Sort by</SortLabel>
      <SortDropdown>
        <DropdownHeader onClick={() => setIsOpen(!isOpen)}>
          {getLabel()}
          <DropdownArrow $isOpen={isOpen}>
            <ArrowIcon />
          </DropdownArrow>
        </DropdownHeader>
        {isOpen && (
          <DropdownList>
            <DropdownItem
              $active={sortBy === 'relevant'}
              onClick={() => {
                onSortChange('relevant');
                setIsOpen(false);
              }}
            >
              Relevant
            </DropdownItem>
            <DropdownItem
              $active={sortBy === 'latest'}
              onClick={() => {
                onSortChange('latest');
                setIsOpen(false);
              }}
            >
              Latest
            </DropdownItem>
          </DropdownList>
        )}
      </SortDropdown>
    </SortContainer>
  );
};

export default SortDropdownComponent;
