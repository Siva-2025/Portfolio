document.addEventListener('DOMContentLoaded', () => {
    const aboutSection = document.querySelector('#about .fade-in');
    setTimeout(() => {
        aboutSection.classList.add('visible');
    }, 100);
});
