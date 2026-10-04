document.addEventListener('DOMContentLoaded', () => {
    // Theme Switcher
    const themeToggleBtn = document.getElementById('themeToggleBtn');
    const body = document.body;

    const savedTheme = localStorage.getItem('app_theme') || 'dark';
    setTheme(savedTheme);

    themeToggleBtn.addEventListener('click', () => {
        const currentTheme = body.classList.contains('dark-theme') ? 'dark' : 'light';
        setTheme(currentTheme === 'dark' ? 'light' : 'dark');
    });

    function setTheme(theme) {
        if (theme === 'light') {
            body.classList.remove('dark-theme');
            body.classList.add('light-theme');
            themeToggleBtn.innerHTML = '<i class="fa-solid fa-moon"></i>';
            localStorage.setItem('app_theme', 'light');
        } else {
            body.classList.remove('light-theme');
            body.classList.add('dark-theme');
            themeToggleBtn.innerHTML = '<i class="fa-solid fa-sun"></i>';
            localStorage.setItem('app_theme', 'dark');
        }
    }

    // Dynamic Filter Tabs
    const filterBtns = document.querySelectorAll('.filter-btn');
    const toolCards = document.querySelectorAll('.tool-card');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filter = btn.getAttribute('data-filter');

            toolCards.forEach(card => {
                const category = card.getAttribute('data-category');
                if (filter === 'all' || category === filter) {
                    card.style.display = 'flex';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });

    // Modals Control Elements
    const proModal = document.getElementById('proModal');
    const dealsModal = document.getElementById('dealsModal');
    const closeProModal = document.getElementById('closeProModal');
    const closeDealsModal = document.getElementById('closeDealsModal');

    // Navigation Click Actions
    document.getElementById('navProBundle').addEventListener('click', () => proModal.classList.add('active'));
    document.getElementById('sidebarCheckDeals').addEventListener('click', () => dealsModal.classList.add('active'));
    document.getElementById('topLearnMore').addEventListener('click', (e) => {
        e.preventDefault();
        dealsModal.classList.add('active');
    });

    // Close Modals
    closeProModal.addEventListener('click', () => proModal.classList.remove('active'));
    closeDealsModal.addEventListener('click', () => dealsModal.classList.remove('active'));

    window.addEventListener('click', (e) => {
        if (e.target === proModal) proModal.classList.remove('active');
        if (e.target === dealsModal) dealsModal.classList.remove('active');
    });

    document.getElementById('buyProBtn').addEventListener('click', () => {
        alert('Redirecting to Master 10-in-1 Suite Commercial Licensing...');
    });
});
