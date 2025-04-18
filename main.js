import styles from './styles.js';

// Пример применения стилей к элементам
document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.container');
    if (container) {
        Object.assign(container.style, styles.container);
    }

    const header = document.querySelector('h1');
    if (header) {
        Object.assign(header.style, styles.header);
    }

    const button = document.querySelector('button');
    if (button) {
        Object.assign(button.style, styles.button);

        // Добавляем эффекты наведения
        button.addEventListener('mouseenter', () => {
            Object.assign(button.style, styles.buttonHover);
        });
        button.addEventListener('mouseleave', () => {
            Object.assign(button.style, styles.button);
        });
    }
});