const UNSPLASH_API_URL = 'https://api.unsplash.com';

export interface UnsplashImage {
  id: string;
  urls: {
    small: string;
    regular: string;
    full: string;
  };
  alt_description: string | null;
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
  alt_description?: string | null;
}

export interface SearchResponse {
  results: UnsplashImage[];
  total: number;
  total_pages: number;
}

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
  a: number = 12,
  b?: number,
  signal?: AbortSignal
): Promise<UnsplashImage[]> {
  let perPage = 12;
  if (b === undefined) {
    perPage = a;
  } else {
    perPage = b;
  }

  try {
    const data = await fetchWithErrorHandling(
      `${UNSPLASH_API_URL}/photos/random?count=${perPage}`,
      signal
    );
    return Array.isArray(data) ? data : [];
  } catch (error) {
    console.error('Error fetching random images:', error);
    return [];
  }
}

export async function searchImages(
  query: string,
  page: number = 1,
  perPage: number = 12,
  sort: 'relevant' | 'latest' = 'relevant',
  signal?: AbortSignal
): Promise<SearchResponse> {
  try {
    const encodedQuery = encodeURIComponent(query);
    const data = await fetchWithErrorHandling(
      `${UNSPLASH_API_URL}/search/photos?query=${encodedQuery}&page=${page}&per_page=${perPage}&order_by=${sort}`,
      signal
    );

    return {
      results: Array.isArray(data.results) ? data.results : [],
      total: typeof data.total === 'number' ? data.total : 0,
      total_pages: typeof data.total_pages === 'number' ? data.total_pages : 0,
    };
  } catch (error) {
    console.error('Error searching images:', error);
    return { results: [], total: 0, total_pages: 0 };
  }
}

export async function getCategoryImage(
  category: string,
  signal?: AbortSignal
): Promise<UnsplashCategoryImage | null> {
  try {
    const encodedCategory = encodeURIComponent(category);
    const data = await fetchWithErrorHandling(
      `${UNSPLASH_API_URL}/search/photos?query=${encodedCategory}&per_page=1`,
      signal
    );
    return data.results?.[0] ?? null;
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
    return Array.isArray(data) ? data : [];
  } catch (error) {
    console.error('Error fetching featured images:', error);
    return [];
  }
}
