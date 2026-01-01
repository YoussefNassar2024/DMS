<?php get_header(); ?>

<main class="max-w-4xl mx-auto px-6 py-20">
    <?php while (have_posts()) : the_post(); ?>
        <h1 class="text-4xl font-bold mb-6"><?php the_title(); ?></h1>

        <div class="prose max-w-none">
            <?php the_content(); ?>
        </div>
    <?php endwhile; ?>
</main>

<?php get_footer(); ?>
