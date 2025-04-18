const styles = {
    // Основной контейнер
    container: {
        backgroundColor: "rgb(255, 255, 255)", // Белый фон
        color: "rgb(0, 0, 255)", // Синий текст
        padding: "20px",
        borderRadius: "10px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
    },
    containerHover: {
        transform: "scale(1.05)", // Увеличение при наведении
        boxShadow: "0 8px 16px rgba(0, 0, 0, 0.3)",
    },

    // Заголовки
    header: {
        fontSize: "36px",
        fontWeight: "bold",
        color: "rgb(255, 0, 0)", // Красный текст
        textShadow: "2px 2px 4px rgba(0, 0, 255, 0.5)", // Синяя тень
        marginBottom: "20px",
        animation: "fadeIn 1s ease",
    },
    subHeader: {
        fontSize: "24px",
        fontWeight: "bold",
        color: "rgb(0, 0, 255)", // Синий текст
        textShadow: "1px 1px 3px rgba(255, 0, 0, 0.5)", // Красная тень
        marginBottom: "15px",
    },

    // Кнопки
    button: {
        backgroundColor: "rgb(255, 0, 0)", // Красный фон
        color: "rgb(255, 255, 255)", // Белый текст
        border: "2px solid rgb(0, 0, 255)", // Синяя рамка
        borderRadius: "8px",
        padding: "10px 20px",
        cursor: "pointer",
        fontSize: "16px",
        fontWeight: "bold",
        transition: "background-color 0.3s ease, transform 0.2s ease",
    },
    buttonHover: {
        backgroundColor: "rgb(0, 0, 255)", // Синий фон при наведении
        color: "rgb(255, 255, 255)", // Белый текст
        transform: "scale(1.1)", // Увеличение кнопки
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
    },

    // Текстовые стили
    text: {
        color: "rgb(0, 0, 255)", // Синий текст
        fontSize: "18px",
        lineHeight: "1.6",
    },
    highlightedText: {
        color: "rgb(255, 0, 0)", // Красный текст
        fontWeight: "bold",
        fontSize: "20px",
        textDecoration: "underline",
        animation: "pulse 1.5s infinite",
    },

    // Карточки
    card: {
        backgroundColor: "rgb(255, 255, 255)", // Белый фон
        border: "2px solid rgb(0, 0, 255)", // Синяя рамка
        borderRadius: "10px",
        padding: "15px",
        margin: "10px",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
    },
    cardHover: {
        transform: "scale(1.05)", // Увеличение при наведении
        boxShadow: "0 8px 12px rgba(0, 0, 0, 0.2)",
    },

    // Таблицы
    table: {
        width: "100%",
        borderCollapse: "collapse",
        backgroundColor: "rgb(255, 255, 255)", // Белый фон
        border: "2px solid rgb(0, 0, 255)", // Синяя рамка
    },
    tableHeader: {
        backgroundColor: "rgb(0, 0, 255)", // Синий фон
        color: "rgb(255, 255, 255)", // Белый текст
        fontWeight: "bold",
    },
    tableRow: {
        backgroundColor: "rgb(255, 255, 255)", // Белый фон
        color: "rgb(0, 0, 255)", // Синий текст
    },
    tableRowHover: {
        backgroundColor: "rgb(255, 0, 0)", // Красный фон при наведении
        color: "rgb(255, 255, 255)", // Белый текст
    },

    // Прогресс-бар
    progressBar: {
        backgroundColor: "rgb(211, 211, 211)", // Светло-серый фон
        borderRadius: "10px",
        overflow: "hidden",
        height: "20px",
    },
    progress: {
        backgroundColor: "rgb(0, 0, 255)", // Синий прогресс
        height: "100%",
        width: "50%", // Пример ширины
        boxShadow: "0 0 10px rgb(0, 0, 255)",
    },

    // Фоновые эффекты
    gradientBackground: {
        background: "linear-gradient(135deg, rgb(255, 0, 0), rgb(255, 255, 255), rgb(0, 0, 255))",
        backgroundSize: "400% 400%",
        animation: "gradientAnimation 10s ease infinite",
    },
    gradientAnimation: `
        @keyframes gradientAnimation {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
        }
    `,

    // Неоновый текст
    neonText: {
        color: "rgb(255, 255, 255)", // Белый текст
        textShadow: "0 0 5px rgb(0, 0, 255), 0 0 10px rgb(255, 0, 0), 0 0 20px rgb(0, 0, 255)",
        fontSize: "24px",
        fontWeight: "bold",
        animation: "glow 1.5s infinite",
    },

    // Анимация для неона
    glow: `
        @keyframes glow {
            0% { text-shadow: 0 0 5px rgb(0, 0, 255), 0 0 10px rgb(255, 0, 0); }
            50% { text-shadow: 0 0 10px rgb(0, 0, 255), 0 0 20px rgb(255, 0, 0); }
            100% { text-shadow: 0 0 5px rgb(0, 0, 255), 0 0 10px rgb(255, 0, 0); }
        }
    `,

    // Бейджи
    badge: {
        backgroundColor: "rgb(255, 0, 0)", // Красный фон
        color: "rgb(255, 255, 255)", // Белый текст
        padding: "5px 10px",
        borderRadius: "12px",
        fontSize: "12px",
        fontWeight: "bold",
        boxShadow: "0 0 10px rgb(255, 0, 0)",
    },
};

export default styles;