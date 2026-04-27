export const SORT_OPTIONS = {
  relevant: 'relevant',
  latest: 'latest',
} as const;

export type SortOption = (typeof SORT_OPTIONS)[keyof typeof SORT_OPTIONS];
