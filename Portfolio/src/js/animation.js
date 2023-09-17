    let lastScrollPosition = 0;
    const headerItems = document.querySelectorAll('.js-header-item');
    const header = document.querySelector('.header__nav-container');

    window.addEventListener('scroll', () => {
        const currentScrollPosition = window.pageYOffset;

        if (currentScrollPosition > lastScrollPosition && currentScrollPosition > 100) {
            // Scrolling down, hide header and items
            headerItems.forEach(item => item.classList.add('hidden1'));
            header.classList.add('hidden1');
        } else {
            // Scrolling up or at the top, show header and items
            headerItems.forEach(item => item.classList.remove('hidden1'));
            header.classList.remove('hidden1');
        }

        lastScrollPosition = currentScrollPosition;
    });








    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });