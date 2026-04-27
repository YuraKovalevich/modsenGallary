import { useMemo, useState } from 'react';

import { SORT_OPTIONS, type SortOption } from '@/constants/sort';
import {
  ArrowIcon,
  DropdownArrow,
  DropdownHeader,
  DropdownItem,
  DropdownList,
  SortContainer,
  SortDropdown as SortDropdownWrapper,
  SortLabel,
} from '@/pages/Images.styled';

interface Props {
  sortBy: SortOption;
  onSortChange: (sort: SortOption) => void;
}

const sortLabels: Record<SortOption, string> = {
  [SORT_OPTIONS.relevant]: 'Relevant',
  [SORT_OPTIONS.latest]: 'Latest',
};

const SortDropdownComponent: React.FC<Props> = ({ sortBy, onSortChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  const selectedLabel = useMemo(() => sortLabels[sortBy], [sortBy]);

  const toggleDropdown = () => {
    setIsOpen((prevState) => !prevState);
  };

  const handleSelectSort = (sort: SortOption) => {
    onSortChange(sort);
    setIsOpen(false);
  };

  const handleSelectRelevant = () => {
    handleSelectSort(SORT_OPTIONS.relevant);
  };

  const handleSelectLatest = () => {
    handleSelectSort(SORT_OPTIONS.latest);
  };

  return (
    <SortContainer>
      <SortLabel>Sort by</SortLabel>
      <SortDropdownWrapper>
        <DropdownHeader onClick={toggleDropdown}>
          {selectedLabel}
          <DropdownArrow $isOpen={isOpen}>
            <ArrowIcon />
          </DropdownArrow>
        </DropdownHeader>
        {isOpen && (
          <DropdownList>
            <DropdownItem
              $active={sortBy === SORT_OPTIONS.relevant}
              onClick={handleSelectRelevant}
            >
              {sortLabels[SORT_OPTIONS.relevant]}
            </DropdownItem>
            <DropdownItem
              $active={sortBy === SORT_OPTIONS.latest}
              onClick={handleSelectLatest}
            >
              {sortLabels[SORT_OPTIONS.latest]}
            </DropdownItem>
          </DropdownList>
        )}
      </SortDropdownWrapper>
    </SortContainer>
  );
};

export default SortDropdownComponent;
