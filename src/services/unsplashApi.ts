const UNSPLASH_API_URL = 'https://api.unsplash.com';

export interface UnsplashImage {
  id: string;
  urls: {
    small: string;
    regular: string;
    full: string;
  };
  alt_description: string;
  description?: string;
  user: {
    name: string;
    username: string;
  };
  likes: number;
}

export interface UnsplashCategoryImage {
  id: string;
  urls: { small: string };
  alt_description: string;
}

export async function getRandomImages(
  page: number = 1,
  perPage: number = 12
): Promise<UnsplashImage[]> {
  try {
    const response = await fetch(
      `${UNSPLASH_API_URL}/photos/random?count=${perPage}&page=${page}`,
      {
        headers: {
          Authorization: `Client-ID ${import.meta.env.VITE_UNSPLASH_ACCESS_KEY}`,
        },
      }
    );

    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching random images:', error);
    return [];
  }
}

export async function searchImages(
  query: string,
  page: number = 1,
  perPage: number = 12
): Promise<{ results: UnsplashImage[]; total: number }> {
  try {
    const response = await fetch(
      `${UNSPLASH_API_URL}/search/photos?query=${query}&page=${page}&per_page=${perPage}`,
      {
        headers: {
          Authorization: `Client-ID ${import.meta.env.VITE_UNSPLASH_ACCESS_KEY}`,
        },
      }
    );

    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }

    const data = await response.json();
    return {
      results: data.results,
      total: data.total,
    };
  } catch (error) {
    console.error('Error searching images:', error);
    return { results: [], total: 0 };
  }
}

export async function getCategoryImage(
  category: string
): Promise<UnsplashCategoryImage | null> {
  const response = await fetch(
    `${UNSPLASH_API_URL}/search/photos?query=${category}&per_page=1`,
    {
      headers: {
        Authorization: `Client-ID ${import.meta.env.VITE_UNSPLASH_ACCESS_KEY}`,
      },
    }
  );

  if (!response.ok) {
    console.error(
      `Ошибка при загрузке категории "${category}": ${response.status}`
    );
    return null;
  }

  const data = await response.json();
  return data.results[0] || null;
}
