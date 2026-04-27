import { ArrowButton, PageButton, Pagination } from '@pages/Images.styled.ts';

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

  const handlePageButtonClick = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    const page = Number(event.currentTarget.dataset.page ?? 1);
    onPageChange(page);
  };

  const handleNextPageClick = () => {
    onPageChange(currentPage + 1);
  };

  return (
    <Pagination>
      {[...Array(totalPages)].map((_, idx) => {
        const page = idx + 1;
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

export default PaginationComponent;
