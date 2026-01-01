(function($) {
    'use strict';
    let isMenuOpen = false;

    // Mobile Menu Toggle
    window.dmsToggleMobileMenu = function() {
        const overlay = document.getElementById('mobile-menu-overlay');
        const header = document.querySelector('header');
        
        isMenuOpen = !isMenuOpen;

        if (isMenuOpen) {
            overlay.classList.remove('translate-x-full');
            overlay.classList.add('translate-x-0');
            document.body.style.overflow = 'hidden';
        } else {
            overlay.classList.remove('translate-x-0');
            overlay.classList.add('translate-x-full');
            document.body.style.overflow = 'unset';
        }
    };

    // Scroll Reveal
    document.addEventListener('DOMContentLoaded', function() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) entry.target.classList.add("animated");
            });
        }, { threshold: 0.1 });

        document.querySelectorAll(".will-animate").forEach((el) => observer.observe(el));
        
        // Logo Animation
        document.querySelectorAll('.logo-draw-path').forEach((path, index) => {
            path.style.strokeDasharray = '1000';
            path.style.strokeDashoffset = '1000';
            path.style.animation = `draw 2s ease-in-out forwards ${0.1 + index * 0.2}s`;
        });
    });
})(jQuery);