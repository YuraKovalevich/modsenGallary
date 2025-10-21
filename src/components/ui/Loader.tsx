import React from 'react';
import { LoaderContainer, Spinner } from './Loader.styled';

const Loader: React.FC = () => {
  return (
    <LoaderContainer>
      <Spinner />
    </LoaderContainer>
  );
};

export default Loader;
