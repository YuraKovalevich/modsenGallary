import { ArrowButton, PageButton, Pagination } from '@pages/Images.styled.ts';
import { memo, useCallback, useMemo } from 'react';

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
  const pages = useMemo(
    () =>
      totalPages > 1
        ? Array.from({ length: totalPages }, (_, idx) => idx + 1)
        : [],
    [totalPages]
  );

  const handlePageButtonClick = useCallback(
    (event: React.MouseEvent<HTMLButtonElement>) => {
      const page = Number(event.currentTarget.dataset.page ?? 1);
      onPageChange(page);
    },
    [onPageChange]
  );

  const handleNextPageClick = useCallback(() => {
    onPageChange(Math.min(currentPage + 1, totalPages));
  }, [currentPage, onPageChange, totalPages]);

  if (totalPages <= 1) return null;

  return (
    <Pagination>
      {pages.map((page) => {
        return (
          <PageButton
            key={page}
            data-page={page}
            $active={currentPage === page}
            onClick={handlePageButtonClick}
          >
            {page}
          </PageButton>
        );
      })}
      <ArrowButton
        disabled={currentPage === totalPages}
        onClick={handleNextPageClick}
      />
    </Pagination>
  );
};

export default memo(PaginationComponent);
