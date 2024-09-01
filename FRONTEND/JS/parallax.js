document.addEventListener('DOMContentLoaded', function () {
    const divs = document.querySelectorAll('.more-wrapper, .about-wrapper, .learn-wrapper, .end-wrapper');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1; // Fade in
            } else {
                entry.target.style.opacity = 0; // Fade out
            }
        });
    }, { threshold: 0.1 });

    divs.forEach(div => {
        observer.observe(div);
    });
});
