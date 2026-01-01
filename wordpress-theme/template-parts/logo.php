<div class="relative group <?php echo $args['className'] ?? ''; ?>">
    <svg
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
        class="w-full h-full"
        fill="currentColor"
    >
        <!-- Top Left - Corner Bracket -->
        <path
            d="M45 25 H25 V45 H9 C6.791 45 5 43.209 5 41 V9 C5 6.791 6.791 5 9 5 H41 C43.209 5 45 6.791 45 9 V25 Z"
            class="logo-draw-path logo-part-1 transition-transform duration-300 ease-out group-hover:scale-90 origin-top-left"
        />

        <!-- Top Right - Diagonal Arrow pointing NE -->
        <path
            d="M 60 5 H 95 V 40 L 75 40 L 75 25 L 50 50 L 40 40 L 65 15 L 50 15 V 5 H 60 Z"
            class="logo-draw-path logo-part-2 transition-transform duration-300 ease-out group-hover:scale-90 origin-top-right"
        />

        <!-- Bottom Left - Square with Extra Heavy Uniform Border (12 units thick) and rounded right corners -->
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M 5 55 H 39 Q 45 55 45 61 V 89 Q 45 95 39 95 H 5 Z M 17 67 H 33 V 83 H 17 Z"
            class="logo-draw-path logo-part-3 transition-transform duration-300 ease-out group-hover:scale-90 origin-bottom-left"
        />

        <!-- Bottom Right - Corner Bracket -->
        <path
            d="M55 75 H75 V55 H91 C93.209 55 95 56.791 95 59 V91 C95 93.209 93.209 95 91 95 H59 C56.791 95 55 93.209 55 91 V75 Z"
            class="logo-draw-path logo-part-4 transition-transform duration-300 ease-out group-hover:scale-90 origin-bottom-right"
        />
    </svg>
</div>

<style>
.logo-draw-path {
    stroke-dasharray: 1000;
    stroke-dashoffset: 1000;
    animation: draw 2s ease-in-out forwards;
}

.logo-part-1 { animation-delay: 0.1s; }
.logo-part-2 { animation-delay: 0.3s; }
.logo-part-3 { animation-delay: 0.5s; }
.logo-part-4 { animation-delay: 0.7s; }

@keyframes draw {
    to {
        stroke-dashoffset: 0;
    }
}
</style>
