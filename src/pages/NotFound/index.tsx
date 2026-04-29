import { GalleryWrapper } from '../Images/styles';
import {
  NotFoundContainer,
  NotFoundNumbers,
  NotFoundSubstr,
  NotFoundText,
} from './styles';

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
