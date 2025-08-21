// Компонент App - головний компонент програми.
// Основне:
// - Використовує TanStack Query для керування запитами (useQuery).
// - Керує станом пошукового запиту (query) та поточної сторінки (page).
// - Відображає SearchBar, Loader, ErrorMessage, MovieGrid, MovieModal та пагінацію.
// - handleSearch: оновлює query, що автоматично викликає новий запит через useQuery.
// - handleSelectMovie / handleCloseModal: керування відкриттям модального вікна.
import { useState, useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useQuery, keepPreviousData } from "@tanstack/react-query";
import ReactPaginate from "react-paginate";
import { fetchMovies } from "../../services/movieService";
import type { Movie } from "../../types/movie";
import SearchBar from "../SearchBar/SearchBar";
import MovieGrid from "../MovieGrid/MovieGrid";
import Loader from "../Loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import MovieModal from "../MovieModal/MovieModal";
import styles from "./App.module.css";

const App = () => {
    const [query, setQuery] = useState<string>("");
    const [page, setPage] = useState<number>(1);
    const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);

    // Використовуємо useQuery для отримання і кешування даних.
    // Запит буде автоматично виконуватись при зміні query або page.
    const {
        data,
        isError,
        isFetching, // Додатковий індикатор для повторних запитів
    } = useQuery({
        queryKey: ["movies", query, page], // Ключ кешування, залежить від query та page
        queryFn: () => fetchMovies(query, page),
        enabled: !!query, // Запит виконується тільки якщо query не пустий
        placeholderData: keepPreviousData, // Зберігаємо попередні дані при переході між сторінками
    });

    // Обробка помилок запиту та виведення сповіщення
    useEffect(() => {
        if (isError) {
            toast.error("There was an error, please try again...");
        }
        // Повідомлення, якщо за запитом нічого не знайдено
        if (data && data.movies.length === 0) {
            toast.error("No movies found for your request.");
        }
    }, [isError, data]);

    const handleSearch = (newQuery: string): void => {
        // Скидаємо сторінку на першу при новому пошуку
        setQuery(newQuery);
        setPage(1);
    };

    const handleSelectMovie = (movie: Movie): void => {
        setSelectedMovie(movie);
    };

    const handleCloseModal = (): void => {
        setSelectedMovie(null);
    };

    const movies = data?.movies ?? [];
    const totalPages = data?.totalPages ?? 0;

    return (
        <div className={styles.app}>
            <Toaster position="top-center" />
            <SearchBar onSearch={handleSearch} />

            {/* Рендеримо пагінацію, якщо сторінок більше однієї */}
            {totalPages > 1 && (
                <ReactPaginate
                    pageCount={totalPages}
                    pageRangeDisplayed={5}
                    marginPagesDisplayed={1}
                    onPageChange={({ selected }) => setPage(selected + 1)}
                    forcePage={page - 1}
                    containerClassName={styles.pagination}
                    activeClassName={styles.active}
                    nextLabel="→"
                    previousLabel="←"
                />
            )}

            {/* Індикатор завантаження відображається лише при першому запиті,
            а isFetching - при кожному наступному. */}
            {isFetching && <Loader />}
            {isError && !isFetching && <ErrorMessage />}

            {/* Відображаємо сітку фільмів, якщо є дані */}
            {movies.length > 0 && (
                <MovieGrid movies={movies} onSelect={handleSelectMovie} />
            )}

            {selectedMovie && (
                <MovieModal movie={selectedMovie} onClose={handleCloseModal} />
            )}
        </div>
    );
};

export default App;
