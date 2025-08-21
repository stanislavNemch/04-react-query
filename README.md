## 🇺🇦 Українська версія

# Пошук фільмів за пагінацією з сервісу TMDB.

Цей проєкт є навчальним вебзастосунком для пошуку фільмів, створеним на **React** та **TypeScript**. Він дозволяє користувачам шукати фільми за ключовим словом, переглядати результати у вигляді сітки постерів та отримувати детальну інформацію про кожен фільм у модальному вікні.

Застосунок взаємодіє з публічним API сервісу [The Movie Database (TMDB)](https://www.themoviedb.org/).

---

## ⚙️ Технології та інструменти

-   **React:** Сучасна бібліотека для побудови користувацьких інтерфейсів.
-   **TypeScript:** Додає статичну типізацію до JavaScript, роблячи код надійнішим.
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

## ✨ Ключові аспекти, на яких фокусувався розробник

Цей проєкт став чудовою практикою для засвоєння фундаментальних концепцій сучасної веб розробки. Основну увагу було приділено наступним моментам:

1.  **Робота з API:**

    -   Надсилання асинхронних запитів за допомогою `async/await`.
    -   Обробка успішних відповідей та помилок (`try...catch`).
    -   Використання змінних середовища (`.env`) для безпечного зберігання API-токенів.

2.  **Компонентний підхід:**

    -   Розбиття інтерфейсу на невеликі, перевикористовувані компоненти.
    -   Передача даних та функцій між компонентами через пропси.

3.  **Управління станом:**

    -   Активне використання хуків `useState` та `useEffect` для управління станом завантаження, помилок, списку фільмів та обраного фільму.

4.  **Строга типізація з TypeScript:**

    -   Типізація пропсів компонентів, стану, та даних, що повертаються з API. Це допомогло уникнути багатьох помилок ще на етапі розробки.

5.  **Реалізація модального вікна:**

    -   Використання `createPortal` для рендерингу модального вікна поза основним DOM-деревом.
    -   Додавання функціоналу для закриття вікна по кліку на бекдроп та натисканню клавіші `Escape`.

Це дозволило не просто створити робочий застосунок, а й глибоко зрозуміти ключові механізми, що лежать в основі сучасних React-застосунків.

---

## 🇬🇧 English Version

# Search for movies by pagination from the TMDB service.

This project is an educational web application for searching movies, built with **React** and **TypeScript**. It allows users to search for movies by keyword, view results as a grid of posters, and get detailed information about each movie in a modal window.

The application interacts with the public API of [The Movie Database (TMDB)](https://www.themoviedb.org/).

---

## ⚙️ Technologies and Tools

-   **React:** A modern library for building user interfaces.
-   **TypeScript:** Adds static typing to JavaScript, making the code more reliable.
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

## ✨ Key Focus Areas for a Beginner Developer

This project served as excellent practice for mastering fundamental concepts of modern web development. The main focus was on the following areas:

1.  **Working with APIs:**

    -   Making asynchronous requests using `async/await`.
    -   Handling successful responses and errors (`try...catch`).
    -   Using environment variables (`.env`) to securely store API tokens.

2.  **Component-Based Approach:**

    -   Breaking down the UI into small, reusable components.
    -   Passing data and functions between components via props.

3.  **State Management:**

    -   Actively using `useState` and `useEffect` hooks to manage loading state, errors, the list of movies, and the selected movie.

4.  **Strict Typing with TypeScript:**

    -   Typing component props, state, and API response data. This helped prevent many bugs during the development stage.

5.  **Implementing a Modal Window:**

    -   Using `createPortal` to render the modal outside the main DOM tree.
    -   Adding functionality to close the modal by clicking on the backdrop or pressing the `Escape` key.

This approach allowed not just to create a functional application, but also to gain a deep understanding of the key mechanisms underlying modern React applications.
