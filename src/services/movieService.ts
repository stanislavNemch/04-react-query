import axios from "axios";
import type { Movie } from "../types/movie";

// Локальний тип відповіді від TMDB для цього конкретного запиту.
// Зручно тримати його тут, бо це "форма відповіді API", прив'язана до сервісу.
// Повертаємо всю відповідь як є (page, results, total_pages, total_results),
// щоб не втратити жодних полів.
export interface TmdbResponse {
    page: number;
    results: Movie[];
    total_pages: number;
    total_results: number;
}

// Створюємо екземпляр axios з базовими налаштуваннями
const apiClient = axios.create({
    baseURL: "https://api.themoviedb.org/3",
    headers: {
        Authorization: `Bearer ${import.meta.env.VITE_TMDB_TOKEN}`,
    },
});

/**
 * Пошук фільмів за ключовим словом (query) і сторінкою (page).
 * Повертаємо САМУ структуру відповіді API без мапінгу, щоб зберегти всі поля.
 */
export const fetchMovies = async (
    query: string,
    page: number
): Promise<TmdbResponse> => {
    // передаємо дженерик прямо у get<TmdbResponse>() для типобезпеки.
    const response = await apiClient.get<TmdbResponse>("/search/movie", {
        params: { query, page },
    });
    // Повертаємо дані API як є, без перетворень.
    return response.data;
};
