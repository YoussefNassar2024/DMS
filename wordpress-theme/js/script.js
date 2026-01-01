// Dependable Marketing Solutions Theme JavaScript

(function($) {
    'use strict';

    let isMenuOpen = false;

    // Mobile menu functionality
    window.dmsToggleMobileMenu = function() {
        const overlay = document.getElementById('mobile-menu-overlay');
        const toggle = document.getElementById('mobile-menu-toggle');
        const line1 = document.getElementById('menu-line-1');
        const line2 = document.getElementById('menu-line-2');
        const line3 = document.getElementById('menu-line-3');
        const header = document.getElementById('mobile-menu-header');

        if (!overlay || !toggle) return;

        isMenuOpen = !isMenuOpen;

        if (isMenuOpen) {
            overlay.classList.remove('translate-x-full');
            overlay.classList.add('translate-x-0');
            toggle.classList.add('text-white');
            if (line1) line1.classList.add('rotate-45', 'translate-y-2');
            if (line2) line2.classList.add('opacity-0');
            if (line3) line3.classList.add('-rotate-45', '-translate-y-2');
            if (header) header.style.animation = 'fadeInDown 0.6s ease forwards 0.1s';
            document.body.style.overflow = 'hidden';
        } else {
            overlay.classList.remove('translate-x-0');
            overlay.classList.add('translate-x-full');
            toggle.classList.remove('text-white');
            if (line1) line1.classList.remove('rotate-45', 'translate-y-2');
            if (line2) line2.classList.remove('opacity-0');
            if (line3) line3.classList.remove('-rotate-45', '-translate-y-2');
            if (header) header.style.animation = '';
            document.body.style.overflow = 'unset';
        }
    };

    // Scroll reveal functionality
    function initScrollReveal() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: "0px 0px -50px 0px",
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("animated");
                }
            });
        }, observerOptions);

        document.querySelectorAll(".will-animate").forEach((el) => {
            if (el) observer.observe(el);
        });
    }

    // Header scroll effect
    function initHeaderScroll() {
        const header = document.querySelector('header');
        if (!header) return;

        window.addEventListener('scroll', function() {
            const scrolled = window.scrollY > 20;

            if (scrolled) {
                header.classList.add('py-3');
                header.classList.remove('py-6');
            } else {
                header.classList.remove('py-3');
                header.classList.add('py-6');
            }
        });
    }

    // Close menu when clicking outside
    function initMenuClose() {
        document.addEventListener('click', function(e) {
            const overlay = document.getElementById('mobile-menu-overlay');
            const toggle = document.getElementById('mobile-menu-toggle');

            if (overlay && toggle && !overlay.contains(e.target) && !toggle.contains(e.target) && isMenuOpen) {
                window.dmsToggleMobileMenu();
            }
        });
    }

    // Initialize all functionality
    function init() {
        initScrollReveal();
        initHeaderScroll();
        initMenuClose();

        // Logo animation on page load
        const logoPaths = document.querySelectorAll('.logo-draw-path');
        logoPaths.forEach((path, index) => {
            if (path) {
                path.style.strokeDasharray = '1000';
                path.style.strokeDashoffset = '1000';
                path.style.animation = `draw 2s ease-in-out forwards ${0.1 + index * 0.2}s`;
            }
        });
    }

    // Run when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

})(jQuery);

// CSS animations
const style = document.createElement('style');
style.textContent = `
    @keyframes draw {
        to {
            stroke-dashoffset: 0;
        }
    }

    @keyframes fadeInDown {
        from {
            opacity: 0;
            transform: translateY(-20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(style);
