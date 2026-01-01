<?php get_header(); ?>

<main class="max-w-5xl mx-auto px-6 py-32 text-center">
    <h1 class="text-6xl font-bold mb-6">404</h1>
    <p class="text-gray-600 mb-8">
        The page you’re looking for doesn’t exist.
    </p>
    <a href="<?php echo home_url('/'); ?>" class="text-blue-600 underline">
        Go back home
    </a>
</main>

<?php get_footer(); ?>
