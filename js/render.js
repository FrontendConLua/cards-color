document.addEventListener('DOMContentLoaded', () => {
    const cardsData = [
        {
            name: "Opened",
            count: 311,
            emoji: "🎭",
            background: "radial-gradient(at top right, #88E7FD 0%, #086478 100%)"
        },
        {
            name: "Clicked",
            count: 450,
            emoji: "👍",
            background: "radial-gradient(at top right, #FFD700 0%, #FF8C00 100%)"
        },
        {
            name: "Liked",
            count: 523,
            emoji: "❤️",
            background: "radial-gradient(at top right, #FF69B4 0%, #C71585 100%)"
        },
        {
            name: "Shared",
            count: 217,
            emoji: "🧶",
            background: "radial-gradient(at top right, #98FB98 0%, #008000 100%)"
        },
        { 
            name: "Viewed",
            count: 789,
            emoji: "👀",
            background: "radial-gradient(at top right, #ADD8E6 0%, #00008B 100%)"
        },
        {
            name: "Saved",
            count: 600,
            emoji: "👛",
            background: "radial-gradient(at top right, #FFB6C1 0%, #8B0000 100%)"
        }
    ];
    const cardContainer = document.querySelector('.card_container');
    const template = document.getElementById('card-template').content;

    cardsData.forEach(card => {
        // Clonar el template
        const clone = document.importNode(template, true);

        // Actualizar el contenido del template
        clone.querySelector('.card__description-name').textContent = card.name;
        clone.querySelector('.card__description-count').textContent = card.count;
        clone.querySelector('.card__emoji').textContent = card.emoji;

        // Aplicar el fondo específico a la card
        clone.querySelector('.card').style.background = card.background;

        // Añadir la card clonada al contenedor
        cardContainer.appendChild(clone);
    });
});
