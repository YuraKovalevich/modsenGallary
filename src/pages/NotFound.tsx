import React from 'react';
import { GalleryWrapper } from './Images.styled';
import {
  NotFoundContainer,
  NotFoundNumbers,
  NotFoundSubstr,
  NotFoundText,
} from './NotFound.styled';

const NotFound = () => {
  return (
    <GalleryWrapper>
      <NotFoundContainer>
        <NotFoundNumbers>404</NotFoundNumbers>
        <NotFoundSubstr>NOT FOUND</NotFoundSubstr>
        <NotFoundText>
          The Page Was <span>Not Found</span>, Please Return To The Main Page.
        </NotFoundText>
      </NotFoundContainer>
    </GalleryWrapper>
  );
};

export default NotFound;
