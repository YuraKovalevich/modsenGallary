import Category from '@assets/CategoryLogo';
import Facebook from '@assets/Facebook';
import Favourites from '@assets/FavoutitesLogo';
import Github from '@assets/Github';
import Images from '@assets/ImagesLogo';
import Inst from '@assets/Inst';
import Twitter from '@assets/Twitter';
import {
  CATEGORY_ROUTE,
  FAVOURITES_ROUTE,
  IMAGES_ROUTE,
} from '@constants/linkRoutes.ts';

export const menuItems = [
  { label: 'Category', path: CATEGORY_ROUTE, Icon: Category },
  { label: 'Images', path: IMAGES_ROUTE, Icon: Images },
  { label: 'Favourites', path: FAVOURITES_ROUTE, Icon: Favourites },
] as const;

export const socialLinks = [
  { key: 'twitter', Icon: Twitter },
  { key: 'facebook', Icon: Facebook },
  { key: 'instagram', Icon: Inst },
  { key: 'github', Icon: Github },
] as const;

export const footerSections = [
  {
    title: 'COMPANY',
    links: ['About', 'Features', 'Works', 'Career'],
  },
  {
    title: 'HELP',
    links: [
      'Customer Support',
      'Delivery Details',
      'Terms & Conditions',
      'Privacy Policy',
    ],
  },
  {
    title: 'FAQ',
    links: ['Account', 'Manage Deliveries', 'Orders', 'Payments'],
  },
  {
    title: 'RESOURCES',
    links: [
      'Free eBooks',
      'Development Tutorial',
      'How to - Blog',
      'Youtube Playlist',
    ],
  },
] as const;
