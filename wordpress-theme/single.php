<?php get_header(); ?>

<main class="max-w-3xl mx-auto px-6 py-20">

    <?php while (have_posts()) : the_post(); ?>
        <article>
            <h1 class="text-4xl font-bold mb-4"><?php the_title(); ?></h1>

            <p class="text-sm text-gray-500 mb-10">
                <?php echo get_the_date(); ?>
            </p>

            <div class="prose max-w-none">
                <?php the_content(); ?>
            </div>
        </article>
    <?php endwhile; ?>

</main>

<?php get_footer(); ?>
