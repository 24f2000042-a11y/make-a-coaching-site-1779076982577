document.addEventListener('DOMContentLoaded', function() {
    const nav = document.querySelector('nav');
    const heroSection = document.querySelector('header');

    function handleScroll() {
        if (window.scrollY > heroSection.offsetHeight * 0.5) {
            nav.style.backgroundColor = 'rgba(0, 119, 182, 0.9)';
        } else {
            nav.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
        }
    }

    window.addEventListener('scroll', handleScroll);

    // Simple Scroll Reveal Animation
    const scrollRevealElements = document.querySelectorAll('[data-scroll-reveal]');

    function checkScrollReveal() {
        scrollRevealElements.forEach(el => {
            const rect = el.getBoundingClientRect();
            const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;

            if (isVisible) {
                el.setAttribute('data-scroll-reveal', 'enter.active');
            } else {
                // Optional: Reset if you want elements to re-animate on scroll up
                // el.setAttribute('data-scroll-reveal', 'enter');
            }
        });
    }

    window.addEventListener('scroll', checkScrollReveal);
    checkScrollReveal(); // Initial check on load

    // Add data-scroll-reveal attributes to elements that should animate
    document.querySelectorAll('section > .container > h2, .about-content, .course-cards .card, .testimonial-cards .testimonial, .contact-content').forEach(el => {
        el.setAttribute('data-scroll-reveal', 'enter');
    });
});
