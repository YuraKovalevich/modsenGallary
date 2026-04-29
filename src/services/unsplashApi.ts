import { SORT_OPTIONS, type SortOption } from '@/constants/sort';

const UNSPLASH_API_URL = 'https://api.unsplash.com';

export interface UnsplashImage {
  id: string;
  urls: {
    small: string;
    regular: string;
    full: string;
  };
  altDescription: string | null;
  description?: string | null;
  user: {
    name: string;
    username: string;
  };
  likes: number;
}

export interface UnsplashCategoryImage {
  id: string;
  urls: {
    regular?: string;
    small?: string;
  };
  altDescription?: string | null;
}

export interface SearchResponse {
  results: UnsplashImage[];
  total: number;
  totalPages: number;
}

interface RawUnsplashImage {
  id?: unknown;
  urls?: {
    small?: unknown;
    regular?: unknown;
    full?: unknown;
  };
  alt_description?: unknown;
  description?: unknown;
  user?: {
    name?: unknown;
    username?: unknown;
  };
  likes?: unknown;
}

interface RawSearchResponse {
  results?: unknown;
  total?: unknown;
  total_pages?: unknown;
}

const normalizeImage = (image: RawUnsplashImage): UnsplashImage => ({
  id: typeof image.id === 'string' ? image.id : '',
  urls: {
    small: typeof image.urls?.small === 'string' ? image.urls.small : '',
    regular: typeof image.urls?.regular === 'string' ? image.urls.regular : '',
    full: typeof image.urls?.full === 'string' ? image.urls.full : '',
  },
  altDescription:
    typeof image.alt_description === 'string' ? image.alt_description : null,
  description: typeof image.description === 'string' ? image.description : null,
  user: {
    name: typeof image.user?.name === 'string' ? image.user.name : '',
    username:
      typeof image.user?.username === 'string' ? image.user.username : '',
  },
  likes: typeof image.likes === 'number' ? image.likes : 0,
});

const normalizeCategoryImage = (
  image: RawUnsplashImage
): UnsplashCategoryImage => ({
  id: typeof image.id === 'string' ? image.id : '',
  urls: {
    regular:
      typeof image.urls?.regular === 'string' ? image.urls.regular : undefined,
    small: typeof image.urls?.small === 'string' ? image.urls.small : undefined,
  },
  altDescription:
    typeof image.alt_description === 'string' ? image.alt_description : null,
});

const KEY =
  (import.meta.env.VITE_UNSPLASH_ACCESS_KEY as string) ||
  (import.meta.env.VITE_UNSPLASH_KEY as string) ||
  '';

if (!KEY) {
  console.warn('error');
}

async function fetchWithErrorHandling(url: string, signal?: AbortSignal) {
  const headers: Record<string, string> = {};
  if (KEY) headers.Authorization = `Client-ID ${KEY}`;

  const res = await fetch(url, { headers, signal });
  if (!res.ok) {
    const text = await res.text().catch(() => '');
    throw new Error(`API Error: ${res.status} ${res.statusText} ${text}`);
  }
  return res.json();
}

export async function getRandomImages(
  pageOrPerPage: number = 12,
  maybePerPage?: number,
  signal?: AbortSignal
): Promise<UnsplashImage[]> {
  let perPage = 12;
  if (maybePerPage === undefined) {
    perPage = pageOrPerPage;
  } else {
    perPage = maybePerPage;
  }

  try {
    const data = await fetchWithErrorHandling(
      `${UNSPLASH_API_URL}/photos/random?count=${perPage}`,
      signal
    );
    return Array.isArray(data)
      ? data.map((image) => normalizeImage(image as RawUnsplashImage))
      : [];
  } catch (error) {
    console.error('Error fetching random images:', error);
    return [];
  }
}

export async function searchImages(
  query: string,
  page: number = 1,
  perPage: number = 12,
  sort: SortOption = SORT_OPTIONS.relevant,
  signal?: AbortSignal
): Promise<SearchResponse> {
  try {
    const encodedQuery = encodeURIComponent(query);
    const data = (await fetchWithErrorHandling(
      `${UNSPLASH_API_URL}/search/photos?query=${encodedQuery}&page=${page}&per_page=${perPage}&order_by=${sort}`,
      signal
    )) as RawSearchResponse;

    return {
      results: Array.isArray(data.results)
        ? data.results.map((image) => normalizeImage(image as RawUnsplashImage))
        : [],
      total: typeof data.total === 'number' ? data.total : 0,
      totalPages: typeof data.total_pages === 'number' ? data.total_pages : 0,
    };
  } catch (error) {
    console.error('Error searching images:', error);
    return { results: [], total: 0, totalPages: 0 };
  }
}

export async function getCategoryImage(
  category: string,
  signal?: AbortSignal
): Promise<UnsplashCategoryImage | null> {
  try {
    const encodedCategory = encodeURIComponent(category);
    const data = (await fetchWithErrorHandling(
      `${UNSPLASH_API_URL}/search/photos?query=${encodedCategory}&per_page=1`,
      signal
    )) as RawSearchResponse;

    const firstImage = Array.isArray(data.results)
      ? (data.results[0] as RawUnsplashImage | undefined)
      : undefined;

    return firstImage ? normalizeCategoryImage(firstImage) : null;
  } catch (error) {
    console.error(`Error fetching category image for "${category}":`, error);
    return null;
  }
}

export async function getFeaturedImages(
  page: number = 1,
  perPage: number = 12,
  signal?: AbortSignal
): Promise<UnsplashImage[]> {
  try {
    const data = await fetchWithErrorHandling(
      `${UNSPLASH_API_URL}/photos?page=${page}&per_page=${perPage}&order_by=popular`,
      signal
    );
    return Array.isArray(data)
      ? data.map((image) => normalizeImage(image as RawUnsplashImage))
      : [];
  } catch (error) {
    console.error('Error fetching featured images:', error);
    return [];
  }
}
