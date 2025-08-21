import axios from "axios";
import type { Movie, TmdbResponse } from "../types/movie";

// Створюємо екземпляр axios з базовими налаштуваннями
const apiClient = axios.create({
    baseURL: "https://api.themoviedb.org/3",
    headers: {
        Authorization: `Bearer ${import.meta.env.VITE_TMDB_TOKEN}`,
    },
});

/**
 * Функція для пошуку фільмів за ключовим словом і сторінкою.
 * @param query - Рядок для пошуку.
 * @param page - Номер сторінки для пагінації.
 * @returns Проміс, що повертає об'єкт з масивом фільмів і загальною кількістю сторінок.
 */
export const fetchMovies = async (
    query: string,
    page: number
): Promise<{ movies: Movie[]; totalPages: number }> => {
    const response = await apiClient.get<TmdbResponse>("/search/movie", {
        params: { query, page },
    });

    return {
        movies: response.data.results,
        totalPages: response.data.total_pages,
    };
};
