## 🇺🇦 Українська версія

# Пошук фільмів із пагінацією від сервісу TMDB.

Цей проєкт є навчальним вебзастосунком для пошуку фільмів, створеним на **React** та **TypeScript**. Він дозволяє користувачам шукати фільми за ключовим словом, переглядати результати у вигляді сітки постерів та отримувати детальну інформацію про кожен фільм у модальному вікні. Для керування даними з сервера використовується бібліотека **TanStack Query**, а для навігації по сторінках результатів — **React Paginate**.

Застосунок взаємодіє з публічним API сервісу [The Movie Database (TMDB)](https://www.themoviedb.org/).

---

## ⚙️ Технології та інструменти

-   **React:** Сучасна бібліотека для побудови користувацьких інтерфейсів.
-   **TypeScript:** Додає статичну типізацію до JavaScript, роблячи код надійнішим.
-   **TanStack (React) Query:** Потужна бібліотека для керування станом сервера, кешування, та синхронізації даних.
-   **React Paginate:** Для створення компонентів пагінації.
-   **Vite:** Швидкий інструмент для збирання проєкту, що значно прискорює розробку.
-   **Axios:** Бібліотека для виконання HTTP-запитів до зовнішнього API.
-   **React Hot Toast:** Для відображення сповіщень (помилки, попередження).
-   **CSS Modules:** Для інкапсуляції стилів на рівні компонентів, щоб уникнути конфліктів імен.
-   **Modern Normalize:** Для нормалізації стилів у різних браузерах.

---

## 📂 Структура проєкту

Проєкт має чітку компонентну структуру, що полегшує його розуміння та масштабування.

```
src
├── components/         # Директорія з React-компонентами
│   ├── App/            # Головний компонент
│   ├── SearchBar/      # Форма пошуку
│   ├── MovieGrid/      # Сітка з фільмами
│   ├── MovieModal/     # Модальне вікно
│   ├── Loader/         # Індикатор завантаження
│   ├── ErrorMessage/   # Повідомлення про помилку
│
├── services/           # Сервіси для роботи з API
│   └── movieService.ts # Функція для HTTP-запитів
│
└── types/              # Загальні типи TypeScript
    └── movie.ts        # Інтерфейс для об'єкта фільму
```

---

## ✨ Ключові аспекти, реалізовані в проєкті

Цей проєкт став чудовою практикою для засвоєння фундаментальних концепцій сучасної веб розробки. Основну увагу було приділено наступним моментам:

1.  **Робота з API:**

    -   Надсилання асинхронних запитів за допомогою `async/await`.
    -   Обробка успішних відповідей та помилок.
    -   Використання змінних середовища (`.env`) для безпечного зберігання API-токенів.

2.  **Компонентний підхід:**

    -   Розбиття інтерфейсу на невеликі, перевикористовувані компоненти.
    -   Передача даних та функцій між компонентами через пропси.

3.  **Управління станом сервера:**

    -   Використання **TanStack Query** для декларативного керування даними. Це значно спрощує логіку завантаження, обробки помилок та кешування, замінюючи складні ланцюжки `useState` та `useEffect`.

4.  **Реалізація пагінації:**

    -   Інтеграція бібліотеки `react-paginate` для зручної навігації між сторінками результатів пошуку.

5.  **Строга типізація з TypeScript:**

    -   Типізація пропсів компонентів, стану, та даних, що повертаються з API. Це допомогло уникнути багатьох помилок ще на етапі розробки.

6.  **Реалізація модального вікна:**

    -   Використання `createPortal` для рендерингу модального вікна поза основним DOM-деревом.
    -   Додавання функціоналу для закриття вікна по кліку на бекдроп та натисканню клавіші `Escape`.

Це дозволило не просто створити робочий застосунок, а й глибоко зрозуміти ключові механізми, що лежать в основі сучасних React-застосунків.

---

## 🇬🇧 English Version

# Search for movies with pagination from the TMDB service.

This project is an educational web application for searching movies, built with **React** and **TypeScript**. It allows users to search for movies by keyword, view results as a grid of posters, and get detailed information about each movie in a modal window. It uses **TanStack Query** for server state management and **React Paginate** for navigating through paged results.

The application interacts with the public API of [The Movie Database (TMDB)](https://www.themoviedb.org/).

---

## ⚙️ Technologies and Tools

-   **React:** A modern library for building user interfaces.
-   **TypeScript:** Adds static typing to JavaScript, making the code more reliable.
-   **TanStack (React) Query:** A powerful library for server state management, caching, and data synchronization.
-   **React Paginate:** For creating pagination components.
-   **Vite:** A fast build tool that significantly speeds up development.
-   **Axios:** A library for making HTTP requests to external APIs.
-   **React Hot Toast:** For displaying notifications (errors, warnings).
-   **CSS Modules:** For encapsulating styles at the component level to avoid class name conflicts.
-   **Modern Normalize:** For normalizing styles across different browsers.

---

## 📂 Project Structure

The project has a clear component-based structure, which makes it easy to understand and scale.

```
src
├── components/         # Directory with React components
│   ├── App/            # Main application component
│   ├── SearchBar/      # Search form
│   ├── MovieGrid/      # Grid of movies
│   ├── MovieModal/     # Modal window
│   ├── Loader/         # Loading indicator
│   ├── ErrorMessage/   # Error message display
│
├── services/           # Services for API interaction
│   └── movieService.ts # Function for HTTP requests
│
└── types/              # Shared TypeScript types
    └── movie.ts        # Interface for the movie object
```

---

## ✨ Key Implemented Aspects

This project served as excellent practice for mastering fundamental concepts of modern web development. The main focus was on the following areas:

1.  **Working with APIs:**

    -   Making asynchronous requests using `async/await`.
    -   Handling successful responses and errors.
    -   Using environment variables (`.env`) to securely store API tokens.

2.  **Component-Based Approach:**

    -   Breaking down the UI into small, reusable components.
    -   Passing data and functions between components via props.

3.  **Server State Management:**

    -   Leveraging **TanStack Query** for declarative data management. This greatly simplifies loading, error handling, and caching logic, replacing complex `useState` and `useEffect` chains.

4.  **Pagination Implementation:**

    -   Integrating the `react-paginate` library to provide easy navigation through pages of movie search results.

5.  **Strict Typing with TypeScript:**

    -   Typing component props, state, and API response data. This helped prevent many bugs during the development stage.

6.  **Implementing a Modal Window:**

    -   Using `createPortal` to render the modal outside the main DOM tree.
    -   Adding functionality to close the modal by clicking on the backdrop or pressing the `Escape` key.

This approach allowed not just to create a functional application, but also to gain a deep understanding of the key mechanisms underlying modern React applications.
