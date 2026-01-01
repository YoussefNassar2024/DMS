<?php get_header(); ?>

<main class="max-w-5xl mx-auto px-6 py-20">

    <?php if (have_posts()) : ?>
        <?php while (have_posts()) : the_post(); ?>
            <h1 class="text-4xl font-bold mb-8">
                <?php the_title(); ?>
            </h1>

            <div class="prose max-w-none">
                <?php the_content(); ?>
            </div>
        <?php endwhile; ?>
    <?php endif; ?>

</main>

<?php get_footer(); ?>
