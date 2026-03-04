document.addEventListener('DOMContentLoaded', () => {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const menuCards = document.querySelectorAll('.menu-card');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Prevent multiple clicks on the active button
            if (button.classList.contains('active')) return;

            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            button.classList.add('active');

            const filterValue = button.getAttribute('data-filter');

            // Show/Hide cards with smooth transition
            menuCards.forEach(card => {
                // Remove animation initially to avoid conflict with opacity transition
                card.style.animation = 'none';
                
                // Fade out current cards
                card.style.opacity = '0';
                
                setTimeout(() => {
                    // Show or hide based on data-category matching data-filter
                    if (filterValue === 'all' || card.getAttribute('data-category') === filterValue) {
                        card.style.display = 'flex';
                        // Force a browser reflow before fading in
                        void card.offsetWidth;
                        card.style.opacity = '1';
                    } else {
                        card.style.display = 'none';
                    }
                }, 300); // 300ms matches the CSS transition duration
            });
        });
    });
});
