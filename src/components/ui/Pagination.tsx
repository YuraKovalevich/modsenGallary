import React from 'react';

import { ArrowButton, PageButton, Pagination } from '../../pages/Images.styled';

interface Props {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const PaginationComponent: React.FC<Props> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  if (totalPages <= 1) return null;

  return (
    <Pagination>
      {[...Array(totalPages)].map((_, idx) => {
        const page = idx + 1;
        return (
          <PageButton
            key={page}
            $active={currentPage === page}
            onClick={() => onPageChange(page)}
          >
            {page}
          </PageButton>
        );
      })}
      <ArrowButton
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
      />
    </Pagination>
  );
};

export default PaginationComponent;
