import 'styled-components';

import { themes } from './theme';

type AppThemeShape = (typeof themes)['dark'];

declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  export interface DefaultTheme extends AppThemeShape {}
}
