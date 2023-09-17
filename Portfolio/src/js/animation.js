let lastScroll = 0;
const headerNavContainer = document.querySelector('.header__nav-container');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > lastScroll) {
        // Scrolling down
        headerNavContainer.classList.remove('visible');
        headerNavContainer.classList.add('hidden');
    } else {
        // Scrolling up
        headerNavContainer.classList.remove('hidden');
        headerNavContainer.classList.add('visible');
    }

    lastScroll = currentScroll;
});

let lastScrollPosition = 0;

        const headerItems = document.querySelectorAll('.js-header-item');

        window.addEventListener('scroll', () => {
            const currentScrollPosition = window.scrollY;

            // Determine the scroll direction
            const scrollDirection = currentScrollPosition > lastScrollPosition ? 'down' : 'up';
            lastScrollPosition = currentScrollPosition;

            // Hide/show list items based on the scroll direction
            headerItems.forEach(item => {
                const itemId = item.getAttribute('id');
                const target = document.getElementById(itemId);

                if (scrollDirection === 'down') {
                    target.classList.add('hidden');
                } else {
                    target.classList.remove('hidden');
                }
            });
        });