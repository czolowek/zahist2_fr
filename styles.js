const styles = {
    // Основной контейнер
    container: {
        backgroundColor: "rgb(240, 248, 255)", // Светло-голубой фон
        color: "rgb(0, 0, 139)", // Темно-синий текст
        padding: "30px",
        borderRadius: "15px",
        boxShadow: "0 6px 12px rgba(0, 0, 0, 0.3)",
        transition: "transform 0.4s ease, box-shadow 0.4s ease, background-color 0.4s ease",
        animation: "fadeIn 1s ease",
    },
    containerHover: {
        transform: "scale(1.08)", // Увеличение при наведении
        boxShadow: "0 10px 20px rgba(0, 0, 0, 0.4)",
        backgroundColor: "rgb(230, 240, 255)", // Более светлый фон
        animation: "pulse 1.5s infinite",
    },

    // Заголовки
    header: {
        fontSize: "40px",
        fontWeight: "bold",
        color: "rgb(220, 20, 60)", // Красный текст
        textShadow: "3px 3px 6px rgba(0, 0, 0, 0.5)", // Черная тень
        marginBottom: "25px",
        animation: "slideInFromLeft 1s ease",
    },
    subHeader: {
        fontSize: "28px",
        fontWeight: "bold",
        color: "rgb(0, 100, 0)", // Зеленый текст
        textShadow: "2px 2px 5px rgba(0, 0, 0, 0.4)", // Черная тень
        marginBottom: "20px",
        animation: "slideInFromRight 1s ease",
    },

    // Кнопки
    button: {
        backgroundColor: "rgb(255, 69, 0)", // Оранжево-красный фон
        color: "rgb(255, 255, 255)", // Белый текст
        border: "2px solid rgb(0, 0, 139)", // Темно-синяя рамка
        borderRadius: "10px",
        padding: "12px 25px",
        cursor: "pointer",
        fontSize: "18px",
        fontWeight: "bold",
        transition: "background-color 0.4s ease, transform 0.3s ease, box-shadow 0.3s ease",
        animation: "bounce 2s infinite",
    },
    buttonHover: {
        backgroundColor: "rgb(0, 0, 139)", // Темно-синий фон при наведении
        color: "rgb(255, 255, 255)", // Белый текст
        transform: "scale(1.15)", // Увеличение кнопки
        boxShadow: "0 6px 12px rgba(0, 0, 0, 0.4)",
        animation: "shake 0.5s ease",
    },

    // Карточки
    card: {
        backgroundColor: "rgb(255, 255, 255)", // Белый фон
        border: "2px solid rgb(70, 130, 180)", // Стальной синий
        borderRadius: "12px",
        padding: "20px",
        margin: "15px",
        boxShadow: "0 5px 10px rgba(0, 0, 0, 0.2)",
        transition: "transform 0.4s ease, box-shadow 0.4s ease",
        animation: "fadeInUp 1s ease",
    },
    cardHover: {
        transform: "scale(1.1)", // Увеличение при наведении
        boxShadow: "0 10px 15px rgba(0, 0, 0, 0.3)",
        animation: "pulse 1.5s infinite",
    },

    // Текстовые стили
    text: {
        color: "rgb(25, 25, 112)", // Темно-синий текст
        fontSize: "20px",
        lineHeight: "1.8",
        animation: "fadeIn 1s ease",
    },
    highlightedText: {
        color: "rgb(255, 69, 0)", // Оранжево-красный текст
        fontWeight: "bold",
        fontSize: "22px",
        textDecoration: "underline",
        animation: "pulse 1.8s infinite",
    },

    // Таблицы
    table: {
        width: "100%",
        borderCollapse: "collapse",
        backgroundColor: "rgb(245, 245, 245)", // Светло-серый фон
        border: "2px solid rgb(70, 130, 180)", // Стальной синий
        animation: "fadeIn 1s ease",
    },
    tableHeader: {
        backgroundColor: "rgb(70, 130, 180)", // Стальной синий фон
        color: "rgb(255, 255, 255)", // Белый текст
        fontWeight: "bold",
    },
    tableRow: {
        backgroundColor: "rgb(255, 255, 255)", // Белый фон
        color: "rgb(25, 25, 112)", // Темно-синий текст
    },
    tableRowHover: {
        backgroundColor: "rgb(255, 69, 0)", // Оранжево-красный фон при наведении
        color: "rgb(255, 255, 255)", // Белый текст
        animation: "highlight 0.5s ease",
    },

    // Прогресс-бар
    progressBar: {
        backgroundColor: "rgb(211, 211, 211)", // Светло-серый фон
        borderRadius: "12px",
        overflow: "hidden",
        height: "25px",
        animation: "fadeIn 1s ease",
    },
    progress: {
        backgroundColor: "rgb(70, 130, 180)", // Стальной синий прогресс
        height: "100%",
        width: "60%", // Пример ширины
        boxShadow: "0 0 12px rgb(70, 130, 180)",
        animation: "progressBar 2s ease infinite",
    },

    // Фоновые эффекты
    gradientBackground: {
        background: "linear-gradient(135deg, rgb(255, 69, 0), rgb(255, 255, 255), rgb(70, 130, 180))",
        backgroundSize: "500% 500%",
        animation: "gradientAnimation 12s ease infinite",
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
        textShadow: "0 0 8px rgb(70, 130, 180), 0 0 16px rgb(255, 69, 0), 0 0 24px rgb(70, 130, 180)",
        fontSize: "26px",
        fontWeight: "bold",
        animation: "glow 2s infinite",
    },

    // Анимация для неона
    glow: `
        @keyframes glow {
            0% { text-shadow: 0 0 8px rgb(70, 130, 180), 0 0 16px rgb(255, 69, 0); }
            50% { text-shadow: 0 0 16px rgb(70, 130, 180), 0 0 24px rgb(255, 69, 0); }
            100% { text-shadow: 0 0 8px rgb(70, 130, 180), 0 0 16px rgb(255, 69, 0); }
        }
    `,

    // Бейджи
    badge: {
        backgroundColor: "rgb(255, 69, 0)", // Оранжево-красный фон
        color: "rgb(255, 255, 255)", // Белый текст
        padding: "8px 15px",
        borderRadius: "15px",
        fontSize: "14px",
        fontWeight: "bold",
        boxShadow: "0 0 12px rgb(255, 69, 0)",
    },

    // Анимации
    "@keyframes fadeIn": `
        0% { opacity: 0; }
        100% { opacity: 1; }
    `,
    "@keyframes slideInFromLeft": `
        0% { transform: translateX(-100%); opacity: 0; }
        100% { transform: translateX(0); opacity: 1; }
    `,
    "@keyframes slideInFromRight": `
        0% { transform: translateX(100%); opacity: 0; }
        100% { transform: translateX(0); opacity: 1; }
    `,
    "@keyframes bounce": `
        0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
        40% { transform: translateY(-10px); }
        60% { transform: translateY(-5px); }
    `,
    "@keyframes pulse": `
        0% { transform: scale(1); }
        50% { transform: scale(1.05); }
        100% { transform: scale(1); }
    `,
    "@keyframes shake": `
        0%, 100% { transform: translateX(0); }
        25% { transform: translateX(-5px); }
        50% { transform: translateX(5px); }
        75% { transform: translateX(-5px); }
    `,
    "@keyframes fadeInUp": `
        0% { transform: translateY(20px); opacity: 0; }
        100% { transform: translateY(0); opacity: 1; }
    `,
    "@keyframes progressBar": `
        0% { width: 0; }
        100% { width: 60%; }
    `,
};

export default styles;