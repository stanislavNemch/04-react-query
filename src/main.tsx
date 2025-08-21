// Цей файл — точка входу додатку.
// - Створює React root і монтує кореневий компонент <App /> в DOM.
// - Тут підключається глобальний CSS (index.css).
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./components/App/App";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <App />
    </StrictMode>
);
