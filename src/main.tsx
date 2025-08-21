// Цей файл - точка входу до програми.
// - створює React root і монтує кореневий компонент <App /> в DOM.
// - Тут підключається глобальний CSS (index.css).
// - Налаштовуємо клієнт TanStack Query та обертаємо App у QueryClientProvider.
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./index.css";
import App from "./components/App/App";

// Створюємо екземпляр QueryClient для керування кешуванням запитів.
const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        {/* Надаємо доступ до queryClient всім дочірнім компонентам. */}
        <QueryClientProvider client={queryClient}>
            <App />
        </QueryClientProvider>
    </StrictMode>
);
