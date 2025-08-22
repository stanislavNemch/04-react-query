// Інтерфейс окремого фільму, що приходить у масиві `results`.
// ТУТ зберігаємо тільки "дані домену" (Movie), а не форми відповіді API.
export interface Movie {
    id: number;
    poster_path: string;
    backdrop_path: string;
    title: string;
    overview: string;
    release_date: string;
    vote_average: number;
}
