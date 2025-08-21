export interface Movie {
    id: number;
    poster_path: string;
    backdrop_path: string;
    title: string;
    overview: string;
    release_date: string;
    vote_average: number;
}

// Інтерфейс для відповіді від TMDB API, що включає пагінацію.
export interface TmdbResponse {
    results: Movie[];
    total_pages: number;
}
