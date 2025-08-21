import axios, { type AxiosResponse } from "axios";
import type { Movie } from "../types/movie";

// Інтерфейс для відповіді від TMDB API
interface TmdbResponse {
    results: Movie[];
    total_pages: number;
}

// Створюємо екземпляр axios з базовими налаштуваннями
const apiClient = axios.create({
    baseURL: "https://api.themoviedb.org/3",
    headers: {
        Authorization: `Bearer ${import.meta.env.VITE_TMDB_TOKEN}`,
    },
});

/**
 * Функція для пошуку фільмів за ключовим словом.
 * @param query - Рядок для пошуку.
 * @returns Проміс, що повертає масив фільмів.
 */
export const fetchMovies = async (query: string): Promise<Movie[]> => {
    const response: AxiosResponse<TmdbResponse> = await apiClient.get(
        "/search/movie",
        {
            params: {
                query,
            },
        }
    );
    return response.data.results;
};
