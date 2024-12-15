document.addEventListener('DOMContentLoaded', () => {
    // Add dynamic effects if needed
    const navLinks = document.querySelectorAll('.menu li a');
    navLinks.forEach(link => {
        link.addEventListener('mouseover', () => {
            link.style.transform = 'scale(1.2)';
        });
        link.addEventListener('mouseout', () => {
            link.style.transform = 'scale(1)';
        });
    });

    const banner = document.querySelector('.banner');
    banner.addEventListener('mousemove', (e) => {
        let x = (window.innerWidth - e.pageX * 2) / 100;
        let y = (window.innerHeight - e.pageY * 2) / 100;
        banner.style.backgroundPositionX = x + 'px';
        banner.style.backgroundPositionY = y + 'px';
    });
});
