function setTheme(themeName) {
    localStorage.setItem('theme', themeName);
    document.documentElement.setAttribute('data-theme', themeName);
}

// Immediately invoked to avoid flash of unstyled content
(function () {
    const savedTheme = localStorage.getItem('theme') || 'teal';
    document.documentElement.setAttribute('data-theme', savedTheme);
})();